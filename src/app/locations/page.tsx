import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import { pageSeo, truncateMetaDescription, truncateMetaTitle } from "@/lib/metadata";
import { LOCATION_PAGES, LOCATION_REGIONS } from "@/lib/seo/locationPages";

export const metadata: Metadata = {
  title: truncateMetaTitle("DarkThreat Locations — US Cities & States"),
  description: truncateMetaDescription(
    "Find DarkThreat dark web monitoring and threat intelligence pages for New York, Chicago, California, Texas, Boston, Austin, and more US markets."
  ),
  ...pageSeo("/locations"),
};

const intro = `Attackers do not treat every metro the same. Financial hubs, government corridors, and tech corridors attract different underground chatter, credential markets, and ransomware affiliate interest. Local context—regulatory pressure, industry mix, and recent regional incidents—helps security teams prioritize monitoring that matches how threats actually show up against their workforce and vendors.

DarkThreat publishes focused location pages that pair product capabilities with regional threat signals for major US cities and states. Whether you need dark web monitoring in New York City, credential monitoring in San Francisco, or attack surface coverage in Texas, these pages outline what to watch for and how continuous underground intelligence supports faster detection and response.

Browse by region below to open the city or state page that matches your footprint. Each page links back here and across other locations so you can navigate the full coverage map without relying on search alone.`;

export default function LocationsHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "DarkThreat Locations — US Cities & States",
          description:
            "Regional DarkThreat pages for dark web monitoring, credential monitoring, and related services across US cities and states.",
          url: "https://darkthreat.ai/locations",
          numberOfItems: LOCATION_PAGES.length,
          publisher: {
            "@type": "Organization",
            name: "DarkThreat",
            logo: { "@type": "ImageObject", url: "https://darkthreat.ai/logo.png" },
          },
        }}
      />

      <section className="relative pt-12 pb-16 px-6 hero-bg-layered overflow-hidden">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
          </div>
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2 shrink-0" aria-hidden /> US cities &amp; states
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            DarkThreat coverage by <span className="glow-text">location</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Region-focused pages for dark web monitoring, credential intelligence, and related services
            across major US markets.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-6">
            Why location-specific monitoring matters
          </h2>
          {intro.split("\n\n").map((para) => (
            <p key={para.slice(0, 32)} className="text-muted-foreground leading-relaxed mb-5">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-card/30 border-y border-border">
        <div className="max-w-5xl mx-auto space-y-12">
          {LOCATION_REGIONS.map((region) => {
            const pages = LOCATION_PAGES.filter((p) => p.region === region);
            if (pages.length === 0) return null;
            return (
              <div key={region}>
                <h2 className="text-xl md:text-2xl font-montserrat font-bold text-foreground mb-5">
                  {region}
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {pages.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 h-full hover:border-primary/40 transition-colors group"
                      >
                        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                        <span>
                          <span className="font-montserrat font-bold text-foreground block group-hover:text-primary transition-colors">
                            {page.place}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground">{page.service}</span>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 transition-colors group/cta hover:underline group-hover:underline">
                            View page{" "}
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1 group-hover:translate-x-1" />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
