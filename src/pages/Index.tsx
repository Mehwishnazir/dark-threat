
import { Suspense, useState } from 'react';
import { Button } from '@/components/ui/button';
import ThreatSphere from '@/components/ThreatSphere';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import TrialRegistrationForm from '@/components/TrialRegistrationForm';
import TrialModal from '@/components/TrialModal';
import ComparisonTable from '@/components/ComparisonTable';
import ReviewsSection from '@/components/ReviewsSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Shield, Search, AlertTriangle, Users, Database, Zap, Eye, Globe, Lock, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background relative">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-oswald font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-primary">
              Home
            </Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary transition-colors">
              Solution
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
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
      <section className="relative h-screen flex items-center justify-center cyber-grid overflow-hidden mt-20">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow"></div>}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-foreground mb-6">
            DARK<span className="glow-text">THREAT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Proactively detect data breaches, credential leaks, and hacker chatter
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            on the Dark Web before they impact your business.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => setIsTrialModalOpen(true)}
              className="hero-button"
            >
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float delay-1000">
          <Shield className="text-primary w-8 h-8 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float delay-2000">
          <AlertTriangle className="text-primary w-6 h-6 opacity-40" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              The Dark Web Threat Landscape
            </h2>
            <p className="text-lg text-muted-foreground">
              Critical statistics that highlight the importance of dark web monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              title="Average Cost"
              value="$4.37M"
              description="Average cost of a data breach in 2024"
              icon={<Database />}
            />
            <StatCard
              title="Detection Time"
              value="280 Days"
              description="Average time to identify & contain a breach"
              icon={<Search />}
            />
            <StatCard
              title="Daily Users"
              value="2M+"
              description="Daily TOR browser users accessing dark web"
              icon={<Users />}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Comprehensive Dark Web Monitoring
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced threat intelligence across multiple attack vectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Domain & Sub-domain Monitoring"
              description="Detect exposed corporate domains and sub-domains on paste sites, forums, and marketplaces"
              features={[
                "Real-time domain leak alerts",
                "Sub-domain discovery",
                "Paste site monitoring",
                "Forum surveillance"
              ]}
              icon={<Globe />}
            />
            <ServiceCard
              title="Credential Leak Detection"
              description="Monitor for employee or VIP email and password dumps across dark web sources"
              features={[
                "Email compromise alerts",
                "Password database monitoring",
                "VIP account protection",
                "Stealer log analysis"
              ]}
              icon={<Lock />}
            />
            <ServiceCard
              title="Hacker Chatter Intelligence"
              description="Scrape dark web forums, chatrooms, and private channels for company mentions"
              features={[
                "Forum thread monitoring",
                "Private channel access",
                "Threat actor tracking",
                "Attack planning detection"
              ]}
              icon={<Eye />}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Dark Web Monitoring Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your security requirements
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-full p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 text-sm font-oswald font-semibold rounded-full transition-colors ${
                  !isAnnual ? 'bg-primary text-black' : 'text-muted-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 text-sm font-oswald font-semibold rounded-full transition-colors ${
                  isAnnual ? 'bg-primary text-black' : 'text-muted-foreground'
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              plan="Standard"
              monthlyPrice="$288"
              annualPrice="$2,000"
              discount="31%"
              isAnnual={isAnnual}
              onTrialClick={() => setIsTrialModalOpen(true)}
              features={[
                "Basic breach & credential monitoring",
                "1 x Domain coverage",
                "1 User",
                "Email notifications",
                "Web UI access"
              ]}
            />
            <PricingCard
              plan="Enterprise"
              monthlyPrice="$490"
              annualPrice="$3,400"
              discount="42%"
              popular={true}
              isAnnual={isAnnual}
              onTrialClick={() => setIsTrialModalOpen(true)}
              features={[
                "Full domain & hacker chatter feeds",
                "2 x Domain/IP Coverage",
                "2 Users",
                "Priority support"
              ]}
            />
            <PricingCard
              plan="MSSP (WhiteLabel)"
              monthlyPrice="Custom"
              annualPrice="Custom"
              discount=""
              isCustom={true}
              isAnnual={isAnnual}
              features={[
                "White-label portal",
                "Multi-tenant API",
                "Bulk onboarding",
                "Volume pricing",
                "Custom branding",
                "Dedicated support",
                "Custom threat intelligence feeds",
                "Unlimited API keys",
                "24/7 priority support"
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Start with a 7-day free trial • No credit card required
            </p>
            <Button 
              onClick={() => setIsTrialModalOpen(true)}
              className="hero-button text-lg px-8 py-4"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Trial Modal */}
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="relative bg-card border-t border-border py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-oswald font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence platform protecting your organization 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-oswald font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-oswald font-semibold text-foreground mb-4">Legal</h3>
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

export default Index;
