import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Search, AlertTriangle, Eye, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";
import AssessmentFormShell from "@/components/AssessmentFormShell";

import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Threat Intelligence Platform",
  description:
    "Enrich dark web exposure alerts with threat actor profiling, adversary infrastructure mapping, MITRE ATT&CK techniques, and active ransomware campaigns.",
  ...pageSeo("/threat-intelligence-platform"),
};

const faqs = [
  {
    q: "What does DarkThreat’s Threat Intelligence Platform do?",
    a: "It enriches exposure alerts with threat actor profiling, adversary infrastructure mapping, MITRE ATT&CK techniques, and active ransomware campaign context.",
  },
  {
    q: "How is this different from dark web monitoring alone?",
    a: "Monitoring finds exposures across underground sources; the threat intelligence layer adds who, how, and what technique — so teams can prioritize and respond with context.",
  },
  {
    q: "What sources feed the intelligence?",
    a: "DarkThreat indexes 2M+ live sources including onion sites, dark web forums, Telegram hacker channels, Discord, paste sites, and infostealer logs.",
  },
  {
    q: "How quickly do enriched alerts arrive?",
    a: "Most alerts are delivered in minutes from detection, with enrichment and severity context for your security team.",
  },
];

export default function ThreatIntelligencePlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Threat Intelligence Platform",
            name: "DarkThreat Threat Intelligence Platform",
            provider: { "@type": "Organization", name: "DarkThreat", url: "https://darkthreat.ai", logo: "https://darkthreat.ai/logo.png" },
            areaServed: "Global",
            description:
              "Enrich dark web exposure alerts with threat actor profiling, adversary infrastructure mapping, MITRE ATT&CK techniques, and active ransomware campaigns.",
            url: "https://darkthreat.ai/threat-intelligence-platform",
          },
          faqPageSchema(faqs),
        ]}
      />
      <section className="relative pt-12 pb-20 px-6 overflow-hidden hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr] items-start">
          <div>
            <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Real-time threat enrichment
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Threat Intelligence Platform —{" "}
              <span className="glow-text">Context that turns exposures into actionable defense</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              DarkThreat enriches exposure alerts with threat actor profiling, adversary infrastructure mapping, MITRE
              ATT&CK techniques, and active ransomware campaigns — so your team sees who is targeting you, how they
              operate, and what to do next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="cta-cyan inline-flex items-center justify-center gap-2 px-8 py-4">
                Book Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="cta-outline inline-flex items-center gap-2 justify-center px-8 py-4">
                View Pricing
              </Link>
            </div>
          </div>
          <AssessmentFormShell />
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "2M+ sources", detail: "Indexed continuously" },
            { label: "Threat actor context", detail: "Profiling with every alert" },
            { label: "MITRE ATT&CK", detail: "TTP mapping on validated alerts" },
            { label: "Minutes to alert", detail: "From detection to delivery" },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is a threat intelligence platform?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              A threat intelligence platform turns raw underground signals into organization-specific insight. DarkThreat
              does not stop at finding leaked credentials or chatter — it maps validated findings to known threat actor
              groups, adversary TTPs, active ransomware campaigns, and MITRE ATT&CK techniques so security teams can
              prioritize real risk.
            </p>
            <p className="text-lg text-muted-foreground">
              Instead of drowning in unenriched feeds, your team receives contextual alerts that explain who is involved,
              how they operate, and which techniques apply — so response is faster and more precise.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { title: "Threat actor profiling", detail: "Map exposures to known and emerging adversary personas." },
              { title: "Adversary infrastructure", detail: "Context on campaigns and infrastructure tied to alerts." },
              { title: "ATT&CK enrichment", detail: "Techniques and TTPs linked to validated incidents." },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Core capabilities of the Threat Intelligence Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Enrichment and context that turn underground exposures into intelligence your SOC can act on.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Threat enrichment layer</h3>
              <p className="text-muted-foreground mb-4">
                Maps validated alerts to threat actor groups, TTPs, ransomware programs, CVEs, and MITRE ATT&CK
                techniques.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Actor + campaign context</li>
                <li>ATT&CK technique mapping</li>
                <li>Severity with remediation guidance</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Multi-source intelligence collection</h3>
              <p className="text-muted-foreground mb-4">
                Indexes 2M+ live sources across onion sites, forums, Telegram/Discord, paste sites, and infostealer
                channels.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Near real-time ingestion</li>
                <li>Forum &amp; channel monitoring</li>
                <li>Stealer and marketplace coverage</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Actionable, SOC-ready alerts</h3>
              <p className="text-muted-foreground mb-4">
                High-fidelity alerts with profiling, severity scores, and prioritized remediation playbooks.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Reduced alert noise via AI filtering</li>
                <li>Organization-specific correlation</li>
                <li>Email, webhook, and SIEM delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why teams choose DarkThreat</h2>
            <p className="text-lg text-muted-foreground">
              Designed for security operations that need enrichment, actor context, and dark web scale — not raw dumps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Enrichment, not raw dumps", desc: "Confirmed, asset-correlated intelligence with severity and next steps." },
              { title: "Actor & campaign context", desc: "Know whether an exposure is passive collection or active weaponization." },
              { title: "Built for dark web scale", desc: "Engine designed for deep web scanning and dark market intelligence." },
              { title: "SOC-validated signal", desc: "Human SOC validation plus AI classifiers to keep signal high." },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How DarkThreat compares to raw threat feeds</h2>
            <p className="text-lg text-muted-foreground">
              Unenriched feeds lack actor context and ATT&CK mapping. DarkThreat delivers organization-specific
              intelligence your team can act on.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Raw / unenriched feeds
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Threat actor profiling", true],
                  ["MITRE ATT&CK mapping", true],
                  ["Active ransomware campaign context", true],
                  ["Asset-correlated, org-specific alerts", true],
                  ["Analyst / SOC validation layer", true],
                ].map(([cap]) => (
                  <tr key={cap as string} className="border-b border-border/50">
                    <td className="p-4 text-sm text-foreground">{cap}</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                    </td>
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
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="border border-border rounded-xl bg-card/50 px-4 py-2">
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
