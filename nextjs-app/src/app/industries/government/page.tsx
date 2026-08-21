import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, FileWarning, Key, Eye, Globe, Cpu } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Government Dark Web Monitoring — Protecting Public Infrastructure",
  description: "Secure government agencies, citizen data, and critical infrastructure from nation-state actors and ransomware. FISMA & NIST SP 800-53 aligned.",
  alternates: { canonical: "/industries/government" },
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

export default function Page() {

      
  

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Government Dark Web Monitoring — Defending Citizen PII & Infrastructure | DarkThreat',
    url: 'https://darkthreat.ai/industries/government',
    description: 'DarkThreat provides national, state, and local agencies with proactive threat monitoring, safeguarding citizen PII, critical infrastructure, and internal files.',
  };

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />
      

      

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Government' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Landmark className="w-4 h-4 mr-2" /> Government Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">Government & Defense</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Public institutions, defense contractors, and local government bodies face escalating threats from nation-state actors and extortion syndicates. DarkThreat delivers deep web situational awareness to protect public services, national data registers, and critical agency endpoints.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button">
              Request Public Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/pricing" className="border-primary/30 hover:border-primary">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sector Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Government Sector Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Unique cyberthreats targeting citizen data integrity, supply chain vendors, and federal systems.</p>
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

      {/* SECTION 3: Inquiry Form */}
      <section id="gov-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request an Agency Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Partner with DarkThreat to run a secure assessment of public-facing domains, contractor exposure, or potential credentials listed on illicit trading marketplaces.
            </p>
            <ul className="space-y-3 mb-8">
              {['Official agency domain & subdomain scan', 'Defense contractor exposure mapping', 'Citizen database leak lookup', 'Nation-state & APT group chat monitoring', 'FISMA / NIST SP 800-53 control compliance alignment'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Government Agency Inquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gov-name">Full Name *</Label>
                  <Input id="gov-name" required placeholder="Major John Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="gov-email">Official Email *</Label>
                  <Input id="gov-email" type="email" required placeholder="john.doe@agency.gov" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gov-agency">Agency / Organization</Label>
                  <Input id="gov-agency" placeholder="Department of Defense" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="gov-region">Jurisdiction / Region</Label>
                  <Input id="gov-region" placeholder="Federal / State / Local" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="gov-message">Primary Mission Focus</Label>
                <Textarea id="gov-message" rows={4} placeholder="E.g., protecting voter files, defense supplier assessments, nation-state activity indicators..." className="mt-1 bg-background/50" />
              </div>
              <Button type="button" className="hero-button w-full">
                Request Agency Scan
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Engineered for Sovereign Operations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Robust external monitoring capabilities to ensure operational resiliency and public trust.</p>
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

      {/* SECTION 5: Compliance Mapping */}
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
        </div>
      </section>

      {/* SECTION 6: Operational Workflow */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How It Works</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Sovereign Threat Management Workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center relative">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">{s.num}</div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && <div className="hidden md:block absolute" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <FinalCTA />

      
    </div>
  
  );
}
