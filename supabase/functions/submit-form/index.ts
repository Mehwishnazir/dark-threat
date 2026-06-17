// Deprecated: Form handling has been migrated to the unified contact-form edge function.
// This file is intentionally left empty.


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface FormPayload {
  formType: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  // Extra fields from trial form
  lastName?: string;
  jobTitle?: string;
  companyDomain?: string;
  country?: string;
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

const sanitizeInput = (input: string, maxLength: number = 2000): string => {
  if (!input || typeof input !== "string") return "";
  return input.slice(0, maxLength).replace(/[<>"'&]/g, "");
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: FormPayload = await req.json();

    // Basic validation
    const name = sanitizeInput(body.name || `${body.name || ""} ${body.lastName || ""}`.trim(), 100);
    const email = sanitizeInput(body.email, 150);
    const formType = sanitizeInput(body.formType, 100) || "Website Inquiry";

    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "A valid email address is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!name) {
      return new Response(
        JSON.stringify({ error: "Name is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize optional fields
    const company = sanitizeInput(body.company || body.companyName || "", 150);
    const phone = sanitizeInput(body.phone || "", 50);
    const interest = sanitizeInput(body.interest || body.jobTitle || "", 150);
    const message = sanitizeInput(body.message || "", 2000);
    const companyDomain = sanitizeInput(body.companyDomain || "", 150);
    const country = sanitizeInput(body.country || "", 100);

    const recipient = Deno.env.get("NOTIFICATION_RECIPIENT_EMAIL") || "info@cybersilo.tech";
    const brevoApiKey = Deno.env.get("BREVO_API_KEY");

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY environment variable is not set.");
      return new Response(
        JSON.stringify({ error: "Email provider configuration error." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Processing ${formType} submission from ${email} to ${recipient}`);

    // Construct premium HTML Email body matching DarkThreat's theme
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead - ${formType}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0B0F19; color: #E2E8F0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 30px 20px;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #1E293B; padding-bottom: 20px;">
            <div style="background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%); width: 60px; height: 60px; border-radius: 12px; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 28px; color: #000000; font-weight: bold;">🛡️</span>
            </div>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.05em;">
              DARK<span style="color: #06B6D4;">THREAT</span>
            </h1>
            <p style="margin: 5px 0 0; color: #94A3B8; font-size: 14px;">Threat Operations Center • Lead Ingest</p>
          </div>

          <!-- Main Content -->
          <div style="background-color: #111827; border: 1px solid #1F2937; border-radius: 16px; padding: 30px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);">
            <div style="margin-bottom: 25px;">
              <span style="display: inline-block; background-color: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 20px; padding: 4px 12px; font-size: 12px; font-weight: 600; color: #06B6D4; text-transform: uppercase;">
                ${formType}
              </span>
              <h2 style="margin: 10px 0 0; font-size: 20px; font-weight: 600; color: #FFFFFF;">
                New Lead Opportunity Detected
              </h2>
            </div>

            <!-- Fields Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tbody>
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; width: 35%; font-size: 14px;">Full Name</td>
                  <td style="padding: 12px 0; color: #F8FAFC; font-size: 14px;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; font-size: 14px;">Email Address</td>
                  <td style="padding: 12px 0; color: #06B6D4; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #06B6D4; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; font-size: 14px;">Company</td>
                  <td style="padding: 12px 0; color: #F8FAFC; font-size: 14px;">${company}</td>
                </tr>
                ` : ""}
                ${companyDomain ? `
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; font-size: 14px;">Company Domain</td>
                  <td style="padding: 12px 0; color: #F8FAFC; font-size: 14px;">${companyDomain}</td>
                </tr>
                ` : ""}
                ${phone ? `
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; font-size: 14px;">Phone Number</td>
                  <td style="padding: 12px 0; color: #F8FAFC; font-size: 14px;">${phone}</td>
                </tr>
                ` : ""}
                ${interest ? `
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; font-size: 14px;">Interest/Job Title</td>
                  <td style="padding: 12px 0; color: #F8FAFC; font-size: 14px;">${interest}</td>
                </tr>
                ` : ""}
                ${country ? `
                <tr style="border-bottom: 1px solid #1F2937;">
                  <td style="padding: 12px 0; font-weight: 600; color: #94A3B8; font-size: 14px;">Country</td>
                  <td style="padding: 12px 0; color: #F8FAFC; font-size: 14px;">${country}</td>
                </tr>
                ` : ""}
              </tbody>
            </table>

            ${message ? `
            <div style="background-color: #1F2937; border-radius: 8px; padding: 15px; border-left: 4px solid #06B6D4; margin-bottom: 25px;">
              <h4 style="margin: 0 0 8px; color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message / Security Concern</h4>
              <p style="margin: 0; color: #F8FAFC; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ""}

            <div style="font-size: 12px; color: #64748B; border-top: 1px solid #1F2937; padding-top: 15px; text-align: center;">
              Submitted on ${new Date().toUTCString()}
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; color: #64748B; font-size: 12px;">
            <p style="margin: 0;">This is an automated notification from your DarkThreat website.</p>
            <p style="margin: 5px 0 0;">© 2026 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create nodemailer transporter for Brevo SMTP relay
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: Deno.env.get("SENDER_EMAIL") || "",
        pass: brevoApiKey,
      },
    });

    // Send email via SMTP
    try {
      const info = await transporter.sendMail({
        from: `"DarkThreat Leads" <${Deno.env.get("SENDER_EMAIL") || "info@cybersilo.tech"}>`,
        to: recipient,
        subject: `[Lead Alert] New submission from ${name} (${formType})`,
        html: htmlContent,
      });
      console.log("Nodemailer sent, messageId:", info.messageId);
      return new Response(
        JSON.stringify({ success: true, messageId: info.messageId }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    } catch (mailError) {
      console.error("Nodemailer send error:", mailError);
      return new Response(
        JSON.stringify({ error: "Failed to dispatch email via Brevo SMTP." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

  } catch (error: unknown) {
    console.error("Error in submit-form edge function:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

Deno.serve(handler);
