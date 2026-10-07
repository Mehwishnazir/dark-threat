import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonFaqs } from "@/lib/seo/compareContent";

export const metadata: Metadata = {
  title: "DarkThreat vs Recorded Future",
  description: "Compare DarkThreat and Recorded Future on dark web coverage, credential leak detection, and pricing. 7-day free trial, no credit card required.",
  ...pageSeo("/compare/darkthreat-vs-recorded-future"),
};

export default function ComparisonRecordedFuture() {
  return (
    <ComparisonPage
      competitorName="Recorded Future"
      slug="darkthreat-vs-recorded-future"
      title="DarkThreat vs Recorded Future — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and Recorded Future on dark web coverage, credential leak detection, pricing transparency, and time-to-value. 7-day free trial, no credit card required."
      h1="DarkThreat vs Recorded Future"
      intro="Recorded Future is an enterprise threat intelligence platform. DarkThreat delivers focused dark web monitoring and credential leak detection that mid-market security teams can get started quickly."
      rows={[
        { feature: "Transparent public pricing", darkthreat: true, competitor: false },
        { feature: "Real-time credential leak detection", darkthreat: true, competitor: true },
        { feature: "Dark web forums & Telegram coverage", darkthreat: true, competitor: true },
        { feature: "Infostealer log monitoring", darkthreat: true, competitor: true },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Not published online (contact vendor)" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: "Free trials for some modules (in-product)" },
      ]}
      pricingNote="Recorded Future does not publish package prices online; see https://www.recordedfuture.com/pricing. In-product module trials are documented at https://support.recordedfuture.com/hc/en-us/articles/20569317317139-Threat-Intelligence-Trial-FAQ. Confirm current plans with Recorded Future."
      differentiators={[
        {
          title: "Focused dark web monitoring",
          body: "DarkThreat is purpose-built for lean security teams that need focused dark web monitoring and credential leak detection.",
        },
        {
          title: "Fast evaluation",
          body: "Request your 7-day free trial through our team, connect your domains, and get your first alert in under five minutes. No annual contract, no minimum spend.",
        },
        {
          title: "DarkThreat monthly plans",
          body: "DarkThreat plans start at $288/month with public pricing on the DarkThreat pricing page.",
        },
        {
          title: "Focused on what matters: leaks and exposure",
          body: "We don't try to be a one-stop threat intel platform. We do dark web monitoring and credential leak detection exceptionally well, and we integrate cleanly with the SIEM and SOAR you already own.",
        },
      ]}
      showBreadcrumb
      showEvaluationChecklist
      showSwitchingNotes
      faqs={comparisonFaqs("Recorded Future")}    />
  );
}
