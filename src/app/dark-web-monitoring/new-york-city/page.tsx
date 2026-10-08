import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, FileWarning, MapPin, Scale, Banknote, Newspaper, HeartPulse, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Dark web monitoring for New York City organizations, plus a plain-English guide to NY breach notification law, the SHIELD Act and NYDFS Part 500.";

export const metadata: Metadata = {
  title: "Dark Web Monitoring in New York City",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/dark-web-monitoring/new-york-city"),
};

const threats = [
  { icon: AlertTriangle, title: 'Brand & Company Mentions', desc: 'Watch for your company name, domains and key brands appearing in dark web forums and underground channels.' },
  { icon: Key, title: 'Compromised Credentials', desc: 'Alerts when employee or customer logins tied to your domains surface in breach dumps and stealer logs.' },
  { icon: Database, title: 'Data Exfiltration', desc: 'Detection of sensitive corporate documents, intellectual property, or customer data leaked to underground forums.' },
  { icon: Lock, title: 'Ransomware Pre-cursors', desc: 'Early warning signals of initial access brokers advertising access to corporate networks.' },
  { icon: Eye, title: 'Brand Impersonation', desc: 'Identification of typosquatted domains and fake social media profiles impersonating your brand.' },
  { icon: FileWarning, title: 'Supply Chain Risk', desc: 'Monitoring of third-party vendors and partners for security breaches that could impact your operations.' },
];

const sources = [
  { label: 'New York General Business Law § 899-aa (breach notification)', href: 'https://www.nysenate.gov/legislation/laws/GBS/899-AA' },
  { label: 'New York General Business Law § 899-bb (data security protections)', href: 'https://www.nysenate.gov/legislation/laws/GBS/899-BB' },
  { label: 'New York Attorney General: SHIELD Act', href: 'https://ag.ny.gov/resources/organizations/data-breach-reporting/shield-act' },
  { label: 'New York Attorney General: Report a Data Breach', href: 'https://ag.ny.gov/resources/organizations/data-breach-reporting' },
  { label: 'NYDFS: Cybersecurity Regulation 23 NYCRR Part 500', href: 'https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500' },
  { label: 'NYDFS: Cybersecurity Resource Center', href: 'https://www.dfs.ny.gov/industry_guidance/cybersecurity' },
];

const faqs = [
  {
    q: 'Does New York law treat leaked passwords as a data breach?',
    a: 'It can. General Business Law § 899-aa defines "private information" to include a user name or email address combined with a password or security question and answer that would permit access to an online account. Whether a specific exposure requires notice depends on the facts, so involve your legal counsel early.',
  },
  {
    q: 'How long does a business have to notify affected New York residents?',
    a: 'Under § 899-aa, notice must be made in the most expedient time possible and without unreasonable delay, and within 30 days after the breach has been discovered. The only exception in the statute is for the legitimate needs of law enforcement.',
  },
  {
    q: 'We are regulated by NYDFS. What is different for us?',
    a: 'Covered entities under 23 NYCRR Part 500 must notify DFS no later than 72 hours after determining that a cybersecurity incident has occurred, including incidents at a third-party service provider. Section 899-aa also requires covered entities to send their breach notice to DFS.',
  },
  {
    q: 'Will DarkThreat make us compliant with the SHIELD Act or Part 500?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find exposed credentials and leaked data. Compliance decisions, regulator notices and annual certifications stay with your CISO, leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Dark Web Monitoring in New York City', PAGE_DESCRIPTION, 'https://darkthreat.ai/dark-web-monitoring/new-york-city'),
  areaServed: {
    '@type': 'Place',
    name: 'New York City'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/dark-web-monitoring' },
  { name: 'New York City Dark Web Monitoring', url: 'https://darkthreat.ai/dark-web-monitoring/new-york-city' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const linkClass = "text-primary underline-offset-4 hover:underline";

export default function Page() {
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, organizationSchema, faqSchema]} />

      {/* Hero Section */}
      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/dark-web-monitoring' }, { label: 'New York City' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For New York City Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Dark Web Monitoring for <span className="glow-text">New York City</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            New York law treats a leaked email address and password that unlock an online account as &ldquo;private information&rdquo;. DarkThreat helps New York City organizations watch the dark web for exposed employee credentials and leaked data, so security teams can investigate sooner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="border-primary/30 hover:border-primary">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regional Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Protecting New York City from Cyber Risk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six kinds of dark web exposure that New York City security teams should be watching for.</p>
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

      {/* NY Breach Notification Law */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">New York Law</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">What New York Breach Notification Law Means for Leaked Credentials</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New York&apos;s breach notification law is General Business Law § 899-aa. It covers any person or business that owns or licenses computerized private information of New York residents.
            </p>
            <p>
              The definition of private information matters for dark web monitoring. It includes a user name or email address combined with a password, or a security question and answer, that would permit access to an online account.
            </p>
            <p>
              It also covers unencrypted Social Security numbers, driver&apos;s licence numbers, certain account and card numbers, biometric data, and medical and health insurance information when combined with personal information.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <h3 className="font-montserrat font-bold text-foreground mb-4">Key duties under § 899-aa</h3>
            <ul className="space-y-3">
              {[
                'Notify affected residents in the most expedient time possible and without unreasonable delay, and within 30 days after the breach is discovered, unless law enforcement needs a delay.',
                'If any New York residents are notified, also notify the Attorney General, the Department of State and the Division of State Police. DFS-covered entities also notify DFS.',
                'If more than 5,000 New York residents are notified at one time, also notify the consumer reporting agencies.',
                'HIPAA covered entities that report a breach to HHS must also notify the Attorney General within five business days.',
                'Vendors that hold data they do not own must tell the owner immediately, and within 30 days of discovery.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The statute lets a business consider indications that information has been downloaded, copied or used without authorization. A credential dump or stealer log containing your staff logins is the kind of signal your incident response and legal teams will want to assess quickly.
            </p>
            <p>
              Whether a specific exposure triggers notice is a legal question. Our guide to <Link href="/blog/what-to-do-in-the-first-48-hours-of-a-data-breach" className={linkClass}>the first 48 hours of a data breach</Link> covers the practical steps.
            </p>
          </div>
        </div>
      </section>

      {/* SHIELD Act */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">SHIELD Act</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Reasonable Safeguards Under the SHIELD Act (§ 899-bb)</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The SHIELD Act added General Business Law § 899-bb. It requires any person or business that owns or licenses computerized private information of a New York resident to develop, implement and maintain reasonable safeguards.
            </p>
            <p>
              The Attorney General&apos;s guidance groups example safeguards into administrative, technical and physical controls. It notes that the list is not meant to be exhaustive.
            </p>
            <p>
              Technical examples include detecting, preventing and responding to attacks or system failures, and regularly testing and monitoring the effectiveness of key controls. Administrative examples include identifying reasonably foreseeable internal and external risks, and selecting service providers that can maintain appropriate safeguards.
            </p>
            <p>
              A business that is subject to, and in compliance with, the GLBA, HIPAA or 23 NYCRR Part 500 data security rules is a &ldquo;compliant regulated entity&rdquo; and is deemed to meet this requirement.
            </p>
            <p>
              Small businesses have some flexibility. The law defines them as having fewer than 50 employees, less than $3 million in gross annual revenue in each of the last three fiscal years, or less than $5 million in year-end total assets. Their safeguards can be scaled to their size, activities and the sensitivity of the data they hold.
            </p>
            <p>
              The Act does not name dark web monitoring. It can help with the &ldquo;identify risks&rdquo; and &ldquo;detect and respond&rdquo; parts of a security program. Many teams map these controls using the <Link href="/compliance/nist-csf" className={linkClass}>NIST Cybersecurity Framework</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* NYDFS Part 500 */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Financial Services</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">NYDFS 23 NYCRR Part 500 for Financial Services Firms</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The New York State Department of Financial Services (DFS) issued its cybersecurity regulation, 23 NYCRR Part 500, on March 1, 2017. It applies to individuals and organizations operating under a license, registration, charter or similar authorization under New York&apos;s Banking Law, Insurance Law or Financial Services Law.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <h3 className="font-montserrat font-bold text-foreground mb-4">Part 500 requirements that relate to exposed credentials</h3>
            <ul className="space-y-3">
              {[
                'Notify DFS no later than 72 hours after determining that a cybersecurity incident has occurred at the covered entity, its affiliates or a third-party service provider (500.17).',
                'Submit an annual certification of material compliance, or an acknowledgment of noncompliance, by April 15, signed by the highest-ranking executive and the CISO (500.17).',
                'Use multi-factor authentication for any individual accessing the covered entity\u2019s information systems, subject to limited exemptions (500.12).',
                'Limit the number of privileged accounts and their access functions (500.7).',
                'Keep written policies for third-party service providers, including due diligence and periodic assessment (500.11).',
                'Report any extortion payment within 24 hours, with a written explanation within 30 days (500.17).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Alerts about exposed employee, privileged or vendor credentials can feed your risk assessment, access reviews and third-party assessments. DarkThreat does not file DFS notices or certify compliance; those decisions stay with your CISO and counsel.
            </p>
            <p>
              Read more in <Link href="/blog/dark-web-monitoring-for-financial-services-in-new-york" className={linkClass}>dark web monitoring for financial services in New York</Link>, or see our <Link href="/industries/financial-services" className={linkClass}>financial services</Link> and <Link href="/industries/crypto-fintech" className={linkClass}>crypto and fintech</Link> pages.
            </p>
          </div>
        </div>
      </section>

      {/* Vendor risk */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Vendor Risk</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Why Vendor-Related Exposure Matters in New York</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New York healthcare providers and other organizations have reported breaches that started at a vendor rather than on their own network. A compromised supplier can expose your data or your staff credentials without raising any alert inside your environment.
            </p>
            <p>
              New York law already expects this risk to be managed. Under § 899-aa, a business that holds data it does not own must notify the owner immediately, and within 30 days of discovery.
            </p>
            <p>
              The SHIELD Act&apos;s example safeguards include selecting service providers that can maintain appropriate safeguards, and requiring those safeguards by contract.
            </p>
            <p>
              For DFS-regulated firms, Part 500 requires written third-party service provider policies. The 72-hour notice to DFS also applies to incidents at a third-party service provider.
            </p>
            <p>
              Watching for your domains, staff emails and supplier names in leaked data can help you learn about a vendor-related exposure sooner. See <Link href="/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk" className={linkClass}>third-party vendor credential monitoring</Link> for a practical approach.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">NYC Sectors</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Dark Web Risk Across Common New York City Sectors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">New York City is home to many finance, legal, media and healthcare organizations. Each faces a different mix of exposure and regulation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5"><Banknote className="w-5 h-5" /></div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Financial Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Banks, insurers, asset managers and fintechs often hold DFS licenses and fall under Part 500. Exposed staff logins and customer portal credentials are common starting points for account takeover and wire fraud.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">See <Link href="/industries/financial-services" className={linkClass}>financial services</Link> and <Link href="/compliance/pci-dss" className={linkClass}>PCI DSS</Link>.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5"><Scale className="w-5 h-5" /></div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Legal & Professional Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Law firms, accountants and consultancies hold privileged client data. Many also serve regulated clients, who may ask about their security practices as part of vendor due diligence.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">See <Link href="/industries/legal" className={linkClass}>legal</Link>, <Link href="/industries/professional-services" className={linkClass}>professional services</Link>, <Link href="/compliance/soc-2" className={linkClass}>SOC 2</Link> and <Link href="/blog/how-law-firms-become-dark-web-targets-and-how-to-respond" className={linkClass}>how law firms become dark web targets</Link>.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5"><Newspaper className="w-5 h-5" /></div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Media, Publishing & Advertising</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Media organizations run many SaaS, social and publishing accounts, often shared with freelancers and agencies. Leaked logins can lead to account takeover, while leaked campaign data creates brand risk.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">See <Link href="/blog/leaked-social-media-advertising-data-detection-and-brand-risk" className={linkClass}>leaked social media and advertising data</Link>.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5"><HeartPulse className="w-5 h-5" /></div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Hospitals, clinics and practices rely on many vendors and business associates. A HIPAA breach report to HHS also triggers notice to the New York Attorney General under § 899-aa.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">See <Link href="/industries/healthcare" className={linkClass}>healthcare</Link>, <Link href="/compliance/hipaa" className={linkClass}>HIPAA</Link> and <Link href="/blog/how-healthcare-credential-leaks-enable-patient-data-breaches" className={linkClass}>how healthcare credential leaks enable patient data breaches</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports New York Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              Those alerts support your incident response plan, your legal review under § 899-aa and any DFS reporting. They do not replace them, and no tool makes an organization compliant with New York law.
            </p>
            <p className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                You can start with a 7-day free trial, and no credit card is required. Paid plans start from $288 per month. See <Link href="/pricing" className={linkClass}>pricing</Link> for plan details.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="regional-inquiry" className="pt-8 pb-16 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl border border-primary/30 p-10 md:p-16 text-center relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              See what is already exposed
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Plans start at $288/mo. A 7-day free trial is available, and no credit card is required to start. Tell us which domains, brands and vendors you need watched.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="hero-button inline-flex items-center">
                Contact DarkThreat <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="font-montserrat font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-montserrat font-bold text-foreground mb-4">Sources</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            This page summarizes public law and official regulator guidance for general information. It is not legal advice.
          </p>
          <ul className="space-y-2">
            {sources.map((s) => (
              <li key={s.href} className="text-sm">
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1.5`}>
                  {s.label} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OtherLocations currentHref="/dark-web-monitoring/new-york-city" />

      <FinalCTA />

    </div>
  
  );
}
