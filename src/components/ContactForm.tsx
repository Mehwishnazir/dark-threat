"use client";

import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { Send } from "lucide-react";

const fieldClass =
  "mt-2 flex h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

type FormState = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  interest: "Dark Web Monitoring",
  message: "",
  website: "",
};

type ToastState = {
  title: string;
  description: string;
  variant: "success" | "error";
} | null;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setFormError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      setFormError("Please enter a message of at least 10 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: formData.company,
          interest: formData.interest,
          message,
          website: formData.website,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed.");
      }

      setToast({
        title: "Message Sent Successfully",
        description:
          "Thank you for contacting DarkThreat's Threat Operations Center. We will respond within 24 hours.",
        variant: "success",
      });
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "contact_submit", {
          event_category: "Contact",
          event_label: "Contact Form Submission",
        });
      }
      setFormData(initialForm);
      setFormError("");
    } catch {
      const failureMessage =
        "There was an error sending your message. Please try again or contact us directly.";
      setFormError(failureMessage);
      setToast({
        title: "Submission Failed",
        description: failureMessage,
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-24 right-6 z-[100] max-w-sm rounded-xl border px-4 py-3 shadow-lg backdrop-blur-md ${
            toast.variant === "success"
              ? "border-primary/40 bg-card text-foreground"
              : "border-destructive/50 bg-card text-foreground"
          }`}
        >
          <p className="font-montserrat font-semibold text-sm">{toast.title}</p>
          <p className="text-muted-foreground text-sm mt-1">{toast.description}</p>
        </div>
      )}

      <div className="lg:col-span-7 bg-card/40 border border-border/80 rounded-3xl p-8 backdrop-blur-md shadow-xl relative">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-6 flex items-center gap-2">
          <Send className="w-6 h-6 text-primary" /> Send a Message
        </h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website" aria-hidden="true">Website</label>
            <input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-foreground">
                Name *
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                aria-invalid={!!formError}
                placeholder="Jane Doe"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Business Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                aria-invalid={!!formError}
                placeholder="jane@company.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="text-sm font-semibold text-foreground">
                Company
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                maxLength={150}
                placeholder="Company Inc."
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="interest" className="text-sm font-semibold text-foreground">
                Interest Area
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full mt-2 rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm text-foreground shadow-sm"
              >
                <option value="Dark Web Monitoring">Dark Web Monitoring Service</option>
                <option value="Credential Leak Detection">Credential Leak Detection</option>
                <option value="Dark Web Data Removal">Dark Web Data Removal</option>
                <option value="Custom MSSP Partnering">Custom MSSP Partnering</option>
                <option value="Other Support">Other Support</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-foreground">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={4000}
              aria-invalid={!!formError}
              placeholder="How can our threat intelligence team help you?"
              className="mt-2 flex min-h-[80px] w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {formError && (
            <p className="text-sm text-destructive" role="alert">
              {formError}
            </p>
          )}

          <button type="submit" className="hero-button w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Secure Message"}
          </button>
        </form>
      </div>
    </>
  );
}
