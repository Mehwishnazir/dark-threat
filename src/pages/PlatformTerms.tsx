import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlatformTerms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-oswald font-bold text-foreground mb-4">Platform Terms of Use</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Service Description</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat provides dark web monitoring and threat intelligence services. Our platform continuously 
                scans dark web sources to identify potential data breaches, credential leaks, and security threats 
                related to your organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Acceptable Use</h2>
              <ul className="space-y-2 text-foreground/90">
                <li>• Use the service only for legitimate security monitoring purposes</li>
                <li>• Do not attempt to access or monitor data outside your organization</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Do not use the service to facilitate illegal activities</li>
                <li>• Do not attempt to reverse engineer or duplicate our technology</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Service Availability</h2>
              <p className="text-foreground/90 leading-relaxed">
                We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted 
                access and may perform maintenance that temporarily affects service availability. We will provide 
                advance notice of scheduled maintenance when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Data and Privacy</h2>
              <p className="text-foreground/90 leading-relaxed">
                Your data privacy is paramount. We collect and process only the information necessary to provide 
                our services. All monitoring data is encrypted and access is strictly controlled. We do not share 
                your data with third parties except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat provides monitoring services but cannot prevent all security incidents. Our liability 
                is limited to the fees paid for our services. We are not responsible for damages resulting from 
                security breaches or data theft not detected by our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-foreground/90 leading-relaxed">
                Either party may terminate this agreement with 30 days notice. Upon termination, your access to 
                the platform will be revoked and your data will be deleted according to our data retention policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}