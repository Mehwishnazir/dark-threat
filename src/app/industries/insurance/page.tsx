import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Umbrella,
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
  title: "Insurance Dark Web Monitoring",
  description:
    "Dark web monitoring for insurers: policyholder and claims data, agent and broker logins, administrator leaks, and ransomware exposure.",
  ...pageSeo("/industries/insurance"),
};

const threats = [
  {
    icon: Database,
    title: "Policyholder and claims files",
    desc: "Applications, loss runs, medical notes, and payment records copied out of claims or policy systems and posted or offered outside the company.",
  },
  {
    icon: Key,
    title: "Agent and broker logins",
    desc: "Passwords for carrier portals, agency management systems, and producer email that can be replayed against quoting and binding tools.",
  },
  {
    icon: FileWarning,
    title: "Third-party administrator exposure",
    desc: "Credentials and files at a claims administrator, MGA, or outsourced call center that still point back to the carrier book of business.",
  },
  {
    icon: AlertTriangle,
    title: "Ransomware and extortion",
    desc: "Leak-site posts that name the carrier or agency and describe stolen claim files, used to pressure payment and to prove the copy exists.",
  },
  {
    icon: Eye,
    title: "Lookalike policyholder portals",
    desc: "Fake login pages that imitate a carrier or agency site in order to collect another round of customer and staff passwords.",
  },
  {
    icon: Shield,
    title: "Producer email takeover",
    desc: "A stolen agency mailbox used to redirect premium payments, change loss payees, or send a fraudulent binder.",
  },
];

const watchItems = [
  {
    label: "Carrier and agency domains",
    desc: "Employee, adjuster, and producer logins for domains you register, including accounts reused from a laptop onto a policy or claims portal.",
  },
  {
    label: "Portal accounts you issue",
    desc: "Usernames for quoting, billing, and claims portals the company operates, so a leaked portal password is visible to the security team.",
  },
  {
    label: "Administrator and MGA identifiers",
    desc: "Domains and program names for administrators and MGAs you can actually register. Access that lives only on their network is a contract topic, not a host you can see inside.",
  },
  {
    label: "Leak-site posts",
    desc: "Posts that name the carrier, an agency, or a program, including descriptions of claim files, policy lists, or medical attachments.",
  },
  {
    label: "Forum offers of files or access",
    desc: "Underground posts offering network access or files that match product, agency, or program names you asked DarkThreat to watch.",
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
    desc: "Carrier domains, agency domains you control, portal hostnames, and program names that would matter if they appeared in a stolen-data post.",
  },
  {
    num: "02",
    title: "Read the match",
    desc: "A security contact reviews the finding in the web UI or from the email notification included on published plans.",
  },
  {
    num: "03",
    title: "Reset and check use",
    desc: "The carrier or agency resets the account on its own systems and checks whether that identity was used on a portal or mailbox.",
  },
  {
    num: "04",
    title: "Keep the record",
    desc: "Save the alert, the account, and the action taken so it can support an incident record. The record helps. It is not a certification.",
  },
];

const schema = serviceSchema(
  "Dark Web Monitoring for Insurance",
  "Dark web monitoring that helps insurers and agencies watch for policyholder and claims exposure, agent and broker credential leaks, third-party administrator exposure, and ransomware posts.",
  "https://darkthreat.ai/industries/insurance",
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Insurance" },
]);

const reading = [
  {
    href: "/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk",
    title: "Third-Party Vendor Credential Monitoring — Managing Supply Chain Risk",
  },
  {
    href: "/blog/supply-chain-credential-leaks-monitoring-vendor-exposure",
    title: "Supply Chain Credential Leaks: Monitoring Vendor Exposure",
  },
  {
    href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained",
    title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained",
  },
  {
    href: "/blog/what-is-double-extortion-ransomware-and-how-does-dark-web-monitoring-help",
    title: "What Is Double Extortion Ransomware and How Does Dark Web Monitoring Help",
  },
  {
    href: "/blog/monitoring-ransomware-leak-sites-a-security-teams-guide",
    title: "Monitoring Ransomware Leak Sites: A Security Team's Guide",
  },
  {
    href: "/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response",
    title: "Leaked VPN Credentials on the Dark Web: Monitoring and Response",
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
                { label: "Insurance" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Umbrella className="w-4 h-4 mr-2" /> Insurance Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Insurance</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Carriers, agencies, and administrators hold policy files, claim notes, and the
            logins that move premium and pay losses. DarkThreat watches external sources for
            stolen credentials and leaked files so the security team can act while those systems
            are still under company control.
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
              Why insurers and agencies are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An insurance file is useful twice. It identifies a person, and it describes money
              in motion: a premium, a claim payment, or a policy change. Four patterns show up
              around that file.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Policyholder and claims data
              </h3>
              <p className="mb-6">
                A policy application, a loss run, an adjuster note, and a medical attachment are
                compact and specific. A property file can include an address, a mortgagee, and a
                reconstruction estimate. A workers compensation or health claim can include a
                diagnosis, a wage, and a provider.
              </p>
              <p className="mb-6">
                A life or annuity file can include a beneficiary and a payment instruction. Once
                a copy leaves the claims or policy system, it can be offered in a forum or
                described on a ransomware leak site under the carrier or agency name.
              </p>
              <p className="mb-6">
                The copy usually starts with a login, not with a dramatic break of the
                mainframe. An adjuster laptop, a shared claims mailbox, or a portal session
                saved in a browser is enough. The person who takes the file does not need the
                whole book. A sample of claim PDFs is enough to prove the intrusion and to
                pressure the company, and it is enough for someone else to try fraud against the
                policyholder.
              </p>
              <p>
                DarkThreat helps by watching for the carrier name, agency names, and program
                names on leak sites, paste sites, and underground posts. The policy admin system
                and the claims platform stay under the access controls the company already runs.
                An external finding is a reason to look there.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Agent and broker credential leaks
              </h3>
              <p className="mb-6">
                Producers sit between the customer and the carrier. They quote, bind, collect
                premium, and open claims. Their logins reach agency management systems, carrier
                portals, comparative raters, and ordinary email.
              </p>
              <p className="mb-6">
                A password stolen from a producer laptop can be replayed against those tools.
                The same password is often the one used for the mailbox that receives loss
                notices and payment instructions.
              </p>
              <p className="mb-6">
                That mailbox is a practical fraud path. A message from a real agency domain can
                ask a premium finance company to change a draft, or ask an insured to pay a
                lookalike account. The carrier may never see the message if the agency domain is
                the one that was taken. A watch limited to the carrier primary website misses
                the agency domain, the wholesaler domain, and the portal hostname where the
                producer actually works.
              </p>
              <p>
                DarkThreat helps when those domains and portal hostnames are on the watch list.
                It does not sit inside the agency management system. Resetting the producer
                account, checking recent binds, and warning the insured are actions the carrier
                or the agency takes on its own systems. Remote access used by producers is
                covered in{" "}
                <Link
                  href="/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response"
                  className="text-primary hover:underline"
                >
                  leaked VPN credentials
                </Link>.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Third-party administrators
              </h3>
              <p className="mb-6">
                Much of the work is done by someone else. A third-party administrator handles
                claims. A managing general agent binds on the carrier paper.
              </p>
              <p className="mb-6">
                A call center, a print vendor, a medical bill reviewer, or a premium finance
                company holds nonpublic information or a login the carrier issued. Section 4 of
                the NAIC Insurance Data Security Model Law treats third-party service providers
                as part of the licensee information security program, and{" "}
                <a
                  href="https://www.dfs.ny.gov/system/files/documents/2026/07/NYCRR-part-500-Cybersecurity-Regulation.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  23 NYCRR 500.11
                </a>{" "}
                requires a written third-party service provider security policy for NYDFS
                covered entities. The operational fact is simpler: the file can leave through a
                company that is not the name on the policy.
              </p>
              <p className="mb-6">
                What you can register with a dark web watch is narrower than the contract.
                Portals the carrier operates, and email domains it controls, can go on the list.
                A hostname that belongs only to the administrator cannot be monitored as if it
                were the carrier network. The useful step is to record the accounts you issued
                to that administrator, the program names that would identify a leak, and the
                notice path in the contract when the administrator sees an event first.
              </p>
              <p>
                Two registered notes go further on vendor logins:{" "}
                <Link
                  href="/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk"
                  className="text-primary hover:underline"
                >
                  third-party vendor credential monitoring
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/supply-chain-credential-leaks-monitoring-vendor-exposure"
                  className="text-primary hover:underline"
                >
                  supply-chain credential leaks
                </Link>.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Ransomware and extortion
              </h3>
              <p className="mb-6">
                Ransomware crews do not need to understand underwriting. They need a login, a
                file share of claim PDFs, and a leak site. Encrypting the agency or the carrier
                office systems can stop quoting, issuing checks, and answering insureds.
              </p>
              <p className="mb-6">
                Copying the files first, then posting a sample, adds a second demand: pay, or
                the claim notes stay public. That sequence is why stolen credentials and
                leak-site posts belong in the same watch.{" "}
                <Link
                  href="/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained"
                  className="text-primary hover:underline"
                >
                  A credential leak is a documented step toward ransomware
                </Link>
                , and{" "}
                <Link
                  href="/blog/what-is-double-extortion-ransomware-and-how-does-dark-web-monitoring-help"
                  className="text-primary hover:underline"
                >
                  double extortion
                </Link>{" "}
                is the pattern of stealing files and then posting them.
              </p>
              <p>
                DarkThreat helps by flagging company credentials in stealer logs and posts that
                name the carrier or agency on ransomware leak sites. It does not restore a
                claims system or negotiate a payment. Those decisions stay with the company, its
                counsel, and its regulators. For how leak sites are used as pressure, see{" "}
                <Link
                  href="/blog/monitoring-ransomware-leak-sites-a-security-teams-guide"
                  className="text-primary hover:underline"
                >
                  monitoring ransomware leak sites
                </Link>.
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
              Insurance dark web threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six exposure types a carrier, agency, or administrator security team can
              investigate from an external alert.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.desc}
                </p>
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
              What dark web monitoring watches for in insurance
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This watch is external. DarkThreat looks for identifiers you provide in places
              stolen data is posted or sold: stealer-log collections, credential lists, forums,
              paste sites, and ransomware leak sites. It answers questions a security lead at a
              carrier or an agency can act on.
            </p>
            <p>
              Did an adjuster, underwriter, or producer password for your domain show up in a
              stealer log? Did a quoting or claims portal account you operate appear in a
              credential list? Is the carrier, an agency, or a program name on a ransomware leak
              site, with claim files or policy lists described?
            </p>
            <p>
              Is someone offering access to the network, or offering files that match a book of
              business, in a forum post? Are lookalike domains imitating a policyholder portal
              in order to collect more passwords?
            </p>
            <p>
              The same watch will not show activity inside the policy admin system, the claims
              platform, or the administrator data center. Those stay with the teams that run
              them. An external finding is a reason to disable the account, review recent policy
              changes and payments, and start the incident record the applicable statute expects
              the licensee to keep.
            </p>
            <p>
              Scope the identifiers with the people who know the book. Information security
              knows the corporate domains and the VPN. Distribution knows which agency and MGA
              domains connect to carrier portals.
            </p>
            <p>
              Claims knows which administrator program names would be sensitive in a public
              post. DarkThreat helps once those names are on the watch list. It cannot guess a
              private administrator hostname that nobody registered.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchItems.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
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
              A realistic process for a carrier and its producers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The useful version of this work is ordinary security operations. Someone names the
              identifiers, someone reads the alert, someone resets the account on systems the
              company already runs, and someone keeps the record.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Start with identifiers you can share. That list usually includes carrier domains,
              agency domains you control, portal hostnames, and program or agency names that
              would be meaningful in a leak. An administrator system you do not operate is a
              contract and a notice clause, not a network to pretend you can see inside.
            </p>
            <p>
              When a match appears, published plans include email notifications and web UI
              access, so the security contact can read the finding directly. Triage by role. A
              password for a producer who can bind is a different hour of work from a password
              for a marketing alias.
            </p>
            <p>
              The team resets the account, checks whether that identity changed a policy, a loss
              payee, or a payment instruction, and looks for a second account from the same
              person. DarkThreat helps by putting the external finding in front of that team.
              The reset and the log review happen inside the company environment.
            </p>
            <p>
              Keep the alert, the time, the account, and the action you took. Stolen logs are
              copied, so leave the same identifiers on the watch list and look for a repost
              after the reset. Where 23 NYCRR Part 500, an enacted version of NAIC model 668, or
              GLBA safeguards apply, that record can support the investigation and notice duties
              in those texts.
            </p>
            <p>
              The record helps the people who own the program. DarkThreat does not make the
              organization compliant with any of them.
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
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
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
              NYDFS Part 500, NAIC model 668, and GLBA
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These requirements apply to defined licensees, not to every company that sells a
              policy. DarkThreat supports external exposure awareness inside a program the
              company already runs. Using DarkThreat does not make an insurer, agency, or
              administrator compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                NYDFS 23 NYCRR Part 500
              </h3>
              <p className="mb-6">
                <a
                  href="https://www.dfs.ny.gov/system/files/documents/2026/07/NYCRR-part-500-Cybersecurity-Regulation.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  23 NYCRR Part 500
                </a>{" "}
                is the New York Department of Financial Services cybersecurity regulation. It
                applies to covered entities that operate under a license, registration, charter,
                certificate, permit, accreditation, or similar authorization under the New York
                Banking Law, Insurance Law, or Financial Services Law. That includes many New
                York licensed insurers, agents, and brokers.
              </p>
              <p className="mb-6">
                It does not, by itself, cover an insurer that is not a NYDFS covered entity.
                Section 500.19 lists exemptions. The department posts the text at{" "}
                <a
                  href="https://www.dfs.ny.gov/cybersecurity/23-NYCRR-Part-500"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  dfs.ny.gov/cybersecurity/23-NYCRR-Part-500
                </a>.
              </p>
              <p className="mb-6">
                Section 500.2 requires a cybersecurity program. Section 500.11 requires written
                policies for information systems and nonpublic information accessible to or held
                by third-party service providers. Section 500.16 requires incident response and
                business continuity plans, and it names ransomware as a disruptive event those
                plans must address.
              </p>
              <p>
                Section 500.17(a) requires notice to the superintendent as promptly as possible
                and in no event later than 72 hours after determining that a cybersecurity
                incident has occurred at the covered entity, an affiliate, or a third-party
                service provider. DarkThreat helps when a stolen credential or a leaked file is
                the event that starts that work. It does not file the notice, and it does not
                make a covered entity compliant with Part 500.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                NAIC Insurance Data Security Model Law
              </h3>
              <p className="mb-6">
                NAIC model 668, the{" "}
                <a
                  href="https://content.naic.org/sites/default/files/model-law-668.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Insurance Data Security Model Law
                </a>
                , is a model for state legislatures. It is not a statute in a state until that
                state enacts it, and the enacted text can differ from the model. The model
                applies, where adopted, to licensees of the state insurance department,
                including insurers and producers as the state defines them. Section 4 requires a
                written information security program, including oversight of third-party service
                providers.
              </p>
              <p className="mb-6">
                Section 5 requires investigation of a cybersecurity event, including an event in
                a system maintained by a third-party service provider. Section 6 requires notice
                to the commissioner as promptly as possible but in no event later than 72 hours
                from a determination that a cybersecurity event has occurred, when the model
                criteria are met. One of those criteria, as written in the model, is a
                reasonable belief that nonpublic information of 250 or more consumers residing
                in the state is involved and that an additional harm or notice condition is met.
                The state statute controls.
              </p>
              <p>
                NAIC publishes an adoption status brief, current as of the date on that brief:{" "}
                <a
                  href="https://content.naic.org/sites/default/files/government-affairs-brief-data-security-model-law.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Insurance Data Security Model Law implementation
                </a>. A drafting note in model 668 says the drafters intend that a licensee in
                compliance with 23 NYCRR 500 is also in compliance with the model. That note
                does not extend Part 500 to other states, and it does not mean a dark web watch
                satisfies either text. DarkThreat helps a licensee notice external copies of
                credentials and files so the investigation in Section 5 can start from a
                concrete finding.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                GLBA, where it applies
              </h3>
              <p className="mb-6">
                The Gramm-Leach-Bliley Act treats insurance as a financial activity.{" "}
                <a
                  href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section6801&num=0&edition=prelim"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  15 U.S.C. 6801
                </a>{" "}
                requires financial institutions to respect the privacy of customers and to
                protect the security and confidentiality of customer nonpublic personal
                information.{" "}
                <a
                  href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section6805&num=0&edition=prelim"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  15 U.S.C. 6805
                </a>{" "}
                assigns enforcement for persons engaged in providing insurance, under state
                insurance law, to the applicable state insurance authority. GLBA is relevant to
                an insurer or producer that is a financial institution holding customer
                nonpublic personal information. It is not a substitute for Part 500 or for a
                state data security statute, and it does not apply the same way to every vendor
                that touches a claim file.
              </p>
              <p>
                DarkThreat helps by surfacing stolen logins and leaked files that contain that
                customer information. The safeguards program, the privacy notice, and any
                customer notice stay with the institution and its state insurance regulator.
                DarkThreat does not make an institution compliant with GLBA.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related frameworks
              </h3>
              <p className="mb-6">
                Health plans and other health insurers that are HIPAA covered entities also
                protect protected health information under that statute. Many carriers map
                enterprise IT to the NIST Cybersecurity Framework and operate an ISO/IEC 27001
                information security management system beside the insurance-specific program.
                DarkThreat helps those efforts with external credential and file-exposure
                evidence the security team can attach to its own risk record.
              </p>
              <p>
                The guides below describe those frameworks. They are not a statement that
                DarkThreat creates a certified management system or a HIPAA compliance program.
              </p>
              <ComplianceGuideLinks slugs={["hipaa", "nist-csf", "iso-27001"]} />
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
              required to start. Tell us which carrier domains, agency portals, and program
              names you need watched.
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
