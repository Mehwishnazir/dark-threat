import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Hotel,
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
  title: "Hospitality Dark Web Monitoring",
  description:
    "Dark web monitoring for hotels and hospitality: guest and card data, booking account takeover, property-system credentials, and loyalty fraud.",
  ...pageSeo("/industries/hospitality"),
};

const threats = [
  {
    icon: FileWarning,
    title: "Guest and payment data",
    desc: "Reservation files, folios, and cardholder data copied out of a property system and described or offered outside the company.",
  },
  {
    icon: Key,
    title: "Booking and OTA account takeover",
    desc: "Passwords for the brand extranet, an online travel agency console, or the public booking site, replayed against those tools.",
  },
  {
    icon: Database,
    title: "Property management credentials",
    desc: "Logins for the property management system and franchise portals, including passwords stolen on a manager laptop.",
  },
  {
    icon: AlertTriangle,
    title: "Loyalty account fraud",
    desc: "Member emails and passwords in a stealer log, then used to redeem points or change a stored payment method.",
  },
  {
    icon: Eye,
    title: "Lookalike booking pages",
    desc: "Domains that imitate a hotel or brand reservation page in order to collect guest and staff passwords.",
  },
  {
    icon: Shield,
    title: "Shared front-desk accounts",
    desc: "Logins several shifts know, so one stolen password can reach reservations, folios, and the card environment.",
  },
];

const watchItems = [
  {
    label: "Brand and property domains",
    desc: "Staff logins for domains the brand or the property registers, including accounts reused from a laptop onto the booking tools.",
  },
  {
    label: "Extranet and PMS hostnames",
    desc: "Portals and property-system hostnames you operate. A console that belongs only to the software vendor is outside that watch.",
  },
  {
    label: "Loyalty program identifiers",
    desc: "Member-portal hostnames and program names you choose to register, so a leaked member login is visible to the security team.",
  },
  {
    label: "Ransomware leak-site posts",
    desc: "Posts that name the brand or a property and describe guest lists, folios, or loyalty exports.",
  },
  {
    label: "Forum offers of files or access",
    desc: "Underground posts offering network access or files that match property or program names you asked DarkThreat to watch.",
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
    desc: "Brand and property domains, booking and PMS hostnames you control, and loyalty program names that would matter in a leak.",
  },
  {
    num: "02",
    title: "Read the match",
    desc: "A security contact reviews the finding in the web UI or from the email notification included on published plans.",
  },
  {
    num: "03",
    title: "Reset and check use",
    desc: "The property or brand resets the account on its own systems and checks whether that identity touched a folio or a card system.",
  },
  {
    num: "04",
    title: "Keep the record",
    desc: "Save the alert, the account, and the action taken. The record can support an incident review. It is not an assessment result.",
  },
];

const schema = serviceSchema(
  "Dark Web Monitoring for Hospitality",
  "Dark web monitoring that helps hotels and hospitality companies watch for guest and payment-card exposure, booking account takeover, property-system credentials, and loyalty account fraud.",
  "https://darkthreat.ai/industries/hospitality",
);

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Hospitality" },
]);

const reading = [
  {
    href: "/blog/monitoring-ransomware-leak-sites-a-security-teams-guide",
    title: "Monitoring Ransomware Leak Sites: A Security Team's Guide",
  },
  {
    href: "/blog/how-credential-leaks-lead-to-ransomware-the-attack-chain-explained",
    title: "How Credential Leaks Lead to Ransomware: The Attack Chain Explained",
  },
  {
    href: "/blog/typosquatting-detection-finding-fake-versions-of-your-domain",
    title: "Typosquatting Detection — Finding Fake Versions of Your Domain",
  },
  {
    href: "/blog/third-party-vendor-credential-monitoring-managing-supply-chain-risk",
    title: "Third-Party Vendor Credential Monitoring — Managing Supply Chain Risk",
  },
  {
    href: "/blog/supply-chain-credential-leaks-monitoring-vendor-exposure",
    title: "Supply Chain Credential Leaks: Monitoring Vendor Exposure",
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
                { label: "Hospitality" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Hotel className="w-4 h-4 mr-2" /> Hospitality Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Hospitality</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Hotels and brands hold guest records, card payments, and the logins that run a
            property. DarkThreat watches external sources for stolen credentials and leaked guest
            files so the security team can act while those systems are still under company
            control.
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
              Why hotels and hospitality brands are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A stay is a name, a date, a payment, and a login that can change all three. Four
              patterns show up around that file.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Guest records and payment cards
              </h3>
              <p className="mb-6">
                A reservation can include a name, an address, a stay, a folio, and a card. The
                file is compact. A copy can leave through a front-desk workstation, a manager
                laptop, or a file share opened with a stolen password. After the copy exists, it
                can be described on a leak site under the property or the brand.
              </p>
              <p className="mb-6">
                Card data is a separate problem from the guest name. Organizations that store,
                process, or transmit account data are the organizations PCI DSS is written for.
                A property that never touches card data may be outside that scope.
              </p>
              <p className="mb-6">
                Where the property does take cards, an external finding is a reason to start the
                incident work the payment program already requires. It is not a completed
                assessment.
              </p>
              <p>
                DarkThreat helps by watching for the brand, the property name, and booking
                hostnames on leak sites, paste sites, and underground posts. It does not sit on
                the payment network, and it does not replace the people who scope the cardholder
                data environment. The payment guide is{" "}
                <Link href="/compliance/pci-dss" className="text-primary hover:underline">
                  PCI DSS dark web monitoring
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Booking sites and online travel accounts
              </h3>
              <p className="mb-6">
                Rates and inventory move through a brand extranet, an online travel agency
                console, and the public booking site. A password for any of those can change a
                reservation, a bank detail, or a guest message. The password is often the same
                one saved in a browser on a revenue-manager laptop.
              </p>
              <p className="mb-6">
                A lookalike domain can collect the next password before the real site is ever
                opened. The useful watch is the real hostnames you operate, plus names that
                would identify the brand in a public post. An agency console that lives only on
                the agency network cannot be monitored as if it were the hotel system.
              </p>
              <p>
                DarkThreat helps when those hostnames and staff domains show up in stealer logs
                or posts. It does not log into the extranet. For pages that imitate a real
                domain, see{" "}
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
                Franchise and property management credentials
              </h3>
              <p className="mb-6">
                A franchised hotel sits between a brand and a property system. Managers hold
                logins for the property management system, the brand portal, and the local
                email. A password stolen from one of those laptops can be replayed against the
                system whose domain you control.
              </p>
              <p className="mb-6">
                The brand can watch portals it hosts. The property can watch domains it
                registers. A hostname that belongs only to the software vendor cannot be watched
                as the hotel network. Asking that vendor which email domains its support staff
                use, when they reach you, is a contract step.
              </p>
              <p>
                DarkThreat helps with the external side of that relationship: the accounts you
                issued and the names that would identify the property in a public post. It does
                not audit the vendor. Two notes go further on credentials held by other
                companies:{" "}
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
                Loyalty account fraud
              </h3>
              <p className="mb-6">
                A loyalty profile is an email, a password, a point balance, and sometimes a
                stored card. A password from a stealer log can be replayed against the member
                site. Points move, or a stay is booked, before the member notices.
              </p>
              <p className="mb-6">
                The program operator can register the member-portal hostname and the program
                name. That watch shows staff and member credentials tied to domains you control,
                and posts that name the program. It does not show the point balance inside the
                loyalty database.
              </p>
              <p>
                DarkThreat helps by flagging those credentials and posts. Resetting the member
                account, and checking whether points moved, happens inside the program the
                operator already runs. A leaked password is a prompt for that work, not a
                completed fraud case.
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
              Hospitality dark web threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six exposure types a hotel or brand security team can investigate from an external
              alert.
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
              What dark web monitoring watches for in hospitality
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This watch is external. DarkThreat looks for identifiers you provide in places
              stolen data is posted or sold: stealer-log collections, credential lists, forums,
              paste sites, and ransomware leak sites. It answers questions a property or brand
              security lead can act on before calling the event an incident.
            </p>
            <p>
              Did a manager, revenue, or front-desk password for your domain show up in a
              stealer log? Did an extranet or property-system account you operate appear in a
              credential list? Is the brand or a property named on a ransomware leak site, with
              guest files described?
            </p>
            <p>
              Is someone offering access to the network, or offering files that match a loyalty
              program, in a forum post? Are lookalike domains imitating a booking page in order
              to collect more passwords?
            </p>
            <p>
              The same watch will not show traffic on the payment network or the contents of
              the property management database. Those stay with the teams that run them. An
              external finding is a reason to check whether that identity was used. It does not
              replace that check.
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
              A realistic process for a property and a brand
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Someone names the identifiers, someone reads the alert, someone resets the account
              on systems the company already runs, and someone keeps the record.
            </p>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Start with identifiers you can share. That list usually includes brand and
              property domains, extranet and property-system hostnames you control, and loyalty
              program names that would be meaningful in a leak. A vendor data center you do not
              control is a contract topic.
            </p>
            <p>
              When a match appears, published plans include email notifications and web UI
              access, so the security contact can read the finding directly. Triage by role. A
              password for a manager who can open the property system is a different hour of
              work from a password for a marketing alias.
            </p>
            <p>
              The team resets the account, checks whether that identity opened a folio or a
              payment screen, and looks for a second account from the same person. DarkThreat
              helps by putting the external finding in front of that team. The reset and the
              log review happen inside the company environment.
            </p>
            <p>
              Keep the alert, the time, the account, and the action you took. Stolen logs are
              copied, so leave the same identifiers on the watch list and look for a repost
              after the reset. Where PCI DSS or the GDPR applies, that record can support the
              review the organization already runs. DarkThreat does not make the organization
              compliant with either one.
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
              PCI DSS and the GDPR for guest data
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These regimes apply to defined activities, not to every company that rents a room.
              DarkThreat supports external exposure awareness inside the program the
              organization already runs. Using DarkThreat does not make a hotel or a brand
              compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                PCI DSS for card payments
              </h3>
              <p className="mb-6">
                PCI DSS is the standard published by the PCI Security Standards Council for
                organizations that store, process, or transmit account data, or that could
                impact the security of that environment. A hotel, a reservation brand, or a
                booking page that handles card payments is the kind of organization the standard
                is written for. A property that never touches card data is not brought into
                scope by this page.
              </p>
              <p className="mb-6">
                Check the Council for the version currently in effect:{" "}
                <a
                  href="https://www.pcisecuritystandards.org/"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  PCI Security Standards Council
                </a>
                . DarkThreat helps when an admin login for a booking or payment page, or a file
                that describes guest payment data, shows up outside the company. That finding
                can support the incident work the payment team already runs.
              </p>
              <p>
                It does not scope a cardholder data environment, it does not replace a Qualified
                Security Assessor or a self-assessment, and it does not make an organization
                compliant with PCI DSS. The guide on this site is{" "}
                <Link href="/compliance/pci-dss" className="text-primary hover:underline">
                  PCI DSS dark web monitoring
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                GDPR where guest data is in scope
              </h3>
              <p className="mb-6">
                Regulation (EU) 2016/679 defines personal data as information relating to an
                identified or identifiable person. A guest name tied to a stay is that kind of
                information when the regulation applies. Article 3 sets the territorial scope,
                including the offering of goods or services to people in the Union. A property
                outside the Union is not covered merely because a guest once lived in Europe.
              </p>
              <p className="mb-6">
                Where the regulation does apply, Article 32 requires security appropriate to the
                risk. Article 33 requires the controller to notify the supervisory authority of
                a personal data breach without undue delay and, where feasible, not later than
                72 hours after becoming aware of it, unless the breach is unlikely to result in
                a risk to the rights and freedoms of natural persons. The text is{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Regulation (EU) 2016/679
                </a>
                .
              </p>
              <p>
                DarkThreat helps when a guest file or a staff password shows up on a leak site,
                which can support the decision the controller already has to make. It does not
                notify a supervisory authority, and it does not make a hotel compliant with the
                GDPR. The guide on this site is{" "}
                <Link href="/compliance/gdpr" className="text-primary hover:underline">
                  GDPR dark web monitoring
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related enterprise frameworks
              </h3>
              <p>
                Many hospitality companies also map corporate IT to the NIST Cybersecurity
                Framework and operate an ISO/IEC 27001 information security management system
                beside the payment and privacy programs. DarkThreat helps those efforts with
                external credential and file-exposure evidence the security team can attach to
                its own risk record. The guides below describe those two frameworks. They are
                not a statement that DarkThreat creates a certified management system or a PCI
                DSS or GDPR compliance program.
              </p>
              <ComplianceGuideLinks slugs={["pci-dss", "gdpr", "nist-csf", "iso-27001"]} />
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
              required to start. Tell us which property domains, booking portals, and loyalty
              program names you need watched.
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
