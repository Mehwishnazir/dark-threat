import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-oswald font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat collects information you provide directly to us, such as when you create an account, 
                subscribe to our services, or contact us for support. This includes your name, email address, 
                company information, and payment details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-foreground/90">
                <li>• Provide and maintain our dark web monitoring services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send technical notices and security alerts</li>
                <li>• Respond to your comments and questions</li>
                <li>• Improve our services and develop new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Information Security</h2>
              <p className="text-foreground/90 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit 
                and at rest using industry-standard AES-256 encryption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-foreground/90 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this privacy policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-foreground/90 leading-relaxed">
                You have the right to access, update, or delete your personal information. You may also object to 
                or restrict certain processing of your data. To exercise these rights, please contact us at 
                privacy@darkthreat.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground/90 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@darkthreat.com
                <br />
                Address: 123 Cyber Security Blvd, Tech City, TC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}