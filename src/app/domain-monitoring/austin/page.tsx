import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Globe, Type, Layers, Mail, PackageOpen, KeyRound, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Scale, Rocket } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Domain monitoring for Austin tech companies and startups: lookalike and typosquatted domains, phishing kits and leaked credentials, plus Texas online impersonation law.";

export const metadata: Metadata = {
  title: "Domain Monitoring in Austin",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/domain-monitoring/austin"),
};

const patterns = [
  { icon: Type, title: 'Typosquats', desc: 'One letter dropped, doubled or swapped, so the address passes a quick glance in an email or browser bar.' },
  { icon: Globe, title: 'Different Endings', desc: 'Your exact name on another domain ending, such as .net, .co or .io, used to look like a regional or product site.' },
  { icon: Layers, title: 'Added Words', desc: 'Your name plus words like login, support, billing, careers or app, which read naturally to customers and staff.' },
  { icon: Mail, title: 'Spoofed Senders', desc: 'Email from an address a few characters off your real one, sent to customers, investors or your own finance team.' },
  { icon: PackageOpen, title: 'Phishing Kits', desc: 'Ready-made copies of a login page, sold or shared so anyone can put up a convincing fake of a known product.' },
  { icon: KeyRound, title: 'Harvested Credentials', desc: 'The passwords those fake pages collect, which later appear in leaks and are tried against your real login.' },
];

const steps = [
  {
    num: '01',
    title: 'Register the obvious variants yourself',
    body: 'Defensive registration of your main name on common endings and the most likely misspellings is cheaper than disputing them later.',
  },
  {
    num: '02',
    title: 'Lock down email authentication',
    body: 'Set up SPF, DKIM and DMARC on your real domain so receiving mail systems can reject messages that only pretend to come from it.',
  },
  {
    num: '03',
    title: 'Tell people what is real',
    body: 'Publish your official domains, app store listings and support channels, and say that you will never ask for passwords by email or chat.',
  },
  {
    num: '04',
    title: 'Report and document fakes',
    body: 'Report a fake site to the registrar and hosting provider, and keep screenshots, URLs and dates. That record supports any later dispute.',
  },
  {
    num: '05',
    title: 'Reset what the fake collected',
    body: 'If staff or customers entered passwords on a fake page, reset them, end active sessions and turn on MFA wherever it is missing.',
  },
];

const sources = [
  { label: 'Texas Penal Code § 33.07: Online impersonation', href: 'https://tcss.legis.texas.gov/resources/pe/htm/pe.33.htm' },
  { label: 'ICANN: Uniform Domain-Name Dispute-Resolution Policy (UDRP)', href: 'https://www.icann.org/resources/pages/help/dndr/udrp-en' },
  { label: 'CISA: Avoiding Social Engineering and Phishing Attacks', href: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks' },
  { label: 'Texas Business & Commerce Code Chapter 521 (definitions and breach notice)', href: 'https://statutes.capitol.texas.gov/Docs/BC/htm/BC.521.htm' },
];

const faqs = [
  {
    q: 'What is a lookalike domain?',
    a: 'A web address made to resemble yours closely enough to fool someone for a moment. CISA notes that malicious sites may look identical to a real one while using a variation in spelling or a different domain ending, such as .com instead of .net.',
  },
  {
    q: 'Is online impersonation a crime in Texas?',
    a: 'Texas Penal Code 33.07 covers using another person\u2019s name or persona without consent to create a web page or post messages on a social networking site or other website, with intent to harm, defraud, intimidate or threaten. It also covers emails and texts that reference another person\u2019s name or domain address to make recipients believe that person sent them, with intent to harm or defraud.',
  },
  {
    q: 'How are lookalike domain disputes resolved?',
    a: 'ICANN requires all registrars to follow the Uniform Domain-Name Dispute-Resolution Policy. Abusive registrations, such as cybersquatting, can be addressed by an expedited administrative proceeding that the trademark holder starts with an approved provider. Court action is the other route.',
  },
  {
    q: 'Does DarkThreat find lookalike domains?',
    a: 'DarkThreat monitors for breached and leaked credentials tied to your domain and sends email notifications. That covers the passwords lookalike sites collect once they show up in leaks. It does not replace registrar reporting or legal disputes.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Domain Monitoring in Austin', PAGE_DESCRIPTION, 'https://darkthreat.ai/domain-monitoring/austin'),
  areaServed: {
    '@type': 'Place',
    name: 'Austin'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Austin Domain Monitoring', url: 'https://darkthreat.ai/domain-monitoring/austin' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Austin' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For Austin Tech Companies
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Domain Monitoring for <span className="glow-text">Austin</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A growing product brand is easy to copy. A lookalike domain and an off-the-shelf phishing kit are enough to collect your customers&apos; and staff&apos;s passwords. DarkThreat helps Austin tech teams find breached and leaked credentials tied to their domain, including the ones fake sites collect.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Domain Threats</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">How Lookalike Domains Are Built</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Most fake domains follow a handful of patterns. Knowing them makes it easier to spot one in an inbox or a search result.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patterns.map((t) => (
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
            CISA&apos;s phishing guidance says malicious websites may look identical to a legitimate site while the URL uses a variation in spelling or a different domain, and that sender addresses are often altered by just a few characters.
          </p>
        </div>
      </section>

      {/* Phishing kits */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Phishing Kits</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">From Phishing Kit to Leaked Password</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A phishing kit is a packaged copy of a real login page, with the code to capture what people type. Kits for popular products are traded and reused, so an attacker does not need to build anything.
            </p>
            <p>
              Paired with a lookalike domain, the kit becomes a working fake in very little time. Links go out by email, text or ads, and the captured logins are collected.
            </p>
            <p>
              Those logins rarely stay private. They are sold, shared or bundled into larger leaks, then tried against your real login page and against other services where people reuse passwords.
            </p>
            <p>
              That last step is where leaked credential monitoring helps. The fake domain may already be gone, but the stolen passwords are still usable until they are reset.
            </p>
            <p>
              See <Link href="/blog/how-hackers-use-your-brand-against-your-customers-phishing-kit-sales" className={linkClass}>phishing kit sales built around your brand</Link> and <Link href="/blog/dark-web-monitoring-for-phishing-kit-detection-a-practical-guide" className={linkClass}>phishing kit detection</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Startup credential risk */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Startups</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Why Fast-Growing Teams Are Exposed</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Young companies often have founders and early engineers with admin access to everything: the domain registrar, email, cloud accounts, code and billing.
            </p>
            <p>
              The registrar account deserves special care. Whoever controls it controls your real domain, its email and where its website points.
            </p>
            <p>
              New hires, contractors and personal devices add more logins quickly. A single reused password from an old breach can be enough for an attacker to sign in.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">Accounts to protect first</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Domain registrar and DNS provider accounts.',
                'Email and single sign-on administrator accounts.',
                'Cloud console and code repository owner accounts.',
                'Billing, payments and payroll accounts.',
                'Social media and app store publisher accounts.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            See <Link href="/blog/how-to-set-up-alerts-for-leaked-domain-credentials" className={linkClass}>setting up alerts for leaked domain credentials</Link>, <Link href="/blog/how-attackers-exploit-leaked-subdomains" className={linkClass}>how attackers exploit leaked subdomains</Link> and <Link href="/blog/saas-company-data-on-the-dark-web-whats-at-risk-and-how-to-monitor" className={linkClass}>SaaS company data on the dark web</Link>.
          </p>
        </div>
      </section>

      {/* Response steps */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Response</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Reducing Lookalike Domain Risk</h2>
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
            CISA also recommends enforcing multifactor authentication and changing any password that may have been revealed, on every account where it was reused.
          </p>
        </div>
      </section>

      {/* Legal routes */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Legal Routes</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Online Impersonation and Domain Disputes</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Two routes are most relevant when a fake domain or account uses your name: Texas criminal law on online impersonation, and the domain dispute policy every registrar follows.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">Texas Penal Code 33.07: Online impersonation</h3>
            </div>
            <ul className="space-y-3">
              {[
                'It is an offense to use another person\u2019s name or persona without consent to create a web page, or post or send messages, on a social networking site or other website, with intent to harm, defraud, intimidate or threaten any person. This is a third-degree felony.',
                'It is also an offense to send an email, instant message, text or similar message that references another person\u2019s name, domain address, phone number or other identifying information, without consent, intending recipients to believe that person sent or authorized it, and with intent to harm or defraud. This is generally a Class A misdemeanor.',
                'The law gives a defense to commercial social networking sites, internet service providers and similar service providers, and to their employees acting in that role.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              For the domain itself, ICANN requires all registrars to follow the Uniform Domain-Name Dispute-Resolution Policy. Most trademark-based domain disputes must be resolved by agreement, court action or arbitration before a registrar will cancel, suspend or transfer a domain.
            </p>
            <p>
              Abusive registrations, such as cybersquatting, can go through an expedited administrative proceeding started by the trademark holder with an approved dispute-resolution provider. Your counsel can advise which route fits.
            </p>
          </div>
        </div>
      </section>

      {/* Texas law, briefly */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Texas Breach Law</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">When Stolen Logins Lead to a Breach</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Texas&apos; breach notice law focuses on names combined with government ID numbers or financial account access, and on health information. It does not list an online username and password on their own.
            </p>
            <p>
              But a stolen staff login can open systems that hold exactly that kind of data. For the 60-day notice rule, the Attorney General report and the Texas Data Privacy and Security Act, see our <Link href="/attack-surface-monitoring/texas" className={linkClass}>Texas attack surface monitoring</Link> page.
            </p>
            <p>
              Customers in other states may be covered by their own laws. California, for example, does include online account credentials. See our <Link href="/data-breach-monitoring/california" className={linkClass}>California data breach monitoring</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* Tech context */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Austin Tech</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Where This Matters for Austin Teams</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">SaaS and software</h3>
              <p>Your login page is your product&apos;s front door, so it is the page phishing kits copy. See <Link href="/industries/saas-technology" className={linkClass}>SaaS and technology</Link> and our <Link href="/credential-monitoring/san-francisco" className={linkClass}>credential monitoring for SaaS teams</Link> page.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Fintech and crypto</h3>
              <p>Fake sign-in and wallet pages target money directly. See <Link href="/industries/crypto-fintech" className={linkClass}>crypto and fintech</Link> and <Link href="/compliance/pci-dss" className={linkClass}>PCI DSS</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Security reviews</h3>
              <p>Enterprise buyers ask how you handle phishing and account takeover. Frameworks such as <Link href="/compliance/soc-2" className={linkClass}>SOC 2</Link> give that work a structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports Austin Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              That covers the passwords lookalike sites collect once they surface in leaks. Registrar reports, domain disputes and legal decisions stay with your team and counsel.
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
            <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              See which logins tied to your domain are exposed
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
            This page summarizes public law and official guidance for general information. It is not legal advice.
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

      <OtherLocations currentHref="/domain-monitoring/austin" />

      <FinalCTA />

    </div>
  
  );
}
