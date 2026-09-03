import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PricingPlans from "@/components/PricingPlans";
import ComparisonTable from "@/components/ComparisonTable";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for DarkThreat's dark web monitoring plans. Standard, Enterprise, and MSSP white-label tiers with a 7-day free trial. No credit card required.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "DarkThreat Dark Web Monitoring",
            description:
              "AI-powered dark web monitoring platform with real-time credential leak detection, hacker chatter alerts, and automated breach reports.",
            brand: { "@type": "Brand", name: "DarkThreat" },
            offers: [
              { "@type": "Offer", name: "Standard Plan", price: "288", priceCurrency: "USD", url: "https://darkthreat.ai/pricing" },
              { "@type": "Offer", name: "Enterprise Plan", price: "490", priceCurrency: "USD", url: "https://darkthreat.ai/pricing" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is there a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes. DarkThreat offers a 7-day free trial with full platform access. No credit card required to start." } },
              { "@type": "Question", name: "Can I cancel anytime?", acceptedAnswer: { "@type": "Answer", text: "Yes. Monthly plans can be cancelled anytime with no cancellation fees. Annual plans are non-refundable after the first 30 days." } },
              { "@type": "Question", name: "What is included in the Standard plan?", acceptedAnswer: { "@type": "Answer", text: "The Standard plan includes basic breach and credential monitoring for 1 domain, 1 user account, email notifications, and web UI access." } },
              { "@type": "Question", name: "Does DarkThreat offer annual discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. Annual billing saves up to 42% compared to monthly pricing. The Enterprise annual plan is $3,400/year vs $5,880 billed monthly." } },
              { "@type": "Question", name: "Is there a white-label MSSP option?", acceptedAnswer: { "@type": "Answer", text: "Yes. The MSSP plan includes a white-label portal, multi-tenant API, bulk onboarding, custom branding, and volume pricing. Contact us for a quote." } },
            ],
          },
        ]}
      />
      <section className="pt-8 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <div className="text-center mb-16 mt-8">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Dark Web Monitoring <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your security requirements</p>
          </div>

          <PricingPlans />

          <div className="text-center mt-12">
            <Link href="/contact" className="hero-button px-8 py-3 inline-flex">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Pricing <span className="text-primary">Platform</span>
            </h2>
            <p className="text-lg text-muted-foreground">Flexible pricing tailored to your organization&apos;s needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="threat-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground">
                Plans that grow with your business needs and security requirements
              </p>
            </div>
            <div className="threat-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">No hidden fees or surprise charges. What you see is what you pay</p>
            </div>
            <div className="threat-card text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-muted-foreground">Custom solutions for large organizations and MSSP partners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Why Choose DarkThreat?</h2>
            <p className="text-lg text-muted-foreground">See how we compare to traditional monitoring solutions</p>
          </div>
          <ComparisonTable />
        </div>
      </section>
    </div>
  );
}
