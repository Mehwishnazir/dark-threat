import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const doraAndDarkWebMonitoringRequirementsForEuFinancialFirms: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-004",
  slug: "dora-and-dark-web-monitoring-requirements-for-eu-financial-firms",
  title: "DORA and Dark Web Monitoring: Requirements for EU Financial Firms",
  excerpt:
    "DORA requires EU financial firms to identify ICT risks continuously, gather cyber threat intelligence, report major incidents within hours and manage third-party risk. Here is where dark web monitoring fits into each of those obligations.",
  featuredImage: "/dark-threat-2.webp",
  category: "Cybersecurity",
  publishDate: "November 5, 2026",
  readingTime: "11 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "DORA and Dark Web Monitoring for EU Financial Firms",
  metaDescription:
    "How dark web monitoring supports DORA: threat intelligence, incident reporting, TLPT and third-party risk for EU banks, insurers and investment firms.",
  tableOfContents: [
    { id: "what-is-dora", title: "What Is DORA?" },
    { id: "five-pillars", title: "The Five Pillars of DORA" },
    { id: "where-threat-intel-fits", title: "Where DORA Expects Threat Intelligence" },
    { id: "mapping", title: "Mapping Dark Web Monitoring to DORA Articles" },
    { id: "incident-reporting", title: "Incident Reporting: Why Early Detection Matters" },
    { id: "third-party-risk", title: "Third-Party Risk and Critical ICT Providers" },
    { id: "tlpt", title: "Threat-Led Penetration Testing" },
    { id: "building-the-program", title: "Building a DORA-Aligned Monitoring Program" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>Since January 2025, banks, insurers, investment firms, payment companies and crypto-asset service providers across the European Union have been operating under the <strong>Digital Operational Resilience Act (DORA)</strong>. Unlike older guidance, DORA is a regulation with direct legal force, and supervisors are now checking how firms put it into practice.</p>

      <p>DORA never uses the phrase "dark web monitoring". But several of its articles require exactly what dark web monitoring delivers: continuous identification of external ICT risk, intelligence on cyber threats, early detection of incidents, and visibility into third-party exposure. This guide explains those requirements and shows where dark web intelligence fits.</p>

      <div class="dt-callout dt-callout--amber">
        <div class="dt-callout__title">Not legal advice</div>
        <p>This article explains how dark web monitoring can support DORA compliance. It is not legal advice. Confirm your specific obligations with your compliance team and national competent authority.</p>
      </div>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">17 Jan 2025</div>
          <div class="dt-stat-label">Date DORA began to apply across the EU</div>
          <div class="dt-stat-source">Regulation (EU) 2022/2554</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">4 hours</div>
          <div class="dt-stat-label">Deadline for the initial report after an incident is classified as major</div>
          <div class="dt-stat-source">ESAs incident reporting standards</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">19</div>
          <div class="dt-stat-label">Critical ICT third-party providers designated by the ESAs in November 2025</div>
          <div class="dt-stat-source">European Supervisory Authorities</div>
        </div>
      </div>

      <h2 id="what-is-dora">What Is DORA?</h2>

      <p>DORA, formally Regulation (EU) 2022/2554, sets a single set of rules for how financial entities manage ICT and cyber risk. It applies to around 20 types of financial entity, including credit institutions, payment and e-money institutions, investment firms, insurers and reinsurers, crypto-asset service providers and trading venues. It also brings the most important technology suppliers to the financial sector under direct EU oversight.</p>

      <p>Because DORA is a regulation, not a directive, it applies directly in every member state without national transposition. Where a financial entity also falls under NIS2, DORA is treated as the sector-specific law that takes precedence on these topics.</p>

      <h2 id="five-pillars">The Five Pillars of DORA</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Pillar</strong></div>
          <div class="table-cell"><strong>What it requires</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">ICT risk management</div>
          <div class="table-cell">A documented framework to identify, protect against, detect, respond to and learn from ICT risks</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Incident management and reporting</div>
          <div class="table-cell">Classify ICT incidents and report major ones to regulators on strict deadlines</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Digital operational resilience testing</div>
          <div class="table-cell">Regular testing, plus threat-led penetration testing for larger or systemic firms</div>
        </div>
        <div class="table-row">
          <div class="table-cell">ICT third-party risk</div>
          <div class="table-cell">Manage risk from technology suppliers, keep a register of contracts, and oversee critical providers</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Information sharing</div>
          <div class="table-cell">Voluntary exchange of cyber threat intelligence within trusted financial communities</div>
        </div>
      </div>

      <h2 id="where-threat-intel-fits">Where DORA Expects Threat Intelligence</h2>

      <p>Several articles in the ICT risk management chapter assume that a firm looks outward, not just at its own systems:</p>

      <h3>Article 8: Identification</h3>
      <p>Financial entities must identify all sources of ICT risk on a continuous basis. Leaked employee credentials, exposed customer data and access to your network being offered for sale are external sources of ICT risk that only show up outside your perimeter.</p>

      <h3>Article 10: Detection</h3>
      <p>Firms need mechanisms to promptly detect anomalous activities. A stealer log containing an employee's VPN login, or your domain appearing on a ransomware leak site, is often the first sign that something is wrong.</p>

      <h3>Article 13: Learning and evolving</h3>
      <p>DORA requires firms to have the capabilities and staff to gather information on vulnerabilities and cyber threats, and on ICT-related incidents, particularly cyber attacks, and to analyse their likely impact. This is a direct requirement for a threat intelligence function.</p>

      <h3>Article 45: Information sharing</h3>
      <p>Financial entities may share indicators of compromise, attacker tactics, alerts and configuration tools with each other in trusted communities, subject to confidentiality, GDPR and competition rules. They must tell their competent authority when they join or leave such an arrangement. Dark web findings, such as a credential dump targeting several banks, are exactly the kind of intelligence these communities exchange.</p>

      <h2 id="mapping">Mapping Dark Web Monitoring to DORA Articles</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>DORA area</strong></div>
          <div class="table-cell"><strong>What dark web monitoring provides</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 8 Identification</div>
          <div class="table-cell">Continuous discovery of leaked credentials, exposed data, typosquat domains and brand impersonation</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 10 Detection</div>
          <div class="table-cell">Alerts when employee or customer data appears in stealer logs, forums or leak sites</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 13 Learning and evolving</div>
          <div class="table-cell">Intelligence on threat actors, ransomware groups and fraud campaigns targeting the financial sector</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 17–19 Incident management and reporting</div>
          <div class="table-cell">Earlier awareness of incidents and evidence of data exposure to support classification and reports</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 26 Threat-led penetration testing</div>
          <div class="table-cell">Real attacker intelligence to shape realistic test scenarios</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 28 ICT third-party risk</div>
          <div class="table-cell">Visibility into credential leaks and breaches affecting your technology suppliers</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Art. 45 Information sharing</div>
          <div class="table-cell">Shareable indicators and findings for ISACs and other trusted communities</div>
        </div>
      </div>

      <h2 id="incident-reporting">Incident Reporting: Why Early Detection Matters</h2>

      <p>Under the ESAs' technical standards, once a financial entity classifies an incident as major it has tight deadlines:</p>

      <ol>
        <li><strong>Initial notification</strong> within 4 hours of classifying the incident as major, and no later than 24 hours after becoming aware of it.</li>
        <li><strong>Intermediate report</strong> within 72 hours of the initial notification.</li>
        <li><strong>Final report</strong> within one month of the intermediate report.</li>
      </ol>

      <p>Those clocks start from awareness and classification. A firm that only learns about a breach when customer data is posted on a leak site, weeks after the intrusion, is already far behind. Dark web monitoring shortens that gap: an alert that your domain is on a ransomware group's site, or that a database containing your customers' records is being sold, can trigger classification much earlier.</p>

      <p>DORA also allows firms to voluntarily notify their competent authority of significant cyber threats that have not yet caused an incident. Credible dark web intelligence, such as network access to your organisation offered for sale, is a good example of a threat worth flagging.</p>

      <div class="dt-callout dt-callout--warning">
        <div class="dt-callout__title">Evidence counts</div>
        <p>When a leak site claims to hold your data, supervisors will want to know what was taken and how you assessed it. Monitoring that captures listing dates, samples and context gives your incident team the evidence it needs for accurate reports.</p>
      </div>

      <h2 id="third-party-risk">Third-Party Risk and Critical ICT Providers</h2>

      <p>DORA makes financial firms responsible for the ICT risk introduced by their suppliers. They must keep a register of information covering all ICT third-party contracts and monitor those relationships throughout their lifecycle.</p>

      <p>DORA also created EU-level oversight of the most important suppliers. Between April and November 2025 the European Supervisory Authorities designated 19 critical ICT third-party providers, and published the list on 18 November 2025. These providers are now overseen directly at EU level, with a lead overseer assigned to each.</p>

      <p>For your own supply chain, dark web monitoring helps answer questions a contract cannot:</p>
      <ul>
        <li>Have any of our IT providers or outsourcers had employee credentials leaked?</li>
        <li>Is a supplier listed on a ransomware leak site?</li>
        <li>Is data we shared with a vendor now being sold?</li>
      </ul>

      <p>Ransomware groups increasingly attack service providers to reach their clients, so supplier exposure is a direct risk to you. See our <a href="/blog/dark-web-monitoring-as-part-of-your-third-party-risk-management-programme">guide to dark web monitoring in third-party risk management</a>.</p>

      <h2 id="tlpt">Threat-Led Penetration Testing</h2>

      <p>Larger and systemically important financial entities must carry out threat-led penetration testing (TLPT) at least every three years. TLPT follows the approach of the TIBER-EU framework: before the red team tests anything, a threat intelligence phase identifies which attackers are likely to target the firm and how.</p>

      <p>Dark web intelligence makes that phase realistic. It shows which of your credentials are already exposed, which access brokers are advertising financial-sector targets, and which ransomware groups are active against similar firms. Test scenarios built on that evidence reflect real attackers rather than generic assumptions.</p>

      <h2 id="building-the-program">Building a DORA-Aligned Monitoring Program</h2>

      <ol>
        <li><strong>Define what to watch.</strong> Domains, executive and employee emails, customer identifiers, brand names, IP ranges, and key suppliers from your register of information.</li>
        <li><strong>Connect alerts to your incident process.</strong> Make sure a high-severity dark web alert feeds into the same classification workflow used for DORA reporting.</li>
        <li><strong>Document decisions.</strong> Record how each significant finding was assessed and what action followed. Supervisors expect evidence, not just tools.</li>
        <li><strong>Include suppliers.</strong> Extend monitoring to critical ICT providers and outsourcers, and agree how you will notify them.</li>
        <li><strong>Feed testing and sharing.</strong> Use findings in TLPT threat intelligence and, where appropriate, share indicators through your Article 45 arrangements.</li>
        <li><strong>Report to the board.</strong> DORA makes the management body ultimately responsible for ICT risk. Summarise exposure trends in board reporting.</li>
      </ol>

      <p>DarkThreat helps financial firms monitor stealer logs, forums, Telegram channels and ransomware leak sites for exposure of their domains, staff, customers and suppliers. Learn more on our <a href="/industries/financial-services">financial services page</a> or see <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>DORA has applied since 17 January 2025 to around 20 types of EU financial entity.</li>
        <li>Articles 8, 10 and 13 require continuous risk identification, prompt detection and threat intelligence capability.</li>
        <li>Major incidents must be reported within 4 hours of classification, so earlier detection matters.</li>
        <li>Firms remain responsible for supplier risk, and 19 critical ICT providers are now under EU oversight.</li>
        <li>Dark web monitoring supports detection, reporting evidence, TLPT intelligence, third-party risk and information sharing.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Does DORA explicitly require dark web monitoring?</h3>
      <p>No. DORA is technology-neutral and does not name specific tools. It does require continuous identification of ICT risk, threat intelligence gathering and prompt detection, and dark web monitoring is one practical way to meet those requirements for external threats.</p>

      <h3>Who does DORA apply to?</h3>
      <p>It covers around 20 types of EU financial entity, including banks, payment and e-money institutions, investment firms, insurers, crypto-asset service providers and trading venues, plus critical ICT third-party providers designated for EU oversight.</p>

      <h3>How does DORA relate to NIS2?</h3>
      <p>For financial entities covered by both, DORA acts as the sector-specific law and takes precedence on ICT risk management and incident reporting. Non-financial companies are more likely to fall under NIS2.</p>

      <h3>Can dark web findings trigger a DORA incident report?</h3>
      <p>They can trigger an investigation that leads to classification. If the investigation confirms a major ICT-related incident, the reporting deadlines apply. Credible threats that have not yet caused an incident can be reported voluntarily.</p>

      <h3>Should we share dark web findings with other banks?</h3>
      <p>DORA encourages sharing cyber threat intelligence within trusted communities under Article 45, provided confidentiality, data protection and competition rules are respected, and your competent authority is notified of your participation.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/dark-web-monitoring-for-european-businesses-under-nis2">Dark Web Monitoring for European Businesses Under NIS2</a></li>
        <li><a href="/blog/cyber-resilience-act-dark-web-intelligence-requirements-for-eu-businesses">Cyber Resilience Act: Dark Web Intelligence Requirements for EU Businesses</a></li>
        <li><a href="/blog/dark-web-threat-intelligence-for-financial-services-ciso-teams">Dark Web Threat Intelligence for Financial Services CISO Teams</a></li>
        <li><a href="/blog/dark-web-monitoring-as-part-of-your-third-party-risk-management-programme">Dark Web Monitoring as Part of Your Third-Party Risk Management Programme</a></li>
        <li><a href="/blog/gdpr-breach-notification-and-dark-web-monitoring-a-compliance-guide">GDPR Breach Notification and Dark Web Monitoring: A Compliance Guide</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://www.springlex.eu/en/packages/dora/dora-regulation/article-45/" target="_blank" rel="noopener noreferrer">DORA Regulation (EU) 2022/2554, Article 45: Information-sharing arrangements</a></li>
        <li><a href="https://www.morganlewis.com/blogs/sourcingatmorganlewis/2024/08/preparing-for-dora-esas-publish-incident-reporting-requirements" target="_blank" rel="noopener noreferrer">Morgan Lewis: Preparing for DORA, ESAs publish incident reporting requirements</a></li>
        <li><a href="https://www.financemagnates.com/cryptocurrency/eu-regulators-advance-third-party-ict-oversight-under-dora-and-reiterate-crypto-warnings/" target="_blank" rel="noopener noreferrer">Finance Magnates: EU regulators advance third-party ICT oversight under DORA</a></li>
        <li><a href="https://www.eiopa.europa.eu/european-supervisory-authorities-designate-critical-ict-third-party-providers-under-digital-2025-11-18_ga" target="_blank" rel="noopener noreferrer">EIOPA: European Supervisory Authorities designate critical ICT third-party providers</a></li>
        <li><a href="https://www.nccgroup.com/how-cyber-threat-intelligence-enhances-dora-compliance-efforts/" target="_blank" rel="noopener noreferrer">NCC Group: How cyber threat intelligence enhances DORA compliance efforts</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
