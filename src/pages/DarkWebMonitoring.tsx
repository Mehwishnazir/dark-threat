import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Search, AlertTriangle, Database, Eye, Lock, CheckCircle, XCircle, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import FinalCTA from '@/components/FinalCTA';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How does dark web monitoring work?',
    a: 'Dark web monitoring works by continuously crawling hidden services on Tor and I2P, paste sites, hacker forums, Telegram channels, and stealer log marketplaces. Detected mentions of your domains, emails, or assets are classified by AI and sent as real-time alerts.',
  },
  {
    q: 'Is dark web monitoring worth it?',
    a: 'Yes. With the average breach costing $4.37M and taking 280 days to detect, early warning of leaked credentials or chatter targeting your brand pays for itself the first time it prevents an account takeover or ransomware incident.',
  },
  {
    q: 'What data does dark web monitoring find?',
    a: 'It finds leaked employee and customer credentials, API keys, session tokens, financial records, source code, internal documents, brand impersonations, and discussions of planned attacks against your organization.',
  },
  {
    q: 'How quickly are threats detected?',
    a: 'DarkThreat issues alerts within minutes of new exposure appearing across our monitored sources, compared to industry averages of weeks or months for manual review.',
  },
  {
    q: 'How much does dark web monitoring cost?',
    a: 'DarkThreat plans start at $288/month for the Standard tier. Enterprise is $490/month with broader coverage. MSSP white-label pricing is custom. See the Pricing page for full details.',
  },
];

const DarkWebMonitoring = () => {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring Service | DarkThreat.ai</title>
        <meta name="description" content="DarkThreat's AI-powered dark web monitoring service scans millions of dark web sources 24/7 to detect credential leaks and data breaches before attackers exploit them." />
        <link rel="canonical" href="https://darkthreat.ai/dark-web-monitoring" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Set Up Dark Web Monitoring for Your Business",
          "description": "A step-by-step guide to implementing dark web monitoring using DarkThreat",
          "step": [
            {
              "@type": "HowToStep",
              "position": "1",
              "name": "Connect Your Assets",
              "text": "Add your company domains, employee email domains, IP ranges, and brand keywords to the DarkThreat monitoring dashboard. Setup takes under 5 minutes."
            },
            {
              "@type": "HowToStep",
              "position": "2",
              "name": "AI Monitors 24/7",
              "text": "DarkThreat's AI engine continuously scans 2M+ dark web sources including Tor hidden services, paste sites, hacker forums, Telegram channels, and stealer log marketplaces for your assets."
            },
            {
              "@type": "HowToStep",
              "position": "3",
              "name": "Receive Instant Alerts",
              "text": "When a match is detected, you receive real-time alerts via email, dashboard notification, or webhook integration with your SIEM. Average alert delivery: under 5 minutes from detection."
            }
          ]
        })}</script>
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 py-4 md:py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary">About</Link>
            <Button onClick={() => (window.location.href = '/auth')} className="hero-button">Start Free Trial</Button>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 hero-bg-layered overflow-hidden">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="hero-badge mb-6"><span className="live-dot" /> 24/7 Monitoring</span>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6 mt-6">
            Dark Web Monitoring Service — <span className="glow-text">Detect Threats</span> Before They Hit Your Business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            AI-driven scanning of 2M+ dark web sources, hacker forums, paste sites, and stealer logs — alerts in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => (window.location.href = '/auth')} className="cta-cyan inline-flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/pricing" className="cta-outline inline-flex items-center gap-2 justify-center">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">What is dark web monitoring?</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Dark web monitoring is a cybersecurity practice in which specialized tools continuously scan the hidden parts of the internet — including Tor and I2P sites, private hacker forums, encrypted Telegram channels, paste sites, and underground marketplaces — for stolen data, leaked credentials, and conversations referencing your organization.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Unlike traditional perimeter security tools that defend the inside of your network, dark web monitoring extends visibility outward to where attackers actually trade and plan. When an employee password, customer record, internal document, or domain mention appears in a credential dump or stealer log, monitoring flags it immediately so your team can rotate keys, force resets, and contain exposure before attackers weaponize it.
          </p>
          <p className="text-lg text-muted-foreground">
            Modern dark web monitoring services like DarkThreat combine high-volume crawlers, threat intelligence feeds, and AI-based classification to filter out noise and deliver only the alerts that matter — turning a virtually invisible threat surface into something measurable and defensible.
          </p>
        </div>
      </section>

      {/* How DarkThreat monitors */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">How DarkThreat monitors the dark web</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Search className="w-10 h-10 text-primary" />, title: '1. Crawl', desc: 'Distributed crawlers index 2M+ sources across Tor, I2P, paste sites, forums, marketplaces, and Telegram.' },
              { icon: <Eye className="w-10 h-10 text-primary" />, title: '2. Classify', desc: 'AI models match findings to your domains, executives, and assets, then score risk to suppress false positives.' },
              { icon: <AlertTriangle className="w-10 h-10 text-primary" />, title: '3. Alert', desc: 'Verified threats are pushed to your dashboard, email, and SIEM in minutes with full context and remediation steps.' },
            ].map((s) => (
              <div key={s.title} className="threat-card text-center">
                <div className="flex justify-center mb-4">{s.icon}</div>
                <h3 className="text-xl font-montserrat font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats detected */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">Types of threats we detect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Lock />, title: 'Credential dumps', desc: 'Email/password combos from breached databases.' },
              { icon: <Database />, title: 'Paste sites', desc: 'Pastebin, GhostBin, and clones leaking sensitive snippets.' },
              { icon: <Eye />, title: 'Hacker forums', desc: 'BreachForums, XSS, Exploit.in chatter targeting your brand.' },
              { icon: <Shield />, title: 'Stealer logs', desc: 'Infostealer malware logs containing live session cookies.' },
            ].map((t) => (
              <div key={t.title} className="threat-card">
                <div className="text-primary mb-3">{t.icon}</div>
                <h3 className="font-montserrat font-bold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="threat-card">
            <div className="text-5xl font-montserrat font-bold glow-text mb-2">$4.37M</div>
            <p className="text-muted-foreground">Average cost of a data breach</p>
          </div>
          <div className="threat-card">
            <div className="text-5xl font-montserrat font-bold glow-text mb-2">280 Days</div>
            <p className="text-muted-foreground">Average time to identify and contain a breach</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">DarkThreat vs. manual monitoring</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse threat-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-montserrat">Capability</th>
                  <th className="p-4 font-montserrat text-primary">DarkThreat</th>
                  <th className="p-4 font-montserrat text-muted-foreground">Manual / In-house</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 automated scanning', true, false],
                  ['2M+ sources covered', true, false],
                  ['Real-time alerts (minutes)', true, false],
                  ['AI-based false-positive filtering', true, false],
                  ['Stealer log + Telegram coverage', true, false],
                  ['Dedicated analyst time required', false, true],
                ].map(([cap, dt, mn]) => (
                  <tr key={cap as string} className="border-b border-border/50">
                    <td className="p-4">{cap}</td>
                    <td className="p-4 text-center">{dt ? <CheckCircle className="w-5 h-5 text-primary inline" /> : <XCircle className="w-5 h-5 text-muted-foreground inline" />}</td>
                    <td className="p-4 text-center">{mn ? <CheckCircle className="w-5 h-5 text-muted-foreground inline" /> : <XCircle className="w-5 h-5 text-muted-foreground inline" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">Frequently asked questions</h2>
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

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 DarkThreat. All rights reserved. <Link to="/pricing" className="text-primary hover:underline">View Pricing</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default DarkWebMonitoring;
