import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, Shield, Lock, AlertTriangle, Database, CheckCircle2,
  ArrowRight, FileWarning, Key, Eye, CreditCard, ShoppingBag
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
  { icon: Lock, title: 'Customer Account Stuffing', desc: 'Shopper usernames and passwords stolen by infostealers and packed into combo lists for automated takeover campaigns.' },
  { icon: CreditCard, title: 'Carding & Payment Fraud', desc: 'Stolen customer payment card data, BIN details, and CVV codes sold in underground carding shops.' },
  { icon: ShoppingBag, title: 'Brand & Site Impersonation', desc: 'Phishing kits and typosquatted domains designed to mimic your retail portal to harvest customer cards.' },
  { icon: AlertTriangle, title: 'Magecart & Code Backdoors', desc: 'Malicious JavaScript injection scripts and backdoor access listings targeting popular shopping carts.' },
  { icon: Database, title: 'Refund-as-a-Service Schemes', desc: 'Hacker advertisements showing refunding exploits, return loops, and logistics fraud targeting your brand.' },
  { icon: FileWarning, title: 'Gift Card & Loyalty Drain', desc: 'Stolen reward account details and programmatic gift card pin checkers shared in fraud communities.' },
];

const capabilities = [
  { label: 'Credential Stuffing Defenses', desc: 'Real-time discovery of compromised user accounts on underground marketplaces to prevent credential stuffing.' },
  { label: 'Payment Card Watch', desc: 'Detect when payment details matching your transactional domains or BINs appear on card markets.' },
  { label: 'Phishing Domain Detection', desc: 'Continuous surveillance of typosquatting registrations and brand-impersonating mobile apps.' },
  { label: 'Code & backdoors Scanning', desc: 'Crawling hacker forums for Magecart scripts and platform vulnerabilities targeting your site architecture.' },
  { label: 'PCI-DSS v4.0 Reporting', desc: 'Extract automated compliance evidence aligned with PCI-DSS external threat watch mandates.' },
  { label: 'Loyalty & Refund Intel Watch', desc: 'Track threat forums for refunding tutorials or loyalty loophole listings targeting your systems.' },
];

const steps = [
  { num: '01', title: 'Brand Asset Registration', desc: 'Register primary domains, brand names, e-commerce platform types, and transactional BIN scopes securely.' },
  { num: '02', title: 'Deep Fraud Crawling', desc: 'Continuous crawling of card shops, hacker communities, Telegram fraud channels, and paste repositories.' },
  { num: '03', title: 'Enriched Alert Delivery', desc: 'Alert notifications are sent with context showing the specific shopper records, card types, or domain affected.' },
  { num: '04', title: 'PCI & Fraud Defense Support', desc: 'Download structured threat reports to update fraud filters and satisfy compliance audits.' },
];

export default function EcommerceIndustry() {
  const [form, setForm] = useState({ name: '', email: '', company: '', platform: '', message: '' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Industry Inquiry (E-Commerce)',
        name: form.name,
        email: form.email,
        company: form.company,
        interest: form.platform,
        message: form.message,
      });
      toast({ title: 'Assessment Request Received', description: 'An e-commerce threat specialist will contact you within 24 hours.' });
      setForm({ name: '', email: '', company: '', platform: '', message: '' });
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
    name: 'E-Commerce & Retail Dark Web Monitoring — Protecting Shoppers & Sales | DarkThreat',
    url: 'https://darkthreat.ai/industries/ecommerce',
    description: 'DarkThreat provides e-commerce platforms and online retailers with continuous dark web monitoring, preventing credential stuffing, carding fraud, and Magecart injection.',
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>E-Commerce & Retail Dark Web Monitoring — Protecting Shoppers | DarkThreat</title>
        <meta name="description" content="Secure your e-commerce store, customer accounts, and transactions from carding fraud and credential stuffing. PCI-DSS v4.0 aligned." />
        <link rel="canonical" href="https://darkthreat.ai/industries/ecommerce" />
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'E-Commerce' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <ShoppingCart className="w-4 h-4 mr-2" /> Retail Sector Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">E-Commerce & Retail</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Online retail transactions and customer accounts are prime targets for automated credentials stuffing and transaction fraud. DarkThreat monitors darknet card shops, Telegram leak channels, and malware logs to safeguard consumer trust and protect your checkout experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button" onClick={() => document.getElementById('retail-inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Retail Risk Scan <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">E-Commerce Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Active attack campaigns targeting online shopping sites, checkout pipelines, and brand assets.</p>
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
      <section id="retail-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Retail Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Identify if credentials of your customers, company domains, or transactional portals have been shared in fraud communities, Telegram log drops, or card shops.
            </p>
            <ul className="space-y-3 mb-8">
              {['Digital brand & store domain scan', 'Card BIN number exposure lookup', 'Customer account credential watch', 'Typosquatted domain alert preview', 'PCI-DSS v4.0 security alignment'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">E-Commerce Brand Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="retail-name">Full Name *</Label>
                  <Input id="retail-name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="John Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="retail-email">Business Email *</Label>
                  <Input id="retail-email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required placeholder="john@store.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="retail-company">Company Name</Label>
                  <Input id="retail-company" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} placeholder="Retail Brand Inc." className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="retail-platform">E-Commerce Platform</Label>
                  <Input id="retail-platform" value={form.platform} onChange={e => setForm(p => ({ ...p, platform: e.target.value }))} placeholder="E.g., Shopify, Magento, WooCommerce" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="retail-message">Primary Cybersecurity Concern</Label>
                <Textarea id="retail-message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} placeholder="E.g., credential stuffing attacks, gift card fraud, look-alike domain protection..." className="mt-1 bg-background/50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hero-button w-full">
                {isSubmitting ? 'Requesting Scan...' : 'Request Free Brand Scan'}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Designed for Secure Commerce</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Automated threat watch parameters configured for fast-growing transactional applications.</p>
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
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Transactional Compliance</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Payment Security & Privacy Frameworks</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat aligns with transactional audit standards to defend digital storefronts.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'PCI-DSS v4.0', req: 'Continuous external threat intelligence requirements' },
              { framework: 'GDPR Directive', req: 'Protection of European consumer account databases' },
              { framework: 'CCPA / CPRA Act', req: 'Ensure credit and access records remain uncompromised' },
              { framework: 'FTC Guidelines', req: 'Protects customer privacy and guards against commercial fraud' },
              { framework: 'ISO 27001 (A.14)', req: 'Protection of web transaction services' },
              { framework: 'NIST CSF (DE.CM)', desc: 'Detect and trace external brand compromises' },
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
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">E-Commerce Cyber Risk Management</h2>
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
