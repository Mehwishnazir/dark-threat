import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const sensitiveDataCategoriesMostCommonlyLeakedOnDarkWeb: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dw-006",
  slug: "sensitive-data-categories-most-commonly-leaked-on-dark-web",
  title: "Sensitive Data Categories Most Commonly Leaked on Dark Web",
  excerpt: "Discover the sensitive data categories most commonly leaked on dark web PII PHI source code credentials and financial data Learn how to detect each category systematically",
  featuredImage: "/images/blog/sensitive-data-categories-most-commonly-leaked-on-dark-web.jpg",
  category: "Threat Intelligence",
  publishDate: "June 30, 2026",
  readingTime: "14 min read",
  author: "Dr. Ayaan Rahman",

  metaTitle: "Sensitive Data Categories Most Commonly Leaked on Dark Web",
  metaDescription: "Discover the sensitive data categories most commonly leaked on dark web PII PHI source code credentials and financial data Learn how to detect each category systematically",

  tableOfContents: [
    {
      "id": "introduction",
      "title": "Introduction"
    },
    {
      "id": "pii-personal-identifiable-information",
      "title": "PII: The Dark Web’s Most Liquid Asset"
    },
    {
      "id": "phi-healthcare-data",
      "title": "PHI: Healthcare Data’s Double Extortion Risk"
    },
    {
      "id": "source-code-intellectual-property",
      "title": "Source Code and Intellectual Property: The RDP of the Dark Web"
    },
    {
      "id": "credentials-and-secrets",
      "title": "Credentials, API Keys, and Configuration Secrets"
    },
    {
      "id": "cloud-storage-and-backup-exposures",
      "title": "Cloud Storage and Backup File Exposures"
    },
    {
      "id": "financial-and-payment-card-data",
      "title": "Financial and Payment Card Data"
    },
    {
      "id": "internal-communications-legal-documents",
      "title": "Internal Communications and Legal Documents"
    },
    {
      "id": "how-darkthreat-addresses-this",
      "title": "How DarkThreat.AI Approaches Sensitive Data Leak Detection"
    },
    {
      "id": "related-resources",
      "title": "Related Resources"
    },
    {
      "id": "conclusion",
      "title": "Conclusion"
    }
  ],

  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <h2 id="introduction">Introduction</h2>
      <p>In April 2024, a single post on a successor forum to BreachForums offered access to a corporate database containing over 22 million unique email addresses, full names, and hashed passwords. The asking price was \$4,500 in Monero. What made this dump particularly damaging was not the volume, but the sensitivity: alongside the credential data, the archive contained employee passport scans and internal Slack message exports. This is not an isolated incident. Across ransomware leak sites like LockBit's portal, ALPHV/BlackCat's data leak site, and Telegram channels dedicated to data trading, the categories of data exposed by organizations continue to proliferate. Understanding the <strong>sensitive data categories most commonly leaked on dark web</strong> is the first step in building an effective data leak detection program. This article is written for CISOs, SOC analysts, and data governance leads who need to know exactly what types of data appear in dark web leaks, where they surface, and how to monitor for them systematically.</p>
      <p>We will break down the specific data categories—from PII and PHI to source code and configuration secrets—that threat actors target and trade. We will map each category to the dark web infrastructure where it appears, the tactics used to exfiltrate it, and how an advanced <a href="/blog/what-is-data-leak-detection">data leak detection</a> platform can identify exposure before it leads to regulatory fines or reputational collapse.</p>

      <h2 id="pii-personal-identifiable-information">PII: The Dark Web’s Most Liquid Asset</h2>
      <p>Personally Identifiable Information (PII) remains the most traded category of leaked data across dark web marketplaces and forums. The IBM Cost of a Data Breach Report 2024 pegs the average per-record cost of a PII breach at \$165. When a database containing hundreds of thousands of records appears on a leak site, the financial and compliance implications for the originating organization are immediate.</p>

      <h3>What Specific PII Data Points Are Most Commonly Leaked?</h3>
      <p>The most exposed PII categories are full names, email addresses, phone numbers, physical addresses, dates of birth, and national identification numbers (such as Social Security Numbers in the US or Aadhaar numbers in India). A single dump from a compromised e-commerce platform can contain all of these fields for millions of customers.</p>

      <ul>
        <li><strong>Email addresses and plaintext passwords:</strong> These are the most commonly leaked PII combination. They appear in credential stuffing lists compiled from stealer malware logs sold on Russian Market or the XSS.is forum.</li>
        <li><strong>Government-issued ID numbers:</strong> SSNs, passport numbers, and driver’s license numbers appear in dumps from financial services and government contractors. These fetch a premium because they enable identity theft and synthetic identity fraud.</li>
        <li><strong>Financial account details:</strong> Bank account numbers, routing numbers, and credit card data with CVV2 codes are sold in structured formats on carding shops and private Telegram channels. Ransomware groups like Cl0p frequently include financial documents in their leak-site postings.</li>
      </ul>

      <blockquote>
        According to the Identity Theft Resource Center (ITRC) 2024 Annual Data Breach Report, 43% of all confirmed data exposure events involved the compromise of Social Security Numbers or other national identifiers, making this sub-category the highest-risk data class for US-based organizations.
      </blockquote>

      <h2 id="phi-healthcare-data">PHI: Healthcare Data’s Double Extortion Risk</h2>
      <p>Protected Health Information (PHI) is a high-value, high-consequence category of leaked data. Under HIPAA, a single PHI exposure event of 500 or more records triggers mandatory notification to the HHS and media outlets. Ransomware groups have targeted healthcare organizations with increasing precision, knowing that the operational disruption to patient care creates pressure to pay, and that the data itself carries exfiltration leverage.</p>

      <h3>Which PHI Fields Appear Most Frequently on Ransomware Leak Sites?</h3>
      <p>The most common PHI elements leaked include medical record numbers, diagnosis codes (ICD-10), treatment histories, insurance policy IDs, and physician notes. Play Ransomware and BlackCat/ALPHV have both posted sample archives from healthcare victims that include patient intake forms and lab results.</p>

      <ul>
        <li><strong>Medical histories and diagnosis records:</strong> These are sensitive beyond HIPAA—they expose intimate health details that cannot be changed, unlike a password or credit card number. Their exposure creates ongoing blackmail risk for individuals.</li>
        <li><strong>Health insurance subscriber data:</strong> Insurance IDs combined with SSNs are a goldmine for medical identity theft, where fraudsters use stolen PHI to obtain treatment, surgery, or prescription drugs under another person’s coverage.</li>
        <li><strong>Clinical trial participant data:</strong> Leaked clinical trial data from pharmaceutical companies has been posted on forums like Exploit.in. This data includes patient consent forms, adverse event reports, and unblinded trial results, carrying both regulatory and competitive implications.</li>
      </ul>

      <p>Healthcare organizations must prioritize <a href="/blog/pii-data-leak-detection-gdpr-requirements">PII and PHI data leak detection</a> as a core compliance capability, not merely a security precaution.</p>

      <h2 id="source-code-intellectual-property">Source Code and Intellectual Property: The RDP of the Dark Web</h2>
      <p>Source code leaks have become one of the most strategically damaging categories of data exposure. Threat actors exfiltrate proprietary source code during ransomware incidents and post it on leak sites to maximize pressure on victims. In 2023 and 2024 alone, leaks from major technology firms, game studios, and SaaS providers appeared on ransomware portals and code-sharing platforms misconfigured to be publicly accessible.</p>

      <h3>What Types of Source Code Are Leaked and Where Do They Appear?</h3>
      <p>The most common source code leaks include web application code, mobile app codebases, API endpoints, proprietary algorithms, and internal tooling. These frequently surface on ransomware leak sites as part of a double extortion tactic, but also appear on paste sites like Pastebin and on Telegram channels dedicated to data dumping.</p>

      <ul>
        <li><strong>Web application and API source code:</strong> This is the most frequently leaked category because it is the most accessible during a network intrusion. Attackers target internal repositories like GitLab and Bitbucket instances, exfiltrating entire repositories. MITRE ATT&amp;CK technique T1213 (Data from Information Repositories) describes this exact tactic.</li>
        <li><strong>Proprietary algorithms and trade secrets:</strong> In sectors like autonomous vehicles, financial trading, and semiconductor design, source code leaks represent an existential competitive risk. The accidental exposure of a proprietary AI model’s architecture on a public code repository has real market consequences.</li>
        <li><strong>CI/CD pipeline configuration and deployment scripts:</strong> These are particularly dangerous because they often contain hardcoded secrets, API keys, and cloud service credentials. Their exposure on a leak site effectively hands attackers the keys to the production environment.</li>
      </ul>

      <blockquote>
        Mandiant’s M-Trends 2024 report found that intellectual property theft represented 27% of all data exfiltration motives attributed to state-sponsored threat actors, with source code and engineering data being the primary targets in 61% of those cases.
      </blockquote>

      <h2 id="credentials-and-secrets">Credentials, API Keys, and Configuration Secrets</h2>
      <p>Credential leaks occupy a unique position on the dark web because they are both a commodity and a tool. Stolen credentials—whether from infostealer malware, credential stuffing attacks, or corporate database dumps—are traded on forums, Telegram channels, and automated shopfronts. API keys and cloud service secrets, when leaked, often go undetected by traditional DLP systems.</p>

      <h3>What Makes Credential Leaks So Persistent and Difficult to Detect?</h3>
      <p>Credential leaks are persistent because credentials are static assets that remain valid until explicitly rotated. A single credential compromise can remain exploitable for months. The dark web infrastructure for trading them is vast and automated, with channels on Telegram offering real-time feeds of newly stolen credentials.</p>

      <ul>
        <li><strong>Stealer malware logs:</strong> These are collected by malware families like RedLine, Vidar, Raccoon Stealer, and LummaC2. The logs contain browser-saved passwords, session cookies, cryptocurrency wallet keys, and auto-fill profiles. They are sold in bulk on Russian Market and traded in private Telegram groups.</li>
        <li><strong>Corporate VPN and RDP credentials:</strong> These appear on ransomware access broker forums like RAMP and XSS.is. Threat actors specifically seek out domain admin credentials and VPN logins because they enable lateral movement and data exfiltration. MITRE ATT&amp;CK technique T1078 (Valid Accounts) covers this initial access vector.</li>
        <li><strong>Cloud API keys and service account tokens:</strong> Leaked AWS secret keys, Azure service principal secrets, and Google Cloud service account keys are frequently found in publicly exposed configuration files on GitHub and in misconfigured cloud storage buckets. Tools like TruffleHog detect these, but detection is often only after the exposure has already been indexed by search engines.</li>
        <li><strong>Database connection strings and environment variables:</strong> These are commonly embedded in .env files, Docker Compose configurations, and application properties files. When these files are posted in a database dump or on a paste site, they grant direct access to backend databases and message queues.</li>
      </ul>

      <p>The relationship between <a href="/blog/how-credential-leaks-lead-to-ransomware">credential leaks and ransomware</a> is well established: in over 70% of ransomware incidents involving data exfiltration, the initial access vector was a compromised credential.</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Data Category</strong></div>
          <div class="table-cell"><strong>Common Dark Web Locations</strong></div>
          <div class="table-cell"><strong>Typical Threat Actors</strong></div>
          <div class="table-cell"><strong>Primary Risk</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">PII (Names, SSNs, DOB)</div>
          <div class="table-cell">BreachForums, Russian Market, Telegram</div>
          <div class="table-cell">Data brokers, identity theft rings</div>
          <div class="table-cell">Identity fraud, regulatory fines (GDPR, CCPA)</div>
        </div>
        <div class="table-row">
          <div class="table-cell">PHI (Medical records, insurance)</div>
          <div class="table-cell">Ransomware leak sites, private forums</div>
          <div class="table-cell">Ransomware groups (Play, ALPHV/BlackCat, LockBit)</div>
          <div class="table-cell">HIPAA fines, medical identity theft, extortion</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Source code and IP</div>
          <div class="table-cell">Ransomware leak sites, paste sites, public Git repos</div>
          <div class="table-cell">Ransomware groups, state-sponsored APTs</div>
          <div class="table-cell">Competitive disadvantage, IP theft, trade secrets exposure</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Credentials and API secrets</div>
          <div class="table-cell">Telegram, Russian Market, XSS.is, RAMP</div>
          <div class="table-cell">Access brokers, stealer malware operators</div>
          <div class="table-cell">Account takeover, lateral movement, infrastructure takeover</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Cloud storage and backup files</div>
          <div class="table-cell">Public S3 buckets, misconfigured Azure Blob, Telegram</div>
          <div class="table-cell">Opportunistic threat actors, hacktivists</div>
          <div class="table-cell">Data loss, ransomware backup encryption, compliance exposure</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Financial and payment data</div>
          <div class="table-cell">Carding shops, Telegram, private forums</div>
          <div class="table-cell">Carders, ransomware groups (Cl0p, Royal)</div>
          <div class="table-cell">Financial fraud, PCI DSS non-compliance, chargeback costs</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Internal communications and legal documents</div>
          <div class="table-cell">Ransomware leak sites, WikiLeaks-style platforms</div>
          <div class="table-cell">Ransomware groups, hacktivists, insider threats</div>
          <div class="table-cell">Reputational damage, litigation, business partner mistrust</div>
        </div>
      </div>

      <h2 id="cloud-storage-and-backup-exposures">Cloud Storage and Backup File Exposures</h2>
      <p>Misconfigured cloud storage infrastructure is one of the most common mechanisms of accidental data leaks. When an S3 bucket, Azure Blob container, or Google Cloud Storage bucket is set to public read access, the contents become discoverable by automated scanners and search engines. These exposures are not the result of an attacker breaking in—they are the result of a configuration error that makes data publicly accessible.</p>

      <h3>What Types of Data End Up in Misconfigured Cloud Storage?</h3>
      <p>The data found in leaked cloud storage buckets spans every category on this list. Backups are particularly dangerous because they are complete, unredacted copies of production data including database dumps, file shares, and application logs.</p>

      <ul>
        <li><strong>Full database backups:</strong> These contain every table, including user profiles, transactions, and internal notes. A single misconfigured backup bucket containing a MySQL dump from a healthcare application can expose millions of PHI records.</li>
        <li><strong>Log files and debugging artifacts:</strong> Application debug logs often contain full SQL queries, user session tokens, and API payloads. These are rich sources of sensitive data that security teams rarely consider as an exposure vector.</li>
        <li><strong>Configuration and infrastructure files:</strong> Terraform state files, CloudFormation templates, and Kubernetes manifest files contain the entire blueprint of an organization's cloud infrastructure, including VPC IDs, subnet CIDRs, and security group rules. Their exposure facilitates targeted attacks.</li>
      </ul>

      <blockquote>
        The 2024 Verizon Data Breach Investigations Report (DBIR) noted that cloud asset misconfigurations were the root cause in 22% of all data exposure events involving cloud-based storage, making it the single most common misconfiguration-driven exposure path.
      </blockquote>

      <p>Organizations should extend their <a href="/blog/data-leak-detection-vs-osint">data leak detection beyond OSINT</a> techniques to include continuous scanning of cloud storage permutations and public code repositories for their organization's data patterns.</p>

      <h2 id="financial-and-payment-card-data">Financial and Payment Card Data</h2>
      <p>Financial data—including credit card numbers, bank account details, transaction records, and payment processor credentials—commands a premium on the dark web because it can be immediately monetized. Ransomware groups like Cl0p and Royal frequently target financial services firms and payment processors specifically for this data category.</p>

      <h3>Where Does Financial Data Surface After a Breach?</h3>
      <p>Financial data follows a distinct lifecycle after exfiltration. It first appears as a full dump on a ransomware leak site as proof of exfiltration. Within 48 to 72 hours, the structured payment data is extracted and sold on carding platforms and Telegram channels.</p>

      <ul>
        <li><strong>Full card-not-present (CNP) data:</strong> This includes the primary account number (PAN), expiration date, CVV2 code, and sometimes the cardholder’s billing address and IP address. This data is sold for between \$5 and \$30 per record depending on card type, issuing bank, and verification level.</li>
        <li><strong>Bank account and routing numbers:</strong> These appear in business email compromise (BEC) exfiltration events and in dumps from payroll processors. They are used for ACH fraud and wire transfer diversion.</li>
        <li><strong>Cryptocurrency exchange account data:</strong> Leaked Know Your Customer (KYC) documentation from cryptocurrency exchanges—including passport photos, proof of address, and selfie verifications—is traded on forums and used for account takeover and exchange withdrawal fraud.</li>
      </ul>

      <p>Monitoring for this data category requires specialized <a href="/blog/real-time-dark-web-monitoring-what-it-means">real-time dark web monitoring</a> that tracks carding shops, Telegram channels, and ransomware leak sites concurrently.</p>

      <h2 id="internal-communications-legal-documents">Internal Communications and Legal Documents</h2>
      <p>Internal communications—including email threads, Slack messages, Microsoft Teams transcripts, and legal correspondence—are a frequently overlooked but highly damaging category of leaked data. Ransomware groups know that exposing internal communications can cause disproportionate reputational harm, regulatory scrutiny, and litigation risk.</p>

      <h3>Why Do Internal Communications Appear on Leak Sites?</h3>
      <p>Ransomware groups deliberately exfiltrate email archives and collaboration tool databases because they contain the most candid and strategically valuable information: negotiations, strategic plans, partnership discussions, and employee disciplinary matters.</p>

      <ul>
        <li><strong>Executive email archives:</strong> These contain confidential board communications, merger and acquisition discussions, and financial forecasts. Their publication can impact stock price and business relationships.</li>
        <li><strong>Legal correspondence and settlement agreements:</strong> Leaked attorney-client privileged documents or pending settlement terms create immediate legal jeopardy and privilege waiver concerns.</li>
        <li><strong>HR and employee relations data:</strong> Salary data, performance reviews, internal investigations, and termination letters are commonly found in ransomware leak-site archives. Their exposure damages employee trust and can trigger class-action litigation.</li>
      </ul>

      <p>Data leak detection must cover the unstructured data within email and collaboration platforms, not just structured database fields. DarkThreat.AI's platform monitors for patterns indicative of internal communication archives across ransomware leak sites and paste sites.</p>

      <h2 id="how-darkthreat-addresses-this">How DarkThreat.AI Approaches Sensitive Data Leak Detection</h2>
      <p>DarkThreat.AI continuously indexes and classifies data across the full spectrum of dark web infrastructure: ransomware .onion leak sites (LockBit, ALPHV, BlackBasta, Akira, Hunters International), paste sites (Pastebin, Ghostbin, Rentry), Telegram channels used for data trading, deep web forums (BreachForums successors, XSS.is, Exploit.in, RAMP), and public code repositories. The platform uses content fingerprinting against organization-specific data patterns—not just keywords—to detect leaked PII, PHI, source code, credentials, and financial data. When a match is identified, DarkThreat.AI enriches the alert with severity scoring, data category classification, and context on the posting source, enabling SOC teams and legal/compliance leads to prioritize remediation based on the specific <strong>sensitive data categories most commonly leaked on dark web</strong> that are relevant to their risk profile.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/what-is-data-leak-detection">What Is Data Leak Detection?</a> — Foundational overview of how data leak detection works across dark web, paste sites, and leak portals, including the data categories covered.</li>
        <li><a href="/blog/ransomware-groups-leak-sites-double-extortion">Ransomware Groups and Their Leak Sites: The Double Extortion Playbook</a> — Analysis of named ransomware groups and their specific leak-site infrastructure, with case studies of data category exposure during extortion campaigns.</li>
        <li><a href="/blog/pii-data-leak-detection-gdpr-requirements">PII Data Leak Detection and GDPR Requirements</a> — Mapping specific PII data categories to GDPR Article 4(1) definitions and breach notification timelines under Article 33.</li>
        <li><a href="/blog/data-leak-detection-vs-dlp">Data Leak Detection vs DLP: What is the Difference?</a> — Comparison of the coverage limitations of traditional DLP for data already outside the perimeter versus dark web detection techniques.</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>The <strong>sensitive data categories most commonly leaked on dark web</strong> span far beyond the PII that dominates breach notification headlines. Source code, API secrets, PHI, cloud storage backups, internal communications, and financial data all appear regularly on ransomware leak sites, paste sites, and dark web marketplaces. Each category carries distinct regulatory, financial, and reputational consequences. The organizations that successfully mitigate these exposures are those that have moved beyond reactive breach notification to continuous, category-specific data leak detection across the full dark web attack surface.</p>
      <p>As ransomware groups refine their exfiltration tactics and stealer malware logs become more granular, the diversity of data categories appearing on leak sites will only expand. The intelligence layer that separates a proactive security posture from a reactive one is the ability to detect exactly what data category has been exposed, where it is being traded, and how quickly it can be remediated. Tools like DarkThreat.AI provide this capability by combining broad coverage with granular classification, giving organizations the visibility they need to stay ahead of the leak cycle.</p>

      <!-- META: Discover the sensitive data categories most commonly leaked on dark web: PII, PHI, source code, credentials, and financial data. Learn how to detect each category systematically. -->
      
    </article>
  </div>
</div>
`,
};
