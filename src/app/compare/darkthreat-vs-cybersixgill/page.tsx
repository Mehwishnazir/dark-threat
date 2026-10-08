import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonFaqs } from "@/lib/seo/compareContent";

export const metadata: Metadata = {
  title: "DarkThreat vs Cybersixgill",
  description:
    "Compare DarkThreat and Cybersixgill (Bitsight CTI) on dark web monitoring, credential leak detection, coverage, and pricing. 7-day free trial, no credit card.",
  ...pageSeo("/compare/darkthreat-vs-cybersixgill"),
};

export default function ComparisonCybersixgill() {
  return (
    <ComparisonPage
      competitorName="Cybersixgill"
      slug="darkthreat-vs-cybersixgill"
      title="DarkThreat vs Cybersixgill — Dark Web Monitoring Comparison (2026)"
      description="Compare DarkThreat and Cybersixgill on dark web monitoring, credential leak detection, coverage, and pricing. Cybersixgill is part of Bitsight following its December 2024 acquisition. 7-day free trial, no credit card."
      h1="DarkThreat vs Cybersixgill"
      intro="Cybersixgill is now part of Bitsight. Bitsight Cyber Threat Intelligence (CTI) collects and alerts on emerging threats from the clear, deep, and dark web — including compromised credentials, underground forums, and messaging channels. DarkThreat focuses on dark web monitoring and credential leak detection for mid-market security teams."
      rows={[
        { feature: "Transparent public pricing", darkthreat: true, competitor: "Not publicly documented" },
        { feature: "Dark web forum coverage", darkthreat: true, competitor: true },
        { feature: "Telegram & Discord channels", darkthreat: true, competitor: true },
        { feature: "Credential leak detection", darkthreat: true, competitor: true },
        { feature: "Starting price", darkthreat: "$288/mo", competitor: "Not published online (contact vendor)" },
        { feature: "7-day free trial (no credit card)", darkthreat: true, competitor: "Not publicly documented (demo available)" },
        { feature: "MSSP / white-label plan", darkthreat: true, competitor: "MSSP program (see vendor terms)" },
      ]}
      pricingNote="Bitsight announced its agreement to acquire Cybersixgill on 14 November 2024 and completed the acquisition on 11 December 2024. Bitsight CTI pricing is not published online; evaluation is via demo request. Confirm current plans at https://www.bitsight.com/products/cyber-threat-intelligence and https://cybersixgill.com/."
      differentiators={[
        {
          title: "Focused dark web monitoring",
          body: "DarkThreat concentrates on dark web monitoring and credential leak detection rather than a multi-module CTI suite.",
        },
        {
          title: "7-day free trial, no credit card",
          body: "Request your 7-day free trial through our team — no credit card required.",
        },
        {
          title: "DarkThreat monthly plans",
          body: "DarkThreat plans start at $288/month. Cancel anytime on monthly billing.",
        },
        {
          title: "Where Cybersixgill may be the better fit",
          body: "Teams building a broad CTI program — spanning identity exposure, attack surface correlation, vulnerability prioritization, and adversary intelligence in one platform — may find Bitsight CTI (Cybersixgill) better aligned than a standalone dark web monitoring tool.",
        },
      ]}
      showBreadcrumb
      showEvaluationChecklist
      showSwitchingNotes
      faqs={comparisonFaqs("Cybersixgill")}
    />
  );
}
