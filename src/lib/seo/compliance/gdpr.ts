import { Scale, KeyRound, Bug, FileWarning, Users, Mail } from "lucide-react";
import type { CompliancePageData } from "./types";

export const gdprCompliance: CompliancePageData = {
  slug: "gdpr",
  path: "/compliance/gdpr",
  name: "GDPR",
  summary: "Breach detection and evidence aligned with Articles 32–34, including the 72-hour notification window.",
  metaTitle: "GDPR Dark Web & Data Breach Monitoring",
  metaDescription:
    "Dark web monitoring aligned with GDPR Articles 32–34. Detect leaked personal data and employee credentials sooner and support 72-hour breach decisions.",
  hero: {
    badge: "GDPR Articles 32–34 Alignment",
    icon: Scale,
    titleLead: "Dark Web Monitoring That Helps With",
    titleHighlight: "GDPR Security and Breach Notification",
    intro:
      "Most personal data breaches are not announced by the attacker — they surface on leak sites, criminal forums, and Telegram channels first. DarkThreat watches those sources for your employees' credentials and for data that appears to come from your organisation, giving controllers and processors earlier awareness and better facts for decisions under Articles 33 and 34.",
    ctaLabel: "Talk to Us About GDPR Monitoring",
  },
  overview: {
    heading: "Why external monitoring matters under the GDPR",
    paragraphs: [
      "The GDPR does not prescribe specific security tools. Instead, Article 5(1)(f) requires personal data to be processed with appropriate security, and Article 32 asks controllers and processors to implement technical and organisational measures appropriate to the risk — including the ability to ensure the ongoing confidentiality of processing systems and a process for regularly testing and evaluating whether those measures work. Article 5(2) then makes the controller responsible for demonstrating all of this.",
      "Internal controls tell you how your systems are configured. They rarely tell you that a customer export is being offered on a forum, that an employee's Microsoft 365 password was captured by infostealer malware on a personal device, or that a supplier holding your data has been named on a ransomware leak site. Those are the events that start the Article 33 clock, and they often happen outside your network.",
      "DarkThreat adds that external view. It supports your Article 32 risk assessment with evidence of real threats, helps you detect personal data breaches earlier, and gives your data protection officer timestamped, source-attributed findings to work from. It is one measure among many: it does not replace your records of processing, DPIAs, policies, or legal judgement, and using it does not on its own make an organisation compliant with the GDPR.",
    ],
  },
  threats: {
    heading: "Personal data exposures DarkThreat looks for",
    intro:
      "Each of these can amount to, or lead to, a personal data breach as defined in Article 4(12) — a breach of security leading to unauthorised disclosure of, or access to, personal data.",
    items: [
      {
        icon: FileWarning,
        title: "Customer data on leak sites",
        desc: "Ransomware groups publishing or threatening to publish customer records, HR files, and contracts to pressure victims into paying.",
      },
      {
        icon: KeyRound,
        title: "Employee credential leaks",
        desc: "Work email and SSO passwords exposed in third-party breaches or combo lists, which attackers use to reach mailboxes and systems holding personal data.",
      },
      {
        icon: Bug,
        title: "Infostealer logs",
        desc: "Saved passwords and live session cookies harvested from infected devices, including personal laptops used for remote work.",
      },
      {
        icon: Users,
        title: "Processor and supplier exposure",
        desc: "Leaks at payroll providers, CRM vendors, and other processors that hold personal data on your behalf.",
      },
      {
        icon: Mail,
        title: "Database dumps and paste sites",
        desc: "Exposed tables of names, emails, addresses, and order histories posted to paste sites or shared in breach forums.",
      },
      {
        icon: Scale,
        title: "Special category data",
        desc: "Health, biometric, or other Article 9 data appearing in criminal channels, where the risk to individuals is usually higher.",
      },
    ],
  },
  capabilities: {
    heading: "Monitoring capabilities for privacy and security teams",
    intro:
      "Every finding is recorded with when it was detected, where it was found, and what it contained, so your DPO has a clear trail for breach assessment and documentation.",
    items: [
      {
        title: "Domain credential monitoring",
        desc: "Continuous checks of breach corpora, combo lists, and infostealer logs for credentials tied to your domains, so compromised accounts can be reset before they are misused.",
      },
      {
        title: "Leak site and forum watch",
        desc: "Tracking of ransomware leak sites, breach forums, and extortion channels for mentions of your organisation, brands, and subsidiaries.",
      },
      {
        title: "Data sample capture",
        desc: "Where a listing includes a sample, DarkThreat records what categories of data appear to be involved, which helps you scope a breach faster.",
      },
      {
        title: "Processor watchlists",
        desc: "Monitoring of supplier domains you choose to add, for earlier warning when a processor that holds your data is compromised.",
      },
      {
        title: "Alert history for Article 33(5)",
        desc: "A searchable record of detections and the actions taken, which can feed the internal breach register that Article 33(5) requires.",
      },
      {
        title: "SIEM and SOAR integration",
        desc: "API delivery of alerts into your existing tooling so dark web findings follow the same escalation path as your other security events.",
      },
    ],
  },
  controls: {
    heading: "How DarkThreat outputs map to GDPR articles",
    intro:
      "These are the GDPR provisions that external threat monitoring is most closely aligned with. How much the evidence helps depends on how you document and act on it.",
    items: [
      {
        ref: "Art. 5(1)(f)",
        title: "Integrity and confidentiality",
        desc: "Detecting exposed credentials and leaked data supports appropriate security of personal data, including protection against unauthorised processing.",
      },
      {
        ref: "Art. 5(2)",
        title: "Accountability",
        desc: "Timestamped detections and response records help the controller demonstrate the security measures it has in place.",
      },
      {
        ref: "Art. 32(1)(b)",
        title: "Ongoing confidentiality",
        desc: "Continuous external monitoring supports the ability to ensure the ongoing confidentiality and integrity of processing systems.",
      },
      {
        ref: "Art. 32(1)(d)",
        title: "Testing and evaluation",
        desc: "Real-world exposure data is an input to regularly assessing whether your technical and organisational measures are working.",
      },
      {
        ref: "Art. 28(3)(f)",
        title: "Processor assistance",
        desc: "Processors can use alerts to help controllers meet their Article 32–34 obligations; controllers can watch processor domains for exposure.",
      },
      {
        ref: "Art. 33(1)–(3)",
        title: "Notification to the authority",
        desc: "Source-attributed findings help establish when you became aware of a breach and provide facts for the information Article 33(3) requires.",
      },
      {
        ref: "Art. 33(5)",
        title: "Breach documentation",
        desc: "Alert history supports documenting every breach, its effects, and the remedial action taken — including breaches that are not notified.",
      },
      {
        ref: "Art. 34",
        title: "Communication to data subjects",
        desc: "Evidence of what data is circulating, and where, helps you judge whether a breach is likely to result in a high risk to individuals.",
      },
    ],
  },
  deepDive: {
    heading: "Becoming \u201caware\u201d and the 72-hour window",
    paragraphs: [
      "Article 33(1) requires a controller to notify the competent supervisory authority without undue delay and, where feasible, not later than 72 hours after having become aware of a personal data breach, unless the breach is unlikely to result in a risk to individuals' rights and freedoms. European Data Protection Board guidance on breach notification explains that a controller becomes aware when it has a reasonable degree of certainty that a security incident has occurred that has led to personal data being compromised. A short investigation to establish that certainty is acceptable, but it should begin promptly.",
      "That makes detection speed a compliance issue, not just a security one. If a dump of your customer database is posted publicly and you only learn about it weeks later from a journalist, your exposure to regulators and to the people affected is harder to defend. A dark web alert that records the listing, the source, and a sample of the data gives your team a defined starting point for the investigation and a documented timeline. Under Article 33(4), if not all the information is available at once, it can be provided in phases.",
      "The same evidence feeds the decision under Article 34. Communication to individuals is required when a breach is likely to result in a high risk to their rights and freedoms — a judgement that depends on the type of data, how many people are affected, and who now has the data. A record being sold on a criminal marketplace is very different from an email sent to the wrong recipient. Processors have their own duty under Article 33(2) to notify the controller without undue delay after becoming aware, so processors who monitor their own exposure can pass findings on quickly.",
      "Monitoring also involves processing personal data, such as employee email addresses and leaked credentials. Many organisations rely on legitimate interests under Article 6(1)(f) for this, and Recital 49 recognises network and information security as a legitimate interest. Your DPO should confirm the lawful basis, keep the monitoring scope proportionate, and review the data processing terms with DarkThreat. Whether to notify, and what to say, remains a decision for your organisation and its legal advisers.",
    ],
  },
  steps: {
    heading: "From dark web signal to documented GDPR decision",
    intro:
      "A typical workflow for privacy and security teams using DarkThreat alongside their breach response procedure.",
    items: [
      {
        title: "Set a proportionate scope",
        desc: "Register the domains, brands, and processor domains you want watched, and agree the lawful basis with your DPO. No agents are installed.",
      },
      {
        title: "Detect and record",
        desc: "DarkThreat monitors leak sites, forums, paste sites, and infostealer channels and timestamps each finding with its source.",
      },
      {
        title: "Assess the risk",
        desc: "Your team confirms whether personal data is involved, contains the exposure, and assesses the risk to individuals under Articles 33 and 34.",
      },
      {
        title: "Notify and document",
        desc: "Use the findings in any notification to the supervisory authority or data subjects, and record the breach and actions taken in your Article 33(5) register.",
      },
    ],
  },
  faqs: [
    {
      q: "Does the GDPR require dark web monitoring?",
      a: "No article names dark web monitoring. Article 32 requires security measures appropriate to the risk, and Article 33 requires timely notification once you become aware of a breach. Many organisations use dark web monitoring as one way to detect breaches sooner and to evidence their Article 32 measures.",
    },
    {
      q: "Does using DarkThreat make us GDPR compliant?",
      a: "No. No tool makes an organisation compliant with the GDPR. DarkThreat supports specific obligations — security of processing, breach detection, and breach documentation — but compliance depends on your whole programme, including lawful bases, records of processing, DPIAs, and governance.",
    },
    {
      q: "When does the 72-hour clock start if we find our data on the dark web?",
      a: "Under Article 33(1) it runs from when the controller becomes aware of the breach. EDPB guidance describes this as having a reasonable degree of certainty that a security incident has compromised personal data. A dark web alert should trigger a prompt investigation; your DPO and legal advisers decide when awareness was reached.",
    },
    {
      q: "Is a leaked employee password a personal data breach?",
      a: "It can be. A password linked to a named employee is itself personal data, and its exposure may also put other personal data at risk if the account was accessed. Each case needs assessment, and any breach must be documented under Article 33(5) even if it is not notified.",
    },
    {
      q: "Can processors use DarkThreat too?",
      a: "Yes. Processors must notify controllers without undue delay under Article 33(2) and assist them under Article 28(3)(f). Monitoring your own exposure helps you meet those duties, and controllers can add processor domains to their own watchlists.",
    },
    {
      q: "What lawful basis applies to dark web monitoring?",
      a: "Many organisations rely on legitimate interests under Article 6(1)(f), with Recital 49 recognising network and information security as a legitimate interest. This should be confirmed by your DPO, supported by a balancing test, and reflected in your records of processing.",
    },
  ],
  disclaimer:
    "This page is general information about how dark web and credential monitoring relates to GDPR obligations. It is not legal advice. DarkThreat supports and is aligned with parts of a GDPR security programme, but it is not a certification and does not make any organisation compliant with the GDPR. Consult your DPO or qualified counsel about your specific obligations.",
  relatedIndustries: [
    {
      label: "E-commerce dark web monitoring",
      href: "/industries/ecommerce",
      desc: "Customer data, payment page, and account takeover monitoring for online retailers.",
    },
    {
      label: "Professional services monitoring",
      href: "/industries/professional-services",
      desc: "Protecting client data and partner credentials at consulting, accounting, and advisory firms.",
    },
    {
      label: "SaaS & technology monitoring",
      href: "/industries/saas-technology",
      desc: "Source code, API key, and cloud credential exposure for software companies acting as processors.",
    },
    {
      label: "Compliance & framework alignment",
      href: "/compliance-framework-alignment",
      desc: "How DarkThreat supports evidence collection across multiple security and privacy frameworks.",
    },
  ],
  relatedPosts: [
    {
      label: "GDPR Breach Notification and Dark Web Monitoring — A Compliance Guide",
      href: "/blog/gdpr-breach-notification-and-dark-web-monitoring-a-compliance-guide",
    },
    {
      label: "Is Dark Web Monitoring Required Under GDPR? What Legal Says",
      href: "/blog/is-dark-web-monitoring-required-under-gdpr-what-legal-says",
    },
    {
      label: "Leaked Credentials and GDPR Breach Notification Requirements",
      href: "/blog/leaked-credentials-and-gdpr-breach-notification-requirements",
    },
    {
      label: "PII Data Leak Detection: What GDPR Requires You to Monitor",
      href: "/blog/pii-data-leak-detection-what-gdpr-requires-you-to-monitor",
    },
  ],
};
