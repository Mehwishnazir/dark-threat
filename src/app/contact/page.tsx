import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Contact DarkThreat | Connect with Threat Intelligence & Monitoring Experts",
  description:
    "Contact the DarkThreat team to discuss dark web monitoring, credential leak detection, or to start your 7-day free trial. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "How long does a standard dark web exposure scan take?",
    a: "Once onboarding is completed externally, our automated systems begin indexing public, deep, and dark web repositories immediately. Initial baseline reports are generated and sent to your dashboard within 10 minutes.",
  },
  {
    q: "How does DarkThreat secure the credentials registered for monitoring?",
    a: "All threat intelligence data and telemetry collected are encrypted at rest and in transit. We align with ISO 27001 and NIST frameworks, ensuring zero exposure of your active internal environments.",
  },
  {
    q: "Can we request a custom security assessment for third-party vendors?",
    a: "Yes. Our platform supports third-party domain and supply-chain exposure monitoring. You can configure vendor alerts via the platform solutions dashboard or reach out to our MSSP division.",
  },
  {
    q: "Do you offer white-labeled reporting for security partners?",
    a: "Yes. Our MSSP tier features complete API access, white-label dashboards, custom notification routing, and co-branded PDF report generation.",
  },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact DarkThreat | Connect with Threat Intelligence & Monitoring Experts",
    description:
      "Contact the DarkThreat team to discuss dark web monitoring, credential leak detection, or to start your 7-day free trial. We respond within 24 hours.",
    url: "https://darkthreat.ai/contact",
    mainEntity: {
      "@type": "Organization",
      name: "DarkThreat",
      alternateName: ["DarkThreat AI", "DarkThreat Security", "DarkThreat.ai"],
      url: "https://darkthreat.ai",
      logo: "https://darkthreat.ai/logo.png",
      sameAs: [
        "https://twitter.com/DarkThreatAI",
        "https://linkedin.com/company/darkthreat",
        "https://github.com/darkthreat",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1 (416) 576-8744",
          contactType: "customer support",
          email: "info@darkthreat.ai",
          availableLanguage: "English",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background relative">
      <JsonLd data={[contactPageSchema, faqPageSchema(faqs)]} />
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
          </div>

          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            GLOBAL THREAT OPERATIONS
          </div>

          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            We Are Online 24/7/365 to Protect Your <span className="glow-text">Digital Footprint</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed mb-4">
            Connect with DarkThreat&apos;s cybersecurity researchers, threat hunting analysts, and enterprise
            integration specialists. Let us show you what threat actors can see about your external attack surface.
          </p>

          <p className="mx-auto max-w-3xl text-base text-muted-foreground leading-relaxed">
            Whether you are investigating a suspicious credential leak alert, need to set up multi-tenant white-label
            reporting for an MSSP, or require emergency incident dispatch support from our active Security Operations
            Center (SOC), our team is standing by. Choose a direct contact channel or fill out our secure inquiry
            routing form. Our average response time for standard inquiries is under 2 hours, and emergency threat
            escalations are triaged within 15 minutes.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ContactForm />

            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="rounded-lg border border-border/80 bg-card/30 backdrop-blur-md p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-1">General Operations</h3>
                    <p className="text-muted-foreground text-sm">For partnerships, career inquiries, or general support</p>
                    <p className="text-primary font-semibold mt-2 text-sm">info@darkthreat.ai</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-card/30 backdrop-blur-md p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-1">Enterprise Threat Advisory</h3>
                    <p className="text-muted-foreground text-sm">
                      Call us directly to set up custom domains or MSSP licensing
                    </p>
                    <a href="tel:+1(416)5768744" className="text-primary font-semibold mt-2 text-sm hover:underline">
                      +1 (416) 576-8744
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border/80 bg-card/30 backdrop-blur-md p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-foreground mb-1">Response Schedule</h3>
                    <p className="text-muted-foreground text-sm">
                      Enterprise Sales: Mon - Fri, 9am - 6pm EST
                      <br />
                      Threat Support: <span className="text-primary font-semibold font-bold">24/7/365 Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <AlertCircle className="w-32 h-32 text-amber-500" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-500 mb-6">
                <AlertCircle className="w-4 h-4" /> Active Breach Response
              </div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                Emergency Incident Dispatch Line
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
                If your organization is currently experiencing an active cyber incident, ransomware extortion attempt, or
                critical data extortion event, contact our incident response team immediately.
                <span className="text-amber-500 font-semibold block mt-2">
                  Active customer triage SLA: under 15 minutes.
                </span>
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:+1(416)5768744"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-bold text-black transition-colors"
                >
                  Call Incident Dispatch: +1 (416) 576-8744
                </a>
                <span className="text-sm text-muted-foreground">
                  or email secure hotline:{" "}
                  <a href="mailto:info@darkthreat.ai" className="text-primary hover:underline font-semibold">
                    info@darkthreat.ai
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Frequently Contacted Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers about onboarding, security assessments, and support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-border bg-card/60 overflow-hidden transition-all duration-300"
              >
                <summary className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors cursor-pointer list-none">
                  <span className="font-montserrat font-semibold text-foreground pr-4 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.q}
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-border/40 text-muted-foreground text-sm leading-relaxed bg-background/20">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            Have a different question? Join our Discord community or visit our{" "}
            <Link href="/blog" className="text-primary hover:underline">
              Knowledge Base
            </Link>
            .
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
