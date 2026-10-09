import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  ShoppingCart,
  Lock,
  AlertTriangle,
  Database,
  CheckCircle2,
  ArrowRight,
  FileWarning,
  CreditCard,
  ShoppingBag,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "E-Commerce Dark Web Monitoring",
  description: "Secure your e-commerce store, customer accounts, and transactions from carding fraud and credential stuffing. PCI-DSS v4.0 aligned.",
  ...pageSeo("/industries/ecommerce"),
};

const threats = [
  { icon: Lock, title: 'Customer Account Stuffing', desc: 'Shopper usernames and passwords stolen by infostealers and packed into combo lists for automated takeover campaigns.' },
  { icon: CreditCard, title: 'Carding & Payment Fraud', desc: 'Stolen customer payment card data, BIN details, and CVV codes sold in underground carding shops.' },
  { icon: ShoppingBag, title: 'Brand & Site Impersonation', desc: 'Phishing kits and typosquatted domains designed to mimic your retail portal to harvest customer cards.' },
  { icon: AlertTriangle, title: 'Magecart & Code Backdoors', desc: 'Malicious JavaScript injection scripts and backdoor access listings targeting popular shopping carts.' },
  { icon: Database, title: 'Refund-as-a-Service Schemes', desc: 'Hacker advertisements showing refunding exploits, return loops, and logistics fraud targeting your brand.' },
  { icon: FileWarning, title: 'Gift Card & Loyalty Drain', desc: 'Stolen reward account details and programmatic gift card pin checkers shared in fraud communities.' },
];

const capabilities = [
  { label: 'Credential Stuffing Defenses', desc: 'Real-time discovery of compromised user accounts on underground marketplaces to prevent credential stuffing.' },
  { label: 'Payment Card Watch', desc: 'Detect when payment details matching your transactional domains or BINs appear on card markets.' },
  { label: 'Phishing Domain Detection', desc: 'Continuous surveillance of typosquatting registrations and brand-impersonating mobile apps.' },
  { label: 'Code & backdoors Scanning', desc: 'Crawling hacker forums for Magecart scripts and platform vulnerabilities targeting your site architecture.' },
  { label: 'PCI-DSS v4.0 Reporting', desc: 'Extract automated compliance evidence aligned with PCI-DSS external threat watch mandates.' },
  { label: 'Loyalty & Refund Intel Watch', desc: 'Track threat forums for refunding tutorials or loyalty loophole listings targeting your systems.' },
];

const steps = [
  { num: '01', title: 'Brand Asset Registration', desc: 'Register primary domains, brand names, e-commerce platform types, and transactional BIN scopes securely.' },
  { num: '02', title: 'Deep Fraud Crawling', desc: 'Continuous crawling of card shops, hacker communities, Telegram fraud channels, and paste repositories.' },
  { num: '03', title: 'Enriched Alert Delivery', desc: 'Alert notifications are sent with context showing the specific shopper records, card types, or domain affected.' },
  { num: '04', title: 'PCI & Fraud Defense Support', desc: 'Download structured threat reports to update fraud filters and satisfy compliance audits.' },
];

const faqs = [
  {
    q: "Does DarkThreat make an online store PCI DSS compliant?",
    a: "No. PCI DSS Requirements 6.4.3 and 11.6.1 are about scripts and tamper detection on the payment page. DarkThreat helps when stolen credentials or leaked files for a registered domain show up outside the store. It does not implement those requirements.",
  },
  {
    q: "Does a dark web alert start a state breach-notice clock?",
    a: "Not by itself. California Civil Code 1798.82 and New York General Business Law 899-aa tie notice to discovery of a breach of the security of the system that meets each statute. An external alert is a lead. The business decides whether the statute applies and when the clock starts.",
  },
  {
    q: "Are all 50 state breach laws the same?",
    a: "No. This page cites California and New York because their current texts are public and specific. Other states have their own definitions, deadlines, and agency-notice rules. Use the statute for each state where the store has residents.",
  },
  {
    q: "Does GDPR's 72-hour notice run from a DarkThreat email?",
    a: "No. Article 33 runs from when the controller becomes aware of a personal data breach. An alert can be part of becoming aware. The controller still has to judge whether a breach occurred and whether the 72-hour notice to the supervisory authority applies.",
  },
  {
    q: "What does a published plan include?",
    a: "The Standard plan is basic breach and credential monitoring for one domain and one user, with email notifications and web UI access. The Enterprise plan adds full domain and hacker chatter feeds, two domains or IPs, and two users. See the pricing page.",
  },
];

const sources = [
  {
    href: "https://www.pcisecuritystandards.org/document_library/",
    label: "PCI Security Standards Council, Document Library",
  },
  {
    href: "https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf",
    label: "PCI DSS v4.0.1",
  },
  {
    href: "https://blog.pcisecuritystandards.org/new-information-supplement-payment-page-security-and-preventing-e-skimming",
    label: "PCI SSC, payment page security guidance for Requirements 6.4.3 and 11.6.1",
  },
  {
    href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82.",
    label: "California Civil Code 1798.82, breach disclosure",
  },
  {
    href: "https://www.nysenate.gov/legislation/laws/GBS/899-AA",
    label: "New York General Business Law 899-aa",
  },
  {
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679",
    label: "Regulation (EU) 2016/679, the GDPR",
  },
];

const reading = [
  {
    href: "/blog/retail-credential-theft-how-e-commerce-businesses-get-compromised",
    title: "Retail Credential Theft: How E-Commerce Businesses Get Compromised",
  },
  {
    href: "/blog/retail-data-leaks-credit-card-data-detection-on-dark-web-markets",
    title: "Retail Data Leaks: Credit Card Data Detection on Dark Web Markets",
  },
  {
    href: "/blog/pci-dss-40-and-dark-web-monitoring-new-requirements-explained",
    title: "PCI-DSS 4.0 and Dark Web Monitoring: New Requirements Explained",
  },
  {
    href: "/blog/data-leak-detection-for-retail-loyalty-program-databases",
    title: "Data Leak Detection for Retail Loyalty Program Databases",
  },
  {
    href: "/blog/gdpr-breach-notification-and-dark-web-monitoring-a-compliance-guide",
    title: "GDPR Breach Notification and Dark Web Monitoring — A Compliance Guide",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'E-Commerce & Retail Dark Web Monitoring — Protecting Shoppers & Sales | DarkThreat',
  url: 'https://darkthreat.ai/industries/ecommerce',
  description: 'DarkThreat provides e-commerce platforms and online retailers with continuous dark web monitoring, preventing credential stuffing, carding fraud, and Magecart injection.',
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "E-Commerce" },
]);

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, faqPageSchema(faqs)]} />

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
                { label: "E-Commerce" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <ShoppingCart className="w-4 h-4 mr-2" /> Retail Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">E-Commerce & Retail</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Online retail transactions and customer accounts are prime targets for automated credentials stuffing and transaction fraud. DarkThreat monitors darknet card shops, Telegram leak channels, and malware logs to safeguard consumer trust and protect your checkout experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link href="#retail-inquiry-form" className="hero-button inline-flex items-center">
              Request Retail Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
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
              E-Commerce Dark Web Threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Active attack campaigns targeting online shopping sites, checkout pipelines, and brand assets.
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
              Why online stores are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A store concentrates cards, passwords, and addresses in one checkout. Four
              patterns follow from that concentration.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Admin and support credentials
              </h3>
              <p className="mb-6">
                The store admin, the helpdesk mailbox, and the app that prints shipping labels
                are enough to change an order or to export a customer list. Those logins often
                live in a browser on a laptop that also opens personal email. Infostealer
                malware copies the browser. The password can then be tried against the admin
                URL.
              </p>
              <p className="mb-6">
                Shopper passwords are a second pile. People reuse them. A password stolen from
                another site is tried against the store. A password stolen from the store is
                tried elsewhere. Either way the merchant sees failed logins, locked accounts, or
                orders it did not expect.
              </p>
              <p>
                DarkThreat helps by watching store domains the merchant registers. The admin
                console, the customer identity provider, and the fraud filters stay on systems
                the merchant already runs. See{" "}
                <Link
                  href="/blog/retail-credential-theft-how-e-commerce-businesses-get-compromised"
                  className="text-primary hover:underline"
                >
                  how ecommerce businesses lose credentials
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Payment pages and card data
              </h3>
              <p className="mb-6">
                Card data leaves through the checkout, not only through a database dump. An
                unapproved script on the payment page can copy the number in the shopper&apos;s
                browser while the order still succeeds. A stolen staff login can be what places
                that script.
              </p>
              <p className="mb-6">
                PCI DSS v4.0.1 Requirement 6.4.3 says payment-page scripts that load and execute
                in the consumer&apos;s browser must be managed, including authorization,
                integrity, and an inventory with a justification. Requirement 11.6.1 requires a
                change- and tamper-detection mechanism for security-impacting HTTP headers and
                the script contents of payment pages as received by the consumer browser. The
                PCI SSC describes both in its{" "}
                <a
                  href="https://blog.pcisecuritystandards.org/new-information-supplement-payment-page-security-and-preventing-e-skimming"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  payment page security guidance
                </a>
                . The standard itself is{" "}
                <a
                  href="https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  PCI DSS v4.0.1
                </a>
                .
              </p>
              <p>
                DarkThreat does not inspect the payment page and it does not satisfy 6.4.3 or
                11.6.1. It helps when a staff credential for a registered domain, or a file that
                names that domain, shows up outside the store. Card-issuing firms are covered
                on the{" "}
                <Link href="/industries/financial-services" className="text-primary hover:underline">
                  financial services page
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Loyalty, orders, and vendors
              </h3>
              <p className="mb-6">
                A loyalty balance and an order history are enough for fraud that does not need
                a new card. Gift-card values, stored addresses, and support notes sit in the
                same customer record. Marketing tools, review apps, and warehouses often hold a
                copy.
              </p>
              <p className="mb-6">
                A password stolen from an agency or an app vendor can open a portal the
                merchant issued. DarkThreat can watch a domain the merchant is able to
                register. It cannot see a vendor network the merchant does not control. That
                gap belongs in the contract.
              </p>
              <p>
                Hotels and other guest-commerce brands see a similar mix of loyalty accounts
                and stolen staff logins. That pattern is on the{" "}
                <Link href="/industries/hospitality" className="text-primary hover:underline">
                  hospitality page
                </Link>
                . Loyalty-file exposure is also discussed in{" "}
                <Link
                  href="/blog/data-leak-detection-for-retail-loyalty-program-databases"
                  className="text-primary hover:underline"
                >
                  loyalty program data leaks
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Notice after residents are affected
              </h3>
              <p className="mb-6">
                Once unencrypted personal information is acquired without authorization, state
                breach statutes can require notice. They do not all use the same clock.
                California Civil Code{" "}
                <a
                  href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82."
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  1798.82
                </a>{" "}
                requires disclosure to a California resident within 30 calendar days of
                discovery or notification of the breach, with delay allowed for law enforcement
                or to determine scope and restore the data system.
              </p>
              <p className="mb-6">
                New York General Business Law{" "}
                <a
                  href="https://www.nysenate.gov/legislation/laws/GBS/899-AA"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  899-aa
                </a>{" "}
                requires disclosure in the most expedient time possible and without unreasonable
                delay, and within 30 days after the breach is discovered, except for law
                enforcement needs. If any New York residents are notified, the statute also
                requires notice to the attorney general, the department of state, and the
                division of state police.
              </p>
              <p>
                Stores with EU or UK shoppers also look at the GDPR. Article 33 requires notice
                to the supervisory authority without undue delay and, where feasible, not later
                than 72 hours after the controller becomes aware, unless the breach is unlikely
                to result in a risk to rights and freedoms. Article 34 covers communication to
                the data subject when the risk is high. The text is{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Regulation (EU) 2016/679
                </a>
                . DarkThreat does not decide that a breach occurred and it does not send the
                notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="retail-inquiry-form" className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Risk Assessment
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Request a Retail Exposure Scan
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Identify if credentials of your customers, company domains, or transactional portals have been shared in fraud communities, Telegram log drops, or card shops.
            </p>
            <ul className="space-y-3 mb-8">
              {['Digital brand & store domain scan', 'Card BIN number exposure lookup', 'Customer account credential watch', 'Typosquatted domain alert preview', 'PCI-DSS v4.0 security alignment'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">
              E-Commerce Brand Inquiry
            </h3>
            <LeadForm
              variant="industry"
              interest="E-commerce Brand Scan"
              submitLabel="Request Free Brand Scan"
              fields={[
                { type: "text", name: "name", id: "retail-name", label: "Full Name *", placeholder: "John Doe", required: true, width: "half", bind: "name" },
                { type: "email", name: "email", id: "retail-email", label: "Business Email *", placeholder: "john@store.com", required: true, width: "half", bind: "email" },
                { type: "text", name: "company", id: "retail-company", label: "Company Name", placeholder: "Retail Brand Inc.", width: "half", bind: "company" },
                { type: "text", name: "platform", id: "retail-platform", label: "E-Commerce Platform", placeholder: "E.g., Shopify, Magento, WooCommerce", width: "half", bind: "detail" },
                { type: "textarea", name: "message", id: "retail-message", label: "Primary Cybersecurity Concern", rows: 4, placeholder: "E.g., credential stuffing attacks, gift card fraud, look-alike domain protection...", bind: "message" },
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
              Designed for Secure Commerce
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automated threat watch parameters configured for fast-growing transactional applications.
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
              E-Commerce Cyber Risk Management
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
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Transactional Compliance</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Payment Security & Privacy Frameworks</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat aligns with transactional audit standards to defend digital storefronts.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'PCI-DSS v4.0', req: 'Continuous external threat intelligence requirements' },
              { framework: 'GDPR Regulation', req: 'Protection of European consumer account databases' },
              { framework: 'CCPA / CPRA Act', req: 'Ensure credit and access records remain uncompromised' },
              { framework: 'FTC Guidelines', req: 'Protects customer privacy and guards against commercial fraud' },
              { framework: 'ISO 27001 (A.14)', req: 'Protection of web transaction services' },
              { framework: 'NIST CSF (DE.CM)', req: 'Detect and trace external brand compromises' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
          <ComplianceGuideLinks slugs={["pci-dss", "gdpr"]} />
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Requirements that apply
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              PCI DSS and state breach-notice laws
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              PCI DSS applies through card-brand and acquirer programs to entities that store,
              process, or transmit account data. State breach laws apply when their definitions
              are met. DarkThreat supports external exposure awareness. It does not make a
              merchant compliant with either.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                PCI DSS v4.0.1 on the payment page
              </h3>
              <p className="mb-6">
                The current standard in the PCI SSC document library is v4.0.1. Requirements
                6.4.3 and 11.6.1 are aimed at e-commerce skimming. The Council&apos;s information
                supplement says they do not replace the standard, and that v4.0.1 was current
                when that supplement was published.
              </p>
              <p>
                A merchant still needs its own script inventory, its own tamper checks, and its
                own incident plan. A stolen admin password found outside the company can explain
                how an unapproved script arrived. That finding supports the investigation. It is
                not the header and script check in Requirement 11.6.1, and it is not a completed
                PCI DSS assessment.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                California and New York notice
              </h3>
              <p className="mb-6">
                Both statutes above use a 30-day outer bound, with different delay rules.
                California measures 30 calendar days from discovery or notification of the
                breach. New York measures 30 days from discovery of the breach, and it adds
                notice to named state agencies when residents are notified.
              </p>
              <p>
                Other states are not copied here. A store that sells nationwide has to read
                each applicable statute. DarkThreat does not determine whether personal
                information was acquired, and it does not send consumer or attorney general
                notices.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                GDPR, where shoppers are in scope
              </h3>
              <p>
                Articles 32, 33, and 34 of the GDPR cover security of processing and breach
                notification. They apply to a controller or processor in the situations the
                regulation describes, including certain stores outside the EU that offer goods
                to people in the Union. Article 33&apos;s 72 hours run from awareness, not from
                a vendor email. The{" "}
                <Link href="/compliance/gdpr" className="text-primary hover:underline">
                  GDPR guide
                </Link>{" "}
                on this site summarizes the regulation. It is not a statement that DarkThreat
                meets Article 32.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related frameworks
              </h3>
              <p>
                Software companies that run the storefront platform have a separate exposure
                around their own admin credentials. That is covered on the{" "}
                <Link href="/industries/saas-technology" className="text-primary hover:underline">
                  SaaS and technology page
                </Link>
                . The guides below describe PCI DSS and the GDPR. They do not certify a
                merchant.
              </p>
              <ComplianceGuideLinks slugs={["pci-dss", "gdpr"]} />
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
            <Link href="/industries/financial-services" className="text-primary hover:underline">
              financial services
            </Link>
            ,{" "}
            <Link href="/industries/hospitality" className="text-primary hover:underline">
              hospitality
            </Link>
            ,{" "}
            <Link href="/industries/saas-technology" className="text-primary hover:underline">
              SaaS and technology
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
                <a href={item.href} className="text-primary hover:underline" rel="noopener noreferrer">
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
