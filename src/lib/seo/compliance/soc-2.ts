import { ClipboardCheck, KeyRound, Bug, Cloud, Users, Code } from "lucide-react";
import type { CompliancePageData } from "./types";

export const soc2Compliance: CompliancePageData = {
  slug: "soc-2",
  path: "/compliance/soc-2",
  name: "SOC 2",
  summary: "Consistent monitoring evidence for Trust Services Criteria CC6, CC7.2–CC7.4, and CC9.2 across a Type II period.",
  metaTitle: "SOC 2 Dark Web Monitoring & Audit Evidence",
  metaDescription:
    "Dark web monitoring aligned with SOC 2 Trust Services Criteria CC6, CC7.2–CC7.4 and CC9.2. Consistent, timestamped evidence for your Type II period.",
  hero: {
    badge: "SOC 2 Trust Services Criteria Alignment",
    icon: ClipboardCheck,
    titleLead: "Dark Web Monitoring That Supports",
    titleHighlight: "SOC 2 Security Criteria and Audit Evidence",
    intro:
      "SOC 2 auditors want to see that your controls operate consistently across the whole examination period — not just that a tool exists. DarkThreat monitors credential markets, infostealer logs, and leak sites for your domains and produces a dated record of every finding and response, which helps service organisations evidence the monitoring and incident criteria in CC6, CC7, and CC9.",
    ctaLabel: "Talk to Us About SOC 2 Monitoring",
  },
  overview: {
    heading: "Where dark web monitoring fits in a SOC 2 examination",
    paragraphs: [
      "A SOC 2 report is an attestation by an independent CPA firm on a service organisation's controls relevant to the AICPA Trust Services Criteria: security, and optionally availability, processing integrity, confidentiality, and privacy. It is not a certification. A Type I report looks at whether controls are suitably designed at a point in time; a Type II report also tests whether they operated effectively over a period, commonly between three and twelve months.",
      "The security category — the common criteria, CC1 through CC9 — is included in every SOC 2 report. Several of those criteria are about knowing when something has gone wrong outside your boundary: protecting against threats from outside the system (CC6.6), monitoring for anomalies that indicate malicious acts (CC7.2), evaluating security events (CC7.3), responding to incidents (CC7.4), and managing vendor risk (CC9.2). Credentials sold on a forum, a session cookie stolen from a developer's laptop, or a supplier on a ransomware leak site are exactly those kinds of events.",
      "DarkThreat supports those criteria with continuous external monitoring and a record your auditor can sample. You decide which controls it supports and describe them in your system description; your auditor decides whether they are suitably designed and operating effectively. DarkThreat does not issue or guarantee a SOC 2 report, and using it does not on its own lead to a clean opinion.",
    ],
  },
  threats: {
    heading: "External exposures that matter to SOC 2 auditors",
    intro:
      "These are the dark web signals most often linked to unauthorised access at SaaS companies and other service organisations.",
    items: [
      {
        icon: KeyRound,
        title: "Employee and SSO credentials",
        desc: "Work identities exposed in third-party breaches and combo lists, giving attackers a route into email, identity providers, and admin consoles.",
      },
      {
        icon: Bug,
        title: "Infostealer session theft",
        desc: "Browser cookies and tokens harvested from engineers' and support staff's devices, which can be replayed to bypass MFA.",
      },
      {
        icon: Cloud,
        title: "Cloud and API keys",
        desc: "Access keys, tokens, and secrets leaked in public code, paste sites, or stealer logs that unlock production infrastructure.",
      },
      {
        icon: Code,
        title: "Source code and internal docs",
        desc: "Repositories, architecture diagrams, and runbooks posted to forums or leak sites after a compromise.",
      },
      {
        icon: Users,
        title: "Subservice and vendor exposure",
        desc: "Breaches at hosting, support, and tooling vendors that handle your customers' data or can reach your environment.",
      },
      {
        icon: ClipboardCheck,
        title: "Customer data listings",
        desc: "Data that appears to come from your platform offered for sale or published by extortion groups.",
      },
    ],
  },
  capabilities: {
    heading: "Monitoring capabilities that produce audit-ready evidence",
    intro:
      "Each capability creates dated, source-attributed records — the kind of population an auditor can sample across a Type II period.",
    items: [
      {
        title: "Domain credential monitoring",
        desc: "Continuous checks of breach corpora, combo lists, and infostealer logs for credentials tied to your domains, with a record of each reset.",
      },
      {
        title: "Session and token exposure alerts",
        desc: "Detection of stolen sessions and secrets for your SaaS tools and cloud consoles so they can be revoked and rotated.",
      },
      {
        title: "Leak site and forum watch",
        desc: "Tracking of ransomware leak sites, breach forums, and Telegram channels for your company, product names, and customer references.",
      },
      {
        title: "Vendor watchlists",
        desc: "Monitoring of vendor and subservice organisation domains you add, supporting the ongoing vendor monitoring described in CC9.2.",
      },
      {
        title: "Alert history and exports",
        desc: "A searchable log of findings, triage decisions, and closure dates that can be exported for your auditor's sample requests.",
      },
      {
        title: "Ticketing, SIEM, and SOAR integration",
        desc: "API delivery of alerts into the systems where your incident and change records already live, keeping evidence in one place.",
      },
    ],
  },
  controls: {
    heading: "How DarkThreat outputs map to the Trust Services Criteria",
    intro:
      "These references are from the AICPA 2017 Trust Services Criteria (with revised points of focus, 2022). Your auditor tests your controls against them; DarkThreat supplies supporting evidence.",
    items: [
      {
        ref: "CC3.2",
        title: "Risk identification",
        desc: "Real exposure data shows which threats are active against your organisation and feeds your risk assessment.",
      },
      {
        ref: "CC6.1",
        title: "Logical access security",
        desc: "Alerts on compromised credentials support controls that protect information assets from unauthorised access.",
      },
      {
        ref: "CC6.6",
        title: "Threats from outside the boundary",
        desc: "External monitoring helps detect and act on threats that originate outside your system boundaries.",
      },
      {
        ref: "CC7.2",
        title: "Monitoring for anomalies",
        desc: "Dark web alerts are a monitored source of indicators of malicious acts targeting your system components.",
      },
      {
        ref: "CC7.3",
        title: "Evaluating security events",
        desc: "Triage records show how each finding was evaluated to decide whether it was, or could become, a security incident.",
      },
      {
        ref: "CC7.4",
        title: "Incident response",
        desc: "Credential resets, session revocations, and escalations triggered by alerts evidence your defined incident response process in action.",
      },
      {
        ref: "CC9.2",
        title: "Vendor and partner risk",
        desc: "Vendor watchlists add continuous external signals to how you assess and manage risks from vendors and business partners.",
      },
      {
        ref: "C1.1",
        title: "Confidential information",
        desc: "Where you include the confidentiality category, leak monitoring helps you learn when information you identified as confidential appears outside your environment.",
      },
    ],
  },
  deepDive: {
    heading: "Making monitoring evidence work across a Type II period",
    paragraphs: [
      "In a Type II examination, the auditor tests operating effectiveness by selecting samples from the population of events in the period — alerts raised, incidents logged, access reviews completed — and checking that each was handled as your control description says. A monitoring control that is described well but evidenced patchily is one of the most common causes of exceptions. The value of a dark web feed for SOC 2, then, is less about any single alert and more about a complete, consistent record.",
      "Start with the control description. Say what is monitored (your domains, key SaaS tools, priority vendors), how often findings are reviewed, who reviews them, what severity levels mean, and what response is expected for each. Then make sure the evidence matches: every alert has a timestamp, an owner, a triage decision, and a closure record. DarkThreat's alert history and exports are designed to make that population easy to produce when the auditor asks for it.",
      "Two other parts of the report are worth considering. Complementary user entity controls describe what your customers must do for your controls to work; if your service depends on customers protecting their own credentials, dark web findings about customer accounts may be worth sharing with them under CC2.3. And if you rely on subservice organisations, CC9.2 expects you to monitor them; adding their domains to your watchlist gives you an ongoing signal between annual reviews of their own SOC reports.",
      "Finally, remember that monitoring only supports criteria your organisation actually acts on. Alerts that are raised but never triaged can create evidence of a control failing, not working. Agree ownership and response times before the period begins.",
    ],
  },
  steps: {
    heading: "From dark web signal to sampled SOC 2 evidence",
    intro:
      "A typical workflow for service organisations using DarkThreat to support CC6, CC7, and CC9 controls.",
    items: [
      {
        title: "Describe the control",
        desc: "Define scope, review frequency, owners, and severity-based response times, and reflect them in your system description.",
      },
      {
        title: "Monitor continuously",
        desc: "DarkThreat watches credential markets, infostealer logs, leak sites, and forums for your domains and vendors throughout the period.",
      },
      {
        title: "Triage and respond",
        desc: "Each alert is evaluated under CC7.3, and confirmed exposures are contained under your CC7.4 incident process.",
      },
      {
        title: "Produce the population",
        desc: "Export the period's alert history so your auditor can select samples and trace each one to its resolution.",
      },
    ],
  },
  faqs: [
    {
      q: "Is dark web monitoring required for SOC 2?",
      a: "No. The Trust Services Criteria do not prescribe specific tools. Criteria such as CC6.6, CC7.2, and CC9.2 call for protecting against external threats, monitoring for anomalies, and managing vendor risk, and many service organisations use dark web monitoring to support those controls.",
    },
    {
      q: "Is SOC 2 a certification?",
      a: "No. SOC 2 is an attestation report issued by an independent CPA firm under AICPA standards. There is no SOC 2 certificate, and no tool can guarantee a particular audit opinion.",
    },
    {
      q: "Will using DarkThreat get us a clean SOC 2 report?",
      a: "No product can promise that. DarkThreat supplies monitoring and a record of findings and responses. Your auditor evaluates whether your controls are designed and operating effectively, which depends on how consistently you act on and document those findings.",
    },
    {
      q: "Is it useful for a Type I report?",
      a: "Yes, but the emphasis differs. A Type I report looks at control design at a point in time, so a clear description of the monitoring control and its response procedure matters most. For Type II, the consistency of evidence across the period becomes critical.",
    },
    {
      q: "How does this help with vendor management under CC9.2?",
      a: "Reviewing a vendor's SOC report once a year leaves long gaps. Adding key vendors and subservice organisations to your watchlist gives you an ongoing external signal if they are breached between reviews.",
    },
    {
      q: "Who should own dark web alerts for SOC 2 purposes?",
      a: "Whoever owns incident response under CC7.4, usually security operations, with compliance owning the evidence. The control description should name the owner and the expected response time for each severity.",
    },
  ],
  disclaimer:
    "This page is general information about how dark web and credential monitoring relates to the SOC 2 Trust Services Criteria. It is not audit or legal advice. DarkThreat supports and is aligned with parts of a SOC 2 control environment, but it is not an attestation or certification and does not make any organisation compliant or determine any audit opinion. Consult your auditor about your specific controls.",
  relatedIndustries: [
    {
      label: "SaaS & technology monitoring",
      href: "/industries/saas-technology",
      desc: "Source code, API key, and cloud credential exposure for software companies.",
    },
    {
      label: "Professional services monitoring",
      href: "/industries/professional-services",
      desc: "Client data and partner credential protection for consulting, accounting, and advisory firms.",
    },
    {
      label: "Compliance & framework alignment",
      href: "/compliance-framework-alignment",
      desc: "How DarkThreat supports evidence collection across multiple security frameworks.",
    },
  ],
  relatedPosts: [
    {
      label: "Dark Web Monitoring as a SOC 2 Compensating Control",
      href: "/blog/dark-web-monitoring-as-a-soc-2-compensating-control",
    },
    {
      label: "SOC 2 Type II Security Requirements — Where Dark Web Monitoring Fits",
      href: "/blog/soc-2-type-ii-security-requirements-where-dark-web-monitoring-fits",
    },
    {
      label: "Dark Web Monitoring as a Compensating Control in Security Audits",
      href: "/blog/dark-web-monitoring-as-a-compensating-control-in-security-audits",
    },
    {
      label: "How to Use Dark Web Monitoring for Third-Party Risk Assessment",
      href: "/blog/how-to-use-dark-web-monitoring-for-third-party-risk-assessment",
    },
  ],
};
