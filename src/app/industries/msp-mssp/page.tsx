import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Server,
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
  title: "MSP and MSSP Dark Web Monitoring",
  description:
    "Dark web monitoring for MSPs and MSSPs covering technician accounts, RMM and PSA credentials, and client domains named on leak sites.",
  ...pageSeo("/industries/msp-mssp"),
};

const threats = [
  {
    icon: Key,
    title: "Technician account leaks",
    desc: "Passwords for engineer and help-desk accounts that can be replayed against email, the VPN, or a tool that reaches client networks.",
  },
  {
    icon: Database,
    title: "RMM and PSA credentials",
    desc: "Logins for remote monitoring and professional-services tools, where one console can open sessions on many client machines.",
  },
  {
    icon: AlertTriangle,
    title: "One account, many clients",
    desc: "A privileged MSP login reused, or trusted, across customer environments, so a single theft is not limited to one network.",
  },
  {
    icon: FileWarning,
    title: "Client names on leak sites",
    desc: "Posts that name a client, or name the provider, and describe files that could have left through the managed-service path.",
  },
  {
    icon: Eye,
    title: "Lookalike support portals",
    desc: "Pages that imitate a client portal or a remote-tool login in order to collect another round of technician passwords.",
  },
  {
    icon: Shield,
    title: "Shared and leftover access",
    desc: "Vendor-support logins and client accounts that stay active after a technician leaves or a contract ends.",
  },
];

const watchItems = [
  {
    label: "Provider domains",
    desc: "Employee and technician logins for domains the MSP registers, including accounts reused from a laptop onto a remote tool.",
  },
  {
    label: "RMM and PSA hostnames",
    desc: "Tool hostnames the provider is willing to register. A console that belongs only to the software vendor is outside that watch.",
  },
  {
    label: "Client identifiers you may register",
    desc: "Client domains and names the contract allows you to watch. A hostname that belongs only to the client is not your network.",
  },
  {
    label: "Ransomware leak-site posts",
    desc: "Posts that name the provider or a client, including descriptions of runbooks, credential exports, or client files.",
  },
  {
    label: "Forum offers of access",
    desc: "Underground posts offering network access or files that match provider or client names you asked DarkThreat to watch.",
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
    desc: "Provider domains, remote-tool hostnames you can disclose, and client names the contract allows you to register.",
  },
  {
    num: "02",
    title: "Read the match",
    desc: "A security contact reviews the finding in the web UI or from the email notification included on published plans.",
  },
  {
    num: "03",
    title: "Reset and check clients",
    desc: "The provider resets the account on its own systems and checks which client environments that identity could reach.",
  },
  {
    num: "04",
    title: "Keep the record",
    desc: "Save the alert, the account, and the action taken. The record helps the incident conversation. It is not a certification.",
  },
];

const schema = serviceSchema(
  "Dark Web Monitoring for MSPs and MSSPs",
  "Dark web monitoring that helps managed service providers and managed security providers watch for stolen technician credentials, RMM and PSA logins, and client names on leak sites.",
  "https://darkthreat.ai/industries/msp-mssp",
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "MSP and MSSP" },
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
    href: "/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response",
    title: "Leaked VPN Credentials on the Dark Web: Monitoring and Response",
  },
  {
    href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained",
    title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained",
  },
  {
    href: "/blog/monitoring-ransomware-leak-sites-a-security-teams-guide",
    title: "Monitoring Ransomware Leak Sites: A Security Team's Guide",
  },
  {
    href: "/blog/what-to-do-if-your-credentials-are-leaked-on-the-dark-web",
    title: "What to Do If Your Credentials Are Leaked on the Dark Web",
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
                { label: "MSP and MSSP" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Server className="w-4 h-4 mr-2" /> MSP and MSSP Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">MSPs and MSSPs</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A managed provider holds logins that reach more than one customer. DarkThreat watches
            external sources for stolen technician credentials and for client names on leak sites,
            so the security team can act while those accounts are still trusted.
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
              Why MSPs and MSSPs are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The useful object is a login the provider already trusts. Four patterns show up
              around that trust.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                One compromised account, many clients
              </h3>
              <p className="mb-6">
                Managed service providers and managed security providers connect to customer
                environments on purpose. The connection is trusted, and the account is often
                privileged. A password stolen from one technician can therefore be more than an
                internal help-desk problem.
              </p>
              <p className="mb-6">
                CISA, with the NSA, the FBI, and partner agencies, describes that path in the
                joint advisory Protecting Against Cyber Threats to Managed Service Providers and
                their Customers. The advisory says a vulnerable provider can be an initial access
                vector to multiple customer networks, because the provider already has trusted
                connectivity and privileged access.
              </p>
              <p>
                The same advisory tells providers not to reuse admin credentials across customers,
                and it tells both sides to disable accounts that are no longer in use. DarkThreat
                helps when a stolen password for a domain you register shows up outside the
                company. It does not see which clients that account could reach. That map stays
                with the provider.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                RMM and PSA tool credentials
              </h3>
              <p className="mb-6">
                Remote monitoring and management tools, and professional services automation
                tools, are where technician work actually happens. A console can open a session
                on a client machine, reset a password, or read a ticket that contains a
                credential. The login to that console is compact and reusable.
              </p>
              <p className="mb-6">
                Those passwords leave the same way other passwords leave: a technician laptop
                with a stealer, a browser profile synced off the company device, or a password
                reused from email. The leak often surfaces under the provider email domain, or
                under the hostname of the tool, which means a watch limited to a marketing site
                will miss it.
              </p>
              <p>
                DarkThreat helps by flagging credentials tied to domains and hostnames you
                register, when those values appear in stealer logs, credential lists, or posts.
                It does not sit in the RMM console, and it does not enforce multifactor
                authentication on the accounts the advisory treats as privileged. For the remote
                path itself, see{" "}
                <Link
                  href="/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response"
                  className="text-primary hover:underline"
                >
                  leaked VPN credentials
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Technician account leaks
              </h3>
              <p className="mb-6">
                The person who holds the powerful login is often a working engineer, not a named
                executive. Help-desk staff, on-call engineers, and contractors who cover nights
                all receive accounts that can reach tools and clients. A password stolen from
                that laptop is traded like any other corporate password.
              </p>
              <p className="mb-6">
                Triage still depends on role. A password for an engineer who can open client
                sessions is a different hour of work from a password for a marketing alias. The
                provider resets the account, checks whether that identity was used, and looks for
                a second account from the same person.
              </p>
              <p>
                DarkThreat helps by putting the external finding in front of that team. The
                reset and the log review happen inside the provider environment. Two notes go
                further on passwords that move between companies:{" "}
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
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Client domains on leak sites
              </h3>
              <p className="mb-6">
                A ransomware post may name the provider, a client, or both. Files described in
                the post can be runbooks, exports from a ticketing system, or client documents
                that passed through the managed service. The post is public proof that a copy
                exists. It does not, by itself, prove which network was entered first.
              </p>
              <p className="mb-6">
                What you can register is narrower than the client list. Domains the provider
                operates can go on the watch directly. A client domain can go on the watch when
                the contract allows the provider to monitor that name. A hostname that belongs
                only to the client cannot be monitored as if it were the provider network.
              </p>
              <p>
                DarkThreat helps with that external watch. It does not investigate the client
                incident and it does not decide who notifies whom. For how leak sites are used
                as pressure, see{" "}
                <Link
                  href="/blog/monitoring-ransomware-leak-sites-a-security-teams-guide"
                  className="text-primary hover:underline"
                >
                  monitoring ransomware leak sites
                </Link>
                .
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
              MSP and MSSP dark web threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six exposure types a provider security team can investigate from an external alert.
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
              What dark web monitoring watches for at an MSP
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This watch is external. DarkThreat looks for identifiers you provide in places
              stolen data is posted or sold: stealer-log collections, credential lists, forums,
              paste sites, and ransomware leak sites. It answers questions a provider security
              lead can act on before calling a client.
            </p>
            <p>
              Did a technician or engineer password for your domain show up in a stealer log? Is
              a VPN, RMM, or PSA username being passed around? Did an account you issued to a
              contractor appear in a credential list?
            </p>
            <p>
              Is the provider, or a client you are allowed to name, on a ransomware leak site,
              with runbooks or client files described? Is someone offering access to the network
              in a forum post? Are lookalike domains imitating a support portal?
            </p>
            <p>
              The same watch will not show sessions inside the RMM console or traffic on a
              client network. Those belong in the tools and logs the provider already runs. An
              external credential finding is a reason to check whether that identity was used.
              It does not replace that check.
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
              A realistic process for a managed provider
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Someone names the identifiers, someone reads the alert, someone resets the account
              on systems the provider already runs, and someone keeps the record.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Start with identifiers you can share. That list usually includes the provider
              domains, the email domains technicians use, remote-tool hostnames you are willing
              to disclose, and client names the contract allows you to watch. A client server
              you do not control is a contract topic.
            </p>
            <p>
              When a match appears, published plans include email notifications and web UI
              access, so the security contact can read the finding directly. Triage by role. A
              password for an engineer who can open client sessions is a different hour of work
              from a password for a billing alias.
            </p>
            <p>
              The team resets the account, checks whether that identity was used on the remote
              tool, and looks for a second account from the same person. DarkThreat helps by
              putting the external finding in front of that team. Which clients to call, and
              what the contract says about notice, stay with the provider.
            </p>
            <p>
              Keep the alert, the time, the account, and the action you took. Stolen logs are
              copied, so leave the same identifiers on the watch list and look for a repost
              after the reset. The record helps the people who own the incident. DarkThreat does
              not make the organization compliant with any framework.
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
              Guidance for this work
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              CISA guidance for managed service providers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              There is no single statute that turns every MSP into a regulated cybersecurity
              utility. The public guidance that speaks directly to this sector is a joint
              advisory. DarkThreat supports external exposure awareness inside the program the
              provider already runs. Using DarkThreat does not make a provider compliant with
              that advisory.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                The joint advisory on MSP compromise
              </h3>
              <p className="mb-6">
                AA22-131A, Protecting Against Cyber Threats to Managed Service Providers and
                their Customers, was published by CISA with the NSA, the FBI, and the
                cybersecurity agencies of the United Kingdom, Australia, Canada, and New
                Zealand. It defines an MSP as an entity that delivers, operates, or manages ICT
                services for customers under a contract. The text is{" "}
                <a
                  href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-131a"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  AA22-131A
                </a>
                .
              </p>
              <p className="mb-6">
                The advisory is guidance. It says organizations should implement the measures as
                appropriate to their environments and in line with regulations that already
                apply to them. It recommends multifactor authentication on accounts that access
                customer environments, a stop to reusing admin credentials across customers, and
                disabling accounts that are no longer in use, including MSP accounts left behind
                when a contract ends.
              </p>
              <p>
                DarkThreat helps when a stolen technician credential, or a post that names the
                provider or a registered client, shows up outside the company. That finding can
                support the account review and the incident conversation the advisory describes.
                It does not log customer networks, it does not enforce authentication, and it
                does not make an MSP or an MSSP compliant with the advisory.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                What DarkThreat publishes for providers
              </h3>
              <p className="mb-6">
                Published plans that list a price start at $288/mo. A 7-day free trial is
                available, and no credit card is required to start. Those plans include email
                notifications and web UI access. They are the plans described on the pricing
                page for a listed monthly rate.
              </p>
              <p>
                DarkThreat also lists an MSSP (white-label) plan at custom pricing. A quote for
                that plan is a conversation, not a rate printed on the card. The pricing page is
                the source for that offer. This page does not add features beyond what that page
                states.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related enterprise frameworks
              </h3>
              <p>
                Many providers also map their own IT to the NIST Cybersecurity Framework and
                operate an ISO/IEC 27001 information security management system. DarkThreat helps
                those efforts with external credential and file-exposure evidence the security
                team can attach to its own risk record. The guides below describe each
                framework. They are not a statement that DarkThreat satisfies the CISA advisory
                or creates a certified management system.
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
              required to start. The MSSP (white-label) plan is listed at custom pricing. Tell
              us which technician domains, tool hostnames, and client names you need watched.
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
