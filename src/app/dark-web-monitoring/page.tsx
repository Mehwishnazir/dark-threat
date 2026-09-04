import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { Search, AlertTriangle, Eye, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";
import AssessmentFormShell from "@/components/AssessmentFormShell";

import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Dark Web Monitoring Service & Cyber Threat Intelligence",
  description:
    "DarkThreat's AI-powered dark web monitoring service scans Tor networks, hacker forums, and stealer logs to detect credential leaks and corporate risk before exploit.",
  ...pageSeo("/dark-web-monitoring"),
};

const faqs = [
  {
    q: "How does dark web monitoring work?",
    a: "Dark web monitoring continuously searches Tor, encrypted chat channels, forums, marketplaces, and paste sites for leaked credentials, documents, and threat actor activity tied to your organization.",
  },
  {
    q: "What makes DarkThreat different?",
    a: "DarkThreat combines automated collection with AI classification and analyst validation so alerts are relevant, contextualized, and actionable for your security team.",
  },
  {
    q: "How fast are alerts delivered?",
    a: "Most alerts are delivered in minutes from detection, giving your team time to rotate credentials, isolate systems, and contain exposure before the threat spreads.",
  },
  {
    q: "What assets can I protect?",
    a: "DarkThreat monitors corporate emails, domains, IP ranges, SaaS accounts, APIs, source code, and high-value user credentials across the exposed dark web.",
  },
  {
    q: "Can this integrate with my existing tools?",
    a: "Yes. DarkThreat supports email, webhook, SIEM, and ticketing integrations so alerts fit into your existing security workflows.",
  },
];

export default function DarkWebMonitoringPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Dark Web Monitoring",
            name: "DarkThreat Dark Web Monitoring Service",
            provider: { "@type": "Organization", name: "DarkThreat", url: "https://darkthreat.ai", logo: "https://darkthreat.ai/logo.png" },
            areaServed: "Global",
            description:
              "DarkThreat's AI-powered dark web monitoring service scans Tor networks, hacker forums, and stealer logs to detect credential leaks and corporate risk before exploit.",
            url: "https://darkthreat.ai/dark-web-monitoring",
          },
          faqPageSchema(faqs),
        ]}
      />
      <section className="relative pt-12 pb-20 px-6 overflow-hidden hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr] items-start">
          <div>
            <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              24/7 AI-Powered Visibility
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Dark Web Monitoring — <span className="glow-text">Detect hidden exposure</span> before it becomes an
              incident
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              DarkThreat scans the hidden internet, dark marketplaces, hacker forums, paste sites, and stealer log feeds
              for leaked credentials, exposed files, and threat actor chatter tied to your organization.
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
            { label: "2M+ sources", detail: "Covered daily" },
            { label: "24/7 monitoring", detail: "Hidden channels" },
            { label: "Rapid alerts", detail: "Minutes to detect" },
            { label: "Low false positives", detail: "AI filtered" },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is dark web monitoring?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Dark web monitoring is a defensive service that constantly scans the hidden parts of the internet for
              exposed data related to your brand, people, and assets. This includes Tor sites, private forums, paste
              sites, dark marketplaces, and stealer log feeds.
            </p>
            <p className="text-lg text-muted-foreground">
              Instead of waiting for a breach to surface in traditional security tools, DarkThreat alerts you the moment
              compromised credentials, leaked documents, or attack planning chatter appears on the dark web.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { title: "Credential dumps", detail: "Compromised logins, passwords, and secrets." },
              { title: "Hacker forums", detail: "Sale listings, discussions, and threat actor chatter." },
              { title: "Stealer logs", detail: "Malware capture feeds with active sessions and tokens." },
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
              Core capabilities of Dark Web Monitoring
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete monitoring service that captures the most relevant threats and delivers them with context your
              team can act on.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Continuous collection</h3>
              <p className="text-muted-foreground mb-4">
                Automated, 24/7 crawling across hidden markets, forums, paste sites, and malware logs.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Real-time dark web coverage</li>
                <li>Automated discovery of new leak sources</li>
                <li>Continuous source updates</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Asset correlation</h3>
              <p className="text-muted-foreground mb-4">
                Match findings to your domains, email patterns, IP ranges, and critical applications for relevant alerts
                only.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Executive & VIP visibility</li>
                <li>Custom asset matching</li>
                <li>Data prioritization by risk</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Actionable alerts</h3>
              <p className="text-muted-foreground mb-4">
                Verified threat notifications delivered to your team with source, impact, and remediation guidance.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>Email, webhook, and SIEM delivery</li>
                <li>Context-rich incident details</li>
                <li>Built-in response recommendations</li>
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
              Designed for modern security operations that need speed, accuracy, and scalable dark web coverage.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Low false positives", desc: "AI filters and analyst validation keep noise down and signal high." },
              { title: "Rapid deployment", desc: "Work starts quickly without heavy infrastructure or long onboarding." },
              { title: "Broad coverage", desc: "Includes Tor, forums, paste sites, marketplaces, and malware feeds." },
              { title: "Actionable insights", desc: "Findings arrive with impact, source, and recommended steps." },
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
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              How DarkThreat compares to manual monitoring
            </h2>
            <p className="text-lg text-muted-foreground">
              Manual research can&apos;t match scale, speed, and accuracy for the hidden internet. DarkThreat is built for
              those gaps.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-3xl border border-border bg-card">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Capability</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-primary">DarkThreat</th>
                  <th className="p-4 text-left text-sm uppercase tracking-[0.2em] text-muted-foreground">Manual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "24/7 automated scanning",
                  "Dark web marketplace coverage",
                  "Realtime alerts in minutes",
                  "AI risk scoring",
                  "Verified analyst validation",
                ].map((cap) => (
                  <tr key={cap} className="border-b border-border/50">
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
