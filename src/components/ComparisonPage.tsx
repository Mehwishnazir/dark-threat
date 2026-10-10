import Link from "next/link";
import { Check, X, ArrowRight, ClipboardCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import OtherComparisons from "@/components/OtherComparisons";
import { pageUrl as absoluteUrl } from "@/lib/metadata";
import {
  EVALUATION_CHECKLIST,
  SWITCHING_NOTES,
  type ComparisonFaq,
} from "@/lib/seo/compareContent";
import { breadcrumbSchema, faqPageSchema } from "@/utils/seoSchemas";

export type ComparisonRow = {
  feature: string;
  darkthreat: string | boolean;
  competitor: string | boolean;
};

export type ComparisonSource = { label: string; url: string };
export type ComparisonLink = { label: string; href: string };

export type ComparisonPageProps = {
  competitorName: string;
  slug?: string;
  title?: string;
  description?: string;
  h1: string;
  intro: string;
  rows: ComparisonRow[];
  pricingNote: string;
  differentiators: { title: string; body: string }[];
  differentiatorsHeading?: string;
  showBreadcrumb?: boolean;
  showEvaluationChecklist?: boolean;
  showSwitchingNotes?: boolean;
  faqs?: ComparisonFaq[];
  /** ISO date (YYYY-MM-DD). */
  lastReviewed?: string;
  verificationNote?: string;
  competitorOverview?: { title: string; body: string }[];
  betterFit?: string[];
  sources?: ComparisonSource[];
  relatedLinks?: ComparisonLink[];
};

function formatReviewDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" aria-label="Yes" />;
  if (value === false) {
    return <X className="w-5 h-5 text-muted-foreground mx-auto opacity-60" aria-label="No" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function ComparisonPage({
  competitorName,
  slug,
  title,
  description,
  h1,
  intro,
  rows,
  pricingNote,
  differentiators,
  differentiatorsHeading,
  showBreadcrumb = false,
  showEvaluationChecklist = false,
  showSwitchingNotes = false,
  faqs,
  lastReviewed,
  verificationNote,
  competitorOverview,
  betterFit,
  sources,
  relatedLinks,
}: ComparisonPageProps) {
  const pageTitle = title ?? `DarkThreat vs ${competitorName}`;
  const resolvedSlug =
    slug ?? `darkthreat-vs-${competitorName.toLowerCase().replace(/\s+/g, "-")}`;
  const pageUrl = `https://darkthreat.ai/compare/${resolvedSlug}`;
  const crumbLabel = `DarkThreat vs ${competitorName}`;

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle,
      description: description ?? intro,
      url: pageUrl,
      ...(lastReviewed ? { lastReviewed } : {}),
      publisher: {
        "@type": "Organization",
        name: "DarkThreat",
        logo: {
          "@type": "ImageObject",
          url: "https://darkthreat.ai/logo.png",
        },
      },
    },
  ];
  if (showBreadcrumb) {
    jsonLd.push(
      breadcrumbSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "Compare", url: absoluteUrl("/compare") },
        { name: crumbLabel },
      ]),
    );
  }
  if (faqs?.length) jsonLd.push(faqPageSchema(faqs));

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={jsonLd} />
      <main className="pt-4">
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
          {showBreadcrumb && (
            <div className="mb-4 flex justify-center">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Compare", href: "/compare" },
                  { label: crumbLabel },
                ]}
              />
            </div>
          )}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Comparison</p>
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground leading-tight mb-6">{h1}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing" className="hero-button text-base px-8 py-6 min-h-[44px] inline-flex items-center justify-center">
              See Pricing
            </Link>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-6">
              Feature-by-feature comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full text-left">
                <thead className="bg-card/60 border-b border-border">
                  <tr>
                    <th className="px-4 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-4 py-4 text-sm font-semibold text-primary uppercase tracking-wider text-center">
                      DarkThreat
                    </th>
                    <th className="px-4 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
                      {competitorName}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((r) => (
                    <tr key={r.feature}>
                      <td className="px-4 py-4 text-sm text-foreground font-medium">{r.feature}</td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={r.darkthreat} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={r.competitor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{pricingNote}</p>
            {lastReviewed && (
              <p className="mt-2 text-sm text-muted-foreground">
                Page last reviewed: <time dateTime={lastReviewed}>{formatReviewDate(lastReviewed)}</time>. Vendor
                features and pricing change over time; confirm current details with each vendor.
              </p>
            )}
            {verificationNote && <p className="mt-2 text-sm text-muted-foreground">{verificationNote}</p>}
          </div>
        </section>

        {competitorOverview && competitorOverview.length > 0 && (
          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-8">
                {competitorName} at a glance
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {competitorOverview.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-6 py-16 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-8">
              {differentiatorsHeading ?? `Why teams choose DarkThreat over ${competitorName}`}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {differentiators.map((d) => (
                <div key={d.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {betterFit && betterFit.length > 0 && (
          <section className="px-6 py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                Where {competitorName} is the better fit
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                Every tool suits some teams better than others. Based on what {competitorName} publishes about its own
                products, it may be the stronger choice for:
              </p>
              <ul className="space-y-3">
                {betterFit.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {showEvaluationChecklist && (
          <section className="px-6 py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                Evaluation checklist: questions to ask any dark web monitoring vendor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                Whichever tools are on your shortlist, put the same questions to every vendor and ask for answers in
                writing. Comparing like-for-like answers is the fastest way to see real differences.
              </p>
              <ol className="grid gap-4 md:grid-cols-2">
                {EVALUATION_CHECKLIST.map((item, i) => (
                  <li key={item.question} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="flex items-start gap-3 text-base font-montserrat font-bold text-foreground mb-2">
                      <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                      {item.question}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.why}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
                <ClipboardCheck className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>
                  DarkThreat&apos;s answers on trial and pricing: a 7-day free trial with no credit card required, and
                  plans from $288/month. See{" "}
                  <Link href="/pricing" className="text-primary hover:underline">
                    pricing
                  </Link>{" "}
                  for current plans.
                </span>
              </p>
            </div>
          </section>
        )}

        {showSwitchingNotes && (
          <section className="px-6 py-16 bg-card/30">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                Switching notes: running {competitorName} and DarkThreat side by side
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                If you already use {competitorName}, you don&apos;t need to switch blind. A structured side-by-side
                evaluation lets you compare both tools on your own assets before changing anything in production.
              </p>
              <ol className="space-y-4">
                {SWITCHING_NOTES.map((note, i) => (
                  <li key={note.title} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">
                      <span className="text-primary mr-2">Step {i + 1}.</span>
                      {note.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{note.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <section className="px-6 py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground text-center mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="border border-border rounded-xl px-4">
                    <summary className="text-left font-montserrat font-semibold py-3 cursor-pointer">{f.q}</summary>
                    <p className="text-muted-foreground pb-4">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {((sources && sources.length > 0) || (relatedLinks && relatedLinks.length > 0)) && (
          <section className="px-6 py-16">
            <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
              {sources && sources.length > 0 && (
                <div>
                  <h2 className="text-xl font-montserrat font-bold text-foreground mb-4">Sources</h2>
                  <ul className="space-y-2 text-sm">
                    {sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-primary hover:underline break-words"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {relatedLinks && relatedLinks.length > 0 && (
                <div>
                  <h2 className="text-xl font-montserrat font-bold text-foreground mb-4">Related reading</h2>
                  <ul className="space-y-2 text-sm">
                    {relatedLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-primary hover:underline">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <OtherComparisons currentSlug={resolvedSlug} />

        <section className="px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
              See DarkThreat for yourself
            </h2>
            <p className="text-muted-foreground mb-8">Schedule a demo to walk through the platform with our team.</p>
            <Link
              href="/contact"
              className="hero-button text-base px-8 py-6 inline-flex items-center gap-2 min-h-[44px] justify-center"
            >
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
