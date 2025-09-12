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
            <h1 className="text-4xl font-oswald font-bold text-primary mb-4">Platform Terms of Use</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai is a platform designed to help organizations identify and respond to data breaches, leaked credentials, and hacker activity before they impact business operations. The Terms of Service (ToS) set out the rules and responsibilities for using the platform, providing clear guidance and protection for both the Company and its Users.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                By accessing or using DarkThreat.ai, you agree to these terms. Accepting the ToS is required to create an account and use the platform. It ensures that all Users understand how to use the platform correctly, their responsibilities, and their rights while using the services.
              </p>
              <p className="text-foreground/90 leading-relaxed font-semibold">Key definitions:</p>
              <ul className="space-y-1 text-foreground/90 ml-4">
                <li>• <strong>Company</strong> – Refers to DarkThreat.ai and its affiliates.</li>
                <li>• <strong>User</strong> – Any individual or organization using the platform.</li>
                <li>• <strong>Platform</strong> – All services provided by DarkThreat.ai, including web applications, dashboards, and APIs.</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                The ToS provides a clear legal framework for using the platform. It explains what the platform can and cannot do, the responsibilities of the User, and the protections offered by the Company. Following these terms ensures proper use, security, and trust when using DarkThreat.ai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Eligibility</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai services are only for individuals and organizations that meet legal and regulatory requirements. Users must be at least 18 years old or the minimum legal age in their country. Minors, unregistered organizations, and users in restricted regions are not allowed to use the platform.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                These rules ensure that the platform is used safely and responsibly, following all laws and regulations. They protect the security of the platform, the data it monitors, and the overall reliability of the services. Only authorized and qualified Users should access the platform to use its tools correctly and effectively.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                When creating an account, Users may need to provide information to verify their eligibility. This verification ensures compliance and confirms that each User is legally allowed to use DarkThreat.ai services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Account Registration & Security</h2>
              <p className="text-foreground/90 leading-relaxed">
                To use DarkThreat.ai, Users must create an account with accurate and valid information. This includes a verified email address and, if required, organizational credentials. Registration may also involve identity verification to confirm that the User is authorized to access the platform. This ensures that only legitimate individuals or organizations can use the services.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Users are responsible for keeping their accounts secure. This means using strong passwords, not sharing login information, and updating authentication methods regularly. Users should also check their accounts for any unusual or suspicious activity. If an account is compromised, it must be reported immediately to DarkThreat.ai support to prevent unauthorized access or misuse of data.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Failure to maintain account security can result in account suspension, restrictions, or other corrective actions. Proper account security protects both the User and the platform, ensuring safe, reliable, and professional use of DarkThreat.ai services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Services Provided</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai offers three key services to help organizations detect and respond to cyber threats efficiently:
              </p>
              <ul className="space-y-2 text-foreground/90">
                <li>• <strong>Dark Web Monitoring</strong> – Tracks corporate domains and sub-domains across paste sites, forums, and online marketplaces. This helps organizations quickly identify if sensitive information or company assets are being shared without authorization.</li>
                <li>• <strong>Credential Leak Alerts</strong> – Monitors employee and VIP email accounts and passwords for leaks. Users are notified immediately if their credentials appear in compromised databases, helping prevent unauthorized access to systems and data.</li>
                <li>• <strong>Hacker Chatter Tracking</strong> – Scans forums, chatrooms, and private channels for mentions of the organization. This provides early alerts about potential threats, attack planning, or other malicious activity targeting the company.</li>
              </ul>
              <p className="text-foreground/90 leading-relaxed">
                While these services provide advanced threat intelligence, they cannot guarantee complete prevention of breaches. Coverage may vary depending on source availability and activity on the dark web.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Common use cases include early detection of compromised credentials, identifying potential attacks before they occur, and enabling teams to respond quickly to threats. Using these services allows organizations to monitor threats continuously, act promptly, and reduce risks to security, operations, and reputation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Subscription & Payment Terms</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai offers three subscription plans: Standard, Enterprise, and MSSP/White-label. Each plan provides different levels of domain coverage, user access, and support, allowing organizations to choose the plan that best fits their size and security needs.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Billing is usually annual, with automatic renewal unless canceled before the renewal date. Payment can be made using approved methods, such as credit card or invoicing, depending on the plan.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Refunds may be limited or not available, depending on usage and subscription type. Free trial users can access a limited set of services for a set period without entering payment details. This allows new users to explore the platform and understand its features before subscribing to a paid plan.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Cancellations must follow DarkThreat.ai's procedures, and Users are responsible for keeping track of their subscription status, renewal dates, and billing notifications. Following these terms helps ensure continuous access to services and proper management of account subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">User Obligations & Prohibited Use</h2>
              <p className="text-foreground/90 leading-relaxed">
                Users of DarkThreat.ai must use the platform responsibly, ethically, and in compliance with all applicable laws. All activities should follow professional standards and avoid any actions that could harm the platform, other Users, or third parties. Users are expected to act with integrity and report any suspicious activity they notice on the platform. Following these rules helps create a safe environment for everyone using the services.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Prohibited actions include hacking, exploiting system vulnerabilities, gaining unauthorized access, reverse engineering, scraping the platform, or using the data for illegal purposes. Users must not share monitoring results inappropriately or misuse the information obtained through the platform. Additionally, Users should ensure their actions do not violate company policies, contractual obligations, or local regulations. Proper and responsible use of the platform protects both the User and the organization from potential security or legal issues.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Violations of these rules may result in immediate account suspension, termination, or legal action. Following these obligations helps maintain the security, reliability, and integrity of DarkThreat.ai services. It also ensures that all Users can trust the accuracy of the information provided and rely on the services for ongoing cybersecurity protection. Responsible use strengthens the platform's overall effectiveness and the safety of all monitored data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Data Privacy & Confidentiality</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai collects, processes, and stores user data to provide reliable monitoring and threat intelligence services. All user information, including login credentials, account details, and monitored results, is kept strictly confidential. The platform uses strong security measures to protect data from unauthorized access, theft, or misuse. Users are also responsible for keeping their account information secure and private.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                All intelligence collected from dark web sources is handled with strict confidentiality. This ensures ethical monitoring and prevents sensitive information from being misused. Users are encouraged to review the Privacy Policy, which explains in detail how data is collected, stored, processed, and protected.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai is committed to maintaining privacy and security at all times. Users can trust that their personal information and the intelligence provided by the platform will be managed safely and professionally. Careful handling of data ensures compliance with legal standards, supports the integrity of the platform, and helps keep the services reliable and effective for all Users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-foreground/90 leading-relaxed">
                All software, reports, analytics, dashboards, and trademarks related to DarkThreat.ai are the exclusive intellectual property of the Company. Users must not copy, share, distribute, modify, or create derivative works from any Platform content without explicit written permission. This includes any data, visualizations, or analytical results provided by the services.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Protecting intellectual property is important to safeguard the proprietary technologies and information that make DarkThreat.ai effective. Unauthorized use or reproduction of platform content may result in account suspension, termination, or legal action. Users should also ensure that any third-party tools or software they use with the platform do not violate these rights.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                By following these rules, Users help maintain the platform's integrity, support innovation, and ensure that DarkThreat.ai continues to provide reliable, secure, and advanced threat intelligence services. Respecting intellectual property also builds trust, promotes professionalism, and ensures a safe and fair environment for all Users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai may connect with third-party tools, data sources, or APIs to improve monitoring and threat intelligence. These integrations give additional information and help provide more complete and timely alerts to Users.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The Company is not responsible for any problems, delays, inaccuracies, or interruptions caused by third-party services. Users should understand that the performance, reliability, and quality of these services may vary, and DarkThreat.ai cannot guarantee their accuracy or availability.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Users must review and confirm the compliance, security, and suitability of any third-party integrations before relying on them for important security or operational decisions. Careful evaluation ensures these services meet organizational needs and do not create security risks. Regular monitoring of third-party tools also helps maintain the overall reliability and effectiveness of DarkThreat.ai services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Disclaimers & Limitation of Liability</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai services are provided "as-is" without any guarantee that data breaches will be prevented or that all threats will be detected. While the platform provides advanced monitoring and intelligence, no system can offer complete protection or identify every risk. Users should use the platform as part of a wider security strategy to protect their organization.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The Company is not responsible for any damages, data loss, or indirect consequences from using the platform. Users understand that monitoring depends on external sources, including dark web activity and third-party data, which may vary in accuracy, completeness, and availability.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                These limitation of liability provisions protect DarkThreat.ai from claims, losses, or damages caused by events outside its control. Users should combine platform insights with their own security measures, policies, and professional judgment when making decisions. Responsible use of the platform helps reduce risks, but no tool can completely eliminate security threats. Users are encouraged to maintain additional safeguards to protect their data and systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Indemnification</h2>
              <p className="text-foreground/90 leading-relaxed">
                Users agree to indemnify, defend, and hold harmless DarkThreat.ai and its affiliates from any claims, damages, or losses that result from misuse of the platform, violations of the Terms of Service, or illegal activities conducted using the service. This includes any legal costs or expenses that may arise from such actions.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Users are responsible for their actions on the platform and must take responsibility for any consequences caused by improper or unlawful use. This provision provides legal protection for DarkThreat.ai while encouraging Users to act responsibly and follow all rules.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                By complying with these terms, Users help maintain a safe and secure environment on the platform. Responsible use ensures that the services remain reliable, professional, and effective for all organizations relying on DarkThreat.ai. Users should stay aware of their responsibilities and avoid actions that could lead to claims or damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Termination</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai has the right to suspend or terminate accounts if Users violate the Terms of Service, engage in illegal activities, or use the platform unethically. In serious cases, repeated violations, or security threats, accounts may be terminated immediately without prior notice.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Users are responsible for following all rules and complying with termination procedures. Once an account is deactivated, Users must stop using the platform and cannot access any services, data, or features linked to the account. Users should also handle any data they have stored or downloaded from the platform responsibly.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                This policy helps keep the platform secure, reliable, and professional for all Users. Promptly following suspension or termination instructions protects the integrity of DarkThreat.ai services, prevents misuse, and maintains trust across the platform. Following these rules ensures that everyone can use DarkThreat.ai safely and responsibly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Governing Law & Dispute Resolution</h2>
              <p className="text-foreground/90 leading-relaxed">
                The Terms of Service are governed by the laws of the jurisdiction where DarkThreat.ai is legally registered. Any disputes or disagreements related to the platform, its services, or these terms may be resolved through arbitration, mediation, or in courts, depending on the situation and applicable law.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The Company encourages Users to try alternative dispute resolution methods, such as mediation or arbitration, before taking formal legal action. This approach helps reduce costs, save time, and maintain professional relationships between the parties.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                By using the platform, Users agree to follow these procedures and cooperate fully in resolving disputes fairly and efficiently. Resolving issues in this way ensures they are handled professionally, transparently, and according to the law. Users are responsible for providing accurate information and participating in the process to help reach timely and effective resolutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-foreground/90 leading-relaxed">
                DarkThreat.ai can update or change the Terms of Service at any time. Users will be notified of important updates through email or platform announcements. Continuing to use the platform after these updates means that Users agree to and accept the new terms.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Users are responsible for checking the Terms of Service regularly to stay aware of any changes. Reviewing updates helps Users understand their current rights, responsibilities, and obligations when using the platform and ensures compliance with the rules.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Staying informed about changes also helps Users avoid accidental violations and make the most of the platform's services. If there are questions or concerns about any updates, Users should contact DarkThreat.ai support promptly for clarification. Being aware of changes helps maintain a safe, secure, and professional environment for everyone using the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-foreground/90 leading-relaxed">
                For any questions, concerns, or clarifications about the Terms of Service, Users can contact DarkThreat.ai support. The support team is available to provide clear guidance, answer inquiries, and help Users understand their rights, responsibilities, and obligations under the ToS.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Users can reach out via email at: <strong>support@darkthreat.ai</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}