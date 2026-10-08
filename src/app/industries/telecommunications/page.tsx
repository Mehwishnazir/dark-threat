import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Radio,
  Shield,
  Lock,
  AlertTriangle,
  Database,
  CheckCircle2,
  ArrowRight,
  Key,
  Eye,
  FileWarning,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Telecommunications Dark Web Monitoring",
  description:
    "Dark web monitoring for carriers: employee and contractor credential leaks, account takeover, customer data on leak sites, and partner access.",
  ...pageSeo("/industries/telecommunications"),
};

const threats = [
  {
    icon: Key,
    title: "Employee and contractor logins",
    desc: "Passwords for care, retail, and network staff that can be replayed against email, a VPN, or a system that reaches customer accounts.",
  },
  {
    icon: AlertTriangle,
    title: "Account takeover and SIM change",
    desc: "A stolen care or retail login used to move a number, change an address of record, or open an online account that exposes call detail.",
  },
  {
    icon: FileWarning,
    title: "Customer data on leak sites",
    desc: "Posts that name the carrier and describe subscriber files, call records, or billing exports copied out of a customer system.",
  },
  {
    icon: Database,
    title: "Partner and reseller access",
    desc: "Logins the carrier issued to a dealer, reseller, or outsourcer, replayed against a portal the carrier operates.",
  },
  {
    icon: Eye,
    title: "Lookalike account pages",
    desc: "Domains that imitate a my-account or dealer portal in order to collect another round of customer and staff passwords.",
  },
  {
    icon: Shield,
    title: "Shared support accounts",
    desc: "Vendor and contractor logins that several people know, so one stolen password can reach more than one support queue.",
  },
];

const watchItems = [
  {
    label: "Carrier domains",
    desc: "Employee, retail, and contractor logins for domains the carrier registers, including accounts reused from a laptop onto a care tool.",
  },
  {
    label: "Account and dealer portals",
    desc: "Hostnames for customer-account and dealer portals the carrier operates. A system that belongs only to a partner is outside that watch.",
  },
  {
    label: "Partner accounts you issue",
    desc: "Usernames the carrier created for resellers and outsourcers on systems the carrier controls.",
  },
  {
    label: "Ransomware leak-site posts",
    desc: "Posts that name the carrier and describe subscriber files, billing exports, or internal support documents.",
  },
  {
    label: "Forum offers of access",
    desc: "Underground posts offering network access or files that match carrier or brand names you asked DarkThreat to watch.",
  },
  {
    label: "Email alerts and the web UI",
    desc: "Published plans include email notifications and web UI access, so a finding can be read without a separate integration project.",
  },
];

const steps = [
  {
    num: "01",
    title: "Name what to watch",
    desc: "Carrier domains, account-portal hostnames, and partner accounts you issued on systems you control.",
  },
  {
    num: "02",
    title: "Read the match",
    desc: "A security contact reviews the finding in the web UI or from the email notification included on published plans.",
  },
  {
    num: "03",
    title: "Reset and check use",
    desc: "The carrier resets the account on its own systems and checks whether that identity reached customer records.",
  },
  {
    num: "04",
    title: "Keep the record",
    desc: "Save the alert, the account, and the action taken. The record can support a breach review. It is not the law-enforcement notice.",
  },
];

const schema = serviceSchema(
  "Dark Web Monitoring for Telecommunications",
  "Dark web monitoring that helps telecommunications carriers watch for stolen employee and contractor credentials, account-takeover exposure, customer data on leak sites, and partner access.",
  "https://darkthreat.ai/industries/telecommunications",
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Telecommunications" },
]);

const reading = [
  {
    href: "/blog/why-stealer-logs-are-a-major-security-threat",
    title: "Why Stealer Logs Are a Major Security Threat",
  },
  {
    href: "/blog/how-credential-leaks-enable-business-email-compromise-bec",
    title: "How Credential Leaks Enable Business Email Compromise (BEC)",
  },
  {
    href: "/blog/typosquatting-detection-finding-fake-versions-of-your-domain",
    title: "Typosquatting Detection — Finding Fake Versions of Your Domain",
  },
  {
    href: "/blog/what-to-do-if-your-credentials-are-leaked-on-the-dark-web",
    title: "What to Do If Your Credentials Are Leaked on the Dark Web",
  },
  {
    href: "/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response",
    title: "Leaked VPN Credentials on the Dark Web: Monitoring and Response",
  },
  {
    href: "/blog/monitoring-ransomware-leak-sites-a-security-teams-guide",
    title: "Monitoring Ransomware Leak Sites: A Security Team's Guide",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb]} />

      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 flex justify-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "Telecommunications" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Radio className="w-4 h-4 mr-2" /> Telecommunications Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Telecommunications</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Carriers hold subscriber records and the staff logins that can change an account.
            DarkThreat watches external sources for stolen credentials and leaked customer files
            so the security team can act while those accounts are still under carrier control.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="hero-button inline-flex items-center">
              Talk with DarkThreat <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cta-outline inline-flex items-center justify-center px-8 py-4 min-h-[44px]"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Why this sector
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why telecommunications providers are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A phone number, a call record, and a care-center login are compact and useful.
              Four patterns show up around that data.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Employee and contractor credential leaks
              </h3>
              <p className="mb-6">
                Care agents, retail staff, field technicians, and the contractors who cover
                nights all receive logins. Those logins reach ticketing tools, account systems,
                and sometimes the VPN used to support the network. A password stolen from a
                laptop can be replayed against the same tools.
              </p>
              <p className="mb-6">
                The leak often surfaces under the carrier email domain, or under a contractor
                domain whose staff were issued a carrier account. A watch limited to the public
                brand site will miss the contractor mailbox. What you can register is the
                domains and portal hostnames the carrier controls.
              </p>
              <p>
                DarkThreat helps by flagging those credentials in stealer logs, credential
                lists, and posts. It does not sit in the care desktop. For how stolen logs are
                traded, see{" "}
                <Link
                  href="/blog/why-stealer-logs-are-a-major-security-threat"
                  className="text-primary hover:underline"
                >
                  why stealer logs are a security threat
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                SIM change and account takeover
              </h3>
              <p className="mb-6">
                Moving a phone number, or taking over the online account tied to it, starts with
                a login someone already trusts. That login may belong to a customer, a retail
                employee, or a care agent. Once the number moves, mail and banking codes that
                use the number can move with it.
              </p>
              <p className="mb-6">
                Where the same account also exposes call detail or other customer proprietary
                network information, the carrier rules on authentication are in 47 CFR 64.2010.
                That section requires reasonable measures against unauthorized access to CPNI,
                and authentication before CPNI is disclosed on a customer call, online, or in a
                store. A separate paragraph on SIM change requests for commercial mobile radio
                providers says compliance with that paragraph is not required until the
                paragraph contains a compliance date. Check the current text before treating it
                as an active duty.
              </p>
              <p>
                DarkThreat helps when a staff or portal password shows up outside the carrier,
                which can be a reason to check whether that identity changed an account. It does
                not authenticate subscribers, and it does not execute or block a SIM change.
                Lookalike pages that collect more passwords are a related watch. See{" "}
                <Link
                  href="/blog/typosquatting-detection-finding-fake-versions-of-your-domain"
                  className="text-primary hover:underline"
                >
                  typosquatting detection
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Customer data on leak sites
              </h3>
              <p className="mb-6">
                A subscriber file is specific. It can include a name, a number, an address, a
                billing contact, and call detail. Once a copy leaves the account system, it can
                be described on a ransomware leak site or offered in a forum under the carrier
                name.
              </p>
              <p className="mb-6">
                The post is a reason to investigate. It is not, by itself, the notice a
                telecommunications carrier sends under the CPNI breach rule. That notice has its
                own recipients and its own timing, described below. The external finding can
                still be the fact that starts the internal review.
              </p>
              <p>
                DarkThreat helps by watching for the carrier name and the brands you register on
                leak sites, paste sites, and underground posts. It does not restore the account
                system. For how those posts are used as pressure, see{" "}
                <Link
                  href="/blog/monitoring-ransomware-leak-sites-a-security-teams-guide"
                  className="text-primary hover:underline"
                >
                  monitoring ransomware leak sites
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Partner and reseller access
              </h3>
              <p className="mb-6">
                Dealers, resellers, and outsourced care centers hold logins the carrier issued.
                A password stolen from a partner laptop can be replayed against a dealer portal
                or a ticketing tool on a domain the carrier operates. The leak may surface under
                the partner email domain, not the carrier brand.
              </p>
              <p className="mb-6">
                Access that lives entirely on a partner system cannot be monitored as if it were
                the carrier network. What you can do is watch the accounts you issued and the
                portals you host. Asking a critical partner which email domains its staff use is
                a contract step. Pretending to see inside the partner office is not.
              </p>
              <p>
                DarkThreat helps with that external watch. It does not audit the partner
                network, and it does not decide whether a disclosure of CPNI to that partner was
                allowed. The disclosure limits sit in the CPNI rules, on the carrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Threat landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Telecommunications dark web threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six exposure types a carrier security team can investigate from an external alert.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div key={t.title} className="threat-card">
                <t.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-montserrat font-bold text-foreground text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              What is watched
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              What dark web monitoring watches for in telecommunications
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This watch is external. DarkThreat looks for identifiers you provide in places
              stolen data is posted or sold: stealer-log collections, credential lists, forums,
              paste sites, and ransomware leak sites. It answers questions a carrier security
              lead can act on before treating the event as a CPNI breach.
            </p>
            <p>
              Did an employee, retailer, or contractor password for your domain show up in a
              stealer log? Did a dealer-portal account you operate appear in a credential list?
              Is the carrier named on a ransomware leak site, with subscriber files described?
            </p>
            <p>
              Is someone offering access to the network, or offering files that match a brand,
              in a forum post? Are lookalike domains imitating an account page in order to
              collect more passwords?
            </p>
            <p>
              The same watch will not show activity inside the billing system or the switch.
              Those stay with the teams that run them. An external finding is a reason to check
              account-change logs on systems you run. It does not replace that check, and it
              does not file a notice.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchItems.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              A realistic process for a carrier security team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Someone names the identifiers, someone reads the alert, someone resets the account
              on systems the carrier already runs, and someone keeps the record.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Start with identifiers you can share. That list usually includes carrier domains,
              retail and care email domains, account-portal hostnames, and partner accounts you
              issued. A dealer system you do not control is a contract topic.
            </p>
            <p>
              When a match appears, published plans include email notifications and web UI
              access, so the security contact can read the finding directly. Triage by role. A
              password for a care agent who can change an account is a different hour of work
              from a password for a marketing alias.
            </p>
            <p>
              The team resets the account, checks whether that identity viewed or changed
              customer records, and looks for a second account from the same person or the same
              partner. DarkThreat helps by putting the external finding in front of that team.
              The reset and the log review happen inside the carrier environment.
            </p>
            <p>
              Keep the alert, the time, the account, and the action you took. Stolen logs are
              copied, so leave the same identifiers on the watch list. Where 47 CFR 64.2011
              applies, that record can support the review the carrier already runs. DarkThreat
              does not make the organization compliant with the CPNI rules.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Requirements that apply
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              FCC CPNI rules and breach notification
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These rules apply to telecommunications carriers, including interconnected VoIP
              providers as the subpart defines that term. They do not, by themselves, apply to a
              handset retailer or a tower contractor that is not a carrier. DarkThreat supports
              external exposure awareness inside the program the carrier already runs. Using
              DarkThreat does not make a carrier compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                47 CFR Part 64 Subpart U
              </h3>
              <p className="mb-6">
                Section 64.2001 states that Subpart U implements section 222 of the
                Communications Act of 1934, 47 U.S.C. 222. The subpart is the Commission set of
                rules on customer proprietary network information. The current text is on{" "}
                <a
                  href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-U"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  eCFR Subpart U
                </a>
                , beginning at{" "}
                <a
                  href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-U/section-64.2001"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  47 CFR 64.2001
                </a>
                .
              </p>
              <p className="mb-6">
                Section 64.2010(a) requires carriers to take reasonable measures to discover and
                protect against attempts to gain unauthorized access to CPNI, and to authenticate
                a customer before disclosing CPNI based on a customer-initiated telephone
                contact, online account access, or an in-store visit. Online access is not
                allowed on readily available biographical information or account information
                alone.
              </p>
              <p>
                DarkThreat helps when a stolen staff or portal credential shows up outside the
                carrier, which can support that discovery work. It does not authenticate
                customers, and it does not make a carrier compliant with section 64.2010. The
                section text is{" "}
                <a
                  href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-U/section-64.2010"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  47 CFR 64.2010
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Breach notification currently in the eCFR
              </h3>
              <p className="mb-6">
                Section 64.2011, as published in the eCFR, defines a breach as occurring when a
                person, without authorization or exceeding authorization, has intentionally
                gained access to, used, or disclosed CPNI. As soon as practicable, and no later
                than seven business days after reasonable determination of the breach, the
                carrier electronically notifies the United States Secret Service and the FBI
                through the central reporting facility.
              </p>
              <p className="mb-6">
                The carrier does not notify customers or disclose the breach publicly until it
                has completed that law-enforcement notification. The current text also says the
                carrier shall not notify customers until seven full business days have passed
                after notification to those agencies, except where the section allows an earlier
                notice or a law-enforcement delay. After that process, the carrier notifies
                affected customers. Breach records are kept for a minimum of two years.
              </p>
              <p className="mb-6">
                A February 12, 2024 Federal Register document made other Commission amendments
                effective on March 13, 2024, but it delayed the amendments to 47 CFR 64.2011
                indefinitely and said the Commission will publish a later document announcing
                that effective date. Use the text now in the eCFR, not a summary of amendments
                that are not yet effective. The delayed-date notice is{" "}
                <a
                  href="https://www.federalregister.gov/documents/2024/02/12/2024-01667/data-breach-reporting-requirements"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Data Breach Reporting Requirements
                </a>
                , and the section is{" "}
                <a
                  href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-U/section-64.2011"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  47 CFR 64.2011
                </a>
                .
              </p>
              <p>
                DarkThreat helps when a leaked file or a stolen credential is the fact that
                starts the carrier review. It does not determine whether access was intentional,
                it does not notify the Secret Service or the FBI, and it does not make a carrier
                compliant with section 64.2011.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related enterprise frameworks
              </h3>
              <p>
                Many carriers also map enterprise IT to the NIST Cybersecurity Framework and
                operate an ISO/IEC 27001 information security management system beside the CPNI
                program. DarkThreat helps those efforts with external credential and
                file-exposure evidence the security team can attach to its own risk record. The
                guides below describe each framework. They are not a statement that DarkThreat
                satisfies Subpart U or creates a certified management system.
              </p>
              <ComplianceGuideLinks slugs={["nist-csf", "iso-27001"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6 text-center">
            Related reading
          </h2>
          <ul className="space-y-3">
            {reading.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-8 pb-16 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl border border-primary/30 p-10 md:p-16 text-center relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 circuit-pattern opacity-40 pointer-events-none" />
          <div className="relative z-10">
            <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              See what is already exposed
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Plans start at $288/mo. A 7-day free trial is available, and no credit card is
              required to start. Tell us which carrier domains, account portals, and partner
              accounts you need watched.
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
    </div>
  );
}
