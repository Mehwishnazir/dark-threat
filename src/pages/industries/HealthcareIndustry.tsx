import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  HeartPulse, Shield, Lock, AlertTriangle, Database, CheckCircle2,
  ArrowRight, FileWarning, Key, Eye, Activity, Wifi,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { submitLeadForm } from '@/utils/formSubmit';
import AppHeader from '@/components/AppHeader';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import Breadcrumb from '@/components/Breadcrumb';
import FinalCTA from '@/components/FinalCTA';

const threats = [
  { icon: FileWarning, title: 'EHR Record Sales', desc: 'Complete electronic health records (name, DOB, SSN, diagnosis codes) sold in bulk on dark web health data markets for $250–$1,000 per record.' },
  { icon: Wifi, title: 'VPN & RDP Credential Leaks', desc: 'Remote access credentials for hospital networks — the primary initial access vector before ransomware deployment in healthcare.' },
  { icon: AlertTriangle, title: 'Pre-Ransomware Signals', desc: 'Initial access brokers advertising footholds in hospital networks before deploying ransomware — giving you 7–14 days of early warning.' },
  { icon: Activity, title: 'Medical Device Exposure', desc: 'Vulnerabilities and credentials for connected medical devices (infusion pumps, PACS systems) discussed in threat actor communities.' },
  { icon: Key, title: 'Clinical Staff Credential Theft', desc: 'Doctor, nurse, and pharmacist credentials harvested by infostealer malware — enabling prescription fraud and record manipulation.' },
  { icon: Eye, title: 'Insurance Fraud Schemes', desc: 'Dark web coordination of medical identity theft schemes using stolen PHI to file fraudulent insurance claims.' },
];

const capabilities = [
  { label: 'PHI Exposure Monitoring', desc: 'Alert when patient records matching your organization\'s data appear on dark web health data markets or paste sites.' },
  { label: 'Ransomware Pre-Attack Detection', desc: 'Identify when your network credentials appear in initial access broker listings — days before ransomware deployment.' },
  { label: 'Clinical Staff Credential Watch', desc: 'Continuous monitoring of all clinical and administrative staff email credentials across infostealer log databases.' },
  { label: 'Medical Device Vulnerability Intel', desc: 'Track threat actor discussion of vulnerabilities affecting your connected medical device portfolio.' },
  { label: 'HIPAA Breach Evidence Reports', desc: 'Pre-formatted reports for HIPAA breach notification procedures and HHS OCR audit submissions.' },
  { label: '24/7 Ransomware Alert Escalation', desc: 'Immediate SOC escalation and notification when ransomware signals targeting your facility are detected.' },
];

const steps = [
  { num: '01', title: 'Facility Onboarding', desc: 'Register your domains, IP ranges, EHR vendor names, and key staff email patterns — no agents required.' },
  { num: '02', title: 'Dark Web Crawling', desc: 'Continuous monitoring of health data markets, ransomware forums, infostealer channels, and paste sites.' },
  { num: '03', title: 'Clinical Alert Triage', desc: 'Alerts are enriched with context: affected department, data type, threat actor, and HIPAA risk rating.' },
  { num: '04', title: 'Breach Notification Support', desc: 'Export HIPAA-aligned breach evidence packages for legal and compliance team review.' },
];

export default function HealthcareIndustry() {
  const [form, setForm] = useState({ name: '', email: '', facility: '', beds: '', message: '' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Industry Inquiry (Healthcare)',
        name: form.name,
        email: form.email,
        company: form.facility,
        interest: form.beds,
        message: form.message,
      });
      toast({ title: 'Assessment Request Received', description: 'A healthcare security specialist will contact you within 24 hours.' });
      setForm({ name: '', email: '', facility: '', beds: '', message: '' });
    } catch (err) {
      toast({
        title: 'Submission Failed',
        description: 'There was an error sending your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Healthcare Dark Web Monitoring — Protecting PHI & HIPAA Data | DarkThreat',
    url: 'https://darkthreat.ai/industries/healthcare',
    description: 'DarkThreat monitors dark web markets and ransomware forums to protect hospitals, health systems, and clinics from PHI exposure, EHR data breaches, and pre-ransomware threats.',
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Dark Web Monitoring — Protecting PHI & HIPAA Data | DarkThreat</title>
        <meta name="description" content="Protect your hospital, health system, or clinic from PHI data breaches, ransomware attacks, and EHR record theft with DarkThreat's HIPAA-aligned dark web monitoring." />
        <link rel="canonical" href="https://darkthreat.ai/industries/healthcare" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <AppHeader />

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Suspense fallback={null}><ThreatSphere /></Suspense>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Healthcare' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <HeartPulse className="w-4 h-4 mr-2" /> Healthcare Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">Healthcare & Life Sciences</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Healthcare is the most expensive industry to breach at <strong className="text-foreground">$10.9M average per incident</strong>. DarkThreat monitors dark web markets, ransomware forums, and infostealer channels to protect your patient data, clinical operations, and HIPAA compliance posture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button" onClick={() => document.getElementById('hc-inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Healthcare Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/pricing">
              <Button variant="outline" className="border-primary/30 hover:border-primary">View Pricing</Button>
            </Link>
          </div>
        </div>
        {/* Urgency stat callout */}
        <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-6">
          {[
            { val: '$10.9M', label: 'Average healthcare breach cost' },
            { val: '277 days', label: 'Avg. time to identify & contain breach' },
            { val: '725+', label: 'Healthcare breaches reported in 2023' },
          ].map(s => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm px-4 py-3 text-center">
              <div className="text-2xl font-montserrat font-bold text-primary">{s.val}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Sector Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Healthcare Dark Web Threat Vectors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six critical attack categories targeting hospitals, health systems, clinics, and life sciences companies.</p>
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
      <section id="hc-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Free Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Healthcare Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our healthcare security team will conduct an initial dark web scan across your facility's domain, clinical staff credentials, and known vendor network — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {['Clinical staff credential exposure check', 'PHI data market scan for your organization', 'Ransomware forum mention detection', 'Medical vendor supply chain risk scan', 'HIPAA breach notification risk assessment'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
            {/* HIPAA trust badge */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-center gap-4">
              <Lock className="w-8 h-8 text-primary shrink-0" />
              <div>
                <div className="font-semibold text-foreground text-sm">HIPAA-Compliant Assessment</div>
                <div className="text-xs text-muted-foreground mt-1">All scan data is handled in accordance with HIPAA Security Rule requirements. No PHI is stored or processed.</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Healthcare Organization Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hc-name">Full Name *</Label>
                  <Input id="hc-name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="Dr. Jane Smith" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="hc-email">Business Email *</Label>
                  <Input id="hc-email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required placeholder="jane@hospitalgroup.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hc-facility">Facility / Organization</Label>
                  <Input id="hc-facility" value={form.facility} onChange={e => setForm(p => ({ ...p, facility: e.target.value }))} placeholder="General Hospital Group" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="hc-beds">Organization Size</Label>
                  <select
                    id="hc-beds"
                    value={form.beds}
                    onChange={e => setForm(p => ({ ...p, beds: e.target.value }))}
                    className="w-full mt-1 rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                  >
                    <option value="">Select size</option>
                    <option value="clinic">Small Clinic (1–50 staff)</option>
                    <option value="regional">Regional Hospital (51–500)</option>
                    <option value="system">Health System (500–5,000)</option>
                    <option value="enterprise">Enterprise (5,000+)</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="hc-message">Primary Security Concern</Label>
                <Textarea id="hc-message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} placeholder="E.g. patient data on dark web, ransomware pre-attack monitoring, HIPAA breach response..." className="mt-1 bg-background/50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hero-button w-full">
                {isSubmitting ? 'Requesting Assessment...' : 'Request Free Exposure Assessment'}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Healthcare Security & Compliance Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities designed around the specific threat profile and compliance requirements of healthcare organizations.</p>
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
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Alignment</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Healthcare Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs provide documented evidence for the external threat monitoring controls required by healthcare regulators.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'HIPAA Security Rule', req: '§164.306 — External threat risk analysis & monitoring' },
              { framework: 'HITECH Act', req: 'Breach notification support — meaningful risk assessment' },
              { framework: 'NIST CSF 2.0', req: 'DE.AE, DE.CM — Detect anomalies and monitor events' },
              { framework: 'HHS OCR Guidance', req: 'Dark web scan evidence for risk management documentation' },
              { framework: 'ISO 27001:2022', req: 'A.5.7 — Threat intelligence program evidence' },
              { framework: 'SOC 2 Type II', req: 'CC7.2 — System monitoring and threat detection' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Operational Incident Flow */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Detection Process</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">From Dark Web Signal to HIPAA-Contained Incident</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">How DarkThreat transforms a dark web threat signal into a contained, documented clinical security incident.</p>
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

      {/* SECTION 7: Final CTA */}
      <FinalCTA />

      <footer className="bg-card border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-montserrat font-bold text-foreground">DarkThreat</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2026 DarkThreat. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/industries" className="hover:text-primary">All Industries</Link>
            <Link to="/pricing" className="hover:text-primary">Pricing</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
