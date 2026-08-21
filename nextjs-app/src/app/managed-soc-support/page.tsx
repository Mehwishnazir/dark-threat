import type { Metadata } from "next";
import Link from "next/link";
import { Users, ShieldCheck, Filter, CheckCircle, XCircle, ArrowRight, Shield } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "24/7 Managed SOC Support",
  description: "Expert-led Security Operations Center validation that reduces alert fatigue by cross-verifying threat relevance before alerting your team.",
  alternates: { canonical: "/managed-soc-support" },
};

const faqs = [
  {
    q: 'What does 24/7 Managed SOC Support include?',
    a: 'Expert-led SOC validation that cross-verifies threat relevance before alerting your team, reducing alert fatigue and pairing validated findings with recommended remediation.',
  },
  {
    q: 'How does this reduce alert fatigue?',
    a: 'Machine learning filters irrelevant noise and de-duplicates low-fidelity signals; threat hunters validate critical exposures so your team sees high-priority, high-confidence incidents.',
  },
  {
    q: 'Who validates the alerts?',
    a: 'A 24/7 analyst triage layer and Threat Hunting Division enrich and contextualize high-severity findings with human judgment on top of machine precision.',
  },
  {
    q: 'How is alert accuracy measured?',
    a: "DarkThreat's pipeline — validated by the 24/7 analyst triage team — maintains a 99.9% alert accuracy SLA on organizational relevance and verified threat validity.",
  },
];

export default function Page() {

      
  

  

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': '24/7 Managed SOC Support',
    'name': 'DarkThreat 24/7 Managed SOC Support',
    'provider': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png'
    },
    'areaServed': 'Global',
    'description': "Expert-led Security Operations Center validation that reduces alert fatigue by cross-verifying threat relevance before alerting your team.",
    'url': 'https://darkthreat.ai/managed-soc-support'
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
              Expert-led SOC validation
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              24/7 Managed SOC Support — <span className="glow-text">Cross-verified alerts, less fatigue</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              Expert-led Security Operations Center validation that reduces alert fatigue by cross-verifying threat relevance before alerting your team — with recommended remediation so your analysts can act, not triage noise.
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
            { label: '24/7 SOC', detail: 'Analyst triage layer' },
            { label: 'Alert accuracy', detail: '99.9% SLA (relevance + validity)' },
            { label: 'Human validation', detail: 'Before critical alerts ship' },
            { label: 'Less fatigue', detail: 'Noise filtered, signal first' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is 24/7 Managed SOC Support?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              DarkThreat pairs machine learning classifiers with a 24/7 analyst triage layer so your team is not woken for irrelevant underground noise. Expert-led SOC validation cross-checks organizational relevance and threat validity — then delivers high-priority, contextualized alerts with recommended remediation.
            </p>
            <p className="text-lg text-muted-foreground">
              The result: your SOC responds to precise, actionable intelligence — not a flood of low-fidelity signals that bury the incidents that actually matter.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Relevance checks', detail: 'Confirm the finding maps to your assets.' },
              { title: 'Threat validity', detail: 'Filter fake dumps and recycled noise.' },
              { title: 'Remediation guidance', detail: 'Recommended next steps with validated alerts.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Core capabilities of Managed SOC Support</h2>
            <p className="text-lg text-muted-foreground">Human validation and noise reduction so your team gets alerts worth waking up for.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Expert-led SOC validation</h3>
              <p className="text-muted-foreground mb-4">24/7 Security Operations Center validation for alert accuracy and recommended remediation.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Cross-verify relevance before notify</li>
                <li>Analyst-validated enrichment</li>
                <li>Critical exposures reviewed by threat hunters</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Alert fatigue reduction</h3>
              <p className="text-muted-foreground mb-4">ML filters noise; threat hunters validate critical exposures.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>De-duplicate low-fidelity signals</li>
                <li>Surface high-confidence incidents</li>
                <li>Stop irrelevant underground noise from reaching your team</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Threat hunting + human context</h3>
              <p className="text-muted-foreground mb-4">Analysts operate where adversaries do — forums, ransomware panels, Telegram channels — to add judgment models alone cannot.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Human-validated context on high-severity alerts</li>
                <li>Campaign and persona awareness</li>
                <li>Intelligence your SOC can act on</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why teams choose DarkThreat</h2>
            <p className="text-lg text-muted-foreground">Built for security operations that need validated signal — not another raw alert stream.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Human + machine', desc: 'NLP classifiers plus human SOC validation.' },
              { title: 'Accuracy you can trust', desc: '99.9% alert accuracy SLA measured on relevance and validity.' },
              { title: 'Built to cut fatigue', desc: 'Cross-verify before alerting your team.' },
              { title: 'Remediation, not just tickets', desc: 'Recommended response with validated alerts.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat compares to unvalidated alert streams</h2>
            <p className="text-lg text-muted-foreground">Raw feeds create fatigue. DarkThreat validates relevance and validity before your team is notified.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Unvalidated / raw alert streams</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24/7 SOC analyst triage', true, false],
                  ['Cross-verify relevance before notify', true, false],
                  ['Threat hunter validation on critical exposures', true, false],
                  ['Recommended remediation with alerts', true, false],
                  ['Explicit alert-fatigue reduction focus', true, false],
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
