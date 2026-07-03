import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ArrowRight, Quote } from 'lucide-react';
import AppHeader from '@/components/AppHeader';
import FinalCTA from '@/components/FinalCTA';


const features: Array<[string, boolean, boolean]> = [
  ['Transparent public pricing', true, false],
  ['Self-serve signup & 7-day trial', true, false],
  ['Real-time stealer log alerts', true, true],
  ['AI-based false-positive filtering', true, false],
  ['Telegram + Discord coverage', true, true],
  ['No annual contract required', true, false],
  ['White-label MSSP plan', true, true],
  ['Dedicated CSM (enterprise)', true, true],
];

const ComparisonDarkOwl = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DarkOwl Alternative | DarkThreat vs DarkOwl</title>
        <meta name="description" content="Looking for a DarkOwl alternative? Compare DarkThreat vs DarkOwl on pricing, coverage, ease-of-use, and self-serve onboarding. Start a free 7-day trial today." />
        <link rel="canonical" href="https://darkthreat.ai/compare/darkthreat-vs-darkowl" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "DarkOwl Alternative | DarkThreat vs DarkOwl",
          "description": "Compare DarkThreat vs DarkOwl on pricing, coverage, ease-of-use, and onboarding. DarkThreat is a modern, transparent, self-serve DarkOwl alternative.",
          "url": "https://darkthreat.ai/compare/darkthreat-vs-darkowl",
          "publisher": {
            "@type": "Organization",
            "name": "DarkThreat",
            "logo": {
              "@type": "ImageObject",
              "url": "https://darkthreat.ai/logo.png"
            }
          }
        })}</script>
      </Helmet>

      <AppHeader />

      <section className="relative pt-32 pb-16 px-6 hero-bg-layered overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            DarkOwl Alternative — Why Security Teams <span className="glow-text">Choose DarkThreat</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Transparent pricing, instant onboarding, and AI-curated alerts — without the enterprise sales cycle.
          </p>
          <Button onClick={() => (window.location.href = '/auth')} className="cta-cyan inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Side-by-side */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Feature comparison</h2>
          <div className="overflow-x-auto threat-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-montserrat">Feature</th>
                  <th className="p-4 font-montserrat text-primary">DarkThreat</th>
                  <th className="p-4 font-montserrat text-muted-foreground">DarkOwl</th>
                </tr>
              </thead>
              <tbody>
                {features.map(([f, dt, dw]) => (
                  <tr key={f} className="border-b border-border/50">
                    <td className="p-4">{f}</td>
                    <td className="p-4 text-center">{dt ? <CheckCircle className="w-5 h-5 text-primary inline" /> : <XCircle className="w-5 h-5 text-muted-foreground inline" />}</td>
                    <td className="p-4 text-center">{dw ? <CheckCircle className="w-5 h-5 text-muted-foreground inline" /> : <XCircle className="w-5 h-5 text-muted-foreground inline" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Pricing — transparent vs. hidden</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="threat-card border-primary/50">
              <h3 className="text-2xl font-montserrat font-bold text-primary mb-3">DarkThreat</h3>
              <p className="text-4xl font-bold mb-2">From $288<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              <p className="text-muted-foreground mb-4">Public pricing. Monthly or annual. No contract required.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary" /> 7-day free trial</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Self-serve signup</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary" /> No credit card required</li>
              </ul>
            </div>
            <div className="threat-card">
              <h3 className="text-2xl font-montserrat font-bold mb-3">DarkOwl</h3>
              <p className="text-4xl font-bold mb-2 text-muted-foreground">Contact sales</p>
              <p className="text-muted-foreground mb-4">Quote-based. Annual contracts. Sales cycle required.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><XCircle className="w-4 h-4" /> No public pricing</li>
                <li className="flex gap-2"><XCircle className="w-4 h-4" /> No self-serve trial</li>
                <li className="flex gap-2"><XCircle className="w-4 h-4" /> Long procurement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Self-serve vs enterprise */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-8">Self-serve vs. enterprise sales</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            DarkOwl's go-to-market is designed for Fortune 500 procurement teams. DarkThreat is built for security engineers who want to evaluate a product the same week they need it — sign up, add your domain, and see real findings within minutes.
          </p>
        </div>
      </section>

      {/* 5 reasons */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">5 reasons to switch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Transparent pricing', 'Know exactly what you pay before you book a demo.'],
              ['Faster time-to-value', 'Live alerts in under 30 minutes from signup.'],
              ['AI-curated alerts', 'Less noise — only verified, contextualized findings.'],
              ['Modern UX', 'Built for analysts in 2026, not 2014.'],
              ['Flexible plans', 'Monthly billing and MSSP white-label out of the box.'],
            ].map(([t, d], i) => (
              <div key={t} className="threat-card">
                <div className="text-primary text-2xl font-montserrat font-bold mb-2">0{i + 1}</div>
                <h3 className="font-montserrat font-bold mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto threat-card">
          <Quote className="w-10 h-10 text-primary mb-4" />
          <p className="text-lg text-foreground mb-4 italic">
            "We evaluated DarkOwl and three other vendors. DarkThreat was the only one that let us start finding real exposures before our procurement team even finished the security review. We switched within a month."
          </p>
          <p className="font-montserrat font-bold">— Director of Security, Fintech Scale-up</p>
        </div>
      </section>

      <FinalCTA />

      <footer className="bg-card border-t border-border py-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} DarkThreat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComparisonDarkOwl;
