import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { pageSeo, truncateMetaDescription, truncateMetaTitle } from "@/lib/metadata";
import { COMPARE_PAGES } from "@/lib/seo/comparePages";

export const metadata: Metadata = {
  title: truncateMetaTitle("Compare Dark Web Monitoring Tools"),
  description: truncateMetaDescription(
    "Compare DarkThreat with DarkOwl, Recorded Future, ZeroFox, Flare, SOCRadar, and Cybersixgill on coverage, pricing, and time-to-value."
  ),
  ...pageSeo("/compare"),
};

const intro = `Choosing a dark web monitoring platform is less about the longest feature list and more about whether your team can act on verified exposures before credentials are abused. Strong evaluations weigh source coverage (forums, Telegram, paste sites, and especially infostealer logs), alert quality and enrichment, time-to-first finding, and whether pricing and onboarding fit a mid-market security team—not only Fortune 500 procurement cycles.

Look for transparent public pricing, a genuine self-serve or short trial path, and integrations that land alerts in the tools your analysts already use. Enterprise threat intelligence suites can be excellent for large SOCs with six-figure budgets, but they often bury dark web and credential monitoring inside opaque quotes and long sales processes. Specialist platforms should still prove depth on credential markets and ransomware leak sites without drowning a small team in noise.

Use the comparisons below to see how DarkThreat stacks up against commonly evaluated alternatives on coverage focus, pricing model, and day-one usability. Each page is a side-by-side view—not a generic brochure—so you can decide which tradeoffs matter for your stack.`;

export default function CompareHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Compare Dark Web Monitoring Tools",
          description:
            "Side-by-side comparisons of DarkThreat versus leading dark web monitoring and threat intelligence vendors.",
          url: "https://darkthreat.ai/compare",
          numberOfItems: COMPARE_PAGES.length,
          publisher: {
            "@type": "Organization",
            name: "DarkThreat",
            logo: { "@type": "ImageObject", url: "https://darkthreat.ai/logo.png" },
          },
        }}
      />

      <section className="relative pt-12 pb-16 px-6 hero-bg-layered overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Vendor comparisons
          </p>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Compare DarkThreat with leading{" "}
            <span className="glow-text">dark web monitoring</span> tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Side-by-side pages covering coverage, pricing transparency, and time-to-value versus
            DarkOwl, Recorded Future, ZeroFox, Flare, SOCRadar, and Cybersixgill.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-6">
            How to evaluate dark web monitoring tools
          </h2>
          {intro.split("\n\n").map((para) => (
            <p key={para.slice(0, 32)} className="text-muted-foreground leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground text-center mb-10">
            DarkThreat comparison guides
          </h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {COMPARE_PAGES.map((page) => (
              <li key={page.slug}>
                <Link
                  href={page.href}
                  className="threat-card block h-full hover:border-primary/40 transition-colors group"
                >
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{page.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read comparison <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
