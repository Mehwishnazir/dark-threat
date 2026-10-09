import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Globe, UserX, Mail, Landmark, KeyRound, Users, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Scale, ShieldAlert } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Digital risk protection for New York State organizations outside NYC: brand impersonation, phishing domains and executive exposure for healthcare, education, manufacturing and local government.";

export const metadata: Metadata = {
  title: "Digital Risk Protection in New York",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/digital-risk-protection/new-york"),
};

const risks = [
  { icon: Globe, title: 'Phishing Domains', desc: 'Lookalike web addresses that copy a hospital portal, college login page or county payment site to collect passwords and payments.' },
  { icon: Mail, title: 'Spoofed Email', desc: 'Messages that appear to come from your organization, a leader or a trusted supplier, often asking for a payment change or a login.' },
  { icon: UserX, title: 'Fake Social Profiles', desc: 'Accounts that copy your name and logo to run scams, post false notices or send people to phishing pages.' },
  { icon: Users, title: 'Executive Exposure', desc: 'Personal details and leaked logins of leaders, trustees and elected officials that make targeted scams more convincing.' },
  { icon: KeyRound, title: 'Leaked Staff Credentials', desc: 'Work email addresses and passwords from third-party breaches that may be reused on your own systems.' },
  { icon: Landmark, title: 'Public Body Impersonation', desc: 'Fake messages that pose as a town, county, school district or agency to demand payment or personal information.' },
];

const steps = [
  {
    num: '01',
    title: 'Know your real domains and accounts',
    body: 'Keep a current list of every domain, subdomain and official social account you run. You cannot spot a fake if no one is sure what the real ones are.',
  },
  {
    num: '02',
    title: 'Publish how you will contact people',
    body: 'Tell patients, students, residents and suppliers which addresses and channels you use, and that you will never ask for passwords by email.',
  },
  {
    num: '03',
    title: 'Check every payment change',
    body: 'Confirm any request to change bank details through a known phone number, not the contact details in the request.',
  },
  {
    num: '04',
    title: 'Report fakes through official channels',
    body: 'Use the abuse and impersonation reporting processes of the platform, registrar or hosting provider involved, and keep a record of what you sent.',
  },
  {
    num: '05',
    title: 'Reset what was exposed',
    body: 'If staff entered passwords on a fake page, or their logins appear in a leak, reset them, end active sessions and confirm MFA is on.',
  },
];

const sources = [
  { label: 'New York Penal Law § 190.25: Criminal impersonation in the second degree', href: 'https://www.nysenate.gov/legislation/laws/PEN/190.25' },
  { label: 'New York General Business Law § 899-aa (breach notification)', href: 'https://www.nysenate.gov/legislation/laws/GBS/899-AA' },
  { label: 'CISA: Avoiding Social Engineering and Phishing Attacks', href: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks' },
  { label: 'get.gov: The .gov top-level domain for U.S. governments (CISA)', href: 'https://get.gov/' },
];

const faqs = [
  {
    q: 'What is digital risk protection?',
    a: 'It means watching for threats to your organization that live outside your own network: lookalike domains, fake social accounts, impersonated leaders and leaked staff logins. The goal is to find them early and respond before people are fooled.',
  },
  {
    q: 'Is online impersonation a crime in New York?',
    a: 'New York Penal Law 190.25 makes criminal impersonation in the second degree a class A misdemeanor. It includes impersonating another by internet website or electronic means, and pretending to be a representative of a person or organization, with intent to obtain a benefit or to injure or defraud another.',
  },
  {
    q: 'Can local governments in New York use a .gov domain?',
    a: 'Yes. According to get.gov, run by CISA, governments at all levels are eligible for .gov domains, including cities and counties. A .gov address helps the public recognize official information.',
  },
  {
    q: 'Where can we read about New York breach law?',
    a: 'Our New York City dark web monitoring page covers General Business Law 899-aa, the SHIELD Act and NYDFS Part 500 in detail. Those rules apply statewide, not only in the city.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Digital Risk Protection in New York', PAGE_DESCRIPTION, 'https://darkthreat.ai/digital-risk-protection/new-york'),
  areaServed: {
    '@type': 'Place',
    name: 'New York'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'New York Digital Risk Protection', url: 'https://darkthreat.ai/digital-risk-protection/new-york' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'New York' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For New York State Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Digital Risk Protection for <span className="glow-text">New York</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Hospitals, colleges, manufacturers and local governments across New York State are trusted names in their communities. That trust is what fake domains, spoofed emails and impersonated leaders try to borrow. DarkThreat helps these teams find breached and leaked credentials tied to their domain.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Digital Risks</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Risks Outside Your Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Digital risk protection looks beyond your own systems, at the places where your name, your leaders and your staff logins can be misused.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {risks.map((t) => (
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
            Read more on <Link href="/blog/brand-impersonation-on-the-dark-web-how-to-detect-and-respond" className={linkClass}>responding to brand impersonation</Link> and <Link href="/blog/phishing-leaked-credentials-combined-attack-detection" className={linkClass}>attacks that combine phishing and leaked credentials</Link>.
          </p>
        </div>
      </section>

      {/* Phishing domains */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Phishing Domains</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How Phishing Domains Borrow Your Name</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              CISA describes phishing as using email or malicious websites to solicit personal information by posing as a trustworthy organization.
            </p>
            <p>
              The fake site may look identical to the real one. CISA notes that the web address may use a variation in spelling or a different domain ending, such as .com instead of .net. Sender addresses are often changed by just a few characters.
            </p>
            <p>
              For an organization people already trust, the most common targets are login pages, payment pages and anything that asks for personal details. A patient portal, a student account page or a tax payment page are obvious examples.
            </p>
            <p>
              See <Link href="/blog/typosquatting-detection-finding-fake-versions-of-your-domain" className={linkClass}>typosquatting detection</Link> and <Link href="/blog/dark-web-monitoring-for-phishing-kit-detection-a-practical-guide" className={linkClass}>phishing kit detection</Link>.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">A note for towns, counties and school districts</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              According to get.gov, run by CISA, governments at all levels are eligible for a .gov domain, including cities and counties. A .gov address helps the public identify official, trusted information. It makes fake sites on other domain endings easier to explain to residents.
            </p>
          </div>
        </div>
      </section>

      {/* Executive exposure */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Executive Exposure</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Leaders, Trustees and Elected Officials</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hospital chief executives, college presidents, plant managers and county officials are public figures in their communities. Their names, roles and email formats are easy to find.
            </p>
            <p>
              Attackers use that to write convincing messages: a president asking finance to pay an invoice, or a commissioner asking staff to open a document. When a leader&apos;s own password has leaked, the message can come from the real account.
            </p>
            <p>
              Board members and trustees often use personal email for organization business, which puts those accounts in scope too.
            </p>
            <p>
              See <Link href="/blog/executive-credential-exposure-on-dark-web-c-suite-risk-guide" className={linkClass}>executive credential exposure</Link> and <Link href="/blog/fake-employee-linkedin-profiles-how-the-dark-web-fuels-social-engineering" className={linkClass}>fake profiles and social engineering</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* NY impersonation law */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Penal Law 190.25</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Impersonation Under New York Law</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New York Penal Law 190.25 defines criminal impersonation in the second degree. It is a class A misdemeanor.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">Parts of Section 190.25 that fit digital impersonation</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Pretending to be a representative of a person or organization, and acting in that capacity with intent to obtain a benefit or to injure or defraud another.',
                'Impersonating another by communication by internet website or electronic means, with intent to obtain a benefit or to injure or defraud another.',
                'Pretending, by such communication, to be a public servant in order to induce another to submit to that authority or act in reliance on it.',
                'Using another person\u2019s electronic signature without permission, with intent to obtain a benefit or to injure or defraud.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Whether a specific fake account or domain falls under this section is a question for law enforcement and your counsel. Platform and registrar reporting usually runs alongside any legal step.
          </p>
        </div>
      </section>

      {/* Response steps */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Response</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Five Steps That Reduce Digital Risk</h2>
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
          <p className="mt-10 text-muted-foreground leading-relaxed">
            CISA&apos;s phishing guidance also recommends enforcing multifactor authentication and changing any password that may have been revealed, on every account where it was reused.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Across the State</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Where Digital Risk Hits Organizations Beyond NYC</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Regional healthcare</h3>
              <p>Hospitals and health systems run patient portals and billing pages that are natural phishing targets. See <Link href="/industries/healthcare" className={linkClass}>healthcare</Link>, <Link href="/compliance/hipaa" className={linkClass}>HIPAA</Link> and <Link href="/blog/healthcare-data-leaks-phi-detection-and-breach-notification" className={linkClass}>healthcare data leaks</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Colleges and universities</h3>
              <p>Student, faculty and alumni accounts are numerous and often reused elsewhere. Fake financial aid and job offers are common lures. See <Link href="/industries/education" className={linkClass}>education</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Manufacturing</h3>
              <p>Suppliers and distributors receive invoices and purchase orders by email, which makes spoofed payment requests a real risk. See <Link href="/industries/manufacturing" className={linkClass}>manufacturing</Link> and <Link href="/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk" className={linkClass}>vendor credential monitoring</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Local government</h3>
              <p>Towns, counties and districts collect payments and personal information from residents, and their officials are public. See <Link href="/industries/government" className={linkClass}>government</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NY law, briefly */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">New York Breach Law</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">When a Phishing Campaign Becomes a Breach</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              If a fake page collects logins or personal data, New York&apos;s breach notification law, General Business Law 899-aa, may come into play. It applies across the state, not only in New York City.
            </p>
            <p>
              Our <Link href="/dark-web-monitoring/new-york-city" className={linkClass}>New York City dark web monitoring</Link> page covers 899-aa, the SHIELD Act&apos;s security requirements and NYDFS Part 500 in detail, with official sources.
            </p>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports New York Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              That helps when a phishing campaign or a third-party breach exposes staff logins. Takedowns of fake domains and accounts still go through registrars and platforms, and legal decisions stay with your counsel.
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
            <ShieldAlert className="w-8 h-8 text-primary mx-auto mb-4" />
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

      <OtherLocations currentHref="/digital-risk-protection/new-york" />

      <FinalCTA />

    </div>
  
  );
}
