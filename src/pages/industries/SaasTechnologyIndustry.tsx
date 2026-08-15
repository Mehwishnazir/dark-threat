import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Cpu, Shield, Lock, AlertTriangle, Database, CheckCircle2,
  ArrowRight, Code2, Key, Eye, FileWarning, CloudOff, GitBranch,
  Twitter, Linkedin, Github,
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
  {
    icon: Code2,
    title: 'Source Code Leakage',
    desc: 'Proprietary repositories, API keys, and internal tooling leaked on dark web paste sites and hacker forums — often months before discovery.',
  },
  {
    icon: Key,
    title: 'API Key & Token Theft',
    desc: 'Exposed API keys, OAuth tokens, and service account credentials harvested from infostealer logs and sold in underground marketplaces.',
  },
  {
    icon: CloudOff,
    title: 'Cloud Infrastructure Exposure',
    desc: 'AWS access keys, GCP service accounts, and Azure secrets posted publicly — enabling full cloud environment compromise.',
  },
  {
    icon: Eye,
    title: 'Customer Data Exfiltration',
    desc: 'Tenant PII, usage data, and subscription credentials traded on dark web forums, triggering breach notification obligations.',
  },
  {
    icon: GitBranch,
    title: 'Supply Chain Attacks',
    desc: 'Threat actors targeting your npm, PyPI, or GitHub dependencies to inject malicious code into your software supply chain.',
  },
  {
    icon: FileWarning,
    title: 'Ransom & Extortion Threats',
    desc: 'Ransomware groups listing SaaS companies as targets — threatening data publication, customer notification, and reputational damage.',
  },
];

const capabilities = [
  {
    label: 'Source Code & IP Monitoring',
    desc: 'Continuous scanning of paste sites, GitHub gists, and dark web repositories for leaked proprietary code, algorithms, and internal documentation.',
  },
  {
    label: 'API Key & Secret Detection',
    desc: 'Automated detection of API keys, OAuth tokens, database connection strings, and cloud secrets exposed in infostealer logs and forums.',
  },
  {
    label: 'Cloud Credential Surveillance',
    desc: 'Monitor for AWS, GCP, and Azure credentials being traded on underground markets before they are weaponised against your cloud environment.',
  },
  {
    label: 'Employee & Contractor Credential Watch',
    desc: 'Identify company email credentials and VPN access tokens circulating in combo lists targeting your remote workforce.',
  },
  {
    label: 'Customer Data Breach Alerts',
    desc: 'Early warning when your customer database records surface on dark web marketplaces, enabling rapid incident response and disclosure.',
  },
  {
    label: 'Compliance Evidence Exports',
    desc: 'Pre-formatted breach evidence reports aligned to SOC 2, ISO 27001, and GDPR for customer trust and regulatory submissions.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Asset Registration',
    desc: 'Register your domains, GitHub orgs, cloud account IDs, and key personnel emails — no agent installation required.',
  },
  {
    num: '02',
    title: 'Continuous Intelligence',
    desc: 'Our engines scan paste sites, dark web forums, infostealer logs, and code repositories 24/7 for your monitored assets.',
  },
  {
    num: '03',
    title: 'Enriched Alerting',
    desc: 'Receive structured alerts with context: what leaked, where it was found, who is trading it, and recommended containment steps.',
  },
  {
    num: '04',
    title: 'Trust & Compliance',
    desc: 'Generate SOC 2 and ISO 27001 evidence packages to demonstrate proactive security to enterprise customers and auditors.',
  },
];

export default function SaasTechnologyIndustry() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Industry Inquiry (SaaS & Tech)',
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
      });
      toast({
        title: 'Request Received',
        description: 'A SaaS security specialist will contact you within 24 hours.',
      });
      setForm({ name: '', email: '', company: '', message: '' });
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
    name: 'Dark Web Monitoring for SaaS & Technology Companies — DarkThreat',
    url: 'https://darkthreat.ai/industries/saas-technology',
    description:
      "Protect your SaaS platform and tech startup from source code leaks, API key theft, and cloud credential exposure with DarkThreat's dark web monitoring.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring for SaaS & Technology Companies | DarkThreat</title>
        <meta
          name="description"
          content="DarkThreat protects SaaS companies and tech firms from source code leakage, API key theft, cloud credential exposure, and supply chain attacks. SOC 2 & ISO 27001 aligned."
        />
        <link rel="canonical" href="https://darkthreat.ai/industries/saas-technology" />
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
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Industries', href: '/industries' },
                { label: 'SaaS & Technology' },
              ]}
            />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Cpu className="w-4 h-4 mr-2" /> SaaS & Technology Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for{' '}
            <span className="glow-text">SaaS & Technology Companies</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            SaaS platforms and tech companies are high-value targets for dark web actors seeking source
            code, API keys, and cloud credentials. DarkThreat gives your security team early-warning
            intelligence before breaches escalate into customer-impacting incidents.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              className="hero-button"
              onClick={() =>
                document.getElementById('saas-inquiry-form')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Request a Tech Security Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/pricing">
              <Button variant="outline" className="border-primary/30 hover:border-primary">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Threat Landscape */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Threat Landscape
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              SaaS & Tech Dark Web Threats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six active attack vectors targeting software companies, cloud-native startups, and
              technology platforms in dark web marketplaces.
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

      {/* SECTION 3: Inquiry Form */}
      <section id="saas-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Risk Assessment
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Request a SaaS Exposure Scan
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your platform and we'll run an initial dark web exposure check across your
              domains, GitHub organisations, cloud accounts, and key engineering team credentials — at
              no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Source code & repository leak scan',
                'API key & secret exposure check',
                'Cloud credential dark web search',
                'Employee & contractor credential audit',
                'Compliance report preview (SOC 2)',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">
              SaaS & Tech Company Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="saas-name">Full Name *</Label>
                  <Input
                    id="saas-name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    required
                    placeholder="Alex Smith"
                    className="mt-1 bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="saas-email">Business Email *</Label>
                  <Input
                    id="saas-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    required
                    placeholder="alex@yourapp.io"
                    className="mt-1 bg-background/50"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="saas-company">Company / Product Name</Label>
                <Input
                  id="saas-company"
                  value={form.company}
                  onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                  placeholder="Acme SaaS Inc."
                  className="mt-1 bg-background/50"
                />
              </div>
              <div>
                <Label htmlFor="saas-message">Primary Security Concern</Label>
                <Textarea
                  id="saas-message"
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  rows={4}
                  placeholder="E.g. leaked API keys, source code on paste sites, cloud credential exposure, employee credential compromise..."
                  className="mt-1 bg-background/50"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hero-button w-full">
                {isSubmitting ? 'Requesting Scan...' : 'Request Free Exposure Scan'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Capabilities */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Built for Engineering-Led Security Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six monitoring capabilities engineered for the unique threat landscape of SaaS platforms
              and technology companies.
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

      {/* SECTION 5: Compliance Mapping */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Regulatory Coverage
          </span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
            SaaS Compliance Framework Alignment
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            DarkThreat monitoring outputs satisfy evidence requirements for the frameworks that matter
            most to SaaS enterprise customers and regulators.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'SOC 2 Type II', req: 'CC7.1 — System monitoring and threat detection evidence' },
              { framework: 'ISO 27001:2022', req: 'A.5.7 Threat intelligence controls' },
              { framework: 'GDPR / UK GDPR', req: 'Art. 33 — Breach detection & 72-hour notification' },
              { framework: 'NIST CSF 2.0', req: 'DE.AE, RS.AN — Detect and respond functions' },
              { framework: 'CCPA', req: 'Data breach notification and consumer data exposure' },
              { framework: 'HIPAA (if applicable)', req: 'Security Rule — Breach discovery & risk management' },
            ].map((f) => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: How It Works */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              From Dark Web Signal to Contained Threat
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">
                  {s.num}
                </div>
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
