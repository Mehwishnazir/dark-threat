import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description:
    "Terms that govern access to and use of the DarkThreat website, including intellectual property, prohibited activities, and disclaimers.",
  alternates: { canonical: "/website-terms" },
};

export default function WebsiteTerms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-8" aria-label="Related legal documents">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/platform-terms" className="hover:text-primary">Platform Terms of Use</Link>
        </nav>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-montserrat font-bold text-foreground mb-4">Website Terms of Use</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Website Usage</h2>
              <p className="text-foreground/90 leading-relaxed">
                By accessing and using the DarkThreat website, you agree to comply with these terms of use. 
                The website is provided for informational purposes and to facilitate access to our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-foreground/90 leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the property of 
                DarkThreat or its licensors and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Prohibited Activities</h2>
              <ul className="space-y-2 text-foreground/90">
                <li>• Attempting to gain unauthorized access to our systems</li>
                <li>• Using automated tools to scrape or download content</li>
                <li>• Posting malicious code or attempting to disrupt site functionality</li>
                <li>• Impersonating DarkThreat or our employees</li>
                <li>• Using the website for illegal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">User Content</h2>
              <p className="text-foreground/90 leading-relaxed">
                Any content you submit through our website (such as contact forms or support requests) becomes 
                the property of DarkThreat. You grant us a perpetual, worldwide license to use such content for 
                business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Disclaimers</h2>
              <p className="text-foreground/90 leading-relaxed">
                The information on this website is provided "as is" without warranties of any kind. We do not 
                guarantee the accuracy, completeness, or timeliness of the information presented. Use of this 
                website is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-foreground/90 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with 
                an updated "last modified" date. Your continued use of the website constitutes acceptance of the 
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  For any questions, concerns, or clarifications about these Website Terms of Use, you can contact DarkThreat.ai support. The support team is available to provide clear guidance and answer inquiries about these terms.
                </p>
                <p>
                  You can reach out via email at:{' '}
                  <a href="mailto:support@darkthreat.ai" className="text-primary hover:text-primary/80">
                    support@darkthreat.ai
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}