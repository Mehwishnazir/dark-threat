import Link from "next/link";

const fieldClass =
  "w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none";

export default function AssessmentFormShell() {
  return (
    <aside className="rounded-[2rem] border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Free Consultation</span>
        </div>
        <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Get Your Free Cybersecurity Assessment</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Full Name *
            </label>
            <input type="text" name="name" placeholder="Enter your full name" className={fieldClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Work Email *
            </label>
            <input type="email" name="email" placeholder="you@company.com" className={fieldClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Company Name
            </label>
            <input type="text" name="company" placeholder="Your organization" className={fieldClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Phone Number
            </label>
            <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={fieldClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Reason for Contact *
            </label>
            <select name="interest" defaultValue="" className={fieldClass}>
              <option value="">Select a reason</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Sales Question">Sales Question</option>
              <option value="Demo Request">Demo Request</option>
              <option value="Technical Support">Technical Support</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              How Can We Help? *
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Describe your security needs or challenges..."
              className={`${fieldClass} resize-none`}
            />
          </div>
          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
          >
            Request Free Assessment →
          </button>
          <p className="text-center text-xs text-muted-foreground/70">
            By submitting, you agree to our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </aside>
  );
}
