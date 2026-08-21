import type { Metadata } from "next";
import ComparisonPage from "@/components/ComparisonPage";

/**
 * Neutral placeholder comparison content — competitor-specific claims must be
 * supplied by the site owner. Structure mirrors the other /compare pages.
 */
export const metadata: Metadata = {
  title: "DarkThreat vs Cybersixgill — Dark Web Monitoring Comparison (2026)",
  description: "Compare DarkThreat and Cybersixgill on dark web monitoring, credential leak detection, coverage, pricing transparency, and time-to-value. Start a free 7-day trial — no credit card.",
  alternates: { canonical: "/compare/darkthreat-vs-cybersixgill" },
};

export default function ComparisonCybersixgill() {
  return (
    <ComparisonPage
      competitorName="Cybersixgill"
      slug="darkthreat-vs-cybersixgill"
      title="DarkThreat vs Cybersixgill — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and Cybersixgill on dark web monitoring, credential leak detection, coverage, pricing transparency, and time-to-value. Start a free 7-day trial — no credit card."
      h1="DarkThreat vs Cybersixgill"
      intro="Cybersixgill is a threat intelligence platform focused on deep and dark web collection for enterprise SOC teams. DarkThreat delivers focused dark web monitoring and credential leak detection that mid-market teams can self-serve in minutes. The head-to-head details below are placeholders — verify against current vendor documentation before publishing."
      rows={[
        { feature: "Self-serve onboarding", darkthreat: true, competitor: "Verify with vendor" },
        { feature: "Transparent public pricing", darkthreat: true, competitor: "Verify with vendor" },
        { feature: "Dark web forum coverage", darkthreat: true, competitor: "Verify with vendor" },
        { feature: "Telegram & Discord channels", darkthreat: true, competitor: "Verify with vendor" },
        { feature: "Infostealer log marketplaces", darkthreat: "2M+ sources", competitor: "Verify with vendor" },
        { feature: "Credential leak detection", darkthreat: true, competitor: "Verify with vendor" },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Verify with vendor" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: "Verify with vendor" },
        { feature: "MSSP / white-label plan", darkthreat: true, competitor: "Verify with vendor" },
      ]}
      pricingNote="Cybersixgill pricing and feature-parity details above are placeholders pending owner review — do not treat as verified competitive claims."
      differentiators={[
        {
          title: "Try it before you talk to sales",
          body: "DarkThreat lets you start a 7-day free trial in under a minute with full platform access — no demo gating.",
        },
        {
          title: "Public pricing you can budget against",
          body: "Plans start at $288/month, published openly. No 'contact us' pricing pages or multi-week quote cycles.",
        },
        {
          title: "Focused on the signal that matters",
          body: "Every engineering hour goes into dark web and credential intelligence — the signals tied to actual breaches — rather than a broad multi-module suite.",
        },
        {
          title: "Modern integrations out of the box",
          body: "Webhook, Slack, Teams, SIEM, and SOAR integrations ship with the product. No professional services engagement required to wire up your stack.",
        },
      ]}
    />
  );
}
