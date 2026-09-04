import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";

export const metadata: Metadata = {
  title: "DarkThreat vs Recorded Future — Dark Web Monitoring Comparison (2026)",
  description: "Compare DarkThreat and Recorded Future on dark web coverage, credential leak detection, pricing transparency, and time-to-value. Self-serve 7-day free trial — no sales call required.",
  ...pageSeo("/compare/darkthreat-vs-recorded-future"),
};

export default function ComparisonRecordedFuture() {
  return (
    <ComparisonPage
      competitorName="Recorded Future"
      slug="darkthreat-vs-recorded-future"
      title="DarkThreat vs Recorded Future — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and Recorded Future on dark web coverage, credential leak detection, pricing transparency, and time-to-value. Self-serve 7-day free trial — no sales call required."
      h1="DarkThreat vs Recorded Future"
      intro="Recorded Future is an enterprise threat intelligence platform built for large SOC teams with six-figure budgets and dedicated analysts. DarkThreat delivers focused dark web monitoring and credential leak detection that mid-market security teams can self-serve in minutes — at a fraction of the cost."
      rows={[
        { feature: "Self-serve onboarding (no sales call)", darkthreat: true, competitor: false },
        { feature: "Transparent public pricing", darkthreat: true, competitor: false },
        { feature: "Real-time credential leak detection", darkthreat: true, competitor: true },
        { feature: "Dark web forums & Telegram coverage", darkthreat: true, competitor: true },
        { feature: "Infostealer log monitoring", darkthreat: true, competitor: true },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Custom (typically $50k+/yr)" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: false },
        { feature: "Time to first alert", darkthreat: "Minutes", competitor: "Days to weeks" },
        { feature: "Ideal team size", darkthreat: "1–50 person security team", competitor: "Large SOC / Fortune 500" },
      ]}
      pricingNote="Pricing reflects publicly listed plans as of 2026. Recorded Future requires a sales-led engagement; figures cited are widely reported third-party estimates."
      differentiators={[
        {
          title: "Built for the 99% of teams that aren't a Fortune 500 SOC",
          body: "Recorded Future is engineered for enterprise teams with dedicated threat intel analysts. DarkThreat is purpose-built for lean security teams that need answers, not raw intel feeds.",
        },
        {
          title: "No procurement cycle",
          body: "Sign up, connect your domains, and get your first alert in under five minutes. No annual contract, no minimum spend, no sales conversation required.",
        },
        {
          title: "Pricing you can put in a budget today",
          body: "Plans start at $288/month with public pricing. You'll never wait two weeks for a quote or sign a multi-year MSA just to see what we cost.",
        },
        {
          title: "Focused on what matters: leaks and exposure",
          body: "We don't try to be a one-stop threat intel platform. We do dark web monitoring and credential leak detection exceptionally well, and we integrate cleanly with the SIEM and SOAR you already own.",
        },
      ]}
    />
  );
}
