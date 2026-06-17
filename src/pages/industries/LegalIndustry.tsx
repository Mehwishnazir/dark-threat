import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Scale, Shield, Lock, AlertTriangle, Database, CheckCircle2,
  ArrowRight, FileWarning, Key, Eye, Briefcase, FileText
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
  { icon: Lock, title: 'Attorney Credential Theft', desc: 'Law firm partner and associate login credentials harvested by infostealer malware families and traded on dark web broker platforms.' },
  { icon: FileText, title: 'Privileged Client Leaks', desc: 'Confidential attorney-client emails, corporate secrets, and settlement documents leaked on ransomware shaming sites.' },
  { icon: Eye, title: 'Pre-Litigation Strategy Exposure', desc: 'Dark web actors selling access to M&A deal structures, patent filings, and litigation strategies prior to public disclosure.' },
  { icon: AlertTriangle, title: 'Third-Party Legal Vendor Breaches', desc: 'Breaches at forensic expert witness agencies, court reporters, or hosting providers leaking sensitive case discovery materials.' },
  { icon: Database, title: 'Trust Account Fraud Signals', desc: 'Threat actor discussions and credential exposures targeting firm trust accounts and financial routing details.' },
  { icon: FileWarning, title: 'Regulated Client Data Leaks', desc: 'Exposures of client HIPAA-protected health records, tax details, or trade secrets, violating non-disclosure agreements.' },
];

const capabilities = [
  { label: 'Partner & Executive Watch', desc: 'Continuous monitoring of C-suite and partner email credentials across underground markets and infostealer logs.' },
  { label: 'Document & IP Leak Surveillance', desc: 'Scanning ransomware sites, pastebins, and private databases for client documents, litigation files, or trade secrets.' },
  { label: 'Pre-Litigation Intel Crawling', desc: 'Monitor cybercrime channels for target company mentions, specific case codes, or upcoming legal proceedings.' },
  { label: 'Third-Party Supplier Assessment', desc: 'Assess dark web exposure profiles of expert witnesses, litigation support vendors, and external counsel.' },
  { label: 'ABA Rules Compliance Reports', desc: 'Audit-ready reports illustrating reasonable cybersecurity steps aligned with ABA Model Rules 1.1 and 1.6.' },
  { label: 'Ransomware Early-Warning Signal', desc: 'Identify early indicators of compromised network access to halt ransomware before encryption occurs.' },
];

const steps = [
  { num: '01', title: 'Firm Asset Registration', desc: 'Onboard domains, associate email lists, key client list names, and case identifiers securely with zero software agent footprint.' },
  { num: '02', title: 'Deep Web Surveillance', desc: 'Continuous, multi-threaded indexing of lawyer forums, malware command servers, Telegram logs, and breach databases.' },
  { num: '03', title: 'Context-Rich Triage', desc: 'Alerts are enriched with key identifiers showing the specific partner, client case, or document name affected.' },
  { num: '04', title: 'Ethical Compliance Evidence', desc: 'Download structured documentation demonstrating reasonable diligence in safeguarding client confidentiality.' },
];

export default function LegalIndustry() {
  const [form, setForm] = useState({ name: '', email: '', firm: '', size: '', message: '' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Industry Inquiry (Legal)',
        name: form.name,
        email: form.email,
        company: form.firm,
        interest: form.size,
        message: form.message,
      });
      toast({ title: 'Assessment Request Received', description: 'A legal cybersecurity specialist will contact you within 24 hours.' });
      setForm({ name: '', email: '', firm: '', size: '', message: '' });
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
    name: 'Dark Web Monitoring for Law Firms & Legal Services — DarkThreat',
    url: 'https://darkthreat.ai/industries/legal',
    description: 'Protect attorney-client privilege, litigation files, and firm credentials from dark web threats. Meet ABA Model Rules 1.1 & 1.6 with DarkThreat.',
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring for Law Firms & Legal Services | DarkThreat</title>
        <meta name="description" content="Protect attorney-client privilege, client PII, and firm credentials from ransomware and dark web leaks. ABA Model Rules 1.1 and 1.6 compliant monitoring." />
        <link rel="canonical" href="https://darkthreat.ai/industries/legal" />
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Legal' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Scale className="w-4 h-4 mr-2" /> Legal Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">Law Firms & Legal Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Law firms maintain highly sensitive, non-public intellectual property and client communications, making them high-priority targets. DarkThreat continuously monitors the dark web to secure privileged information, attorney credentials, and case files before they are exploited.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button" onClick={() => document.getElementById('legal-inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Legal Exposure Scan <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Legal Sector Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Active risk scenarios threatening lawyer credentials, client communications, and trial strategy across underground networks.</p>
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
      <section id="legal-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Confidential Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Find out if your firm's partner credentials or ongoing legal matters have been mentioned in dark web hacker forums, malware logs, or Telegram trade channels.
            </p>
            <ul className="space-y-3 mb-8">
              {['Firm domain & subdomain scan', 'Partner & paralegal credential watch', 'Confidential client document leak search', 'Litigation-related threat intelligence', 'ABA compliance checklist preview'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Confidential Firm Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="legal-name">Full Name *</Label>
                  <Input id="legal-name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="Jane Doe, Esq." className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="legal-email">Work Email *</Label>
                  <Input id="legal-email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required placeholder="jane@lawfirm.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="legal-firm">Firm Name</Label>
                  <Input id="legal-firm" value={form.firm} onChange={e => setForm(p => ({ ...p, firm: e.target.value }))} placeholder="Doe & Partners" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="legal-size">Firm Size</Label>
                  <Input id="legal-size" value={form.size} onChange={e => setForm(p => ({ ...p, size: e.target.value }))} placeholder="E.g., 50+ attorneys" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="legal-message">Primary Cybersecurity Concern</Label>
                <Textarea id="legal-message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} placeholder="E.g., safeguarding client records, partner credential monitoring, third-party vendor risks..." className="mt-1 bg-background/50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hero-button w-full">
                {isSubmitting ? 'Requesting Scan...' : 'Request Free Firm Scan'}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Engineered for Modern Law Practices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six automated capabilities configured to fulfill ethical duties and protect lawyer-client privilege.</p>
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
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Ethical Duty & Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">Verify that your security posture stands up to local bar ethics boards and national privacy laws.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'ABA Model Rule 1.1', req: 'Competence in assessing cybersecurity risk' },
              { framework: 'ABA Model Rule 1.6', req: 'Safeguard information relating to representation' },
              { framework: 'HIPAA (Legal counsel)', req: 'Protects clinical data stored for trial evidence' },
              { framework: 'NIST CSF 2.0', req: 'Identifies & monitors critical lawyer access risks' },
              { framework: 'GDPR (Article 32)', req: 'Securing processing operations for EU clients' },
              { framework: 'CCPA / CPRA', req: 'Ensure robust custody over consumer personal details' },
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
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Confidential Alert-to-Action Protocol</h2>
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
