import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import {
  Landmark,
  AlertTriangle,
  Database,
  CheckCircle2,
  ArrowRight,
  FileWarning,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ComplianceGuideLinks from "@/components/compliance/ComplianceGuideLinks";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Government Dark Web Monitoring",
  description: "Secure government agencies, citizen data, and critical infrastructure from nation-state actors and ransomware. FISMA & NIST SP 800-53 aligned.",
  ...pageSeo("/industries/government"),
};

const threats = [
  { icon: Database, title: 'Citizen PII Exposure', desc: 'National registries, health IDs, voting lists, and identity documents leaked in bulk and traded on cybercrime markets.' },
  { icon: Globe, title: 'Nation-State & APT Chatter', desc: 'Geopolitical actor groups discussing vulnerabilities or coordinating cyber campaigns against public infrastructure.' },
  { icon: Cpu, title: 'Critical Infrastructure Exploitation', desc: 'Access credentials and network configurations for utility control, transport grids, or communication pipelines offered on illicit markets.' },
  { icon: Lock, title: 'Contractor Credential Leaks', desc: 'Third-party vendor, systems integrator, and external contractor credentials harvested by malware logs, exposing secure portals.' },
  { icon: AlertTriangle, title: 'Municipal Cyber Extortion', desc: 'Initial access broker listings selling unauthorized agency entry vectors prior to public ransomware attacks.' },
  { icon: FileWarning, title: 'Classified & Internal Document Leaks', desc: 'Sensitive briefings, draft policy papers, defense details, or internal memos published on darknet shaming blogs.' },
];

const capabilities = [
  { label: 'APT & Hacktivist Monitoring', desc: 'Continuous intelligence collection from state-aligned groups, cyber mercenaries, and political hacktivists.' },
  { label: 'Agency-Wide Credential Watch', desc: 'Continuous surveillance of departmental email databases across infostealer payloads and active repositories.' },
  { label: 'Asset & IP Exposure Auditing', desc: 'Scanning for government subdomains, asset listings, and cloud bucket configurations leaking on the public web.' },
  { label: 'Supply Chain Compromise Tracking', desc: 'Evaluate and report on dark web exposure threats targeting critical third-party contractors.' },
  { label: 'FISMA & NIST Compliance Reports', desc: 'Generate documentation to support FISMA risk audits, NIST SP 800-53, and FedRAMP security reviews.' },
  { label: 'Early-Stage Threat Intelligence', desc: 'Direct alerts on credential brokers selling RDP, VPN, or network infrastructure footholds.' },
];

const steps = [
  { num: '01', title: 'Agency Asset Onboarding', desc: 'Onboard official domains, contractor IP addresses, national dataset headers, and executive emails securely.' },
  { num: '02', title: 'Illicit Web Scanning', desc: 'Continuous scanning of state-sponsored forums, hacker blogs, encrypted channels, and darknet leak websites.' },
  { num: '03', title: 'Contextual Threat Triage', desc: 'Enrich alert notifications with agency classification, specific dataset name, and targeted threat group.' },
  { num: '04', title: 'Federal Audit Documentation', desc: 'Download FISMA/NIST-formatted evidence summaries for internal agency risk audits.' },
];

const faqs = [
  {
    q: "Does DarkThreat make an agency FISMA or NIST SP 800-53 compliant?",
    a: "No. FISMA requires the agency to run its own information security program. NIST SP 800-53 is the control catalog agencies select from. DarkThreat helps notice stolen credentials and leaked files for domains it is asked to watch. It does not authorize a system and it does not file a FISMA report.",
  },
  {
    q: "Does FISMA apply to state and local governments?",
    a: "FISMA in 44 U.S.C. 3554 applies to federal agencies. State, local, tribal, and territorial governments are not federal agencies under that section. CISA recommends that they use the Known Exploited Vulnerabilities catalog, and Binding Operational Directive 26-04 itself binds federal civilian executive branch agencies.",
  },
  {
    q: "Is DarkThreat the CISA Known Exploited Vulnerabilities catalog?",
    a: "No. CISA maintains that catalog. BOD 26-04 tells federal civilian executive branch agencies how to prioritize updates. BOD 22-01 was revoked. DarkThreat does not assign remediation deadlines and it does not scan agency networks for missing patches.",
  },
  {
    q: "What about a defense contractor rather than an agency?",
    a: "A contractor that handles covered defense information looks at the contract, often DFARS 252.204-7012, and at NIST SP 800-171 for nonfederal systems. DarkThreat can help the contractor notice a stolen login for a domain it registers. The clause's reporting duty stays with the contractor.",
  },
  {
    q: "What can a team register on a published plan?",
    a: "The Standard plan is basic breach and credential monitoring for one domain and one user, with email notifications and web UI access. The Enterprise plan adds full domain and hacker chatter feeds, two domains or IPs, and two users. Details are on the pricing page.",
  },
];

const sources = [
  {
    href: "https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim",
    label: "44 U.S.C. 3554, federal agency responsibilities under FISMA",
  },
  {
    href: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    label: "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
  },
  {
    href: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf",
    label: "NIST SP 800-53 Rev. 5, publication PDF",
  },
  {
    href: "https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final",
    label: "NIST SP 800-53B, Control Baselines",
  },
  {
    href: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    label: "CISA Known Exploited Vulnerabilities catalog",
  },
  {
    href: "https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk",
    label: "CISA BOD 26-04, Prioritizing Security Updates Based on Risk",
  },
  {
    href: "https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities-revoked",
    label: "CISA BOD 22-01 page, marked revoked",
  },
  {
    href: "https://www.cisa.gov/stopransomware",
    label: "CISA, StopRansomware",
  },
  {
    href: "https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final",
    label: "NIST SP 800-171 Rev. 2, protecting CUI in nonfederal systems",
  },
  {
    href: "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting",
    label: "DFARS 252.204-7012, safeguarding covered defense information",
  },
];

const reading = [
  {
    href: "/blog/government-employee-credential-leaks-detection-and-containment",
    title: "Government Employee Credential Leaks: Detection and Containment",
  },
  {
    href: "/blog/credential-leak-detection-for-government-agencies-and-contractors",
    title: "Credential Leak Detection for Government Agencies and Contractors",
  },
  {
    href: "/blog/data-leak-detection-for-public-sector-and-municipal-governments",
    title: "Data Leak Detection for Public Sector and Municipal Governments",
  },
  {
    href: "/blog/detecting-government-data-leaks-classification-and-monitoring",
    title: "Detecting Government Data Leaks: Classification and Monitoring",
  },
  {
    href: "/blog/monitoring-ransomware-leak-sites-a-security-teams-guide",
    title: "Monitoring Ransomware Leak Sites: A Security Team's Guide",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Government Dark Web Monitoring — Defending Citizen PII & Infrastructure | DarkThreat',
  url: 'https://darkthreat.ai/industries/government',
  description: 'DarkThreat provides national, state, and local agencies with proactive threat monitoring, safeguarding citizen PII, critical infrastructure, and internal files.',
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://darkthreat.ai/" },
  { name: "Industries", url: "https://darkthreat.ai/industries" },
  { name: "Government" },
]);

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, faqPageSchema(faqs)]} />

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
                { label: "Government" },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Landmark className="w-4 h-4 mr-2" /> Government Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Government & Defense</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Public institutions, defense contractors, and local government bodies face escalating threats from nation-state actors and extortion syndicates. DarkThreat delivers deep web situational awareness to protect public services, national data registers, and critical agency endpoints.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link href="#gov-inquiry-form" className="hero-button inline-flex items-center">
              Request Public Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Threat Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Government Sector Dark Web Threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unique cyberthreats targeting citizen data integrity, supply chain vendors, and federal systems.
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
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Why this sector
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why agencies and contractors are targeted
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A government login can open email, a benefits system, or a vendor path into both.
              Four patterns show up around that access.
            </p>
          </div>
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Employee and contractor credentials
              </h3>
              <p className="mb-6">
                Agency email, a VPN, and a citizen portal are reached with passwords that also
                sit on laptops. Infostealer malware copies the browser. The same username can
                then be tried against webmail or remote access without a break of the data
                center.
              </p>
              <p className="mb-6">
                Contractors widen the set. An integrator who builds a portal, a benefits
                processor, or a helpdesk vendor holds logins the agency issued. When that
                password is stolen from the vendor laptop, the agency may not see it until the
                account is used.
              </p>
              <p>
                DarkThreat helps by watching official domains the team registers. Account
                disablement, multifactor checks, and log review stay on systems the agency
                already runs. See{" "}
                <Link
                  href="/blog/government-employee-credential-leaks-detection-and-containment"
                  className="text-primary hover:underline"
                >
                  government employee credential leaks
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Records about residents
              </h3>
              <p className="mb-6">
                Tax, benefits, licensing, and personnel files identify people and describe
                eligibility or pay. A copy is useful for fraud against the resident and for
                pressure against the agency. The copy can leave through a stolen mailbox, a
                shared drive, or a vendor export.
              </p>
              <p className="mb-6">
                Cities and counties hold the same kinds of files and are outside federal FISMA.
                A posted police-report archive or a benefits spreadsheet is still an incident
                for that government. Municipal exposure is discussed in{" "}
                <Link
                  href="/blog/data-leak-detection-for-public-sector-and-municipal-governments"
                  className="text-primary hover:underline"
                >
                  public-sector data leak detection
                </Link>
                .
              </p>
              <p>
                A state benefits portal and a county recorder do not become federal agencies
                because they buy the same monitoring. FISMA still does not apply. What does
                apply is the state breach statute for residents whose information was acquired,
                plus the agency&apos;s own incident policy. DarkThreat helps when a leak-site
                post or a credential matches a domain on the plan. It does not classify records,
                and it does not decide whether a notice to residents is required. Health
                departments that hold patient files also look at the{" "}
                <Link href="/industries/healthcare" className="text-primary hover:underline">
                  healthcare page
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Ransomware and remote access
              </h3>
              <p className="mb-6">
                Stopping benefits payments, permits, or a court calendar creates pressure to
                pay. A common path is a stolen VPN password or a remote-support account, then a
                copy of files, then a leak-site post that names the city or the agency. CISA
                publishes ransomware guidance for defenders at{" "}
                <a
                  href="https://www.cisa.gov/stopransomware"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  StopRansomware
                </a>
                .
              </p>
              <p>
                DarkThreat helps by flagging credentials for registered domains and, on the
                Enterprise plan, chatter that names those domains. It does not sit on the
                agency network and it does not restore systems. For how leak sites are used as
                pressure, see{" "}
                <Link
                  href="/blog/monitoring-ransomware-leak-sites-a-security-teams-guide"
                  className="text-primary hover:underline"
                >
                  monitoring ransomware leak sites
                </Link>
                . Utilities that share the remote-access problem are on the{" "}
                <Link href="/industries/energy-utilities" className="text-primary hover:underline">
                  energy and utilities page
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-2xl mb-3">
                Known exploited vulnerabilities are a separate list
              </h3>
              <p className="mb-6">
                CISA keeps the{" "}
                <a
                  href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Known Exploited Vulnerabilities catalog
                </a>{" "}
                for vulnerabilities with reliable evidence of active exploitation.{" "}
                <a
                  href="https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  BOD 26-04
                </a>{" "}
                tells federal civilian executive branch agencies how to prioritize security
                updates. CISA states that this directive supersedes and revokes BOD 22-01. The
                older page is marked{" "}
                <a
                  href="https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities-revoked"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  revoked
                </a>
                .
              </p>
              <p>
                CISA also says organizations that are not bound by BOD 26-04, including state
                and local governments, can use the catalog. DarkThreat does not replace that
                catalog and it does not patch agency systems. A stolen credential and a missing
                patch are different findings. Both can matter in the same incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gov-inquiry-form" className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Risk Assessment
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Request an Agency Exposure Scan
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Partner with DarkThreat to run a secure assessment of public-facing domains, contractor exposure, or potential credentials listed on illicit trading marketplaces.
            </p>
            <ul className="space-y-3 mb-8">
              {['Official agency domain & subdomain scan', 'Defense contractor exposure mapping', 'Citizen database leak lookup', 'Nation-state & APT group chat monitoring', 'FISMA / NIST SP 800-53 control compliance alignment'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">
              Government Agency Inquiry
            </h3>
            <LeadForm
              variant="industry"
              interest="Government Agency Scan"
              submitLabel="Request Agency Scan"
              fields={[
                { type: "text", name: "name", id: "gov-name", label: "Full Name *", placeholder: "Major John Doe", required: true, width: "half", bind: "name" },
                { type: "email", name: "email", id: "gov-email", label: "Official Email *", placeholder: "john.doe@agency.gov", required: true, width: "half", bind: "email" },
                { type: "text", name: "agency", id: "gov-agency", label: "Agency / Organization", placeholder: "Department of Defense", width: "half", bind: "company" },
                { type: "text", name: "region", id: "gov-region", label: "Jurisdiction / Region", placeholder: "Federal / State / Local", width: "half", bind: "detail" },
                { type: "textarea", name: "message", id: "gov-message", label: "Primary Mission Focus", rows: 4, placeholder: "E.g., protecting voter files, defense supplier assessments, nation-state activity indicators...", bind: "message" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Engineered for Sovereign Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Robust external monitoring capabilities to ensure operational resiliency and public trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              Sovereign Threat Management Workflow
            </h2>
          </div>
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
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Sovereign Compliance</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Federal Risk Control Frameworks</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat outputs are designed to align with strict regulatory security guidelines.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'FISMA Moderate/High', req: 'Integrates into CA and SI security control families' },
              { framework: 'NIST SP 800-53 v5', req: 'Direct mappings to RA (Risk Assessment) controls' },
              { framework: 'NIST SP 800-171', req: 'Fulfill requirements for defending contractor networks' },
              { framework: 'FedRAMP Parameters', req: 'Aligned with external threat intelligence directives' },
              { framework: 'CJIS Compliance', req: 'Protects criminal justice records from leakage' },
              { framework: 'State Ramp Initiatives', req: 'Fulfills state-level cloud supply-chain validations' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
          <ComplianceGuideLinks slugs={["nist-csf"]} />
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Requirements that apply
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              FISMA, NIST SP 800-53, and CISA directives
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FISMA applies to federal agencies. Contractors follow the clauses in their
              contracts. DarkThreat supports external exposure awareness inside the program the
              organization already runs. Using DarkThreat does not make an agency or a
              contractor compliant.
            </p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                FISMA agency programs
              </h3>
              <p className="mb-6">
                <a
                  href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title44-section3554&num=0&edition=prelim"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  44 U.S.C. 3554
                </a>{" "}
                requires the head of each federal agency to provide information security for the
                information and systems that support agency operations, including systems
                provided by a contractor. Each agency must implement an agency-wide information
                security program. That program includes procedures for detecting, reporting, and
                responding to security incidents.
              </p>
              <p>
                The statute assigns that program to the agency. An external alert about a
                stolen credential can be one input to detection. DarkThreat does not submit the
                agency&apos;s FISMA report and it does not make the agency compliant with
                section 3554.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                NIST SP 800-53
              </h3>
              <p className="mb-6">
                <a
                  href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  NIST SP 800-53 Rev. 5
                </a>{" "}
                is the control catalog. Control PM-16, Threat Awareness Program, says to
                implement a threat awareness program that includes a cross-organization
                information-sharing capability for threat intelligence. Incident handling and
                incident reporting are IR-4 and IR-6. System monitoring is SI-4. Which controls
                apply to a given system depends on the baseline and tailoring in{" "}
                <a
                  href="https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  SP 800-53B
                </a>
                , not on a vendor checklist.
              </p>
              <p>
                DarkThreat can contribute an external finding the security team attaches to its
                own record. It does not implement PM-16, IR-4, IR-6, or SI-4, and it is not an
                authorization decision. The publication PDF is on{" "}
                <a
                  href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  nvlpubs.nist.gov
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Contractors and covered defense information
              </h3>
              <p className="mb-6">
                <a
                  href="https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  NIST SP 800-171
                </a>{" "}
                describes security requirements for protecting controlled unclassified
                information on nonfederal systems. A contract is what makes a version
                applicable.{" "}
                <a
                  href="https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  DFARS 252.204-7012
                </a>{" "}
                requires contractors that are subject to the clause to safeguard covered defense
                information and to rapidly report cyber incidents. The clause text is the
                reporting clock. Read it before treating a vendor email as the start of that
                duty.
              </p>
              <p>
                DarkThreat helps a contractor notice stolen logins for domains it can register.
                It does not assess 800-171 and it does not file the DoD incident report.
                Manufacturers in the defense supply chain are discussed on the{" "}
                <Link href="/industries/manufacturing" className="text-primary hover:underline">
                  manufacturing page
                </Link>
                . Service providers that hold many client logins are on the{" "}
                <Link href="/industries/msp-mssp" className="text-primary hover:underline">
                  MSP and MSSP page
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-foreground text-xl mb-3">
                Related frameworks
              </h3>
              <p>
                Many agencies and contractors also map work to the NIST Cybersecurity Framework
                and operate an ISO/IEC 27001 management system beside the federal program. The
                guides below describe those frameworks. They are not a statement that
                DarkThreat satisfies FISMA, a selected 800-53 control, or a certified management
                system.
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
          <ul className="space-y-3 mb-10">
            {reading.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Other sector pages:{" "}
            <Link href="/industries/energy-utilities" className="text-primary hover:underline">
              energy and utilities
            </Link>
            ,{" "}
            <Link href="/industries/healthcare" className="text-primary hover:underline">
              healthcare
            </Link>
            ,{" "}
            <Link href="/industries/msp-mssp" className="text-primary hover:underline">
              MSP and MSSP
            </Link>
            , and the{" "}
            <Link href="/industries" className="text-primary hover:underline">
              industry index
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="w-full space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-border rounded-xl px-4">
                <summary className="text-left font-montserrat font-semibold py-3 cursor-pointer">
                  {f.q}
                </summary>
                <p className="text-muted-foreground pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6 text-center">
            Sources
          </h2>
          <ul className="space-y-3">
            {sources.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-primary hover:underline" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
