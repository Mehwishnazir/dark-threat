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
  Linkedin, Twitter, Github, ArrowRight, TrendingUp, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DarkThreat',
  alternateName: ["DarkThreat AI", "Dark Threat AI", "DarkThreat Security", "DarkThreat.ai"],
  url: 'https://darkthreat.ai',
  logo: 'https://darkthreat.ai/logo.png',
  sameAs: [
    'https://twitter.com/DarkThreatAI',
    'https://linkedin.com/company/darkthreat',
    'https://github.com/darkthreat'
  ],
  description: 'AI-powered dark web monitoring and threat intelligence platform protecting enterprises from credential leaks, ransomware, and cyber threats in real time.',
  foundingDate: '2024',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10 },
  knowsAbout: [
    "Dark Web Monitoring",
    "Threat Intelligence",
    "Credential Leak Detection",
    "Cyber Threat Detection",
    "Digital Risk Protection",
    "External Attack Surface Management"
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@darkthreat.ai',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  award: [
    "ISO 27001 Aligned",
    "NIST Cybersecurity Framework Compliant",
    "GDPR Compliant",
    "HIPAA Ready",
    "PCI-DSS Support"
  ]
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DarkThreat",
  "url": "https://darkthreat.ai",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://darkthreat.ai/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const SOFTWARE_APP_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DarkThreat",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web",
  "url": "https://darkthreat.ai",
  "description": "AI-powered dark web monitoring and credential leak detection platform that protects enterprises from data breaches and hacker chatter in real time.",
  "image": "https://darkthreat.ai/og-image.png",
  "offers": {
    "@type": "Offer",
    "price": "288",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const Index = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background relative">
      <Helmet>
        <title>Dark Web Monitoring &amp; Credential Leak Detection Platform | DarkThreat</title>
        <meta name="description" content="DarkThreat is an AI-powered dark web monitoring and credential leak detection platform. Detect leaked passwords, hacker chatter, and data breaches before they impact your business. 7-day free trial." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://darkthreat.ai" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dark Web Monitoring Service &amp; Threat Intelligence Platform | DarkThreat" />
        <meta property="og:description" content="Protect your enterprise with DarkThreat's AI-driven dark web monitoring service. Detect credential leaks, data breaches, and active threat actor campaigns in real time." />
        <meta property="og:url" content="https://darkthreat.ai" />
        <meta property="og:image" content="https://darkthreat.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DarkThreat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DarkThreatAI" />
        <meta name="twitter:title" content="Dark Web Monitoring Service &amp; Threat Intelligence Platform" />
        <meta name="twitter:description" content="Protect your enterprise with DarkThreat's AI-driven dark web monitoring service. Detect credential leaks, data breaches, and active threat actor campaigns in real time." />
        <meta name="twitter:image" content="https://darkthreat.ai/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(ORG_JSON_LD)}</script>
        <script type="application/ld+json">{JSON.stringify(WEBSITE_JSON_LD)}</script>
        <script type="application/ld+json">{JSON.stringify(SOFTWARE_APP_JSON_LD)}</script>
      </Helmet>

      <AppHeader />

      {/* SECTION 1: Hero Section */}
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
            We Monitor the Dark Web and Neutralize Cyber Threats <span className="glow-text">Before They Strike</span>
          </h1>
          
          <p className="hero-subtitle mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-semibold">
            At DarkThreat, we deliver the world's fastest and most comprehensive <Link to="/dark-web-monitoring" className="text-primary hover:underline">dark web monitoring service</Link> and <Link to="/solution" className="text-primary hover:underline">threat intelligence platform</Link> — giving enterprise defenders real-time <Link to="/solution" className="text-primary hover:underline">digital risk protection</Link> to stop attacks before they reach your network perimeter.
          </p>

          <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Every 39 seconds, cybercriminals trade compromised credentials, corporate data dumps, and cloud access keys on private networks. Traditional security tools watch inside your firewall, but <span className="font-semibold text-foreground">DarkThreat watches the outside</span>. Our AI-driven threat intelligence platform continuously indexes over 2 million live sources across onion sites, Telegram hacker channels, and infostealer malware logs — delivering real-time credential leak detection and proactive attack surface visibility. We give your SOC team the early-warning intelligence needed to secure exposures, neutralize threat actors, and keep compliance audits seamless. This is cybersecurity built for modern threats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsTrialModalOpen(true)}
              className="hero-button text-base px-8 py-6 inline-flex items-center gap-2"
            >
              Start Your Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsTrialModalOpen(true)}
              className="text-base px-8 py-6 bg-card/50 backdrop-blur border-primary/20 hover:bg-primary/10"
            >
              Get a Live Demo
            </Button>
          </div>
        </div>

        <div className="absolute top-24 left-10 animate-float delay-1000 pointer-events-none">
          <Shield className="text-primary w-9 h-9 opacity-70" />
        </div>
        <div className="absolute bottom-24 right-16 animate-float delay-2000 pointer-events-none">
          <AlertTriangle className="text-primary w-8 h-8 opacity-50" />
        </div>
      </section>

      {/* Compliance Framework Alignment Quick Bar */}
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

      {/* SECTION 2: Our Story Overview / The Cybersecurity Partner */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative rounded-[2rem] border border-border bg-card/80 p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="min-h-[420px] h-full rounded-[1.75rem] border border-border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-inner p-8 text-white">
              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">OUR GENESIS</span>
                  <h2 className="mt-6 text-3xl font-montserrat font-bold leading-tight">How DarkThreat Infiltrates the Cyber Underground to Protect Your Organization</h2>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    Founded by cybersecurity veterans and machine learning researchers, DarkThreat set out to solve a fundamental blind spot: while standard security systems defend your network perimeter from the inside, threat actors operate externally on private messaging servers, invite-only dark web forums, and ransomware leak sites. By combining deep learning NLP classifiers, multi-source dark web ingestion, and human SOC validation, our platform transforms external attack surface monitoring from a manual, labor-intensive process into an always-on intelligence engine.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Unified Visibility', value: 'Complete external attack surface monitoring across domains, IP ranges, brand keywords, and supply chain partners.' },
                    { title: 'AI-First Platform', value: 'Ensemble machine learning classifiers that analyze infostealer logs and de-duplicate noise automatically.' },
                    { title: 'Expert-Led SOC', value: '24/7 Security Operations Center validation to ensure alert accuracy and provide recommended remediation.' },
                    { title: 'Frictionless Setup', value: 'Fully agentless dark web monitoring service—requires no software installation or internal changes.' },
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
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
                EXTERNAL RISK PROTECTION
              </span>
              <h3 className="text-4xl font-montserrat font-bold text-foreground">A full-spectrum threat intelligence platform that protects your attack surface.</h3>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                DarkThreat blends broad dark web visibility with credential leak detection, threat intelligence, and data removal services. The result is a proactive defense posture for teams that cannot afford to wait for threats to appear in their networks.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link to="/about" className="rounded-3xl border border-border bg-card/70 px-6 py-5 text-left transition hover:border-primary hover:bg-primary/5">
                <p className="text-lg font-semibold text-foreground">Learn More About Us</p>
                <p className="text-sm text-muted-foreground mt-2">See our story and approach to threat hunting and security engineering.</p>
              </Link>
              <Link to="/contact" className="rounded-3xl border border-border bg-card/70 px-6 py-5 text-left transition hover:border-primary hover:bg-primary/5">
                <p className="text-lg font-semibold text-foreground">Talk to an Expert</p>
                <p className="text-sm text-muted-foreground mt-2">Schedule a call with our Security Operations Center specialists today.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Principles */}
      <section className="py-24 px-6 bg-card/80 rounded-[2rem] border border-border mx-6 shadow-[0_0_70px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:mx-0">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              DEFENDERS MINDSET
            </span>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Core Principles: How DarkThreat Thinks Like a Threat Analyst — at Machine Speed</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Manual threat hunting is slow, expensive, and impossible to scale. DarkThreat replicates the intuition, pivoting logic, and contextual awareness of an elite analyst — running it continuously across millions of sources at zero marginal cost.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
                title: 'Actionable Intelligence — Zero Alert Fatigue',
                description: 'We filter out irrelevant noise, de-duplicate redundant alerts, and surface only high-priority, high-confidence incidents with full contextual enrichment.',
              },
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: 'Always-On Monitoring — No Agent, No Friction',
                description: 'As a fully agentless dark web monitoring service, the platform operates entirely externally, crawling public and closed forums around the clock with zero footprint.',
              },
              {
                icon: <Lock className="w-10 h-10 text-primary" />,
                title: 'Cross-Validated Data — Verified Alerts Only',
                description: 'Our threat enrichment pipeline cross-references every potential alert against your registered organizational assets to verify domain relevance and api key match.',
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: 'Know Your Adversary — Threat Actor Profiling',
                description: 'DarkThreat maps exposed data to known threat actor groups, active ransomware campaigns, and adversary infrastructure to anticipate imminent attacks.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-border bg-background p-8 text-center shadow-sm hover:border-primary/50 transition duration-300">
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

      {/* SECTION 4: Solutions Grid */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              OUR CYBERSECURITY SOLUTIONS
            </span>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">A unified platform for threat detection, incident response, and compliance.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From dark web visibility to automated SOC workflows, DarkThreat delivers the core capabilities security teams need to stop attackers and close risk gaps.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                to: '/dark-web-monitoring',
                title: 'Dark Web Monitoring Service',
                description: 'AI-driven monitoring across dark web forums, paste sites, Telegram hacker channels, and underground marketplaces trading stolen data.',
                tag: 'Monitoring',
                icon: <Globe className="w-10 h-10" />,
              },
              {
                to: '/credential-leak-detection',
                title: 'Credential Leak Detection',
                description: 'Real-time credential leak detection monitoring combo lists, infostealer malware output logs, password hashes, and cloud API tokens.',
                tag: 'Detection',
                icon: <Lock className="w-10 h-10" />,
              },
              {
                to: '/dark-web-data-removal',
                title: 'Dark Web Data Removal',
                description: 'Automated digital risk protection to remove exposed company data, leaked source code, and PII from hacker channels and public paste repositories.',
                tag: 'Removal',
                icon: <Shield className="w-10 h-10" />,
              },
              {
                to: '/solution',
                title: 'Threat Intelligence Platform',
                description: 'Enrich exposure alerts with threat actor profiling, adversary infrastructure mapping, MITRE ATT&CK techniques, and active ransomware campaigns.',
                tag: 'Intelligence',
                icon: <Eye className="w-10 h-10" />,
              },
              {
                to: '/pricing',
                title: 'Compliance & Framework Alignment',
                description: 'Continuous monitoring and compliance evidence collection aligned with ISO 27001, NIST Cybersecurity Framework, GDPR, HIPAA, and PCI-DSS.',
                tag: 'Compliance',
                icon: <Database className="w-10 h-10" />,
              },
              {
                to: '/contact',
                title: '24/7 Managed SOC Support',
                description: 'Expert-led Security Operations Center validation that reduces alert fatigue by cross-verifying threat relevance before alerting your team.',
                tag: 'SOC',
                icon: <Users className="w-10 h-10" />,
              },
              {
                to: '/solution',
                title: 'Advanced Threat Search',
                description: 'Search indexing over 2 million live sources, allowing security teams to query threat actor personas, leaks, and historical breach data.',
                tag: 'Search',
                icon: <Search className="w-10 h-10" />,
              },
              {
                to: '/pricing',
                title: 'External Attack Surface Monitoring',
                description: 'Track internet-facing digital footprint, shadow IT assets, open ports, cloud exposures, and third-party supply chain vulnerabilities.',
                tag: 'Exposure',
                icon: <Globe className="w-10 h-10" />,
              },
            ].map((service) => (
              <Link
                key={service.title}
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

      {/* SECTION 5: The Proprietary Technology Engine (AI Systems) */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              ENGINE FRAMEWORK
            </span>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">The DarkThreat Intelligence Engine: Four Synchronized AI Systems That Never Sleep</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every component of the DarkThreat engine was designed from the ground up for the unique challenges of deep web scanning, dark market intelligence, and real-time breach detection.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                title: 'Layer 1: External Attack Surface Mapping',
                description: 'Asset Exposure Engine: Builds a comprehensive, continuously updated map of your digital footprint — domains, IP ranges, cloud buckets, shadow IT, and third-party integrations.',
                icon: <Search className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Layer 2: Multi-Source Dark Web Ingestion at Scale',
                description: 'Dark Web Ingestor: Data collection backbone indexing over 2M+ live sources including onion sites on the Tor network, Telegram, Discord, paste sites, and infostealer logs in near real-time.',
                icon: <Database className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Layer 3: Real-Time Credential & Data Leak Detection',
                description: 'Credential Leak Monitor: Scans combination lists, malware outputs, and marketplaces to alert on corporate emails, Active Directory credentials, VPN tokens, or cloud API keys.',
                icon: <Lock className="w-10 h-10 text-primary" />,
              },
              {
                title: 'Layer 4: AI-Powered Threat Enrichment & Context',
                description: 'Threat Enrichment Layer: Automatically maps validated alerts to known threat actor groups, adversary TTPs, active ransomware programs, CVE vulnerabilities, and MITRE ATT&CK techniques.',
                icon: <Eye className="w-10 h-10 text-primary" />,
              },
            ].map((capability) => (
              <div key={capability.title} className="rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
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

      {/* SECTION 6: How DarkThreat Works */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How DarkThreat Works
            </span>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">How DarkThreat Thinks Like a Threat Analyst — at Machine Speed</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                number: '1',
                title: 'Asset Footprint Registration',
                description: 'Register your domain, IP ranges, and brand keywords. The agentless platform maps your external attack surface with zero infrastructure footprint.',
              },
              {
                number: '2',
                title: 'Multi-Source Deep Web Scanning',
                description: 'The ingestor continuously crawls onion forums, ransomware portals, Telegram, Discord, and paste sites to match data against your assets.',
              },
              {
                number: '3',
                title: 'Ensemble AI Classification & Triage',
                description: 'Machine learning classifiers analyze and filter irrelevant noise, while threat hunters validate critical exposures to eliminate alert fatigue.',
              },
              {
                number: '4',
                title: 'Contextual Enrichment & Alerting',
                description: 'Receive high-fidelity alerts enriched with threat actor profiling, severity scores, MITRE ATT&CK mappings, and prioritized remediation playbooks.',
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

      {/* SECTION 7: Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Customer confidence
          </span>
          <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Security teams trust DarkThreat to cut through noise and stop breaches.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real customers rely on our coverage, speed, and analyst-driven intelligence to protect their most sensitive assets.
          </p>
        </div>

        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      {/* SECTION 8: Industry Pages (Exact matches to built files) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Industries We Protect
            </span>
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
                description: 'Real-time fraud detection, PCI-DSS compliance automation, credential leak tracking, and threat actor profiling for banks, fintech, and payments.',
                to: '/industries/financial-services',
              },
              {
                title: 'Healthcare & Life Sciences',
                meta: '$10.9M avg breach cost',
                description: 'HIPAA-ready threat intelligence, ransomware campaign defenses, medical device exposure scans, and data leak detection for healthcare systems.',
                to: '/industries/healthcare',
              },
              {
                title: 'Government & Public Sector',
                meta: 'Advanced persistence protection',
                description: 'External attack surface mapping, nation-state actor intelligence, and zero-trust alignment to defend critical state infrastructure.',
                to: '/industries/government',
              },
              {
                title: 'SaaS & Technology',
                meta: 'Cloud-native risk',
                description: 'Protect cloud applications, exposed API keys, API endpoints, Git repositories, and executive credentials from infostealer logs.',
                to: '/industries/saas-technology',
              },
              {
                title: 'Retail & E-commerce',
                meta: 'Brand and fraud protection',
                description: 'Detect stolen credit cards, compromised customer accounts, coupon/gift card fraud forums, and supply chain vulnerabilities.',
                to: '/industries/ecommerce',
              },
              {
                title: 'Legal & Professional Services',
                meta: 'Privileged data protection',
                description: 'Secure highly sensitive client data, merger information, intellectual property, and partner credential monitoring.',
                to: '/industries/legal',
              },
            ].map((industry) => (
              <Link key={industry.title} to={industry.to} className="group block rounded-[2rem] border border-border bg-card p-8 transition hover:border-primary hover:bg-primary/5">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary font-semibold">Industry</span>
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

      {/* SECTION 9: Pricing */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Pricing
            </span>
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

      {/* SECTION 10: Comparison */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Ready to compare
          </span>
          <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">How DarkThreat Stacks Up Against Traditional Monitoring</h2>
        </div>
        <ComparisonTable />
        <div className="mt-8 text-center">
          <Link to="/compare/darkthreat-vs-darkowl" className="text-primary hover:underline font-semibold">Read the full detailed DarkThreat vs DarkOwl comparison →</Link>
        </div>
      </section>

      {/* SECTION 11: FAQ Component */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Frequently asked questions
            </span>
            <h2 className="mt-4 text-4xl font-montserrat font-bold text-foreground">Everything security leaders ask before choosing DarkThreat.</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />

      <FinalCTA />

      {/* FOOTER */}
      <footer className="relative bg-card border-t border-border py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4 font-normal">
                DarkThreat is an AI-powered <span className="font-semibold text-foreground">dark web monitoring service</span> and <span className="font-semibold text-foreground">threat intelligence platform</span> protecting enterprises from credential leaks, ransomware targeting, data breaches, and external cyber threats. Our 24/7 monitoring engine indexes 2M+ underground sources to deliver real-time alerts before attacks occur.
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
                <li><Link to="/dark-web-monitoring" className="hover:text-primary transition-colors">Dark Web Monitoring Service</Link></li>
                <li><Link to="/credential-leak-detection" className="hover:text-primary transition-colors">Credential Leak Detection</Link></li>
                <li><Link to="/data-leak-detection" className="hover:text-primary transition-colors">Data Leak Detection</Link></li>
                <li><Link to="/solution" className="hover:text-primary transition-colors">Threat Intelligence Platform</Link></li>
                <li><Link to="/compare/darkthreat-vs-darkowl" className="hover:text-primary transition-colors">DarkThreat vs DarkOwl</Link></li>
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
            <p>&copy; 2026 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
