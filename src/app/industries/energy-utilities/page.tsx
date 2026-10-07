import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Zap,
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
  title: "Energy & Utilities Dark Web Monitoring",
  description:
    "Dark web monitoring for energy and utilities: OT remote-access logins, contractor and vendor access, and ransomware that can affect operations.",
  ...pageSeo("/industries/energy-utilities"),
};

const threats = [
  {
    icon: Key,
    title: "OT and ICS remote-access logins",
    desc: "VPN, jump-host, and vendor-support passwords that open a path from the corporate network toward engineering workstations and operations systems.",
  },
  {
    icon: Database,
    title: "Contractor and vendor access",
    desc: "Accounts issued to maintenance firms, integrators, and suppliers, including passwords stolen on a contractor laptop and replayed against a utility portal.",
  },
  {
    icon: AlertTriangle,
    title: "Ransomware against operations",
    desc: "Leak-site posts and stolen logins used to stall billing, scheduling, and the IT systems operators rely on, even when a controller is never rewritten.",
  },
  {
    icon: FileWarning,
    title: "Operations documents in a leak",
    desc: "Network diagrams, operating procedures, and outage plans copied from file servers and described on a leak site under the utility name.",
  },
  {
    icon: Eye,
    title: "Lookalike remote-access pages",
    desc: "Pages that imitate a utility VPN or a vendor portal in order to collect another round of operator and contractor passwords.",
  },
  {
    icon: Shield,
    title: "Shared support accounts",
    desc: "Vendor support logins that several contractors know, so one stolen password can reach more than one site or pipeline console session.",
  },
];

const watchItems = [
  {
    label: "Corporate and operations domains",
    desc: "Employee and operator logins for domains you register, including accounts reused from a laptop onto a remote-access gateway.",
  },
  {
    label: "Remote-access usernames",
    desc: "VPN, jump-host, and support-tool usernames you choose to register, which are a practical route onto the network that supports operations.",
  },
  {
    label: "Contractor accounts you issue",
    desc: "Portal and remote-access accounts the utility or pipeline operator controls. A hostname that belongs only to the contractor is outside that watch.",
  },
  {
    label: "Ransomware leak-site posts",
    desc: "Posts that name the company, a plant, a control center, or a pipeline system, including descriptions of diagrams or operating files.",
  },
  {
    label: "Forum offers of access",
    desc: "Underground posts offering network access or files that match facility or system names you asked DarkThreat to watch.",
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
    desc: "Corporate domains, remote-access hostnames you are willing to disclose, contractor accounts you issue, and facility names that would matter in a leak.",
  },
  {
    num: "02",
    title: "Read the match",
    desc: "A security contact reviews the finding in the web UI or from the email notification included on published plans.",
  },
  {
    num: "03",
    title: "Reset and check access",
    desc: "Operations and IT reset the account on their own systems and check whether that identity was used on remote access.",
  },
  {
    num: "04",
    title: "Keep the record",
    desc: "Save the alert, the account, and the action taken so it can support incident handling. The record helps. It is not a NERC or TSA finding.",
  },
];

const schema = serviceSchema(
  "Dark Web Monitoring for Energy and Utilities",
  "Dark web monitoring that helps energy and utility operators watch for stolen OT remote-access credentials, contractor and vendor logins, and ransomware exposure that can affect operations.",
  "https://darkthreat.ai/industries/energy-utilities",
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Energy & Utilities" },
]);

const reading = [
  {
    href: "/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response",
    title: "Leaked VPN Credentials on the Dark Web: Monitoring and Response",
  },
  {
    href: "/blog/how-rdp-credentials-fuel-ransomware-the-dark-web-connection",
    title: "How RDP Credentials Fuel Ransomware — The Dark Web Connection",
  },
  {
    href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained",
    title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained",
  },
  {
    href: "/blog/supply-chain-credential-leaks-monitoring-vendor-exposure",
    title: "Supply Chain Credential Leaks: Monitoring Vendor Exposure",
  },
  {
    href: "/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk",
    title: "Third-Party Vendor Credential Monitoring — Managing Supply Chain Risk",
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
                { label: "Energy & Utilities" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Zap className="w-4 h-4 mr-2" /> Energy and Utilities Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Energy & Utilities</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Electric operators, pipeline companies, and other utilities depend on remote access
            and on contractors who reach the same systems. DarkThreat watches external sources
            for stolen credentials and leaked files so the security team can act while
            operations are still up.
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
              Why energy and utility operators are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The valuable object is often a login that reaches operations, or a file that
              describes how operations are run. Three patterns cover most of what shows up
              outside the company.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                OT and ICS remote-access credentials
              </h3>
              <p className="mb-6">
                A control room, a substation gateway, a compressor station, and a generation
                site are not reached only from a desk inside the fence. Engineers, operators,
                and vendors connect through a VPN, a jump host, or a support tool. Those
                passwords live on laptops that also browse the web and open email. When a
                stealer log captures the password, the login can be replayed by someone who has
                never visited the site.
              </p>
              <p className="mb-6">
                Getting onto the corporate network is not the same thing as rewriting a
                controller. It is still enough to matter. Scheduling, outage coordination,
                historian access, and the engineering workstation used to reach the process can
                sit on the path behind that remote-access account.
              </p>
              <p className="mb-6">
                A stolen VPN password is therefore an operations problem and an IT problem at
                the same time.{" "}
                <Link
                  href="/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response"
                  className="text-primary hover:underline"
                >
                  Leaked VPN credentials
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/how-rdp-credentials-fuel-ransomware-the-dark-web-connection"
                  className="text-primary hover:underline"
                >
                  stolen remote-desktop logins
                </Link>{" "}
                are the trade that feeds this path.
              </p>
              <p>
                DarkThreat helps by flagging usernames and passwords tied to domains and
                remote-access names you register, when those values appear in stealer logs,
                credential lists, or posts. It does not sit on the control network. Relay
                settings, safety systems, and pipeline controllers remain the responsibility of
                the operations team. Use an external alert as a prompt to disable the account
                and to review remote-access logs on systems the operator already runs.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Contractor and vendor access
              </h3>
              <p className="mb-6">
                Utilities and pipeline operators run with other companies in the room. A relay
                technician, a turbine vendor, a SCADA integrator, a leak-detection supplier, or
                a construction contractor may hold an account the operator issued, or may bring
                a laptop that has already been used on another customer network. The password
                stolen on that laptop can be the operator remote-access password if the
                contractor reused it, or it can be the contractor email account, which is then
                used to phish the operator.
              </p>
              <p className="mb-6">
                Supply-chain expectations already exist for part of this sector. NERC CIP-013,
                Supply Chain Risk Management, is the standard registered responsible entities
                use for supply-chain cyber security risk on applicable bulk electric system
                cyber systems. TSA Security Directive Pipeline-2021-02 series, for designated
                pipeline and LNG operators, covers cybersecurity measures that include access
                control.
              </p>
              <p className="mb-6">
                Neither document is a license to watch a vendor internal network. The practical
                watch is the accounts you issued and the names that would identify your
                facilities in a public post. Check NERC and TSA for the versions currently in
                force before you map a control.
              </p>
              <p>
                DarkThreat helps with that external watch. See{" "}
                <Link
                  href="/blog/supply-chain-credential-leaks-monitoring-vendor-exposure"
                  className="text-primary hover:underline"
                >
                  supply-chain credential leaks
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk"
                  className="text-primary hover:underline"
                >
                  vendor credential monitoring
                </Link>. Asking a critical contractor which email domain its technicians use is a
                procurement step. Pretending to see inside the contractor office network is not.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Ransomware and the effect on operations
              </h3>
              <p className="mb-6">
                Stopping billing, scheduling, or the IT systems that operators use to coordinate
                work creates pressure to pay, even when the physical process is still running.
                Crews often start with a stolen VPN or remote-desktop password, then look for
                file servers and the workstations engineers use. Encrypting those systems can
                idle customer service, outage dispatch, and the business side of a control
                center.
              </p>
              <p className="mb-6">
                Copying files first, then posting a diagram or an operating procedure on a leak
                site, adds a second form of pressure.{" "}
                <Link
                  href="/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained"
                  className="text-primary hover:underline"
                >
                  Credential leaks are a step in that chain
                </Link>.
              </p>
              <p>
                DarkThreat helps by flagging company credentials and posts that name the
                operator on ransomware leak sites. It does not restore a control center and it
                does not decide whether a process should be run manually. Those decisions stay
                with operations. For how leak sites are used, see{" "}
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
              Energy and utility dark web threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six exposure types an electric, pipeline, or utility security team can investigate
              from an external alert.
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
              What dark web monitoring watches for in energy and utilities
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This watch is external. DarkThreat looks for identifiers you provide in places
              stolen data is posted or sold: stealer-log collections, credential lists, forums,
              paste sites, and ransomware leak sites. It is a fit for questions about logins and
              files, not for questions about the live state of a breaker or a compressor.
            </p>
            <p>
              Did an operator, engineer, or contractor password for your domain show up in a
              stealer log? Is a VPN, jump-host, or vendor-support username being passed around?
              Did an account you issued to a maintenance firm appear in a credential list?
            </p>
            <p>
              Is the company, a plant, a control center, or a pipeline system named on a
              ransomware leak site, with diagrams or procedures described? Is someone offering
              access to the network in a forum post? Are lookalike domains imitating a remote
              access page?
            </p>
            <p>
              The same watch will not show traffic on the process network, ladder logic, or the
              state of a safety system. Those belong in the operational technology program. For
              bulk electric registered entities, electronic access into BES cyber systems is
              addressed in the NERC CIP standards discussed below.
            </p>
            <p>
              For operators covered by the TSA Security Directive Pipeline-2021-01 and
              Pipeline-2021-02 series, external connections to operational technology sit inside
              the cybersecurity measures in the current directive. An external credential
              finding is a reason to check remote-access logs. It does not replace either
              program.
            </p>
            <p>
              Not every utility is in both regimes. NERC CIP applies to responsible entities
              registered for the bulk electric system, under the applicability in each standard.
              The TSA pipeline directives apply to owners and operators TSA has notified.
            </p>
            <p>
              A municipal water system, or a gas distribution operator that TSA has not
              designated, can still use the same external watch for its own domains and
              remote-access accounts. That use is a security practice. It does not create a NERC
              or TSA obligation that the statute or directive does not already impose.
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
              A realistic process for operations and corporate security
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Someone names the identifiers, someone reads the alert, someone resets the account
              on systems the operator already runs, and someone keeps the record.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Start with identifiers you can share without opening the process network to a new
              tool. That list usually includes corporate domains, the email domains employees
              and contractors use when you issued the account, remote-access hostnames you are
              willing to disclose, and plant, control-center, or pipeline names that would be
              meaningful in a leak. A vendor engineering server you do not control is a contract
              topic.
            </p>
            <p>
              When a match appears, published plans include email notifications and web UI
              access, so the security contact can read the finding directly. Triage by role. A
              password for an engineer who can reach a jump host is a different hour of work
              from a password for a recruiting alias.
            </p>
            <p>
              Operations and IT reset the account, check whether that identity was used on
              remote access, and look for a second account from the same person or the same
              contractor firm. DarkThreat helps by putting the external finding in front of that
              team. Isolation of a workstation and any change to how a site is operated happen
              inside the operator environment.
            </p>
            <p>
              Keep the alert, the time, the account, and the action you took. Stolen logs are
              copied, so leave the same identifiers on the watch list. For a NERC registered
              entity, the record can support incident handling the entity already runs under its
              CIP program.
            </p>
            <p>
              For an operator covered by the TSA Security Directive Pipeline-2021-01 and
              Pipeline-2021-02 series, it can support the incident response work in the
              directive TSA currently has in force. The record helps the people who own those
              programs. DarkThreat does not make the organization compliant with NERC CIP or
              with a TSA security directive.
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
              NERC CIP and TSA pipeline security directives
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These requirements apply to defined registered entities and to operators TSA has
              designated. DarkThreat supports external exposure awareness inside the program the
              operator already runs. Using DarkThreat does not make an operator compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                NERC CIP for the bulk electric system
              </h3>
              <p className="mb-6">
                NERC Critical Infrastructure Protection standards apply to responsible entities
                subject to each standard, for the bulk electric system cyber assets in that
                standard scope. The standards that matter for the exposures on this page are
                CIP-004, Personnel & Training; CIP-005, Electronic Security Perimeters; and
                CIP-013, Supply Chain Risk Management. Check NERC for the versions currently
                subject to enforcement:{" "}
                <a
                  href="https://www.nerc.com/standards/reliability-standards/cip"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  NERC CIP reliability standards
                </a>.
              </p>
              <p className="mb-6">
                CIP-004, Personnel & Training, is where access authorization and revocation for
                applicable BES cyber systems are handled. CIP-005, Electronic Security
                Perimeters, is where electronic access, including interactive remote access, is
                handled. CIP-013, Supply Chain Risk Management, is where supply-chain cyber
                security risk management plans for applicable BES cyber systems are handled. The
                requirement text depends on the version NERC currently enforces.
              </p>
              <p>
                Dark web monitoring does not implement an electronic security perimeter and does
                not approve vendor risk. It helps when a stolen remote-access credential or a
                leaked file is the indicator the entity uses inside the access-revocation and
                incident process it already runs. That is support. It is not a completed CIP
                requirement, and it is not a finding of compliance.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                TSA pipeline security directives
              </h3>
              <p className="mb-6">
                Pipeline cybersecurity directives that apply here are the TSA Security Directive
                Pipeline-2021-01 and Pipeline-2021-02 series. They apply to owners and operators
                of hazardous liquid and natural gas pipelines, or liquefied natural gas
                facilities, that TSA has designated. A directive served on a designated pipeline
                or LNG operator does not, by itself, apply to an electric distribution utility.
                TSA updates these directives regularly; check{" "}
                <a
                  href="https://www.tsa.gov/sd-and-ea"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  https://www.tsa.gov/sd-and-ea
                </a>{" "}
                for the current versions.
              </p>
              <p>
                The Pipeline-2021-02 series is the mitigation, contingency-planning, and testing
                series. Measures in the current version include access control and awareness of
                external connections to operational technology, along with incident response.
                DarkThreat helps a designated operator notice when remote-access credentials or
                company files show up outside the operation, which can support that incident
                response work. It does not approve a cybersecurity implementation plan, and it
                does not make an operator compliant with the directive.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related enterprise frameworks
              </h3>
              <p>
                Many energy and utility companies also map corporate IT to the NIST
                Cybersecurity Framework and operate an ISO/IEC 27001 information security
                management system beside the OT program. DarkThreat helps those efforts with
                external credential and file-exposure evidence the security team can attach to
                its own risk record. The guides below describe each framework. They are not a
                statement that DarkThreat satisfies NERC CIP, a TSA security directive, or a
                certified management system.
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
              required to start. Tell us which domains, remote-access names, and contractor
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
