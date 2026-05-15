import { Button } from '@/components/ui/button';
import { Shield, Search, AlertTriangle, Users, Database, Zap, Eye, Globe, Lock, CheckCircle, BarChart3, Trash2, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import TrialModal from '@/components/TrialModal';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';

const Solution = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const dataLeakCapabilities = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Dark Web Monitoring",
      stat: "4.61M",
      description: "daily users access the Tor network for dark web activity",
      content: "DarkThreat continuously scans dark web marketplaces, forums, and black-market channels to detect any signs of your organization's sensitive data being sold or traded. This proactive monitoring lets you act before threat actors capitalize on leaked information.",
      features: [
        "Discover compromised employee credentials before they're exploited",
        "Detect customer data being sold in bulk to prevent breaches",
        "Receive real-time alerts on new dark web mentions of your organization"
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-primary" />,
      title: "PII Exposure Detection",
      stat: "$4.88M",
      description: "average cost of a data breach",
      content: "By integrating threat intelligence, DarkThreat helps you prioritize vulnerabilities based on risk, allowing your team to address the most critical threats first and optimize remediation efforts.",
      features: [
        "Identify exposed customer information, like names, emails, or credit card numbers",
        "Detect employee PII, including credentials, before they lead to unauthorized access",
        "Get notifications on compromised user accounts to prevent unauthorized activity"
      ]
    },
    {
      icon: <Lock className="w-12 h-12 text-primary" />,
      title: "Credential Monitoring",
      stat: "64%",
      description: "of data leaks involve personal data, much available on dark web",
      content: "With DarkThreat's credential monitoring, you're alerted whenever employee or customer login details surface on illicit platforms, helping you prevent potential account takeovers and security breaches.",
      features: [
        "Receive alerts for leaked login credentials tied to your organization",
        "Monitor for compromised passwords that might grant unauthorized access",
        "Identify accounts that need immediate attention for password resets or other actions"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Automated Leak Reports",
      stat: "14B+",
      description: "leaked credentials monitored on dark web",
      content: "Regular, automated reports on detected leaks provide your team with up-to-date insights into the security status of your data, enabling swift decision-making and actionable responses.",
      features: [
        "Get weekly summaries of detected PII exposures and credential leaks",
        "Access detailed reports to understand the scope and source of data leaks",
        "Easily share insights with compliance teams to ensure regulatory adherence"
      ]
    },
    {
      icon: <Trash2 className="w-12 h-12 text-primary" />,
      title: "Dark Web Data Removal",
      stat: "300%",
      description: "increase in data sold on black markets since 2019",
      content: "DarkThreat's Dark Web Data Removal protects sensitive information from unauthorized exposure. As data breaches rise and sensitive information reaches the dark web, our removal service safeguards against malicious access.",
      features: [
        "Locate and remove sensitive data, such as personal and financial information, being sold on black markets",
        "Remove confidential information exposed on dark web forums and channels",
        "Ongoing monitoring of the dark web to detect and address new data leaks quickly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Monitoring Solution | DarkThreat.ai</title>
        <meta name="description" content="Explore DarkThreat's complete dark web monitoring solution: credential leak detection, PII exposure alerts, hacker chatter intelligence and automated leak reports." />
        <link rel="canonical" href="https://darkthreat.ai/solution" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Dark Web Monitoring Solution",
          "provider": { "@type": "Organization", "name": "DarkThreat", "url": "https://darkthreat.ai" },
          "serviceType": "Cybersecurity Monitoring",
          "areaServed": "Worldwide",
          "description": "Comprehensive dark web monitoring including credential leak detection, PII exposure alerts, hacker chatter intelligence, and automated breach reports.",
          "offers": { "@type": "Offer", "url": "https://darkthreat.ai/pricing" }
        })}</script>
      </Helmet>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/solution" className="text-primary">
              Solution
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              onClick={() => setIsTrialModalOpen(true)}
              className="hero-button"
            >
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center cyber-grid overflow-hidden pt-24 ">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow"></div>}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto ">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Complete Dark Web <span className="glow-text">Monitoring Solution</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Proactive threat intelligence that identifies your organization's exposure on the dark web before cybercriminals can exploit it.
          </p>
          <Button
            onClick={() => setIsTrialModalOpen(true)}
            className="hero-button text-lg px-8 py-4"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float delay-1000">
          <Shield className="text-primary w-8 h-8 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float delay-2000">
          <AlertTriangle className="text-primary w-6 h-6 opacity-40" />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Advanced Threat Detection
            </h2>
            <p className="text-lg text-muted-foreground">
              Multi-layered monitoring across all dark web vectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <Globe className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                Domain Monitoring
              </h3>
              <p className="text-muted-foreground mb-4">
                Real-time monitoring of your domains and subdomains across paste sites, forums, and marketplaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Paste site surveillance
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Subdomain discovery
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Marketplace monitoring
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Lock className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                Credential Protection
              </h3>
              <p className="text-muted-foreground mb-4">
                Monitor for compromised employee credentials and executive accounts across data breaches.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Email compromise alerts
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Password database monitoring
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  VIP account protection
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Eye className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                Threat Intelligence
              </h3>
              <p className="text-muted-foreground mb-4">
                Advanced intelligence from dark web forums, chatrooms, and private channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Forum thread monitoring
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Threat actor tracking
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Attack planning detection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Leak Detection Platform */}
      <section className="py-20 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Data Leak Detection <span className="glow-text">Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive protection against data exposure on the dark web
            </p>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              Unlike breaches, sensitive data leaks often go unnoticed until it turns into a cyberattack.
              Hybrid working models and policies like "Bring Your Own Device" (BYOD) make businesses more vulnerable.
              Detecting data leaks early plays a key role in counter-measuring any threat that may arise from them.
            </p>
          </div>

          <div className="space-y-16">
            {dataLeakCapabilities.map((capability, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="bg-card border border-border rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary/10 rounded-full">
                        {capability.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-montserrat font-bold text-foreground">
                          {capability.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {capability.content}
                    </p>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">Key Capabilities:</h5>
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-lg p-12 text-center border border-primary/20">
                    <div className="text-6xl font-montserrat font-bold text-primary mb-4 glow-text">
                      {capability.stat}
                    </div>
                    <p className="text-foreground font-medium text-lg">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple setup, powerful protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                Setup Monitoring
              </h3>
              <p className="text-muted-foreground">
                Configure your domains, email addresses, and keywords for comprehensive monitoring across the dark web.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                Continuous Scanning
              </h3>
              <p className="text-muted-foreground">
                Our AI-powered systems continuously scan thousands of dark web sources for threats and exposures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-montserrat font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                Instant Alerts
              </h3>
              <p className="text-muted-foreground">
                Receive real-time notifications when threats are detected, enabling rapid response and mitigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

      <div className="text-center mt-12 mb-10">
        <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
          Let's <span className="glow-text">Connect</span> With Us
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Ready to secure your organization? We're here to help you get started with dark web monitoring.
        </p>
        <Button
          onClick={() => window.location.href = '/contact'}
          className="hero-button text-lg px-8 py-4"
        >
          Contact us
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
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
                <li><a href="#" className="text-muted-foreground hover:text-primary">Support</a></li>
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

export default Solution;