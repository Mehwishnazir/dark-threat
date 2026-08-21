import type { Metadata } from "next";
import Link from "next/link";
import { Database, FileCheck, ShieldCheck, CheckCircle, XCircle, ArrowRight, Shield } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Compliance & Framework Alignment",
  description: "Continuous monitoring and compliance evidence collection aligned with ISO 27001, NIST Cybersecurity Framework, GDPR, HIPAA, and PCI-DSS.",
  alternates: { canonical: "/compliance-framework-alignment" },
};

const faqs = [
  {
    q: 'What compliance frameworks does DarkThreat support?',
    a: "DarkThreat's operations are aligned with ISO 27001, the NIST Cybersecurity Framework, GDPR, HIPAA, and PCI-DSS — making it suitable for financial services, healthcare, legal, and other regulated industries.",
  },
  {
    q: 'Does DarkThreat replace my compliance program?',
    a: 'No. It supports compliance evidence collection and security posture reporting through continuous external monitoring aligned to those frameworks.',
  },
  {
    q: 'How does this help with audits?',
    a: 'Monitoring capabilities and intelligence delivery are designed to support evidence collection — helping teams demonstrate external threat monitoring as part of their control posture and keep compliance audits more seamless.',
  },
  {
    q: 'Is this only for certain industries?',
    a: 'The same core frameworks apply broadly; industry pages also map outputs to sector needs such as PCI-DSS, HIPAA, SOC 2, and related controls.',
  },
];

export default function Page() {

      
  

  

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Compliance & Framework Alignment',
    'name': 'DarkThreat Compliance & Framework Alignment',
    'provider': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png'
    },
    'areaServed': 'Global',
    'description': "DarkThreat delivers continuous monitoring and compliance evidence collection aligned with ISO 27001, NIST Cybersecurity Framework, GDPR, HIPAA, and PCI-DSS.",
    'url': 'https://darkthreat.ai/compliance-framework-alignment'
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
              Compliance-aligned by design
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Compliance &amp; Framework Alignment — <span className="glow-text">Evidence that supports audits, not just alerts</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              DarkThreat delivers continuous monitoring and compliance evidence collection aligned with ISO 27001, NIST Cybersecurity Framework, GDPR, HIPAA, and PCI-DSS — so security and compliance teams can show external threat monitoring as part of their control posture.
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
            { label: 'ISO 27001', detail: 'Aligned monitoring controls' },
            { label: 'NIST CSF', detail: 'Identify → Respond coverage' },
            { label: 'GDPR · HIPAA · PCI-DSS', detail: 'Framework-ready support' },
            { label: 'Evidence collection', detail: 'Audit-oriented outputs' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is compliance &amp; framework alignment for dark web monitoring?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Regulated organizations need more than detection — they need monitoring outputs that map to the frameworks auditors and risk teams already use. DarkThreat’s platform and operational procedures are designed to align with the security frameworks that govern the industries we serve, supporting compliance evidence collection and security posture reporting.
            </p>
            <p className="text-lg text-muted-foreground">
              The goal is practical: help security and compliance teams demonstrate continuous external threat monitoring as part of their control posture — without inventing a separate compliance product that replaces your program.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Continuous monitoring', detail: 'Ongoing external threat visibility for control evidence.' },
              { title: 'Framework-aligned outputs', detail: 'Structured to support ISO, NIST, GDPR, HIPAA, and PCI-DSS needs.' },
              { title: 'Evidence for audits', detail: 'Reporting that helps keep compliance audits seamless.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Core capabilities for Compliance &amp; Framework Alignment</h2>
            <p className="text-lg text-muted-foreground">Monitoring and intelligence delivery designed to support evidence collection across the frameworks your auditors expect.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Multi-framework alignment</h3>
              <p className="text-muted-foreground mb-4">Support across ISO 27001, NIST CSF, GDPR, HIPAA, and PCI-DSS.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Threat intelligence as an operational control (ISO)</li>
                <li>Identify / Protect / Detect / Respond (NIST)</li>
                <li>Sector-ready healthcare &amp; payments monitoring</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Compliance evidence collection</h3>
              <p className="text-muted-foreground mb-4">Monitoring and intelligence delivery that support evidence collection and posture reporting.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Continuous external monitoring signals</li>
                <li>Structured alert history for reviews</li>
                <li>Sector report exports where offered</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Built for regulated industries</h3>
              <p className="text-muted-foreground mb-4">Coverage tuned for financial, healthcare, and other regulated environments.</p>
              <ul className="space-y-3 text-muted-foreground">
                <li>PCI-DSS payment credential exposure monitoring</li>
                <li>HIPAA-ready healthcare credential &amp; breach-notification support</li>
                <li>GDPR-aligned data handling procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why teams choose DarkThreat</h2>
            <p className="text-lg text-muted-foreground">Aligned support for regulated industries — evidence collection and framework mapping, not certification theater.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Aligned by design', desc: 'Platform and procedures built to match frameworks that govern regulated industries.' },
              { title: 'Evidence, not just alerts', desc: 'Outputs support compliance evidence collection and posture reporting.' },
              { title: 'Cross-framework coverage', desc: 'ISO 27001, NIST CSF, GDPR, HIPAA, and PCI-DSS in one monitoring layer.' },
              { title: 'Audit-friendly operations', desc: 'Early-warning intelligence that helps keep compliance audits seamless.' },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat compares to monitoring without compliance mapping</h2>
            <p className="text-lg text-muted-foreground">Generic monitoring often stops at alerts. DarkThreat is built to support framework-aligned evidence collection.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Generic monitoring without framework mapping</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['ISO 27001-aligned threat intelligence controls', true, false],
                  ['NIST CSF Identify / Detect / Respond support', true, false],
                  ['GDPR / HIPAA / PCI-DSS alignment language & support', true, false],
                  ['Compliance evidence collection focus', true, false],
                  ['Sector-ready regulated industry coverage', true, false],
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
