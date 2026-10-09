import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Banknote,
  AlertTriangle,
  Database,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Key,
  Eye,
  FileWarning,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, faqPageSchema, organizationSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Financial Services Dark Web Monitoring",
  description: "DarkThreat protects banks, credit unions, and fintechs from SWIFT credential theft, carding, and insider threats. PCI-DSS & GLBA aligned.",
  ...pageSeo("/industries/financial-services"),
};

const threats = [
  { icon: CreditCard, title: 'Carding & BIN Attacks', desc: 'Stolen BIN ranges, card dumps, and CVV data sold in underground card shops targeting your issued card portfolio.' },
  { icon: Key, title: 'SWIFT & Wire Fraud Signals', desc: 'Threat actor chatter coordinating SWIFT credential theft and business email compromise targeting wire transfers.' },
  { icon: Database, title: 'Banking Credential Theft', desc: 'Online banking login credentials harvested by infostealer malware families and distributed in combo lists.' },
  { icon: Eye, title: 'Insider Trading Intelligence', desc: 'Dark web discussions referencing non-public financial data — an early signal of insider threat activity.' },
  { icon: AlertTriangle, title: 'Mobile Banking Fraud', desc: 'Fake banking app kits sold to impersonate your mobile banking platform and harvest customer credentials.' },
  { icon: FileWarning, title: 'Regulatory Data Exposure', desc: 'Sensitive compliance documents, audit reports, and regulator communications leaked to dark web actors.' },
];

const capabilities = [
  { label: 'BIN / IIN Portfolio Monitoring', desc: 'Real-time alerts when card data matching your BIN ranges surfaces on dark web card markets.' },
  { label: 'SWIFT Threat Intelligence', desc: 'Monitor threat actor channels for SWIFT system targeting, credential listings, and fraud coordination.' },
  { label: 'Executive Credential Watch', desc: 'Continuous surveillance of C-suite and treasury team credentials across infostealer logs.' },
  { label: 'Fraud Pattern Correlation', desc: 'Correlate dark web data points with your fraud detection systems to accelerate investigation.' },
  { label: 'Regulatory Report Exports', desc: 'Pre-formatted compliance evidence exports for PCI-DSS, GLBA, and SOX audit submissions.' },
  { label: 'Incident Timeline Reconstruction', desc: 'Build dark web timelines of how your data was exfiltrated for post-breach forensics.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register your domains, BIN ranges, executive emails, and SWIFT codes — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Our engines scan card markets, fraud forums, infostealer channels, and paste sites 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Receive structured alerts with context: source, severity, affected asset, and recommended action.' },
  { num: '04', title: 'Compliance Evidence', desc: 'Download audit-ready reports for your PCI-DSS, GLBA, and internal risk management teams.' },
];

const faqs = [
  {
    q: "Does DarkThreat make a bank or fintech GLBA, PCI DSS, or NYDFS compliant?",
    a: "No. DarkThreat helps a security team notice stolen credentials and leaked files for domains it is asked to watch. The safeguards program, the control tests, and any notice to a regulator stay with the institution.",
  },
  {
    q: "Which firms does the FTC Safeguards Rule cover?",
    a: "The FTC Safeguards Rule covers financial institutions subject to FTC jurisdiction that are not enforced by another GLBA regulator under 15 U.S.C. 6805. Banks, savings associations, and federally insured credit unions follow safeguards guidelines from their own banking regulators. The FTC publishes the examples in 16 CFR 314.2.",
  },
  {
    q: "Is external credential monitoring the same as the Safeguards Rule continuous monitoring?",
    a: "No. Section 314.4(d) tells a covered institution to test or otherwise monitor safeguards, including the ability to detect attacks. For information systems it describes continuous monitoring or periodic penetration testing and vulnerability assessments. A dark web alert can be one input. It is not that system test.",
  },
  {
    q: "What can a team register on a published plan?",
    a: "The Standard plan is basic breach and credential monitoring for one domain and one user, with email notifications and web UI access. The Enterprise plan adds full domain and hacker chatter feeds, two domains or IPs, and two users. Details are on the pricing page.",
  },
  {
    q: "Does a NYDFS 72-hour notice clock start when DarkThreat sends an email?",
    a: "No. Section 500.17 starts the clock when the covered entity determines that a cybersecurity incident has occurred. An external alert is a lead. The determination, the notice, and the 72-hour deadline belong to the covered entity.",
  },
];

const sources = [
  {
    href: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know",
    label: "FTC, Safeguards Rule: What Your Business Needs to Know",
  },
  {
    href: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314",
    label: "16 CFR Part 314, Standards for Safeguarding Customer Information",
  },
  {
    href: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314/section-314.4",
    label: "16 CFR 314.4, Safeguards Rule elements",
  },
  {
    href: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section6801&num=0&edition=prelim",
    label: "15 U.S.C. 6801, GLBA protection of nonpublic personal information",
  },
  {
    href: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section6805&num=0&edition=prelim",
    label: "15 U.S.C. 6805, GLBA enforcement",
  },
  {
    href: "https://ithandbook.ffiec.gov/it-booklets/information-security/iii-security-operations/iiia-threat-identification-and-assessment",
    label: "FFIEC IT Examination Handbook, Information Security, Threat Identification and Assessment",
  },
  {
    href: "https://ithandbook.ffiec.gov/it-booklets/information-security/ii-information-security-program-management/iic-risk-mitigation",
    label: "FFIEC IT Examination Handbook, Information Security, Risk Mitigation",
  },
  {
    href: "https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500",
    label: "NYDFS, 23 NYCRR Part 500",
  },
  {
    href: "https://www.pcisecuritystandards.org/document_library/",
    label: "PCI Security Standards Council, Document Library",
  },
  {
    href: "https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf",
    label: "PCI DSS v4.0.1",
  },
];

const reading = [
  {
    href: "/blog/ftc-safeguards-rule-and-dark-web-monitoring-for-financial-institutions",
    title: "FTC Safeguards Rule and Dark Web Monitoring for Financial Institutions",
  },
  {
    href: "/blog/financial-data-leaks-how-banks-detect-and-contain-them",
    title: "Financial Data Leaks: How Banks Detect and Contain Them",
  },
  {
    href: "/blog/dark-web-threats-targeting-banks-and-credit-unions-in-2025",
    title: "Dark Web Threats Targeting Banks and Credit Unions in 2025",
  },
  {
    href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained",
    title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained",
  },
  {
    href: "/blog/credential-leak-detection-for-financial-services-regulatory-view",
    title: "Credential Leak Detection for Financial Services: Regulatory View",
  },
];

const schema = serviceSchema('Dark Web Monitoring for Financial Services & Banks', 'Protect your bank, credit union, or fintech from SWIFT fraud, carding attacks, insider threats, and dark web data exposure. PCI‑DSS & GLBA aligned.', 'https://darkthreat.ai/industries/financial-services');

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Financial Services" },
]);

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, organizationSchema, faqPageSchema(faqs)]} />

      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 flex justify-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "Financial Services" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Banknote className="w-4 h-4 mr-2" /> Financial Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Financial Services & Banks</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Financial institutions are the #1 target for dark web threat actors. From SWIFT credential listings to BIN card dumps, DarkThreat gives your security and fraud teams early warning intelligence before attacks escalate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link href="#fs-inquiry-form" className="hero-button inline-flex items-center">
              Request Financial Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Threat Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Financial Sector Dark Web Threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six active attack vectors targeting banks, credit unions, payment processors, and investment firms on dark web networks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Why this sector
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why financial firms are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A financial firm is useful because it can move funds and because it stores the
              records that prove who a customer is. Four patterns show up around that access.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Stolen staff and customer logins
              </h3>
              <p className="mb-6">
                Online banking, cash management, and card servicing start with a password. The
                same password often sits in a browser on a laptop that also opens email. When
                infostealer malware copies that browser, the login can be replayed against the
                portal without a break of the core banking system.
              </p>
              <p className="mb-6">
                Treasury and wire desks are a narrower target. A stolen mailbox can be used to
                approve a payment or to swap a beneficiary. Customer credentials are a wider
                target. They are collected in bulk and tried against the same login page.
              </p>
              <p>
                DarkThreat helps by watching domains the institution registers for stolen
                credentials. The online banking platform, the entitlement reviews, and the fraud
                rules stay on systems the institution already runs. An external finding is a
                reason to look there. For how a stolen login becomes a later intrusion, see{" "}
                <Link
                  href="/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained"
                  className="text-primary hover:underline"
                >
                  how credential leaks lead to ransomware
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Card data and account files
              </h3>
              <p className="mb-6">
                Card account data is compact. A primary account number with an expiration date
                and a security code can be sold on its own. Loan files, statements, and customer
                lists are larger, and they are useful for fraud that needs a name, an address,
                or an account number.
              </p>
              <p className="mb-6">
                The copy often leaves through a merchant, a processor, a statement vendor, or an
                employee endpoint. The institution may learn about it when a card brand, a
                customer, or a leak-site post forces the conversation.
              </p>
              <p>
                Firms that store, process, or transmit account data are in scope for PCI DSS
                through the card brands and their acquirers. Requirement 6.4.3 and Requirement
                11.6.1 in{" "}
                <a
                  href="https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  PCI DSS v4.0.1
                </a>{" "}
                address payment-page scripts and tamper detection. Dark web monitoring does not
                perform those tests. It helps when credentials or files tied to a registered
                domain show up outside the firm. The{" "}
                <Link href="/industries/ecommerce" className="text-primary hover:underline">
                  ecommerce monitoring page
                </Link>{" "}
                covers the merchant side of the same card data.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Vendors that hold the same data
              </h3>
              <p className="mb-6">
                Core processors, statement printers, loan servicers, and card personalization
                bureaus hold files the institution is still responsible for knowing about. A
                password stolen from a vendor laptop can open a portal the institution issued.
              </p>
              <p className="mb-6">
                FFIEC tells management to obtain, analyze, and respond to cyber threat
                information and to keep a repository that can feed the risk assessment. The
                Information Security booklet describes that expectation in its{" "}
                <a
                  href="https://ithandbook.ffiec.gov/it-booklets/information-security/ii-information-security-program-management/iic-risk-mitigation"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  risk mitigation section
                </a>
                . A vendor that the institution cannot see inside is still a vendor the contract
                and the examination should cover.
              </p>
              <p>
                DarkThreat helps when a domain the institution can register, or a name on a leak
                site that matches a registered domain, shows a stolen login or a file. It does
                not audit the processor and it does not approve the vendor. Insurers that hold
                similar claim and payment files are covered on the{" "}
                <Link href="/industries/insurance" className="text-primary hover:underline">
                  insurance industry page
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Extortion after the copy exists
              </h3>
              <p className="mb-6">
                A ransomware crew does not need to encrypt the core to create pressure. A sample
                of customer files, posted under the institution name, is enough to threaten
                customers and examiners. The login that started the copy may already have been
                traded.
              </p>
              <p>
                DarkThreat helps by flagging credentials for registered domains and chatter,
                on the Enterprise plan, that names those domains. Restoring systems, notifying
                customers, and telling a regulator remain the institution&apos;s work. Crypto
                firms that face a related mix of stolen keys and customer files are covered on
                the{" "}
                <Link href="/industries/crypto-fintech" className="text-primary hover:underline">
                  crypto and fintech page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fs-inquiry-form" className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Risk Assessment
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Request a Financial Exposure Scan
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your institution and we&apos;ll run an initial dark web exposure check across your domain, key personnel, and known BIN ranges — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {['BIN/IIN range dark web scan', 'Executive credential check', 'Domain & subdomain exposure', 'SWIFT-related threat actor monitoring', 'Compliance report preview (PCI-DSS)'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">
              Financial Institution Inquiry
            </h3>
            <LeadForm
              variant="industry"
              interest="Financial Services Exposure Scan"
              submitLabel="Request Free Exposure Scan"
              fields={[
                { type: "text", name: "name", id: "fs-name", label: "Full Name *", placeholder: "Jane Doe", required: true, width: "half", bind: "name" },
                { type: "email", name: "email", id: "fs-email", label: "Business Email *", placeholder: "jane@bank.com", required: true, width: "half", bind: "email" },
                { type: "text", name: "institution", id: "fs-institution", label: "Institution Name", placeholder: "First National Bank", bind: "company" },
                { type: "textarea", name: "message", id: "fs-message", label: "Primary Concern", rows: 4, placeholder: "E.g. card data on dark web, SWIFT credential exposure, executive account monitoring...", bind: "message" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Built for Financial Security Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six monitoring capabilities engineered for the unique threat landscape of financial institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              From Dark Web Signal to Contained Threat
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Coverage</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Financial Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs satisfy evidence requirements for the most stringent financial regulatory frameworks.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'PCI-DSS v4', req: 'Req. 12.10 — External threat monitoring evidence' },
              { framework: 'GLBA Safeguards Rule', req: 'Annual risk assessment of external data exposure' },
              { framework: 'SWIFT CSP', req: 'Control 7.7 — Cyber threat intelligence integration' },
              { framework: 'SOX (IT Controls)', req: 'IT General Control evidence for access risk' },
              { framework: 'NIST CSF 2.0', req: 'GV.RM, DE.AE, RS.AN functions' },
              { framework: 'ISO 27001:2022', req: 'A.5.7 Threat intelligence controls' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
          <ComplianceGuideLinks slugs={["pci-dss", "nist-csf"]} />
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Requirements that apply
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              GLBA Safeguards, FFIEC, and NYDFS Part 500
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These texts apply to defined institutions, not to every company that moves money.
              DarkThreat supports external exposure awareness inside a program the firm already
              runs. Using DarkThreat does not make the firm compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                GLBA and the FTC Safeguards Rule
              </h3>
              <p className="mb-6">
                <a
                  href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section6801&num=0&edition=prelim"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  15 U.S.C. 6801
                </a>{" "}
                requires financial institutions to protect the security and confidentiality of
                customer nonpublic personal information.{" "}
                <a
                  href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section6805&num=0&edition=prelim"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  15 U.S.C. 6805
                </a>{" "}
                splits enforcement. The FTC rule is not the rule for a bank.
              </p>
              <p className="mb-6">
                The FTC{" "}
                <a
                  href="https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Safeguards Rule guide
                </a>{" "}
                says the rule applies to financial institutions subject to FTC jurisdiction that
                are not subject to another regulator under section 505. Examples in the rule
                include mortgage lenders, payday lenders, finance companies, mortgage brokers,
                account servicers, check cashers, wire transferors, collection agencies, tax
                preparation firms, non-federally insured credit unions, and finders. The text is{" "}
                <a
                  href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  16 CFR Part 314
                </a>
                .
              </p>
              <p className="mb-6">
                <a
                  href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314/section-314.4"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Section 314.4(d)(1)
                </a>{" "}
                requires a covered firm to regularly test or otherwise monitor the effectiveness
                of its safeguards, including controls to detect actual and attempted attacks or
                intrusions. Paragraph (d)(2) says information-system monitoring includes
                continuous monitoring or periodic penetration testing and vulnerability
                assessments. Absent effective continuous monitoring, the rule sets annual
                penetration testing and vulnerability assessments at least every six months.
              </p>
              <p>
                Section 314.4(j) requires notice to the FTC as soon as possible, and no later
                than 30 days after discovery, of a notification event involving unencrypted
                customer information of at least 500 consumers. The FTC page states that
                definition. DarkThreat can surface a stolen login or a leaked file. It does not
                run the penetration test, it does not file the FTC notice, and it does not make
                a firm compliant with the Safeguards Rule.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Banks, credit unions, and the FFIEC handbook
              </h3>
              <p className="mb-6">
                Banks and federally insured credit unions are outside the FTC Safeguards Rule
                because another regulator enforces GLBA for them. The FFIEC Information Security
                booklet tells management to develop procedures for obtaining, monitoring,
                assessing, and responding to threat and vulnerability information. Sources it
                names include government and information-sharing organizations. See{" "}
                <a
                  href="https://ithandbook.ffiec.gov/it-booklets/information-security/iii-security-operations/iiia-threat-identification-and-assessment"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Threat Identification and Assessment
                </a>
                .
              </p>
              <p>
                The same booklet&apos;s risk mitigation section says management should
                incorporate cyber event information into the information security program and
                keep a repository for risk assessments. The handbook identifies the GLBA
                interagency guidelines, including 12 CFR Part 30 Appendix B for the OCC, 12 CFR
                208 Appendix D-2 for the Federal Reserve, 12 CFR 364 Appendix B for the FDIC, and
                12 CFR 748 Appendix A for the NCUA. DarkThreat helps an institution notice
                external copies of credentials and files. It does not complete an examination
                and it does not implement those guidelines.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                NYDFS 23 NYCRR Part 500
              </h3>
              <p className="mb-6">
                <a
                  href="https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  23 NYCRR Part 500
                </a>{" "}
                applies to covered entities authorized under the New York Banking Law, Insurance
                Law, or Financial Services Law. It does not, by itself, cover a firm that is not
                a NYDFS covered entity. Section 500.19 lists exemptions.
              </p>
              <p className="mb-6">
                Section 500.2 requires a cybersecurity program. Section 500.9 requires periodic
                risk assessments. Section 500.11 covers third-party service providers. Section
                500.16 requires incident response plans and names ransomware as a disruptive
                event. Section 500.17(a) requires notice to the superintendent as promptly as
                possible and within 72 hours after determining that a cybersecurity incident has
                occurred.
              </p>
              <p>
                An external credential or file finding can be what starts that work. DarkThreat
                does not make the determination and it does not make a covered entity compliant
                with Part 500. Insurers under the same regulation are discussed on the{" "}
                <Link href="/industries/insurance" className="text-primary hover:underline">
                  insurance page
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related frameworks
              </h3>
              <p>
                Card-brand programs point account-data environments to PCI DSS. Many firms also
                map enterprise IT to the NIST Cybersecurity Framework. The guides below describe
                those frameworks. They are not a statement that DarkThreat satisfies PCI DSS, a
                banking guideline, or a certified management system.
              </p>
              <ComplianceGuideLinks slugs={["pci-dss", "nist-csf"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6 text-center">
            Related reading
          </h2>
          <ul className="space-y-3 mb-10">
            {reading.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Other sector pages:{" "}
            <Link href="/industries/insurance" className="text-primary hover:underline">
              insurance
            </Link>
            ,{" "}
            <Link href="/industries/crypto-fintech" className="text-primary hover:underline">
              crypto and fintech
            </Link>
            ,{" "}
            <Link href="/industries/ecommerce" className="text-primary hover:underline">
              ecommerce
            </Link>
            , and the{" "}
            <Link href="/industries" className="text-primary hover:underline">
              industry index
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="w-full space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-border rounded-xl px-4">
                <summary className="text-left font-montserrat font-semibold py-3 cursor-pointer">
                  {f.q}
                </summary>
                <p className="text-muted-foreground pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6 text-center">
            Sources
          </h2>
          <ul className="space-y-3">
            {sources.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
