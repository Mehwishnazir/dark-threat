import { Radar, KeyRound, Truck, FileWarning, Bug, ShieldAlert } from "lucide-react";
import type { CompliancePageData } from "./types";

export const iso27001Compliance: CompliancePageData = {
  slug: "iso-27001",
  path: "/compliance/iso-27001",
  name: "ISO 27001",
  summary: "Operational threat intelligence aligned with Annex A 5.7, supplier controls, incident management, and 8.16.",
  metaTitle: "ISO 27001 Threat Intelligence Monitoring",
  metaDescription:
    "Dark web threat intelligence aligned with ISO/IEC 27001:2022 Annex A 5.7, 5.19–5.22, 5.24–5.26 and 8.16. Evidence for your ISMS and surveillance audits.",
  hero: {
    badge: "ISO/IEC 27001:2022 Annex A Alignment",
    icon: Radar,
    titleLead: "Dark Web Threat Intelligence Aligned With",
    titleHighlight: "ISO 27001:2022 Annex A",
    intro:
      "The 2022 revision of ISO/IEC 27001 introduced a dedicated threat intelligence control, Annex A 5.7, and a new monitoring activities control, 8.16. DarkThreat provides operational intelligence from credential markets, infostealer logs, ransomware leak sites, and criminal forums that helps your ISMS meet those controls and feeds supplier, incident, and risk processes with real evidence.",
    ctaLabel: "Talk to Us About ISO 27001 Monitoring",
  },
  overview: {
    heading: "Where dark web intelligence fits in an ISMS",
    paragraphs: [
      "ISO/IEC 27001 is a management system standard. Its clauses require you to understand your context, assess and treat information security risks (clauses 6.1.2, 6.1.3, and 8.2–8.3), monitor and measure performance (9.1), audit internally (9.2), and improve (10). Annex A lists 93 reference controls in four themes — organisational, people, physical, and technological — and your Statement of Applicability records which ones you apply and why.",
      "The 2022 edition made external threat awareness an explicit expectation. Control 5.7 asks organisations to collect and analyse information about information security threats to produce threat intelligence. Control 8.16 asks for networks, systems, and applications to be monitored for anomalous behaviour, with appropriate action taken to evaluate potential incidents. Neither can be fully met by looking only inward: the clearest evidence that an account or dataset has been compromised often appears first on criminal sources.",
      "DarkThreat supplies that external intelligence and a record of how it was acted on. It supports the Annex A controls you choose to apply, and its output can feed your risk assessment and management review. It is not a certification body, it does not assess conformity, and using it does not by itself mean an ISMS conforms to ISO/IEC 27001 — that remains a matter for your organisation and your accredited certification body.",
    ],
  },
  threats: {
    heading: "Threats DarkThreat surfaces for your ISMS",
    intro:
      "These external signals are the raw material for the operational and tactical threat intelligence described in ISO/IEC 27002 guidance on control 5.7.",
    items: [
      {
        icon: KeyRound,
        title: "Exposed authentication information",
        desc: "Employee and service account passwords in breach corpora and combo lists — the authentication information covered by control 5.17.",
      },
      {
        icon: Bug,
        title: "Infostealer infections",
        desc: "Stealer logs revealing which users' devices are infected and which corporate sessions and passwords were taken.",
      },
      {
        icon: Truck,
        title: "Supplier compromise",
        desc: "Credentials, data, or access belonging to your suppliers and ICT supply chain appearing on criminal sources.",
      },
      {
        icon: FileWarning,
        title: "Data leakage",
        desc: "Documents, databases, and source code from your organisation published on leak sites or paste sites.",
      },
      {
        icon: ShieldAlert,
        title: "Access broker listings",
        desc: "Advertised VPN, RDP, or cloud access into your environment — often an early step before ransomware.",
      },
      {
        icon: Radar,
        title: "Targeting and actor chatter",
        desc: "Forum and channel discussion that names your organisation, sector, or technologies as targets.",
      },
    ],
  },
  capabilities: {
    heading: "Monitoring capabilities for ISMS owners and security teams",
    intro:
      "Each capability produces dated, source-attributed records that can be retained as documented information and reviewed in internal and external audits.",
    items: [
      {
        title: "Operational threat intelligence",
        desc: "Specific, actionable findings — which credential, which source, when — that can be acted on immediately under control 5.7.",
      },
      {
        title: "Domain credential monitoring",
        desc: "Continuous checks of breach corpora, combo lists, and infostealer logs for credentials tied to your domains.",
      },
      {
        title: "Supplier watchlists",
        desc: "Monitoring of supplier and ICT service provider domains you add, supporting ongoing supplier monitoring under 5.22.",
      },
      {
        title: "Leak site and forum watch",
        desc: "Tracking of ransomware leak sites, breach forums, and paste sites for your organisation's data and names.",
      },
      {
        title: "Alert history and exports",
        desc: "A record of findings, assessments, and actions that can support evidence for 5.25, 5.26, and your management review.",
      },
      {
        title: "SIEM and SOAR integration",
        desc: "API delivery of alerts into the monitoring stack you use for control 8.16, so external and internal signals are correlated.",
      },
    ],
  },
  controls: {
    heading: "How DarkThreat outputs map to ISO/IEC 27001:2022 Annex A",
    intro:
      "These are the Annex A controls that dark web intelligence is most closely aligned with. Which you apply, and how, is set by your risk assessment and Statement of Applicability.",
    items: [
      {
        ref: "A.5.7",
        title: "Threat intelligence",
        desc: "Collects and analyses information about threats to your organisation, producing intelligence you can act on.",
      },
      {
        ref: "A.5.17",
        title: "Authentication information",
        desc: "Exposed-credential alerts support managing authentication information, including changing it when compromise is suspected.",
      },
      {
        ref: "A.5.19–5.21",
        title: "Supplier and ICT supply chain security",
        desc: "Supplier watchlists inform how you manage information security risks in supplier relationships and the ICT supply chain.",
      },
      {
        ref: "A.5.22",
        title: "Monitoring supplier services",
        desc: "Ongoing external signals support regular monitoring and review of supplier information security practices.",
      },
      {
        ref: "A.5.24",
        title: "Incident management planning",
        desc: "Dark web alerts can be defined as an event source in your incident management procedures, with clear roles and escalation.",
      },
      {
        ref: "A.5.25",
        title: "Assessing security events",
        desc: "Triage records show how each finding was assessed and whether it was categorised as an information security incident.",
      },
      {
        ref: "A.5.26",
        title: "Responding to incidents",
        desc: "Resets, revocations, and containment steps triggered by alerts evidence your documented incident response procedures.",
      },
      {
        ref: "A.8.16",
        title: "Monitoring activities",
        desc: "External intelligence complements internal monitoring for anomalous behaviour and helps evaluate potential incidents.",
      },
    ],
  },
  deepDive: {
    heading: "Meeting control 5.7 and keeping evidence ready for audit",
    paragraphs: [
      "ISO/IEC 27002:2022, the guidance companion to the standard, describes threat intelligence at three levels: strategic (high-level information about the changing threat landscape for senior management), tactical (information about attacker methods, tools, and technologies), and operational (details about specific attacks, including technical indicators). It also says intelligence should be relevant, insightful, contextual, and actionable. DarkThreat's findings are mostly operational — a named credential, a specific leak site post — with trend reporting that can inform the tactical and strategic levels.",
      "The guidance also describes a cycle: establish objectives, identify and select sources, collect, process, and analyse information, then communicate the results to the people who need them and act on them. In practice, that means documenting why dark web sources are part of your intelligence programme, who receives the alerts, and how findings change controls — for example, forcing a password reset, tightening conditional access for infected devices, or raising a supplier's risk rating.",
      "Auditors look for that loop. During initial certification and annual surveillance audits, they will typically ask how threat intelligence is gathered, how it is shared, and what was done as a result. Retaining alert history as documented information, recording risk register updates driven by findings, and including threat trends in management review inputs under clause 9.3 give a coherent answer.",
      "The supplier controls deserve the same treatment. Controls 5.19 to 5.22 expect you to manage supplier risk through the life of the relationship, not only at onboarding. A supplier appearing on a ransomware leak site, or their staff credentials circulating in stealer logs, is exactly the kind of change 5.22 asks you to notice. Certificates issued against the 2013 edition reached the end of their transition period on 31 October 2025, so current audits are against the 2022 controls described here.",
    ],
  },
  steps: {
    heading: "From dark web signal to ISMS evidence",
    intro:
      "A typical workflow for organisations using DarkThreat within an ISO/IEC 27001 information security management system.",
    items: [
      {
        title: "Set intelligence objectives",
        desc: "Define what you need to know, record dark web monitoring as a source under 5.7, and register domains and key suppliers. No agents are installed.",
      },
      {
        title: "Collect and analyse",
        desc: "DarkThreat monitors credential markets, stealer logs, leak sites, and forums and raises findings tied to your scope.",
      },
      {
        title: "Assess and respond",
        desc: "Your team assesses each event under 5.25, responds under 5.26, and updates supplier and risk records where needed.",
      },
      {
        title: "Review and improve",
        desc: "Retain alert history as documented information and feed trends into risk assessment and management review.",
      },
    ],
  },
  faqs: [
    {
      q: "Does ISO 27001 require dark web monitoring?",
      a: "No control names dark web monitoring. Control 5.7 requires threat intelligence, 8.16 requires monitoring for anomalous behaviour, and 5.22 requires monitoring of suppliers. Dark web intelligence is one source many organisations use to support those controls.",
    },
    {
      q: "Will DarkThreat get us ISO 27001 certified?",
      a: "No. Certification is granted by an accredited certification body after auditing your whole ISMS — scope, risk process, Statement of Applicability, controls, and improvement. DarkThreat supports specific Annex A controls with intelligence and evidence; it does not determine conformity.",
    },
    {
      q: "Is DarkThreat strategic, tactical, or operational threat intelligence?",
      a: "Mostly operational: specific exposures with sources and timestamps that can be acted on immediately. Aggregated trends from those findings can also inform tactical and strategic intelligence for management.",
    },
    {
      q: "How do we show control 5.7 is working during an audit?",
      a: "Show the documented objectives and sources, the alert history, and examples where findings led to action — a credential reset, a risk register update, or a supplier review. Auditors look for the full loop from collection to response.",
    },
    {
      q: "Can this support supplier management under 5.19 to 5.22?",
      a: "Yes. Adding supplier domains to your watchlist gives you ongoing external signals between periodic supplier reviews, which supports monitoring supplier security as 5.22 describes.",
    },
    {
      q: "Does it help with data leakage prevention under 8.12?",
      a: "Partly. Control 8.12 covers measures to prevent and detect leakage. DarkThreat does not stop data leaving your environment, but it can detect when your data has already appeared on leak sites or paste sites, which supports the detection side.",
    },
  ],
  disclaimer:
    "This page is general information about how dark web threat intelligence relates to ISO/IEC 27001:2022. It is not legal or certification advice. DarkThreat supports and is aligned with parts of an ISMS, but it is not a certification body, does not hold or confer certification, and does not make any organisation conform to ISO/IEC 27001. Consult your certification body or a qualified adviser about your ISMS.",
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
      label: "Dark Web Monitoring for ISO 27001 Annex A Controls",
      href: "/blog/dark-web-monitoring-for-iso-27001-annex-a-controls",
    },
    {
      label: "ISO 27001 Annex A Controls and Dark Web Intelligence — Mapping Guide",
      href: "/blog/iso-27001-annex-a-controls-and-dark-web-intelligence-mapping-guide",
    },
    {
      label: "Data Leak Detection for ISO 27001 Certification Maintenance",
      href: "/blog/data-leak-detection-for-iso-27001-certification-maintenance",
    },
    {
      label: "Third-Party Vendor Credential Monitoring — Managing Supply Chain Risk",
      href: "/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk",
    },
  ],
};
