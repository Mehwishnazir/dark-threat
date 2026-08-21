import type { Metadata } from "next";
import Link from "next/link";
import { Bitcoin, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, Key, Eye, Wallet, } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Dark Web Monitoring for Crypto & Fintech",
  description: "Monitor wallet address leaks, exchange credential theft, and DeFi protocol attack signals. FinCEN, MiCA, and ISO 27001 aligned dark web monitoring for crypto and fintech.",
  alternates: { canonical: "/industries/crypto-fintech" },
};

const threats = [
  { icon: Wallet, title: 'Wallet Address & Seed Leaks', desc: 'Seed phrases, private keys, and wallet dumps traded on underground markets and Telegram channels.' },
  { icon: Key, title: 'Exchange Credential Theft', desc: 'Exchange logins, session cookies, and admin access sold via stealer logs and dark web forums.' },
  { icon: Lock, title: 'API Key & Bot Secret Exposure', desc: 'Exchange API keys and signing secrets appearing in stealer logs, public repos, and credential dumps.' },
  { icon: AlertTriangle, title: 'DeFi Protocol Attack Signals', desc: 'Threat actor chatter and credential-driven attacks targeting DeFi operations wallets and related infrastructure.' },
  { icon: Database, title: 'KYC / Customer Data Dumps', desc: 'Customer KYC packs and PII from exchange breaches listed on leak sites and underground markets.' },
  { icon: Eye, title: 'Brand / Phishing Impersonation', desc: 'Fake apps, phishing kits, and spoofed crypto brands designed to deceive users and harvest credentials.' },
];

const schema = serviceSchema(
  'Dark Web Monitoring for Crypto & Fintech',
  'Monitor wallet address leaks, exchange credential theft, and DeFi protocol attack signals. FinCEN, MiCA, and ISO 27001 aligned monitoring for exchanges, wallets, and fintech platforms.',
  'https://darkthreat.ai/industries/crypto-fintech'
);
const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Industries', url: 'https://darkthreat.ai/industries' },
  { name: 'Crypto & Fintech' }
]);

const capabilities = [
  { label: 'Wallet & Key Exposure Monitoring', desc: 'Watch for wallet addresses, seed phrases, and private-key material tied to your assets across underground sources.' },
  { label: 'Exchange Credential Surveillance', desc: 'Monitor stealer logs and markets for exchange and admin credentials and active sessions.' },
  { label: 'API Key & Secret Detection', desc: 'Parse underground sources for API key patterns and trading or infrastructure secrets.' },
  { label: 'DeFi & Protocol Signal Tracking', desc: 'Track chatter and listings that signal attacks on DeFi operations and related infrastructure.' },
  { label: 'Infostealer Log Correlation', desc: 'Ingest stealer logs for crypto domains, wallet identifiers, and session tokens tied to your organization.' },
  { label: 'Alerting Into Your Stack', desc: 'Deliver severity-scored alerts via email, webhook, or SIEM within minutes of discovery.' },
];

const steps = [
  { num: '01', title: 'Asset Onboarding', desc: 'Register domains, brand keywords, and crypto-relevant identifiers — no software installation.' },
  { num: '02', title: 'Continuous Crawling', desc: 'Engines scan markets, forums, stealer channels, paste sites, and Telegram 24/7.' },
  { num: '03', title: 'Prioritised Alert', desc: 'Structured alerts with source, severity, affected asset type, and recommended action.' },
  { num: '04', title: 'Contain & Evidence', desc: 'Rotate keys and credentials, document exposure for compliance teams, and keep monitoring for reappearance.' },
];

export default function Page() {

      
  

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, organizationSchema]} />
      

      

      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Crypto & Fintech' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Bitcoin className="w-4 h-4 mr-2" /> Crypto &amp; Fintech Threat Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Dark Web Monitoring for <span className="glow-text">Crypto &amp; Fintech</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Monitor wallet address leaks, exchange credential theft, and DeFi protocol attack signals — so exchanges, custodial wallets, and fintech platforms get early warning before credentials and keys are weaponized.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button">
              Request Crypto Exposure Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/pricing" className="border-primary/30 hover:border-primary">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Crypto &amp; Fintech Dark Web Threats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six active attack vectors targeting exchanges, DeFi protocols, custodial wallets, and fintech platforms on dark web networks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cf-inquiry-form" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Crypto &amp; Fintech Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell us about your exchange, wallet, or fintech platform and we&apos;ll run an initial dark web exposure check across your domains, key personnel, and crypto-relevant asset patterns — at no cost.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Wallet address & seed-phrase exposure watch',
                'Exchange / admin credential monitoring',
                'API key & trading-secret pattern detection',
                'DeFi / protocol attack-signal tracking',
                'Compliance-oriented exposure reporting (FinCEN / MiCA / ISO-aligned)',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Crypto &amp; Fintech Inquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cf-name">Full Name *</Label>
                  <Input id="cf-name" required placeholder="Jane Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="cf-email">Business Email *</Label>
                  <Input id="cf-email" type="email" required placeholder="jane@exchange.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="cf-company">Platform / Company Name</Label>
                <Input id="cf-company" placeholder="Your exchange, wallet, or fintech" className="mt-1 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="cf-message">Primary Concern</Label>
                <Textarea id="cf-message" rows={4} placeholder="E.g. wallet key exposure, exchange credential leaks, API key dumps..." className="mt-1 bg-background/50" />
              </div>
              <Button type="button" className="hero-button w-full">
                Request Free Exposure Scan
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Built for Crypto &amp; Fintech Security Teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six monitoring capabilities engineered for exchanges, DeFi protocols, wallets, and fintech platforms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regulatory Coverage</span>
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">Crypto &amp; Fintech Compliance Framework Alignment</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">DarkThreat monitoring outputs support evidence collection for frameworks that matter to crypto and fintech operators.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {[
              { framework: 'FinCEN', req: 'Supports VASP / AML-CFT-oriented external threat monitoring evidence' },
              { framework: 'MiCA', req: 'Supports EU crypto-asset service risk monitoring and exposure awareness' },
              { framework: 'ISO 27001', req: 'Threat intelligence / continuous monitoring as an operational control' },
              { framework: 'GDPR', req: 'Customer PII / KYC exposure detection supporting breach-awareness obligations' },
              { framework: 'CCPA', req: 'Consumer personal-information exposure visibility for regulated disclosures' },
              { framework: 'FATF VASP guidance', req: 'Real-time dark web / threat intelligence as part of robust AML/CFT posture' },
            ].map(f => (
              <div key={f.framework} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{f.framework}</div>
                <div className="text-xs text-muted-foreground">{f.req}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">How It Works</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">From Dark Web Signal to Contained Threat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">{s.num}</div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

      
    </div>
  
  );
}
