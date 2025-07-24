import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import ThreatSphere from '@/components/ThreatSphere';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import { Shield, Search, AlertTriangle, Users, Database, Zap, Eye, Globe, Lock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center cyber-grid overflow-hidden">
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hero-button">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-border hover:border-primary hover:bg-primary/10">
              Watch Demo
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
              Threat Intelligence Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your security requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              plan="Standard"
              price="$200"
              billing="per month"
              features={[
                "Basic breach & credential monitoring",
                "1 API key included",
                "5 search credits/month",
                "Email notifications",
                "Web UI access"
              ]}
            />
            <PricingCard
              plan="Enterprise"
              price="$340"
              billing="per month"
              popular={true}
              features={[
                "Full domain & hacker chatter feeds",
                "3 API keys included",
                "20 search credits/month",
                "6 analyst-driven reviews",
                "SIEM integration",
                "Priority support"
              ]}
            />
            <PricingCard
              plan="MSSP White-Label"
              price="Custom"
              billing="contact sales"
              features={[
                "White-label portal",
                "Multi-tenant API",
                "Bulk onboarding",
                "Volume pricing",
                "Custom branding",
                "Dedicated support"
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Start with a 7-day free trial • No credit card required
            </p>
            <Button className="hero-button text-lg px-8 py-4">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-oswald font-bold text-foreground mb-4">
            DARK<span className="text-primary">THREAT</span>
          </div>
          <p className="text-muted-foreground">
            Advanced dark web threat intelligence for modern security teams
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
