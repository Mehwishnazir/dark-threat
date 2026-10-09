"use client";

import { type ChangeEvent, type FormEvent, useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { LeadField } from "@/components/leadFormFields";

export type { LeadField };

const industrySelectClass =
  "w-full mt-1 rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50";

const assessmentLabelClass =
  "block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2";

const assessmentFieldClass =
  "w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border";

const assessmentSelectClass =
  "w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border";

const plainFieldClass =
  "w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none";

const assessmentButtonClass =
  "w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50";

const plainButtonClass =
  "w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 disabled:opacity-50";

type LeadFormProps = {
  variant: "industry" | "assessment";
  /** Used when the form has no interest field. Sent to the same contact API. */
  interest: string;
  submitLabel: string;
  fields: LeadField[];
  showPrivacyNote?: boolean;
  /** When set, the privacy note links here. Otherwise it stays the original non-link text. */
  privacyHref?: string;
  /** Matches AssessmentFormShell, which omits the focus and hover treatments. */
  plain?: boolean;
};

type ToastState = {
  title: string;
  description: string;
  variant: "success" | "error";
} | null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanLabel(label: string) {
  return label.replace(/\s*\*$/, "");
}

function displayValue(field: LeadField, value: string) {
  if (field.type !== "select") return value.trim();
  return field.options.find((option) => option.value === value)?.label ?? value.trim();
}

function groupRows(fields: LeadField[], variant: LeadFormProps["variant"]) {
  if (variant === "assessment") return fields.map((field) => [field]);

  const rows: LeadField[][] = [];
  let pending: LeadField[] = [];
  const flush = () => {
    if (!pending.length) return;
    rows.push(pending);
    pending = [];
  };

  for (const field of fields) {
    const width = field.type === "textarea" ? "full" : (field.width ?? "full");
    if (width === "half") {
      pending.push(field);
      if (pending.length === 2) flush();
    } else {
      flush();
      rows.push([field]);
    }
  }
  flush();
  return rows;
}

export default function LeadForm({
  variant,
  interest,
  submitLabel,
  fields,
  showPrivacyNote = false,
  privacyHref,
  plain = false,
}: LeadFormProps) {
  const pathname = usePathname() || "";
  const honeypotId = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [website, setWebsite] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === "website") {
      setWebsite(value);
      return;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setFormError("");

    const read = (bind: LeadField["bind"]) => {
      const field = fields.find((item) => item.bind === bind);
      if (!field) return "";
      return (values[field.name] ?? "").trim();
    };

    const name = read("name");
    const email = read("email");
    const company = read("company");
    const messageField = fields.find((field) => field.bind === "message");
    const typedMessage = messageField ? (values[messageField.name] ?? "").trim() : "";
    const interestField = fields.find((field) => field.bind === "interest");
    const selectedInterest = interestField ? (values[interestField.name] ?? "").trim() : interest;

    const missingRequired = fields.some((field) => field.required && !(values[field.name] ?? "").trim());
    if (missingRequired || !name || !email) {
      setFormError("Please fill in all required fields.");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (messageField?.required && typedMessage.length < 10) {
      setFormError(
        typedMessage
          ? "Please enter a message of at least 10 characters."
          : "Please fill in all required fields."
      );
      return;
    }

    if (!messageField?.required && typedMessage && typedMessage.length < 10) {
      setFormError("Please enter a message of at least 10 characters.");
      return;
    }

    if (!selectedInterest) {
      setFormError("Please fill in all required fields.");
      return;
    }

    const detailLines = fields
      .filter((field) => field.bind === "detail")
      .map((field) => {
        const value = displayValue(field, values[field.name] ?? "");
        return value ? `${cleanLabel(field.label)}: ${value}` : "";
      })
      .filter(Boolean);

    const sourcePage = pathname.slice(0, 200);
    const fallback = `Lead inquiry submitted from ${sourcePage || "this page"}.`;
    const detailBlock = detailLines.join("\n");
    const reserve = detailBlock ? detailBlock.length + 2 : 0;
    const head = (typedMessage || fallback).slice(0, Math.max(10, 4000 - reserve));
    const message = (detailBlock ? `${head}\n\n${detailBlock}` : head).slice(0, 4000);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          interest: selectedInterest,
          message,
          website,
          sourcePage,
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
      setValues({});
      setWebsite("");
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

  const renderField = (field: LeadField) => {
    const value = values[field.name] ?? "";
    const invalid = Boolean(formError && field.required);
    const maxLength =
      field.bind === "name" ? 100 : field.bind === "email" ? 254 : field.bind === "company" ? 150 : field.type === "tel" ? 40 : 150;

    if (variant === "assessment") {
      const fieldClass = plain ? plainFieldClass : assessmentFieldClass;
      const selectClass = plain ? plainFieldClass : assessmentSelectClass;
      return (
        <div key={field.id}>
          <label htmlFor={field.id} className={assessmentLabelClass}>
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.name}
              value={value}
              onChange={handleChange}
              required={field.required}
              rows={field.rows ?? 3}
              maxLength={4000}
              placeholder={field.placeholder}
              aria-invalid={invalid}
              className={`${fieldClass} resize-none`}
            />
          ) : field.type === "select" ? (
            <select
              id={field.id}
              name={field.name}
              value={value}
              onChange={handleChange}
              required={field.required}
              aria-invalid={invalid}
              className={selectClass}
            >
              <option value="">{field.placeholder ?? "Select"}</option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              value={value}
              onChange={handleChange}
              required={field.required}
              maxLength={maxLength}
              placeholder={field.placeholder}
              aria-invalid={invalid}
              className={fieldClass}
            />
          )}
        </div>
      );
    }

    return (
      <div key={field.id}>
        <Label htmlFor={field.id}>{field.label}</Label>
        {field.type === "textarea" ? (
          <Textarea
            id={field.id}
            name={field.name}
            value={value}
            onChange={handleChange}
            required={field.required}
            rows={field.rows ?? 4}
            maxLength={4000}
            placeholder={field.placeholder}
            aria-invalid={invalid}
            className="mt-1 bg-background/50"
          />
        ) : field.type === "select" ? (
          <select
            id={field.id}
            name={field.name}
            value={value}
            onChange={handleChange}
            required={field.required}
            aria-invalid={invalid}
            className={industrySelectClass}
          >
            <option value="">{field.placeholder ?? "Select"}</option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <Input
            id={field.id}
            name={field.name}
            type={field.type}
            value={value}
            onChange={handleChange}
            required={field.required}
            maxLength={maxLength}
            placeholder={field.placeholder}
            aria-invalid={invalid}
            className="mt-1 bg-background/50"
          />
        )}
      </div>
    );
  };

  const rows = groupRows(fields, variant);
  const buttonClass =
    variant === "assessment" ? (plain ? plainButtonClass : assessmentButtonClass) : undefined;

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

      <form
        onSubmit={handleSubmit}
        noValidate
        className={variant === "assessment" ? "relative space-y-4" : "relative space-y-5"}
      >
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor={honeypotId}>Website</label>
          <input
            id={honeypotId}
            name="website"
            value={website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <input type="hidden" name="sourcePage" value={pathname} />

        {variant === "assessment" ? (
          <div className="grid grid-cols-1 gap-4">{fields.map(renderField)}</div>
        ) : (
          rows.map((row) =>
            row.length > 1 ? (
              <div key={row.map((field) => field.id).join("-")} className="grid grid-cols-2 gap-4">
                {row.map(renderField)}
              </div>
            ) : (
              renderField(row[0])
            )
          )
        )}

        {formError && (
          <p className="text-sm text-destructive" role="alert">
            {formError}
          </p>
        )}

        {variant === "assessment" ? (
          <button type="submit" className={buttonClass} disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : submitLabel}
          </button>
        ) : (
          <Button type="submit" className="hero-button w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : submitLabel}
          </Button>
        )}

        {showPrivacyNote && (
          <p className="text-center text-xs text-muted-foreground/70">
            By submitting, you agree to our{" "}
            {privacyHref ? (
              <Link href={privacyHref} className="underline underline-offset-2 hover:text-primary">
                Privacy Policy
              </Link>
            ) : (
              <span className="underline underline-offset-2 hover:text-primary cursor-pointer transition-colors">
                Privacy Policy
              </span>
            )}
            .
          </p>
        )}
      </form>
    </>
  );
}
