import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import ComparisonPage from "@/components/ComparisonPage";
import { comparisonFaqs, DARKTHREAT_OFFERS } from "@/lib/seo/compareContent";

export const metadata: Metadata = {
  title: "DarkThreat vs SpyCloud",
  description:
    "DarkThreat vs SpyCloud: compare pricing, trial options and credential exposure coverage. DarkThreat: from $288/mo, 7-day free trial, no credit card.",
  ...pageSeo("/compare/darkthreat-vs-spycloud"),
};

const VERIFIED = "per SpyCloud's website, verified 10 Oct 2026";

export default function ComparisonSpyCloud() {
  return (
    <ComparisonPage
      competitorName="SpyCloud"
      slug="darkthreat-vs-spycloud"
      title="DarkThreat vs SpyCloud — Comparison (2026)"
      description="Compare DarkThreat with SpyCloud on pricing, trial options and credential exposure coverage. SpyCloud is an identity threat protection platform built on recaptured darknet data. DarkThreat plans start at $288/month with a 7-day free trial and no credit card required."
      h1="DarkThreat vs SpyCloud"
      intro="SpyCloud is an identity threat protection platform built on data it describes as recaptured from the darknet, including malware infections, phishing, combolists and breaches, with a focus on automated remediation. DarkThreat is a dark web monitoring service with published plans from $288/month and a 7-day free trial with no credit card required."
      rows={[
        { feature: "Starting price", darkthreat: "From $288/mo", competitor: "Not published online (contact vendor)" },
        {
          feature: "Billing / pricing model",
          darkthreat: "Monthly or annual; monthly plans cancel anytime",
          competitor: "Tiered by accounts protected, seats or API queries; billing terms not publicly documented",
        },
        {
          feature: "Free trial",
          darkthreat: "7-day free trial",
          competitor: "No product trial published; free \"Check Your Exposure\" domain report",
        },
        { feature: "Credit card required for trial", darkthreat: "Not required", competitor: "Not publicly documented" },
        {
          feature: "Breach & credential monitoring",
          darkthreat: "Yes (all plans)",
          competitor: "Yes (breach, malware, phished and combolist data)",
        },
        {
          feature: "Dark web forums & marketplaces",
          darkthreat: "Hacker chatter feeds (Enterprise plan)",
          competitor: "Not publicly documented",
        },
        { feature: "Telegram", darkthreat: "Not stated on pricing page", competitor: "Not publicly documented" },
        {
          feature: "Discord",
          darkthreat: "Not stated on pricing page",
          competitor: "Yes (states it recaptures data from private Discord servers)",
        },
        { feature: "Infostealer logs", darkthreat: "Not stated on pricing page", competitor: "Yes (malware-infected devices and users)" },
        { feature: "MSSP / white-label plan", darkthreat: "MSSP white-label plan", competitor: "Not publicly documented" },
      ]}
      pricingNote={`SpyCloud does not publish list prices online; its pricing page invites you to request a proposal and describes tiered pricing by solution (${VERIFIED}). DarkThreat details come from the DarkThreat pricing page.`}
      verificationNote={`SpyCloud details are ${VERIFIED}. "Not publicly documented" means we could not find the point on SpyCloud's own website, not that the capability is absent. See Sources below.`}
      lastReviewed="2026-10-10"
      competitorOverview={[
        {
          title: "What SpyCloud is",
          body: `SpyCloud says it uncovers identity exposures across malware infections, phishing attacks, ULP combolists and data breaches, and automatically remediates them to stop session hijacking, account takeover, ransomware and fraud. It sells three solution areas: Enterprise Protection for employee and third-party identities, Consumer Protection for customer accounts, and Investigations for cybercrime, insider risk and attribution work (${VERIFIED}).`,
        },
        {
          title: "Data coverage",
          body: `SpyCloud's pricing page describes alerts built on malware, breach and phished data, including detection of malware-infected devices, users and apps. Its newsroom states the company has passed 1.01 trillion recaptured identity assets, and its blog states that it recaptures stolen data directly from criminal sources, including private Discord servers (${VERIFIED}).`,
        },
        {
          title: "Pricing and trial",
          body: `SpyCloud does not publish list prices. Its pricing page describes Enterprise Protection as tiered by the number of employee accounts protected, Consumer Protection as tiered by customer accounts, and Investigations as tiered by seat count for the console (with up to 200 API queries per seat included) or by number of queries for the API. No product free trial is published. SpyCloud offers a free "Check Your Exposure" domain report that requires a business email and sends a report link by email (${VERIFIED}).`,
        },
        {
          title: "Integrations",
          body: `SpyCloud lists integrations with identity providers (Active Directory, Microsoft Entra ID, Okta, Ping Identity), EDR tools (CrowdStrike Falcon, Microsoft Defender), SIEMs (Splunk, Elastic, Google SecOps, Microsoft Sentinel, Devo), SOAR platforms (Cortex XSOAR, Tines, Swimlane) and investigation tools (Maltego with 80+ transforms, Jupyter Notebooks) (${VERIFIED}).`,
        },
        {
          title: "Recent announcements",
          body: `SpyCloud announced a deeper Okta partnership on 11 June 2026, launched its Research Agent for Cybercrime Investigations on 24 June 2026, announced it had passed one trillion recaptured identity assets on 16 July 2026, and marked its 10-year anniversary on 20 August 2026 (${VERIFIED}).`,
        },
      ]}
      differentiatorsHeading="What DarkThreat offers"
      differentiators={DARKTHREAT_OFFERS}
      betterFit={[
        "Teams whose priority is automatically resetting compromised passwords or revoking stolen session cookies in Okta, Microsoft Entra ID or Active Directory.",
        "Consumer-facing businesses that want exposure checks at account creation or login through an API embedded in their own site or app.",
        "Investigators and CTI analysts who work in Maltego or Jupyter Notebooks and want pre-built transforms and notebooks.",
      ]}
      showBreadcrumb
      showEvaluationChecklist
      showSwitchingNotes
      faqs={[
        ...comparisonFaqs("SpyCloud"),
        {
          q: "Does SpyCloud publish its pricing?",
          a: "No. Per SpyCloud's website (verified 10 Oct 2026), pricing is tiered by solution: by employee accounts protected, by customer accounts protected, or by seats and API queries for Investigations. You request a proposal for exact figures.",
        },
        {
          q: "Does SpyCloud offer a free trial?",
          a: "SpyCloud's website does not publish a product free trial (verified 10 Oct 2026). It does offer a free \"Check Your Exposure\" domain report for business email addresses. Whether a credit card is needed for any evaluation is not publicly documented.",
        },
        {
          q: "Does SpyCloud cover Discord?",
          a: "SpyCloud's blog states that it recaptures stolen data directly from criminal sources, including private Discord servers (verified 10 Oct 2026).",
        },
      ]}
      sources={[
        { label: "SpyCloud homepage", url: "https://spycloud.com/" },
        { label: "SpyCloud pricing", url: "https://spycloud.com/pricing/" },
        { label: "SpyCloud integrations", url: "https://spycloud.com/integrations/" },
        { label: "SpyCloud Check Your Exposure", url: "https://spycloud.com/check-your-exposure/" },
        { label: "SpyCloud Check Your Exposure FAQ", url: "https://spycloud.com/lp/check-your-exposure-instantly/" },
        { label: "SpyCloud blog: Dark web on Discord", url: "https://spycloud.com/blog/discord-dark-web/" },
        {
          label: "SpyCloud and Okta partnership (11 Jun 2026)",
          url: "https://spycloud.com/newsroom/spycloud-and-okta-partner-to-automate-identity-threat-defense/",
        },
        {
          label: "SpyCloud Research Agent launch (24 Jun 2026)",
          url: "https://spycloud.com/newsroom/spycloud-launches-groundbreaking-cybercrime-investigations-research-agent/",
        },
        {
          label: "SpyCloud passes one trillion recaptured assets (16 Jul 2026)",
          url: "https://spycloud.com/newsroom/spycloud-surpasses-one-trillion-recaptured-identity-assets/",
        },
        { label: "SpyCloud turns 10 (20 Aug 2026)", url: "https://spycloud.com/newsroom/spycloud-turns-10-years/" },
      ]}
      relatedLinks={[
        {
          label: "DarkThreat vs SpyCloud: Which Offers Better Coverage",
          href: "/blog/darkthreat-vs-spycloud-which-offers-better-coverage",
        },
      ]}
    />
  );
}
