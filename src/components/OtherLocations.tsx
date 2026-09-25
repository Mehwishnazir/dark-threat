import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { otherLocationPages } from "@/lib/seo/locationPages";

export default function OtherLocations({ currentHref }: { currentHref: string }) {
  const others = otherLocationPages(currentHref);

  return (
    <section className="py-16 px-6 bg-card/30 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground">
              Other locations
            </h2>
            <p className="mt-2 text-muted-foreground text-sm max-w-2xl">
              Explore DarkThreat coverage across additional US cities and states.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            All locations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="flex items-start gap-3 h-full rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" aria-hidden />
                <span>
                  <span className="font-montserrat font-semibold text-foreground block group-hover:text-primary transition-colors">
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
    </section>
  );
}
