import { Button } from '@/components/ui/button';
import {
  Shield,
  Users,
  Award,
  Target,
  Twitter,
  Linkedin,
  Github,
  AlertTriangle,
  Database,
  Lock,
  Eye,
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import AppHeader from '@/components/AppHeader';
import TrialModal from '@/components/TrialModal';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import Breadcrumb from '@/components/Breadcrumb';
import FinalCTA from '@/components/FinalCTA';

const About = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DarkThreat',
    url: 'https://darkthreat.ai',
    logo: 'https://darkthreat.ai/logo.png',
    description: 'AI-powered dark web monitoring and threat intelligence platform protecting organizations worldwide',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/DarkThreatAI',
      'https://linkedin.com/company/darkthreat',
      'https://github.com/darkthreat'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@darkthreat.ai'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Helmet>
        <title>About DarkThreat | Dark Web Intelligence Experts</title>
        <meta name="description" content="Meet the team behind DarkThreat — cybersecurity researchers and engineers building the most comprehensive dark web monitoring platform for modern businesses." />
        <link rel="canonical" href="https://darkthreat.ai/about" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      {/* Header */}
      <AppHeader />

      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        
        {/* 3D Sphere Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow" />}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
          </div>
          
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            Digital Risk Resistance
          </div>

          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            We Predict and Prevent Cyber Attacks <span className="glow-text">Before They Occur</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            At DarkThreat, our mission is to build the world's fastest and most reliable threat intelligence platform, transforming cybersecurity from reactive defense to proactive cyber resistance.
          </p>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-28 left-10 animate-float delay-1000 pointer-events-none hidden md:block">
          <Shield className="text-primary w-9 h-9 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-16 animate-float delay-2000 pointer-events-none hidden md:block">
          <AlertTriangle className="text-primary w-8 h-8 opacity-40" />
        </div>
      </section>

      {/* SECTION 2: Our Origin / The Story */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark border-t border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
                Our Genesis
              </span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 leading-tight">
                Our Story: Infiltrating the Cyber Underground
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2024, DarkThreat set out to solve the critical blind spot that traditional cybersecurity tools ignored: the external threat landscape. While firewalls and endpoint agents monitor what's inside, organizations had no automated visibility into what attackers were planning outside on private chat channels, underground markets, and dark web networks.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our founders—a collective of intelligence analysts and machine learning researchers—realized that manual threat hunting couldn't scale. They engineered DarkThreat to continuously crawl, parse, and catalog deep and dark web networks, delivering early warning intelligence before exposures escalate into active breaches.
              </p>
              <Button
                onClick={() => setIsTrialModalOpen(true)}
                className="hero-button"
              >
                Join the Defense
              </Button>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] filter blur-xl pointer-events-none"></div>
              <div className="relative rounded-[2rem] border border-border bg-card/60 p-8 backdrop-blur-md shadow-2xl">
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Key Milestones
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 border-l border-primary/30 pl-4 pb-4">
                    <span className="text-primary font-bold">2024</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Company Founded</h4>
                      <p className="text-sm text-muted-foreground">Established by government threat hunters and data scientists.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l border-primary/30 pl-4 pb-4">
                    <span className="text-primary font-bold">2025</span>
                    <div>
                      <h4 className="font-semibold text-foreground">1M daily sources ingested</h4>
                      <p className="text-sm text-muted-foreground">Ingestion architecture scaled to cover major hacker channels.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pl-4">
                    <span className="text-primary font-bold">2026</span>
                    <div>
                      <h4 className="font-semibold text-foreground">2M+ sources + SOC validation</h4>
                      <p className="text-sm text-muted-foreground">Machine-learning parsing validated by 24/7 analyst triage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Principles (Emulating Human Cognition) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Defenders Mindset
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Core Principles: Mimicking Threat Analysts at Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We replace tedious manual collection with smart automation designed to think and pivot like an analyst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Actionable &amp; Noise-Free
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                By utilizing machine learning classifiers, we eliminate irrelevant noise and alert duplication, ensuring security teams only receive high-priority alerts with context.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Continuous &amp; Agentless
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Zero installation. The platform operates externally, monitoring public repositories, paste sites, and closed forums 24/7 without touching your infrastructure.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Verified Accuracy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We cross-reference leaked data against verified enterprise assets, confirming valid corporate credentials, active session tokens, and exposed code repositories.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Attacker-Centric Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We analyze threat actor groups, their current campaigns, infrastructure, and target interests to know not just what is exposed, but who is seeking to exploit it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Proprietary Technology Hub */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background border-t border-b border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Engine Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4 animate-pulse">
              Proprietary Threat Intelligence Engine
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four synchronized AI engines that crawl, analyze, and enrich threat data at machine speed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Asset Exposure</h3>
              <p className="text-sm text-muted-foreground">Maps external networks to identify shadow IT, misconfigured cloud storage, and open services.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Database className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Dark Web Ingestor</h3>
              <p className="text-sm text-muted-foreground">Continuously indexes marketplaces, paste sites, private chat servers (Telegram/Discord), and Onion sites.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Lock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Credential Leak</h3>
              <p className="text-sm text-muted-foreground">Monitors combo lists, infostealer logs, and pastebins, alerting on company email credentials in real time.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Threat Enrichment</h3>
              <p className="text-sm text-muted-foreground">Maps indicators to active ransomware groups, CVE vulnerabilities, and provides targeted remediation steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Trust Indicators & Stats */}
      <section className="py-24 px-6 bg-card/25">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16 border-b border-border/30 pb-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2">500+</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Protected Enterprises</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-primary font-bold text-primary mb-2">10M+</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Threats Monitored</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2">2M+</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Live Data Sources</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2">99.9%</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Alert Accuracy SLA</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">Compliance &amp; Operational Alignment</h3>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-semibold">
              <span className="px-4 py-2 rounded-xl bg-card border border-border">ISO 27001</span>
              <span className="px-4 py-2 rounded-xl bg-card border border-border">NIST framework</span>
              <span className="px-4 py-2 rounded-xl bg-card border border-border">GDPR compliant</span>
              <span className="px-4 py-2 rounded-xl bg-card border border-border">HIPAA ready</span>
              <span className="px-4 py-2 rounded-xl bg-card border border-border">PCI-DSS support</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Team & Leaders */}
      <section className="py-24 px-6 border-t border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Intelligence Specialists
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Elite Security Researchers &amp; Engineers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our specialists combine decades of expertise in cyber threat analysis, intelligence gathering, and security operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-border bg-card p-6 text-center hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] transition duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                Threat Hunting Division
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Elite team of analysts investigating forum chatter, ransomware communications, and zero-day exchanges.
              </p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 text-center hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] transition duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Cpu className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                Security Engineering
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Architects and developers building fast, agentless crawlers and high-performance ingestion pipelines.
              </p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Github className="w-4 h-4" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 text-center hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] transition duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                Advisory Council
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cybersecurity veterans advising on data privacy regulations, MS-ISAC integrations, and corporate governance.
              </p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <FinalCTA />

      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

      {/* Footer */}
      <footer className="relative bg-card border-t border-border py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence platform protecting your organization 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/DarkThreatAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/darkthreat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/darkthreat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/dark-web-monitoring" className="text-muted-foreground hover:text-primary">Dark Web Monitoring</Link></li>
                <li><Link to="/credential-leak-detection" className="text-muted-foreground hover:text-primary">Credential Leak Detection</Link></li>
                <li><Link to="/data-leak-detection" className="text-muted-foreground hover:text-primary">Data Leak Detection</Link></li>
                <li><Link to="/compare/darkthreat-vs-darkowl" className="text-muted-foreground hover:text-primary">vs DarkOwl</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/platform-terms" className="text-muted-foreground hover:text-primary">Platform Terms of Use</Link></li>
                <li><Link to="/website-terms" className="text-muted-foreground hover:text-primary">Website Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;