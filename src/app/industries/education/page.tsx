import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { GraduationCap, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, } from "lucide-react";
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
  title: "Dark Web Monitoring for Education",
  description: "Protect student PII, research IP, and faculty credentials with dark web monitoring. FERPA, COPPA, and NIST aligned monitoring for schools and universities.",
  ...pageSeo("/industries/education"),
};

const threats = [
  { icon: Key, title: 'Student & Faculty Credential Theft', desc: 'Infostealer logs and combo lists harvesting .edu and campus logins for students, faculty, and staff.' },
  { icon: Database, title: 'Student PII / Record Dumps', desc: 'Enrollment, SIS, and education-record PII listed on leak forums, Telegram, and ransomware leak sites.' },
  { icon: Eye, title: 'Faculty Phishing & Account Takeover', desc: 'Spear-phishing and fake login pages aimed at faculty and admin access to student records and campus systems.' },
  { icon: Lock, title: 'Research IP & Unpublished Data Exposure', desc: 'Research datasets, grant materials, and intellectual property appearing on markets and leak sites after exfiltration.' },
  { icon: AlertTriangle, title: 'LMS / SSO Credential Stuffing', desc: 'Stolen credentials reused against student portals, LMS platforms, email, and institutional SSO.' },
  { icon: Shield, title: 'Ransomware Double-Extortion Leak Posts', desc: 'Education-sector data posted on ransomware leak sites to pressure schools and universities.' },
];

const schema = serviceSchema(
  'Dark Web Monitoring for Education',
  'Protect student PII, research IP, and faculty credentials with dark web monitoring. FERPA, COPPA, and NIST aligned monitoring for schools and universities.',
  'https://darkthreat.ai/industries/education'
);
const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Industries', url: 'https://darkthreat.ai/industries' },
  { name: 'Education' }
]);

const capabilities = [
  { label: 'Institution Domain Credential Watch', desc: 'Monitor institutional domains and affiliated emails across stealer logs, combo lists, paste sites, and markets.' },
  { label: 'Student Record Exposure Detection', desc: 'Flag student PII and education-record dumps tied to your institution when they surface underground.' },
  { label: 'Faculty & Admin Credential Surveillance', desc: 'Prioritize high-privilege faculty, registrar, and admin credentials in stealer and marketplace findings.' },
  { label: 'Research Data & IP Monitoring', desc: 'Watch forums, paste sites, and leak portals for research data and IP linked to your institution.' },
  { label: 'Ransomware Leak Site Coverage', desc: 'Continuous monitoring of ransomware leak sites for education-sector postings that name your institution.' },
  { label: 'Alerting Into Campus Security Stack', desc: 'Severity-scored alerts via email, webhook, or SIEM so IT/SOC can reset accounts and contain exposure.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register institutional domains, brand keywords, and key education identifiers — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Engines scan markets, forums, stealer channels, paste sites, and ransomware leak sites 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Structured alerts with source, severity, affected asset type, and recommended action.' },
  { num: '04', title: 'Contain & Evidence', desc: 'Reset credentials, document exposure for FERPA / privacy teams, and keep monitoring for reappearance.' },
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Education' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <GraduationCap className="w-4 h-4 mr-2" /> Education Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Education</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Protect student PII, research IP, and faculty credentials from academic cyber threats — continuous monitoring across dark web markets, stealer logs, paste sites, and ransomware leak sites.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button">
              Request Education Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/pricing" className="border-primary/30 hover:border-primary">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Education Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six active attack vectors targeting schools, universities, and research institutions on dark web networks.</p>
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

      <section id="edu-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request an Education Risk Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your school, university, or research institution and we&apos;ll run an initial dark web exposure check across your domains and key education identifiers — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Student & faculty credential monitoring',
                'Student PII / education-record exposure detection',
                'Research IP & data leak monitoring',
                'Ransomware leak site coverage',
                'FERPA / COPPA / NIST-aligned exposure reporting',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Education Inquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edu-name">Full Name *</Label>
                  <Input id="edu-name" required placeholder="Jane Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="edu-email">Work Email *</Label>
                  <Input id="edu-email" type="email" required placeholder="jane@university.edu" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="edu-institution">Institution Name</Label>
                <Input id="edu-institution" placeholder="Your school, university, or research org" className="mt-1 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="edu-message">Primary Concern</Label>
                <Textarea id="edu-message" rows={4} placeholder="E.g. student credential leaks, research data exposure, faculty phishing..." className="mt-1 bg-background/50" />
              </div>
              <Button type="button" className="hero-button w-full">
                Request Free Risk Scan
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Education Security Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities engineered for K-12, higher education, and research institutions.</p>
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
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Education Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs support evidence collection for frameworks that matter to schools and universities — aligned, not a certification claim.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'FERPA', req: 'Supports early detection of education-record / student PII exposure for breach-awareness and documented response' },
              { framework: 'COPPA', req: 'Supports visibility into exposed children\'s / K-12-related personal information where COPPA obligations apply' },
              { framework: 'NIST', req: 'Supports continuous external monitoring as part of a NIST-aligned cybersecurity program' },
              { framework: 'GLBA', req: 'Supports monitoring for unauthorized exposure of student financial-aid / customer information' },
              { framework: 'GDPR', req: 'Supports detection of EU student / personal-data exposure for breach awareness and reasonable-steps documentation' },
              { framework: 'CCPA', req: 'Supports consumer / student personal-information exposure visibility for regulated disclosure workflows' },
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
