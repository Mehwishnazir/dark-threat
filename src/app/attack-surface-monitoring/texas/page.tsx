import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { IdCard, CreditCard, HeartPulse, KeyRound, Server, Users, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Scale, Radar } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Attack surface monitoring for Texas organizations, with a plain-English guide to Business & Commerce Code 521.052, 521.053 and the Texas Data Privacy and Security Act.";

export const metadata: Metadata = {
  title: "Attack Surface Monitoring in Texas",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/attack-surface-monitoring/texas"),
};

const surface = [
  { icon: KeyRound, title: 'Leaked Staff Logins', desc: 'Work email and password pairs from third-party breaches that could open remote access, email or cloud apps.' },
  { icon: Server, title: 'Remote Access and Cloud Accounts', desc: 'VPN, remote desktop and cloud console credentials, which give an attacker a way in without malware.' },
  { icon: Users, title: 'Vendor and Contractor Access', desc: 'Accounts held by suppliers, integrators and contractors that connect to your systems or hold your data.' },
];

const spi = [
  { icon: IdCard, title: 'Name + Government ID', desc: 'A first name or initial and last name with a Social Security number, driver\u2019s license number or other government-issued ID number.' },
  { icon: CreditCard, title: 'Name + Financial Account', desc: 'A name with an account, credit or debit card number and any code or password that would permit access to the financial account.' },
  { icon: HeartPulse, title: 'Health Information', desc: 'Information that identifies a person and relates to their physical or mental health, the health care they receive, or payment for it.' },
];

const steps = [
  {
    num: '01',
    title: 'Was sensitive personal information acquired?',
    body: 'A breach of system security is unauthorized acquisition of computerized data that compromises the security, confidentiality or integrity of sensitive personal information. Encrypted data counts if the person accessing it has the decryption key.',
  },
  {
    num: '02',
    title: 'Do you own the data, or hold it for someone else?',
    body: 'A business that owns or licenses the data notifies affected individuals. A business that only maintains data for another must notify the owner or license holder immediately after discovering the breach.',
  },
  {
    num: '03',
    title: 'Notify individuals within 60 days',
    body: 'Notice is due without unreasonable delay and no later than the 60th day after you determine the breach occurred. Delay is allowed at a law enforcement request, or as needed to determine the scope and restore the system.',
  },
  {
    num: '04',
    title: '250 or more Texans? Report to the Attorney General within 30 days',
    body: 'Report as soon as practicable and no later than the 30th day after you determine the breach occurred, using the electronic form on the Attorney General\u2019s website.',
  },
  {
    num: '05',
    title: 'More than 10,000 people? Tell the credit bureaus',
    body: 'If you notify more than 10,000 people at one time, you must also tell each nationwide consumer reporting agency the timing, distribution and content of the notices, without unreasonable delay.',
  },
];

const sources = [
  { label: 'Texas Business & Commerce Code Chapter 521 (Identity Theft Enforcement and Protection Act)', href: 'https://statutes.capitol.texas.gov/Docs/BC/htm/BC.521.htm' },
  { label: 'Texas S.B. 768 (2023), enrolled: Attorney General notice within 30 days', href: 'https://capitol.texas.gov/tlodocs/88R/billtext/html/SB00768F.htm' },
  { label: 'Texas Attorney General: Data Breach Reporting', href: 'https://www.texasattorneygeneral.gov/consumer-protection/data-breach-reporting' },
  { label: 'Texas Attorney General: Texas Data Privacy and Security Act', href: 'https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act' },
  { label: 'Texas Department of Information Resources: TX-RAMP', href: 'https://dir.texas.gov/txramp' },
];

const faqs = [
  {
    q: 'How long do Texas businesses have to notify people of a breach?',
    a: 'Business & Commerce Code 521.053 requires notice without unreasonable delay and no later than the 60th day after the business determines the breach occurred, with exceptions for law enforcement requests and the time needed to determine scope and restore the system.',
  },
  {
    q: 'When must the Texas Attorney General be notified?',
    a: 'If a breach involves at least 250 Texas residents, the business must notify the Attorney General as soon as practicable and no later than the 30th day after it determines the breach occurred, using the Attorney General\u2019s electronic form.',
  },
  {
    q: 'Does the Texas Data Privacy and Security Act allow private lawsuits?',
    a: 'No. According to the Texas Attorney General, the Act does not provide a private right of action. The Attorney General has exclusive authority to enforce it, after giving a written notice and a 30-day period to cure.',
  },
  {
    q: 'Will DarkThreat make us compliant with Texas law?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find breached and leaked credentials tied to your domain. Notification decisions and legal compliance stay with your leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Attack Surface Monitoring in Texas', PAGE_DESCRIPTION, 'https://darkthreat.ai/attack-surface-monitoring/texas'),
  areaServed: {
    '@type': 'Place',
    name: 'Texas'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Texas Attack Surface Monitoring', url: 'https://darkthreat.ai/attack-surface-monitoring/texas' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Texas' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For Texas Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Attack Surface Monitoring for <span className="glow-text">Texas</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Texas law requires reasonable procedures to protect sensitive personal information, notice within 60 days of a breach, and a report to the Attorney General within 30 days when 250 or more Texans are affected. DarkThreat helps Texas teams find breached and leaked credentials tied to their domain.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Attack surface */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">External Attack Surface</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Credentials Are Part of Your Attack Surface</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your attack surface is everything an outsider can reach. Leaked logins are one of the easiest parts of it to use, because they need no exploit at all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {surface.map((t) => (
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
            Read more on <Link href="/blog/how-to-detect-leaked-admin-credentials-before-attackers-use-them" className={linkClass}>detecting leaked admin credentials</Link> and <Link href="/blog/detecting-supply-chain-attacks-early-with-dark-web-monitoring" className={linkClass}>spotting supply chain attacks early</Link>.
          </p>
        </div>
      </section>

      {/* Sensitive personal information */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Section 521.002</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">What Texas Calls Sensitive Personal Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Texas breach duties turn on this definition in the Identity Theft Enforcement and Protection Act, Business & Commerce Code Chapter 521.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spi.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            For the name-based categories, the law applies when the name and the items are not encrypted. Publicly available information lawfully made available by a government is excluded. Unlike some states, the Texas definition does not list an online username and password on their own.
          </p>
        </div>
      </section>

      {/* 521.052 */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Section 521.052</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">The Duty to Protect Sensitive Personal Information</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Section 521.052 requires a business to implement and maintain reasonable procedures, including taking any appropriate corrective action, to protect sensitive personal information it collects or maintains in the regular course of business from unlawful use or disclosure.
            </p>
            <p>
              It also requires a business to destroy customer records with sensitive personal information that it will not keep, by shredding, erasing or otherwise making the information unreadable.
            </p>
            <p>
              The section does not apply to financial institutions as defined by federal law, which follow their own rules. It does include nonprofit athletic and sports associations.
            </p>
            <p>
              The law does not list specific controls or name dark web monitoring. &ldquo;Corrective action&rdquo; is the useful phrase: when leaked credentials show a way in, resetting them is the kind of fix a reasonable program makes. Many teams organize this work with the <Link href="/compliance/nist-csf" className={linkClass}>NIST Cybersecurity Framework</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 521.053 */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Section 521.053</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">From Finding to Texas Breach Notice</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              Section 521.053 applies to a person who conducts business in Texas and owns or licenses computerized data with sensitive personal information. A dark web finding is not automatically a breach, but it is a signal your legal and incident response teams will want to assess.
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
              If an affected person lives in another state that has its own breach notice law, the notice may follow that state&apos;s law or the Texas rule. Notice can be written or electronic, and substitute notice is allowed in limited cases.
            </p>
            <p>
              For the first practical steps, see <Link href="/blog/what-to-do-in-the-first-48-hours-of-a-data-breach" className={linkClass}>what to do in the first 48 hours of a data breach</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Attorney General */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Attorney General</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Reporting to the Texas Attorney General</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The 30-day deadline took effect on September 1, 2023, under Senate Bill 768. Before that, the limit was 60 days.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">What the Attorney General report must include</h3>
            </div>
            <ul className="space-y-3">
              {[
                'A detailed description of the nature and circumstances of the breach, or the use of sensitive personal information acquired in it.',
                'The number of Texas residents affected at the time of notification.',
                'The number of affected residents sent a disclosure by mail or another direct method.',
                'The measures taken so far, and the measures you intend to take after the report.',
                'Whether law enforcement is investigating.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Attorney General posts a public listing of the reports it receives. Its website also notes that a completed report is potentially an open record.
            </p>
            <p>
              Violations of Chapter 521 carry a civil penalty of $2,000 to $50,000 per violation. Failing to take reasonable action to notify individuals adds up to $100 per individual per day, capped at $250,000 for a single breach.
            </p>
          </div>
        </div>
      </section>

      {/* TDPSA */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">TDPSA</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">The Texas Data Privacy and Security Act</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Texas Data Privacy and Security Act took effect on July 1, 2024. According to the Texas Attorney General, it applies to companies that conduct business in Texas or produce a product or service consumed by Texas residents, and that process consumers&apos; personal data.
            </p>
            <p>
              Small businesses as defined by the federal Small Business Administration are generally exempt, except that they need consent before selling sensitive data.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">TDPSA points that matter for security teams</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Controllers must establish, implement and maintain reasonable data security practices to protect the confidentiality, integrity and accessibility of personal data.',
                'Contracts with data processors must include the elements the Act requires, and processors must help controllers meet their security duties.',
                'The Attorney General has exclusive enforcement authority and must give written notice and 30 days to cure before filing an action.',
                'Violations after the cure period can bring civil penalties of up to $7,500 per violation. The Act does not provide a private right of action.',
                'State agencies, political subdivisions, GLBA financial institutions, HIPAA-covered entities, nonprofits and institutions of higher education are exempt.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Personal data under the Act is much broader than sensitive personal information under Chapter 521. It covers any information linked or reasonably linkable to an identified or identifiable individual.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Texas Sectors</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Where the Attack Surface Matters in Texas</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Energy and utilities</h3>
              <p>Operators rely on remote access for field sites and on many contractors. Leaked remote access and vendor logins are a direct path in. Customer billing records with account numbers can also be sensitive personal information. See <Link href="/industries/energy-utilities" className={linkClass}>energy and utilities</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Healthcare</h3>
              <p>Information about a person&apos;s health, care or payment for care is sensitive personal information under Chapter 521. HIPAA-covered entities are exempt from the TDPSA, but Chapter 521 contains no similar exemption for them. See <Link href="/industries/healthcare" className={linkClass}>healthcare</Link>, <Link href="/compliance/hipaa" className={linkClass}>HIPAA</Link> and <Link href="/blog/healthcare-data-leaks-phi-detection-and-breach-notification" className={linkClass}>healthcare data leaks</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Government contractors</h3>
              <p>Cloud services that process Texas state agency data go through TX-RAMP, the Department of Information Resources program for security assessment, certification and continuous monitoring. Federal contractors also face federal rules, covered on our <Link href="/threat-intelligence/washington-dc" className={linkClass}>Washington DC threat intelligence</Link> page. See <Link href="/industries/government" className={linkClass}>government</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">More for Texas</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Related Texas Page</h2>
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <h3 className="font-montserrat font-bold text-foreground mb-2">Domain monitoring in Austin</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">For tech companies and startups: lookalike domains, phishing kits and leaked credentials, plus Texas&apos; online impersonation law.</p>
            <Link href="/domain-monitoring/austin" className={`${linkClass} text-sm inline-flex items-center`}>Read the Austin page <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports Texas Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              Those alerts support your corrective action and your legal review under Texas law. They do not replace either, and no tool makes an organization compliant with Texas law.
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
            <Radar className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              See what is already exposed
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Plans start at $288/mo. A 7-day free trial is available, and no credit card is required to start. Tell us which domains you need watched.
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
            This page summarizes public law and official government guidance for general information. It is not legal advice.
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

      <OtherLocations currentHref="/attack-surface-monitoring/texas" />

      <FinalCTA />

    </div>
  
  );
}
