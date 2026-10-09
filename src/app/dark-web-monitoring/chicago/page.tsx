import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, FileWarning, MapPin, Fingerprint, Shield, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Dark web monitoring for Chicago organizations, with a plain-English guide to the Illinois Personal Information Protection Act and BIPA.";

export const metadata: Metadata = {
  title: "Dark Web Monitoring in Chicago",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/dark-web-monitoring/chicago"),
};

const findings = [
  { icon: Key, title: 'Stealer Logs', desc: 'Browser-saved logins, cookies and session tokens taken from infected staff or contractor devices and sold in bulk.' },
  { icon: Database, title: 'Combo Lists & Breach Dumps', desc: 'Email and password pairs from third-party breaches that may match logins your staff reuse at work.' },
  { icon: Eye, title: 'Customer Portal Logins', desc: 'Credentials for your customer-facing portals, which attackers test against your login pages.' },
  { icon: Lock, title: 'Access Listings', desc: 'Posts from initial access brokers advertising entry into corporate networks, VPNs or remote desktops.' },
  { icon: FileWarning, title: 'Leaked Documents', desc: 'Internal files, spreadsheets or database extracts posted to forums or leak sites.' },
  { icon: AlertTriangle, title: 'Impersonation', desc: 'Look-alike domains and fake profiles using your company name to target customers or staff.' },
];

const steps = [
  {
    num: '01',
    title: 'Is it "personal information" under PIPA?',
    body: 'Illinois PIPA covers a user name or email address combined with a password or security question and answer that would permit access to an online account. It also covers a name combined with data such as a Social Security number, driver\u2019s licence number, financial account or card number, medical information, health insurance information or unique biometric data, when that data is not encrypted or redacted.',
  },
  {
    num: '02',
    title: 'Do you own the data, or hold it for someone else?',
    body: 'A data collector that owns or licenses the information notifies affected Illinois residents. A business that maintains or stores data it does not own must notify the owner or licensee immediately following discovery.',
  },
  {
    num: '03',
    title: 'Notify residents without unreasonable delay',
    body: 'PIPA requires notice in the most expedient time possible and without unreasonable delay. It does not set a fixed number of days. If only online credentials are involved, the notice can direct residents to change their user name, password or security question.',
  },
  {
    num: '04',
    title: 'More than 500 Illinois residents? Tell the Attorney General',
    body: 'A data collector that must notify more than 500 Illinois residents about a single breach must also notify the Illinois Attorney General, no later than it notifies consumers. The Attorney General may publish the name of the data collector, the types of information involved and the date range of the breach.',
  },
  {
    num: '05',
    title: 'HIPAA entities have their own route',
    body: 'HIPAA covered entities and business associates that comply with HIPAA and HITECH are deemed to comply with PIPA. If they report a breach to the HHS Secretary, they must also notify the Illinois Attorney General within 5 business days.',
  },
];

const sources = [
  { label: 'Illinois Personal Information Protection Act, 815 ILCS 530 (full Act)', href: 'https://ilga.gov/legislation/ilcs/ilcs3.asp?ActID=2702&ChapterID=67' },
  { label: '815 ILCS 530/10: Notice of breach; notice to Attorney General', href: 'https://www.ilga.gov/Documents/legislation/ilcs/documents/081505300K10.htm' },
  { label: 'Illinois Biometric Information Privacy Act, 740 ILCS 14/15', href: 'https://ilga.gov/legislation/ilcs/fulltext.asp?DocName=074000140K15' },
  { label: 'Illinois Biometric Information Privacy Act, 740 ILCS 14/20', href: 'https://ilga.gov/legislation/ilcs/fulltext.asp?DocName=074000140K20' },
  { label: 'Illinois Public Act 103-0769 (BIPA amendment, effective August 2, 2024)', href: 'https://www.ilga.gov/documents/legislation/publicacts/103/103-0769.htm' },
  { label: 'Illinois Attorney General: Data Breach', href: 'https://www.illinoisattorneygeneral.gov/Consumer-Protection/For-Businesses/Data-Breach/index' },
  { label: 'Illinois Attorney General: Data Breach Notice System', href: 'https://databreachnoticetoattorneygeneral.illinoisattorneygeneral.gov/' },
];

const faqs = [
  {
    q: 'Do leaked passwords count as personal information in Illinois?',
    a: 'They can. PIPA covers a user name or email address combined with a password or security question and answer that would permit access to an online account. Whether a specific exposure requires notice depends on the facts, so involve your legal counsel early.',
  },
  {
    q: 'How quickly must an Illinois breach be reported?',
    a: 'PIPA requires notice to affected residents in the most expedient time possible and without unreasonable delay. If more than 500 Illinois residents must be notified about a single breach, the Attorney General must be told no later than consumers are.',
  },
  {
    q: 'Does BIPA apply to breaches?',
    a: 'BIPA is mainly about how private entities collect, keep, disclose and destroy biometric identifiers. It also requires them to store, transmit and protect biometric data using the reasonable standard of care in their industry. Separately, PIPA lists unique biometric data as personal information for breach notice.',
  },
  {
    q: 'Will DarkThreat make us compliant with PIPA or BIPA?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find exposed credentials and leaked data. Notification decisions and legal compliance stay with your leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Dark Web Monitoring in Chicago', PAGE_DESCRIPTION, 'https://darkthreat.ai/dark-web-monitoring/chicago'),
  areaServed: {
    '@type': 'Place',
    name: 'Chicago'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Chicago Dark Web Monitoring', url: 'https://darkthreat.ai/dark-web-monitoring/chicago' }
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
          <div className="mb-4 flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Chicago' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For Chicago Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Dark Web Monitoring for <span className="glow-text">Chicago</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Two Illinois laws shape what happens after data leaks: the Personal Information Protection Act and the Biometric Information Privacy Act. DarkThreat helps Chicago security teams watch the dark web for exposed staff and customer credentials, so they can start their assessment sooner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* What turns up */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Dark Web Findings</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">What Chicago Teams Find on the Dark Web</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The most common kinds of exposure tied to a company domain, and the ones most likely to raise questions under Illinois law.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {findings.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Learn more about <Link href="/blog/infostealer-logs-what-they-contain-and-why-you-need-to-monitor-them" className={linkClass}>what infostealer logs contain</Link> and <Link href="/blog/monitoring-customer-portal-credentials-for-breach-indicators" className={linkClass}>monitoring customer portal credentials</Link>.
          </p>
        </div>
      </section>

      {/* Alert to notice walkthrough */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Illinois PIPA</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">From Dark Web Alert to Illinois Breach Notice</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              Illinois&apos; breach notification law is the Personal Information Protection Act (PIPA), 815 ILCS 530. The Illinois Attorney General says it applies to any entity that conducts business in Illinois and handles nonpublic personal information.
            </p>
            <p>
              A dark web alert is not automatically a breach. It is a signal that your legal and incident response teams will want to assess. These are the questions PIPA asks.
            </p>
          </div>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.num} className="rounded-2xl border border-border bg-card/50 p-6 flex gap-5">
                <span className="font-montserrat font-bold text-2xl text-primary shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-montserrat font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A violation of PIPA is an unlawful practice under the Illinois Consumer Fraud and Deceptive Business Practices Act. Whether a specific exposure triggers notice is a question for your counsel.
            </p>
            <p>
              If you find your own staff credentials in a leak, our guide to <Link href="/blog/what-to-do-if-your-credentials-are-leaked-on-the-dark-web" className={linkClass}>what to do if credentials are leaked on the dark web</Link> covers the first practical steps.
            </p>
          </div>
        </div>
      </section>

      {/* Reasonable security */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Data Security</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Reasonable Security Under PIPA Section 45</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Section 45 requires a data collector that owns, licenses, maintains or stores records with Illinois residents&apos; personal information to implement and maintain reasonable security measures.
            </p>
            <p>
              It also reaches your contracts. When you disclose Illinois residents&apos; personal information to another party, the contract must require that party to maintain reasonable security measures too.
            </p>
            <p>
              The Act does not list specific controls or name dark web monitoring. Credential exposure alerts can help with the detection part of a reasonable program, and with checking whether vendors that hold your data have been exposed.
            </p>
            <p>
              Many teams organize these controls with the <Link href="/compliance/nist-csf" className={linkClass}>NIST Cybersecurity Framework</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* BIPA */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Biometric Data</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Biometric Data and BIPA</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Employers that use fingerprint or face scans for timekeeping, building access or device login need to account for the Biometric Information Privacy Act (BIPA), 740 ILCS 14.
            </p>
            <p>
              Unlike a password, a fingerprint cannot be reset after a leak. That is why the systems holding biometric data, and the staff accounts that can reach them, deserve close attention.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Fingerprint className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">What BIPA Section 15 requires of private entities</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Keep a public written policy with a retention schedule, and destroy biometric data when its purpose is met or within 3 years of the person\u2019s last interaction, whichever comes first.',
                'Before collecting biometric data, inform the person in writing, explain the purpose and length of term, and receive a written release.',
                'Do not sell, lease, trade or otherwise profit from biometric data.',
                'Store, transmit and protect biometric data using the reasonable standard of care in your industry, and at least as well as other confidential information.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              BIPA gives aggrieved people a private right of action. Liquidated damages are $1,000 per negligent violation or $5,000 per intentional or reckless violation, or actual damages if greater.
            </p>
            <p>
              A 2024 amendment, Public Act 103-0769, provides that repeated collection or disclosure of the same person&apos;s biometric data by the same method counts as a single violation. See <Link href="/blog/detecting-biometric-data-leaks-fingerprint-and-face-recognition-data" className={linkClass}>detecting biometric data leaks</Link> for more.
            </p>
          </div>
        </div>
      </section>

      {/* Chicago sectors */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Chicago Sectors</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Where Dark Web Exposure Hits Chicago Organizations</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Finance, trading and insurance</h3>
              <p>Brokers, insurers and advisory firms hold account numbers and policy data that PIPA covers. Leaked advisor or agent logins can open the door to client records. See <Link href="/industries/financial-services" className={linkClass}>financial services</Link>, <Link href="/industries/insurance" className={linkClass}>insurance</Link> and <Link href="/blog/credential-leak-detection-for-insurance-and-financial-advisors" className={linkClass}>credential leak detection for insurance and financial advisors</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Manufacturing and logistics</h3>
              <p>Plants and distribution operations can rely on shared accounts, remote access and biometric time clocks. Exposed remote access credentials give attackers a way in without any malware. See <Link href="/industries/manufacturing" className={linkClass}>manufacturing</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Healthcare</h3>
              <p>Hospitals and clinics follow HIPAA and also owe the Illinois Attorney General notice within 5 business days of reporting a breach to HHS. See <Link href="/industries/healthcare" className={linkClass}>healthcare</Link> and <Link href="/compliance/hipaa" className={linkClass}>HIPAA</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Retail and payments</h3>
              <p>Card and account numbers are PIPA personal information when combined with a name. Card-handling teams also work to <Link href="/compliance/pci-dss" className={linkClass}>PCI DSS</Link>. See <Link href="/industries/ecommerce" className={linkClass}>ecommerce</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports Chicago Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              Those alerts support your incident response plan and your legal review under PIPA. They do not replace either, and no tool makes an organization compliant with Illinois law.
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

      <OtherLocations currentHref="/dark-web-monitoring/chicago" />

      <FinalCTA />

    </div>
  
  );
}
