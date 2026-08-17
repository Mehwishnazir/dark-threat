import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lock, Key, AlertTriangle, Mail, Cookie, ArrowRight, CheckCircle, Shield } from 'lucide-react';
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
  { q: 'What is a credential leak?', a: 'A credential leak occurs when usernames, passwords, API keys, or tokens belonging to your organization are exposed publicly or sold on the dark web after a breach or infostealer infection.' },
  { q: 'How do hackers exploit leaked credentials?', a: 'Attackers use credential stuffing, brute force, and direct login with valid passwords to take over accounts, pivot inside corporate networks, and stage ransomware or BEC fraud.' },
  { q: 'Can DarkThreat monitor my executives and VIPs?', a: 'Yes. You can flag specific high-value users (CEO, CFO, IT admins) for prioritized monitoring and instant alerts on any exposure.' },
  { q: 'Do you detect leaked API keys?', a: 'Yes. We scan paste sites, public Git repos, and dark web dumps for exposed AWS, Stripe, GitHub, and custom API keys tied to your domains.' },
  { q: 'How fast are alerts delivered?', a: 'Most credential leak alerts are delivered within minutes of detection via email, dashboard, webhook, or SIEM integration.' },
];

const CredentialLeakDetection = () => {
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
        formType: 'Free Assessment (Credential Leak Detection)',
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
    'serviceType': 'Credential Leak Detection',
    'name': 'DarkThreat Credential Leak Detection Service',
    'provider': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png'
    },
    'areaServed': 'Global',
    'description': "Proactively monitor employee, VIP, and administrative credentials across infostealer logs, public Git repositories, and underground breach databases.",
    'url': 'https://darkthreat.ai/credential-leak-detection'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Credential Leak Detection &amp; Compromised Account Monitoring | DarkThreat</title>
        <meta
          name="description"
          content="Identify leaked employee, admin, and VIP credentials in real time. DarkThreat scans infostealer logs, Git repositories, and paste sites to prevent credential stuffing."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://darkthreat.ai/credential-leak-detection" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credential Leak Detection &amp; Compromised Account Monitoring | DarkThreat" />
        <meta property="og:description" content="Proactively discover compromised credentials, exposed API keys, and active session tokens on the dark web before they lead to ransomware or unauthorized network access." />
        <meta property="og:url" content="https://darkthreat.ai/credential-leak-detection" />
        <meta property="og:image" content="https://darkthreat.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DarkThreat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DarkThreatAI" />
        <meta name="twitter:title" content="Credential Leak Detection &amp; Compromised Account Monitoring" />
        <meta name="twitter:description" content="Proactively discover compromised credentials, exposed API keys, and active session tokens on the dark web before they lead to ransomware or unauthorized network access." />
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
              Credential Leak Detection
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Credential Leak Detection — <span className="glow-text">Protect accounts</span> before attackers log in
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              DarkThreat detects leaked usernames, passwords, API keys, and session tokens across breach dumps, paste sites, public repos, and stealer logs so you can shut down account takeover before it begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="cta-cyan inline-flex items-center gap-2">
                <Link to="/contact">Book Demo <ArrowRight className="w-4 h-4" /></Link>
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
            { label: 'VIP account monitoring', detail: 'Executive visibility' },
            { label: 'API key discovery', detail: 'Public repo + paste scans' },
            { label: 'Session token alerting', detail: 'Active credential compromise' },
            { label: 'Rapid response', detail: 'Minutes from detection' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is credential leak detection?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Credential leak detection identifies compromised passwords, API keys, and session tokens before attackers can use them. DarkThreat monitors breach dumps, paste sites, GitHub, and stealer logs for data tied to your users and systems.
            </p>
            <p className="text-lg text-muted-foreground">
              When leaked credentials are found, your team receives verified alerts with the impacted account, source, and recommended mitigation so you can reset access and block abuse fast.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Email + password leaks', detail: 'Compromised employee logins and SaaS accounts.' },
              { title: 'API keys', detail: 'Public repo and paste site exposures for cloud secrets.' },
              { title: 'Session cookies', detail: 'Active tokens found in malware and stealer logs.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat detects exposed credentials</h2>
            <p className="text-lg text-muted-foreground">A layered detection process built for the real credential economy on the dark web.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Targeted asset onboarding</h3>
              <p className="text-muted-foreground">Onboard executive emails, SaaS domains, cloud accounts, and service names so detections are tied to your business.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Leak discovery</h3>
              <p className="text-muted-foreground">Scan breach dumps, paste archives, GitHub leaks, and stealer log feeds for tokens, passwords, and exposed secrets.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Verified alerting</h3>
              <p className="text-muted-foreground">Deliver verified credential alerts with risk, source, and impact so your team can act before abuse occurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why DarkThreat is the right fit for credential protection</h2>
            <p className="text-lg text-muted-foreground">Our service is built to detect not just leaks, but the actual credentials attackers use to breach business systems.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'High-value account coverage', desc: 'Executive and admin credentials are prioritized for immediate alerting.' },
              { title: 'API and secret detection', desc: 'Exposed cloud keys and tokens are identified before they are abused.' },
              { title: 'Minimal noise', desc: 'AI filters remove irrelevant findings and ground alerts in real risk.' },
              { title: 'Action-first alerts', desc: 'Each alert includes context and recommended remediation steps.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-8">
                <h3 className="text-xl font-montserrat font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
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

export default CredentialLeakDetection;
