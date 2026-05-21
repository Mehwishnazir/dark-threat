import { Suspense, useState, lazy } from 'react';
import { Button } from '@/components/ui/button';
const ThreatSphere = lazy(() => import('@/components/ThreatSphere'));
import AppHeader from '@/components/AppHeader';
import AnimatedBackground from '@/components/AnimatedBackground';
import TrustBar from '@/components/TrustBar';
import FinalCTA from '@/components/FinalCTA';
import TrialModal from '@/components/TrialModal';
import PricingCard from '@/components/PricingCard';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Shield, Search, AlertTriangle, Users, Database, Eye, Globe, Lock,
  Linkedin, Twitter, Github, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DarkThreat',
  url: 'https://darkthreat.ai',
  logo: { '@type': 'ImageObject', url: 'https://darkthreat.ai/logo.png' },
  sameAs: ['https://twitter.com/DarkThreatAI', 'https://linkedin.com/company/darkthreat'],
  description: 'AI-powered dark web monitoring and threat intelligence platform',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@darkthreat.ai',
  },
};

const Index = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background relative">
      <Helmet>
        <title>DarkThreat | AI-Powered Dark Web Monitoring</title>
        <meta name="description" content="DarkThreat delivers AI-powered dark web monitoring, credential leak detection, and threat intelligence for modern security teams." />
        <script type="application/ld+json">{JSON.stringify(ORG_JSON_LD)}</script>
      </Helmet>

      <AppHeader />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-layered pt-24">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow" />}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            LIVE • 2M+ Dark Web Sources Monitored
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring &amp; Threat Intelligence built for modern security teams
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground mb-8">
            From lean security teams to enterprise SOCs, DarkThreat protects critical infrastructure, detects threats before they escalate, and keeps your compliance program audit-ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsTrialModalOpen(true)}
              className="cta-cyan inline-flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/request-demo" className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
              Get a Live Demo
            </Link>
          </div>
        </div>

        <div className="absolute top-24 left-10 animate-float delay-1000 pointer-events-none">
          <Shield className="text-primary w-9 h-9 opacity-70" />
        </div>
        <div className="absolute bottom-24 right-16 animate-float delay-2000 pointer-events-none">
          <AlertTriangle className="text-primary w-8 h-8 opacity-50" />
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {[
            'ISO 27001 Aligned',
            'NIST Framework Ready',
            'HIPAA Compliant Tools',
            'PCI-DSS Support',
            '24/7 SOC Monitoring'
          ].map((label) => (
            <div key={label} className="rounded-2xl bg-card/80 border border-border px-4 py-3 shadow-sm">
              {label}
            </div>
          ))}
        </div>
      </section>

      <TrustBar />

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative rounded-[2rem] border border-border bg-card/80 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="h-[420px] rounded-[1.75rem] overflow-hidden border border-border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-inner p-8 text-white">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">About DarkThreat</span>
                  <h2 className="mt-6 text-3xl font-montserrat font-bold leading-tight">The cybersecurity partner built for modern threats</h2>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    DarkThreat is a full-spectrum cybersecurity platform combining AI-powered monitoring with expert SOC workflows. We help you gain unified visibility, stop attacks faster, and stay compliant across cloud, hybrid, and on-prem environments.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Unified Visibility', value: 'Single pane across cloud, endpoint, network, and SaaS signals.' },
                    { title: 'AI-First Platform', value: 'Machine learning that refines detection and eliminates noise.' },
                    { title: 'Expert-Led SOC', value: '24/7 triage support with analyst validation.' },
                    { title: 'Fast Deployment', value: 'Operational in days, not months with agentless onboarding.' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-6">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">About DarkThreat</p>
              <h3 className="mt-4 text-4xl font-montserrat font-bold text-foreground">A full-spectrum security platform that protects your attack surface and streamlines response.</h3>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                DarkThreat blends broad dark web visibility with credential leak detection, threat intelligence, and data removal services. The result is a proactive defense posture for teams that cannot afford to wait for threats to appear.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link to="/about" className="rounded-3xl border border-border bg-card/70 px-6 py-5 text-left transition hover:border-primary hover:bg-primary/5">
                <p className="text-lg font-semibold text-foreground">Learn More About Us</p>
                <p className="text-sm text-muted-foreground mt-2">See our approach to threat intelligence and managed security.</p>
              </Link>
              <Link to="/contact" className="rounded-3xl border border-border bg-card/70 px-6 py-5 text-left transition hover:border-primary hover:bg-primary/5">
                <p className="text-lg font-semibold text-foreground">Talk to an Expert</p>
                <p className="text-sm text-muted-foreground mt-2">Schedule a call with our security specialists today.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/80 rounded-[2rem] border border-border mx-6 shadow-[0_0_70px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:mx-0">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Platform advantages</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Built to stop modern threats with context, speed, and scale.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              DarkThreat combines data ingestion, AI detection, and human validation into a single continuous defense workflow.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                icon: <Search className="w-10 h-10 text-primary" />,
                title: 'Continuous Dark Web Coverage',
                description: '24/7 monitoring of Tor, paste sites, forums, marketplaces, and private channels.',
              },
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: 'Unified Visibility',
                description: 'One dashboard for exposures, alerts, incident context, and compliance status.',
              },
              {
                icon: <Lock className="w-10 h-10 text-primary" />,
                title: 'Credential & Data Protection',
                description: 'Detect leaked credentials, PII, and exposed assets before attackers exploit them.',
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: 'Analyst-Validated Alerts',
                description: 'Human-reviewed findings reduce noise and surface only actionable threats.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-border bg-background p-8 text-center shadow-sm">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Our Cybersecurity Solutions</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">A unified platform for threat detection, incident response, and compliance.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From dark web visibility to automated SOC workflows, DarkThreat delivers the core capabilities security teams need to stop attackers and close risk gaps.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                to: '/dark-web-monitoring',
                title: 'Dark Web Monitoring',
                description: 'AI-driven monitoring across dark web forums, paste sites, and underground marketplaces.',
                tag: 'Monitoring',
                icon: <Globe className="w-10 h-10" />,
              },
              {
                to: '/credential-leak-detection',
                title: 'Credential Leak Detection',
                description: 'Detect leaked passwords, API keys, and session tokens before attackers exploit them.',
                tag: 'Detection',
                icon: <Lock className="w-10 h-10" />,
              },
              {
                to: '/dark-web-data-removal',
                title: 'Dark Web Data Removal',
                description: 'Remove exposed company data from hacker channels, marketplaces, and paste sites.',
                tag: 'Removal',
                icon: <Shield className="w-10 h-10" />,
              },
              {
                to: '/solution',
                title: 'Threat Intelligence',
                description: 'Enrich exposure alerts with attacker context, vulnerability data, and prioritization signals.',
                tag: 'Intelligence',
                icon: <Eye className="w-10 h-10" />,
              },
              {
                to: '/pricing',
                title: 'Compliance Automation',
                description: 'Automate evidence collection and reporting for PCI-DSS, HIPAA, and ISO audits.',
                tag: 'Compliance',
                icon: <Database className="w-10 h-10" />,
              },
              {
                to: '/contact',
                title: 'SOC Support',
                description: 'Expert-led support that reduces alert fatigue and accelerates incident response.',
                tag: 'SOC',
                icon: <Users className="w-10 h-10" />,
              },
              {
                to: '/solution',
                title: 'Threat Search',
                description: 'Search attacker infrastructure, leaked credentials, and exposed assets from one searchable interface.',
                tag: 'Search',
                icon: <Search className="w-10 h-10" />,
              },
              {
                to: '/pricing',
                title: 'Asset Exposure Monitoring',
                description: 'Track internet-facing assets, shadow IT, and cloud misconfigurations that expand your attack surface.',
                tag: 'Exposure',
                icon: <Globe className="w-10 h-10" />,
              },
            ].map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group block rounded-[2rem] border border-border bg-card p-8 transition hover:border-primary hover:bg-primary/5"
              >
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4 inline-block">{service.tag}</span>
                <div className="mb-6 text-primary">{service.icon}</div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-7 mb-6">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">Learn more <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Platform capabilities</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Complete coverage across exposure, detection, and response.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              DarkThreat combines dark web intelligence, security operations, and compliance automation in one unified platform.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Dark Web Intelligence',
                description: 'Continuously monitor underground forums, marketplaces, and leaked data sources for exposed assets and attacker chatter.',
                icon: <Globe className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Incident Response',
                description: 'Automate containment workflows, analyst validation, and coordinated response actions across your security stack.',
                icon: <Shield className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Compliance Automation',
                description: 'Streamline audit-readiness with evidence collection, reporting, and controls mapped to PCI, HIPAA, SOC 2, and ISO.',
                icon: <Database className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Threat Enrichment',
                description: 'Add context to alerts with attacker profiles, vulnerability impact, and exposure scoring for faster prioritization.',
                icon: <AlertTriangle className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Managed Detection',
                description: 'Detect insider risk, lateral movement, and compromised credentials with powerful analytics and expert review.',
                icon: <Search className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Asset Exposure Monitoring',
                description: 'Find exposed domains, cloud assets, and external services that increase your attack surface and risk posture.',
                icon: <Globe className="w-10 h-10 text-primary" />,
              },
            ].map((capability) => (
              <div key={capability.title} className="rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-7">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">How DarkThreat Works</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">A four-step security workflow that closes the gap between detection and response.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                number: '1',
                title: 'Collect & Ingest',
                description: 'Aggregate telemetry from networks, endpoints, cloud, and dark web sources into a unified data stream.',
              },
              {
                number: '2',
                title: 'AI Threat Detection',
                description: 'Machine learning and behavioral analytics identify anomalies, lateral movement, and insider risk in real time.',
              },
              {
                number: '3',
                title: 'Respond & Contain',
                description: 'Automated workflows and analyst validation turn alerts into action before breaches escalate.',
              },
              {
                number: '4',
                title: 'Monitor & Comply',
                description: 'Continuous monitoring, audit trails, and compliance dashboards keep your program inspection-ready.',
              },
            ].map((step) => (
              <div key={step.number} className="rounded-[2rem] border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-semibold text-primary">{step.number}</div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-7">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Customer confidence</p>
          <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Security teams trust DarkThreat to cut through noise and stop breaches.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real customers rely on our coverage, speed, and analyst-driven intelligence to protect their most sensitive assets.
          </p>
        </div>

        <div className="mt-12">
          <Testimonials />
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Industries</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Tailored protection for your sector and compliance needs.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every industry faces different risks. DarkThreat delivers custom coverage, threat intelligence, and compliance support for the environments that matter most.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {[
              {
                title: 'Financial Services',
                meta: '$5.9M avg breach cost',
                description: 'Real-time fraud detection, PCI-DSS automation, and insider threat monitoring for banks, fintech, and payments.',
                to: '/industries/financial-services',
              },
              {
                title: 'Healthcare & Life Sciences',
                meta: '$10.9M avg breach cost',
                description: 'HIPAA-ready threat intelligence, ransomware defenses, and compliance reporting for hospitals and pharma.',
                to: '/industries/healthcare',
              },
              {
                title: 'Critical Infrastructure',
                meta: 'Operational resilience focus',
                description: 'Industrial control system security, OT visibility, and specialized incident response for critical operations.',
                to: '/industries/critical-infrastructure',
              },
              {
                title: 'Technology & SaaS',
                meta: 'Cloud-native risk',
                description: 'Protect SaaS, cloud apps, and developer tooling with tailored threat intelligence and configuration monitoring.',
                to: '/industries/technology',
              },
              {
                title: 'Retail & eCommerce',
                meta: 'Brand and fraud protection',
                description: 'Detect stolen credentials, compromised payment data, and supply chain exposure before customer impact occurs.',
                to: '/industries/retail',
              },
              {
                title: 'Education & Nonprofit',
                meta: 'Budget conscious security',
                description: 'Affordable threat coverage, phishing detection, and compliance support for schools, universities, and charities.',
                to: '/industries/education',
              },
            ].map((industry) => (
              <Link key={industry.title} to={industry.to} className="group block rounded-[2rem] border border-border bg-card p-8 transition hover:border-primary hover:bg-primary/5">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Industry</span>
                  <span className="text-sm text-muted-foreground">{industry.meta}</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">{industry.title}</h3>
                <p className="text-muted-foreground leading-7 mb-6">{industry.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">Explore industry security <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Pricing</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Flexible plans for security teams of every size.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right plan for your monitoring, response, and compliance needs, with clear pricing and no hidden fees.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <PricingCard plan="Standard" monthlyPrice="$288" annualPrice="$2,000" discount="31%" isAnnual
              onTrialClick={() => setIsTrialModalOpen(true)}
              features={['Basic breach & credential monitoring', '1 x Domain coverage', '1 User', 'Email notifications', 'Web UI access']} />
            <PricingCard plan="Enterprise" monthlyPrice="$490" annualPrice="$3,400" discount="42%" popular isAnnual
              onTrialClick={() => setIsTrialModalOpen(true)}
              features={['Full domain & hacker chatter feeds', '2 x Domain/IP coverage', '2 Users', 'Priority support']} />
            <PricingCard plan="MSSP" monthlyPrice="Custom" annualPrice="Custom" discount="" isCustom isAnnual
              features={['White-label portal', 'Multi-tenant API', 'Bulk onboarding', 'Dedicated support', 'Priority threat intelligence']} />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Ready to compare</p>
          <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">How DarkThreat stacks up against traditional monitoring.</h2>
        </div>
        <ComparisonTable />
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Frequently asked questions</p>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Everything security leaders ask before choosing DarkThreat.</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />

      <FinalCTA />

      <footer className="relative bg-card border-t border-border py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence, protecting organizations with visibility, detection, and response.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/DarkThreatAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="https://linkedin.com/company/darkthreat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="https://github.com/darkthreat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/dark-web-monitoring" className="hover:text-primary transition-colors">Dark Web Monitoring</Link></li>
                <li><Link to="/credential-leak-detection" className="hover:text-primary transition-colors">Credential Leak Detection</Link></li>
                <li><Link to="/dark-web-data-removal" className="hover:text-primary transition-colors">Dark Web Data Removal</Link></li>
                <li><Link to="/solution" className="hover:text-primary transition-colors">Platform Overview</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/solution" className="hover:text-primary transition-colors">Solution</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/platform-terms" className="hover:text-primary transition-colors">Platform Terms</Link></li>
                <li><Link to="/website-terms" className="hover:text-primary transition-colors">Website Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
