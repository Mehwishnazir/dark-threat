import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonFaqs, DARKTHREAT_OFFERS } from "@/lib/seo/compareContent";

export const metadata: Metadata = {
  title: "DarkThreat vs Mandiant",
  description:
    "DarkThreat vs Mandiant (Google Threat Intelligence): pricing, trial options and dark web monitoring coverage. DarkThreat: from $288/mo, 7-day free trial.",
  ...pageSeo("/compare/darkthreat-vs-mandiant"),
};

const VERIFIED = "per Google's website, verified 10 Oct 2026";

export default function ComparisonMandiant() {
  return (
    <ComparisonPage
      competitorName="Mandiant"
      slug="darkthreat-vs-mandiant"
      title="DarkThreat vs Mandiant (Google Threat Intelligence) — Comparison (2026)"
      description="Compare DarkThreat with Mandiant Digital Threat Monitoring, now part of Google Threat Intelligence, on pricing, trial options and dark web coverage. DarkThreat plans start at $288/month with a 7-day free trial and no credit card required."
      h1="DarkThreat vs Mandiant (Google Threat Intelligence)"
      intro="Mandiant is part of Google Cloud, and its threat intelligence is now sold as Google Threat Intelligence, which combines Google's threat insights, Mandiant's analyst-curated intelligence and VirusTotal. Its dark web module, Mandiant Digital Threat Monitoring, covers open, deep and dark web sources. DarkThreat is a dark web monitoring service with published plans from $288/month and a 7-day free trial with no credit card required."
      rows={[
        { feature: "Starting price", darkthreat: "From $288/mo", competitor: "Not published online (contact vendor)" },
        {
          feature: "Billing / pricing model",
          darkthreat: "Monthly or annual; monthly plans cancel anytime",
          competitor: "Flat annual rate with a set number of API calls per subscription level",
        },
        { feature: "Free trial", darkthreat: "7-day free trial", competitor: "No trial published (demo request)" },
        { feature: "Credit card required for trial", darkthreat: "Not required", competitor: "Not publicly documented" },
        {
          feature: "Breach & credential monitoring",
          darkthreat: "Yes (all plans)",
          competitor: "Monitors paste sites, Telegram and forums where leaks appear; no stand-alone credential data search or alerts (DTM FAQ)",
        },
        {
          feature: "Dark web forums & marketplaces",
          darkthreat: "Hacker chatter feeds (Enterprise plan)",
          competitor: "Yes (Digital Threat Monitoring, Enterprise and Enterprise+ tiers)",
        },
        { feature: "Telegram", darkthreat: "Not stated on pricing page", competitor: "Yes (Telegram messages collected)" },
        { feature: "Discord", darkthreat: "Not stated on pricing page", competitor: false },
        { feature: "Infostealer logs", darkthreat: "Not stated on pricing page", competitor: "Not publicly documented" },
        {
          feature: "MSSP / white-label plan",
          darkthreat: "MSSP white-label plan",
          competitor: "OEM tier for security vendors, telcos and MSSPs",
        },
      ]}
      pricingNote={`Google Threat Intelligence pricing is not published online: the Standard, Enterprise, Enterprise+ and OEM tiers are all listed as "Contact sales for pricing" (${VERIFIED}). Digital Threat Monitoring is included only in the Enterprise and Enterprise+ tiers. DarkThreat details come from the DarkThreat pricing page.`}
      verificationNote={`Mandiant and Google Threat Intelligence details are per Google's website and documentation, verified 10 Oct 2026. The Discord cross reflects Google's DTM FAQ, which states "There is no Discord collection." See Sources below.`}
      lastReviewed="2026-10-10"
      competitorOverview={[
        {
          title: "What Google Threat Intelligence is",
          body: `Google Threat Intelligence is a threat intelligence subscription that brings together Google's threat insights, Mandiant's frontline and human-curated intelligence, and VirusTotal's threat database. Google positions the tiers from Standard, for threat-intelligence-driven event triage and detections, up to Enterprise+, for organizations with strong cyber threat intelligence teams (${VERIFIED}).`,
        },
        {
          title: "Mandiant Digital Threat Monitoring",
          body: `Digital Threat Monitoring (DTM) monitors open, deep and dark web sources, including underground marketplaces, paste sites, forums and blogs, and Google's documentation says it monitors 200+ card forums, marketplaces and ransomware sites. Alerts are created in near real time when collected content matches monitors you define. DTM is now sold exclusively inside Google Threat Intelligence Enterprise and Enterprise+ (${VERIFIED}).`,
        },
        {
          title: "Messaging and credential sources",
          body: `Google's DTM FAQ states that Telegram messages are collected and available in Google Threat Intelligence, that WhatsApp collection has not yet been integrated with DTM, and that there is no Discord collection. The same FAQ says DTM has no current support to display, search or alert on stand-alone credential data; instead it monitors places where credentials might show up, such as paste sites, Telegram channels and forum samples (${VERIFIED}).`,
        },
        {
          title: "Pricing, trial and integrations",
          body: `Google lists Standard, Enterprise, Enterprise+ and OEM tiers, each as "Contact sales for pricing", priced on a flat annual rate with a set number of API calls per subscription level. No Google Threat Intelligence trial is published; the documented route is a demo request. Google's integrations list includes Google SecOps SIEM and SOAR, Splunk and Splunk SOAR, Microsoft Sentinel and Palo Alto Cortex XSOAR (${VERIFIED}).`,
        },
        {
          title: "Recent history",
          body: `Google completed its acquisition of Mandiant on 12 September 2022 and kept the Mandiant brand. Google announced Google Threat Intelligence at the RSA Conference on 6 May 2024 (${VERIFIED}).`,
        },
      ]}
      differentiatorsHeading="What DarkThreat offers"
      differentiators={DARKTHREAT_OFFERS}
      betterFit={[
        "Teams that need malware analysis, indicator enrichment, YARA hunting and threat actor attribution, not only exposure alerts.",
        "Organizations already running Google Security Operations (SecOps) that want threat intelligence inside the same workflow.",
        "Teams that want access to Mandiant threat intelligence analysts, or a designated analyst through Managed Digital Threat Monitoring.",
        "Security vendors, telcos and MSSPs that want to embed threat intelligence in their own product through the Google Threat Intelligence OEM tier.",
      ]}
      showBreadcrumb
      showEvaluationChecklist
      showSwitchingNotes
      faqs={[
        ...comparisonFaqs("Mandiant"),
        {
          q: "Is Mandiant Digital Threat Monitoring still sold on its own?",
          a: `No. Per Google's website (verified 10 Oct 2026), Digital Threat Monitoring is now exclusively a feature within Google Threat Intelligence Enterprise and Enterprise+, and pricing is available by contacting Google sales.`,
        },
        {
          q: "Does Google offer a free trial of Google Threat Intelligence?",
          a: "Google's website does not publish a Google Threat Intelligence trial (verified 10 Oct 2026); the documented route is a demo request. DarkThreat offers a 7-day free trial with no credit card required.",
        },
        {
          q: "Which messaging platforms does Digital Threat Monitoring collect from?",
          a: "Per Google's DTM FAQ (verified 10 Oct 2026), Telegram messages are collected, WhatsApp collection is not yet integrated with DTM, and there is no Discord collection.",
        },
      ]}
      sources={[
        { label: "Google Threat Intelligence product and pricing page", url: "https://cloud.google.com/security/products/threat-intelligence" },
        { label: "Mandiant Digital Threat Monitoring product page", url: "https://cloud.google.com/security/products/digital-threat-monitoring" },
        { label: "Google TI docs: Digital Threat Monitoring", url: "https://gtidocs.virustotal.com/docs/digital-threat-monitoring" },
        { label: "Google TI docs: Digital Threat Monitoring FAQ", url: "https://gtidocs.virustotal.com/docs/digital-threat-monitoring-faq" },
        { label: "Google TI docs: list of integrations", url: "https://gtidocs.virustotal.com/docs/technology-integrations-list" },
        { label: "Google Threat Intelligence demo request", url: "https://cloud.google.com/security/resources/google-threat-intelligence-demo" },
        { label: "Google completes acquisition of Mandiant (12 Sep 2022)", url: "https://cloud.google.com/blog/products/identity-security/google-completes-acquisition-of-mandiant" },
        {
          label: "Introducing Google Threat Intelligence (6 May 2024)",
          url: "https://cloud.google.com/blog/products/identity-security/introducing-google-threat-intelligence-actionable-threat-intelligence-at-google-scale-at-rsa",
        },
      ]}
      relatedLinks={[
        {
          label: "Mandiant Advantage vs DarkThreat — Threat Intelligence Compared",
          href: "/blog/mandiant-advantage-vs-darkthreat-threat-intelligence-compared",
        },
      ]}
    />
  );
}
