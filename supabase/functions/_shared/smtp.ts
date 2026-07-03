// Shared SMTP helper for all Supabase Edge Functions.
//
// Transport strategy (in order):
//   1. If BREVO_API_KEY is set, send via Brevo's HTTPS transactional API
//      (avoids Deno raw-socket instability entirely).
//   2. Else try SMTP on the configured port. If that fails and it was 465,
//      auto-fall-back to 587 STARTTLS (and vice versa) once.
//
// SMTP config (env secrets):
//   SMTP_HOST, SMTP_PORT (default 465), SMTP_SECURE (default true),
//   SMTP_USER, SMTP_PASS
//
// Optional HTTPS transport (env secret):
//   BREVO_API_KEY  — enables Brevo transactional API as primary transport.
//
// SMTP_PASS / BREVO_API_KEY are NEVER logged or returned in responses.

import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

export interface SmtpMessage {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  fromName?: string;
}

export interface SmtpResult {
  id: string;
  accepted?: number;
  transport?: "brevo" | "smtp";
}

const bool = (v: string | undefined, dflt = false) => {
  if (v === undefined) return dflt;
  return /^(1|true|yes|on)$/i.test(v.trim());
};

async function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return await Promise.race([
    p,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms),
    ),
  ]);
}

async function sendViaBrevo(msg: SmtpMessage, senderEmail: string): Promise<SmtpResult> {
  const key = Deno.env.get("BREVO_API_KEY");
  if (!key) throw new Error("BREVO_API_KEY missing");
  const toList = (Array.isArray(msg.to) ? msg.to : [msg.to]).map((email) => ({ email }));
  const body = {
    sender: { email: senderEmail, name: msg.fromName ?? "DarkThreat" },
    to: toList,
    subject: msg.subject,
    htmlContent: msg.html,
    textContent: msg.text ?? msg.html.replace(/<[^>]+>/g, " "),
    replyTo: msg.replyTo ? { email: msg.replyTo } : undefined,
  };
  const res = await withTimeout(
    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": key,
      },
      body: JSON.stringify(body),
    }),
    15_000,
    "brevo:http",
  );
  const rawText = await res.text();
  if (!res.ok) {
    console.error("[smtp] Brevo HTTP send failed", {
      status: res.status,
      statusText: res.statusText,
      body: rawText.slice(0, 500),
    });
    throw new Error(`Brevo API ${res.status}: ${rawText.slice(0, 200)}`);
  }
  let parsed: { messageId?: string } = {};
  try { parsed = JSON.parse(rawText); } catch { /* noop */ }
  return { id: parsed.messageId ?? crypto.randomUUID(), accepted: toList.length, transport: "brevo" };
}

async function sendViaSmtp(msg: SmtpMessage, port: number, secure: boolean): Promise<SmtpResult> {
  const host = Deno.env.get("SMTP_HOST");
  const user = Deno.env.get("SMTP_USER");
  const pass = Deno.env.get("SMTP_PASS");
  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are not configured (SMTP_HOST/SMTP_USER/SMTP_PASS)");
  }

  const client = new SMTPClient({
    connection: {
      hostname: host,
      port,
      tls: secure, // true = implicit TLS on 465; false = STARTTLS on 587
      auth: { username: user, password: pass },
    },
    pool: false,
    debug: { log: false, allowUnsecure: false, encodeLB: false, noStartTLS: false },
  });

  const senderEmail = Deno.env.get("SENDER_EMAIL") ?? user;
  const fromName = msg.fromName ?? "DarkThreat";
  const from = `${fromName} <${senderEmail}>`;
  const toList = Array.isArray(msg.to) ? msg.to : [msg.to];

  try {
    await withTimeout(
      client.send({
        from,
        to: toList,
        replyTo: msg.replyTo,
        subject: msg.subject,
        content: msg.text ?? msg.html.replace(/<[^>]+>/g, " "),
        html: msg.html,
      }),
      15_000,
      `smtp:${host}:${port}`,
    );
    return { id: crypto.randomUUID(), accepted: toList.length, transport: "smtp" };
  } finally {
    try { await client.close(); } catch { /* noop */ }
  }
}

export async function sendSmtp(msg: SmtpMessage): Promise<SmtpResult> {
  // Prefer Brevo HTTP API if a key is configured — most reliable in Supabase edge runtime.
  if (Deno.env.get("BREVO_API_KEY")) {
    const senderEmail = Deno.env.get("SENDER_EMAIL") ?? Deno.env.get("SMTP_USER") ?? "no-reply@darkthreat.ai";
    try {
      return await sendViaBrevo(msg, senderEmail);
    } catch (e) {
      console.error("[smtp] Brevo transport failed, falling back to SMTP", e);
    }
  }

  const primaryPort = Number(Deno.env.get("SMTP_PORT") ?? "465");
  const primarySecure = bool(Deno.env.get("SMTP_SECURE"), primaryPort === 465);

  try {
    return await sendViaSmtp(msg, primaryPort, primarySecure);
  } catch (primaryErr) {
    console.error("[smtp] Primary SMTP attempt failed", {
      port: primaryPort,
      secure: primarySecure,
      error: primaryErr instanceof Error ? { name: primaryErr.name, message: primaryErr.message, stack: primaryErr.stack } : primaryErr,
    });

    // Fallback: swap 465<->587 once.
    const fallbackPort = primaryPort === 465 ? 587 : 465;
    const fallbackSecure = fallbackPort === 465;
    try {
      const result = await sendViaSmtp(msg, fallbackPort, fallbackSecure);
      console.warn(`[smtp] Fallback succeeded on port ${fallbackPort} (secure=${fallbackSecure})`);
      return result;
    } catch (fallbackErr) {
      console.error("[smtp] Fallback SMTP attempt also failed", {
        port: fallbackPort,
        secure: fallbackSecure,
        error: fallbackErr instanceof Error ? { name: fallbackErr.name, message: fallbackErr.message, stack: fallbackErr.stack } : fallbackErr,
      });
      throw primaryErr;
    }
  }
}
