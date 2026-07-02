// Shared SMTP helper for all Supabase Edge Functions.
// Configured via env secrets:
//   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
// SMTP_PASS is NEVER logged or returned in any response body.

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
}

const bool = (v: string | undefined, dflt = false) => {
  if (v === undefined) return dflt;
  return /^(1|true|yes|on)$/i.test(v.trim());
};

export async function sendSmtp(msg: SmtpMessage): Promise<SmtpResult> {
  const host = Deno.env.get("SMTP_HOST");
  const port = Number(Deno.env.get("SMTP_PORT") ?? "587");
  const secure = bool(Deno.env.get("SMTP_SECURE"), false);
  const user = Deno.env.get("SMTP_USER");
  const pass = Deno.env.get("SMTP_PASS");

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are not configured (SMTP_HOST/SMTP_USER/SMTP_PASS)");
  }

  const client = new SMTPClient({
    connection: {
      hostname: host,
      port,
      tls: secure, // false = STARTTLS on 587; true = implicit TLS on 465
      auth: { username: user, password: pass },
    },
  });

  const fromName = msg.fromName ?? "DarkThreat";
  const from = `${fromName} <${user}>`;
  const toList = Array.isArray(msg.to) ? msg.to : [msg.to];

  try {
    await client.send({
      from,
      to: toList,
      replyTo: msg.replyTo,
      subject: msg.subject,
      content: msg.text ?? msg.html.replace(/<[^>]+>/g, " "),
      html: msg.html,
    });
    return { id: crypto.randomUUID(), accepted: toList.length };
  } finally {
    try { await client.close(); } catch { /* noop */ }
  }
}
