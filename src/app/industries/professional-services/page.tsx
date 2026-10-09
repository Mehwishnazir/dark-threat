import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Briefcase, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema, faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Professional Services Dark Web Monitoring",
  description: "Protect client data, partner credentials, and firm IP. SOC 2, ISO 27001, and GDPR aligned dark web monitoring for consulting and advisory firms.",
  ...pageSeo("/industries/professional-services"),
};

const threats = [
  { icon: Key, title: 'Partner & Employee Credential Theft', desc: 'Infostealer logs harvesting firm-domain credentials for partners, managing directors, and staff.' },
  { icon: Database, title: 'Client Confidential Data Exposure', desc: 'Client files, material non-public information, and governance materials listed on leak sites and underground markets.' },
  { icon: Eye, title: 'Billable-Hour / Portal Phishing', desc: 'Fake time-entry, expense, or client-portal pages timed to harvest credentials and session tokens.' },
  { icon: Lock, title: 'Deal-Room & Collaboration Platform Risk', desc: 'Stealer-laced or harvested access to deal rooms and client collaboration platforms.' },
  { icon: AlertTriangle, title: 'Third-Party Vendor & Contractor Exposure', desc: 'Compromised DMS, e-discovery, or contractor credentials cascading into firm and client environments.' },
  { icon: Shield, title: 'Combo Lists & Ransomware Leak Posts', desc: 'Domain-filtered combo lists and ransomware double-extortion posts naming professional services firms.' },
];

const schema = serviceSchema(
  'Dark Web Monitoring for Professional Services',
  'Protect confidential client information, partner credentials, and firm intellectual property. SOC 2, ISO 27001, and GDPR aligned monitoring for consulting, accounting, and advisory firms.',
  'https://darkthreat.ai/industries/professional-services'
);
const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Industries', url: 'https://darkthreat.ai/industries' },
  { name: 'Professional Services' }
]);

const capabilities = [
  { label: 'Firm Domain Credential Watch', desc: 'Monitor primary and affiliated firm domains across stealer logs, combo lists, and markets.' },
  { label: 'Infostealer Log Correlation', desc: 'Extract firm credentials and session tokens from stealer dumps traded underground.' },
  { label: 'Partner & Executive Priority Alerts', desc: 'Severity scoring that elevates partner and MD exposures for faster incident response.' },
  { label: 'Client Data & Document Leak Surveillance', desc: 'Watch leak sites, forums, and paste channels for client-confidential and firm document exposure.' },
  { label: 'Multi-Domain & Portal Coverage', desc: 'Cover practice-area, office, and client-portal domains beyond a single .com.' },
  { label: 'Alerting Into Firm Security Stack', desc: 'Severity-scored alerts via email, webhook, or SIEM for password reset and session containment.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register firm domains, brand keywords, and key identifiers — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Engines scan markets, forums, stealer channels, paste sites, and ransomware leak sites 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Structured alerts with source, severity, role context, and recommended action.' },
  { num: '04', title: 'Contain & Evidence', desc: 'Reset credentials, document exposure for compliance and client-notification teams, and keep monitoring for reappearance.' },
];

const faqs = [
  {
    q: "Does DarkThreat make a firm SOC 2, ISO 27001, or GDPR compliant?",
    a: "No. SOC 2 is an AICPA examination against the Trust Services Criteria. ISO/IEC 27001 is a management-system standard. The GDPR is a regulation. DarkThreat helps a firm notice stolen credentials and leaked files. It does not issue a SOC 2 report, a certificate, or a supervisory notice.",
  },
  {
    q: "Does SEC Item 1.05 apply to every consulting firm?",
    a: "No. Form 8-K Item 1.05 applies to SEC registrants. A private advisory firm is not a registrant just because a client is public. When the firm itself is a registrant, the four-business-day clock runs from the firm's determination that an incident is material, not from a vendor email.",
  },
  {
    q: "Are tax preparation firms under the FTC Safeguards Rule?",
    a: "The FTC lists tax preparation firms as an example of a financial institution under 16 CFR Part 314, when the firm is subject to FTC jurisdiction. A strategy consultancy that does not handle customer financial information is not in that example. Read the rule for the firm's own activities.",
  },
  {
    q: "What can a published plan watch?",
    a: "The Standard plan is basic breach and credential monitoring for one domain and one user, with email notifications and web UI access. The Enterprise plan adds full domain and hacker chatter feeds, two domains or IPs, and two users. See the pricing page.",
  },
];

const sources = [
  { href: "https://www.ecfr.gov/current/title-17/chapter-II/part-229/subpart-229.100/section-229.106", label: "17 CFR 229.106, Regulation S-K Item 106, Cybersecurity" },
  { href: "https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/cybersecurity-risk-management-strategy-governance-incident-disclosure", label: "SEC, cybersecurity disclosure compliance guide (Form 8-K Item 1.05)" },
  { href: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314", label: "16 CFR Part 314, FTC Safeguards Rule" },
  { href: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know", label: "FTC, Safeguards Rule: What Your Business Needs to Know" },
  { href: "https://www.irs.gov/pub/irs-pdf/p4557.pdf", label: "IRS Publication 4557, Safeguarding Taxpayer Data" },
  { href: "https://www.iso.org/standard/27001", label: "ISO/IEC 27001, information security management systems" },
  { href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679", label: "Regulation (EU) 2016/679, the GDPR" },
];

const reading = [
  { href: "/blog/credential-leak-detection-for-professional-services-firms", title: "Credential Leak Detection for Professional Services Firms" },
  { href: "/blog/dark-web-threats-for-accounting-and-cpa-firms-full-risk-assessment", title: "Dark Web Threats for Accounting and CPA Firms — Full Risk Assessment" },
  { href: "/blog/dark-web-data-removal-for-professional-services-firms", title: "Dark Web Data Removal for Professional Services Firms" },
  { href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained", title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained" },
];

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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Professional Services' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Briefcase className="w-4 h-4 mr-2" /> Professional Services Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Professional Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Protect confidential client information, partner credentials, and firm intellectual property — continuous monitoring across stealer logs, markets, paste sites, and ransomware leak sites for legal, accounting, and consulting firms.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link href="#ps-inquiry-form" className="hero-button inline-flex items-center">
              Request Firm Exposure Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Professional Services Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six active attack vectors targeting consulting, accounting, and advisory firms on dark web networks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300">
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

      <section id="ps-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Firm Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your consulting, accounting, or advisory firm and we&apos;ll run an initial dark web exposure check across your domains and key identifiers — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Firm-domain & partner credential monitoring',
                'Client-confidential document leak surveillance',
                'Infostealer log & combo-list coverage',
                'Deal-room / portal exposure awareness',
                'SOC 2 / ISO 27001 / GDPR-aligned exposure reporting',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Looking for law-firm-specific privilege and ABA guidance? See our{' '}
              <Link href="/industries/legal" className="text-primary hover:underline">Legal industry page</Link>.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Professional Services Inquiry</h3>
            <LeadForm
              variant="industry"
              interest="Professional Services Firm Scan"
              submitLabel="Request Free Firm Scan"
              fields={[
                { type: "text", name: "name", id: "ps-name", label: "Full Name *", placeholder: "Jane Doe", required: true, width: "half", bind: "name" },
                { type: "email", name: "email", id: "ps-email", label: "Work Email *", placeholder: "jane@firm.com", required: true, width: "half", bind: "email" },
                { type: "text", name: "firm", id: "ps-firm", label: "Firm Name", placeholder: "Your consulting, accounting, or advisory firm", bind: "company" },
                { type: "textarea", name: "message", id: "ps-message", label: "Primary Concern", rows: 4, placeholder: "E.g. partner credential leaks, client data exposure, vendor risks...", bind: "message" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Professional Services Security Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities engineered for consulting, accounting, and advisory firms.</p>
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

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Coverage</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Professional Services Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs support evidence collection for frameworks that matter to professional services firms — aligned, not a certification claim.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'SOC 2', req: 'Supports continuous credential-exposure monitoring evidence for logical-access controls' },
              { framework: 'ISO 27001', req: 'Supports threat intelligence / monitoring artifacts for access-control evidence' },
              { framework: 'SEC Cybersecurity Disclosure', req: 'Supports early detection to help assess material incidents for disclosure workflows' },
              { framework: 'State Bar / ethics duty', req: 'Supports documented monitoring of partner credentials as part of client-data safeguarding' },
              { framework: 'PCAOB', req: 'Supports monitoring posture relevant to accounting firms under PCAOB-oriented oversight expectations' },
              { framework: 'GDPR', req: 'Supports client / employee PII exposure detection and reasonable-steps documentation' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
          <ComplianceGuideLinks slugs={["soc-2", "iso-27001", "gdpr"]} />
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How It Works</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">From Dark Web Signal to Contained Threat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">{s.num}</div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Why this sector</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Why professional services firms are targeted</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Consulting, accounting, and advisory firms sit on client files and on the logins that open them. Three patterns show up around that access.</p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Partner and staff credentials</h3>
              <p className="mb-6">A partner mailbox can reach a data room, a tax workpaper, and a client portal. The same password often lives in a browser. Infostealer malware copies that browser. The login can be replayed without touching the firm&apos;s own data center.</p>
              <p>DarkThreat helps by watching domains the firm registers. Resets and session reviews stay on systems the firm already operates. See <Link href="/blog/credential-leak-detection-for-professional-services-firms" className="text-primary hover:underline">credential leak detection for professional services firms</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Client files and workpapers</h3>
              <p className="mb-6">A forecast, a tax return, or a diligence memo is useful to someone who is not the client. A copy can leave through a stolen mailbox, a personal sync folder, or a vendor laptop. After the copy exists, it can be offered in a forum or named on a leak site.</p>
              <p>DarkThreat helps when a credential or a post matches a domain on the plan. It does not decide whether information is material, and it does not notify the client. Accounting-firm exposure is discussed in <Link href="/blog/dark-web-threats-for-accounting-and-cpa-firms-full-risk-assessment" className="text-primary hover:underline">dark web threats for accounting and CPA firms</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Contractors who hold the same files</h3>
              <p>Staffing firms, e-discovery vendors, and outsourced bookkeeping teams hold logins the firm issued. DarkThreat can watch a domain the firm can register. Access that stays only on the contractor network is a contract topic. Law firms with a related confidentiality duty are on the <Link href="/industries/legal" className="text-primary hover:underline">legal page</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Requirements that apply</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">SEC disclosure, the Safeguards Rule, and the GDPR</h2>
            <p className="text-muted-foreground leading-relaxed">These texts apply to defined firms and registrants. DarkThreat supports external exposure awareness. Using DarkThreat does not make a firm compliant, and it does not produce a SOC 2 report or an ISO certificate.</p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">SEC cybersecurity disclosure</h3>
              <p className="mb-6"><a href="https://www.ecfr.gov/current/title-17/chapter-II/part-229/subpart-229.100/section-229.106" className="text-primary hover:underline" rel="noopener noreferrer">17 CFR 229.106</a>, Regulation S-K Item 106, requires a registrant to describe its processes, if any, for assessing, identifying, and managing material risks from cybersecurity threats, and to describe board oversight and management&apos;s role.</p>
              <p>The SEC&apos;s <a href="https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/cybersecurity-risk-management-strategy-governance-incident-disclosure" className="text-primary hover:underline" rel="noopener noreferrer">compliance guide</a> explains Form 8-K Item 1.05. A registrant files within four business days after it determines that a cybersecurity incident is material. The determination is made without unreasonable delay after discovery. The guide says the clock is tied to that determination, not to discovery alone. A private firm that is not a registrant does not file Item 1.05. DarkThreat does not decide materiality and it does not file the form.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">Tax preparers and the FTC Safeguards Rule</h3>
              <p className="mb-6">The FTC <a href="https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know" className="text-primary hover:underline" rel="noopener noreferrer">Safeguards Rule guide</a> lists tax preparation firms among the examples of financial institutions under the rule, when the FTC has jurisdiction. The text is <a href="https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314" className="text-primary hover:underline" rel="noopener noreferrer">16 CFR Part 314</a>. Section 314.4(d) requires testing or other monitoring of safeguards, including the ability to detect attacks. That monitoring of the firm&apos;s own systems is not the same thing as an external credential alert.</p>
              <p>The IRS publishes <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" className="text-primary hover:underline" rel="noopener noreferrer">Publication 4557, Safeguarding Taxpayer Data</a>, for tax professionals. It is guidance on protecting taxpayer information. It is not a statement that a dark web watch completes the publication. A consultancy that does not prepare returns or hold customer financial information should not assume either text applies.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">GDPR and management-system standards</h3>
              <p className="mb-6">Articles 32 and 33 of the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679" className="text-primary hover:underline" rel="noopener noreferrer">GDPR</a> cover security of processing and notice to a supervisory authority. Article 33&apos;s 72 hours run from awareness. <a href="https://www.iso.org/standard/27001" className="text-primary hover:underline" rel="noopener noreferrer">ISO/IEC 27001</a> is the international standard for an information security management system. A firm chooses whether to operate one. DarkThreat does not certify that system.</p>
              <p>The guides below describe SOC 2, ISO 27001, and the GDPR. They are not a certification.</p>
              <ComplianceGuideLinks slugs={["soc-2", "iso-27001", "gdpr"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6 text-center">Related reading</h2>
          <ul className="space-y-3 mb-10">
            {reading.map((item) => (
              <li key={item.href}><Link href={item.href} className="text-primary hover:underline">{item.title}</Link></li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">Other sector pages: <Link href="/industries/legal" className="text-primary hover:underline">legal</Link>, <Link href="/industries/financial-services" className="text-primary hover:underline">financial services</Link>, and the <Link href="/industries" className="text-primary hover:underline">industry index</Link>.</p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <div className="w-full space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-border rounded-xl px-4">
                <summary className="text-left font-montserrat font-semibold py-3 cursor-pointer">{f.q}</summary>
                <p className="text-muted-foreground pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6 text-center">Sources</h2>
          <ul className="space-y-3">
            {sources.map((item) => (
              <li key={item.href}><a href={item.href} className="text-primary hover:underline" rel="noopener noreferrer">{item.label}</a></li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />

      
    </div>
  
  );
}
