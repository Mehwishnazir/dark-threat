import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonFaqs } from "@/lib/seo/compareContent";

export const metadata: Metadata = {
  title: "DarkThreat vs ZeroFox",
  description: "Compare DarkThreat and ZeroFox on dark web coverage, credential leak detection, and pricing. Public pricing and a 7-day free trial, no credit card.",
  ...pageSeo("/compare/darkthreat-vs-zerofox"),
};

export default function ComparisonZeroFox() {
  return (
    <ComparisonPage
      competitorName="ZeroFox"
      slug="darkthreat-vs-zerofox"
      title="DarkThreat vs ZeroFox — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and ZeroFox on dark web coverage, credential leak detection, pricing transparency, and ease of deployment. Public pricing and a 7-day free trial, no credit card."
      h1="DarkThreat vs ZeroFox"
      intro="ZeroFox bundles digital risk protection across brand, social, and dark web surfaces in a broad enterprise suite. DarkThreat focuses on dark web monitoring and credential leak detection."
      rows={[
        { feature: "Transparent public pricing", darkthreat: true, competitor: false },
        { feature: "Dark web & deep web monitoring", darkthreat: true, competitor: true },
        { feature: "Credential leak detection", darkthreat: true, competitor: true },
        { feature: "Brand & social media takedowns", darkthreat: "Via partners", competitor: true },
        { feature: "Infostealer log marketplace coverage", darkthreat: true, competitor: "Not publicly documented" },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Not published online (contact vendor)" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: "15-day evaluation trial (see vendor terms)" },
      ]}
      pricingNote="ZeroFox describes bundle options at https://www.zerofox.com/pricing/ but does not publish list prices online. Evaluation trials are described at https://www.zerofox.com/terms-and-transparency/trial-services-agreement/. Confirm current plans with ZeroFox."
      differentiators={[
        {
          title: "Depth over breadth",
          body: "ZeroFox covers brand, social, executive, and dark web risks. DarkThreat focuses on dark web monitoring and credential intelligence.",
        },
        {
          title: "Pay for what you use",
          body: "Monthly plans start at $288 with no annual commitment or minimum seats.",
        },
        {
          title: "Modern alerting, modern integrations",
          body: "Webhook, Slack, Teams, SIEM, and SOAR integrations are available out of the box.",
        },
        {
          title: "Faster time-to-value",
          body: "First alert in minutes. Your team can evaluate DarkThreat in a 7-day free trial.",
        },
      ]}
      showBreadcrumb
      showEvaluationChecklist
      showSwitchingNotes
      faqs={comparisonFaqs("ZeroFox")}    />
  );
}
