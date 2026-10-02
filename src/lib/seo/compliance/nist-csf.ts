import { Landmark, KeyRound, Bug, Network, Truck, Siren } from "lucide-react";
import type { CompliancePageData } from "./types";

export const nistCsfCompliance: CompliancePageData = {
  slug: "nist-csf",
  path: "/compliance/nist-csf",
  name: "NIST CSF",
  summary: "External threat intelligence supporting GV.SC, ID.RA, DE.CM, DE.AE, and RS.MA outcomes in NIST CSF 2.0.",
  metaTitle: "NIST CSF 2.0 Dark Web Monitoring",
  metaDescription:
    "Dark web monitoring aligned with NIST CSF 2.0 outcomes in GV.SC, ID.RA, DE.CM, DE.AE and RS.MA. Add external threat intelligence to your CSF profile.",
  hero: {
    badge: "NIST CSF 2.0 Alignment",
    icon: Landmark,
    titleLead: "Dark Web Monitoring Aligned With",
    titleHighlight: "the NIST Cybersecurity Framework 2.0",
    intro:
      "NIST CSF 2.0 describes cybersecurity outcomes, not products. DarkThreat helps you reach several of them — receiving threat intelligence, identifying external threats, monitoring third parties, analysing adverse events, and managing incidents — by watching credential markets, infostealer logs, leak sites, and criminal forums for your organisation and its suppliers.",
    ctaLabel: "Talk to Us About NIST CSF Monitoring",
  },
  overview: {
    heading: "Where dark web monitoring fits in the CSF",
    paragraphs: [
      "Version 2.0 of the NIST Cybersecurity Framework, published in February 2024, organises outcomes into six Functions: Govern (GV), Identify (ID), Protect (PR), Detect (DE), Respond (RS), and Recover (RC). Each Function contains Categories and Subcategories that describe what good looks like, such as ID.RA-02, \u201cCyber threat intelligence is received from information sharing forums and sources.\u201d The framework is voluntary and technology-neutral; organisations decide how to achieve each outcome.",
      "Several outcomes depend on seeing beyond your own network. You cannot fully identify and record external threats (ID.RA-03), monitor external service providers (DE.CM-06), or manage supply chain risk across a relationship (GV.SC-07) using internal telemetry alone. Leaked credentials, stealer logs, access-broker listings, and supplier names on ransomware leak sites are external signals that map directly onto those outcomes.",
      "DarkThreat supplies those signals with timestamps and sources so your team can act on them and show the outcome is being achieved. There is no NIST CSF certification, and DarkThreat does not assess, score, or certify your CSF implementation; using it supports particular outcomes in your profile, which your organisation remains responsible for defining and achieving.",
    ],
  },
  threats: {
    heading: "External threats DarkThreat brings into view",
    intro:
      "These dark web signals are the external threats most often relevant to the Identify, Detect, and Respond Functions.",
    items: [
      {
        icon: KeyRound,
        title: "Compromised credentials",
        desc: "Workforce and service account passwords exposed in breaches and combo lists, relevant to the identity outcomes in PR.AA.",
      },
      {
        icon: Bug,
        title: "Infostealer infections",
        desc: "Stealer logs revealing infected devices, stolen sessions, and saved passwords for your corporate applications.",
      },
      {
        icon: Network,
        title: "Access for sale",
        desc: "Initial access brokers advertising VPN, RDP, or cloud access into your environment before an attack is launched.",
      },
      {
        icon: Truck,
        title: "Supplier compromise",
        desc: "Credentials, data, or access belonging to your suppliers and service providers appearing on criminal sources.",
      },
      {
        icon: Siren,
        title: "Leak site postings",
        desc: "Ransomware and extortion groups naming your organisation or publishing data taken from it.",
      },
      {
        icon: Landmark,
        title: "Targeting chatter",
        desc: "Forum discussion naming your organisation, sector, or technologies, which informs your threat picture.",
      },
    ],
  },
  capabilities: {
    heading: "Monitoring capabilities mapped to CSF outcomes",
    intro:
      "Each capability produces dated, source-attributed findings that can be used as evidence of an outcome and to track progress toward your target profile.",
    items: [
      {
        title: "Threat intelligence feed",
        desc: "Findings delivered by alert and API, giving you a dark web source for ID.RA-02 and context for DE.AE-07.",
      },
      {
        title: "Domain credential monitoring",
        desc: "Continuous checks of breach corpora, combo lists, and infostealer logs for credentials tied to your domains.",
      },
      {
        title: "Supplier watchlists",
        desc: "Monitoring of supplier and service provider domains you add, supporting GV.SC-07 and DE.CM-06.",
      },
      {
        title: "Leak site and forum watch",
        desc: "Tracking of ransomware leak sites, breach forums, and Telegram channels for your organisation and brands.",
      },
      {
        title: "Severity and triage data",
        desc: "Findings arrive with source and context, helping your team triage, categorise, and prioritise them under RS.MA.",
      },
      {
        title: "SIEM and SOAR integration",
        desc: "API delivery into your existing tooling so dark web findings are correlated with internal events, as DE.AE-03 describes.",
      },
    ],
  },
  controls: {
    heading: "How DarkThreat outputs map to CSF 2.0 outcomes",
    intro:
      "These references are Categories and Subcategories from NIST CSF 2.0. DarkThreat supports these outcomes; how you achieve them is defined in your organisational profile.",
    items: [
      {
        ref: "GV.SC-07",
        title: "Supplier risk across the relationship",
        desc: "Supplier watchlists help you understand and monitor risks posed by suppliers over the course of the relationship.",
      },
      {
        ref: "ID.RA-02",
        title: "Threat intelligence received",
        desc: "DarkThreat is a source of cyber threat intelligence drawn from criminal forums, markets, and leak sites.",
      },
      {
        ref: "ID.RA-03",
        title: "External threats identified",
        desc: "Findings help you identify and record external threats targeting your organisation.",
      },
      {
        ref: "PR.AA-01",
        title: "Identities and credentials managed",
        desc: "Exposed-credential alerts support managing identities and credentials, including resetting compromised ones.",
      },
      {
        ref: "DE.CM-06",
        title: "External provider monitoring",
        desc: "Watching provider domains helps monitor external service providers for potentially adverse events.",
      },
      {
        ref: "DE.AE-07",
        title: "Threat intelligence in analysis",
        desc: "Dark web context can be integrated into the analysis of potentially adverse events in your SOC.",
      },
      {
        ref: "RS.MA-02 / RS.MA-03",
        title: "Incident triage and prioritisation",
        desc: "Source-attributed findings help you triage, validate, categorise, and prioritise incident reports.",
      },
      {
        ref: "ID.IM",
        title: "Improvement",
        desc: "Patterns in findings over time help identify improvements to your controls and your target profile.",
      },
    ],
  },
  deepDive: {
    heading: "Using dark web monitoring in your CSF profiles",
    paragraphs: [
      "CSF 2.0 is applied through organisational profiles. A Current Profile describes the outcomes you achieve today; a Target Profile describes the outcomes you aim for, prioritised by risk. The gaps between them become an action plan. Tiers, from Partial (Tier 1) to Adaptive (Tier 4), describe how rigorous your governance and management of cybersecurity risk are. Dark web monitoring is often one of the clearest ways to close gaps in ID.RA, DE.CM, and GV.SC, because those outcomes require information that internal tools do not have.",
      "When writing a profile, be specific. Rather than recording \u201cthreat intelligence: yes\u201d against ID.RA-02, describe the sources, who receives them, and what happens next. For DE.CM-06, list which providers are monitored and how findings are escalated. For RS.MA, record how dark web alerts are triaged, which severities trigger incident declaration under DE.AE-08, and who coordinates with affected third parties under RS.MA-01. NIST's Implementation Examples and Informative References can help you choose and document practices for each Subcategory.",
      "The Govern Function, new in 2.0, also matters. GV.SC asks organisations to establish and run a cybersecurity supply chain risk management programme, including monitoring suppliers over the relationship and planning for incidents that involve them. Supplier watchlists give that programme an ongoing external signal. Pairing them with your contract and due diligence processes helps turn supply chain risk management into something that is measurable.",
      "Dark web monitoring also complements identity guidance. NIST SP 800-63B recommends checking new passwords against lists of values known to be commonly used, expected, or compromised. Credential monitoring adds the other half: noticing when a password already in use has been exposed, so it can be changed before it is abused.",
    ],
  },
  steps: {
    heading: "From dark web signal to CSF outcome",
    intro:
      "A typical workflow for organisations using DarkThreat to close gaps between their Current and Target Profiles.",
    items: [
      {
        title: "Map to your profile",
        desc: "Identify the Subcategories dark web monitoring supports in your Target Profile and register domains and suppliers. No agents are installed.",
      },
      {
        title: "Monitor continuously",
        desc: "DarkThreat watches credential markets, stealer logs, leak sites, and forums and raises findings tied to your scope.",
      },
      {
        title: "Analyse and respond",
        desc: "Your SOC correlates findings with internal events, declares incidents where criteria are met, and manages them under RS.MA.",
      },
      {
        title: "Measure and improve",
        desc: "Track findings and response times over time to update your Current Profile and identify improvements under ID.IM.",
      },
    ],
  },
  faqs: [
    {
      q: "Does the NIST CSF require dark web monitoring?",
      a: "No. CSF 2.0 describes outcomes, not tools. Outcomes such as ID.RA-02 (receiving threat intelligence), DE.CM-06 (monitoring external service providers), and GV.SC-07 (monitoring supplier risk) are ones that dark web monitoring commonly helps achieve.",
    },
    {
      q: "Can we get NIST CSF certified by using DarkThreat?",
      a: "There is no NIST CSF certification. The framework is voluntary and self-assessed or independently assessed against your own profiles. DarkThreat supports specific outcomes; it does not assess or score your implementation.",
    },
    {
      q: "Which CSF Function does dark web monitoring belong to?",
      a: "It spans several. It supplies threat intelligence for Identify (ID.RA), external monitoring for Detect (DE.CM and DE.AE), triage input for Respond (RS.MA), and supplier monitoring for Govern (GV.SC).",
    },
    {
      q: "What changed in CSF 2.0 that makes this more relevant?",
      a: "CSF 2.0 added the Govern Function, including a fuller supply chain risk management Category (GV.SC), and broadened the framework's audience beyond critical infrastructure to organisations of all sizes and sectors. Both make external and supplier visibility more prominent.",
    },
    {
      q: "Is this relevant to government agencies and contractors?",
      a: "Yes. Many agencies and contractors use the CSF alongside other NIST publications. DarkThreat findings can support the threat intelligence and monitoring outcomes in their profiles.",
    },
    {
      q: "How does this relate to NIST password guidance?",
      a: "NIST SP 800-63B recommends checking new passwords against known compromised values. Credential monitoring complements that by detecting when existing passwords are exposed after they were set.",
    },
  ],
  disclaimer:
    "This page is general information about how dark web and credential monitoring relates to the NIST Cybersecurity Framework 2.0. It is not legal or assessment advice. DarkThreat supports and is aligned with specific CSF outcomes, but there is no NIST CSF certification and DarkThreat does not make any organisation compliant with, or assess its conformance to, the framework. Consult a qualified adviser about your profiles.",
  relatedIndustries: [
    {
      label: "Government dark web monitoring",
      href: "/industries/government",
      desc: "Credential, access, and leak monitoring for public sector organisations and contractors.",
    },
    {
      label: "Financial services monitoring",
      href: "/industries/financial-services",
      desc: "Credential, fraud, and access-broker monitoring for banks, insurers, and payment firms.",
    },
    {
      label: "Compliance & framework alignment",
      href: "/compliance-framework-alignment",
      desc: "How DarkThreat supports evidence collection across multiple security frameworks.",
    },
  ],
  relatedPosts: [
    {
      label: "How Dark Web Monitoring Satisfies NIST CSF Detect Function",
      href: "/blog/how-dark-web-monitoring-satisfies-nist-csf-detect-function",
    },
    {
      label: "NIST Password Guidelines vs Credential Leak Monitoring: Both Required",
      href: "/blog/nist-password-guidelines-vs-credential-leak-monitoring-both-required",
    },
    {
      label: "How to Build an Incident Response Plan Around Dark Web Alerts",
      href: "/blog/how-to-build-an-incident-response-plan-around-dark-web-alerts",
    },
    {
      label: "Third-Party Vendor Credential Monitoring — Managing Supply Chain Risk",
      href: "/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk",
    },
  ],
};
