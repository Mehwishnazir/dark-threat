import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Dark Web Monitoring for Professional Services",
  description: "Protect confidential client information, partner credentials, and firm intellectual property. SOC 2, ISO 27001, and GDPR aligned dark web monitoring for consulting, accounting, and advisory firms.",
  alternates: { canonical: "/industries/professional-services" },
};

const threats = [
  { icon: Key, title: 'Partner & Employee Credential Theft', desc: 'Infostealer logs harvesting firm-domain credentials for partners, managing directors, and staff.' },
  { icon: Database, title: 'Client Confidential Data Exposure', desc: 'Client files, material non-public information, and governance materials listed on leak sites and underground markets.' },
  { icon: Eye, title: 'Billable-Hour / Portal Phishing', desc: 'Fake time-entry, expense, or client-portal pages timed to harvest credentials and session tokens.' },
  { icon: Lock, title: 'Deal-Room & Collaboration Platform Risk', desc: 'Stealer-laced or harvested access to deal rooms and client collaboration platforms.' },
  { icon: AlertTriangle, title: 'Third-Party Vendor & Contractor Exposure', desc: 'Compromised DMS, e-discovery, or contractor credentials cascading into firm and client environments.' },
  { icon: Shield, title: 'Combo Lists & Ransomware Leak Posts', desc: 'Domain-filtered combo lists and ransomware double-extortion posts naming professional services firms.' },
];

const schema = serviceSchema(
  'Dark Web Monitoring for Professional Services',
  'Protect confidential client information, partner credentials, and firm intellectual property. SOC 2, ISO 27001, and GDPR aligned monitoring for consulting, accounting, and advisory firms.',
  'https://darkthreat.ai/industries/professional-services'
);
const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Industries', url: 'https://darkthreat.ai/industries' },
  { name: 'Professional Services' }
]);

const capabilities = [
  { label: 'Firm Domain Credential Watch', desc: 'Monitor primary and affiliated firm domains across stealer logs, combo lists, and markets.' },
  { label: 'Infostealer Log Correlation', desc: 'Extract firm credentials and session tokens from stealer dumps traded underground.' },
  { label: 'Partner & Executive Priority Alerts', desc: 'Severity scoring that elevates partner and MD exposures for faster incident response.' },
  { label: 'Client Data & Document Leak Surveillance', desc: 'Watch leak sites, forums, and paste channels for client-confidential and firm document exposure.' },
  { label: 'Multi-Domain & Portal Coverage', desc: 'Cover practice-area, office, and client-portal domains beyond a single .com.' },
  { label: 'Alerting Into Firm Security Stack', desc: 'Severity-scored alerts via email, webhook, or SIEM for password reset and session containment.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register firm domains, brand keywords, and key identifiers — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Engines scan markets, forums, stealer channels, paste sites, and ransomware leak sites 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Structured alerts with source, severity, role context, and recommended action.' },
  { num: '04', title: 'Contain & Evidence', desc: 'Reset credentials, document exposure for compliance and client-notification teams, and keep monitoring for reappearance.' },
];

export default function Page() {

      
  

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, organizationSchema]} />
      

      

      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Professional Services' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Briefcase className="w-4 h-4 mr-2" /> Professional Services Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">Professional Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Protect confidential client information, partner credentials, and firm intellectual property — continuous monitoring across stealer logs, markets, paste sites, and ransomware leak sites for legal, accounting, and consulting firms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button">
              Request Firm Exposure Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/pricing" className="border-primary/30 hover:border-primary">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Professional Services Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six active attack vectors targeting consulting, accounting, and advisory firms on dark web networks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300">
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

      <section id="ps-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Firm Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your consulting, accounting, or advisory firm and we&apos;ll run an initial dark web exposure check across your domains and key identifiers — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Firm-domain & partner credential monitoring',
                'Client-confidential document leak surveillance',
                'Infostealer log & combo-list coverage',
                'Deal-room / portal exposure awareness',
                'SOC 2 / ISO 27001 / GDPR-aligned exposure reporting',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Looking for law-firm-specific privilege and ABA guidance? See our{' '}
              <Link href="/industries/legal" className="text-primary hover:underline">Legal industry page</Link>.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Professional Services Inquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ps-name">Full Name *</Label>
                  <Input id="ps-name" required placeholder="Jane Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="ps-email">Work Email *</Label>
                  <Input id="ps-email" type="email" required placeholder="jane@firm.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="ps-firm">Firm Name</Label>
                <Input id="ps-firm" placeholder="Your consulting, accounting, or advisory firm" className="mt-1 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="ps-message">Primary Concern</Label>
                <Textarea id="ps-message" rows={4} placeholder="E.g. partner credential leaks, client data exposure, vendor risks..." className="mt-1 bg-background/50" />
              </div>
              <Button type="button" className="hero-button w-full">
                Request Free Firm Scan
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Professional Services Security Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities engineered for consulting, accounting, and advisory firms.</p>
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

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Coverage</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Professional Services Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs support evidence collection for frameworks that matter to professional services firms — aligned, not a certification claim.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'SOC 2', req: 'Supports continuous credential-exposure monitoring evidence for logical-access controls' },
              { framework: 'ISO 27001', req: 'Supports threat intelligence / monitoring artifacts for access-control evidence' },
              { framework: 'SEC Cybersecurity Disclosure', req: 'Supports early detection to help assess material incidents for disclosure workflows' },
              { framework: 'State Bar / ethics duty', req: 'Supports documented monitoring of partner credentials as part of client-data safeguarding' },
              { framework: 'PCAOB', req: 'Supports monitoring posture relevant to accounting firms under PCAOB-oriented oversight expectations' },
              { framework: 'GDPR', req: 'Supports client / employee PII exposure detection and reasonable-steps documentation' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How It Works</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">From Dark Web Signal to Contained Threat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">{s.num}</div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      
    </div>
  
  );
}
