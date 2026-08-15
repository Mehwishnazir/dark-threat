import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { serviceSchema, breadcrumbSchema, organizationSchema } from '@/utils/seoSchemas';
import { Link } from 'react-router-dom';
import {
  Banknote, Shield, Lock, AlertTriangle, Database, CheckCircle2,
  ArrowRight, CreditCard, Key, Eye, FileWarning, Twitter, Linkedin, Github,
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
  { icon: CreditCard, title: 'Carding & BIN Attacks', desc: 'Stolen BIN ranges, card dumps, and CVV data sold in underground card shops targeting your issued card portfolio.' },
  { icon: Key, title: 'SWIFT & Wire Fraud Signals', desc: 'Threat actor chatter coordinating SWIFT credential theft and business email compromise targeting wire transfers.' },
  { icon: Database, title: 'Banking Credential Theft', desc: 'Online banking login credentials harvested by infostealer malware families and distributed in combo lists.' },
  { icon: Eye, title: 'Insider Trading Intelligence', desc: 'Dark web discussions referencing non-public financial data — an early signal of insider threat activity.' },
  { icon: AlertTriangle, title: 'Mobile Banking Fraud', desc: 'Fake banking app kits sold to impersonate your mobile banking platform and harvest customer credentials.' },
  { icon: FileWarning, title: 'Regulatory Data Exposure', desc: 'Sensitive compliance documents, audit reports, and regulator communications leaked to dark web actors.' },
];

const schema = serviceSchema('Dark Web Monitoring for Financial Services & Banks', 'Protect your bank, credit union, or fintech from SWIFT fraud, carding attacks, insider threats, and dark web data exposure. PCI‑DSS & GLBA aligned.', 'https://darkthreat.ai/industries/financial-services');
const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Industries', url: 'https://darkthreat.ai/industries' },
  { name: 'Financial Services' },
]);
const capabilities = [
  { label: 'BIN / IIN Portfolio Monitoring', desc: 'Real-time alerts when card data matching your BIN ranges surfaces on dark web card markets.' },
  { label: 'SWIFT Threat Intelligence', desc: 'Monitor threat actor channels for SWIFT system targeting, credential listings, and fraud coordination.' },
  { label: 'Executive Credential Watch', desc: 'Continuous surveillance of C-suite and treasury team credentials across infostealer logs.' },
  { label: 'Fraud Pattern Correlation', desc: 'Correlate dark web data points with your fraud detection systems to accelerate investigation.' },
  { label: 'Regulatory Report Exports', desc: 'Pre-formatted compliance evidence exports for PCI-DSS, GLBA, and SOX audit submissions.' },
  { label: 'Incident Timeline Reconstruction', desc: 'Build dark web timelines of how your data was exfiltrated for post-breach forensics.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register your domains, BIN ranges, executive emails, and SWIFT codes — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Our engines scan card markets, fraud forums, infostealer channels, and paste sites 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Receive structured alerts with context: source, severity, affected asset, and recommended action.' },
  { num: '04', title: 'Compliance Evidence', desc: 'Download audit-ready reports for your PCI-DSS, GLBA, and internal risk management teams.' },
];

export default function FinancialServicesIndustry() {
  const [form, setForm] = useState({ name: '', email: '', institution: '', message: '' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({ formType: 'Industry Inquiry (Financial Services)', name: form.name, email: form.email, company: form.institution, message: form.message });
      toast({ title: 'Request Received', description: 'A financial threat specialist will contact you within 24 hours.' });
      setForm({ name: '', email: '', institution: '', message: '' });
    } catch (err) {
      toast({ title: 'Submission Failed', description: 'There was an error sending your request. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring for Financial Services & Banks | DarkThreat</title>
        <meta name="description" content="DarkThreat protects banks, credit unions, and fintechs from SWIFT credential theft, carding attacks, insider threats, and dark web data exposure. PCI-DSS & GLBA aligned." />
        <link rel="canonical" href="https://darkthreat.ai/industries/financial-services" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Financial Services' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Banknote className="w-4 h-4 mr-2" /> Financial Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">Financial Services & Banks</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Financial institutions are the #1 target for dark web threat actors. From SWIFT credential listings to BIN card dumps, DarkThreat gives your security and fraud teams early warning intelligence before attacks escalate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button" onClick={() => document.getElementById('fs-inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Financial Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/pricing">
              <Button variant="outline" className="border-primary/30 hover:border-primary">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sector Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Financial Sector Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six active attack vectors targeting banks, credit unions, payment processors, and investment firms on dark web networks.</p>
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
      <section id="fs-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Financial Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your institution and we'll run an initial dark web exposure check across your domain, key personnel, and known BIN ranges — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {['BIN/IIN range dark web scan', 'Executive credential check', 'Domain & subdomain exposure', 'SWIFT-related threat actor monitoring', 'Compliance report preview (PCI-DSS)'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Financial Institution Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fs-name">Full Name *</Label>
                  <Input id="fs-name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="Jane Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="fs-email">Business Email *</Label>
                  <Input id="fs-email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required placeholder="jane@bank.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="fs-institution">Institution Name</Label>
                <Input id="fs-institution" value={form.institution} onChange={e => setForm(p => ({ ...p, institution: e.target.value }))} placeholder="First National Bank" className="mt-1 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="fs-message">Primary Concern</Label>
                <Textarea id="fs-message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} placeholder="E.g. card data on dark web, SWIFT credential exposure, executive account monitoring..." className="mt-1 bg-background/50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hero-button w-full">{isSubmitting ? 'Requesting Scan...' : 'Request Free Exposure Scan'}</Button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Financial Security Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities engineered for the unique threat landscape of financial institutions.</p>
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
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Coverage</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Financial Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs satisfy evidence requirements for the most stringent financial regulatory frameworks.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'PCI-DSS v4', req: 'Req. 12.10 — External threat monitoring evidence' },
              { framework: 'GLBA Safeguards Rule', req: 'Annual risk assessment of external data exposure' },
              { framework: 'SWIFT CSP', req: 'Control 7.7 — Cyber threat intelligence integration' },
              { framework: 'SOX (IT Controls)', req: 'IT General Control evidence for access risk' },
              { framework: 'NIST CSF 2.0', req: 'GV.RM, DE.AE, RS.AN functions' },
              { framework: 'ISO 27001:2022', req: 'A.5.7 Threat intelligence controls' },
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
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How It Works</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">From Dark Web Signal to Contained Threat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center">
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
