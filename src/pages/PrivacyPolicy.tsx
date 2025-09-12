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

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, protecting your privacy is one of our highest priorities. Our Privacy Policy explains in clear terms how we collect, use, and protect the information of everyone who interacts with our platform—whether you are visiting our website, trying our services, using our enterprise solutions, or accessing our API. This policy helps you understand exactly what data we collect and why it is needed to provide our services.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Our platform provides advanced dark web monitoring, helping detect data breaches, leaked credentials, and hacker activity before they affect your organization. To do this, we collect different types of information, including personal details, usage information, and alerts from dark web sources. This policy explains how we handle all this information carefully and securely, ensuring it is used only for legitimate purposes.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                We value your trust and take it very seriously. That's why we implement strong measures to protect your data, maintain confidentiality, and handle your information responsibly. We also explain your rights regarding your data and the security measures in place to prevent unauthorized access. Our goal is to give you full confidence in using DarkThreat.ai's services safely and securely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, we collect information to provide accurate and effective threat intelligence services while keeping your experience safe and secure. Knowing what data we gather helps you understand how we protect your organization and why this information is important for our services.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Personal Information:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    When you register for our services, we collect details such as your name, email address, company name, and payment information. This information helps us create and manage your account, process subscriptions, and send important updates about your services. It also allows us to verify your identity and ensure that only authorized users can access your account and alerts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Usage Data:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We collect technical information about how you use our platform, including your IP address, device details, browser type, login times, and activity logs. This data helps us detect and prevent unauthorized access, maintain system security, and improve platform performance. By analyzing usage patterns, we can make our services faster, more reliable, and easier to use.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Dark Web Monitoring Data:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Monitoring the dark web is a central part of our services. This includes alerts about leaked credentials, mentions of your company on forums or private channels, and data from paste sites or marketplaces. Collecting this information allows us to detect risks early, provide timely alerts, and help your organization take action before potential threats can cause harm.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, we use the information we collect to provide safe, reliable, and effective services. Knowing how we use your data helps you understand the value it provides in keeping your organization secure.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Provide Services:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The main reason we collect data is to support our dark web monitoring services. This includes sending alerts, detecting potential breaches, and providing actionable threat intelligence. Your information helps us identify risks quickly and notify you so you can take the right action in time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Improve Platform Features:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We use aggregated and anonymized data to improve our platform. This helps make our services faster, more reliable, and easier to use. By reviewing how the platform is used, we can identify improvements and create new features that benefit all users.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Communication and Support:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Personal information allows us to respond to support requests, provide guidance, and send important updates or security alerts about your account. This ensures you get timely help and stay informed about your services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Legal and Regulatory Compliance:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We also use collected data to comply with applicable laws and regulations. This may include reporting security incidents or responding to legal requests. Using your data this way helps maintain trust, accountability, and transparency in our operations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">4. Sharing of Information</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, we take your privacy very seriously and have strict rules about how your data is shared. We only share information when it is necessary to provide our services, maintain security, or comply with legal requirements. Our goal is to ensure your data is handled responsibly while keeping our platform reliable and secure.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">With Service Providers:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We work with trusted third-party providers for cloud hosting, analytics, and software integrations. These partners handle data on our behalf and are required to keep it secure and confidential. They are not allowed to use your information for any other purpose. We carefully choose these providers and regularly review their security practices to ensure your data remains protected. We also require them to follow strict privacy and security policies that match or exceed our own standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Legal Requirements:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    In certain cases, we may need to share information to comply with laws or regulations. This could include law enforcement requests, court orders, or regulatory investigations. Whenever possible, we limit the amount of information shared to only what is necessary to meet these requirements. We also document any disclosures to ensure transparency and accountability in how your data is handled.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Business Transfers:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    If DarkThreat.ai is involved in a merger, acquisition, or company reorganization, personal and organizational data may be transferred to the new entity. Even in these situations, our commitment to protecting your data and maintaining confidentiality remains in place. All transferred data continues to be protected under the same privacy standards and security measures that we apply today. This ensures that your information remains secure throughout the process.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Aggregated/Non-identifiable Data:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We may share anonymized and aggregated data for research, analysis, or industry benchmarking. This type of data cannot be linked to any individual or organization and helps us improve our services and provide better insights to the cybersecurity community. Sharing aggregated data also allows us to monitor trends, identify potential risks, and develop more effective threat intelligence solutions for our clients.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, we keep your data only as long as it is needed to provide our services, maintain security, and comply with legal requirements. This approach ensures your information is used responsibly and not stored longer than necessary. Storing data for the appropriate amount of time also helps us continue delivering reliable monitoring, accurate alerts, and ongoing support for your organization.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Storage Duration:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Personal information, usage data, and dark web monitoring alerts are stored for defined periods that match the needs of our services. This allows us to provide timely alerts, maintain effective threat intelligence, and respond to any security issues efficiently. We regularly review these storage periods to ensure that data is kept only as long as required.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Compliance Retention Periods:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Certain data may be retained for longer periods to meet legal or regulatory requirements, such as GDPR, CCPA, or industry-specific standards. Keeping this information supports compliance, security monitoring, auditing, and reporting processes, while ensuring that we meet all legal obligations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Deletion and Archiving:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    When data is no longer needed, it is securely deleted or anonymized to prevent unauthorized access. In some cases, historical records may be stored in a secure, archived form for compliance, auditing, or reporting purposes. These measures protect your information at all times and help prevent misuse or unauthorized access.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">6. Security of Your Data</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, keeping your data secure is one of our highest priorities. We use strict measures to protect your information from unauthorized access, misuse, or disclosure. This ensures your data is always safe when you use our platform and services.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Protection Measures:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    All sensitive information is encrypted both during transmission and when stored. Our servers are protected with industry-standard firewalls, intrusion detection systems, and multi-factor authentication. These safeguards prevent unauthorized access and protect against cyber threats, hacking attempts, or other risks. We regularly update our security tools and protocols to address new and emerging threats.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Access Controls:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Access to your data is restricted to authorized personnel only, based on their roles and responsibilities. Regular internal audits ensure employees follow strict security rules. These practices maintain accountability, reduce the risk of accidental or intentional data exposure, and help keep your information confidential.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Incident Response:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    In the rare event of a security breach, our incident response plan ensures quick containment, thorough investigation, and timely notification to affected clients. Continuous monitoring and threat detection allow us to spot potential risks early and prevent incidents before they escalate.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Ongoing Improvements:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We continually review and improve our security processes to stay ahead of new threats. This proactive approach ensures that your data remains protected and that our platform consistently meets the highest cybersecurity standards.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">7. User Rights</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, we respect your right to control your personal data. You have several rights regarding the information we collect and process, and we make it easy for you to exercise them. Understanding these rights helps you manage your data and ensures transparency in how we handle it.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Access, Correction, and Deletion:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You can request access to your personal information, correct any inaccuracies, or ask for your data to be deleted. This helps ensure your records are accurate, complete, and only include the information you want us to keep. It also gives you control over what data is stored with us.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Opt-Out of Marketing Communications:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You may choose to opt out of non-essential email communications at any time. Doing so will not affect your access to our core services or your ability to use the platform fully. Opting out allows you to control the messages you receive while still using our services without restriction.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Data Portability Requests:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You can request a structured, machine-readable copy of your data. This makes it easier to securely transfer your information to another service provider if needed, giving you flexibility and control over your data across platforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Exercising Your Rights:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Requests can be submitted through our support portal or by contacting our privacy officer directly. We respond promptly to ensure your requests are handled in line with applicable privacy regulations. Our goal is to make the process simple, transparent, and efficient while fully protecting your rights and your personal information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                At DarkThreat.ai, we use cookies and tracking technologies to improve platform functionality, enhance security, and provide a better user experience. These tools help us understand how our platform is used and ensure it works smoothly and safely for all users. Using these technologies allows us to identify and fix potential issues quickly and keep the platform reliable. It also helps us provide more personalized and efficient services to our clients.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Types of Cookies:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We use session cookies, functional cookies, and analytics cookies. Session cookies help maintain your login sessions, functional cookies remember your preferences and settings, and analytics cookies allow us to monitor platform performance and usage trends. These cookies also help us identify areas where the platform can be improved and ensure features work as intended. In addition, analytics cookies provide insight into user interactions, helping us optimize workflows and make the platform easier to navigate for everyone.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Managing Cookies:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You can manage cookies through your browser settings. Users have the option to accept, reject, or delete cookies at any time. Adjusting your preferences does not affect your ability to use the core services of DarkThreat.ai, and you remain in control of what information is stored. Managing cookies also helps you maintain your privacy preferences while still benefiting from the platform's full functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Tracking Technologies:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Data collected through cookies and other tracking tools supports analytics, helps improve user experience, and strengthens security monitoring. By detecting unusual activity patterns, these technologies help us prevent unauthorized access and maintain the overall integrity of the platform. They also assist in identifying potential security threats early and allow us to respond quickly to any suspicious behavior. Overall, tracking tools ensure a safer, more efficient, and reliable experience for all users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">9. Third-Party Services</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                To provide smooth and reliable services, DarkThreat.ai works with selected third-party providers. These partnerships help us deliver key features, improve platform performance, and ensure a secure experience for all users. Working with trusted providers allows us to focus on our core services while still offering high-quality support and functionality.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Third-Party Integrations:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Payment processors, cloud hosting providers, and analytics platforms may have limited access to user data. This access is strictly controlled and is used only to perform the services they provide for DarkThreat.ai. Each provider is carefully reviewed to ensure they meet our privacy and security standards and handle your data responsibly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Handling of Data:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    All third-party providers are required to maintain strict confidentiality, comply with data protection laws, and use data solely for purposes that support DarkThreat.ai's services. They are not allowed to use your information for their own purposes or share it outside their responsibilities. We also include contractual safeguards and guidelines to ensure your data remains protected at all times.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Accountability:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    DarkThreat.ai actively monitors and oversees third-party providers to make sure they follow strict security and privacy rules. We regularly review their practices, perform audits, and update agreements when necessary. This oversight ensures your data is handled safely, responsibly, and consistently with our high standards of security and privacy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">10. International Data Transfers</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                DarkThreat.ai serves clients around the world and takes careful measures to ensure that data is handled securely across borders. We are committed to protecting your information no matter where it is processed or stored. This approach ensures that your data remains safe while you use our services globally.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Additionally, we apply consistent security standards across all locations to maintain the highest level of protection for your information. This commitment helps build trust and reliability for our international clients.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Cross-Border Data Handling:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Some information may be transferred to servers or service providers located in other countries. These transfers are necessary to deliver our services efficiently and ensure reliable access to platform features for clients worldwide. We make sure that all transferred data is protected with the same strict security and privacy measures as if it stayed within your home country. We also monitor these transfers regularly to identify and address any potential risks. Maintaining these controls ensures that your data remains confidential and secure no matter where it is processed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Regulatory Compliance:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    All international data transfers comply with applicable privacy laws, including GDPR, CCPA, and other relevant regulations. Appropriate safeguards, such as standard contractual clauses and data protection agreements, are implemented to protect your data.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    We regularly review and update our practices to maintain compliance with changing regulations and evolving security standards. By doing so, we ensure transparency, accountability, and continuous protection of your data across borders. These measures guarantee that your information is handled responsibly at every stage of processing.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                DarkThreat.ai may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or data handling practices. We are committed to keeping you informed and maintaining full transparency about how your data is collected, used, and protected. Regular updates allow us to stay aligned with new privacy laws, enhance security measures, and improve our services. These updates also help ensure that your rights are always respected and clearly communicated.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Policy Updates:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Users will be notified of significant changes through email or platform notifications. Minor updates may be published directly on our website without individual notifications. All updates provide clear guidance on our privacy practices and help you understand any new procedures or adjustments that may affect your data.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    Reviewing updates regularly ensures you are aware of your rights and how your information is being used. This approach gives you full visibility and confidence in how DarkThreat.ai manages your data.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Effective Date:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The current version of this Privacy Policy is effective as of the date shown at the top of this page. We encourage users to review the policy regularly to stay informed about how we handle your information. Staying up to date allows you to make informed decisions about your data and ensures you can continue using our services confidently and securely.
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    It also ensures that you are aware of any new security measures or service improvements that may impact your data. Being informed helps maintain trust and transparency between you and DarkThreat.ai.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-oswald font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-foreground/90 leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding your privacy, DarkThreat.ai provides dedicated support channels to assist you promptly. We are committed to responding clearly, efficiently, and professionally, so you can feel confident about how your information is handled. Our goal is to make it easy for you to contact us and get accurate answers regarding your personal data and privacy rights.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Privacy Officer / Support Team:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    You can reach our privacy officer or support team via email at info@darkthreat.ai. Our team is available to answer questions about your personal information, provide guidance on privacy practices, and help you exercise your rights under applicable data protection laws. We handle all requests carefully and ensure timely responses to maintain transparency and trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-medium text-foreground mb-2">Feedback and Inquiries:</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    We welcome feedback and suggestions regarding our privacy practices. Your input helps us improve our services, strengthen data protection, and maintain the highest standards of privacy and security for all users.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}