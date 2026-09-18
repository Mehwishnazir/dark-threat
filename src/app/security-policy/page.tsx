import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Disclosure Policy",
  description:
    "Report vulnerabilities to security@darkthreat.ai. We acknowledge within 2 business days and share a remediation timeline within 10 business days.",
  ...pageSeo("/security-policy"),
};

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Security Disclosure Policy
            </h1>
            <p className="text-muted-foreground">Last updated: September 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Responsible disclosure
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat welcomes reports of security vulnerabilities in our website,
                APIs, and related services. We ask researchers to report issues privately
                so we can investigate and remediate before public disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Email{" "}
                <a href="mailto:security@darkthreat.ai" className="text-primary hover:underline">
                  security@darkthreat.ai
                </a>
                . Include the affected URL or endpoint, reproduction steps, impact
                assessment, and any supporting logs or screenshots.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Response timeline
              </h2>
              <ul className="space-y-2 text-foreground/90">
                <li>• Acknowledgement: within 2 business days of a valid report</li>
                <li>• Remediation timeline: within 10 business days of acknowledgement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Scope and restrictions
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Do not run automated scanning that degrades service, access or modify
                other users' data, or publicly disclose an issue before we have had a
                reasonable opportunity to remediate.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
