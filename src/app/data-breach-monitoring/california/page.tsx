import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Database, CheckCircle2, ArrowRight, Key, CreditCard, HeartPulse, Fingerprint, IdCard, Dna, MapPin, Shield, ExternalLink, Scale } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Data breach monitoring for California organizations, with a plain-English guide to Civil Code 1798.82, 1798.81.5 and the CCPA breach right of action.";

export const metadata: Metadata = {
  title: "Data Breach Monitoring in California",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/data-breach-monitoring/california"),
};

const dataTypes = [
  { icon: Key, title: 'Online Account Logins', desc: 'A username or email address with a password or security question and answer that would permit access to an online account. No name is needed for this category.' },
  { icon: IdCard, title: 'Government ID Numbers', desc: 'A name with a Social Security, driver\u2019s license, California ID, tax ID, passport or military ID number.' },
  { icon: CreditCard, title: 'Financial Accounts', desc: 'A name with an account, credit or debit card number and any code or password that would permit access to the account.' },
  { icon: HeartPulse, title: 'Medical and Insurance Data', desc: 'A name with medical information or health insurance information, such as a policy or subscriber number.' },
  { icon: Fingerprint, title: 'Biometric Data', desc: 'A name with fingerprint, retina, iris or similar data used to authenticate a person. Photos count only when used or stored for facial recognition.' },
  { icon: Dna, title: 'Genetic and Plate Data', desc: 'A name with genetic data, or with data collected by an automated license plate recognition system.' },
];

const steps = [
  {
    num: '01',
    title: 'Was personal information acquired?',
    body: 'Section 1798.82 applies when unencrypted personal information was, or is reasonably believed to have been, acquired by an unauthorized person. Encrypted data is also covered if the encryption key or security credential was likely taken too.',
  },
  {
    num: '02',
    title: 'Do you own the data, or hold it for someone else?',
    body: 'A business that owns or licenses the data notifies affected California residents. A business that only maintains data for another business must notify the owner or licensee immediately following discovery.',
  },
  {
    num: '03',
    title: 'Notify within 30 calendar days',
    body: 'Notice is due within 30 calendar days of discovery or notification of the breach. Delay is allowed for the legitimate needs of law enforcement, or as necessary to determine the scope of the breach and restore the reasonable integrity of the system.',
  },
  {
    num: '04',
    title: 'Use the required format',
    body: 'The notice must be titled \u201cNotice of Data Breach\u201d and use the headings What Happened?, What Information Was Involved?, What We Are Doing, What You Can Do, and For More Information. Text must be in plain language and no smaller than 10-point type.',
  },
  {
    num: '05',
    title: 'More than 500 residents? Send the Attorney General a sample',
    body: 'If one breach requires notice to more than 500 California residents, submit a single sample copy of the notice, without personal information, to the Attorney General electronically within 15 calendar days of notifying consumers.',
  },
];

const sources = [
  { label: 'California Civil Code 1798.82: Breach notification by persons and businesses', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82' },
  { label: 'California Civil Code 1798.81.5: Reasonable security procedures and practices', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.81.5' },
  { label: 'California Civil Code 1798.150: CCPA personal information security breaches', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.150' },
  { label: 'California Privacy Protection Agency: Updated Monetary Thresholds in CCPA', href: 'https://cppa.ca.gov/regulations/cpi_adjustment.html' },
  { label: 'California Attorney General: Data Security Breach Reporting', href: 'https://oag.ca.gov/privacy/databreach/reporting' },
];

const faqs = [
  {
    q: 'Do leaked passwords count as personal information in California?',
    a: 'They can. Section 1798.82 covers a username or email address combined with a password or security question and answer that would permit access to an online account. Whether a specific exposure requires notice depends on the facts, so involve your legal counsel early.',
  },
  {
    q: 'How long do California businesses have to send breach notices?',
    a: 'Section 1798.82 requires notice within 30 calendar days of discovery or notification of the breach. It allows delay for law enforcement needs, or as necessary to determine the scope of the breach and restore the reasonable integrity of the system.',
  },
  {
    q: 'When must the California Attorney General be told?',
    a: 'If a single breach requires notice to more than 500 California residents, the business must electronically submit one sample copy of the notice to the Attorney General within 15 calendar days of notifying consumers.',
  },
  {
    q: 'Can consumers sue over a breach under the CCPA?',
    a: 'Section 1798.150 lets a consumer bring a civil action when certain nonencrypted and nonredacted personal information is subject to unauthorized access and exfiltration, theft or disclosure because a business failed to maintain reasonable security. Your counsel can advise on how it applies to you.',
  },
  {
    q: 'Will DarkThreat make us compliant with California law?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find breached and leaked credentials tied to your domain. Notification decisions and legal compliance stay with your leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Data Breach Monitoring in California', PAGE_DESCRIPTION, 'https://darkthreat.ai/data-breach-monitoring/california'),
  areaServed: {
    '@type': 'Place',
    name: 'California'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'California Data Breach Monitoring', url: 'https://darkthreat.ai/data-breach-monitoring/california' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'California' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For California Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Data Breach Monitoring for <span className="glow-text">California</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            California law sets a 30-day clock for breach notices, requires reasonable security, and gives consumers a right to sue over some breaches. DarkThreat helps California security teams find breached and leaked credentials tied to their domain, so the assessment can start sooner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* What counts as personal information */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Civil Code 1798.82(h)</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">What Counts as Personal Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These are the data types in California&apos;s breach law. Most of them show up in dark web leaks, so it helps to know which ones a finding touches.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTypes.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            For the categories that need a name, the law applies when either the name or the data element is not encrypted. Publicly available information lawfully made available from government records is excluded.
          </p>
        </div>
      </section>

      {/* Notice walkthrough */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Breach Notification</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">From Dark Web Finding to California Breach Notice</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              California Civil Code 1798.82 applies to any person or business that conducts business in California and owns or licenses computerized personal information. It defines a breach as unauthorized acquisition of computerized data that compromises the security, confidentiality or integrity of personal information.
            </p>
            <p>
              A dark web finding is not automatically a breach. It is a signal that your legal and incident response teams will want to assess. These are the questions the law asks.
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
              If a breach involves only online account credentials, the notice can be electronic and direct people to change their password and security question, or take other steps to protect the account. If the leaked login is for an email account you provide, you cannot send the notice to that same email address.
            </p>
            <p>
              If your business was the source of a breach that exposed Social Security, driver&apos;s license, California ID or similar ID numbers, the notice must offer identity theft prevention and mitigation services at no cost for at least 12 months.
            </p>
            <p>
              HIPAA covered entities that fully comply with the HITECH Act notice rules are treated as meeting the California notice format requirements. They are not exempt from the rest of the section.
            </p>
            <p>
              For the first practical steps, see <Link href="/blog/what-to-do-in-the-first-48-hours-of-a-data-breach" className={linkClass}>what to do in the first 48 hours of a data breach</Link> and <Link href="/blog/how-to-build-an-incident-response-plan-around-dark-web-alerts" className={linkClass}>how to build an incident response plan around dark web alerts</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Reasonable security */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Civil Code 1798.81.5</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">The Duty to Maintain Reasonable Security</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Section 1798.81.5 requires a business that owns, licenses or maintains personal information about a California resident to implement and maintain reasonable security procedures and practices. Those practices must be appropriate to the nature of the information.
            </p>
            <p>
              The duty also reaches your vendors. When you disclose California residents&apos; personal information to a nonaffiliated third party under a contract, the contract must require that party to maintain reasonable security too.
            </p>
            <p>
              The section does not list specific controls or name dark web monitoring. Alerts about leaked credentials can help with the detection part of a reasonable program, and with checking whether vendors that hold your data have been exposed. See <Link href="/blog/data-leak-detection-after-a-third-party-vendor-breach" className={linkClass}>data leak detection after a third-party vendor breach</Link>.
            </p>
            <p>
              Some organizations fall outside this section, including health care providers regulated by California&apos;s Confidentiality of Medical Information Act, HIPAA covered entities and certain financial institutions. Those groups follow their own rules. Many teams organize their controls with the <Link href="/compliance/nist-csf" className={linkClass}>NIST Cybersecurity Framework</Link> or <Link href="/compliance/iso-27001" className={linkClass}>ISO 27001</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CCPA 1798.150 */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">CCPA Section 1798.150</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">The CCPA Right to Sue Over Breaches</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The California Consumer Privacy Act, as amended by the CPRA, gives consumers one private right of action. It applies only to security breaches, under Section 1798.150.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">What Section 1798.150 provides</h3>
            </div>
            <ul className="space-y-3">
              {[
                'It covers nonencrypted and nonredacted personal information as defined in Section 1798.81.5, and an email address with a password or security question and answer that would permit access to the account.',
                'The data must be subject to unauthorized access and exfiltration, theft or disclosure as a result of the business\u2019s failure to maintain reasonable security.',
                'The statute sets damages of $100 to $750 per consumer per incident, or actual damages if greater, adjusted periodically for inflation by the California Privacy Protection Agency (currently $107 to $799, effective January 1, 2025). A consumer can also seek injunctive or declaratory relief.',
                'Before suing for statutory damages, a consumer must give the business 30 days\u2019 written notice. Adding reasonable security after a breach does not count as a cure for that breach.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Because the claim depends on whether security was reasonable, the record of how your team detected and responded to an exposure matters. Your counsel can explain how the section applies to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Attorney General */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Attorney General</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Reporting to the California Attorney General</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The California Attorney General accepts breach notice samples through an online form. Businesses use it when a single breach requires notice to more than 500 California residents.
            </p>
            <p>
              The Attorney General also lets residents search data security breaches that have been submitted to and published by the office. Plan on your sample notice becoming visible to the public.
            </p>
            <p>
              Healthcare and retail teams often face these questions first. See <Link href="/blog/healthcare-data-leaks-phi-detection-and-breach-notification" className={linkClass}>healthcare data leaks and breach notification</Link> and <Link href="/blog/retail-data-leaks-credit-card-data-detection-on-dark-web-markets" className={linkClass}>credit card data on dark web markets</Link>, plus our <Link href="/industries/healthcare" className={linkClass}>healthcare</Link>, <Link href="/compliance/hipaa" className={linkClass}>HIPAA</Link>, <Link href="/industries/ecommerce" className={linkClass}>ecommerce</Link> and <Link href="/compliance/pci-dss" className={linkClass}>PCI DSS</Link> pages.
            </p>
          </div>
        </div>
      </section>

      {/* Related California pages */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">More for California</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Related California Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">Credential monitoring in San Francisco</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">For SaaS and tech teams: SSO and admin accounts, developer tokens and API keys, and infostealer logs.</p>
              <Link href="/credential-monitoring/san-francisco" className={`${linkClass} text-sm inline-flex items-center`}>Read the San Francisco page <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">Brand monitoring in Los Angeles</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">For media, entertainment and consumer brands: lookalike domains, fake social accounts and executive impersonation.</p>
              <Link href="/brand-monitoring/los-angeles" className={`${linkClass} text-sm inline-flex items-center`}>Read the Los Angeles page <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports California Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              Those alerts support your incident response plan and your legal review under California law. They do not replace either, and no tool makes an organization compliant with California law.
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
            <Database className="w-8 h-8 text-primary mx-auto mb-4" />
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

      <OtherLocations currentHref="/data-breach-monitoring/california" />

      <FinalCTA />

    </div>
  
  );
}
