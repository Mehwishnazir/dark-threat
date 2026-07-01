import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const leakedCredentialsFromMajor20242025BreachesStillInCirculation: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dw-044",
  slug: "leaked-credentials-from-major-2024-2025-breaches-still-in-circulation",
  title: "Leaked Credentials from Major 2024-2025 Breaches Still in Circulation",
  excerpt: "Explore why leaked credentials from major 2024-2025 breaches like Change Healthcare and National Public Data still circulate on dark web markets and how credential leak detection must evolve to catch persistent exposures for SOC teams and CISOs.",
  featuredImage: "/dark-threat-6.webp",
  category: "Threat Intelligence",
  publishDate: "June 30, 2026",
  readingTime: "13 min read",
  author: "Dr. Ayaan Rahman",

  metaTitle: "Leaked Credentials from Major 2024-2025 Breaches Still in Circulation",
  metaDescription: "Explore why leaked credentials from major 2024-2025 breaches like Change Healthcare and National Public Data still circulate on dark web markets and how credential leak detection must evolve to catch persistent exposures for SOC teams and CISOs.",

  tableOfContents: [
    {
      "id": "introduction",
      "title": "Introduction"
    },
    {
      "id": "why-credentials-survive-breach-lifecycle",
      "title": "Why Stolen Credentials Have a Longer Shelf Life Than You Think"
    },
    {
      "id": "the-biggest-credential-leaks-2024-2025",
      "title": "The Most Persistent Credential Leaks from 2024–2025 Breaches"
    },
    {
      "id": "how-leaked-credentials-survive-and-weaponise",
      "title": "How 2024–2025 Leaked Credentials Are Still Being Used to Attack"
    },
    {
      "id": "mitre-attack-mapping-for-credential-reuse",
      "title": "Mapping the Persistent Credential Threat to MITRE ATT&CK"
    },
    {
      "id": "credential-leak-detection-strategies-for-stale-breaches",
      "title": "What Credential Leak Detection Should Cover for Persistent Breaches"
    },
    {
      "id": "how-darkthreat-addresses-persistent-credential-exposures",
      "title": "How DarkThreat.AI Approaches Persistent Credential Exposures"
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

      <p>When the <strong>Change Healthcare breach</strong> was disclosed in early 2024, the immediate focus fell on disrupted pharmacy services and ransomware negotiations. What cybersecurity teams are still grappling with — months later — is the <strong>credential leak detection</strong> fallout: the stolen employee credentials, vendor login pairs, and API keys that continue to circulate on dark web marketplaces and Telegram channels long after the headlines faded. These are not remnants; they are active operational assets in the hands of initial access brokers who trade them repeatedly across multiple forums.</p>

      <p>This article examines the persistent lifecycle of <strong>leaked credentials from the most significant 2024–2025 breaches</strong>, tracing their path from initial compromise through infostealer log dumps, combo list curation, and eventual weaponisation in credential stuffing campaigns. Written for SOC analysts, identity threat intelligence teams, and CISOs evaluating detection strategy, it answers a critical question: <strong>Why do credentials from last year's breaches keep working, and what should you do about it today?</strong></p>

      <h2 id="why-credentials-survive-breach-lifecycle">Why Stolen Credentials Have a Longer Shelf Life Than You Think</h2>

      <p>Organisations typically assume that once a breach is disclosed, affected credentials are rotated and the incident is closed. Data from the underground economy contradicts this assumption. The SpyCloud 2024 Annual Identity Exposure Report found that <strong>68% of exposed credentials from breaches in 2024 were still valid 90 days after initial disclosure</strong>. The reason is not negligence alone — it is the complex, multi-stage distribution pipeline of the stolen credential economy.</p>

      <h3>How Single Breach Exposures Become Multiple Attack Vectors</h3>

      <p>A single breach rarely produces a single credential dump. The attacker or broker extracts the full data set, then parcels it in ways that maximise resale value across different dark web audiences.</p>

      <ul>
        <li><strong>Infostealer log aggregation:</strong> Malware families like <strong>RedLine Stealer</strong> and <strong>Lumma Stealer</strong> vacuum browser-stored credentials from compromised endpoints. These logs, containing credentials from <strong>multiple unrelated sites</strong>, are aggregated into monthly dumps and sold en masse. A credential taken from a 2024 breach may reappear in a 2025 infostealer log if the victim reused that password on a secondary system that later became compromised by stealer malware.</li>
        <li><strong>Combo list accumulation:</strong> Underground marketplaces such as <strong>Russian Market</strong> and <strong>2easy Market</strong> curate "combo lists" that combine credentials from multiple breach sources, deduplicating and verifying them against live services. A credential pair from the 2024 MGM Resorts breach might be verified against Outlook Web Access, VPN portals, and 30+ SaaS platforms before being packaged for credential stuffing buyers.</li>
        <li><strong>Initial Access Broker re-listing:</strong> Forums like <strong>RAMP</strong> and successors to <strong>BreachForums</strong> host IABs who re-test and re-list credentials that fail to sell in the initial wave. If a buyer does not move quickly on a set of VPN credentials, the IAB re-offers them at a lower price weeks later — prolonging the usable lifespan of that leak by months.</li>
      </ul>

      <blockquote>
        68% of exposed credentials from breaches in 2024 were still valid 90 days after disclosure. Source: SpyCloud Annual Identity Exposure Report 2024.
      </blockquote>

      <h2 id="the-biggest-credential-leaks-2024-2025">The Most Persistent Credential Leaks from 2024–2025 Breaches</h2>

      <p>Not all breaches produce credentials with equal staying power. The most persistent leaks share specific characteristics: they involve credentials not immediately forced into password rotation cycles, they target systems with weak MFA adoption, and they contain credentials that users reuse across multiple environments. The following incidents generated credential exposures that remain actively in circulation as of mid-2025.</p>

      <h3>Change Healthcare — The Ransomware Breach That Keeps Feeding IABs</h3>

      <p>The <strong>ALPHV/BlackCat</strong> ransomware attack on Change Healthcare in February 2024 exposed credentials belonging to healthcare providers, insurance processing staff, and IT administrators. While the breach disclosure dominated headlines, the <strong>stolen credential data continued to circulate on dark web marketplaces</strong> for months. Infostealer logs captured during the incident response period — containing credentials for remote access tools and administrative portals — were not accessible to the original attackers at the time of the ransomware deployment. Log aggregators on Telegram channels sold these credentials in weekly batches throughout Q2 and Q3 2024. As of June 2025, verified Change Healthcare-related credentials still appear in combo lists offered on <strong>Exploit.in</strong>.</p>

      <h3>Ticketmaster/Snowflake — The Stealer Log Connection</h3>

      <p>The March 2024 incident involving Ticketmaster's Snowflake instance was not a brute-force attack but a credential theft incident rooted in <strong>infostealer-compromised credentials</strong>. The attacker used credentials harvested by <strong>Vidar</strong> and <strong>META Stealer</strong> from an employee's personal device — credentials that had been circulating in stealer logs for weeks before being used to access the Snowflake tenant. What makes this breach persist in underground markets is the <strong>secondary credential set</strong>: the attacker extracted not only database contents but also API keys and service account credentials that continue to appear in <strong>RisePro</strong> logs sold on criminal forums.</p>

      <h3>National Public Data — The Combo List Goldmine</h3>

      <p>The April 2024 breach of background check aggregator National Public Data (NPD) exposed roughly <strong>2.9 billion records</strong> including social security numbers, names, addresses, and email-password pairs. The NPD dataset was immediately weaponised by <strong>combo list curators</strong>. Unlike credentials from application-specific breaches that may be valid only on one platform, NPD-supplied credentials link real identities to password pairs — making them exceptionally valuable for account takeover campaigns across financial services, healthcare portals, and government systems. These credentials remain for sale on <strong>Telegram credential-selling channels</strong> and <strong>Russian Market</strong> as of Q2 2025, with sellers offering "verified" subsets against major US banking portals.</p>

      <h3>Other Notable Breaches Still Active in Underground Credential Markets</h3>

      <ul>
        <li><strong>AT&T 2024 Data Leak (March 2024):</strong> Customer contact data and encrypted account credentials — the encryption keys were later posted separately on <strong>BreachForums successor</strong>, making the credentials recoverable. Re-sold as "AT&T Fullz" on Telegram channels.</li>
        <li><strong>Dell API Credential Leak (April 2024):</strong> Partner portal credentials obtained via an API abuse — not a traditional data breach. These credentials were marketed specifically to IABs targeting supply chain compromise and remain under active monitoring by <strong>credential leak detection</strong> platforms.</li>
        <li><strong>Luxottica (Ray-Ban, Oakley) Employee Credential Leak (May 2024):</strong> Employee VPN and email credentials from a phishing campaign tracked to <strong>Scattered Spider (UNC3944)</strong>. These credentials were used for initial access and later resold on <strong>RAMP</strong> after the incident was disclosed.</li>
      </ul>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Breach / Incident</strong></div>
          <div class="table-cell"><strong>Credentials Still Circulating?</strong></div>
          <div class="table-cell"><strong>Primary Distribution Channel</strong></div>
          <div class="table-cell"><strong>Detection by Credential Leak Monitoring</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Change Healthcare (Feb 2024)</div>
          <div class="table-cell">Yes — actively traded on Exploit.in and Telegram</div>
          <div class="table-cell">Infostealer logs, IAB re-lists</div>
          <div class="table-cell">Real-time combo list scanning catches re-listings</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Ticketmaster / Snowflake (Mar 2024)</div>
          <div class="table-cell">Yes — API keys and service accounts in Vidar and META Stealer logs</div>
          <div class="table-cell">Stealer malware dumps, automation forums</div>
          <div class="table-cell">Infostealer log ingestion identifies exposed keys</div>
        </div>
        <div class="table-row">
          <div class="table-cell">National Public Data (Apr 2024)</div>
          <div class="table-cell">Yes — 2.9B records, actively verified against banking and healthcare portals</div>
          <div class="table-cell">Combo lists on Russian Market, Telegram</div>
          <div class="table-cell">Domain-wide credential monitoring matches employee emails</div>
        </div>
        <div class="table-row">
          <div class="table-cell">AT&T (Mar 2024)</div>
          <div class="table-cell">Yes — encrypted credentials with published decryption keys</div>
          <div class="table-cell">BreachForums successor, Telegram "Fullz" dealers</div>
          <div class="table-cell">Credential alerting detects matching account pairs</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Dell API Portal (Apr 2024)</div>
          <div class="table-cell">Yes — IAB-targeted resale on RAMP</div>
          <div class="table-cell">IAB forums, supply chain marketplaces</div>
          <div class="table-cell">API-specific monitoring for exposed keys and tokens</div>
        </div>
      </div>

      <h2 id="how-leaked-credentials-survive-and-weaponise">How 2024–2025 Leaked Credentials Are Still Being Used to Attack</h2>

      <p>The lifespan of a leaked credential extends far beyond its initial exposure because the <strong>credential economy</strong> is designed for reuse, not single-sale. Understanding the weaponisation pipeline is essential for <strong>credential leak detection</strong> teams trying to determine which exposures require immediate response versus which can be deprioritised.</p>

      <h3>Step 1: Verification Against Live Services</h3>

      <p>Credential buyers do not purchase raw dumps. They purchase "verified" or "cracked" credentials. Sellers on <strong>2easy Market</strong> and Telegram channels use automated verification scripts — often called "checkers" — that test credential pairs against popular services including Microsoft 365, VPN gateways, Citrix portals, AWS consoles, and banking platforms. A credential from the Change Healthcare breach that has been verified against an Outlook Web App login is worth substantially more than an unverified pair. <strong>Credential checking campaigns</strong> run continuously, meaning a credential that failed against Microsoft 365 on the day of a breach may pass verification six months later if the target rotated their password or if the checker targets a different endpoint.</p>

      <h3>Step 2: Re-Sale and Re-Packaging</h3>

      <p>Initial Access Brokers do not limit themselves to a single transaction. After purchasing a set of credentials from a breach dump, an IAB may re-list them on a different forum — for example, <strong>RAMP</strong> — at a lower price point if the high-end buyer market on <strong>Exploit.in</strong> was not interested. This re-listing cycle extends the usable life of credentials by weeks or months. In the case of the <strong>National Public Data</strong> breach, IABs have parcelled the 2.9 billion records into industry-specific subsets (healthcare, finance, education) and sold each subset separately to buyers targeting those verticals.</p>

      <h3>Step 3: Combo List Merging and Credential Stuffing</h3>

      <p>Credential stuffing attackers do not rely on a single breach. They combine credentials from multiple breaches — including 2024 incidents and older data breaches from 2021–2023 — into <strong>massive combo lists</strong>. These lists are run through automated tools against corporate login portals, SaaS applications, and personal accounts. The Verizon 2024 Data Breach Investigations Report found that <strong>credential stuffing attacks account for approximately 40% of all web application breaches</strong>, a figure that has only risen as combo lists grow larger and more comprehensive. The persistence of 2024–2025 credentials is directly tied to their inclusion in these aggregated lists — a credential from the Ticketmaster breach that is combined with a credential from the 2021 LinkedIn leak may succeed against a user who reused their password across both platforms.</p>

      <blockquote>
        Credential stuffing attacks account for approximately 40% of all web application breaches. Source: Verizon Data Breach Investigations Report 2024.
      </blockquote>

      <h2 id="mitre-attack-mapping-for-credential-reuse">Mapping the Persistent Credential Threat to MITRE ATT&CK</h2>

      <p>For threat intelligence teams that operate within the MITRE ATT&CK framework, the <strong>persistent credential reuse from 2024–2025 breaches</strong> maps to several distinct techniques that credential leak detection platforms must monitor.</p>

      <ul>
        <li><strong>T1078.001 — Valid Accounts: Default Accounts:</strong> Credentials from 2024 breaches that were never rotated remain listed under this technique. IABs who sell "verified" corporate credentials effectively provide access via <strong>valid accounts</strong> that the original organisation has not disabled.</li>
        <li><strong>T1110.002 — Password Spraying:</strong> The use of combo lists built from 2024–2025 breaches against corporate Microsoft 365 or VPN login portals constitutes password spraying. Monitoring for this technique requires detection of failed login sequences that correlate with known exposed credential sets.</li>
        <li><strong>T1586.002 — Compromise Accounts: Email Accounts:</strong> Infostealer logs containing email credentials from 2024 breaches are used for business email compromise (BEC) and lateral phishing. Detection requires ingestion of stealer logs and correlation with organisational email domains.</li>
        <li><strong>T1597 — Search Closed Sources:</strong> Threat actors searching dark web credential markets for target-specific credentials — a step that credential leak detection platforms monitor by scanning underground forums, Telegram channels, and combo lists for organisational domain matches.</li>
        <li><strong>T1650 — Acquire Access:</strong> The purchase of verified VPN or remote access credentials from IABs is a direct acquisition of access. The prevalence of 2024–2025 credentials on IAB marketplaces makes this technique relevant long after breach disclosure.</li>
      </ul>

      <h2 id="credential-leak-detection-strategies-for-stale-breaches">What Credential Leak Detection Should Cover for Persistent Breaches</h2>

      <p>The fact that credentials from 2024–2025 breaches remain in circulation means that <strong>credential leak detection</strong> cannot be a one-time scan conducted at the time of breach disclosure. Detection must be continuous, cover multiple distribution channels, and distinguish between newly exposed credentials and re-listings of old data.</p>

      <h3>Continuous Combo List Monitoring</h3>

      <p>Combo lists are the primary vehicle through which old breach credentials are reintroduced to new attackers. Detection platforms must monitor combo lists on forums, marketplaces, and Telegram channels for credential pairs that match organisational domains. The <strong>National Public Data</strong> breach alone produced thousands of credential pairs tied to corporate email addresses across every industry sector. A detection system that scanned once in April 2024 and never revisited would miss the subsequent splitting, verification, and re-listing of those credentials throughout 2024 and into 2025.</p>

      <h3>Infostealer Log Ingestion and Correlation</h3>

      <p>Infostealer logs from families like <strong>RedLine Stealer</strong>, <strong>Lumma Stealer</strong>, and <strong>RisePro</strong> are a primary source of credentials from 2024–2025 breaches that were not part of the initial dump. When a breach victim reuses a password on a second system that later becomes infected by an infostealer, that credential may appear in a log months after the original breach. <strong>Credential leak detection</strong> platforms that ingest stealer logs — and cross-reference them against organisational domain names — can identify these secondary exposures that traditional breach notification services miss.</p>

      <h3>Domain-Wide Exposure Monitoring</h3>

      <p>Organisations that were not directly involved in a 2024–2025 breach may still have employees whose personal credentials were exposed in those incidents. If an employee used their corporate email address to register for a service affected by the change Healthcare breach, and reused that same password on a corporate platform, the exposure represents a direct risk. Domain-wide monitoring — scanning credential leaks for any record containing an organisational email domain, regardless of the source breach — catches these indirect exposures that account-level monitoring overlooks.</p>

      <blockquote>
        The average cost of a data breach reached \$4.88 million in 2024, with credential-related incidents among the most expensive root causes. Source: IBM Cost of a Data Breach Report 2024.
      </blockquote>

      <h2 id="how-darkthreat-addresses-persistent-credential-exposures">How DarkThreat.AI Approaches Persistent Credential Exposures</h2>

      <p>DarkThreat.AI does not treat credential exposures as one-time events. The platform's <strong>credential leak detection</strong> capabilities are built for the reality that credentials from breaches like Change Healthcare, Ticketmaster/Snowflake, and National Public Data will circulate for months or years after initial exposure. DarkThreat.AI maintains <strong>continuous scanning of dark web forums, Telegram channels, combo list marketplaces, and infostealer log repositories</strong>, cross-referencing every exposed credential pair against organisational domains and service endpoints.</p>

      <p>When a credential set from a 2024 breach is re-listed on an IAB forum in 2025, DarkThreat.AI identifies the listing, validates whether the credential pair has been rotated, and issues a severity-graded alert that includes the specific forum where the credential was found, the date of the re-listing, and any verification status attached by the seller. The platform integrates with <strong>SIEM and SOAR tools</strong> for automated response workflows, and its <strong>API-based detection</strong> allows identity and access management teams to feed exposed credential data directly into password reset automation and MFA enforcement systems.</p>

      <h2 id="related-resources">Related Resources</h2>

      <ul>
        <li><a href="/blog/how-credential-leaks-lead-to-ransomware">How Credential Leaks Lead to Ransomware</a> — Explores the direct pipeline from credential exposure to ransomware deployment, including case studies from 2024 incidents.</li>
        <li><a href="/blog/combo-lists-explained-monitoring">Combo Lists Explained: Why Monitoring These Credential Dumps Matters</a> — A technical breakdown of how combo lists are built, verified, and weaponised, with detection guidance for SOC teams.</li>
        <li><a href="/blog/infostealer-logs-explained">Infostealer Logs Explained: The Hidden Credential Threat</a> — Details how stealer malware captures credentials from browser stores, password managers, and VPN clients, and how to monitor for organisational exposure.</li>
        <li><a href="/blog/credential-stuffing-attacks-dark-web-stolen-passwords">Credential Stuffing Attacks: How Dark Web Stolen Passwords Drive Account Takeover</a> — Examines the mechanics of credential stuffing at scale and the role of combo lists in enabling these attacks.</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>

      <p>The assumption that a credential is safe after a breach is disclosed is the most dangerous blind spot in identity security today. The <strong>credential leak detection</strong> evidence from 2024–2025 is clear: credentials from the Change Healthcare, Ticketmaster/Snowflake, and National Public Data breaches — alongside dozens of other incidents — remain actively traded, verified, and weaponised by initial access brokers and credential stuffing actors. The credential lifecycle does not end with a press release; it begins with one.</p>

      <p>As credential theft continues to accelerate through infostealer campaigns, IAB market consolidation, and increasingly automated verification pipelines, organisations must treat every credential exposure as a persistent threat requiring ongoing monitoring — not a historical incident to be closed in a ticketing system. <strong>Credential leak detection</strong> that operates continuously, scans across multiple underground distribution channels, and integrates into existing security workflows is no longer a differentiator; it is the baseline for identity threat intelligence in an era where last year's breach is this year's attack vector.</p>

    </article>
  </div>
</div>

<!-- META: Explore why leaked credentials from major 2024-2025 breaches (Change Healthcare, National Public Data, Ticketmaster) still circulate on dark web markets and how credential leak detection must evolve to catch persistent exposures. -->
`,
};
