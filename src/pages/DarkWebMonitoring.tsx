import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, AlertTriangle, Eye, CheckCircle, XCircle, ArrowRight, Shield } from 'lucide-react';
import AppHeader from '@/components/AppHeader';
import FinalCTA from '@/components/FinalCTA';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { submitLeadForm } from '@/utils/formSubmit';

const faqs = [
  {
    q: 'How does dark web monitoring work?',
    a: 'Dark web monitoring continuously searches Tor, encrypted chat channels, forums, marketplaces, and paste sites for leaked credentials, documents, and threat actor activity tied to your organization.',
  },
  {
    q: 'What makes DarkThreat different?',
    a: 'DarkThreat combines automated collection with AI classification and analyst validation so alerts are relevant, contextualized, and actionable for your security team.',
  },
  {
    q: 'How fast are alerts delivered?',
    a: 'Most alerts are delivered in minutes from detection, giving your team time to rotate credentials, isolate systems, and contain exposure before the threat spreads.',
  },
  {
    q: 'What assets can I protect?',
    a: 'DarkThreat monitors corporate emails, domains, IP ranges, SaaS accounts, APIs, source code, and high-value user credentials across the exposed dark web.',
  },
  {
    q: 'Can this integrate with my existing tools?',
    a: 'Yes. DarkThreat supports email, webhook, SIEM, and ticketing integrations so alerts fit into your existing security workflows.',
  },
];

const DarkWebMonitoring = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields marked with *.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Free Assessment (Dark Web Monitoring)',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        interest: formData.interest,
        message: formData.message,
      });
      toast({
        title: "Request Received",
        description: "Your security assessment request has been submitted successfully.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: '',
      });
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Dark Web Monitoring',
    'name': 'DarkThreat Dark Web Monitoring Service',
    'provider': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png'
    },
    'areaServed': 'Global',
    'description': "DarkThreat's AI-powered dark web monitoring service scans millions of hidden sources to detect credential leaks and exposed corporate assets before attackers exploit them.",
    'url': 'https://darkthreat.ai/dark-web-monitoring'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring Service &amp; Cyber Threat Intelligence | DarkThreat</title>
        <meta
          name="description"
          content="DarkThreat's AI-powered dark web monitoring service scans Tor networks, hacker forums, and stealer logs to detect credential leaks and corporate risk before exploit."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://darkthreat.ai/dark-web-monitoring" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dark Web Monitoring Service &amp; Cyber Threat Intelligence | DarkThreat" />
        <meta property="og:description" content="Scans millions of dark web pages, paste sites, and encrypted chat channels in real-time to alert you on leaked credentials and exfiltrated enterprise data." />
        <meta property="og:url" content="https://darkthreat.ai/dark-web-monitoring" />
        <meta property="og:image" content="https://darkthreat.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DarkThreat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DarkThreatAI" />
        <meta name="twitter:title" content="Dark Web Monitoring Service &amp; Cyber Threat Intelligence" />
        <meta name="twitter:description" content="Scans millions of dark web pages, paste sites, and encrypted chat channels in real-time to alert you on leaked credentials and exfiltrated enterprise data." />
        <meta name="twitter:image" content="https://darkthreat.ai/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <AppHeader />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr] items-start">
          <div>
            <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              24/7 AI-Powered Visibility
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Dark Web Monitoring — <span className="glow-text">Detect hidden exposure</span> before it becomes an incident
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              DarkThreat scans the hidden internet, dark marketplaces, hacker forums, paste sites, and stealer log feeds for leaked credentials, exposed files, and threat actor chatter tied to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => (window.location.href = '/auth')} className="cta-cyan inline-flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/pricing" className="cta-outline inline-flex items-center gap-2 justify-center">
                View Pricing
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Free Consultation</span>
              </div>
              <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Get Your Free Cybersecurity Assessment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Reason for Contact *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    >
                      <option value="">Select a reason</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sales Question">Sales Question</option>
                      <option value="Demo Request">Demo Request</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">How Can We Help? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Describe your security needs or challenges..."
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border resize-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Requesting Assessment...' : 'Request Free Assessment →'}
                </button>
                <p className="text-center text-xs text-muted-foreground/70">By submitting, you agree to our <span className="underline underline-offset-2 hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>.</p>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: '2M+ sources', detail: 'Covered daily' },
            { label: '24/7 monitoring', detail: 'Hidden channels' },
            { label: 'Rapid alerts', detail: 'Minutes to detect' },
            { label: 'Low false positives', detail: 'AI filtered' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-border bg-card p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">{item.label}</p>
              <p className="text-foreground font-semibold text-lg">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card/10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is dark web monitoring?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Dark web monitoring is a defensive service that constantly scans the hidden parts of the internet for exposed data related to your brand, people, and assets. This includes Tor sites, private forums, paste sites, dark marketplaces, and stealer log feeds.
            </p>
            <p className="text-lg text-muted-foreground">
              Instead of waiting for a breach to surface in traditional security tools, DarkThreat alerts you the moment compromised credentials, leaked documents, or attack planning chatter appears on the dark web.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Credential dumps', detail: 'Compromised logins, passwords, and secrets.' },
              { title: 'Hacker forums', detail: 'Sale listings, discussions, and threat actor chatter.' },
              { title: 'Stealer logs', detail: 'Malware capture feeds with active sessions and tokens.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">{item.title}</p>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Core capabilities of Dark Web Monitoring</h2>
            <p className="text-lg text-muted-foreground">A complete monitoring service that captures the most relevant threats and delivers them with context your team can act on.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Continuous collection</h3>
              <p className="text-muted-foreground mb-4">Automated, 24/7 crawling across hidden markets, forums, paste sites, and malware logs.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Real-time dark web coverage</li>
                <li>Automated discovery of new leak sources</li>
                <li>Continuous source updates</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Asset correlation</h3>
              <p className="text-muted-foreground mb-4">Match findings to your domains, email patterns, IP ranges, and critical applications for relevant alerts only.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Executive & VIP visibility</li>
                <li>Custom asset matching</li>
                <li>Data prioritization by risk</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Actionable alerts</h3>
              <p className="text-muted-foreground mb-4">Verified threat notifications delivered to your team with source, impact, and remediation guidance.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Email, webhook, and SIEM delivery</li>
                <li>Context-rich incident details</li>
                <li>Built-in response recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why teams choose DarkThreat</h2>
            <p className="text-lg text-muted-foreground">Designed for modern security operations that need speed, accuracy, and scalable dark web coverage.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Low false positives', desc: 'AI filters and analyst validation keep noise down and signal high.' },
              { title: 'Rapid deployment', desc: 'Work starts quickly without heavy infrastructure or long onboarding.' },
              { title: 'Broad coverage', desc: 'Includes Tor, forums, paste sites, marketplaces, and malware feeds.' },
              { title: 'Actionable insights', desc: 'Findings arrive with impact, source, and recommended steps.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-8">
                <h3 className="text-xl font-montserrat font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat compares to manual monitoring</h2>
            <p className="text-lg text-muted-foreground">Manual research can’t match scale, speed, and accuracy for the hidden internet. DarkThreat is built for those gaps.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Manual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 automated scanning', true, false],
                  ['Dark web marketplace coverage', true, false],
                  ['Realtime alerts in minutes', true, false],
                  ['AI risk scoring', true, false],
                  ['Verified analyst validation', true, false],
                ].map(([cap, dt, mn]) => (
                  <tr key={cap as string} className="border-b border-border/50">
                    <td className="p-4 text-sm text-foreground">{cap}</td>
                    <td className="p-4 text-center">{dt ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />}</td>
                    <td className="p-4 text-center">{mn ? <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-montserrat">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            <Link to="/solution" className="hover:text-primary">Platform</Link>
            <Link to="/pricing" className="hover:text-primary">Pricing</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkWebMonitoring;
