import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Globe, UserX, Ticket, Mail, Megaphone, Briefcase, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Scale, Eye } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Brand monitoring for Los Angeles media, entertainment and consumer brands: lookalike domains, fake social accounts and executive impersonation.";

export const metadata: Metadata = {
  title: "Brand Monitoring in Los Angeles",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/brand-monitoring/los-angeles"),
};

const tactics = [
  { icon: Globe, title: 'Lookalike Domains', desc: 'Misspellings, extra words, swapped letters or a different domain ending, set up to pass as your real website at a glance.' },
  { icon: UserX, title: 'Fake Social Accounts', desc: 'Profiles that copy your logo, bio and posts to run giveaways, sell fakes or send people to phishing pages.' },
  { icon: Eye, title: 'Executive and Talent Impersonation', desc: 'Accounts or emails posing as a named executive, artist or on-air personality to win trust or ask for money.' },
  { icon: Ticket, title: 'Fake Ticket and Merch Stores', desc: 'Storefronts using an event, venue or performer name to sell tickets or merchandise that never arrive.' },
  { icon: Mail, title: 'Branded Phishing', desc: 'Emails and login pages that copy your look to collect customer, fan or staff passwords.' },
  { icon: Briefcase, title: 'Fake Job and Partner Offers', desc: 'Messages using your company name to offer roles, auditions or deals, then ask for fees or personal details.' },
];

const steps = [
  {
    num: '01',
    title: 'Capture the evidence',
    body: 'Save screenshots, full URLs, profile handles, dates and any messages sent to customers. Do this before reporting, because accounts and pages can disappear.',
  },
  {
    num: '02',
    title: 'Report to the platform or registrar',
    body: 'Social platforms, domain registrars and hosting providers have their own impersonation and abuse reporting processes. Use the official channels for each.',
  },
  {
    num: '03',
    title: 'Warn the people being targeted',
    body: 'Tell customers, fans and staff which domains and accounts are real, and how you will and will not contact them.',
  },
  {
    num: '04',
    title: 'Check for stolen logins',
    body: 'If the fake site collected passwords, look for those credentials showing up in leaks, and reset any staff accounts involved.',
  },
  {
    num: '05',
    title: 'Involve legal counsel',
    body: 'Counsel can advise whether a trademark claim, a domain dispute or California law applies, and what to do if customer data was taken.',
  },
];

const sources = [
  { label: 'California Penal Code 528.5: Online impersonation', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=528.5' },
  { label: 'California Business and Professions Code 17525: Cyber piracy (domain names)', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17525' },
  { label: 'California Civil Code 1798.82: Breach notification', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82' },
];

const faqs = [
  {
    q: 'Is online impersonation a crime in California?',
    a: 'Penal Code 528.5 makes it a public offense to knowingly and without consent credibly impersonate another actual person online or by other electronic means, to harm, intimidate, threaten or defraud someone. It covers people rather than company brands. Speak with counsel about how it applies to your situation.',
  },
  {
    q: 'Does California law cover lookalike domains?',
    a: 'Business and Professions Code 17525 covers bad-faith registration or use of a domain that is identical or confusingly similar to a living person\u2019s or deceased personality\u2019s name, or to certain team, venue and event names used to sell goods such as tickets. Other brand domain disputes usually involve trademark law.',
  },
  {
    q: 'Can fake brand sites lead to a data breach?',
    a: 'Yes, if they collect customer or staff passwords. A username or email address with a password can be personal information under California Civil Code 1798.82. See our California data breach page for the notice rules.',
  },
  {
    q: 'Will DarkThreat take down fake accounts or domains?',
    a: 'Takedowns go through platforms, registrars and hosting providers. DarkThreat monitors for breached and leaked credentials tied to your domain, which helps when an impersonation campaign harvests logins.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Brand Monitoring in Los Angeles', PAGE_DESCRIPTION, 'https://darkthreat.ai/brand-monitoring/los-angeles'),
  areaServed: {
    '@type': 'Place',
    name: 'Los Angeles'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Los Angeles Brand Monitoring', url: 'https://darkthreat.ai/brand-monitoring/los-angeles' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Los Angeles' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For Los Angeles Brands
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Brand Monitoring for <span className="glow-text">Los Angeles</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Media, entertainment and consumer brands live on recognition, and that makes them easy to copy. Lookalike domains, fake social accounts and impersonated executives turn your audience&apos;s trust into a target. DarkThreat helps Los Angeles teams spot the leaked logins these campaigns collect.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Tactics */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Impersonation Tactics</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">How Brands Get Impersonated</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The common patterns behind fake sites, fake accounts and fake offers that use a brand&apos;s name.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tactics.map((t) => (
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
            Read more on <Link href="/blog/brand-impersonation-on-the-dark-web-how-to-detect-and-respond" className={linkClass}>detecting and responding to brand impersonation</Link> and <Link href="/blog/how-hackers-use-your-brand-against-your-customers-phishing-kit-sales" className={linkClass}>phishing kits built around your brand</Link>.
          </p>
        </div>
      </section>

      {/* Lookalike domains */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Lookalike Domains</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Lookalike Domains and California&apos;s Cyber Piracy Law</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A lookalike domain only needs to fool someone for a moment. It might drop a letter, add a word like &ldquo;tickets&rdquo; or &ldquo;support&rdquo;, or use a different ending. The fake site then copies your design.
            </p>
            <p>
              Watching for these domains early gives you time to warn customers before a campaign spreads. See <Link href="/blog/typosquatting-detection-finding-fake-versions-of-your-domain" className={linkClass}>typosquatting detection</Link>.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">What Business and Professions Code 17525 covers</h3>
            </div>
            <ul className="space-y-3">
              {[
                'It is unlawful, with bad faith intent, to register, traffic in or use a domain or subdomain that is identical or confusingly similar to the personal name of a living person or deceased personality, including by misspelling.',
                'It also covers the names of sports teams and leagues, theme parks, live entertainment venues, and specific events or performers, when the domain is used to sell or resell goods. Goods include tickets, clothing and memorabilia.',
                'It does not apply when the name is connected to a work of authorship, or when the person or an authorized agent consents.',
                'Without that consent, bad faith is presumed. An injured party who lost money or property can sue for damages, and is awarded attorney\u2019s fees if the action is resolved in their favor.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Section 17525 is about personal names and these specific entertainment names. It does not cover every company name, so disputes over other brand domains usually involve trademark law. Ask your counsel which route fits.
          </p>
        </div>
      </section>

      {/* Online impersonation */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Penal Code 528.5</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Fake Accounts and Executive Impersonation</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Fake profiles of a well-known executive, artist or host can reach fans and partners quickly. They are often used to ask for money, push fake investments or collect personal details.
            </p>
            <p>
              California Penal Code 528.5 makes it a public offense to knowingly and without consent credibly impersonate another actual person through a website or by other electronic means, for the purpose of harming, intimidating, threatening or defrauding another person.
            </p>
            <p>
              An impersonation is credible if another person would reasonably believe, or did reasonably believe, it was the real person. &ldquo;Electronic means&rdquo; includes opening an email account or a social networking profile in another person&apos;s name.
            </p>
            <p>
              A violation is punishable by a fine of up to $1,000, up to one year in county jail, or both. A person who suffers damage or loss can also bring a civil action for compensatory damages and injunctive relief.
            </p>
            <p>
              The section protects actual people. It does not cover an account that copies only a company brand, which platforms usually handle through their own impersonation and trademark policies.
            </p>
            <p>
              Executives targeted by fake profiles are often targeted in other ways too. See <Link href="/blog/executive-credential-exposure-on-dark-web-c-suite-risk-guide" className={linkClass}>executive credential exposure</Link> and <Link href="/blog/fake-employee-linkedin-profiles-how-the-dark-web-fuels-social-engineering" className={linkClass}>fake employee profiles and social engineering</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Response playbook */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Response</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Responding to an Impersonation Campaign</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              A clear routine helps marketing, social, security and legal teams work together instead of each starting from scratch.
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
        </div>
      </section>

      {/* LA sectors */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Los Angeles Sectors</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Where Impersonation Hits Los Angeles Brands</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Media and entertainment</h3>
              <p>Studios, labels and production companies deal with fake talent accounts, fake casting calls and fake release announcements. Fake ticket sites for shows and screenings are another common problem.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Consumer and retail brands</h3>
              <p>Fake storefronts and giveaway accounts copy product photos and pricing to take payments or card details. See <Link href="/industries/ecommerce" className={linkClass}>ecommerce</Link> and <Link href="/compliance/pci-dss" className={linkClass}>PCI DSS</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Venues, hospitality and events</h3>
              <p>Lookalike booking and ticket pages target guests and fans. See <Link href="/industries/hospitality" className={linkClass}>hospitality</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Agencies and professional services</h3>
              <p>Firms that run accounts for clients hold many social and ad logins in one place. See <Link href="/industries/professional-services" className={linkClass}>professional services</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When impersonation becomes a breach */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Breach Risk</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">When Impersonation Turns Into a Data Breach</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Many impersonation campaigns end with a fake login page. Once customers or staff enter their passwords, the problem is no longer only about your brand.
            </p>
            <p>
              Under California law, a username or email address with a password that permits access to an online account can be personal information. For the notice rules, see our <Link href="/data-breach-monitoring/california" className={linkClass}>California data breach monitoring</Link> page.
            </p>
            <p>
              If staff logins were taken, our <Link href="/credential-monitoring/san-francisco" className={linkClass}>San Francisco credential monitoring</Link> page covers how to triage SSO, admin and API credentials.
            </p>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports Los Angeles Brands</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              That helps when an impersonation campaign harvests logins. Takedowns still go through platforms, registrars and hosting providers, and legal decisions stay with your counsel.
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
            <Megaphone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Protect the logins behind your brand
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
            This page summarizes public law for general information. It is not legal advice.
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

      <OtherLocations currentHref="/brand-monitoring/los-angeles" />

      <FinalCTA />

    </div>
  
  );
}
