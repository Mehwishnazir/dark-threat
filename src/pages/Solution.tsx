import { Button } from '@/components/ui/button';
import { Shield, Search, AlertTriangle, Users, Database, Zap, Eye, Globe, Lock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TrialModal from '@/components/TrialModal';

const Solution = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-oswald font-bold text-foreground">
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-6">
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
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              Advanced Threat Detection
            </h2>
            <p className="text-lg text-muted-foreground">
              Multi-layered monitoring across all dark web vectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <Globe className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
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
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
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
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
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

      {/* How it Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple setup, powerful protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-oswald font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
                Setup Monitoring
              </h3>
              <p className="text-muted-foreground">
                Configure your domains, email addresses, and keywords for comprehensive monitoring across the dark web.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-oswald font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
                Continuous Scanning
              </h3>
              <p className="text-muted-foreground">
                Our AI-powered systems continuously scan thousands of dark web sources for threats and exposures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-oswald font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-oswald font-semibold text-foreground mb-3">
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
    </div>
  );
};

export default Solution;