import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { otherComparePages } from "@/lib/seo/comparePages";

export default function OtherComparisons({ currentSlug }: { currentSlug: string }) {
  const others = otherComparePages(currentSlug);

  return (
    <section className="py-16 px-6 bg-card/30 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground">
              Other comparisons
            </h2>
            <p className="mt-2 text-muted-foreground text-sm max-w-2xl">
              See how DarkThreat compares across the dark web monitoring and threat intelligence market.
            </p>
          </div>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            All comparisons <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((page) => (
            <li key={page.slug}>
              <Link
                href={page.href}
                className="block h-full rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <span className="font-montserrat font-bold text-foreground">{page.name}</span>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{page.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
