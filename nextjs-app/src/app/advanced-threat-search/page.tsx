import type { Metadata } from "next";
import Link from "next/link";
import { Search, Database, Eye, CheckCircle, XCircle, ArrowRight, Shield } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Advanced Threat Search",
  description: "Search indexing over 2 million live sources, allowing security teams to query threat actor personas, leaks, and historical breach data.",
  alternates: { canonical: "/advanced-threat-search" },
};

const faqs = [
  {
    q: 'What can I search with Advanced Threat Search?',
    a: "Security teams can query threat actor personas, leaks, and historical breach data across DarkThreat's indexed corpus of 2M+ live sources.",
  },
  {
    q: 'What sources are indexed?',
    a: 'Coverage includes onion sites, dark web forums, ransomware leak sites, Telegram and Discord channels, paste sites, and infostealer distribution channels.',
  },
  {
    q: 'Is this only real-time alerts, or can I look back?',
    a: 'Signals are archived, enriched, and searchable — providing a historical threat intelligence record for forensic investigation and reporting.',
  },
  {
    q: 'How does this relate to monitoring and threat intelligence?',
    a: 'Monitoring and enrichment feed the index; Advanced Threat Search is how teams query that corpus for personas, leaks, and historical breach data on demand.',
  },
];

export default function Page() {

      
  

  

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Advanced Threat Search',
    'name': 'DarkThreat Advanced Threat Search',
    'provider': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png'
    },
    'areaServed': 'Global',
    'description': 'Search indexing over 2 million live sources, allowing security teams to query threat actor personas, leaks, and historical breach data.',
    'url': 'https://darkthreat.ai/advanced-threat-search'
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
              Search across 2M+ indexed sources
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Advanced Threat Search — <span className="glow-text">Query personas, leaks, and historical breach data</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              Search indexing over 2 million live sources, allowing security teams to query threat actor personas, leaks, and historical breach data — so investigations start from a searchable intelligence record, not a blank page.
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
            { label: '2M+ sources', detail: 'Live indexed coverage' },
            { label: 'Threat actor personas', detail: 'Queryable across channels' },
            { label: 'Leaks & breaches', detail: 'Searchable exposure data' },
            { label: 'Historical record', detail: 'Archived & searchable signals' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is Advanced Threat Search?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Advanced Threat Search lets security teams query DarkThreat’s indexed underground corpus — spanning 2M+ live sources — for threat actor personas, leaked data, and historical breach signals. Findings are not only detected in real time; they are archived, enriched, and searchable to support forensic investigation and ongoing risk analysis.
            </p>
            <p className="text-lg text-muted-foreground">
              Instead of starting investigations from scratch, your team searches a living intelligence index built from continuous dark web ingestion and enrichment.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Persona search', detail: 'Query threat actor personas across forums and channels.' },
              { title: 'Leak search', detail: 'Find credential and data exposures in indexed sources.' },
              { title: 'Historical breach data', detail: 'Search an archived intelligence record over time.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Core capabilities of Advanced Threat Search</h2>
            <p className="text-lg text-muted-foreground">On-demand search over the same indexed corpus that powers monitoring and enrichment.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Search across 2M+ live sources</h3>
              <p className="text-muted-foreground mb-4">Indexing over onion sites, dark web forums, Telegram/Discord, paste sites, ransomware leak portals, and infostealer channels.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Continuously updated index</li>
                <li>Near real-time ingestion backbone</li>
                <li>Broad underground coverage</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Query what matters to investigators</h3>
              <p className="text-muted-foreground mb-4">Search threat actor personas, leaks, and historical breach data.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Persona and campaign context</li>
                <li>Leak and exposure lookup</li>
                <li>Investigation-ready queries</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Searchable historical intelligence</h3>
              <p className="text-muted-foreground mb-4">Signals are archived, enriched, and searchable for forensic investigation and compliance reporting.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Historical threat intelligence record</li>
                <li>Enriched context with results</li>
                <li>Support for follow-up investigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why teams choose DarkThreat</h2>
            <p className="text-lg text-muted-foreground">Built for investigators who need a searchable underground index — not ad-hoc forum hopping.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Built on a live index', desc: '2M+ sources continuously indexed, not a static dump.' },
              { title: 'Personas, not just keywords', desc: 'Query threat actor personas alongside leaks and breach data.' },
              { title: 'History you can search', desc: 'Catalogued signals stay archived and searchable.' },
              { title: 'Investigation-ready', desc: 'Supports forensic follow-up from a structured intelligence record.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat compares to ad-hoc underground research</h2>
            <p className="text-lg text-muted-foreground">Manual hunting cannot match continuous indexing, persona search, and a searchable historical record.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Manual / ad-hoc underground research</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Search across 2M+ indexed live sources', true, false],
                  ['Query threat actor personas', true, false],
                  ['Search leaks and historical breach data', true, false],
                  ['Archived, searchable intelligence record', true, false],
                  ['Continuous index updates', true, false],
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
