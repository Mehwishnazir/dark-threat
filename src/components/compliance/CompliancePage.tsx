import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Info } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { pageUrl } from "@/lib/metadata";
import type { CompliancePageData } from "@/lib/seo/compliance";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/utils/seoSchemas";

const COMPLIANCE_HUB = { label: "Compliance", href: "/compliance-framework-alignment" };

export default function CompliancePage({ data }: { data: CompliancePageData }) {
  const url = pageUrl(data.path);
  const HeroIcon = data.hero.icon;

  const jsonLd = [
    serviceSchema(`DarkThreat Dark Web Monitoring for ${data.name}`, data.metaDescription, url),
    breadcrumbSchema([
      { name: "Home", url: pageUrl("/") },
      { name: COMPLIANCE_HUB.label, url: pageUrl(COMPLIANCE_HUB.href) },
      { name: data.name },
    ]),
    faqPageSchema(data.faqs),
  ];

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={jsonLd} />

      <section className="relative min-h-[56vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 flex justify-center">
            <Breadcrumb items={[{ label: "Home", href: "/" }, COMPLIANCE_HUB, { label: data.name }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <HeroIcon className="w-4 h-4 mr-2 shrink-0" aria-hidden /> {data.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            {data.hero.titleLead} <span className="glow-text">{data.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">{data.hero.intro}</p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="cta-cyan inline-flex items-center gap-2">
              {data.hero.ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">{data.overview.heading}</h2>
          <div className="space-y-5">
            {data.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">{data.threats.heading}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{data.threats.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.threats.items.map((t) => (
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

      <section className="py-24 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">{data.capabilities.heading}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{data.capabilities.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.capabilities.items.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-background p-6">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Control Mapping</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">{data.controls.heading}</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">{data.controls.intro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.controls.items.map((c) => (
              <div key={c.ref} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-sm font-montserrat font-bold text-primary mb-1">{c.ref}</div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.deepDive && (
        <section className="py-20 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">{data.deepDive.heading}</h2>
            <div className="space-y-5">
              {data.deepDive.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Process</span>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">{data.steps.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{data.steps.intro}</p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.steps.items.map((s, i) => (
              <li key={s.title} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center text-primary font-montserrat font-bold text-lg mx-auto mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Related pages</h2>
            <div className="space-y-4">
              {data.relatedIndustries.map((l) => (
                <Link key={l.href} href={l.href} className="group block rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <span className="flex items-center gap-2 font-montserrat font-semibold text-foreground group-hover:text-primary">
                    {l.label} <ArrowRight className="w-4 h-4" />
                  </span>
                  {l.desc && <span className="mt-1 block text-sm text-muted-foreground">{l.desc}</span>}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Further reading</h2>
            <ul className="space-y-3">
              {data.relatedPosts.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <BookOpen className="w-4 h-4 mt-1 shrink-0 text-primary" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground text-center mb-10">Frequently asked questions</h2>
          <div className="w-full space-y-3">
            {data.faqs.map((f) => (
              <details key={f.q} className="border border-border rounded-xl px-4">
                <summary className="text-left font-montserrat font-semibold py-3 cursor-pointer">{f.q}</summary>
                <p className="text-muted-foreground pb-4">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground leading-relaxed">
            <Info className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
            <span>{data.disclaimer}</span>
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
