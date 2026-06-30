import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import TrialModal from "@/components/TrialModal";
import { Button } from "@/components/ui/button";

export type ComparisonRow = {
  feature: string;
  darkthreat: string | boolean;
  competitor: string | boolean;
};

export type ComparisonPageProps = {
  competitorName: string;
  slug: string; // route segment after /compare/
  title: string;
  description: string;
  h1: string;
  intro: string;
  rows: ComparisonRow[];
  pricingNote: string;
  differentiators: { title: string; body: string }[];
};

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <Check className="w-5 h-5 text-primary mx-auto" aria-label="Yes" />;
  if (value === false)
    return (
      <X
        className="w-5 h-5 text-muted-foreground mx-auto opacity-60"
        aria-label="No"
      />
    );
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
}: ComparisonPageProps) {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const canonical = `https://darkthreat.ai/compare/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <AppHeader />

      <main className="pt-24">
        {/* Hero */}
        <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Comparison
          </p>
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground leading-tight mb-6">
            {h1}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setIsTrialModalOpen(true)}
              className="hero-button text-base px-8 py-6 inline-flex items-center gap-2 min-h-[44px]"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/pricing">
              <Button
                variant="outline"
                className="text-base px-8 py-6 min-h-[44px]"
              >
                See Pricing
              </Button>
            </Link>
          </div>
        </section>

        {/* Feature comparison table */}
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
                      <td className="px-4 py-4 text-sm text-foreground font-medium">
                        {r.feature}
                      </td>
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
          </div>
        </section>

        {/* Differentiators */}
        <section className="px-6 py-16 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-8">
              Why teams choose DarkThreat over {competitorName}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
              See DarkThreat for yourself
            </h2>
            <p className="text-muted-foreground mb-8">
              Start a 7-day free trial. No credit card required.
            </p>
            <Button
              onClick={() => setIsTrialModalOpen(true)}
              className="hero-button text-base px-8 py-6 inline-flex items-center gap-2 min-h-[44px]"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  );
}
