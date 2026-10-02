import { HeartPulse, KeyRound, Bug, ServerCrash, Users, FileWarning } from "lucide-react";
import type { CompliancePageData } from "./types";

export const hipaaCompliance: CompliancePageData = {
  slug: "hipaa",
  path: "/compliance/hipaa",
  name: "HIPAA",
  summary: "Support for Security Rule risk analysis, incident response, and Breach Notification Rule decisions.",
  metaTitle: "HIPAA Dark Web & Credential Monitoring",
  metaDescription:
    "Dark web and credential monitoring aligned with the HIPAA Security Rule and Breach Notification Rule. Spot exposed staff credentials and PHI sooner.",
  hero: {
    badge: "HIPAA Security Rule Alignment",
    icon: HeartPulse,
    titleLead: "Dark Web Monitoring That Supports",
    titleHighlight: "HIPAA Security & Breach Notification",
    intro:
      "DarkThreat watches criminal forums, infostealer log markets, ransomware leak sites, and paste sites for your workforce credentials and patient data. The result is external threat evidence that helps covered entities and business associates with risk analysis, security incident response, and breach notification decisions under HIPAA.",
    ctaLabel: "Talk to Us About HIPAA Monitoring",
  },
  overview: {
    heading: "Where dark web monitoring fits in a HIPAA program",
    paragraphs: [
      "The HIPAA Security Rule (45 CFR Part 164, Subpart C) asks covered entities and business associates to protect electronic protected health information (ePHI) through administrative, physical, and technical safeguards. Most of those safeguards look inward: who has access, how systems are configured, and what is logged. What they rarely show on their own is what has already escaped — the clinician password captured by infostealer malware on a home laptop, the VPN account listed for sale by an initial access broker, or the patient export posted to a ransomware group's leak site.",
      "External threat monitoring closes that visibility gap. When DarkThreat finds credentials tied to your domains, or data that appears to originate from your organization, the alert gives your security and privacy teams something concrete to act on and document. That evidence can feed your risk analysis, inform your security incident procedures, and help you establish when an incident was discovered — a date that matters under the Breach Notification Rule.",
      "DarkThreat is a monitoring and intelligence service. It supports parts of your HIPAA program; it does not replace your risk analysis, policies, workforce training, or legal review, and using it does not by itself make an organization HIPAA compliant. The sections below describe where its outputs are aligned with specific Security Rule and Breach Notification Rule provisions, so your compliance team can decide how to use them.",
    ],
  },
  threats: {
    heading: "External exposures that create HIPAA risk",
    intro:
      "These are the dark web signals most often connected to unauthorized access to ePHI. Each one is a reasonably anticipated threat your risk analysis should consider.",
    items: [
      {
        icon: KeyRound,
        title: "Workforce credential leaks",
        desc: "Email, single sign-on, and EHR portal passwords for clinical and administrative staff, reused from third-party breaches or traded in combo lists.",
      },
      {
        icon: Bug,
        title: "Infostealer logs",
        desc: "Malware such as RedLine, Vidar, and Lumma harvests saved browser passwords and session cookies, which can let attackers bypass passwords and sometimes MFA.",
      },
      {
        icon: ServerCrash,
        title: "Initial access listings",
        desc: "Brokers advertising VPN, RDP, or Citrix access into healthcare networks — often an early step before ransomware is deployed.",
      },
      {
        icon: FileWarning,
        title: "Leak site postings",
        desc: "Ransomware groups publishing or threatening to publish stolen patient records, claims files, and internal documents to pressure victims into paying.",
      },
      {
        icon: Users,
        title: "Business associate exposure",
        desc: "Credentials and data belonging to billing companies, IT providers, and other vendors that create, receive, maintain, or transmit ePHI on your behalf.",
      },
      {
        icon: HeartPulse,
        title: "Patient record sales",
        desc: "Listings and samples offering medical identity data — names, dates of birth, insurance IDs, and diagnosis details — on criminal marketplaces and Telegram channels.",
      },
    ],
  },
  capabilities: {
    heading: "Monitoring capabilities for healthcare security and privacy teams",
    intro:
      "Each capability produces timestamped, source-attributed records that your team can review, act on, and retain as part of your HIPAA documentation.",
    items: [
      {
        title: "Domain credential monitoring",
        desc: "Continuous checks of breach corpora, combo lists, and infostealer logs for credentials tied to your email and SSO domains, so compromised accounts can be reset before they are used.",
      },
      {
        title: "Infostealer session detection",
        desc: "Alerts when stolen browser sessions or cookies for your portals appear, which is relevant when MFA alone may not stop an attacker from reusing a live session.",
      },
      {
        title: "Ransomware and leak site watch",
        desc: "Tracking of ransomware leak sites and extortion channels for mentions of your organization, facilities, or affiliated practices.",
      },
      {
        title: "Business associate watchlists",
        desc: "Monitoring of vendor domains you choose to add, giving you earlier warning of exposures at the business associates you depend on.",
      },
      {
        title: "Alert history and exports",
        desc: "A searchable record of what was detected, when, from which source, and what was done about it — useful when documenting incident handling and risk analysis inputs.",
      },
      {
        title: "SIEM and SOAR integration",
        desc: "API delivery of alerts into your existing tooling so dark web findings sit alongside internal log review and follow your established escalation paths.",
      },
    ],
  },
  controls: {
    heading: "How DarkThreat outputs map to HIPAA provisions",
    intro:
      "The references below are the HIPAA requirements that external threat monitoring is most closely aligned with. How much weight the evidence carries depends on how your organization documents and acts on it.",
    items: [
      {
        ref: "§164.308(a)(1)(ii)(A)",
        title: "Risk analysis",
        desc: "Dark web findings show real threats to the confidentiality of ePHI, helping make your assessment of threats and vulnerabilities more accurate and current.",
      },
      {
        ref: "§164.308(a)(1)(ii)(B)",
        title: "Risk management",
        desc: "Credential resets, session revocation, and vendor follow-ups triggered by alerts are documented security measures that reduce identified risk.",
      },
      {
        ref: "§164.308(a)(1)(ii)(D)",
        title: "Information system activity review",
        desc: "External alerts complement the regular review of audit logs, access reports, and security incident tracking reports.",
      },
      {
        ref: "§164.308(a)(5)(ii)(D)",
        title: "Password management",
        desc: "Exposed-credential alerts support procedures for changing passwords that are known or suspected to be compromised.",
      },
      {
        ref: "§164.308(a)(6)(ii)",
        title: "Security incident response and reporting",
        desc: "Supports identifying suspected or known security incidents, mitigating harmful effects where practicable, and documenting incidents and their outcomes.",
      },
      {
        ref: "§164.308(b)(1)",
        title: "Business associate oversight",
        desc: "Vendor watchlists add external visibility to the satisfactory assurances you obtain from business associates that handle ePHI.",
      },
      {
        ref: "§164.312(b)",
        title: "Audit controls",
        desc: "DarkThreat alerts are an external data source that can feed the systems you use to record and examine activity involving ePHI.",
      },
      {
        ref: "§§164.400–414",
        title: "Breach Notification Rule",
        desc: "Timestamped detections help you establish discovery dates, gather facts for the breach risk assessment, and meet notification deadlines.",
      },
    ],
  },
  deepDive: {
    heading: "Supporting Breach Notification Rule decisions",
    paragraphs: [
      "Under 45 CFR 164.402, an impermissible use or disclosure of unsecured PHI is presumed to be a breach unless the covered entity or business associate shows a low probability that the PHI has been compromised. That showing rests on a risk assessment of at least four factors: the nature and extent of the PHI involved, the unauthorized person who used it or to whom it was disclosed, whether the PHI was actually acquired or viewed, and the extent to which the risk has been mitigated. Dark web evidence speaks directly to the second and third factors — a record posted on a ransomware leak site or offered for sale is strong evidence that the data was acquired by an unauthorized party.",
      "Timing matters just as much. Section 164.404 requires notice to affected individuals without unreasonable delay and no later than 60 calendar days after discovery, and a breach is treated as discovered on the first day it is known — or by exercising reasonable diligence would have been known — to the organization. Breaches affecting more than 500 residents of a state or jurisdiction also require media notice under §164.406, and §164.408 sets out when HHS must be notified. Business associates must notify the covered entity under §164.410. Because §164.414 places the burden of proof on the covered entity or business associate, keeping a clear record of when an exposure was detected and how it was assessed is important.",
      "DarkThreat helps here by recording the first time an exposure was seen, the source it was found on, and a sample of what was posted, so your privacy officer and counsel can make and document the breach determination with real facts. The decision on whether an incident is a reportable breach, and the content of any notification, stays with your organization and its legal advisors.",
    ],
  },
  steps: {
    heading: "From dark web signal to documented HIPAA response",
    intro:
      "A typical workflow for healthcare teams using DarkThreat alongside their existing incident response plan.",
    items: [
      {
        title: "Define your scope",
        desc: "Register your domains, facility names, EHR and portal URLs, and the business associates you want to watch. No agents are installed on your network.",
      },
      {
        title: "Continuous detection",
        desc: "DarkThreat monitors credential markets, infostealer channels, leak sites, forums, and paste sites, and raises alerts tied to your scope.",
      },
      {
        title: "Triage and contain",
        desc: "Your team reviews each alert, resets or revokes affected accounts, and follows your security incident procedures where an incident is suspected.",
      },
      {
        title: "Assess and document",
        desc: "Use alert history and exports to support your breach risk assessment, update your risk analysis, and retain records for the six years required by §164.316(b)(2)(i).",
      },
    ],
  },
  faqs: [
    {
      q: "Does HIPAA require dark web monitoring?",
      a: "HIPAA does not name dark web monitoring as a required control. It does require an accurate and thorough risk analysis, protection against reasonably anticipated threats to ePHI, and procedures to identify and respond to security incidents, and it lists password management as an addressable implementation specification. Many healthcare organizations use dark web monitoring as one way to meet those broader requirements.",
    },
    {
      q: "Does using DarkThreat make my organization HIPAA compliant?",
      a: "No. No single product makes an organization HIPAA compliant. DarkThreat supports specific parts of your program — risk analysis inputs, incident detection, password management, and breach notification evidence — but compliance depends on your overall policies, safeguards, training, and documentation.",
    },
    {
      q: "How does a dark web alert relate to the 60-day breach notification deadline?",
      a: "Under §164.404, the 60-day clock runs from the date a breach is discovered, which includes when it would have been known through reasonable diligence. A dark web alert may be the first signal of a breach, so it should go straight into your incident procedures. Your privacy officer and counsel then decide whether a reportable breach occurred and when it was discovered.",
    },
    {
      q: "Can dark web findings help with the breach risk assessment?",
      a: "Yes. The §164.402 risk assessment considers who received the PHI and whether it was actually acquired or viewed. Evidence that data is posted on a leak site or offered for sale is directly relevant to both factors and helps your team document its conclusion.",
    },
    {
      q: "Can we monitor our business associates?",
      a: "You can add vendor domains to your watchlist to get earlier warning of credential or data exposure at business associates. This adds visibility but does not replace the business associate agreements and assurances that §164.308(b) requires.",
    },
    {
      q: "Is this only for hospitals?",
      a: "No. The same monitoring applies to clinics, physician groups, health plans, pharmacies, labs, and business associates such as billing and IT service providers — any organization that creates, receives, maintains, or transmits ePHI.",
    },
  ],
  disclaimer:
    "This page is general information about how dark web and credential monitoring relates to HIPAA requirements. It is not legal advice. DarkThreat supports and is aligned with parts of a HIPAA security program, but it is not a certification and does not make any organization HIPAA compliant. Consult qualified counsel about your specific obligations.",
  relatedIndustries: [
    {
      label: "Healthcare dark web monitoring",
      href: "/industries/healthcare",
      desc: "Threats, capabilities, and onboarding for hospitals, health systems, and clinics.",
    },
    {
      label: "Compliance & framework alignment",
      href: "/compliance-framework-alignment",
      desc: "How DarkThreat supports evidence collection across ISO 27001, NIST CSF, GDPR, HIPAA, and PCI DSS.",
    },
  ],
  relatedPosts: [
    {
      label: "HIPAA Security Rule and Dark Web Monitoring — What Healthcare Must Do",
      href: "/blog/hipaa-security-rule-and-dark-web-monitoring-what-healthcare-must-do",
    },
    {
      label: "Dark Web Monitoring for HIPAA Compliance: What Healthcare IT Needs",
      href: "/blog/dark-web-monitoring-for-hipaa-compliance-what-healthcare-it-needs",
    },
    {
      label: "Healthcare Data Leaks: PHI Detection and Breach Notification",
      href: "/blog/healthcare-data-leaks-phi-detection-and-breach-notification",
    },
    {
      label: "How Healthcare Credential Leaks Enable Patient Data Breaches",
      href: "/blog/how-healthcare-credential-leaks-enable-patient-data-breaches",
    },
  ],
};
