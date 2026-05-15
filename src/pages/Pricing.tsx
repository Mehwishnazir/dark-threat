import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import PricingCard from '@/components/PricingCard';
import TrialModal from '@/components/TrialModal';
import ComparisonTable from '@/components/ComparisonTable';
import { Shield, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing | DarkThreat Dark Web Monitoring Plans</title>
        <meta name="description" content="Transparent pricing for DarkThreat's dark web monitoring plans. Standard, Enterprise, and MSSP white-label tiers with a 7-day free trial. No credit card required." />
        <link rel="canonical" href="https://darkthreat.ai/pricing" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "DarkThreat Dark Web Monitoring",
          "description": "AI-powered dark web monitoring platform with real-time credential leak detection, hacker chatter alerts, and automated breach reports.",
          "brand": { "@type": "Brand", "name": "DarkThreat" },
          "offers": [
            { "@type": "Offer", "name": "Standard Plan", "price": "288", "priceCurrency": "USD", "billingIncrement": "monthly", "url": "https://darkthreat.ai/pricing" },
            { "@type": "Offer", "name": "Enterprise Plan", "price": "490", "priceCurrency": "USD", "billingIncrement": "monthly", "url": "https://darkthreat.ai/pricing" }
          ],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "127", "bestRating": "5" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. DarkThreat offers a 7-day free trial with full platform access. No credit card required to start." } },
            { "@type": "Question", "name": "Can I cancel anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Monthly plans can be cancelled anytime with no cancellation fees. Annual plans are non-refundable after the first 30 days." } },
            { "@type": "Question", "name": "What is included in the Standard plan?", "acceptedAnswer": { "@type": "Answer", "text": "The Standard plan includes basic breach and credential monitoring for 1 domain, 1 user account, email notifications, and web UI access." } },
            { "@type": "Question", "name": "Does DarkThreat offer annual discounts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Annual billing saves up to 42% compared to monthly pricing. The Enterprise annual plan is $3,400/year vs $5,880 billed monthly." } },
            { "@type": "Question", "name": "Is there a white-label MSSP option?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The MSSP plan includes a white-label portal, multi-tenant API, bulk onboarding, custom branding, and volume pricing. Contact us for a quote." } }
          ]
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
            <Link to="/solution" className="text-muted-foreground hover:text-primary transition-colors">
              Solution
            </Link>
            <Link to="/pricing" className="text-primary">
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

      {/* Pricing Section */}
      <section className="pt-24 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Dark Web Monitoring <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your security requirements
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-full p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 text-sm font-montserrat font-semibold rounded-full transition-colors ${!isAnnual ? 'bg-primary text-black' : 'text-muted-foreground'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 text-sm font-montserrat font-semibold rounded-full transition-colors ${isAnnual ? 'bg-primary text-black' : 'text-muted-foreground'
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
                "Email notifications",
                "Web UI access",
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
              className="hero-button px-8 py-3"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Platform */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Pricing <span className="text-primary">Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible pricing tailored to your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="threat-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground">Plans that grow with your business needs and security requirements</p>
            </div>
            <div className="threat-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden fees or surprise charges. What you see is what you pay</p>
            </div>
            <div className="threat-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-muted-foreground">Custom solutions for large organizations and MSSP partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Why Choose DarkThreat?
            </h2>
            <p className="text-lg text-muted-foreground">
              See how we compare to traditional monitoring solutions
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Trial Modal */}
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

export default Pricing;