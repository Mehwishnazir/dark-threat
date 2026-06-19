// Unified public contact / lead form handler.
// Sends a notification email to info@cybersilo.tech via Resend.
//
// Accepts any of: Contact Us, Notify-Me (Trial Coming Soon), Trial Registration.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormPayload {
  formType?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  company?: string;
  companyName?: string;
  companyDomain?: string;
  phone?: string;
  interest?: string;
  jobTitle?: string;
  country?: string;
  message?: string;
  // Honeypot
  website?: string;
  [key: string]: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = (e: string) => EMAIL_RE.test(e) && e.length <= 254;

const clean = (v: unknown, max = 2000): string => {
  if (typeof v !== "string") return "";
  return v.slice(0, max).replace(/[<>]/g, "").trim();
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Simple in-memory rate limiter (per cold start, per IP)
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const rateLimited = (ip: string) => {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    console.warn(`[contact-form] Rate limit hit for ${ip}`);
    return new Response(JSON.stringify({ error: "Too many requests. Try again shortly." }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let body: FormPayload;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Honeypot — silently accept to avoid telling bots
  if (body.website && String(body.website).trim() !== "") {
    console.warn(`[contact-form] Honeypot triggered from ${ip}`);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const email = clean(body.email, 254).toLowerCase();
  const firstName = clean(body.firstName, 100);
  const lastName = clean(body.lastName, 100);
  const name = clean(body.name, 200) || [firstName, lastName].filter(Boolean).join(" ");
  const formType = clean(body.formType, 100) || "Website Inquiry";

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: "A valid email address is required." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Some forms (Notify Me) only collect email.
  const requiresName = formType !== "Trial Coming Soon Notification";
  if (requiresName && !name) {
    return new Response(JSON.stringify({ error: "Name is required." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const fields: Record<string, string> = {
    Name: name,
    Email: email,
    Company: clean(body.company || body.companyName || "", 200),
    "Company Domain": clean(body.companyDomain || "", 200),
    Phone: clean(body.phone || "", 50),
    "Job Title / Interest": clean(body.interest || body.jobTitle || "", 200),
    Country: clean(body.country || "", 100),
    Message: clean(body.message || "", 4000),
  };

  const rows = Object.entries(fields)
    .filter(([, v]) => v && v.length)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#0f172a;border-bottom:1px solid #e2e8f0;width:180px;">${escapeHtml(
          k,
        )}</td><td style="padding:8px 12px;color:#1e293b;border-bottom:1px solid #e2e8f0;">${escapeHtml(
          v,
        ).replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${escapeHtml(formType)}</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <div style="max-width:640px;margin:0 auto;padding:24px;">
    <div style="background:#0b1220;color:#fff;padding:24px;border-radius:12px 12px 0 0;">
      <div style="font-size:12px;letter-spacing:.12em;color:#22d3ee;text-transform:uppercase;">DarkThreat.ai</div>
      <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;">New ${escapeHtml(formType)}</h1>
      <p style="margin:6px 0 0;font-size:13px;color:#94a3b8;">Submitted ${new Date().toUTCString()}</p>
    </div>
    <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px;padding:8px 0;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
    </div>
    <p style="margin:16px 4px 0;font-size:12px;color:#64748b;">IP: ${escapeHtml(ip)}</p>
  </div>
</body></html>`;

  const text = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    console.error("[contact-form] RESEND_API_KEY not configured");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const recipient = Deno.env.get("NOTIFICATION_RECIPIENT_EMAIL") || "info@cybersilo.tech";
  const sender = Deno.env.get("SENDER_EMAIL") || "DarkThreat <noreply@cybersilo.tech>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `[DarkThreat] ${formType} — ${name || email}`,
        html,
        text,
      }),
    });

    const result = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("[contact-form] Resend error", res.status, result);
      return new Response(
        JSON.stringify({ error: "Failed to send email", detail: result }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    console.log(`[contact-form] Sent ${formType} from ${email} -> ${recipient}`, result?.id);
    return new Response(JSON.stringify({ success: true, id: result?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[contact-form] Send failed", e);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
