import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Globe, Cloud, ShieldCheck, CheckCircle, XCircle, ArrowRight, Shield } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "External Attack Surface Monitoring",
  description: "Track internet-facing digital footprint, shadow IT assets, open ports, cloud exposures, and third-party supply chain vulnerabilities.",
  ...pageSeo("/external-attack-surface-monitoring"),
};

const faqs = [
  {
    q: 'What does External Attack Surface Monitoring track?',
    a: 'Internet-facing digital footprint, shadow IT assets, open ports, cloud exposures, and third-party supply chain vulnerabilities.',
  },
  {
    q: 'How does this connect to dark web monitoring?',
    a: 'The asset map is Layer 1 of the intelligence engine — it provides organizational context so dark web and credential alerts correlate to assets that actually belong to you.',
  },
  {
    q: 'Do we need to install agents?',
    a: 'No. DarkThreat is agentless: register domains, IP ranges, and brand keywords; the platform maps your external attack surface with zero infrastructure footprint.',
  },
  {
    q: 'Is the Texas page the same product?',
    a: '/attack-surface-monitoring/texas is a regional landing page. This page is the national product overview for External Attack Surface Monitoring.',
  },
];

export default function Page() {

      
  

  

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'External Attack Surface Monitoring',
    'name': 'DarkThreat External Attack Surface Monitoring',
    'provider': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png'
    },
    'areaServed': 'Global',
    'description': 'Track internet-facing digital footprint, shadow IT assets, open ports, cloud exposures, and third-party supply chain vulnerabilities.',
    'url': 'https://darkthreat.ai/external-attack-surface-monitoring'
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />
      

      

      <section className="relative pt-12 pb-20 px-6 overflow-hidden hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr] items-start">
          <div>
            <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Agentless external visibility
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              External Attack Surface Monitoring — <span className="glow-text">See what the internet (and attackers) can see</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              Track your internet-facing digital footprint, shadow IT assets, open ports, cloud exposures, and third-party supply chain vulnerabilities — then correlate that map with dark web intelligence so alerts stay relevant to your real environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="cta-cyan inline-flex items-center gap-2">Book Demo <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/pricing" className="cta-outline inline-flex items-center gap-2 justify-center">
                View Pricing
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Free Consultation</span>
              </div>
              <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Get Your Free Cybersecurity Assessment</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your organization"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Reason for Contact *</label>
                    <select
                      name="interest"
                      required
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    >
                      <option value="">Select a reason</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sales Question">Sales Question</option>
                      <option value="Demo Request">Demo Request</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">How Can We Help? *</label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="Describe your security needs or challenges..."
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border resize-none"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  Request Free Assessment →
                </button>
                <p className="text-center text-xs text-muted-foreground/70">By submitting, you agree to our <span className="underline underline-offset-2 hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>.</p>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Digital footprint map', detail: 'Domains, IPs, cloud, shadow IT' },
            { label: 'Shadow IT discovery', detail: 'Assets internal teams may miss' },
            { label: 'Cloud & port exposure', detail: 'Misconfigs and open services' },
            { label: 'Supply chain visibility', detail: 'Third-party / partner exposure' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-border bg-card p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">{item.label}</p>
              <p className="text-foreground font-semibold text-lg">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card/10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is External Attack Surface Monitoring?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Before dark web signals can be tied to your organization, DarkThreat builds a comprehensive, continuously updated map of your digital footprint — registered domains, IP ranges, employee email patterns, cloud storage buckets, third-party integrations, and software exposed to the public internet. That asset map feeds every downstream alert with organizational context.
            </p>
            <p className="text-lg text-muted-foreground">
              The result is outside-in visibility: you see what attackers can already see, including shadow IT and supply chain paths that internal inventories often miss.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Footprint mapping', detail: 'Domains, IP ranges, brand keywords, and cloud assets.' },
              { title: 'Shadow IT & exposure', detail: 'Unknown assets, open ports, misconfigured storage.' },
              { title: 'Supply chain surface', detail: 'Third-party integrations and partner risk paths.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">{item.title}</p>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Core capabilities of External Attack Surface Monitoring</h2>
            <p className="text-lg text-muted-foreground">Layer 1 of the DarkThreat engine — the asset map that makes every alert organization-specific.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Continuously updated asset map</h3>
              <p className="text-muted-foreground mb-4">Asset Exposure Engine maps digital footprint: domains, IP ranges, cloud buckets, shadow IT, third-party integrations.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Always-on external mapping</li>
                <li>Context for every alert</li>
                <li>Feeds enrichment downstream</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Exposure discovery that matters</h3>
              <p className="text-muted-foreground mb-4">Identifies shadow IT, misconfigured cloud storage, open ports/services, and supply chain exposures.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Shadow IT visibility</li>
                <li>Cloud misconfiguration signals</li>
                <li>Open service / vulnerability windows</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Agentless by design</h3>
              <p className="text-muted-foreground mb-4">Register domain, IP ranges, and brand keywords — zero infrastructure footprint inside your network.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>No agents or sensors</li>
                <li>No IT provisioning delay</li>
                <li>Protection starts when assets are registered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why teams choose DarkThreat</h2>
            <p className="text-lg text-muted-foreground">Outside-in mapping that turns external attack surface monitoring into an always-on intelligence layer.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Outside-in visibility', desc: 'Watches what perimeter tools miss on the public internet and underground.' },
              { title: 'Unified attack-surface view', desc: 'Domains, IP ranges, brand keywords, and supply chain partners.' },
              { title: 'Context for dark web alerts', desc: 'Asset map ensures relevance to your environment.' },
              { title: 'Always-on, not manual', desc: 'Continuous mapping instead of labor-intensive research.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-8">
                <h3 className="text-xl font-montserrat font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat compares to manual attack-surface inventories</h2>
            <p className="text-lg text-muted-foreground">Periodic spreadsheets go stale. DarkThreat keeps a continuously updated external footprint map.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Manual / periodic inventories</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Continuously updated digital footprint map', true, false],
                  ['Shadow IT and unknown asset discovery', true, false],
                  ['Cloud, open port, and exposure tracking', true, false],
                  ['Third-party / supply chain surface visibility', true, false],
                  ['Agentless mapping (no internal footprint)', true, false],
                ].map(([cap, dt, mn]) => (
                  <tr key={cap as string} className="border-b border-border/50">
                    <td className="p-4 text-sm text-foreground">{cap}</td>
                    <td className="p-4 text-center">{dt ? <CheckCircle className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />}</td>
                    <td className="p-4 text-center">{mn ? <CheckCircle className="w-5 h-5 text-muted-foreground mx-auto" /> : <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">Frequently asked questions</h2>
          <div className="w-full space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-border rounded-xl px-4">
                <summary className="text-left font-montserrat font-semibold py-3 cursor-pointer">{f.q}</summary>
                <p className="text-muted-foreground pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      
    </div>
  
  );
}
