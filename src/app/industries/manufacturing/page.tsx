import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Factory,
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
  title: "Manufacturing Dark Web Monitoring",
  description:
    "Dark web monitoring for manufacturers: stolen designs, production ransomware, supplier logins, and defense supply-chain exposure.",
  ...pageSeo("/industries/manufacturing"),
};

const threats = [
  {
    icon: FileWarning,
    title: "Design and process file theft",
    desc: "CAD assemblies, CNC programs, formulations, and test procedures copied out of file servers and offered or posted outside the company.",
  },
  {
    icon: Key,
    title: "Remote access into the plant",
    desc: "VPN, RDP, and vendor-support passwords that open a path from the corporate network toward engineering workstations and production systems.",
  },
  {
    icon: AlertTriangle,
    title: "Ransomware pressure on production",
    desc: "Leak-site posts and stolen logins used to stall shipping, quality, and planning even when the safety PLC itself is never rewritten.",
  },
  {
    icon: Database,
    title: "Supplier and vendor credential leaks",
    desc: "Buyer, portal, and maintenance-vendor accounts replayed against email, supplier portals, and remote-support tools.",
  },
  {
    icon: Shield,
    title: "Defense supply-chain exposure",
    desc: "Program names, technical data, and engineer or buyer credentials taken from companies that build parts for defense work.",
  },
  {
    icon: Eye,
    title: "Fake portals and lookalike domains",
    desc: "Pages that imitate a supplier portal or a plant remote-access page in order to collect another round of passwords.",
  },
];

const watchItems = [
  {
    label: "Company domain credentials",
    desc: "Employee, contractor, and engineer logins for domains you register, including accounts reused from a laptop onto plant remote access.",
  },
  {
    label: "VPN, RDP, and support accounts",
    desc: "Usernames tied to remote-access gateways and vendor-support tools, which are a practical route onto the network that runs production.",
  },
  {
    label: "Portals you operate",
    desc: "Supplier, quality, and customer portals on domains you control, so a leaked portal password is visible to your security team.",
  },
  {
    label: "Ransomware leak-site posts",
    desc: "Posts that name the company, a plant, or a product line, including descriptions of drawings, bills of material, or customer files.",
  },
  {
    label: "Forum offers of files or access",
    desc: "Underground posts offering network access or files that match product, tooling, or program names you asked DarkThreat to watch.",
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
    desc: "Domains, remote-access hostnames, portals you operate, and product or program names that would matter if they appeared in a stolen-data post.",
  },
  {
    num: "02",
    title: "Read the match",
    desc: "A security contact reviews the finding in the web UI or from the email notification included on published plans.",
  },
  {
    num: "03",
    title: "Reset and check access",
    desc: "The plant and IT teams reset the account on their own systems and check whether that identity was used on remote access.",
  },
  {
    num: "04",
    title: "Keep the record",
    desc: "Save the alert, the account, and the action taken so it can support incident handling. The record helps. It is not an assessment result.",
  },
];

const schema = serviceSchema(
  "Dark Web Monitoring for Manufacturing",
  "Dark web monitoring that helps manufacturers watch for stolen designs, production-impacting ransomware exposure, supplier credential leaks, and defense supply-chain exposure.",
  "https://darkthreat.ai/industries/manufacturing",
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Manufacturing" },
]);

const reading = [
  {
    href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained",
    title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained",
  },
  {
    href: "/blog/how-rdp-credentials-fuel-ransomware-the-dark-web-connection",
    title: "How RDP Credentials Fuel Ransomware — The Dark Web Connection",
  },
  {
    href: "/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response",
    title: "Leaked VPN Credentials on the Dark Web: Monitoring and Response",
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
                { label: "Manufacturing" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Factory className="w-4 h-4 mr-2" /> Manufacturing Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Manufacturing</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Manufacturers hold drawings, machine programs, supplier terms, and the remote-access
            accounts that keep a line running. DarkThreat watches external sources for stolen
            credentials and leaked files so the security team can act while production is still
            up.
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
              Why manufacturers are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A plant is valuable for more than the customer list on the office network. The
              same company holds design files, process knowledge, and a schedule that hurts when
              it stops. Four exposure patterns show up in manufacturing again and again.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Intellectual property
              </h3>
              <p className="mb-6">
                Tooling drawings, CAD assemblies, CNC programs, weld procedures, formulations,
                and test methods are compact files with a long commercial life. A buyer, a
                competitor, or a broker does not need the whole factory. They need a copy.
              </p>
              <p className="mb-6">
                Those files leave through a compromised engineer laptop, a file share opened
                with a stolen password, or a project folder synced to a personal cloud account.
                After the copy exists, it can be offered in a forum post or attached to a
                ransomware leak-site entry under the company name.
              </p>
              <p className="mb-6">
                What counts as intellectual property depends on the plant. A discrete
                manufacturer may be protecting a product family, fixture designs, and the
                programs that run a cell. A process manufacturer may be protecting recipes,
                batch parameters, and quality limits.
              </p>
              <p className="mb-6">
                A job shop may be protecting customer-owned prints that were never supposed to
                leave the building. In each case the harm is the same shape: the file is useful
                to someone else, and the manufacturer may not learn about the copy until a
                customer, a regulator, or a leak site forces the conversation.
              </p>
              <p>
                DarkThreat helps by watching for the company name, plant names, and product or
                program names on leak sites, paste sites, and underground posts. The engineering
                vault, the PDM system, and the permissions on those files stay under the access
                controls the manufacturer already runs. An external finding is a reason to look
                there. It is supporting information for the people who already own the vault.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Ransomware aimed at production and OT
              </h3>
              <p className="mb-6">
                Stopping a line creates pressure to pay. Attackers know that. They also know
                that many plants can be disrupted without rewriting a PLC. A typical path starts
                with a stolen VPN password, an exposed remote desktop, or a vendor-support
                account.
              </p>
              <p className="mb-6">
                From there the intruder looks for file servers, the historian, email, and the
                engineering workstations used to reach the line. Encrypting those IT systems is
                enough to idle shipping, quality release, and planning. Safety systems may keep
                running while the business around them cannot ship.
              </p>
              <p className="mb-6">
                A second move is common in the same campaigns: copy files first, then post a
                sample on a leak site. Drawings, payroll, and customer orders give the crew
                leverage even if the plant network is later restored from backup. That is why
                remote-access credentials and leak-site posts belong in the same watch.
              </p>
              <p className="mb-6">
                The credential is the way in. The leak site is the public proof that files
                already left.{" "}
                <Link
                  href="/blog/how-rdp-credentials-fuel-ransomware-the-dark-web-connection"
                  className="text-primary hover:underline"
                >
                  Stolen remote-desktop logins
                </Link>{" "}
                are traded for this purpose, and{" "}
                <Link
                  href="/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained"
                  className="text-primary hover:underline"
                >
                  a credential leak is a documented step toward ransomware
                </Link>.
              </p>
              <p className="mb-6">
                DarkThreat helps by flagging company credentials in stealer logs and posts that
                name the company on ransomware leak sites. It does not sit on the cell network.
                Controller logic, safety instrumented functions, and the historian remain the
                responsibility of the OT team.
              </p>
              <p>
                Use an external alert as a prompt to check remote-access logs and to isolate the
                account, on systems the manufacturer already operates. For how leak sites are
                used as pressure, see{" "}
                <Link
                  href="/blog/monitoring-ransomware-leak-sites-a-security-teams-guide"
                  className="text-primary hover:underline"
                >
                  monitoring ransomware leak sites
                </Link>.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Supplier and vendor credential leaks
              </h3>
              <p className="mb-6">
                Manufacturers depend on logins held by other companies. Steel and component
                suppliers, tooling shops, logistics portals, outside quality labs, and the
                maintenance vendors who dial into a line all hold credentials that touch the
                operation. A password stolen from a laptop used by a buyer can be replayed
                against email or a supplier portal.
              </p>
              <p className="mb-6">
                A password stolen from a vendor employee who also has a remote-support login can
                be replayed against the plant. The leak often surfaces under the vendor email
                domain, which means a watch limited to the primary corporate website will miss
                it.
              </p>
              <p className="mb-6">
                The practical question for the security team is which identifiers they can
                actually register. Portals the manufacturer operates, on domains it controls,
                can go on the watch list directly. Access that lives entirely on a supplier
                system cannot be monitored as if it were your own network.
              </p>
              <p className="mb-6">
                What you can do is ask critical suppliers which email domains their staff use
                when they reach you, and watch your side of that relationship: the accounts you
                issued, the jump hosts you exposed, and any portal you host for them. DarkThreat
                helps with that external watch. It does not audit the supplier internal network.
              </p>
              <p>
                Two registered notes go further on this pattern:{" "}
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
                  third-party vendor credential monitoring
                </Link>. Pair them with a watch for{" "}
                <Link
                  href="/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response"
                  className="text-primary hover:underline"
                >
                  leaked VPN credentials
                </Link>
                , because vendor access so often arrives through a VPN or a support tool.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Defense supply chain
              </h3>
              <p className="mb-6">
                Companies that machine parts, build electronics, or assemble subsystems for
                defense programs sit on a supply chain that is mapped on purpose. Technical
                data, program names, and the credentials of engineers and buyers are useful both
                for theft and for a later intrusion into a prime or a peer supplier. The same
                companies are the ones CMMC and NIST SP 800-171 are written for when they handle
                federal contract information or controlled unclassified information.
              </p>
              <p className="mb-6">
                A leaked mailbox, a posted drawing, or a stolen VPN login is an incident the
                supplier has to investigate under its own contract. Where DFARS 252.204-7012
                applies, that clause requires safeguarding of covered defense information and
                cyber incident reporting. DarkThreat helps the supplier see external copies of
                credentials and files so the investigation can start from a concrete finding.
                The supplier still has to monitor its own systems, preserve evidence, and report
                through the channel the clause requires.
              </p>
              <p>
                DarkThreat supports that work with external exposure alerts. It does not perform
                a CMMC assessment, it does not score NIST SP 800-171 requirements, and it does
                not make a supplier compliant.
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
              Manufacturing dark web threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six exposure types security teams at plants and defense suppliers can actually
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
              What dark web monitoring watches for in manufacturing
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This watch is external. DarkThreat looks for identifiers you provide in places
              stolen data is posted or sold: stealer-log collections, credential lists, forums,
              paste sites, and ransomware leak sites. It answers questions a plant security lead
              can act on before calling it an incident.
            </p>
            <p>
              Did an employee, contractor, or engineer password for your domain show up in a
              stealer log? Is a VPN, remote-desktop, or vendor-support username for a plant
              gateway being passed around? Did a supplier-portal account you operate appear in a
              credential list?
            </p>
            <p>
              Is the company, a plant name, or a product name on a ransomware leak site, with
              drawings, bills of material, or customer files described? Is someone offering
              access to the network, or offering files that match a program name, in a forum
              post? Are lookalike domains imitating a vendor portal or a remote-access page in
              order to collect more passwords?
            </p>
            <p>
              The same watch will not show traffic on the cell network, ladder logic, or the
              state of a safety PLC. Those belong in the operational technology program,
              including the asset-owner security program described in IEC 62443-2-1. An external
              finding is a reason to check remote-access logs and account use on systems you
              run. It is a complement to that program.
            </p>
            <p>
              Scope the identifiers with the people who know the plant. Corporate IT knows the
              email domains and the VPN. Engineering knows which workstations reach the line and
              which product names would be sensitive in a public post. Procurement knows which
              portals the company hosts for suppliers.
            </p>
            <p>
              A defense program office knows which program names and document markings should be
              treated as sensitive if they appear outside the company. DarkThreat helps once
              those names are on the watch list. It cannot guess a classified program title or a
              private supplier hostname that nobody registered.
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
              A realistic process for a plant and its suppliers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The useful version of this work is ordinary security operations. Someone names the
              identifiers, someone reads the alert, someone resets the account on systems the
              company already runs, and someone keeps the record.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Start with identifiers you can share without opening the production network to a
              new tool. That list usually includes company domains, the email domains employees
              and contractors use, remote-access hostnames you are willing to disclose, supplier
              portals you operate, and product or program names that would be meaningful in a
              leak. A maintenance vendor hostname that you do not control is a conversation with
              that vendor, not a hostname to pretend you can see inside.
            </p>
            <p>
              When a match appears, published plans include email notifications and web UI
              access, so the security contact can read the finding directly. Triage by role. A
              password for an engineer who reaches the line is a different hour of work from a
              password for a marketing alias.
            </p>
            <p>
              The plant team resets the account, checks whether that identity was used on remote
              access, and looks for a second account from the same person. DarkThreat helps by
              putting the external finding in front of that team. The reset, the log review, and
              any isolation of an engineering workstation happen inside the manufacturer
              environment.
            </p>
            <p>
              Keep the alert, the time, the account, and the action you took. Stolen logs are
              copied, so leave the same identifiers on the watch list and look for a repost
              after the reset. For a defense supplier, that record can support incident handling
              under NIST SP 800-171 and the reporting duty in DFARS 252.204-7012 where the
              clause applies.
            </p>
            <p>
              For an operator of industrial automation and control systems, it can support the
              asset-owner security program in IEC 62443-2-1. The record helps the people who own
              the assessment. DarkThreat does not make the organization compliant with any of
              those requirements.
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
              CMMC, NIST SP 800-171, and IEC 62443
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These are real requirements for defined kinds of manufacturers. DarkThreat
              supports external exposure awareness inside a program the company already runs.
              Using DarkThreat does not make a manufacturer compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                CMMC and NIST SP 800-171 for defense suppliers
              </h3>
              <p className="mb-6">
                The Cybersecurity Maturity Model Certification program is defined in{" "}
                <a
                  href="https://www.ecfr.gov/current/title-32/subtitle-A/chapter-I/subchapter-G/part-170"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  32 CFR Part 170
                </a>. It is how the Department of Defense assesses whether defense contractors
                implement required cybersecurity practices for federal contract information and
                controlled unclassified information. CMMC Level 2 is built on the 110 security
                requirements in{" "}
                <a
                  href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r2.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  NIST SP 800-171 Revision 2
                </a>.
              </p>
              <p className="mb-6">
                Level 1 tracks the basic safeguarding requirements in FAR 52.204-21 for federal
                contract information.{" "}
                <a
                  href="https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting."
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  DFARS 252.204-7012
                </a>{" "}
                still requires safeguarding of covered defense information and cyber incident
                reporting where that clause is in the contract.
              </p>
              <p className="mb-6">
                A July 13, 2026 DoD CIO memorandum suspended the November 2026 transition to
                Phase 2 of CMMC implementation. During that suspension, solicitations may
                require only CMMC Level 1 (Self) or Level 2 (Self) assessments.{" "}
                <a
                  href="https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting."
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  DFARS 252.204-7012
                </a>{" "}
                remains in effect.
              </p>
              <p className="mb-6">
                The DoD CIO is conducting a 60-day review, and further guidance is expected when
                that review concludes. The memorandum is{" "}
                <a
                  href="https://dodcio.defense.gov/Portals/0/Documents/Library/ImplementingSuspensionCMMC-PhaseII.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Implementing the suspension of CMMC Phase II
                </a>.
              </p>
              <p className="mb-6">
                CMMC requirements are changing; check the{" "}
                <a
                  href="https://dodcio.defense.gov/cmmc/About/"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  DoD CIO CMMC page
                </a>{" "}
                for the current status.
              </p>
              <p className="mb-6">
                Inside NIST SP 800-171 Rev 2, requirement 3.14.6 calls for monitoring
                organizational systems to detect attacks, and 3.14.7 calls for identifying
                unauthorized use. Family 3.6 covers incident handling, tracking, and reporting.
                Dark web monitoring does not replace monitoring of traffic on the contractor
                systems under 3.14.6.
              </p>
              <p>
                It helps when a stolen credential or a leaked file is the indicator: the finding
                can feed unauthorized-use review under 3.14.7 and the incident record under 3.6.
                That is support for the program the supplier runs. It is not a completed
                control, and it is not a CMMC status.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                IEC 62443 for OT and ICS
              </h3>
              <p className="mb-6">
                <a
                  href="https://webstore.iec.ch/en/publication/62883"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  IEC 62443-2-1:2024
                </a>{" "}
                specifies security-program requirements for the asset owner of an industrial
                automation and control system in operation. The asset owner, including the
                operator, remains accountable for that program: policy, risk treatment, supplier
                expectations, and the procedures used to run the system safely. Other parts of
                the IEC 62443 series cover technical requirements for systems and components.
              </p>
              <p className="mb-6">
                The series is the relevant OT and ICS body of standards for a plant. It is not a
                certificate that a dark web watch can issue.
              </p>
              <p>
                DarkThreat helps an asset owner notice when remote-access credentials,
                engineering logins, or company files show up outside the plant. That notice can
                support the incident and monitoring procedures in the security program. Zones,
                conduits, controller hardening, and safety remain inside the program the asset
                owner runs. DarkThreat does not make an operation conformant with IEC 62443.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related enterprise frameworks
              </h3>
              <p>
                Many manufacturers also map enterprise IT to the NIST Cybersecurity Framework
                and operate an ISO/IEC 27001 information security management system beside the
                plant program. DarkThreat helps those efforts with external credential and
                file-exposure evidence the security team can attach to its own risk record. The
                guides below describe each framework. They are not a statement that DarkThreat
                creates a certified management system.
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
              required to start. Tell us which plants, domains, and supplier portals you need
              watched.
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
