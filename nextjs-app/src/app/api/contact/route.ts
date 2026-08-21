import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z
      .string()
      .trim()
      .email()
      .max(254)
      .transform((value) => value.toLowerCase()),
    company: z.string().trim().max(150).optional().default(""),
    interest: z.string().trim().min(1).max(100),
    message: z.string().trim().min(10).max(4000),
    website: z.string().max(200).optional().default(""),
  })
  .strict();

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      (
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }) as Record<string, string>
      )[character] ?? character
  );

const NOTIFICATION_EMAIL = "info@darkthreat.ai";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim() || user;
  const port = Number(process.env.SMTP_PORT ?? "587");

  if (!host || !user || !pass || !from || !Number.isInteger(port) || port < 1 || port > 65535) {
    return null;
  }

  return { host, user, pass, from, port };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: pretend success, do not send mail
  if (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.trim()
  ) {
    return NextResponse.json({ success: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the submitted form fields." },
      { status: 400 }
    );
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    console.error("[contact-api] SMTP environment is not configured");
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 }
    );
  }

  const { name, email, company, interest, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeInterest = escapeHtml(interest);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const submittedAt = new Date().toUTCString();
  const sender = `DarkThreat <${smtp.from}>`;

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    requireTLS: smtp.port !== 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
    tls: {
      minVersion: "TLSv1.2",
    },
  });

  const companyNotification = {
    from: sender,
    to: NOTIFICATION_EMAIL,
    replyTo: email,
    subject: `[DarkThreat Contact] ${interest} — ${name}`,
    text: [
      "New DarkThreat contact form submission",
      `Submitted: ${submittedAt}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Interest: ${interest}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a">
    <div style="max-width:640px;margin:0 auto;padding:24px">
      <div style="background:#0b1220;color:#fff;padding:24px;border-radius:12px 12px 0 0">
        <div style="font-size:12px;letter-spacing:.12em;color:#22d3ee;text-transform:uppercase">DarkThreat.ai</div>
        <h1 style="margin:6px 0 0;font-size:22px">New Contact Us submission</h1>
        <p style="margin:6px 0 0;color:#94a3b8;font-size:13px">${submittedAt}</p>
      </div>
      <div style="background:#fff;border:1px solid #e2e8f0;border-top:0;padding:24px;border-radius:0 0 12px 12px">
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Interest:</strong> ${safeInterest}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      </div>
    </div>
  </body>
</html>`,
  };

  const userConfirmation = {
    from: sender,
    to: email,
    replyTo: NOTIFICATION_EMAIL,
    subject: "We received your message | DarkThreat",
    text: [
      `Hello ${name},`,
      "",
      "Thank you for contacting DarkThreat. Our team has received your message and will respond as soon as possible.",
      "",
      `Interest: ${interest}`,
      "",
      "DarkThreat Threat Operations",
      "https://darkthreat.ai",
    ].join("\n"),
    html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a">
    <div style="max-width:640px;margin:0 auto;padding:24px">
      <div style="background:#0b1220;color:#fff;padding:24px;border-radius:12px 12px 0 0">
        <div style="font-size:12px;letter-spacing:.12em;color:#22d3ee;text-transform:uppercase">DarkThreat.ai</div>
        <h1 style="margin:6px 0 0;font-size:22px">We received your message</h1>
      </div>
      <div style="background:#fff;border:1px solid #e2e8f0;border-top:0;padding:24px;border-radius:0 0 12px 12px">
        <p>Hello ${safeName},</p>
        <p>Thank you for contacting DarkThreat. Our team has received your message and will respond as soon as possible.</p>
        <p><strong>Interest:</strong> ${safeInterest}</p>
        <p style="margin-top:24px">DarkThreat Threat Operations<br><a href="https://darkthreat.ai">darkthreat.ai</a></p>
      </div>
    </div>
  </body>
</html>`,
  };

  try {
    await Promise.all([
      transporter.sendMail(companyNotification),
      transporter.sendMail(userConfirmation),
    ]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact-api] SMTP delivery failed", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : "Unknown SMTP error",
    });
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 }
    );
  }
}
