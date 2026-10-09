import LeadForm from "@/components/LeadForm";
import { assessmentLeadFields } from "@/components/leadFormFields";

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
        <LeadForm
          variant="assessment"
          plain
          interest="Cybersecurity Assessment"
          submitLabel="Request Free Assessment →"
          showPrivacyNote
          privacyHref="/privacy-policy"
          fields={assessmentLeadFields("assessment")}
        />
      </div>
    </aside>
  );
}
