import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Target, Twitter, Linkedin, Github, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import TrialModal from '@/components/TrialModal';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';

const About = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About DarkThreat | Dark Web Intelligence Experts</title>
        <meta name="description" content="Meet the team behind DarkThreat — cybersecurity researchers and engineers building the most comprehensive dark web monitoring platform for modern businesses." />
        <link rel="canonical" href="https://darkthreat.ai/about" />
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
            <Link to="/solution" className="text-muted-foreground hover:text-primary transition-colors">
              Solution
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-primary">
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
      <section className="relative pt-40 flex items-center justify-center cyber-grid overflow-hidden ">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow"></div>}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-[-10px] ">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            About <span className="glow-text">DarkThreat</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leading the fight against cybercrime with advanced dark web intelligence and proactive threat detection.
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float delay-1000">
          <Shield className="text-primary w-8 h-8 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float delay-2000">
          <AlertTriangle className="text-primary w-6 h-6 opacity-40" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At DarkThreat, we believe that every organization deserves to know when their sensitive data is exposed on the dark web. Our mission is to democratize dark web intelligence, making it accessible and actionable for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We combine cutting-edge AI technology with deep cybersecurity expertise to deliver the most comprehensive dark web monitoring platform available today.
              </p>
              <Button
                onClick={() => setIsTrialModalOpen(true)}
                className="hero-button"
              >
                Get Started Today
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Target className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Organizations Protected</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">10M+</h3>
                <p className="text-muted-foreground">Threats Detected</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Users className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">24/7</h3>
                <p className="text-muted-foreground">Continuous Monitoring</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Award className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">99.9%</h3>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Cybersecurity experts with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                Security Researchers
              </h3>
              <p className="text-muted-foreground">
                Former government cybersecurity professionals with deep dark web expertise and threat intelligence experience.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                Engineering Team
              </h3>
              <p className="text-muted-foreground">
                World-class engineers building scalable, secure infrastructure to protect organizations worldwide.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                Advisory Board
              </h3>
              <p className="text-muted-foreground">
                Industry veterans and cybersecurity leaders guiding our strategic vision and product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Transparency
              </h3>
              <p className="text-muted-foreground">
                We believe in complete transparency about our methods, sources, and findings. No black boxes, no hidden agendas.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Continuous innovation in threat detection technology to stay ahead of evolving cybercriminal tactics.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Customer Success
              </h3>
              <p className="text-muted-foreground">
                Your security is our success. We're committed to delivering actionable intelligence that makes a real difference.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Ethical Operations
              </h3>
              <p className="text-muted-foreground">
                We operate with the highest ethical standards, respecting privacy while providing critical security intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

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

export default About;