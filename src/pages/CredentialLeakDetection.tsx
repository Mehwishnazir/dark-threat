import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lock, Key, AlertTriangle, Mail, Code, Cookie, ArrowRight, CheckCircle } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import FinalCTA from '@/components/FinalCTA';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
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
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Credential Leak Detection | DarkThreat.ai</title>
        <meta name="description" content="Monitor employee and VIP credentials on the dark web. DarkThreat detects leaked passwords, API keys, and session tokens before attackers can exploit them." />
        <link rel="canonical" href="https://darkthreat.ai/credential-leak-detection" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <header className="fixed top-0 left-0 right-0 py-4 md:py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">DARK<span className="text-primary">THREAT</span></Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
            <Button onClick={() => (window.location.href = '/auth')} className="hero-button">Start Free Trial</Button>
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-6 hero-bg-layered overflow-hidden">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Credential Leak Detection — Monitor Employee &amp; VIP <span className="glow-text">Account Exposure</span> on the Dark Web
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Real-time alerts the moment a corporate credential, API key, or session token surfaces in a breach dump or stealer log.
          </p>
          <Button onClick={() => (window.location.href = '/auth')} className="cta-cyan inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold mb-6">What are credential leaks?</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Credential leaks are exposures of valid login data — emails, passwords, API tokens, or session cookies — that end up on the dark web after a breach, phishing attack, or infostealer malware infection on an employee device.
          </p>
          <p className="text-lg text-muted-foreground">
            Once leaked, these credentials are weaponized within hours. Attackers run automated credential-stuffing tools across thousands of services, knowing that password reuse will hand them access to corporate inboxes, SaaS apps, VPNs, and admin panels.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-12">How hackers exploit stolen credentials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="threat-card"><div className="text-4xl glow-text font-bold mb-2">61%</div><p className="text-muted-foreground">of breaches involve stolen credentials</p></div>
            <div className="threat-card"><div className="text-4xl glow-text font-bold mb-2">24h</div><p className="text-muted-foreground">avg. time from leak to first credential-stuffing attempt</p></div>
            <div className="threat-card"><div className="text-4xl glow-text font-bold mb-2">15B+</div><p className="text-muted-foreground">credentials currently circulating on the dark web</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">DarkThreat's detection process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: '1. Onboard assets', d: 'Add your domains, executive emails, and key API key prefixes.' },
              { t: '2. Continuous scan', d: 'We match new dumps and stealer logs against your asset list 24/7.' },
              { t: '3. Verified alert', d: 'You receive a contextualized alert with the source, exposure type, and recommended action.' },
            ].map((s) => (
              <div key={s.t} className="threat-card text-center">
                <h3 className="text-xl font-montserrat font-bold mb-3">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Types of credentials monitored</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Mail />, t: 'Email + password', d: 'Corporate logins from breach dumps and combolists.' },
              { icon: <Key />, t: 'API keys', d: 'AWS, Stripe, GitHub, and custom keys exposed in pastes.' },
              { icon: <Cookie />, t: 'Session tokens', d: 'Active session cookies from infostealer logs.' },
            ].map((c) => (
              <div key={c.t} className="threat-card">
                <div className="text-primary mb-3">{c.icon}</div>
                <h3 className="font-montserrat font-bold mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert demo mockup */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Real-time alert</h2>
          <div className="threat-card border-primary/50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-montserrat font-bold">CRITICAL — Credential Exposure</span>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="text-foreground font-mono">cfo@yourcompany.com</span> exposed in stealer log <span className="font-mono">RedLine_2026_03_batch.txt</span>
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">Stealer log</span>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">Plaintext password</span>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">VIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">FAQ</h2>
          <Accordion type="single" collapsible>
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

      <footer className="bg-card border-t border-border py-8 text-center text-muted-foreground">
        <p>&copy; 2025 DarkThreat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CredentialLeakDetection;
