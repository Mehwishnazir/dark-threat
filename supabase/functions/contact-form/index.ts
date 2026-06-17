import nodemailer from "npm:nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactPayload {
  formType?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  // Additional optional fields that may appear in different forms
  [key: string]: unknown;
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

const sanitize = (value: unknown, maxLength: number = 2000): string => {
  if (typeof value !== "string") return "";
  return value.slice(0, maxLength).replace(/[<>"'&]/g, "");
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const raw = await req.json();
    const payload: ContactPayload = raw;

    // Basic mandatory fields
    const name = sanitize(payload.name);
    const email = sanitize(payload.email);
    const formType = sanitize(payload.formType || "Website Contact");

    console.log(`[Contact] Received ${formType} from ${email}`);

    if (!name) {
      console.warn("[Contact] Missing name");
      return new Response(JSON.stringify({ error: "Name is required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!email || !isValidEmail(email)) {
      console.warn("[Contact] Invalid email", email);
      return new Response(JSON.stringify({ error: "Valid email is required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const recipient = Deno.env.get("NOTIFICATION_RECIPIENT_EMAIL") ?? "info@cybersilo.tech";
    const brevoKey = Deno.env.get("BREVO_API_KEY");
    const sender = Deno.env.get("SENDER_EMAIL") ?? "info@cybersilo.tech";

    if (!brevoKey) {
      console.error("[Contact] BREVO_API_KEY missing");
      return new Response(JSON.stringify({ error: "Email service not configured" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Build a clean HTML email using the same premium template used elsewhere
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${formType} – DarkThreat Lead</title>
      </head>
      <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#0b0f19;color:#e2e8f0;">
        <div style="max-width:600px;margin:auto;padding:30px;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#fff;">New Contact Request</h1>
            <p style="color:#94a3b8;">${formType}</p>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
            ${payload.company ? `<tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${sanitize(payload.company)}</td></tr>` : ""}
            ${payload.phone ? `<tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${sanitize(payload.phone)}</td></tr>` : ""}
            ${payload.interest ? `<tr><td style="padding:8px;font-weight:bold;">Interest/Job</td><td style="padding:8px;">${sanitize(payload.interest)}</td></tr>` : ""}
            ${payload.message ? `<tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${sanitize(payload.message)}</td></tr>` : ""}
          </table>
          <p style="margin-top:20px;color:#64748b;font-size:12px;">Submitted on ${new Date().toUTCString()}</p>
        </div>
      </body>
      </html>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: { user: sender, pass: brevoKey },
    });

    const info = await transporter.sendMail({
      from: `"DarkThreat Contact" <${sender}>",
      to: recipient,
      subject: `[Contact] ${formType} – ${name}`,
      html,
    });

    console.log(`[Contact] Email sent, id ${info.messageId}`);
    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("[Contact] Unexpected error", e);
    const msg = e instanceof Error ? e.message : "Unexpected error";
    return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
};

Deno.serve(handler);
