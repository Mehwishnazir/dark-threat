import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPLIANCE_PAGES } from "@/lib/seo/compliance";

export default function ComplianceGuideLinks({ slugs }: { slugs: string[] }) {
  const pages = slugs
    .map((slug) => COMPLIANCE_PAGES.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  if (pages.length === 0) return null;

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
      <span className="text-muted-foreground">Related compliance guides:</span>
      {pages.map((p) => (
        <Link
          key={p.slug}
          href={p.path}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-semibold text-primary hover:border-primary hover:bg-primary/10 transition-colors"
        >
          {p.name} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
        </Link>
      ))}
    </div>
  );
}
