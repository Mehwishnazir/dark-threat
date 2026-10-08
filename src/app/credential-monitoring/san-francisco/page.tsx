import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Lock, KeyRound, Code2, Cookie, UserCog, Server, Users, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Bug } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Credential monitoring for San Francisco SaaS and tech teams: SSO and admin accounts, developer tokens and API keys, and infostealer logs.";

export const metadata: Metadata = {
  title: "Credential Monitoring in San Francisco",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/credential-monitoring/san-francisco"),
};

const credentialTypes = [
  { icon: KeyRound, title: 'SSO and Identity Provider Logins', desc: 'One leaked single sign-on password can open email, code, chat, billing and every other app behind it.' },
  { icon: UserCog, title: 'Admin and Super-Admin Accounts', desc: 'Console, tenant and billing admins can change settings, add users and export data across the whole company.' },
  { icon: Code2, title: 'Developer Tokens and API Keys', desc: 'Personal access tokens, cloud keys and third-party API secrets that work without a password prompt or MFA.' },
  { icon: Cookie, title: 'Session Cookies', desc: 'Stolen browser sessions that let an attacker reuse a signed-in session instead of logging in again.' },
  { icon: Server, title: 'Service and CI/CD Accounts', desc: 'Non-human accounts for build pipelines, deploy tools and integrations that are often long-lived and over-privileged.' },
  { icon: Users, title: 'Customer Workspace Logins', desc: 'Your customers\u2019 usernames and passwords for your product, reused from other breaches and tested against your login page.' },
];

const steps = [
  {
    num: '01',
    title: 'Match the finding to a live account',
    body: 'Check whether the email, username or key belongs to a current employee, contractor, service account or customer. Old or disabled accounts are lower priority, but still worth recording.',
  },
  {
    num: '02',
    title: 'Rank by access, not by volume',
    body: 'An SSO login, an admin account or a cloud key with write access matters more than a single app password. Work the highest-access exposures first.',
  },
  {
    num: '03',
    title: 'Reset, revoke and rotate',
    body: 'Force a password change, end active sessions, and rotate any exposed token or key. NIST SP 800-63B says verifiers shall force a password change if there is evidence the authenticator has been compromised.',
  },
  {
    num: '04',
    title: 'Check the MFA type on the account',
    body: 'CISA calls phishing-resistant MFA the standard to strive for, and says FIDO/WebAuthn is the only widely available phishing-resistant option. Prioritize it for admins and SSO.',
  },
  {
    num: '05',
    title: 'Block reuse of breached passwords',
    body: 'NIST SP 800-63B requires verifiers to compare new passwords against a blocklist that includes known compromised passwords, and to reject matches.',
  },
  {
    num: '06',
    title: 'Bring in legal when customer accounts are involved',
    body: 'If customer usernames and passwords are part of the exposure, your counsel will want to assess notice duties under California law.',
  },
];

const sources = [
  { label: 'California Civil Code 1798.82: Breach notification (personal information definition)', href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.82' },
  { label: 'NIST SP 800-63B-4: Digital Identity Guidelines, Authentication and Authenticator Management', href: 'https://pages.nist.gov/800-63-4/sp800-63b.html' },
  { label: 'CISA: More than a Password (multifactor authentication)', href: 'https://www.cisa.gov/MFA' },
];

const faqs = [
  {
    q: 'Why focus on SSO and admin accounts first?',
    a: 'They reach the most systems. A leaked SSO password can expose every app behind it, and an admin account can change settings or export data across the company. Ranking findings by access helps teams fix the riskiest exposures first.',
  },
  {
    q: 'Does MFA make leaked passwords harmless?',
    a: 'No. Session cookies and API tokens can be reused without an MFA prompt, and some MFA methods can be phished. CISA calls phishing-resistant MFA, such as FIDO/WebAuthn, the standard organizations should strive for.',
  },
  {
    q: 'Are leaked usernames and passwords personal information in California?',
    a: 'They can be. California Civil Code 1798.82 includes a username or email address combined with a password or security question and answer that would permit access to an online account. See our California data breach page for notice timing and other rules.',
  },
  {
    q: 'Will DarkThreat make us compliant?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find breached and leaked credentials tied to your domain. Notification decisions and legal compliance stay with your leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Credential Monitoring in San Francisco', PAGE_DESCRIPTION, 'https://darkthreat.ai/credential-monitoring/san-francisco'),
  areaServed: {
    '@type': 'Place',
    name: 'San Francisco'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'San Francisco Credential Monitoring', url: 'https://darkthreat.ai/credential-monitoring/san-francisco' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'San Francisco' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For San Francisco Tech Teams
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Credential Monitoring for <span className="glow-text">San Francisco</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            In a SaaS company, one leaked SSO password, admin login or API key can reach far more than one app. DarkThreat helps San Francisco security and platform teams find breached and leaked credentials tied to their domain, so they can reset and rotate sooner.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Credentials that matter */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">High-Value Credentials</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">The Credentials That Matter Most to SaaS Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Not every leaked login carries the same risk. These are the ones that give an attacker the widest reach inside a tech company.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentialTypes.map((t) => (
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
            Read more on <Link href="/blog/credential-leak-detection-for-saas-applications-complete-guide" className={linkClass}>credential leak detection for SaaS applications</Link> and <Link href="/blog/how-to-detect-leaked-admin-credentials-before-attackers-use-them" className={linkClass}>detecting leaked admin credentials</Link>.
          </p>
        </div>
      </section>

      {/* Infostealer logs */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Infostealer Logs</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">What an Infostealer Log Gives Away</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Infostealer malware copies data from an infected browser and sends it to the attacker. The result is a log file that can be sold or shared on dark web markets and channels.
            </p>
            <p>
              A single log can hold saved passwords for many sites, session cookies, autofill data and details about the device. For a developer or admin, that can mean work and personal accounts in one place.
            </p>
            <p>
              The infected device is not always a company laptop. Personal computers used for work, shared family devices and contractor machines can all leak company logins.
            </p>
            <p>
              Session cookies are the part teams most often miss. If a cookie is still valid, an attacker may be able to reuse the signed-in session without the password or an MFA prompt.
            </p>
            <p>
              See <Link href="/blog/infostealer-logs-what-they-contain-and-why-you-need-to-monitor-them" className={linkClass}>what infostealer logs contain</Link> and <Link href="/blog/session-token-hijacking-the-credential-attack-dark-web-monitoring-catches" className={linkClass}>session token hijacking</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Tokens and keys */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Developer Secrets</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Developer Tokens and API Keys in Leaks</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Tokens and keys are credentials too, and they are often more powerful than a password. Many work without any login screen, so MFA never gets a chance to stop them.
            </p>
            <p>
              They tend to leak in a few predictable ways: committed to a code repository, pasted into a public snippet or ticket, left in a configuration file, or captured by an infostealer from a developer&apos;s machine.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bug className="w-5 h-5 text-primary" />
              <h3 className="font-montserrat font-bold text-foreground">Good habits for exposed secrets</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Treat any exposed key as compromised and rotate it, even if it was only public for a short time.',
                'Scope tokens to the smallest set of permissions and repositories they need.',
                'Give tokens an expiry date instead of leaving them valid indefinitely.',
                'Keep a list of which person or system owns each key, so rotation does not stall.',
                'Review service accounts used by build and deploy pipelines on a regular schedule.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our guides cover <Link href="/blog/how-to-protect-your-api-keys-from-dark-web-exposure" className={linkClass}>protecting API keys</Link>, <Link href="/blog/oauth-token-leaks-on-github-and-dark-web-detection-guide" className={linkClass}>OAuth token leaks</Link>, <Link href="/blog/leaked-internal-tool-credentials-jira-confluence-github" className={linkClass}>leaked internal tool credentials</Link> and <Link href="/blog/exposed-service-account-credentials-detection-and-remediation" className={linkClass}>exposed service account credentials</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Triage playbook */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Response</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">A Credential Triage Playbook</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              When a leaked credential turns up, speed matters more than perfect analysis. This order of work, based on NIST and CISA guidance, keeps the riskiest accounts first.
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
          <p className="mt-10 text-muted-foreground leading-relaxed">
            For attacks that get around MFA, see <Link href="/blog/how-mfa-bypass-techniques-exploit-leaked-credentials" className={linkClass}>how MFA bypass techniques exploit leaked credentials</Link>.
          </p>
        </div>
      </section>

      {/* California law, briefly */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">California Law</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Where California Breach Law Comes In</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              California&apos;s breach notification law, Civil Code 1798.82, includes a username or email address combined with a password or security question and answer that would permit access to an online account.
            </p>
            <p>
              That means a leak of your customers&apos; login credentials for your product can raise notice questions, not only a leak of names and ID numbers.
            </p>
            <p>
              For notice timing, the Attorney General rule, reasonable security and the CCPA right of action, see our <Link href="/data-breach-monitoring/california" className={linkClass}>California data breach monitoring</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* SaaS context */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Tech Sector</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Credentials and Customer Trust in SaaS</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Security reviews and audits</h3>
              <p>Enterprise buyers ask how you protect access. Frameworks such as <Link href="/compliance/soc-2" className={linkClass}>SOC 2</Link> and <Link href="/compliance/iso-27001" className={linkClass}>ISO 27001</Link> expect controls around access and incident handling. Credential alerts can feed those processes. See <Link href="/industries/saas-technology" className={linkClass}>SaaS and technology</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Fintech and payments</h3>
              <p>Admin and API access to payment systems needs the tightest control. See <Link href="/industries/crypto-fintech" className={linkClass}>crypto and fintech</Link> and <Link href="/compliance/pci-dss" className={linkClass}>PCI DSS</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Source code</h3>
              <p>Leaked code often carries secrets with it. See <Link href="/blog/how-to-detect-source-code-leaks-on-github-and-dark-web-forums" className={linkClass}>detecting source code leaks</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Brand impersonation</h3>
              <p>Phishing sites that copy your login page are a common way customer credentials get stolen. See our <Link href="/brand-monitoring/los-angeles" className={linkClass}>Los Angeles brand monitoring</Link> page for that angle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports San Francisco Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of your program. It monitors for breached and leaked credentials tied to your domain and sends email notifications when something is found.
            </p>
            <p>
              Those alerts support your reset, rotation and incident response steps. They do not replace them, and no tool makes an organization compliant with any law or framework.
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
              See which logins are already exposed
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

      <OtherLocations currentHref="/credential-monitoring/san-francisco" />

      <FinalCTA />

    </div>
  
  );
}
