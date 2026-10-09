import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Scale, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, FileWarning, Key, Eye, Briefcase, FileText } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Law Firm Dark Web Monitoring",
  description: "Protect attorney-client privilege, client PII, and firm credentials from ransomware and dark web leaks. ABA Model Rules 1.1 and 1.6 compliant monitoring.",
  ...pageSeo("/industries/legal"),
};

const threats = [
  { icon: Lock, title: 'Attorney Credential Theft', desc: 'Law firm partner and associate login credentials harvested by infostealer malware families and traded on dark web broker platforms.' },
  { icon: FileText, title: 'Privileged Client Leaks', desc: 'Confidential attorney-client emails, corporate secrets, and settlement documents leaked on ransomware shaming sites.' },
  { icon: Eye, title: 'Pre-Litigation Strategy Exposure', desc: 'Dark web actors selling access to M&A deal structures, patent filings, and litigation strategies prior to public disclosure.' },
  { icon: AlertTriangle, title: 'Third-Party Legal Vendor Breaches', desc: 'Breaches at forensic expert witness agencies, court reporters, or hosting providers leaking sensitive case discovery materials.' },
  { icon: Database, title: 'Trust Account Fraud Signals', desc: 'Threat actor discussions and credential exposures targeting firm trust accounts and financial routing details.' },
  { icon: FileWarning, title: 'Regulated Client Data Leaks', desc: 'Exposures of client HIPAA-protected health records, tax details, or trade secrets, violating non-disclosure agreements.' },
];

const capabilities = [
  { label: 'Partner & Executive Watch', desc: 'Continuous monitoring of C-suite and partner email credentials across underground markets and infostealer logs.' },
  { label: 'Document & IP Leak Surveillance', desc: 'Scanning ransomware sites, pastebins, and private databases for client documents, litigation files, or trade secrets.' },
  { label: 'Pre-Litigation Intel Crawling', desc: 'Monitor cybercrime channels for target company mentions, specific case codes, or upcoming legal proceedings.' },
  { label: 'Third-Party Supplier Assessment', desc: 'Assess dark web exposure profiles of expert witnesses, litigation support vendors, and external counsel.' },
  { label: 'ABA Rules Compliance Reports', desc: 'Audit-ready reports illustrating reasonable cybersecurity steps aligned with ABA Model Rules 1.1 and 1.6.' },
  { label: 'Ransomware Early-Warning Signal', desc: 'Identify early indicators of compromised network access to halt ransomware before encryption occurs.' },
];

const steps = [
  { num: '01', title: 'Firm Asset Registration', desc: 'Onboard domains, associate email lists, key client list names, and case identifiers securely with zero software agent footprint.' },
  { num: '02', title: 'Deep Web Surveillance', desc: 'Continuous, multi-threaded indexing of lawyer forums, malware command servers, Telegram logs, and breach databases.' },
  { num: '03', title: 'Context-Rich Triage', desc: 'Alerts are enriched with key identifiers showing the specific partner, client case, or document name affected.' },
  { num: '04', title: 'Ethical Compliance Evidence', desc: 'Download structured documentation demonstrating reasonable diligence in safeguarding client confidentiality.' },
];

const faqs = [
  {
    q: "Does DarkThreat make a law firm compliant with ABA Model Rules 1.1 or 1.6?",
    a: "No. The Model Rules are professional-conduct rules, and a jurisdiction's adopted version controls. DarkThreat helps a firm notice stolen credentials and leaked files for domains it is asked to watch. The reasonable-efforts judgment stays with the lawyers.",
  },
  {
    q: "Are the ABA Model Rules binding in every state?",
    a: "No. The ABA publishes model rules. A lawyer is bound by the rules the jurisdiction where the lawyer is admitted has adopted. Those adopted texts can differ from the model.",
  },
  {
    q: "Does every law firm have HIPAA duties?",
    a: "No. HIPAA business-associate duties apply when a firm creates, receives, maintains, or transmits protected health information for a covered entity or another business associate. A litigation file that never includes that information is outside that rule.",
  },
  {
    q: "Does a DarkThreat alert start a GDPR 72-hour clock?",
    a: "No. Article 33 runs from when the controller becomes aware of a personal data breach. An alert can be one input. The firm still decides whether a breach occurred and whether notice is required.",
  },
  {
    q: "What can a published plan watch?",
    a: "The Standard plan is basic breach and credential monitoring for one domain and one user, with email notifications and web UI access. The Enterprise plan adds full domain and hacker chatter feeds, two domains or IPs, and two users. See the pricing page.",
  },
];

const sources = [
  { href: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/comment_on_rule_1_1/", label: "ABA Model Rule 1.1, Comment 8 (technology competence)" },
  { href: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/", label: "ABA Model Rule 1.6, Confidentiality of Information" },
  { href: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/comment_on_rule_1_6/", label: "ABA Model Rule 1.6, Comment 18" },
  { href: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502", label: "45 CFR 164.502, HIPAA uses and disclosures" },
  { href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679", label: "Regulation (EU) 2016/679, the GDPR" },
  { href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82", label: "California Civil Code 1798.82, breach disclosure" },
];

const reading = [
  { href: "/blog/client-confidentiality-at-risk-law-firm-credential-exposure-on-dark-web", title: "Client Confidentiality at Risk — Law Firm Credential Exposure on Dark Web" },
  { href: "/blog/how-law-firms-become-dark-web-targets-and-how-to-respond", title: "How Law Firms Become Dark Web Targets — and How to Respond" },
  { href: "/blog/legal-data-leaks-how-law-firms-detect-privileged-information-exposure", title: "Legal Data Leaks: How Law Firms Detect Privileged Information Exposure" },
  { href: "/blog/detecting-leaked-legal-documents-and-court-filings", title: "Detecting Leaked Legal Documents and Court Filings" },
];

export default function Page() {

      
  

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dark Web Monitoring for Law Firms & Legal Services — DarkThreat',
    url: 'https://darkthreat.ai/industries/legal',
    description: 'Protect attorney-client privilege, litigation files, and firm credentials from dark web threats. Meet ABA Model Rules 1.1 & 1.6 with DarkThreat.',
  };

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, faqPageSchema(faqs)]} />
      

      

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Legal' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Scale className="w-4 h-4 mr-2" /> Legal Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Law Firms & Legal Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Law firms maintain highly sensitive, non-public intellectual property and client communications, making them high-priority targets. DarkThreat continuously monitors the dark web to secure privileged information, attorney credentials, and case files before they are exploited.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link href="#legal-inquiry-form" className="hero-button inline-flex items-center">
              Request Legal Exposure Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sector Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Legal Sector Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Active risk scenarios threatening lawyer credentials, client communications, and trial strategy across underground networks.</p>
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

      {/* SECTION 3: Inquiry Form */}
      <section id="legal-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Confidential Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Find out if your firm&apos;s partner credentials or ongoing legal matters have been mentioned in dark web hacker forums, malware logs, or Telegram trade channels.
            </p>
            <ul className="space-y-3 mb-8">
              {['Firm domain & subdomain scan', 'Partner & paralegal credential watch', 'Confidential client document leak search', 'Litigation-related threat intelligence', 'ABA compliance checklist preview'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Confidential Firm Inquiry</h3>
            <LeadForm
              variant="industry"
              interest="Legal Firm Scan"
              submitLabel="Request Free Firm Scan"
              fields={[
                { type: "text", name: "name", id: "legal-name", label: "Full Name *", placeholder: "Jane Doe, Esq.", required: true, width: "half", bind: "name" },
                { type: "email", name: "email", id: "legal-email", label: "Work Email *", placeholder: "jane@lawfirm.com", required: true, width: "half", bind: "email" },
                { type: "text", name: "firm", id: "legal-firm", label: "Firm Name", placeholder: "Doe & Partners", width: "half", bind: "company" },
                { type: "text", name: "size", id: "legal-size", label: "Firm Size", placeholder: "E.g., 50+ attorneys", width: "half", bind: "detail" },
                { type: "textarea", name: "message", id: "legal-message", label: "Primary Cybersecurity Concern", rows: 4, placeholder: "E.g., safeguarding client records, partner credential monitoring, third-party vendor risks...", bind: "message" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Engineered for Modern Law Practices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six automated capabilities configured to fulfill ethical duties and protect lawyer-client privilege.</p>
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

      {/* SECTION 5: Compliance Mapping */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Alignment</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Ethical Duty & Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">Verify that your security posture stands up to local bar ethics boards and national privacy laws.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'ABA Model Rule 1.1', req: 'Competence in assessing cybersecurity risk' },
              { framework: 'ABA Model Rule 1.6', req: 'Safeguard information relating to representation' },
              { framework: 'HIPAA (Legal counsel)', req: 'Protects clinical data stored for trial evidence' },
              { framework: 'NIST CSF 2.0', req: 'Identifies & monitors critical lawyer access risks' },
              { framework: 'GDPR (Article 32)', req: 'Securing processing operations for EU clients' },
              { framework: 'CCPA / CPRA', req: 'Ensure robust custody over consumer personal details' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
          <ComplianceGuideLinks slugs={["gdpr", "iso-27001"]} />
        </div>
      </section>

      {/* SECTION 6: Operational Workflow */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How It Works</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Confidential Alert-to-Action Protocol</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center relative">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">{s.num}</div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && <div className="hidden md:block absolute" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Why this sector</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Why law firms are targeted</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">A firm file is useful because it is confidential and because it describes a deal, a dispute, or a person. Three patterns show up around that file.</p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Lawyer and staff logins</h3>
              <p className="mb-6">Email, the document system, and the client portal start with a password. That password often sits in a browser on a laptop that also opens personal mail. Infostealer malware copies the browser. The login can then be tried against the firm without a break of the server room.</p>
              <p>DarkThreat helps by watching firm domains the firm registers. Access reviews and password resets stay on systems the firm already runs. See <Link href="/blog/client-confidentiality-at-risk-law-firm-credential-exposure-on-dark-web" className="text-primary hover:underline">law firm credential exposure</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Privileged and deal files</h3>
              <p className="mb-6">A settlement draft, a board memo, or a set of discovery productions is compact and specific. Once a copy leaves the document system, it can be described on a leak site under the firm or client name. The copy usually starts with a stolen mailbox or a synced folder, not with a dramatic break of the courthouse.</p>
              <p>DarkThreat helps when a post or a credential matches a domain on the plan. It does not decide privilege, and it does not file anything with a court. Leaked filings are discussed in <Link href="/blog/detecting-leaked-legal-documents-and-court-filings" className="text-primary hover:underline">detecting leaked legal documents</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Vendors who hold the same matter</h3>
              <p className="mb-6">Court reporters, e-discovery hosts, and expert firms hold pieces of the same case. A password stolen from a vendor laptop can open a portal the firm issued. DarkThreat can watch a domain the firm is able to register. It cannot see a vendor network the firm does not control. That gap belongs in the engagement letter.</p>
              <p>Consulting and accounting firms that hold similar client files are covered on the <Link href="/industries/professional-services" className="text-primary hover:underline">professional services page</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Requirements that apply</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">ABA Model Rules, HIPAA, and the GDPR</h2>
            <p className="text-muted-foreground leading-relaxed">These texts apply in defined situations. DarkThreat supports external exposure awareness inside the program the firm already runs. Using DarkThreat does not make a lawyer or a firm compliant.</p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">ABA Model Rules 1.1 and 1.6</h3>
              <p className="mb-6">Comment 8 to <a href="https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/comment_on_rule_1_1/" className="text-primary hover:underline" rel="noopener noreferrer">Model Rule 1.1</a> says that, to maintain competence, a lawyer should keep abreast of changes in the law and its practice, including the benefits and risks associated with relevant technology.</p>
              <p className="mb-6"><a href="https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/" className="text-primary hover:underline" rel="noopener noreferrer">Model Rule 1.6(c)</a> requires a lawyer to make reasonable efforts to prevent the inadvertent or unauthorized disclosure of, or unauthorized access to, information relating to the representation of a client. Comment 18 says unauthorized access is not itself a violation if the lawyer made reasonable efforts. The comment lists factors, including sensitivity, likelihood of disclosure, cost, and difficulty.</p>
              <p>The model is not the rule in a state until that jurisdiction adopts it, and the adopted text can differ. An external credential or file finding can be one fact in that reasonableness record. DarkThreat does not make the judgment and it does not make a lawyer compliant with Rule 1.1 or Rule 1.6.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">HIPAA, when the firm is a business associate</h3>
              <p className="mb-6"><a href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502" className="text-primary hover:underline" rel="noopener noreferrer">45 CFR 164.502</a> limits how a covered entity may use and disclose protected health information. A law firm becomes a business associate when it creates, receives, maintains, or transmits that information for a covered entity or for another business associate. A matter that never includes protected health information is not in that role.</p>
              <p>DarkThreat helps when credentials or files for a registered domain show up outside the firm. It does not sign a business-associate agreement and it does not make a firm compliant with HIPAA. Health-care clients are also discussed on the <Link href="/industries/healthcare" className="text-primary hover:underline">healthcare page</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">GDPR and state breach notice</h3>
              <p className="mb-6">Article 32 of the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679" className="text-primary hover:underline" rel="noopener noreferrer">GDPR</a> requires a controller and processor to implement appropriate security. Article 33 requires notice to the supervisory authority without undue delay and, where feasible, within 72 hours of awareness, unless the breach is unlikely to result in a risk to rights and freedoms. The 72 hours run from awareness, not from a vendor email.</p>
              <p>Where a firm owns or licenses personal information of a California resident, <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82" className="text-primary hover:underline" rel="noopener noreferrer">Civil Code 1798.82</a> requires disclosure within 30 calendar days of discovery or notification of a breach, with the delay rules in that section. Other states have their own statutes. DarkThreat does not decide that a breach occurred and it does not send the notice.</p>
              <ComplianceGuideLinks slugs={["gdpr", "hipaa"]} />
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
          <p className="text-muted-foreground leading-relaxed">Other sector pages: <Link href="/industries/professional-services" className="text-primary hover:underline">professional services</Link>, <Link href="/industries/healthcare" className="text-primary hover:underline">healthcare</Link>, and the <Link href="/industries" className="text-primary hover:underline">industry index</Link>.</p>
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
