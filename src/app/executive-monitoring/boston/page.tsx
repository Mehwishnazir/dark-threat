import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Lock, CheckCircle2, ArrowRight, MapPin, Shield, ExternalLink, Mail, UserX, FileText, Globe, Users, IdCard } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import OtherLocations from "@/components/OtherLocations";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

const PAGE_DESCRIPTION = "Executive monitoring for Boston organizations, with a plain-English guide to Massachusetts breach law (M.G.L. c. 93H) and 201 CMR 17.00.";

export const metadata: Metadata = {
  title: "Executive Monitoring in Boston",
  description: PAGE_DESCRIPTION,
  ...pageSeo("/executive-monitoring/boston"),
};

const exposures = [
  { icon: Mail, title: 'Work Email Credentials', desc: 'Leaked executive passwords, sometimes reused from personal sites, that open the mailbox attackers most want.' },
  { icon: UserX, title: 'CEO Fraud & BEC', desc: 'Impersonation of leaders to push urgent payments or data requests to finance and HR staff.' },
  { icon: IdCard, title: 'HR & Payroll Records', desc: 'Files containing leaders\u2019 Social Security or bank account numbers, which Massachusetts law treats as personal information.' },
  { icon: FileText, title: 'Board & Deal Documents', desc: 'Board packs, strategy decks and deal materials that leak through shared drives or compromised accounts.' },
  { icon: Globe, title: 'Look-alike Domains', desc: 'Domains and profiles built to impersonate your leadership team in phishing aimed at staff or partners.' },
  { icon: Users, title: 'Assistants & Delegates', desc: 'Executive assistants and delegates with mailbox or calendar access, whose credentials carry the same risk.' },
];

const controls = [
  { control: 'Identify and assess reasonably foreseeable internal and external risks', cite: '17.03(2)(b)', help: 'Executive credential exposure is a foreseeable external risk. Alerts give your risk assessment real evidence.' },
  { control: 'Secure user authentication, including password control and blocking access after repeated failed attempts', cite: '17.04(1)', help: 'A leaked executive password is a prompt to reset it and confirm lockout and MFA settings are working.' },
  { control: 'Reasonable monitoring of systems for unauthorized use of or access to personal information', cite: '17.04(4)', help: 'Internal monitoring sees your network. Dark web monitoring adds a view of what has already left it.' },
  { control: 'Prevent terminated employees from accessing records', cite: '17.03(2)(e)', help: 'Credentials belonging to departed leaders that surface later can reveal accounts that were never fully closed.' },
  { control: 'Oversee service providers by selecting capable providers and requiring safeguards by contract', cite: '17.03(2)(f)', help: 'Law firms, wealth managers and agencies hold executive data too. Exposure tied to them is worth knowing about.' },
  { control: 'Review security measures at least annually, and document post-incident reviews', cite: '17.03(2)(i)\u2013(j)', help: 'A record of exposure alerts and how you responded feeds both reviews.' },
];

const sources = [
  { label: 'M.G.L. c. 93H, § 1: Definitions', href: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section1' },
  { label: 'M.G.L. c. 93H, § 3: Duty to report known security breach', href: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section3' },
  { label: 'M.G.L. c. 93H, § 3A: Credit monitoring for breaches including Social Security numbers', href: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section3A' },
  { label: 'M.G.L. c. 93H, § 6: Enforcement', href: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section6' },
  { label: '201 CMR 17.00: Standards for the Protection of Personal Information of MA Residents', href: 'https://www.mass.gov/regulations/201-CMR-1700-standards-for-the-protection-of-personal-information-of-ma-residents' },
  { label: 'Mass.gov: Obligations under the Data Security Regulations and Breach Notification Law', href: 'https://www.mass.gov/info-details/obligations-under-the-data-security-regulations-and-breach-notification-law' },
  { label: 'Mass.gov: Reporting data breaches to the Attorney General\u2019s Office', href: 'https://www.mass.gov/info-details/reporting-data-breaches-to-the-attorney-generals-office' },
  { label: 'Mass.gov: Reporting data breaches to OCABR', href: 'https://www.mass.gov/info-details/reporting-data-breaches-to-the-office-of-consumer-affairs-and-business-regulation-ocabr' },
];

const faqs = [
  {
    q: 'Is a leaked executive email password a breach under Massachusetts law?',
    a: 'Not by itself. Chapter 93H defines personal information as a name combined with a Social Security number, driver\u2019s licence or state ID number, or a financial account or card number. A leaked email password is still a serious risk, and it may lead to records that are covered.',
  },
  {
    q: 'Who must be notified after a Massachusetts breach?',
    a: 'The Attorney General, the Office of Consumer Affairs and Business Regulation (OCABR) and affected residents, as soon as practicable and without unreasonable delay. OCABR may also identify consumer reporting agencies or state agencies to notify.',
  },
  {
    q: 'Does 201 CMR 17.00 apply to us if we only hold employee data?',
    a: 'It can. The regulation applies to persons that own or license personal information about Massachusetts residents, and it defines that to include having access to personal information in connection with employment. Ask your counsel to confirm your position.',
  },
  {
    q: 'Will DarkThreat make us compliant with 93H or 201 CMR 17.00?',
    a: 'No tool can do that. DarkThreat supports the detection side of your security program by helping you find exposed credentials and leaked data. Your written information security program and breach decisions stay with your leadership and counsel.',
  },
  {
    q: 'How can we try DarkThreat?',
    a: 'DarkThreat offers a 7-day free trial with no credit card required. Paid plans start from $288 per month. See the pricing page for plan details.',
  },
];

const schema = {
  ...serviceSchema('Executive Monitoring in Boston', PAGE_DESCRIPTION, 'https://darkthreat.ai/executive-monitoring/boston'),
  areaServed: {
    '@type': 'Place',
    name: 'Boston'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Boston Executive Monitoring', url: 'https://darkthreat.ai/executive-monitoring/boston' }
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Boston' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> For Boston Organizations
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Enterprise Executive Monitoring for <span className="glow-text">Boston</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Massachusetts sets specific data security rules in 201 CMR 17.00, and leaders&apos; accounts are high-value targets for attackers. DarkThreat helps Boston organizations watch for exposed executive credentials, so security teams can act before an account is misused.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/pricing" className="border-primary/30 hover:border-primary">Start 7-Day Free Trial</Link>
          </div>
        </div>
      </section>

      {/* Executive exposures */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Executive Risk</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Why Executive Exposure Is Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Leaders have broad access, public profiles and authority to approve payments. That makes their exposure worth more to attackers than an average account.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exposures.map((t) => (
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
            Read the <Link href="/blog/executive-credential-exposure-on-dark-web-c-suite-risk-guide" className={linkClass}>C-suite credential exposure guide</Link> and <Link href="/blog/how-dark-web-monitoring-prevents-ceo-fraud-and-bec-attacks" className={linkClass}>how monitoring helps prevent CEO fraud and BEC</Link>.
          </p>
        </div>
      </section>

      {/* Narrow definition */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">M.G.L. c. 93H</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">A Narrow Definition, and Why It Matters for Executives</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Massachusetts&apos; breach law is Chapter 93H of the General Laws. It defines personal information as a resident&apos;s name combined with a Social Security number, a driver&apos;s licence or state ID number, or a financial account or card number.
            </p>
            <p>
              The definition does not include an email address and password on their own.
            </p>
            <p>
              So a leaked executive mailbox password may not trigger a Chapter 93H notice by itself. But it is often the first step toward records that do, such as payroll files, HR records or bank details shared by email.
            </p>
            <p>
              201 CMR 17.00 also treats password control and authentication as a core security requirement. A leaked executive password is a signal to act on, whether or not it is notifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Notice rules */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Breach Notice</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">If Covered Data Leaks: Massachusetts Notice Rules</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              Notice duties start when a business knows or has reason to know of a breach, or that a resident&apos;s personal information was acquired or used without authorization.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <ul className="space-y-3">
              {[
                'Notify the Attorney General, OCABR and affected residents as soon as practicable and without unreasonable delay.',
                'Tell the Attorney General and OCABR whether you maintain a written information security program, and what steps you are taking, including updates to it.',
                'Do not delay notice because the total number of affected residents is not yet known. Send updates as you learn more.',
                'Keep the nature of the breach and the number affected out of the resident notice, and send a sample of it to the Attorney General and OCABR.',
                'If Social Security numbers are involved, offer at least 18 months of free credit monitoring, or 42 months for consumer reporting agencies.',
                'Do not ask residents to waive their private right of action as a condition of credit monitoring.',
                'If you store data you do not own, notify the owner or licensor as soon as practicable and cooperate with them.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              OCABR is required to post sample consumer notices on its website, generally within one business day of receipt. The Attorney General can enforce Chapter 93H under Chapter 93A, the state consumer protection law.
            </p>
            <p>
              Whether a specific exposure is notifiable is a question for your counsel. Executive data that leaks with board materials raises its own questions; see <Link href="/blog/leaked-board-meeting-materials-detection-and-impact-analysis" className={linkClass}>leaked board meeting materials</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 201 CMR 17 mapping */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">201 CMR 17.00</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">201 CMR 17.00 Controls Through an Executive Lens</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            <p>
              201 CMR 17.00 requires every person that owns or licenses personal information about a Massachusetts resident to keep a written, comprehensive information security program. &ldquo;Owns or licenses&rdquo; includes having access to personal information in connection with employment, so employee records alone can bring an employer into scope.
            </p>
            <p>
              The regulation does not mention executive or dark web monitoring. The table shows where monitoring can help with controls it does require.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-card/60">
                <tr>
                  <th scope="col" className="p-4 font-montserrat font-bold text-foreground">Requirement</th>
                  <th scope="col" className="p-4 font-montserrat font-bold text-foreground whitespace-nowrap">201 CMR</th>
                  <th scope="col" className="p-4 font-montserrat font-bold text-foreground">Where executive monitoring helps</th>
                </tr>
              </thead>
              <tbody>
                {controls.map((c) => (
                  <tr key={c.cite} className="border-t border-border align-top">
                    <td className="p-4 text-foreground leading-relaxed">{c.control}</td>
                    <td className="p-4 text-muted-foreground whitespace-nowrap">{c.cite}</td>
                    <td className="p-4 text-muted-foreground leading-relaxed">{c.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Teams aligning this program with an outside framework often use <Link href="/compliance/soc-2" className={linkClass}>SOC 2</Link> or the <Link href="/compliance/nist-csf" className={linkClass}>NIST Cybersecurity Framework</Link>.
          </p>
        </div>
      </section>

      {/* Boston sectors */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Boston Sectors</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Executive Risk in Boston&apos;s Common Sectors</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Higher education and research</h3>
              <p>University leaders, deans and principal investigators manage research funding and sensitive data, often across many shared systems. See <Link href="/industries/education" className={linkClass}>education</Link> and <Link href="/blog/credential-leak-detection-for-educational-institutions" className={linkClass}>credential leak detection for educational institutions</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Healthcare and life sciences</h3>
              <p>Hospital and biotech leaders approve payments and hold research and patient-related data that HIPAA also governs. See <Link href="/industries/healthcare" className={linkClass}>healthcare</Link> and <Link href="/compliance/hipaa" className={linkClass}>HIPAA</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Asset and wealth management</h3>
              <p>Portfolio managers and partners are natural targets for impersonation aimed at clients and wire transfers. See <Link href="/industries/financial-services" className={linkClass}>financial services</Link> and <Link href="/blog/wealth-management-dark-web-risks-protecting-high-net-worth-client-data" className={linkClass}>wealth management dark web risks</Link>.</p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground mb-2">Technology</h3>
              <p>Founders and engineering leaders hold admin rights to code, cloud and customer systems. See <Link href="/industries/saas-technology" className={linkClass}>SaaS and technology</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How DarkThreat supports */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How We Help</span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">How DarkThreat Supports Boston Teams</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              DarkThreat helps with the detection side of executive protection. It monitors for breached and leaked credentials tied to your domain, including leaders&apos; work email addresses, and sends email notifications when something is found.
            </p>
            <p>
              Those alerts support your written information security program and your breach decisions under Chapter 93H. They do not replace either, and no tool makes an organization compliant with Massachusetts law.
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

      <OtherLocations currentHref="/executive-monitoring/boston" />

      <FinalCTA />

    </div>
  
  );
}
