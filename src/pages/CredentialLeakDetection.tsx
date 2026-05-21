import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lock, Key, AlertTriangle, Mail, Cookie, ArrowRight, CheckCircle } from 'lucide-react';
import AppHeader from '@/components/AppHeader';
import FinalCTA from '@/components/FinalCTA';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  { q: 'What is a credential leak?', a: 'A credential leak occurs when usernames, passwords, API keys, or tokens belonging to your organization are exposed publicly or sold on the dark web after a breach or infostealer infection.' },
  { q: 'How do hackers exploit leaked credentials?', a: 'Attackers use credential stuffing, brute force, and direct login with valid passwords to take over accounts, pivot inside corporate networks, and stage ransomware or BEC fraud.' },
  { q: 'Can DarkThreat monitor my executives and VIPs?', a: 'Yes. You can flag specific high-value users (CEO, CFO, IT admins) for prioritized monitoring and instant alerts on any exposure.' },
  { q: 'Do you detect leaked API keys?', a: 'Yes. We scan paste sites, public Git repos, and dark web dumps for exposed AWS, Stripe, GitHub, and custom API keys tied to your domains.' },
  { q: 'How fast are alerts delivered?', a: 'Most credential leak alerts are delivered within minutes of detection via email, dashboard, webhook, or SIEM integration.' },
];

const CredentialLeakDetection = () => {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Credential Leak Detection | DarkThreat.ai</title>
        <meta name="description" content="Monitor employee and VIP credentials on the dark web. DarkThreat detects leaked passwords, API keys, and session tokens before attackers can exploit them." />
        <link rel="canonical" href="https://darkthreat.ai/credential-leak-detection" />
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
              <Button onClick={() => (window.location.href = '/auth')} className="cta-cyan inline-flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/pricing" className="cta-outline inline-flex items-center gap-2 justify-center">
                View Pricing
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-card p-8 shadow-xl">
            <h2 className="text-2xl font-montserrat font-bold text-foreground mb-5">Get Free Cybersecurity Consultation</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input type="text" placeholder="Enter your name" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                <input type="email" placeholder="your@company.com" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                <input type="text" placeholder="Your company" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input type="text" placeholder="+1234567890" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Reason for Contact *</label>
                <select className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option>Select a reason</option>
                  <option>General Inquiry</option>
                  <option>Sales Question</option>
                  <option>Demo Request</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">How Can We Help? *</label>
                <textarea rows={4} placeholder="Tell us about your security needs..." className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <Button className="w-full">Request Free Assessment</Button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to our Privacy Policy.</p>
            </form>
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

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-12">FAQ</h2>
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

      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 DarkThreat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CredentialLeakDetection;
