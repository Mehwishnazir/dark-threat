import { CreditCard, KeyRound, Code, ShoppingCart, Bug, Store } from "lucide-react";
import type { CompliancePageData } from "./types";

export const pciDssCompliance: CompliancePageData = {
  slug: "pci-dss",
  path: "/compliance/pci-dss",
  name: "PCI DSS",
  summary: "Credential, skimmer, and card shop monitoring aligned with PCI DSS v4.0.1 Requirements 8, 10, 11, and 12.10.",
  metaTitle: "PCI DSS Dark Web & Credential Monitoring",
  metaDescription:
    "Dark web monitoring aligned with PCI DSS v4.0.1 Requirements 8, 10, 11 and 12.10. Detect leaked admin credentials, skimmer activity and card data sooner.",
  hero: {
    badge: "PCI DSS v4.0.1 Alignment",
    icon: CreditCard,
    titleLead: "Dark Web Monitoring That Supports",
    titleHighlight: "PCI DSS Detection and Incident Response",
    intro:
      "Card data compromises are often discovered by someone else first — an acquirer, a card brand, or a fraud team tracing stolen cards back to a common merchant. DarkThreat watches card shops, carding forums, infostealer markets, and leak sites for signs that your payment environment, admin accounts, or customers' cards are exposed, so your team can act and document it earlier.",
    ctaLabel: "Talk to Us About PCI DSS Monitoring",
  },
  overview: {
    heading: "Where dark web monitoring fits in a PCI DSS program",
    paragraphs: [
      "PCI DSS protects cardholder data and sensitive authentication data through twelve principal requirements. Most of them govern what happens inside the cardholder data environment (CDE): segmentation, configuration, encryption, logging, and access. Version 4.0 added a stronger emphasis on security as a continuous process, and its future-dated requirements — including broader MFA, payment page script management, and automated log review — became mandatory on 31 March 2025. PCI DSS v4.0.1, published in June 2024, is the current revision.",
      "What the CDE controls cannot see is the criminal market around them. An administrator's e-commerce platform login can be captured by infostealer malware on a home computer. An initial access broker can list remote access into a retailer's network. A skimmer kit can be tailored to a specific checkout platform and sold on a forum. By the time stolen cards are tested and used, the compromise may be weeks old.",
      "DarkThreat brings that external view into your existing processes. Its alerts support the authentication, logging, testing, and incident response requirements described below, and give your team timestamped evidence to act on. It does not replace an assessment by a Qualified Security Assessor or a Self-Assessment Questionnaire, it does not reduce your PCI DSS scope, and using it does not make an organisation compliant with PCI DSS.",
    ],
  },
  threats: {
    heading: "Payment-related exposures DarkThreat looks for",
    intro:
      "These are the dark web signals most often linked to account data compromise at merchants and service providers.",
    items: [
      {
        icon: KeyRound,
        title: "Admin and CDE credentials",
        desc: "Logins for e-commerce admin panels, payment gateways, POS management consoles, and jump hosts exposed in breaches or combo lists.",
      },
      {
        icon: Bug,
        title: "Infostealer sessions",
        desc: "Session cookies and saved passwords stolen from staff devices, which can let attackers reuse a logged-in admin session and sidestep MFA prompts.",
      },
      {
        icon: Code,
        title: "E-skimming kits",
        desc: "JavaScript skimmers and checkout-page injection kits discussed or sold for the platforms and payment flows you use.",
      },
      {
        icon: Store,
        title: "Card shop listings",
        desc: "Batches of stolen card data advertised on carding markets, sometimes with details that point to a common point of purchase.",
      },
      {
        icon: ShoppingCart,
        title: "Customer account takeover",
        desc: "Combo lists and credential-stuffing configs targeting your storefront, which lead to fraud using stored payment methods.",
      },
      {
        icon: CreditCard,
        title: "Network access for sale",
        desc: "Initial access brokers advertising VPN, RDP, or cloud console access into retail and payment environments.",
      },
    ],
  },
  capabilities: {
    heading: "Monitoring capabilities for payment security teams",
    intro:
      "Each capability produces timestamped, source-attributed records that your team can review, act on, and present as part of your evidence.",
    items: [
      {
        title: "Privileged credential monitoring",
        desc: "Continuous checks of breach corpora, combo lists, and infostealer logs for credentials tied to your domains and the admin accounts you choose to watch.",
      },
      {
        title: "Carding forum and shop watch",
        desc: "Tracking of carding markets and fraud forums for references to your brand, payment pages, or merchant names.",
      },
      {
        title: "Skimmer and platform chatter",
        desc: "Monitoring for discussion of skimmer kits and exploits aimed at the e-commerce and payment platforms in your stack.",
      },
      {
        title: "Service provider watchlists",
        desc: "Monitoring of third-party service provider domains — hosting, gateways, and managed service providers — for exposure that could affect your CDE.",
      },
      {
        title: "Alert history and exports",
        desc: "A searchable record of what was found, when, and how it was handled, ready to show an assessor how alerts are reviewed and acted on.",
      },
      {
        title: "SIEM and SOAR integration",
        desc: "API delivery of alerts into the tools you use for daily log review and incident response, so dark web findings follow the same process.",
      },
    ],
  },
  controls: {
    heading: "How DarkThreat outputs map to PCI DSS requirements",
    intro:
      "These references are from PCI DSS v4.0.1. Dark web monitoring supports these requirements; the controls themselves must still be implemented and tested in your environment.",
    items: [
      {
        ref: "Req. 5.4.1",
        title: "Anti-phishing mechanisms",
        desc: "Evidence of phishing kits and lookalike domains targeting your staff helps you tune the mechanisms that detect and protect against phishing.",
      },
      {
        ref: "Req. 6.3.1",
        title: "Identifying vulnerabilities",
        desc: "Exploit chatter about your platforms is an additional source of security vulnerability information when ranking and patching risks.",
      },
      {
        ref: "Req. 8.2–8.3",
        title: "User accounts and authentication",
        desc: "Exposed-credential alerts support managing user accounts and resetting passwords that are known or suspected to be compromised.",
      },
      {
        ref: "Req. 8.4",
        title: "Multi-factor authentication",
        desc: "Infostealer session alerts highlight where MFA alone may be bypassed, informing how you protect access into the CDE.",
      },
      {
        ref: "Req. 10.4.1",
        title: "Audit log review",
        desc: "External alerts sit alongside the security events you review daily and add context that internal logs cannot provide.",
      },
      {
        ref: "Req. 11.6.1",
        title: "Payment page tamper detection",
        desc: "Skimmer intelligence complements, but does not replace, the change- and tamper-detection mechanism required for payment pages.",
      },
      {
        ref: "Req. 12.8",
        title: "Third-party service providers",
        desc: "Service provider watchlists add external visibility to how you manage and monitor the TPSPs that can affect account data.",
      },
      {
        ref: "Req. 12.10",
        title: "Incident response",
        desc: "Dark web alerts are an input your incident response plan can define procedures for, from triage through containment and notification.",
      },
    ],
  },
  deepDive: {
    heading: "Building dark web alerts into your Requirement 12.10 plan",
    paragraphs: [
      "Requirement 12.10.1 asks for an incident response plan that is ready to be activated in the event of a suspected or confirmed security incident. The plan must cover roles and responsibilities, communication and contact strategies — including notifying payment brands and acquirers — containment and mitigation, business recovery, data backup processes, and analysis of legal requirements for reporting compromises. Requirement 12.10.5 adds that the plan includes monitoring and responding to alerts from security monitoring systems.",
      "Dark web findings fit naturally here, but only if the plan says what to do with them. A leaked admin password for your e-commerce platform calls for an immediate reset, session revocation, and a review of recent admin activity. A skimmer kit built for your checkout platform calls for a check of your payment page scripts under Requirement 6.4.3 and your tamper-detection results under 11.6.1. A batch of cards on a carding market with a suspected link to your business calls for activating the full plan, including the communication steps your acquirer and the card brands expect.",
      "Writing those scenarios into the plan, and testing them at least once every 12 months as Requirement 12.10.2 requires, turns monitoring from a feed of alerts into a documented process. Requirement 12.10.4 calls for training staff with incident response responsibilities, and 12.10.6 asks for the plan to be updated based on lessons learned and industry developments, so dark web exercises can support both.",
      "DarkThreat's role is to provide the signal and the record: when an exposure was first seen, where, and what it contained. Your organisation, your assessor, and your acquirer remain responsible for determining whether account data was compromised and what reporting is required.",
    ],
  },
  steps: {
    heading: "From dark web signal to documented PCI DSS response",
    intro:
      "A typical workflow for merchants and service providers using DarkThreat alongside their incident response plan.",
    items: [
      {
        title: "Define your scope",
        desc: "Register your domains, storefronts, payment platforms, privileged accounts, and key service providers. No agents are installed in the CDE.",
      },
      {
        title: "Continuous detection",
        desc: "DarkThreat monitors carding markets, fraud forums, infostealer channels, and leak sites, and raises alerts tied to your scope.",
      },
      {
        title: "Triage and contain",
        desc: "Your team resets exposed credentials, revokes sessions, checks payment page integrity, and activates the 12.10 plan where needed.",
      },
      {
        title: "Evidence and improve",
        desc: "Use alert history to show how alerts were handled, and feed lessons learned into your plan and targeted risk analyses.",
      },
    ],
  },
  faqs: [
    {
      q: "Does PCI DSS require dark web monitoring?",
      a: "PCI DSS does not name dark web monitoring as a requirement. It does require managing authentication, reviewing security events, detecting tampering with payment pages, managing service providers, and responding to incidents. Dark web monitoring supports several of those requirements.",
    },
    {
      q: "Does DarkThreat make us PCI DSS compliant?",
      a: "No. Compliance is determined through your assessment — a Report on Compliance by a QSA or a Self-Assessment Questionnaire — across all applicable requirements. DarkThreat supports specific requirements with monitoring and evidence; it does not replace any of them.",
    },
    {
      q: "Does dark web monitoring reduce PCI DSS scope?",
      a: "No. Scope is set by where account data is stored, processed, or transmitted and which systems can affect its security. DarkThreat runs outside your environment and does not change what is in scope.",
    },
    {
      q: "Can DarkThreat detect e-skimming on our checkout page?",
      a: "DarkThreat looks for skimmer kits and chatter aimed at your platforms on criminal sources. It does not inspect your live payment pages, so it complements — and does not replace — the script management in Requirement 6.4.3 and the tamper detection in Requirement 11.6.1.",
    },
    {
      q: "What should we do if our customers' cards appear on a carding market?",
      a: "Treat it as a suspected compromise and activate your Requirement 12.10.1 incident response plan, including the contact steps for your acquirer and the card brands. DarkThreat's alert record helps establish what was seen and when.",
    },
    {
      q: "Is this useful for service providers as well as merchants?",
      a: "Yes. Service providers face the same credential and access risks, and their customers monitor them under Requirement 12.8. Watching your own exposure helps you respond quickly and give customers accurate information.",
    },
  ],
  disclaimer:
    "This page is general information about how dark web and credential monitoring relates to PCI DSS requirements. It is not legal or assessment advice. DarkThreat supports and is aligned with parts of a PCI DSS program, but it is not a certification or validation and does not make any organisation compliant with PCI DSS. Consult your QSA or acquirer about your specific obligations.",
  relatedIndustries: [
    {
      label: "E-commerce dark web monitoring",
      href: "/industries/ecommerce",
      desc: "Account takeover, skimming, and customer data exposure for online retailers.",
    },
    {
      label: "Financial services monitoring",
      href: "/industries/financial-services",
      desc: "Credential, fraud, and access-broker monitoring for banks, insurers, and payment firms.",
    },
    {
      label: "Crypto & fintech monitoring",
      href: "/industries/crypto-fintech",
      desc: "Exposure monitoring for exchanges, wallets, and payment fintechs.",
    },
    {
      label: "Compliance & framework alignment",
      href: "/compliance-framework-alignment",
      desc: "How DarkThreat supports evidence collection across multiple security frameworks.",
    },
  ],
  relatedPosts: [
    {
      label: "PCI-DSS 4.0 and Dark Web Monitoring: New Requirements Explained",
      href: "/blog/pci-dss-40-and-dark-web-monitoring-new-requirements-explained",
    },
    {
      label: "PCI DSS 4.0 and Dark Web Monitoring — What Payment Processors Need to Know",
      href: "/blog/pci-dss-40-and-dark-web-monitoring-what-payment-processors-need-to-know",
    },
    {
      label: "PCI-DSS 4.0 Compliance and Dark Web Monitoring: What Finance Teams Need",
      href: "/blog/pci-dss-40-compliance-and-dark-web-monitoring-what-finance-teams-need",
    },
  ],
};
