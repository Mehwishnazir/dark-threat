import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Banknote, HeartPulse, Scale, ShoppingCart, Cloud, Landmark, GraduationCap, Bitcoin, Briefcase, Shield, AlertTriangle, Lock, Database, Eye, Globe, ArrowRight, CheckCircle2, } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Industry Dark Web Monitoring",
  description: "DarkThreat delivers sector-specific dark web monitoring for financial services, healthcare, legal, government, e-commerce, SaaS, education, and crypto industries.",
  ...pageSeo("/industries"),
};

const industries = [
  {
    icon: Banknote,
    name: 'Financial Services',
    slug: '/industries/financial-services',
    desc: 'Protect SWIFT credentials, card data, and banking customer PII from dark web markets.',
    tags: ['PCI-DSS', 'GLBA', 'SWIFT CSP'],
    available: true,
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    slug: '/industries/healthcare',
    desc: 'Safeguard PHI, EHR records, and HIPAA data from ransomware actors and dark web brokers.',
    tags: ['HIPAA', 'HITECH', 'NIST'],
    available: true,
  },
  {
    icon: Scale,
    name: 'Legal',
    slug: '/industries/legal',
    desc: 'Protect privileged client communications, case files, and attorney credentials.',
    tags: ['ABA Rules', 'GDPR', 'State Bar'],
    available: true,
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    slug: '/industries/professional-services',
    desc: 'Protect confidential client information, partner credentials, and firm intellectual property.',
    tags: ['SOC 2', 'ISO 27001', 'GDPR'],
    available: true,
  },
  {
    icon: Landmark,
    name: 'Government',
    slug: '/industries/government',
    desc: 'Monitor for nation-state threat activity, citizen data leaks, and critical infrastructure exposure.',
    tags: ['FISMA', 'NIST 800-53', 'FedRAMP'],
    available: true,
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce & Retail',
    slug: '/industries/ecommerce',
    desc: 'Detect stolen customer credentials, carding activity, and brand impersonation campaigns.',
    tags: ['PCI-DSS', 'GDPR', 'CCPA'],
    available: true,
  },
  {
    icon: Cloud,
    name: 'SaaS & Technology',
    slug: '/industries/saas-technology',
    desc: 'Surface leaked API keys, source code, developer credentials, and cloud bucket exposures.',
    tags: ['SOC 2', 'ISO 27001', 'CCPA'],
    available: true,
  },
  {
    icon: GraduationCap,
    name: 'Education',
    slug: '/industries/education',
    desc: 'Protect student PII, research IP, and faculty credentials from growing academic cyber threats.',
    tags: ['FERPA', 'COPPA', 'NIST'],
    available: true,
  },
  {
    icon: Bitcoin,
    name: 'Crypto & Fintech',
    slug: '/industries/crypto-fintech',
    desc: 'Monitor wallet address leaks, exchange credential theft, and DeFi protocol attack signals.',
    tags: ['FinCEN', 'MiCA', 'ISO 27001'],
    available: true,
  },
];

const threatVectors = [
  { icon: Lock, title: 'Credential Exposure', desc: 'Employee and customer usernames and passwords sold in infostealer log packs across Telegram and dark web markets.' },
  { icon: Database, title: 'Sensitive Data Leaks', desc: 'Internal documents, customer records, and IP published on ransomware leak sites or paste services.' },
  { icon: Eye, title: 'Threat Actor Targeting', desc: 'Threat actors discuss, plan, and advertise attacks against specific sectors and named organizations.' },
  { icon: AlertTriangle, title: 'Third-Party Exposure', desc: 'Vendor and supply chain partner breaches that cascade into your organization\'s risk surface.' },
  { icon: Globe, title: 'Brand Impersonation', desc: 'Spoofed domains, phishing kits, and fake mobile apps designed to deceive your customers.' },
  { icon: Shield, title: 'Pre-Ransomware Signals', desc: 'Initial access broker listings selling network footholds before ransomware deployment.' },
];

export default function Page() {

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industry-Specific Dark Web Monitoring — DarkThreat',
    url: 'https://darkthreat.ai/industries',
    description: 'Dark web monitoring tailored to financial services, healthcare, legal, government, e-commerce, SaaS, education, and crypto industries.',
  };

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />
      

      

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            Sector-Specific Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-none mb-6">
            Dark Web Monitoring for <span className="glow-text">Every Industry</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Threat actors don't treat all industries equally — and neither do we. DarkThreat delivers targeted intelligence tuned to the compliance requirements, attack patterns, and data types specific to your sector.
          </p>
        </div>
      </section>

      {/* SECTION 2: Industry Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Industries We Protect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eight high-risk sectors with tailored monitoring playbooks, compliance overlays, and active threat actor tracking.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 p-6 flex flex-col"
              >
                <ind.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-montserrat font-bold text-foreground text-lg mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {ind.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                {ind.available ? (
                  <Link
                    href={ind.slug}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-xs text-muted-foreground italic">Coverage guide coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Common Threat Vectors */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Cross-Sector Risks</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Threat Vectors Targeting Every Sector</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Regardless of industry, every organization faces the same six dark web threat categories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatVectors.map((tv) => (
              <div key={tv.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <tv.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{tv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Platform Advantage */}
      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6">Why DarkThreat</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">Agentless External Monitoring. Zero Disruption.</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlike endpoint agents or internal SIEM rules, DarkThreat monitors exclusively from the outside — crawling millions of dark web sources, infostealer channels, and leak sites without touching your internal network.
            </p>
            <ul className="space-y-4">
              {['No software to install or maintain', 'Results within minutes of onboarding', 'Sector-tuned alert taxonomy', 'Compliance report exports (PCI, HIPAA, SOC 2)', 'API integration with your SIEM or SOAR'].map(item => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Avg. breach detection lead time', value: '12 days', sub: 'Before incident escalation' },
              { label: 'Dark web sources ingested', value: '2M+', sub: 'Live & continuously updated' },
              { label: 'Alert accuracy rate', value: '99.9%', sub: 'Validated by analyst triage' },
              { label: 'Industries covered', value: '8+', sub: 'With sector-specific logic' },
            ].map(stat => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-3xl font-montserrat font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Impact Statistics */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">The Cost of Not Monitoring</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Industry-average breach costs that dark web monitoring helps organizations avoid.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { sector: 'Financial Services', cost: '$5.9M', note: 'Avg. breach cost (IBM 2024)' },
              { sector: 'Healthcare', cost: '$10.9M', note: 'Highest of any industry' },
              { sector: 'Technology', cost: '$4.9M', note: 'SaaS & cloud-first firms' },
              { sector: 'Retail & E-Commerce', cost: '$3.5M', note: 'Card fraud & credential theft' },
            ].map(s => (
              <div key={s.sector} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-3xl font-montserrat font-bold text-primary mb-1">{s.cost}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{s.sector}</div>
                <div className="text-xs text-muted-foreground">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Compliance Standards */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Alignment</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Compliant Across Every Major Framework</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">DarkThreat's intelligence outputs are structured to satisfy the external threat monitoring requirements of leading frameworks.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            {['ISO 27001', 'NIST CSF', 'HIPAA Security Rule', 'PCI-DSS v4', 'SOC 2 Type II', 'GDPR', 'GLBA', 'FISMA', 'HITECH', 'SWIFT CSP', 'CCPA', 'FedRAMP'].map(f => (
              <span key={f} className="px-4 py-2 rounded-xl bg-card border border-border text-foreground hover:border-primary/40 transition-colors">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <FinalCTA />

      
      
    </div>
  
  );
}
