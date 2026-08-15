import ComparisonPage from "@/components/ComparisonPage";

export default function ComparisonSocRadar() {
  return (
    <ComparisonPage
      competitorName="SOCRadar"
      slug="darkthreat-vs-socradar"
      title="DarkThreat vs SOCRadar — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and SOCRadar on dark web monitoring, credential leak detection, attack surface coverage, pricing transparency, and time-to-value. 7-day free trial, no credit card."
      h1="DarkThreat vs SOCRadar"
      intro="SOCRadar offers a broad extended threat intelligence (XTI) suite covering attack surface, brand, and dark web. DarkThreat is a focused dark web monitoring and credential leak detection product — lighter to deploy, simpler to budget, and integrated with the SIEM and SOAR you already use."
      rows={[
        { feature: "Self-serve onboarding", darkthreat: true, competitor: "Freemium tier" },
        { feature: "Transparent paid pricing", darkthreat: true, competitor: false },
        { feature: "Dark web forum coverage", darkthreat: true, competitor: true },
        { feature: "Credential leak detection", darkthreat: true, competitor: true },
        { feature: "External attack surface management", darkthreat: "Via integrations", competitor: true },
        { feature: "Infostealer log coverage", darkthreat: "2M+ sources", competitor: true },
        { feature: "Starting paid price", darkthreat: "$288/mo", competitor: "Custom (sales quote)" },
        { feature: "7-day free trial of full platform", darkthreat: true, competitor: "Limited freemium" },
        { feature: "Annual contract required for paid tiers", darkthreat: false, competitor: true },
      ]}
      pricingNote="SOCRadar offers a freemium tier; paid plans are sales-led with custom pricing. Figures reflect customer-reported ranges."
      differentiators={[
        {
          title: "Less surface area, more focus",
          body: "SOCRadar bundles XTI across many modules. DarkThreat concentrates engineering on dark web and credential signals — the events that actually become incidents.",
        },
        {
          title: "Real free trial, not a feature-gated freemium",
          body: "Our 7-day trial unlocks the full product. You evaluate against your real assets, not a demo dataset.",
        },
        {
          title: "Predictable monthly pricing",
          body: "Plans start at $288/month with no annual commit. Cancel anytime; no procurement gauntlet.",
        },
        {
          title: "Fits into your existing stack",
          body: "Webhooks, Slack, Teams, SIEM, and SOAR integrations out of the box — augment what you already run instead of replacing it.",
        },
      ]}
    />
  );
}
