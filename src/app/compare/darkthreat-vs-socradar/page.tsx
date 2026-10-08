import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonFaqs } from "@/lib/seo/compareContent";

export const metadata: Metadata = {
  title: "DarkThreat vs SOCRadar",
  description: "Compare DarkThreat and SOCRadar on dark web monitoring, credential leak detection, coverage, and pricing. 7-day free trial, no credit card.",
  ...pageSeo("/compare/darkthreat-vs-socradar"),
};

export default function ComparisonSocRadar() {
  return (
    <ComparisonPage
      competitorName="SOCRadar"
      slug="darkthreat-vs-socradar"
      title="DarkThreat vs SOCRadar — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and SOCRadar on dark web monitoring, credential leak detection, attack surface coverage, pricing transparency, and time-to-value. 7-day free trial, no credit card."
      h1="DarkThreat vs SOCRadar"
      intro="SOCRadar offers a broad extended threat intelligence (XTI) suite covering attack surface, brand, and dark web. DarkThreat focuses on dark web monitoring and credential leak detection and integrates with the SIEM and SOAR tools you already use."
      rows={[
        { feature: "Transparent public pricing", darkthreat: true, competitor: true },
        { feature: "Dark web forum coverage", darkthreat: true, competitor: true },
        { feature: "Credential leak detection", darkthreat: true, competitor: true },
        { feature: "External attack surface management", darkthreat: "Via integrations", competitor: true },
        { feature: "Infostealer log coverage", darkthreat: "2M+ sources", competitor: true },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Published for some plans (see vendor site)" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: "7-day trial on some plans + freemium tier" },
      ]}
      pricingNote="SOCRadar publishes prices for several plans on its pricing page, offers 7-day free trials on some plans, and a freemium tier (free forever, no credit card). Confirm current plans at https://socradar.io/plans-and-pricing/."
      differentiators={[
        {
          title: "Focused scope",
          body: "SOCRadar offers XTI across multiple modules. DarkThreat concentrates on dark web monitoring and credential leak detection.",
        },
        {
          title: "A free trial on your real assets",
          body: "Request your 7-day free trial through our team — no credit card required. You evaluate against your real assets, not a demo dataset.",
        },
        {
          title: "DarkThreat monthly plans",
          body: "DarkThreat plans start at $288/month with no annual commitment. Cancel anytime.",
        },
        {
          title: "Fits into your existing stack",
          body: "Webhooks, Slack, Teams, SIEM, and SOAR integrations out of the box — augment what you already run instead of replacing it.",
        },
      ]}
      showBreadcrumb
      showEvaluationChecklist
      showSwitchingNotes
      faqs={comparisonFaqs("SOCRadar")}    />
  );
}
