import ComparisonPage from "@/components/ComparisonPage";

export default function ComparisonZeroFox() {
  return (
    <ComparisonPage
      competitorName="ZeroFox"
      slug="darkthreat-vs-zerofox"
      title="DarkThreat vs ZeroFox — Comparison | DarkThreat.ai"
      description="See how DarkThreat compares to ZeroFox on dark web coverage, credential leak detection, pricing, and ease of deployment. Transparent pricing and 7-day free trial."
      h1="DarkThreat vs ZeroFox"
      intro="ZeroFox bundles digital risk protection across brand, social, and dark web surfaces in a wide enterprise suite. DarkThreat goes deep on the dark web and credential leak signals that actually trigger incidents — without the platform sprawl or sales-led pricing."
      rows={[
        { feature: "Self-serve onboarding", darkthreat: true, competitor: false },
        { feature: "Transparent public pricing", darkthreat: true, competitor: false },
        { feature: "Dark web & deep web monitoring", darkthreat: true, competitor: true },
        { feature: "Credential leak detection", darkthreat: true, competitor: true },
        { feature: "Brand & social media takedowns", darkthreat: "Via partners", competitor: true },
        { feature: "Infostealer log marketplace coverage", darkthreat: true, competitor: "Limited" },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Custom (sales quote)" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: false },
        { feature: "Annual contract required", darkthreat: false, competitor: true },
      ]}
      pricingNote="ZeroFox pricing is sales-led and not published publicly; figures reflect customer-reported ranges in 2024–2026."
      differentiators={[
        {
          title: "Depth over breadth",
          body: "ZeroFox spreads across brand, social, executive, and dark web. DarkThreat focuses every engineering hour on dark web and credential intelligence — the signals tied to actual breaches.",
        },
        {
          title: "Pay for what you use",
          body: "Monthly plans starting at $288. No annual commit, no minimum seats, no platform tax for modules you'll never enable.",
        },
        {
          title: "Modern alerting, modern integrations",
          body: "Webhook, Slack, Teams, SIEM, and SOAR integrations out of the box. No professional services engagement to wire up your stack.",
        },
        {
          title: "Faster time-to-value",
          body: "First alert in minutes, not weeks. We don't sell a 90-day implementation — we sell a working product you turn on yourself.",
        },
      ]}
    />
  );
}
