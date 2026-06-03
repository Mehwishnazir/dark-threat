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

const About = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DarkThreat",
    "alternateName": ["DarkThreat AI", "Dark Threat AI", "DarkThreat Security", "DarkThreat.ai"],
    "url": "https://darkthreat.ai",
    "logo": "https://darkthreat.ai/logo.png",
    "description": "AI-powered dark web monitoring and threat intelligence platform protecting enterprises from credential leaks, ransomware, and cyber threats in real time.",
    "foundingDate": "2024",
    "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10 },
    "knowsAbout": [
      "Dark Web Monitoring",
      "Threat Intelligence",
      "Credential Leak Detection",
      "Cyber Threat Detection",
      "Digital Risk Protection",
      "External Attack Surface Management"
    ],
    "sameAs": [
      "https://twitter.com/DarkThreatAI",
      "https://linkedin.com/company/darkthreat",
      "https://github.com/darkthreat"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@darkthreat.ai",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "award": [
      "ISO 27001 Aligned",
      "NIST Cybersecurity Framework Compliant",
      "GDPR Compliant",
      "HIPAA Ready",
      "PCI-DSS Support"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DarkThreat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DarkThreat is an AI-powered dark web monitoring and threat intelligence platform that continuously monitors 2M+ underground sources — including dark web forums, infostealer logs, Telegram channels, and ransomware leak sites — to provide real-time cyber threat intelligence to enterprise security teams."
        }
      },
      {
        "@type": "Question",
        "name": "How does DarkThreat's dark web monitoring service work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DarkThreat uses a four-layer AI engine: an External Attack Surface mapper, a Multi-Source Dark Web Ingestor, a Credential Leak Monitor, and a Threat Enrichment layer. These work together to detect threats, verify organizational relevance, and deliver actionable alerts with remediation guidance — with no agent installation required."
        }
      },
      {
        "@type": "Question",
        "name": "Does DarkThreat require any software installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. DarkThreat is a fully agentless platform. It monitors the external threat landscape without any software installation inside your network. Organizations are protected immediately after registering their domains, IP ranges, and brand keywords."
        }
      },
      {
        "@type": "Question",
        "name": "What compliance frameworks does DarkThreat support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DarkThreat's operations are aligned with ISO 27001, the NIST Cybersecurity Framework, GDPR, HIPAA, and PCI-DSS — making it suitable for financial services, healthcare, legal, and other regulated industries."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://darkthreat.ai" },
      { "@type": "ListItem", "position": 2, "name": "About DarkThreat", "item": "https://darkthreat.ai/about" }
    ]
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Helmet>
        <title>About DarkThreat | AI-Powered Dark Web Monitoring & Threat Intelligence Platform</title>
        <meta name="description" content="DarkThreat is an AI-powered dark web monitoring and threat intelligence platform. Learn how our cyber threat detection engine protects 500+ enterprises from data breaches, credential leaks, and ransomware attacks — 24/7." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://darkthreat.ai/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About DarkThreat | AI-Powered Dark Web Monitoring & Threat Intelligence" />
        <meta property="og:description" content="Meet the team behind DarkThreat — cybersecurity researchers and engineers building the world's fastest dark web intelligence and digital risk protection platform for modern businesses." />
        <meta property="og:url" content="https://darkthreat.ai/about" />
        <meta property="og:image" content="https://darkthreat.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DarkThreat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DarkThreatAI" />
        <meta name="twitter:title" content="About DarkThreat | AI Dark Web Monitoring Platform" />
        <meta name="twitter:description" content="Meet the team behind DarkThreat — cybersecurity researchers and engineers building the world's fastest dark web intelligence and digital risk protection platform for modern businesses." />
        <meta name="twitter:image" content="https://darkthreat.ai/og-image.png" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
          
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            We Predict and Prevent Cyber Attacks <span className="glow-text">Before They Occur</span>
          </h1>
          
          <p className="hero-subtitle mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-semibold">
            At DarkThreat, our mission is to build the world's fastest and most comprehensive <Link to="/threat-intelligence-platform" className="text-primary hover:underline">threat intelligence platform</Link> — transforming enterprise cybersecurity from reactive incident response into proactive <Link to="/digital-risk-protection" className="text-primary hover:underline">digital risk protection</Link>. We monitor the external threat landscape so your team doesn't have to.
          </p>
          
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Every 39 seconds, a cyberattack hits a business somewhere in the world. Most of those attacks are telegraphed — discussed in underground forums, advertised on dark market channels, and distributed through infostealer logs — long before they reach your firewall. Traditional security tools watch the inside of your network. <span className="font-semibold text-foreground">DarkThreat watches the outside.</span><br/><br/>
            Our AI-driven <Link to="/dark-web-monitoring" className="text-primary hover:underline">dark web monitoring service</Link> continuously crawls millions of sources across the deep web, dark web, Telegram channels, paste sites, and private hacker communities — surfacing early-warning intelligence that gives your security team the time and context needed to neutralize threats before they become breaches.<br/><br/>
            This is intelligence-driven cybersecurity. This is <span className="font-semibold text-foreground">DarkThreat</span>.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => setIsTrialModalOpen(true)} className="hero-button text-base px-8 py-6">
              Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-28 left-10 animate-float delay-1000 pointer-events-none hidden md:block">
          <Shield className="text-primary w-9 h-9 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-16 animate-float delay-2000 pointer-events-none hidden md:block">
          <AlertTriangle className="text-primary w-8 h-8 opacity-40" />
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
                OUR GENESIS
              </span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6 leading-tight">
                Our Story: How DarkThreat Was Built to Infiltrate the Cyber Underground
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The idea for DarkThreat was born from a frustration that every serious security practitioner knows: the tools designed to protect organizations were fundamentally blind to where attackers actually operated.<br/><br/>
                Founded in 2024 by a collective of government-trained intelligence analysts, former threat hunters, and machine learning researchers, DarkThreat set out to close the most dangerous gap in enterprise security — <Link to="/blog/external-attack-surface-monitoring" className="text-primary hover:underline">external attack surface monitoring</Link> and visibility into the underground economy that funds modern cybercrime.<br/><br/>
                While next-generation firewalls and endpoint detection tools defended the perimeter from the inside out, threat actors were quietly operating on private messaging servers, dark web marketplaces, and closed invite-only forums — discussing targets, trading stolen credentials, and selling access to compromised networks. Organizations had no automated, scalable way to monitor this activity. Manual threat hunting couldn't keep pace with the volume or velocity of modern data breach activity.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our founders engineered the DarkThreat platform to solve this at scale. By combining deep learning-based natural language processing, multi-source dark web ingestion architecture, and analyst-validated enrichment pipelines, DarkThreat transformed <span className="font-semibold text-foreground">cyber threat visibility</span> from a manual, labor-intensive process into an always-on intelligence engine.<br/><br/>
                Today, DarkThreat continuously indexes over <span className="font-semibold text-foreground">2 million live data sources</span> — including dark web forums, ransomware leak sites, infostealer log marketplaces, Telegram threat actor channels, Discord servers, and paste sites — delivering <span className="font-semibold text-foreground">real-time threat intelligence</span> directly into the hands of security operations teams worldwide.<br/><br/>
                We don't respond to attacks. We anticipate them.
              </p>
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
                      <p className="text-sm text-muted-foreground">Company founded by government threat hunters and ML researchers. Core platform architecture built.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l border-primary/30 pl-4 pb-4">
                    <span className="text-primary font-bold">2025</span>
                    <div>
                      <h4 className="font-semibold text-foreground">1M+ Daily Sources</h4>
                      <p className="text-sm text-muted-foreground">Ingestion pipeline scaled to 1M+ daily sources. First 500 enterprise customers protected.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pl-4">
                    <span className="text-primary font-bold">2026</span>
                    <div>
                      <h4 className="font-semibold text-foreground">2M+ Live Sources Indexed</h4>
                      <p className="text-sm text-muted-foreground">2M+ live sources indexed. 24/7 SOC analyst triage layer integrated. 10M+ threats monitored.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Principles */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              DEFENDERS MINDSET
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Core Principles: How DarkThreat Thinks Like a Threat Analyst — at Machine Speed
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manual threat hunting is slow, expensive, and impossible to scale. A single experienced analyst can realistically monitor a fraction of the dark web channels and underground markets that are relevant to their organization. DarkThreat was engineered to replicate the intuition, pivoting logic, and contextual awareness of an elite analyst — and run it continuously, across millions of sources, at zero marginal cost per alert.<br/><br/>
              These four principles define how we do it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Actionable Intelligence — Zero Alert Fatigue
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                One of the most persistent problems in cybersecurity operations is the signal-to-noise ratio. Security teams are inundated with thousands of low-fidelity alerts every day, burying the critical warnings that actually require immediate action. DarkThreat solves this through ensemble machine learning classifiers trained specifically on cybersecurity threat data — automatically filtering irrelevant noise, de-duplicating redundant alerts, and surfacing only high-priority, high-confidence incidents with full contextual enrichment. The result: your SOC team responds to <span className="font-semibold text-foreground">cyber threat intelligence</span> that is precise, relevant, and immediately actionable — not a 3am alert about a forum post discussing another company's credentials.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Always-On Monitoring — No Agent, No Installation, No Friction
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most security tools require deployment inside your infrastructure — agents on endpoints, sensors on networks, integrations with internal systems. DarkThreat requires none of this. As a fully <span className="font-semibold text-foreground">agentless dark web monitoring service</span>, the platform operates entirely externally, continuously crawling public repositories, paste sites, closed forums, dark marketplaces, and private hacker channels around the clock — with zero footprint inside your organization. This means no deployment delays, no IT provisioning tickets, and no internal attack surface created by the tool itself. Organizations are protected the moment their domain, IP ranges, or brand keywords are registered with the platform.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Cross-Validated Data — Every Alert Confirmed Before It Reaches You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Raw dark web data is inherently noisy, unreliable, and often deliberately misleading. Threat actors regularly post fake dumps, recycled credential lists, and disinformation to manipulate markets and waste defenders' time. DarkThreat's <span className="font-semibold text-foreground">threat enrichment</span> pipeline cross-references every potential alert against your registered organizational assets — verifying that flagged credentials belong to actual corporate email domains, that leaked documents reference your real internal systems, and that exposed API keys match your registered infrastructure. What you receive is not raw threat data — it is confirmed, organization-specific <span className="font-semibold text-foreground">cyber threat intelligence</span> with verified severity scoring and recommended remediation steps.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-8 hover:border-primary/50 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Know Your Adversary — Threat Actor Profiling at Scale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Understanding <em>what</em> is exposed matters. Understanding <em>who</em> wants to exploit it — and <em>when</em> — is what separates reactive security from genuine <span className="font-semibold text-foreground">cyber attack prediction</span>. DarkThreat's intelligence engine doesn't just catalog leaked data; it maps that data to known and emerging threat actor groups, active ransomware campaigns, and specific adversary infrastructure. By tracking hacker personas across multiple dark web forums, Telegram channels, and closed marketplaces, DarkThreat provides full <span className="font-semibold text-foreground">threat actor profiling</span> context with every alert — so security teams know whether an exposed credential is being passively collected or actively weaponized for an imminent attack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Technology Engine */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              ENGINE FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              The DarkThreat Intelligence Engine: Four Synchronized AI Systems That Never Sleep
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At the core of the DarkThreat platform is a proprietary four-layer AI architecture built specifically for the dark web monitoring and threat intelligence use case. Unlike general-purpose security tools adapted for external monitoring, every component of the DarkThreat engine was designed from the ground up for the unique challenges of <span className="font-semibold text-foreground">deep web scanning</span>, dark market intelligence, and real-time breach detection. Here's how each layer works — and why the combination produces intelligence quality that standalone tools simply cannot match.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Layer 1: External Attack Surface Mapping</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The first layer of DarkThreat's intelligence architecture is its <span className="font-semibold text-foreground">external attack surface monitoring</span> engine. Before any dark web signal can be correlated to your organization, the platform must first build a comprehensive, continuously updated map of your digital footprint — every registered domain, IP range, employee email pattern, cloud storage bucket, third-party integration, and software version exposed to the public internet.<br/><br/>
                This layer identifies shadow IT assets that internal teams may not know exist, misconfigured cloud storage exposing sensitive documents, open ports and services that create vulnerability windows, and third-party supply chain exposures that represent indirect attack vectors. The asset map feeds every downstream alert with critical organizational context — ensuring you're only notified about threats that are genuinely relevant to your environment.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Database className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Layer 2: Multi-Source Dark Web Ingestion at Scale</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Dark Web Ingestor is the data collection backbone of the DarkThreat platform — a continuously running pipeline that indexes over <span className="font-semibold text-foreground">2 million live sources</span> across the full spectrum of underground internet infrastructure. This includes onion sites on the Tor network, invite-only ransomware leak portals, dark web forums hosting stolen data marketplaces, Telegram hacker channels, Discord servers used by threat actor groups, paste sites like Pastebin and PrivateBin, and automated infostealer log distribution channels.<br/><br/>
                Unlike scheduled crawlers that check sources periodically, DarkThreat's ingestion pipeline operates in near real-time — meaning that when your organization's credentials appear in a fresh stealer log dump at 3am, your security team is alerted within minutes, not days. This is the foundation of genuine <span className="font-semibold text-foreground">real-time threat intelligence</span>.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Lock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Layer 3: Real-Time Credential & Data Leak Detection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Credential leaks are the leading initial access vector for enterprise breaches. The DarkThreat <Link to="/credential-leak-detection" className="text-primary hover:underline">credential leak detection</Link> engine monitors combination lists (combo lists), infostealer malware output logs, dark web data dumps, and underground marketplaces in real time — alerting security teams the moment a corporate email address, password hash, session token, or API key surfaces in the underground economy.<br/><br/>
                The engine goes beyond simple email matching. It identifies leaked Active Directory credentials, VPN access credentials, cloud platform tokens, SaaS application session cookies, and executive account compromises — all cross-referenced against your registered asset inventory to confirm organizational relevance. For each verified credential exposure, DarkThreat provides a severity score, the likely source threat actor or malware family, and recommended immediate response actions.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">Layer 4: AI-Powered Threat Enrichment & Contextual Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Raw threat data without context is just noise. The DarkThreat Threat Enrichment layer transforms every validated alert into a complete intelligence briefing — automatically mapping detected indicators to known threat actor groups and TTPs (Tactics, Techniques, and Procedures), active ransomware affiliate programs, relevant CVE vulnerabilities being actively exploited in the wild, and MITRE ATT&CK framework techniques associated with the specific threat actor's operational history.<br/><br/>
                Each enriched alert includes a prioritized remediation playbook tailored to the specific threat vector — whether that's forcing credential resets, revoking exposed API tokens, patching a specific CVE, or escalating to incident response. This is <span className="font-semibold text-foreground">AI cybersecurity analysis</span> at its most actionable — turning threat signals into immediate, executable defensive steps for security operations teams of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Trust Indicators & Stats */}
      <section className="py-24 px-6 bg-card/25">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-12">
              Trusted by Security Teams Protecting Critical Infrastructure Worldwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center border-b border-border/30 pb-12">
              <div>
                <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2">500+</h3>
                <p className="text-sm uppercase tracking-wider text-foreground font-semibold mb-3">Protected Enterprises</p>
                <p className="text-sm text-muted-foreground leading-relaxed">From Series B startups to Fortune 500 security operations centers, over 500 organizations worldwide rely on DarkThreat as their primary <span className="font-semibold text-foreground">dark web monitoring service</span> and external threat intelligence layer. Our customer base spans financial services, healthcare, critical infrastructure, legal firms, and technology companies — any organization that understands the value of knowing what adversaries are planning before they act.</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-primary font-bold text-primary mb-2">10M+</h3>
                <p className="text-sm uppercase tracking-wider text-foreground font-semibold mb-3">Threats Monitored</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Since launch, the DarkThreat intelligence engine has detected and catalogued over 10 million individual threat signals — including exposed credentials, leaked source code repositories, active ransomware targeting discussions, compromised API keys, and early-stage attack planning activity. Every signal is archived, enriched, and searchable — providing a historical threat intelligence record that supports forensic investigation and compliance reporting.</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2">2M+</h3>
                <p className="text-sm uppercase tracking-wider text-foreground font-semibold mb-3">Live Data Sources</p>
                <p className="text-sm text-muted-foreground leading-relaxed">DarkThreat's ingestion architecture continuously monitors over 2 million active data sources across the underground internet — including dark web forums, marketplaces, Telegram groups, Discord servers, onion sites, paste sites, and infostealer distribution channels. This breadth of coverage means that when your organization is discussed, mentioned, or targeted in the cyber underground, DarkThreat sees it first.</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-2">99.9%</h3>
                <p className="text-sm uppercase tracking-wider text-foreground font-semibold mb-3">Alert Accuracy SLA</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Our machine learning pipeline — validated by a 24/7 analyst triage team — maintains a 99.9% alert accuracy service level agreement. We measure accuracy on two axes: confirmed organizational relevance (the alert actually relates to your assets) and verified threat validity (the threat is real, not a fake dump or recycled old data). High precision alerting is not a feature — it is the foundation of operational trust.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">Built for Regulated Industries — Compliance-Aligned by Design</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              DarkThreat's platform and operational procedures are designed to align with the security frameworks and regulatory requirements that govern the industries we serve. Our monitoring capabilities and intelligence delivery directly support compliance evidence collection and security posture reporting across:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left mb-8">
              <div className="bg-card border border-border p-4 rounded-xl">
                <span className="font-bold text-foreground block mb-1">ISO 27001</span>
                <span className="text-sm text-muted-foreground">Threat intelligence and continuous monitoring as an operational control</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl">
                <span className="font-bold text-foreground block mb-1">NIST Cybersecurity Framework</span>
                <span className="text-sm text-muted-foreground">Covers Identify, Protect, Detect, and Respond functions</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl">
                <span className="font-bold text-foreground block mb-1">GDPR</span>
                <span className="text-sm text-muted-foreground">Data handling procedures compliant with EU personal data protection requirements</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl">
                <span className="font-bold text-foreground block mb-1">HIPAA</span>
                <span className="text-sm text-muted-foreground">Healthcare sector credential monitoring and breach notification support</span>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl md:col-span-2">
                <span className="font-bold text-foreground block mb-1">PCI-DSS</span>
                <span className="text-sm text-muted-foreground">Payment system credential exposure monitoring and early breach detection</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground font-semibold">
              <Link to="/compare/darkthreat-vs-darkowl" className="text-primary hover:underline">See how DarkThreat compares to DarkOwl →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Team & Leaders */}
      <section className="py-24 px-6 border-t border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              INTELLIGENCE SPECIALISTS
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              The People Behind DarkThreat: Elite Cybersecurity Researchers, Engineers & Analysts
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Effective <span className="font-semibold text-foreground">dark web intelligence</span> doesn't emerge from algorithms alone. It requires deep domain expertise — people who have spent years operating in the same underground spaces where threat actors operate, who understand the culture, the tradecraft, and the evolving tactics of the cybercriminal ecosystem. The DarkThreat team brings together three distinct centers of excellence: an active threat hunting division, a world-class security engineering organization, and an advisory council of cybersecurity industry veterans whose collective experience spans government intelligence, corporate security leadership, and academic research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-border bg-card p-8 text-center hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] transition duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                Threat Hunting Division — Eyes in the Underground
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The DarkThreat Threat Hunting Division is a team of elite intelligence analysts whose daily work involves going where adversaries operate: dark web hacker forums, ransomware affiliate panels, private Telegram channels used by threat actor groups, and underground markets trading in stolen enterprise data. Our analysts maintain active intelligence collection operations across hundreds of underground communities — tracking threat actor personas, monitoring active campaigns targeting specific industries, and providing human-validated context that machine learning models cannot independently generate.<br/><br/>
                When the DarkThreat platform surfaces a high-severity alert, it is the Threat Hunting Division that validates, enriches, and contextualizes that intelligence — ensuring that every critical notification your team receives reflects both machine precision and human judgment. This is <span className="font-semibold text-foreground">threat hunting using AI</span>, augmented by genuine expert analysis.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 text-center hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] transition duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Cpu className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                Security Engineering — Infrastructure Built for Speed and Scale
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                The DarkThreat Security Engineering team are the architects of the platform's extraordinary data collection and processing capability. Building a <span className="font-semibold text-foreground">real-time threat intelligence</span> infrastructure capable of continuously indexing 2 million+ sources — many of them deliberately obfuscated, frequently changing, and architecturally hostile to automated crawling — requires engineering solutions that don't exist off the shelf.<br/><br/>
                Our engineers have built proprietary crawling systems capable of navigating Tor network anonymization, CAPTCHA-protected onion sites, invite-only forum authentication, and end-to-end encrypted messaging channels. The high-performance ingestion pipeline processes millions of data points per day, running them through natural language processing models to extract threat-relevant signals at a speed that manual processes could never achieve.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 text-center hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] transition duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
                Advisory Council — Governance, Compliance & Strategic Direction
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                DarkThreat's Advisory Council brings together senior cybersecurity practitioners from government intelligence agencies, enterprise security leadership, data privacy regulatory bodies, and academic research institutions. Their role is to ensure that the DarkThreat platform evolves in alignment with the threat landscape, the regulatory environment, and the operational realities facing security teams across different industries and geographies.<br/><br/>
                The council provides strategic guidance on MS-ISAC integration standards, cross-sector threat intelligence sharing frameworks, data privacy compliance for monitoring operations, and emerging threat categories that require new platform capabilities. Their oversight is a core component of the E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) credibility that DarkThreat maintains as an authoritative source in the <span className="font-semibold text-foreground">cyber threat analytics</span> space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden bg-card/50">
        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] filter blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            See What Attackers Know About Your Organization — Before They Use It
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            The average time between a credential leak appearing on the dark web and a breach occurring is 9 days. In that window, the difference between a near-miss and a headline-making incident is <span className="font-semibold text-foreground">early warning intelligence</span>. DarkThreat gives you that window.<br/><br/>
            Our platform takes less than 24 hours to set up, requires no agent deployment, and begins surfacing intelligence about your organization's exposure immediately. Whether you are a lean security team at a growing company or a mature SOC at a regulated enterprise, DarkThreat's <span className="font-semibold text-foreground">AI cybersecurity solution</span> scales to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button onClick={() => setIsTrialModalOpen(true)} className="hero-button text-base px-8 py-6">
              Start Free Trial — No Credit Card Required <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="text-base px-8 py-6 bg-card/50 backdrop-blur border-primary/20 hover:bg-primary/10">
              Request a Live Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by 500+ enterprises · 99.9% alert accuracy SLA · 2M+ monitored sources · Compliant with ISO 27001, NIST, GDPR & HIPAA
          </p>
        </div>
      </section>

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
                DarkThreat is an AI-powered <span className="font-semibold text-foreground">dark web monitoring</span> and <span className="font-semibold text-foreground">threat intelligence platform</span> protecting enterprises from credential leaks, ransomware targeting, data breaches, and external cyber threats. Our 24/7 monitoring engine indexes 2M+ underground sources to deliver real-time alerts before attacks occur.
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
                <li><Link to="/dark-web-monitoring" className="text-muted-foreground hover:text-primary">Dark Web Monitoring Service</Link></li>
                <li><Link to="/credential-leak-detection" className="text-muted-foreground hover:text-primary">Credential Leak Detection</Link></li>
                <li><Link to="/data-leak-detection" className="text-muted-foreground hover:text-primary">Data Leak Detection</Link></li>
                <li><Link to="/threat-intelligence-platform" className="text-muted-foreground hover:text-primary">Threat Intelligence Platform</Link></li>
                <li><Link to="/compare/darkthreat-vs-darkowl" className="text-muted-foreground hover:text-primary">DarkThreat vs DarkOwl</Link></li>
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