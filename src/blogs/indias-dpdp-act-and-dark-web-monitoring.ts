import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const indiasDpdpActAndDarkWebMonitoring: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-009",
  slug: "indias-dpdp-act-and-dark-web-monitoring",
  title: "India's DPDP Act and Dark Web Monitoring",
  excerpt:
    "India's Digital Personal Data Protection Act is moving into full enforcement, with breach reports due within 72 hours and penalties up to ₹250 crore. Learn what the DPDP Rules require and how dark web monitoring helps businesses detect breaches early and meet their obligations.",
  featuredImage: "/dark-threat-6.webp",
  category: "Cybersecurity",
  publishDate: "November 6, 2026",
  readingTime: "10 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "India's DPDP Act and Dark Web Monitoring",
  metaDescription:
    "India's DPDP Act brings 72-hour breach reports and fines up to ₹250 crore. See what the rules require and how dark web monitoring helps you comply.",
  tableOfContents: [
    { id: "what-is-dpdp", title: "What Is India's DPDP Act?" },
    { id: "timeline", title: "The DPDP Compliance Timeline" },
    { id: "security-safeguards", title: "Reasonable Security Safeguards" },
    { id: "breach-notification", title: "Breach Notification Under the DPDP Rules" },
    { id: "penalties", title: "Penalties" },
    { id: "why-dark-web", title: "Why Indian Data Ends Up on the Dark Web" },
    { id: "where-monitoring-fits", title: "Where Dark Web Monitoring Fits" },
    { id: "checklist", title: "A DPDP Readiness Checklist" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>For years India had no dedicated personal data protection law. That changed with the <strong>Digital Personal Data Protection Act, 2023</strong> (DPDP Act), and in November 2025 the government notified the rules that bring it into force. Businesses now have until May 2027 to comply with its core obligations, including strict breach notification and security requirements backed by penalties of up to ₹250 crore.</p>

      <p>Many breaches of Indian companies are first discovered not by the company itself, but when customer records appear for sale on a dark web forum or a Telegram channel. Under the DPDP regime, finding out late is no longer just embarrassing. It can make the difference between a well-managed response and a costly penalty. This guide explains the rules and where dark web monitoring fits.</p>

      <div class="dt-callout dt-callout--amber">
        <div class="dt-callout__title">Not legal advice</div>
        <p>This article explains how dark web monitoring can support DPDP compliance. It is not legal advice. Confirm your obligations with legal counsel.</p>
      </div>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">72 hours</div>
          <div class="dt-stat-label">Deadline for a detailed breach report to the Data Protection Board</div>
          <div class="dt-stat-source">DPDP Rules, 2025</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">₹250 cr</div>
          <div class="dt-stat-label">Maximum penalty for failing to take reasonable security safeguards</div>
          <div class="dt-stat-source">DPDP Act, 2023</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">12 May 2027</div>
          <div class="dt-stat-label">Date most substantive obligations take effect</div>
          <div class="dt-stat-source">MeitY notification, November 2025</div>
        </div>
      </div>

      <h2 id="what-is-dpdp">What Is India's DPDP Act?</h2>

      <p>The DPDP Act governs how organisations collect, use and protect digital personal data of individuals in India. It applies to Indian businesses and to foreign companies that process personal data in connection with offering goods or services to people in India.</p>

      <p>The Act uses its own terms:</p>
      <ul>
        <li><strong>Data Principal:</strong> the individual the data is about.</li>
        <li><strong>Data Fiduciary:</strong> the organisation that decides why and how data is processed. Most of the obligations fall here.</li>
        <li><strong>Data Processor:</strong> a vendor that processes data on behalf of a Data Fiduciary.</li>
        <li><strong>Significant Data Fiduciary:</strong> a larger or higher-risk organisation designated by the government, with extra duties such as audits and impact assessments.</li>
        <li><strong>Data Protection Board of India:</strong> the regulator that investigates breaches and imposes penalties.</li>
      </ul>

      <h2 id="timeline">The DPDP Compliance Timeline</h2>

      <p>The Ministry of Electronics and Information Technology notified the DPDP Rules on 13 November 2025 and set a phased rollout:</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Date</strong></div>
          <div class="table-cell"><strong>What comes into force</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">13 November 2025</div>
          <div class="table-cell">Definitions and the provisions establishing the Data Protection Board</div>
        </div>
        <div class="table-row">
          <div class="table-cell">12 November 2026</div>
          <div class="table-cell">Registration and obligations of consent managers</div>
        </div>
        <div class="table-row">
          <div class="table-cell">12 May 2027</div>
          <div class="table-cell">All remaining obligations: notice and consent, security safeguards, breach notification, data principal rights, children's data, retention and cross-border transfer rules</div>
        </div>
      </div>

      <p>Eighteen months sounds generous, but building the detection and response capability needed to meet a 72-hour reporting deadline takes time. Organisations that start in 2027 will be late.</p>

      <h2 id="security-safeguards">Reasonable Security Safeguards</h2>

      <p>Section 8(5) of the Act requires every Data Fiduciary to protect personal data with reasonable security safeguards to prevent a breach, including data handled by its processors. The DPDP Rules set out the minimum expected, including:</p>

      <ul>
        <li>Encryption, masking or similar techniques to protect personal data.</li>
        <li>Access controls over the systems that hold it.</li>
        <li>Logging and monitoring that give visibility into access, so unauthorised use can be detected, investigated and fixed.</li>
        <li>Backups and measures to keep processing going after a compromise.</li>
        <li>Keeping relevant logs for at least one year for detection and investigation.</li>
        <li>Contracts that require processors to take appropriate safeguards too.</li>
      </ul>

      <p>The emphasis on detection is important. A company that cannot tell when its data has been taken will struggle to show its safeguards were reasonable.</p>

      <h2 id="breach-notification">Breach Notification Under the DPDP Rules</h2>

      <p>The Act defines a personal data breach broadly: any unauthorised processing, accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access that compromises the confidentiality, integrity or availability of personal data. When one happens, the Data Fiduciary must:</p>

      <ol>
        <li><strong>Notify the Data Protection Board without delay,</strong> describing the nature, extent, timing and location of the breach and its likely impact.</li>
        <li><strong>Send a detailed report to the Board within 72 hours</strong> of becoming aware of the breach, covering the facts, likely causes, mitigation, any findings about who was responsible, steps to prevent a repeat, and the notices sent to affected people.</li>
        <li><strong>Notify every affected Data Principal without delay,</strong> in clear and plain language, explaining what happened, the likely consequences, what the company has done, what the person can do to protect themselves, and who to contact.</li>
      </ol>

      <p>Unlike some laws, there is no minimum size or risk threshold for notifying individuals. Every affected person must be told.</p>

      <h3>Don't forget CERT-In</h3>
      <p>Since 2022, CERT-In directions have required many organisations in India to report specified cyber incidents within six hours of noticing them. DPDP breach reporting sits alongside these existing obligations, so incident response plans need to cover both.</p>

      <div class="dt-callout dt-callout--warning">
        <div class="dt-callout__title">The clock starts at awareness</div>
        <p>If you first learn about a breach because your customer data is being sold on a forum, the 72-hour clock starts then, and you will already be behind in understanding what was taken. Earlier detection gives you more time to investigate and report accurately.</p>
      </div>

      <h2 id="penalties">Penalties</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Failure</strong></div>
          <div class="table-cell"><strong>Maximum penalty</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Failing to take reasonable security safeguards to prevent a breach</div>
          <div class="table-cell">Up to ₹250 crore</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Failing to notify the Board and affected individuals of a breach</div>
          <div class="table-cell">Up to ₹200 crore</div>
        </div>
      </div>

      <p>These are maximums. When deciding the amount, the Board considers factors such as the nature, gravity and duration of the breach and the steps taken to reduce its impact.</p>

      <h2 id="why-dark-web">Why Indian Data Ends Up on the Dark Web</h2>

      <p>India has one of the world's largest online populations and a fast-growing digital economy, which makes Indian personal data valuable to criminals. In recent years, data said to belong to customers of major Indian insurers, consumer brands and online platforms has surfaced on dark web forums and Telegram channels, sometimes before the companies publicly acknowledged a problem.</p>

      <p>The data usually gets there in a few ways:</p>
      <ul>
        <li><strong>Ransomware and extortion,</strong> where stolen data is posted on leak sites if a company does not pay.</li>
        <li><strong>Infostealer malware</strong> on employee or vendor devices, which captures logins to admin panels, CRMs and cloud storage.</li>
        <li><strong>Misconfigured cloud storage and APIs</strong> found by attackers scanning the internet.</li>
        <li><strong>Insiders and third parties</strong> who misuse or sell access to customer databases.</li>
      </ul>

      <h2 id="where-monitoring-fits">Where Dark Web Monitoring Fits</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>DPDP requirement</strong></div>
          <div class="table-cell"><strong>How dark web monitoring helps</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Reasonable security safeguards</div>
          <div class="table-cell">Detects leaked employee and admin credentials so they can be reset before they are used to reach personal data</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Visibility to detect unauthorised access</div>
          <div class="table-cell">Alerts when customer data linked to your domain appears on forums, markets, Telegram or leak sites</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Breach notification to the Board</div>
          <div class="table-cell">Gives earlier awareness and evidence about what data is exposed, supporting the initial intimation and 72-hour report</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Notifying affected individuals</div>
          <div class="table-cell">Samples of leaked data help identify which customers are affected and what kind of data was taken</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Processor safeguards</div>
          <div class="table-cell">Monitors vendors and processors for credential leaks and breaches that could expose your data</div>
        </div>
      </div>

      <p>DarkThreat monitors stealer logs, criminal forums, Telegram channels and ransomware leak sites for your domains, brands, staff and suppliers, and alerts your team when exposure appears. See <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="checklist">A DPDP Readiness Checklist</h2>

      <ol>
        <li><strong>Map your personal data:</strong> what you collect, where it is stored, and which vendors process it.</li>
        <li><strong>Strengthen access controls</strong> and multi-factor authentication on every system holding personal data.</li>
        <li><strong>Turn on logging and keep logs for at least a year.</strong></li>
        <li><strong>Set up external monitoring</strong> for leaked credentials and customer data on the dark web.</li>
        <li><strong>Write a breach playbook</strong> covering the Board's initial intimation, the 72-hour report, CERT-In reporting and customer notices, with templates ready in advance.</li>
        <li><strong>Update vendor contracts</strong> so processors must protect data and report incidents to you quickly.</li>
        <li><strong>Run a tabletop exercise</strong> based on a realistic scenario, such as your customer database being offered for sale on a forum.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>India's DPDP Rules were notified on 13 November 2025, with most obligations applying from 12 May 2027.</li>
        <li>Data Fiduciaries must take reasonable security safeguards, including monitoring to detect unauthorised access.</li>
        <li>Breaches must be reported to the Board without delay, with a detailed report within 72 hours, and every affected person must be told.</li>
        <li>Penalties reach ₹250 crore for weak security and ₹200 crore for failing to notify.</li>
        <li>Dark web monitoring helps detect breaches earlier and gives evidence for accurate reporting.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Does the DPDP Act apply to companies outside India?</h3>
      <p>Yes, if they process digital personal data in connection with offering goods or services to individuals in India.</p>

      <h3>Does the DPDP Act require dark web monitoring?</h3>
      <p>No law names a specific tool. The rules do require reasonable safeguards, including visibility and monitoring to detect unauthorised access, and fast breach reporting. Dark web monitoring is one practical way to detect when personal data has already left your systems.</p>

      <h3>When do we have to report a breach?</h3>
      <p>The Board must be informed without delay once you become aware of a breach, with a detailed report within 72 hours. Affected individuals must also be informed without delay.</p>

      <h3>Is there a minimum number of affected people before we must report?</h3>
      <p>No. The DPDP Rules require notifying the Board and every affected Data Principal regardless of the size of the breach.</p>

      <h3>How does DPDP relate to CERT-In reporting?</h3>
      <p>They are separate obligations. CERT-In directions require many organisations to report specified cyber incidents within six hours, while the DPDP Rules cover personal data breaches. One incident may trigger both.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/detecting-customer-pii-leaks-before-regulatory-notification-required">Detecting Customer PII Leaks Before Regulatory Notification Is Required</a></li>
        <li><a href="/blog/gdpr-breach-notification-and-dark-web-monitoring-a-compliance-guide">GDPR Breach Notification and Dark Web Monitoring: A Compliance Guide</a></li>
        <li><a href="/blog/how-to-tell-your-customers-about-a-data-breach-legal-and-pr-guide">How to Tell Your Customers About a Data Breach: Legal and PR Guide</a></li>
        <li><a href="/blog/what-to-do-in-the-first-48-hours-of-a-data-breach">What to Do in the First 48 Hours of a Data Breach</a></li>
        <li><a href="/blog/dora-and-dark-web-monitoring-requirements-for-eu-financial-firms">DORA and Dark Web Monitoring: Requirements for EU Financial Firms</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/" target="_blank" rel="noopener noreferrer">AZB &amp; Partners: India's DPDP Act, phased rollout and key compliance milestones</a></li>
        <li><a href="https://ksandk.com/data-protection-and-data-privacy/dpdp-data-breach-notification-timeline/" target="_blank" rel="noopener noreferrer">King Stubb &amp; Kasiva: DPDP data breach notification timeline</a></li>
        <li><a href="https://iapp.org/resources/article/operational-impacts-of-indias-dpdpa-part10" target="_blank" rel="noopener noreferrer">IAPP: Operational impacts of India's DPDPA, data breaches</a></li>
        <li><a href="https://www.mondaq.com/india/privacy-protection/1733870/indias-data-protection-law-enters-the-enforcement-phase-what-the-18-month-compliance-window-means-for-indian-and-global-businesses" target="_blank" rel="noopener noreferrer">Mondaq: India's data protection law enters the enforcement phase</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
