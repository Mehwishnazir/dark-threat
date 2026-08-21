import "dotenv/config";

import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import nodemailer from "nodemailer";
import { z } from "zod";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "NOTIFICATION_EMAIL",
];

const missingEnv = REQUIRED_ENV.filter((name) => !process.env[name]?.trim());
if (missingEnv.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnv.join(", ")}`);
}

if (process.env.SMTP_PASS === "ROTATE_BEFORE_DEPLOY") {
  console.warn("[contact-api] SMTP_PASS is a placeholder; email delivery will fail until it is rotated.");
}

const port = Number(process.env.PORT ?? "3001");
const smtpPort = Number(process.env.SMTP_PORT);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid TCP port.");
}
if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
  throw new Error("SMTP_PORT must be a valid TCP port.");
}

const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS ??
    "http://localhost:8080,https://darkthreat.ai,https://www.darkthreat.ai")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

const contactSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
    company: z.string().trim().max(150).optional().default(""),
    interest: z.string().trim().min(1).max(100),
    message: z.string().trim().min(10).max(4000),
    website: z.string().max(200).optional().default(""),
  })
  .strict();

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  requireTLS: smtpPort !== 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    minVersion: "TLSv1.2",
  },
});

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Origin not allowed"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    maxAge: 86_400,
  }),
);
app.use(express.json({ limit: "16kb", strict: true }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.post("/api/contact", contactLimiter, async (request, response) => {
  // Honeypot submissions receive a success response without sending email.
  if (typeof request.body?.website === "string" && request.body.website.trim()) {
    response.status(200).json({ success: true });
    return;
  }

  const parsed = contactSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Please check the submitted form fields." });
    return;
  }

  const { name, email, company, interest, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeInterest = escapeHtml(interest);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const submittedAt = new Date().toUTCString();
  const sender = `DarkThreat <${process.env.SMTP_USER}>`;

  const companyNotification = {
    from: sender,
    to: process.env.NOTIFICATION_EMAIL,
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
    replyTo: process.env.NOTIFICATION_EMAIL,
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
    response.status(200).json({ success: true });
  } catch (error) {
    console.error("[contact-api] SMTP delivery failed", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : "Unknown SMTP error",
    });
    response.status(502).json({ error: "Unable to send your message right now." });
  }
});

app.use((error, _request, response, _next) => {
  if (error instanceof SyntaxError) {
    response.status(400).json({ error: "Invalid request body." });
    return;
  }
  if (error instanceof Error && error.message === "Origin not allowed") {
    response.status(403).json({ error: "Origin not allowed." });
    return;
  }

  console.error("[contact-api] Unhandled request error", error);
  response.status(500).json({ error: "Unexpected server error." });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`[contact-api] Listening on port ${port}`);
});
