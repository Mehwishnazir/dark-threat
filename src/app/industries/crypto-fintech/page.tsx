import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Bitcoin, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, Wallet, } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema, faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Dark Web Monitoring for Crypto & Fintech",
  description: "Monitor wallet address leaks, exchange credential theft, and DeFi attack signals. FinCEN, MiCA, and ISO 27001 aligned monitoring for crypto and fintech.",
  ...pageSeo("/industries/crypto-fintech"),
};

const threats = [
  { icon: Wallet, title: 'Wallet Address & Seed Leaks', desc: 'Seed phrases, private keys, and wallet dumps traded on underground markets and Telegram channels.' },
  { icon: Key, title: 'Exchange Credential Theft', desc: 'Exchange logins, session cookies, and admin access sold via stealer logs and dark web forums.' },
  { icon: Lock, title: 'API Key & Bot Secret Exposure', desc: 'Exchange API keys and signing secrets appearing in stealer logs, public repos, and credential dumps.' },
  { icon: AlertTriangle, title: 'DeFi Protocol Attack Signals', desc: 'Threat actor chatter and credential-driven attacks targeting DeFi operations wallets and related infrastructure.' },
  { icon: Database, title: 'KYC / Customer Data Dumps', desc: 'Customer KYC packs and PII from exchange breaches listed on leak sites and underground markets.' },
  { icon: Eye, title: 'Brand / Phishing Impersonation', desc: 'Fake apps, phishing kits, and spoofed crypto brands designed to deceive users and harvest credentials.' },
];

const schema = serviceSchema(
  'Dark Web Monitoring for Crypto & Fintech',
  'Monitor wallet address leaks, exchange credential theft, and DeFi protocol attack signals. FinCEN, MiCA, and ISO 27001 aligned monitoring for exchanges, wallets, and fintech platforms.',
  'https://darkthreat.ai/industries/crypto-fintech'
);
const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Industries', url: 'https://darkthreat.ai/industries' },
  { name: 'Crypto & Fintech' }
]);

const capabilities = [
  { label: 'Wallet & Key Exposure Monitoring', desc: 'Watch for wallet addresses, seed phrases, and private-key material tied to your assets across underground sources.' },
  { label: 'Exchange Credential Surveillance', desc: 'Monitor stealer logs and markets for exchange and admin credentials and active sessions.' },
  { label: 'API Key & Secret Detection', desc: 'Parse underground sources for API key patterns and trading or infrastructure secrets.' },
  { label: 'DeFi & Protocol Signal Tracking', desc: 'Track chatter and listings that signal attacks on DeFi operations and related infrastructure.' },
  { label: 'Infostealer Log Correlation', desc: 'Ingest stealer logs for crypto domains, wallet identifiers, and session tokens tied to your organization.' },
  { label: 'Alerting Into Your Stack', desc: 'Deliver severity-scored alerts via email, webhook, or SIEM within minutes of discovery.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register domains, brand keywords, and crypto-relevant identifiers — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Engines scan markets, forums, stealer channels, paste sites, and Telegram 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Structured alerts with source, severity, affected asset type, and recommended action.' },
  { num: '04', title: 'Contain & Evidence', desc: 'Rotate keys and credentials, document exposure for compliance teams, and keep monitoring for reappearance.' },
];

const faqs = [
  {
    q: "Does DarkThreat make an exchange FinCEN, MiCA, or ISO 27001 compliant?",
    a: "No. FinCEN rules apply to money services businesses as those rules define them. MiCA applies to crypto-asset service providers in its scope. ISO/IEC 27001 is a management-system standard. DarkThreat helps notice stolen credentials and leaked files for domains it is asked to watch. It does not register a business with FinCEN and it does not certify a management system.",
  },
  {
    q: "Does every crypto project have to follow MiCA?",
    a: "No. Regulation (EU) 2023/1114 applies to the persons and services it defines, including crypto-asset service providers offering services in the Union. A firm outside that scope should not treat the regulation as if it automatically applies.",
  },
  {
    q: "Is an external alert the same as a suspicious-activity report?",
    a: "No. Bank Secrecy Act reporting duties belong to the financial institution that has them. An alert about a stolen login or a posted file is a lead for the security team. It is not a FinCEN filing.",
  },
  {
    q: "What can a published plan watch?",
    a: "The Standard plan is basic breach and credential monitoring for one domain and one user, with email notifications and web UI access. The Enterprise plan adds full domain and hacker chatter feeds, two domains or IPs, and two users. See the pricing page.",
  },
];

const sources = [
  { href: "https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf", label: "FinCEN, Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies (2019)" },
  { href: "https://www.fincen.gov/resources/statutes-and-regulations", label: "FinCEN, statutes and regulations" },
  { href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114", label: "Regulation (EU) 2023/1114, Markets in Crypto-Assets (MiCA)" },
  { href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554", label: "Regulation (EU) 2022/2554, Digital Operational Resilience Act (DORA)" },
  { href: "https://www.dfs.ny.gov/apps_and_licensing/virtual_currency_businesses", label: "NYDFS, virtual currency businesses" },
  { href: "https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500", label: "NYDFS, 23 NYCRR Part 500" },
  { href: "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-rba-virtual-assets-2021.html", label: "FATF, Updated Guidance for a Risk-Based Approach to Virtual Assets and VASPs (2021)" },
  { href: "https://www.iso.org/standard/27001", label: "ISO/IEC 27001" },
  { href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679", label: "Regulation (EU) 2016/679, the GDPR" },
];

const reading = [
  { href: "/blog/data-leak-detection-for-cryptocurrency-exchanges", title: "Data Leak Detection for Cryptocurrency Exchanges" },
  { href: "/blog/how-crypto-exchanges-get-hacked-via-dark-web-reconnaissance", title: "How Crypto Exchanges Get Hacked via Dark Web Reconnaissance" },
  { href: "/blog/credential-leak-detection-for-crypto-and-defi-platforms", title: "Credential Leak Detection for Crypto and DeFi Platforms" },
  { href: "/blog/cryptocurrency-exchange-dark-web-threats-monitoring-wallet-address-leaks", title: "Cryptocurrency Exchange Dark Web Threats: Monitoring Wallet Address Leaks" },
  { href: "/blog/how-fintech-startups-get-targeted-on-the-dark-web-and-how-to-stop-it", title: "How Fintech Startups Get Targeted on the Dark Web — And How to Stop It" },
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Crypto & Fintech' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Bitcoin className="w-4 h-4 mr-2" /> Crypto &amp; Fintech Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Crypto &amp; Fintech</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Monitor wallet address leaks, exchange credential theft, and DeFi protocol attack signals — so exchanges, custodial wallets, and fintech platforms get early warning before credentials and keys are weaponized.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link href="#cf-inquiry-form" className="hero-button inline-flex items-center">
              Request Crypto Exposure Scan <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Crypto &amp; Fintech Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six active attack vectors targeting exchanges, DeFi protocols, custodial wallets, and fintech platforms on dark web networks.</p>
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

      <section id="cf-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Crypto &amp; Fintech Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your exchange, wallet, or fintech platform and we&apos;ll run an initial dark web exposure check across your domains, key personnel, and crypto-relevant asset patterns — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Wallet address & seed-phrase exposure watch',
                'Exchange / admin credential monitoring',
                'API key & trading-secret pattern detection',
                'DeFi / protocol attack-signal tracking',
                'Compliance-oriented exposure reporting (FinCEN / MiCA / ISO-aligned)',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Crypto &amp; Fintech Inquiry</h3>
            <LeadForm
              variant="industry"
              interest="Crypto & Fintech Exposure Scan"
              submitLabel="Request Free Exposure Scan"
              fields={[
                { type: "text", name: "name", id: "cf-name", label: "Full Name *", placeholder: "Jane Doe", required: true, width: "half", bind: "name" },
                { type: "email", name: "email", id: "cf-email", label: "Business Email *", placeholder: "jane@exchange.com", required: true, width: "half", bind: "email" },
                { type: "text", name: "company", id: "cf-company", label: "Platform / Company Name", placeholder: "Your exchange, wallet, or fintech", bind: "company" },
                { type: "textarea", name: "message", id: "cf-message", label: "Primary Concern", rows: 4, placeholder: "E.g. wallet key exposure, exchange credential leaks, API key dumps...", bind: "message" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Crypto &amp; Fintech Security Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities engineered for exchanges, DeFi protocols, wallets, and fintech platforms.</p>
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
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Crypto &amp; Fintech Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs support evidence collection for frameworks that matter to crypto and fintech operators.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'FinCEN', req: 'Supports VASP / AML-CFT-oriented external threat monitoring evidence' },
              { framework: 'MiCA', req: 'Supports EU crypto-asset service risk monitoring and exposure awareness' },
              { framework: 'ISO 27001', req: 'Threat intelligence / continuous monitoring as an operational control' },
              { framework: 'GDPR', req: 'Customer PII / KYC exposure detection supporting breach-awareness obligations' },
              { framework: 'CCPA', req: 'Consumer personal-information exposure visibility for regulated disclosures' },
              { framework: 'FATF VASP guidance', req: 'Real-time dark web / threat intelligence as part of robust AML/CFT posture' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
          <ComplianceGuideLinks slugs={["pci-dss"]} />
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Why crypto and fintech firms are targeted</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">An exchange or wallet company holds customer logins, operational keys, and identity files. Three patterns show up around that access.</p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Staff and admin logins</h3>
              <p className="mb-6">An admin console, a custody tool, and a support mailbox start with a password. Infostealer malware copies browsers on staff laptops. The same username can be tried against the console without a break of the signing environment.</p>
              <p>DarkThreat helps by watching domains the firm registers. Key rotation and session revocation stay on systems the firm already runs. See <Link href="/blog/how-crypto-exchanges-get-hacked-via-dark-web-reconnaissance" className="text-primary hover:underline">how exchanges are approached through dark web reconnaissance</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">Customer identity files</h3>
              <p className="mb-6">A KYC pack is a name, a document image, and an account. A copy is useful for fraud against the customer and for pressure against the firm. It can leave through a stolen support login or a vendor export, then appear on a leak site under the company name.</p>
              <p>DarkThreat helps when a credential or a post matches a domain on the plan. It does not store customer documents and it does not decide whether a privacy notice is required. Exchange file exposure is covered in <Link href="/blog/data-leak-detection-for-cryptocurrency-exchanges" className="text-primary hover:underline">data leak detection for cryptocurrency exchanges</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">What an external watch does not replace</h3>
              <p>Wallet signing, smart-contract review, and on-chain monitoring stay with the firm. An external finding is a reason to check whether a staff account or a customer file left the company. Banks and other financial firms with overlapping customer-data duties are on the <Link href="/industries/financial-services" className="text-primary hover:underline">financial services page</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Requirements that apply</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">FinCEN, MiCA, and NYDFS</h2>
            <p className="text-muted-foreground leading-relaxed">These regimes apply to defined businesses, not to every project that uses a token. DarkThreat supports external exposure awareness. Using DarkThreat does not make a firm compliant.</p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">FinCEN and convertible virtual currency</h3>
              <p className="mb-6">FinCEN&apos;s May 2019 guidance, <a href="https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf" className="text-primary hover:underline" rel="noopener noreferrer">Application of FinCEN&apos;s Regulations to Certain Business Models Involving Convertible Virtual Currencies</a>, explains how existing Bank Secrecy Act rules apply to administrators and exchangers of convertible virtual currency. The underlying statutes and rules are listed on <a href="https://www.fincen.gov/resources/statutes-and-regulations" className="text-primary hover:underline" rel="noopener noreferrer">FinCEN&apos;s statutes and regulations page</a>.</p>
              <p>The guidance does not apply to every software publisher. A firm that is a money services business has registration, recordkeeping, and reporting duties in the rules that cover it. An external credential alert is not a suspicious activity report. DarkThreat does not file one.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">MiCA and DORA</h3>
              <p className="mb-6"><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114" className="text-primary hover:underline" rel="noopener noreferrer">Regulation (EU) 2023/1114</a> (MiCA) is the EU framework for crypto-assets and for crypto-asset service providers in its scope. <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554" className="text-primary hover:underline" rel="noopener noreferrer">Regulation (EU) 2022/2554</a> (DORA) sets digital operational resilience requirements for the financial entities it lists. A firm should read both texts before treating either as applicable.</p>
              <p>DarkThreat helps when staff credentials or customer files for a registered domain show up outside the company. It does not authorise a crypto-asset service provider and it does not implement an ICT risk framework.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">New York and FATF</h3>
              <p className="mb-6">NYDFS licenses virtual currency business activity under its virtual currency regulation. The department&apos;s overview is on the <a href="https://www.dfs.ny.gov/apps_and_licensing/virtual_currency_businesses" className="text-primary hover:underline" rel="noopener noreferrer">virtual currency businesses page</a>. A licensee that is also a covered entity under <a href="https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500" className="text-primary hover:underline" rel="noopener noreferrer">23 NYCRR Part 500</a> has that cybersecurity program as well. Part 500 does not apply to a firm that is not a covered entity.</p>
              <p className="mb-6">FATF&apos;s <a href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-rba-virtual-assets-2021.html" className="text-primary hover:underline" rel="noopener noreferrer">2021 updated guidance</a> is guidance to countries and to virtual asset service providers on a risk-based approach. It is not a statute in the United States. DarkThreat does not implement a travel rule or an AML program.</p>
              <p>Customer personal data can also fall under the GDPR when that regulation applies. The guides below describe the GDPR and ISO/IEC 27001. They are not a certification. The card-data guide already linked above stays on this page for firms that handle payment cards.</p>
              <ComplianceGuideLinks slugs={["gdpr", "iso-27001"]} />
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
          <p className="text-muted-foreground leading-relaxed">Other sector pages: <Link href="/industries/financial-services" className="text-primary hover:underline">financial services</Link>, <Link href="/industries/saas-technology" className="text-primary hover:underline">SaaS and technology</Link>, and the <Link href="/industries" className="text-primary hover:underline">industry index</Link>.</p>
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
