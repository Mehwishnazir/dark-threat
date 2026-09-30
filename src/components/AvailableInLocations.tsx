import Link from "next/link";
import { MapPin } from "lucide-react";
import { locationsForParent } from "@/lib/seo/locationPages";

export default function AvailableInLocations({ parentHref }: { parentHref: string }) {
  const locations = locationsForParent(parentHref);
  if (locations.length === 0) return null;

  return (
    <section className="py-14 px-6 border-t border-border bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-3">
          Available in
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-2xl mx-auto">
          Region-focused pages with local threat context for organizations in these markets.
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <li key={loc.href}>
              <Link
                href={loc.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden />
                {loc.place}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/locations" className="text-sm font-semibold text-primary hover:underline">
            Browse all locations →
          </Link>
        </p>
      </div>
    </section>
  );
}
