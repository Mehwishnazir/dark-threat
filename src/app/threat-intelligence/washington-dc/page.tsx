import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Lock, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Landmark, Users, Scale, Briefcase } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Threat intelligence for Washington DC organizations, with a plain-English guide to D.C. breach law and federal contractor cyber rules.";

export const metadata: Metadata = {
  title: "Threat Intelligence in Washington DC",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/threat-intelligence/washington-dc"),
};

const audiences = [
  { icon: Landmark, title: 'Federal Contractors', desc: 'Prime contractors and subcontractors that handle federal contract information or controlled unclassified information, and the staff accounts that reach it.' },
  { icon: Users, title: 'Associations & Nonprofits', desc: 'Member organizations, advocacy groups and NGOs that hold donor, member and staff data, often with small security teams.' },
  { icon: Scale, title: 'Law & Policy Firms', desc: 'Firms whose email accounts carry privileged and politically sensitive material, making them attractive to targeted phishing.' },
  { icon: Briefcase, title: 'Professional Services', desc: 'Consultancies and IT providers that support agencies and regulated clients, and so sit inside other organizations\u2019 supply chains.' },
];

const comparison = [
  { row: 'Who it covers', dc: 'Any person or entity that conducts business in D.C. and owns or licenses electronic personal information of D.C. residents.', fed: 'Contractors and subcontractors whose contracts include FAR 52.204-21 or DFARS 252.204-7012.' },
  { row: 'What it protects', dc: 'Personal information, including email account logins, ID and account numbers, medical, genetic and biometric data.', fed: 'Federal contract information (FAR) and covered defense information (DFARS).' },
  { row: 'Trigger', dc: 'Discovering a breach of the security of the system.', fed: 'Discovering a cyber incident affecting a covered contractor information system (DFARS).' },
  { row: 'Deadline', dc: 'Most expedient time possible and without unreasonable delay.', fed: 'Rapidly report, defined as within 72 hours of discovery (DFARS).' },
  { row: 'Who you tell', dc: 'Affected residents; the D.C. Attorney General if 50 or more residents are affected; consumer reporting agencies above 1,000.', fed: 'DoD, through dibnet.dod.mil (DFARS).' },
];

const sources = [
  { label: 'D.C. Code § 28-3851: Definitions', href: 'https://code.dccouncil.gov/us/dc/council/code/sections/28-3851' },
  { label: 'D.C. Code § 28-3852: Notification of security breach', href: 'https://code.dccouncil.gov/us/dc/council/code/sections/28-3852' },
  { label: 'D.C. Code § 28-3852.01: Security requirements', href: 'https://code.dccouncil.gov/us/dc/council/code/sections/%5B28-3852.01%5D' },
  { label: 'D.C. Code § 28-3853: Enforcement', href: 'https://code.dccouncil.gov/us/dc/council/code/sections/28-3853' },
  { label: 'D.C. Attorney General: Requirements of the District\u2019s Data Breach Notification Law', href: 'https://oag.dc.gov/about-oag/laws-legal-opinions/requirements-districts-data-breach-notification' },
  { label: 'FAR 52.204-21: Basic Safeguarding of Covered Contractor Information Systems', href: 'https://www.acquisition.gov/far/52.204-21' },
  { label: 'DFARS 252.204-7012: Safeguarding Covered Defense Information and Cyber Incident Reporting', href: 'https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.' },
  { label: 'DoD CIO: About CMMC', href: 'https://dodcio.defense.gov/CMMC/About/' },
];

const faqs = [
  {
    q: 'Does D.C. law cover leaked email passwords?',
    a: 'Yes, in some cases. D.C. Code § 28-3851 defines personal information to include a user name or email address combined with a password, security question and answer, or other means of authentication that permits access to an individual\u2019s email account.',
  },
  {
    q: 'When must a business notify the D.C. Attorney General?',
    a: 'When a breach affects 50 or more District residents. The notice must be made without unreasonable delay and no later than notice to residents, and it cannot be delayed because the total number affected is not yet known.',
  },
  {
    q: 'We are a defense contractor in the D.C. area. What applies to us?',
    a: 'Possibly both. D.C. breach law applies to personal information of District residents. If your contract includes DFARS 252.204-7012, you must also report cyber incidents affecting covered contractor information systems to DoD within 72 hours of discovery.',
  },
  {
    q: 'Will DarkThreat make us compliant with D.C. law, DFARS or CMMC?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find exposed credentials and relevant hacker chatter. Assessments, affirmations and incident reports stay with your security leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Threat Intelligence in Washington DC', PAGE_DESCRIPTION, 'https://darkthreat.ai/threat-intelligence/washington-dc'),
  areaServed: {
    '@type': 'Place',
    name: 'Washington DC'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Washington DC Threat Intelligence', url: 'https://darkthreat.ai/threat-intelligence/washington-dc' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Washington DC' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For Washington DC Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Threat Intelligence for <span className="glow-text">Washington DC</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Organizations in the District often answer to two rulebooks: D.C. breach notification law and the cyber clauses in federal contracts. DarkThreat helps Washington DC teams spot exposed credentials and relevant hacker chatter early, so they can act before an incident triggers either one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Who Needs It</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Who Relies on Threat Intelligence in the District</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Washington DC is home to many organizations that work with or around the federal government. Each has a different reason to watch the dark web.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((t) => (
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
            See our <Link href="/industries/government" className={linkClass}>government</Link>, <Link href="/industries/legal" className={linkClass}>legal</Link> and <Link href="/industries/professional-services" className={linkClass}>professional services</Link> pages.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Two Rulebooks</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">D.C. Breach Law and Federal Contract Rules, Side by Side</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The two regimes protect different information and report to different authorities. A single incident at a D.C. contractor can trigger both.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-card/60">
                <tr>
                  <th scope="col" className="p-4 font-montserrat font-bold text-foreground w-1/5"><span className="sr-only">Topic</span></th>
                  <th scope="col" className="p-4 font-montserrat font-bold text-foreground">D.C. Code § 28-3851 onward</th>
                  <th scope="col" className="p-4 font-montserrat font-bold text-foreground">Federal contract clauses</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.row} className="border-t border-border align-top">
                    <th scope="row" className="p-4 font-semibold text-foreground">{c.row}</th>
                    <td className="p-4 text-muted-foreground leading-relaxed">{c.dc}</td>
                    <td className="p-4 text-muted-foreground leading-relaxed">{c.fed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* D.C. law */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">D.C. Law</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">What D.C. Breach Law Requires</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The District&apos;s Consumer Security Breach Notification Act is D.C. Code § 28-3851 onward. The Security Breach Protection Amendment Act of 2019, effective June 8, 2020, expanded it.
            </p>
            <p>
              For threat intelligence teams, one definition stands out. Personal information includes a user name or email address with a password, security question and answer, or other means of authentication that permits access to an individual&apos;s email account.
            </p>
            <p>
              It also covers a name or other identifier combined with Social Security, taxpayer, passport, driver&apos;s licence or military ID numbers, account or card numbers with access codes, and medical, genetic, health insurance and biometric data.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <h3 className="font-montserrat font-bold text-foreground mb-4">Key duties</h3>
            <ul className="space-y-3">
              {[
                'Notify affected residents in the most expedient time possible and without unreasonable delay.',
                'Notify the Office of the Attorney General in writing if the breach affects 50 or more District residents, no later than residents are notified.',
                'Do not delay the Attorney General notice because the total number of affected residents is not yet known.',
                'Notify nationwide consumer reporting agencies if more than 1,000 people must be notified.',
                'If you hold data you do not own, notify the owner in the most expedient time possible following discovery.',
                'Before deciding a breach is unlikely to cause harm, consult the Attorney General and federal law enforcement.',
                'Offer 18 months of free identity theft prevention services if Social Security or taxpayer identification numbers are involved, according to the Attorney General.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Section 28-3852.01 adds a security duty. Anyone who owns, licenses, maintains or handles District residents&apos; personal information must keep reasonable security safeguards suited to the data and the size of the organization.
            </p>
            <p>
              When you share that data with a service provider under a written agreement, the agreement must require the provider to keep reasonable security too. Violations are an unfair or deceptive trade practice under D.C. law.
            </p>
          </div>
        </div>
      </section>

      {/* Federal contractor context */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Federal Contractors</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">The Federal Contractor Layer</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">FAR 52.204-21: basic safeguarding</h3>
              <p>This clause sets 15 basic security requirements for contractor systems that handle federal contract information. They include limiting access to authorized users, authenticating users before granting access, and monitoring communications at system boundaries.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">DFARS 252.204-7012: covered defense information</h3>
              <p>Defense contractors with this clause must provide adequate security, generally by implementing NIST SP 800-171. After discovering a cyber incident, they must review for evidence of compromise, including compromised user accounts, and rapidly report to DoD, defined as within 72 hours.</p>
              <p className="mt-3">The clause also requires preserving images of affected systems for at least 90 days, and it flows down to subcontractors that handle covered defense information.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">CMMC: where things stand</h3>
              <p>The first phase of the Cybersecurity Maturity Model Certification (CMMC) program began on November 10, 2025. On July 13, 2026, the Department of War announced it had suspended Phase II, which had been scheduled for November 10, 2026.</p>
              <p className="mt-3">Phase 1 self-assessment requirements remain in place. The DoD CIO notes that the pause does not remove the duty to protect information under DFARS 252.204-7012. Check the DoD CIO site for the latest status before planning.</p>
            </div>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            For more, read <Link href="/blog/dark-web-monitoring-for-government-contractors-in-washington-dc" className={linkClass}>dark web monitoring for government contractors in Washington DC</Link> and <Link href="/blog/credential-leak-detection-for-government-agencies-and-contractors" className={linkClass}>credential leak detection for government agencies and contractors</Link>.
          </p>
        </div>
      </section>

      {/* Intelligence in practice */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">In Practice</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Turning Intelligence Into Action</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Exposed email logins.</strong> D.C. law singles out email account credentials. Finding staff logins in a leak lets you reset them and check whether the account was accessed.
            </p>
            <p>
              <strong className="text-foreground">Compromised user accounts after an incident.</strong> DFARS asks contractors to identify compromised user accounts during their review. Knowing which accounts already appeared in leaks can help focus that work.
            </p>
            <p>
              <strong className="text-foreground">Targeted phishing and impersonation.</strong> Hacker chatter that names your organization, programs or staff can warn you about campaigns aimed at people with access.
            </p>
            <p>
              <strong className="text-foreground">Indicators for your team.</strong> Intelligence is most useful when it becomes something your analysts can act on. See <Link href="/blog/what-are-indicators-of-compromise-iocs-and-where-do-they-come-from" className={linkClass}>where indicators of compromise come from</Link>, <Link href="/blog/how-nation-state-actors-use-leaked-credentials-in-apt-campaigns" className={linkClass}>how nation-state actors use leaked credentials</Link> and <Link href="/blog/what-is-a-threat-intelligence-platform-tip-and-does-your-business-need-one" className={linkClass}>whether you need a threat intelligence platform</Link>.
            </p>
            <p>
              Teams that map these activities to a framework often use the <Link href="/compliance/nist-csf" className={linkClass}>NIST Cybersecurity Framework</Link>, <Link href="/compliance/iso-27001" className={linkClass}>ISO 27001</Link> or <Link href="/compliance/soc-2" className={linkClass}>SOC 2</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports Washington DC Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with credential leak detection, hacker chatter alerts and automated breach reports for the domains you monitor.
            </p>
            <p>
              That intelligence supports your incident response, your D.C. breach assessment and any contract reporting. It does not replace them, and no tool makes an organization compliant with D.C. law, DFARS or CMMC.
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

      <OtherLocations currentHref="/threat-intelligence/washington-dc" />

      <FinalCTA />

    </div>
  
  );
}
