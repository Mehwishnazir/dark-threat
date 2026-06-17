import { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { serviceSchema, breadcrumbSchema, organizationSchema } from '@/utils/seoSchemas';
import { Link } from 'react-router-dom';
import {
  Banknote, Shield, Lock, AlertTriangle, Database, CheckCircle2,
  ArrowRight, CreditCard, Key, Eye, FileWarning, Twitter, Linkedin, Github, MapPin
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
  { icon: AlertTriangle, title: 'Regional Threat Activity', desc: 'Continuous tracking of threat actor groups specifically targeting organizations within the New York City business ecosystem.' },
  { icon: Key, title: 'Compromised Credentials', desc: 'Real-time alerts when employee logins or customer credentials from New York City businesses surface on dark web markets.' },
  { icon: Database, title: 'Data Exfiltration', desc: 'Detection of sensitive corporate documents, intellectual property, or customer data leaked to underground forums.' },
  { icon: Lock, title: 'Ransomware Pre-cursors', desc: 'Early warning signals of initial access brokers selling access to corporate networks in New York City.' },
  { icon: Eye, title: 'Brand Impersonation', desc: 'Identification of typosquatted domains and fake social media profiles impersonating your local brand.' },
  { icon: FileWarning, title: 'Supply Chain Risk', desc: 'Monitoring of third-party vendors and regional partners for security breaches that could impact your operations.' },
];

const schema = {
  ...serviceSchema('Dark Web Monitoring in New York City', 'Protect your New York City organization with advanced Dark Web Monitoring. Detect and remediate threats before they become data breaches.', 'https://darkthreat.ai/dark-web-monitoring/new-york-city'),
  areaServed: {
    '@type': 'Place',
    name: 'New York City'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'New York City Dark Web Monitoring', url: 'https://darkthreat.ai/dark-web-monitoring/new-york-city' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Dark Web Monitoring critical for businesses in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Businesses in New York City are increasingly targeted by cybercriminals due to the region\'s economic concentration. Dark Web Monitoring provides early warning capabilities to detect threats before they escalate into major breaches.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can DarkThreat detect a breach involving our New York City operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our proprietary engines scan dark web forums, telegram channels, and paste sites 24/7. When your data is exposed, we typically trigger an alert within minutes of the initial leak.'
      }
    }
  ]
};

export default function DarkWebMonitoringNewYorkCity() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Location Inquiry (Dark Web Monitoring - New York City)',
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
      });
      toast({ title: 'Request Received', description: 'A regional threat specialist will contact you shortly.' });
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      toast({ title: 'Submission Failed', description: 'There was an error sending your request. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring in New York City | Enterprise Cybersecurity by DarkThreat</title>
        <meta name="description" content="Protect your New York City organization with advanced Dark Web Monitoring. Detect and remediate threats before they become data breaches. Book a demo today." />
        <link rel="canonical" href="https://darkthreat.ai/dark-web-monitoring/new-york-city" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <AppHeader />

      {/* Hero Section */}
      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Suspense fallback={null}><ThreatSphere /></Suspense>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'New York City' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> Serving New York City Enterprises
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Enterprise Dark Web Monitoring for <span className="glow-text">New York City</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Gain continuous visibility into external threats targeting your organization. From dark web data leaks to exposed employee credentials, DarkThreat provides actionable intelligence for businesses operating in New York City.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button" onClick={() => document.getElementById('regional-inquiry')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-primary/30 hover:border-primary">Contact Local Expert</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regional Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Protecting New York City from Cyber Risk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Threat actors continuously target the region's top enterprises. We detect exposures before they become breaches.</p>
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

      {/* Inquiry Form */}
      <section id="regional-inquiry" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Dark Web Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Find out what threat actors already know about your New York City-based operations. We'll run a preliminary scan across your domain and key personnel.
            </p>
            <ul className="space-y-3 mb-8">
              {['Domain & subdomain exposure', 'Compromised employee credentials', 'Brand impersonation check', 'Dark web marketplace mentions'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Security Assessment Request</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required placeholder="Jane Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required placeholder="jane@company.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} placeholder="Acme Corp" className="mt-1 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="message">Primary Concern</Label>
                <Textarea id="message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={4} placeholder="E.g. executive protection, leaked databases..." className="mt-1 bg-background/50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="hero-button w-full">{isSubmitting ? 'Requesting Scan...' : 'Request Free Scan'}</Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">Why is Dark Web Monitoring critical for businesses in New York City?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Businesses in New York City are increasingly targeted by cybercriminals due to the region's economic concentration. Dark Web Monitoring provides early warning capabilities to detect threats before they escalate into major breaches.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">How quickly can DarkThreat detect a breach involving our New York City operations?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Our proprietary engines scan dark web forums, telegram channels, and paste sites 24/7. When your data is exposed, we typically trigger an alert within minutes of the initial leak.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      <footer className="bg-card border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-montserrat font-bold text-foreground">DarkThreat</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2026 DarkThreat. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <Link to="/pricing" className="hover:text-primary">Pricing</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
