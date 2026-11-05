import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const theGentlemenRansomwareANewGroupToWatch: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-002",
  slug: "the-gentlemen-ransomware-a-new-group-to-watch",
  title: "The Gentlemen Ransomware: A New Group to Watch",
  excerpt:
    "The Gentlemen went from an unknown name in mid-2025 to the second most active ransomware operation of 2026. Learn where it came from, how its affiliates break in, what its leaked chats revealed, and which dark web signals warn you first.",
  featuredImage: "/dark-threat-4.webp",
  category: "Threat Intelligence",
  publishDate: "November 5, 2026",
  readingTime: "11 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "The Gentlemen Ransomware: A New Group to Watch",
  metaDescription:
    "The Gentlemen became 2026's second most active ransomware group. See how it started, how affiliates get in, and which dark web signals warn you first.",
  tableOfContents: [
    { id: "what-is-the-gentlemen", title: "What Is The Gentlemen Ransomware?" },
    { id: "origins", title: "From Qilin Affiliate to Rival Brand" },
    { id: "growth", title: "How Fast The Gentlemen Has Grown" },
    { id: "initial-access", title: "How Gentlemen Affiliates Get In" },
    { id: "inside-an-attack", title: "Inside a Gentlemen Attack" },
    { id: "the-leak", title: "What the 2026 Leak Revealed" },
    { id: "who-is-targeted", title: "Who The Gentlemen Targets" },
    { id: "warning-signs", title: "Dark Web Warning Signs to Watch" },
    { id: "defence", title: "How to Defend Against The Gentlemen" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>In the summer of 2025, almost nobody outside a few threat intelligence teams had heard of The Gentlemen. A year later it was the second most active ransomware operation in the world, behind only Qilin, with hundreds of victims across dozens of countries.</p>

      <p>Few ransomware brands have grown that fast, and the reasons say a lot about how the criminal economy works today: an experienced founder who learned the trade inside another gang, an unusually generous deal for affiliates, heavy use of stolen credentials and unpatched firewalls, and even AI coding tools to speed up development. This guide covers what defenders need to know about The Gentlemen and the dark web signals that tend to appear before its attacks.</p>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">#2</div>
          <div class="dt-stat-label">Most active ransomware group of 2026 by victim count, behind Qilin</div>
          <div class="dt-stat-source">Check Point Research, Unit 42</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">90%</div>
          <div class="dt-stat-label">Share of each ransom offered to affiliates, above the usual 70–80%</div>
          <div class="dt-stat-source">Unit 42, Check Point Research</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">750+</div>
          <div class="dt-stat-label">Victims claimed worldwide by August 2026</div>
          <div class="dt-stat-source">Barracuda, via ransomware.live</div>
        </div>
      </div>

      <h2 id="what-is-the-gentlemen">What Is The Gentlemen Ransomware?</h2>

      <p>The Gentlemen is a ransomware-as-a-service (RaaS) operation that uses double extortion: affiliates steal data, encrypt systems, and threaten to publish the stolen files on the group's leak site if the victim does not pay. Microsoft tracks the group as <strong>Storm-2697</strong>, and the threat intelligence firm PRODAFT calls it <strong>Phantom Mantis</strong>.</p>

      <p>Like other RaaS brands, it splits the work. A small core team writes the ransomware, runs the affiliate panel and leak site, and handles payouts. Affiliates find and break into victims. The group operates inside the Russian-speaking cybercrime world and reportedly avoids targets in the Commonwealth of Independent States.</p>

      <h2 id="origins">From Qilin Affiliate to Rival Brand</h2>

      <p>The Gentlemen did not start from scratch. Researchers trace its roots to an affiliate team known as <strong>ArmCorp</strong>, which worked under the Qilin ransomware program in early 2025. Barracuda reports that in July 2025 an ArmCorp operator publicly accused Qilin's administrators of withholding roughly \$48,000 in payouts. Shortly afterwards the team went independent.</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Date</strong></div>
          <div class="table-cell"><strong>Milestone</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">March 2025</div>
          <div class="table-cell">ArmCorp affiliate activity first tracked under Qilin</div>
        </div>
        <div class="table-row">
          <div class="table-cell">July 2025</div>
          <div class="table-cell">Payout dispute with Qilin; first Gentlemen ransomware samples appear</div>
        </div>
        <div class="table-row">
          <div class="table-cell">September 2025</div>
          <div class="table-cell">Trend Micro publishes the first public analysis; the group opens its RaaS program to outside affiliates</div>
        </div>
        <div class="table-row">
          <div class="table-cell">April 2026</div>
          <div class="table-cell">Check Point ranks it the second most active ransomware group of the year</div>
        </div>
        <div class="table-row">
          <div class="table-cell">May 2026</div>
          <div class="table-cell">Internal database and chats leak; group announces a recruitment partnership with BreachForums; Microsoft analyses its self-spreading encryptor</div>
        </div>
        <div class="table-row">
          <div class="table-cell">June 2026</div>
          <div class="table-cell">Record month with 117 claimed victims</div>
        </div>
      </div>

      <p>Coming out of Qilin gave the founders two advantages: proven intrusion skills and a network of affiliates who already knew them. The administrator, known by the handle zeta88 according to Check Point, still personally takes part in attacks.</p>

      <h2 id="growth">How Fast The Gentlemen Has Grown</h2>

      <p>The numbers below come from different trackers at different dates, but the trend is clear.</p>

      <ul>
        <li><strong>April 2026:</strong> more than 320 public victims since mid-2025, 240 of them in 2026 alone (Check Point Research).</li>
        <li><strong>July 2026:</strong> 580 claimed victims across 77 countries. Victims in the first half of 2026 were slightly more than six times the number in the second half of 2025 (Unit 42).</li>
        <li><strong>August 2026:</strong> more than 750 claimed victims worldwide (Barracuda).</li>
      </ul>

      <p>The public count may understate the real total. During an incident response engagement, Check Point Research accessed an affiliate's command-and-control server and found a botnet pointing to more than 1,570 likely corporate victims, far more than the group had listed on its leak site.</p>

      <h3>Why affiliates joined so quickly</h3>
      <p>Money. The Gentlemen offers affiliates a 90/10 split, keeping only 10 percent for the core team. Most RaaS programs keep 20 to 30 percent. For an experienced affiliate, moving to The Gentlemen meant a larger cut of every payment, and Check Point notes that several former Qilin affiliates made the switch.</p>

      <h2 id="initial-access">How Gentlemen Affiliates Get In</h2>

      <h3>1. Exploiting firewalls and VPNs</h3>
      <p>The most documented entry point is unpatched edge devices. Researchers repeatedly cite CVE-2024-55591, an authentication bypass in Fortinet FortiGate firewalls, and CVE-2025-32433, a flaw in the Erlang/OTP SSH server. In the first case Trend Micro analysed, attackers most likely came in through an internet-facing FortiGate after compromising an administrator account.</p>

      <h3>2. Stolen and purchased credentials</h3>
      <p>Affiliates use VPN credentials, configuration files and logins taken from infostealer logs, and they share access material with each other. Barracuda also notes interest in Outlook Web App, Okta and compromised email accounts, which give a foothold in cloud services as well as the internal network.</p>

      <h3>3. Brute force and access brokers</h3>
      <p>Where no credentials are available, affiliates brute-force exposed login portals or buy a ready-made foothold from an initial access broker. In May 2026 the group announced a partnership with BreachForums specifically to recruit affiliates, penetration testers and access brokers.</p>

      <div class="dt-callout dt-callout--info">
        <div class="dt-callout__title">Why this matters for monitoring</div>
        <p>Stealer-log credentials, broker listings and recruitment posts all live on criminal forums and Telegram channels. If your domain or VPN logins show up there, the window before an affiliate uses them can be short.</p>
      </div>

      <h2 id="inside-an-attack">Inside a Gentlemen Attack</h2>

      <p>Once inside, affiliates follow a fairly consistent path, based on reports from Trend Micro, Check Point and Unit 42:</p>

      <ol>
        <li><strong>Mapping the domain.</strong> Enumerating Active Directory and scanning the network with tools such as Advanced IP Scanner.</li>
        <li><strong>Escalating privileges.</strong> Using techniques such as NTLM relay attacks (CVE-2025-33073) and harvested admin credentials.</li>
        <li><strong>Killing security tools.</strong> Loading a vulnerable but legitimately signed driver (the ThrottleStop driver, CVE-2025-7771) and a custom EDR-killer called GentleKiller to switch off endpoint protection.</li>
        <li><strong>Stealing sessions and data.</strong> Harvesting browser sessions for Microsoft 365 and Okta, then exfiltrating files with WinSCP, Rclone or cloud storage tools.</li>
        <li><strong>Deploying ransomware domain-wide.</strong> Pushing the encryptor through Group Policy and the NETLOGON share so it runs on many machines at once. Newer Go-based versions can also spread on their own, worm-style.</li>
        <li><strong>Encrypting everything that matters.</strong> The ransomware targets Windows, Linux, VMware ESXi and NAS devices, deletes shadow copies and clears logs, then leaves a README-GENTLEMEN.txt note in each folder.</li>
      </ol>

      <h2 id="the-leak">What the 2026 Leak Revealed</h2>

      <p>In May 2026 the group's own administrator admitted on underground forums that its backend database had been compromised. Check Point Research links the breach to the group's hosting provider and obtained part of the data, including internal chats, negotiation transcripts and member lists. Three findings stand out.</p>

      <h3>AI-assisted development</h3>
      <p>The leaked chats show the team using AI coding assistants, including DeepSeek and Qwen, to speed up development. The administrator reportedly built the entire affiliate admin panel in three days with AI help. Defenders should expect ransomware tooling to keep improving faster than before.</p>

      <h3>A small core team</h3>
      <p>Behind hundreds of attacks sits a core of around nine named operators centred on one administrator. Most of the scale comes from affiliates.</p>

      <h3>Chain victimisation through suppliers</h3>
      <p>In April 2026 the group breached a UK software consultancy, then used its infrastructure documents, credentials and client access details to attack one of the consultancy's clients in Turkey. It published both companies on its leak site and labelled the UK firm its "access broker", a tactic designed to turn the client against its own supplier.</p>

      <div class="dt-callout dt-callout--warning">
        <div class="dt-callout__title">Your suppliers are part of your attack surface</div>
        <p>The UK–Turkey case shows that a breach at an IT provider can hand attackers everything they need to reach that provider's customers. Monitoring exposure of your vendors' credentials and domains is no longer optional.</p>
      </div>

      <h2 id="who-is-targeted">Who The Gentlemen Targets</h2>

      <ul>
        <li><strong>Manufacturing</strong> is the most hit sector, with 103 of 580 claimed victims in Unit 42's count. See <a href="/industries/manufacturing">dark web monitoring for manufacturing</a>.</li>
        <li><strong>Technology</strong> companies are the next largest group, according to Check Point, including IT providers whose access can be reused against their clients. See <a href="/industries/saas-technology">dark web monitoring for SaaS and technology</a>.</li>
        <li><strong>Healthcare</strong> ranks third in Check Point's analysis. See <a href="/industries/healthcare">dark web monitoring for healthcare</a>.</li>
        <li><strong>Construction and insurance</strong> featured among the earliest victims documented by Trend Micro.</li>
      </ul>

      <p>Early attacks focused on Asia-Pacific, especially Thailand. By 2026 the United States had the most identified victims, with the UK and Germany also heavily represented.</p>

      <h2 id="warning-signs">Dark Web Warning Signs to Watch</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Signal</strong></div>
          <div class="table-cell"><strong>Why it matters</strong></div>
          <div class="table-cell"><strong>Response</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">FortiGate, VPN or SSO credentials for your domain in stealer logs</div>
          <div class="table-cell">Matches the group's favourite entry points</div>
          <div class="table-cell">Reset credentials, revoke sessions, confirm MFA, inspect the infected device</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Microsoft 365 or Okta session cookies exposed</div>
          <div class="table-cell">Session theft can bypass passwords and MFA</div>
          <div class="table-cell">Revoke all sessions and review sign-in logs</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Access for sale matching your sector and size</div>
          <div class="table-cell">Brokers sell to RaaS affiliates</div>
          <div class="table-cell">Hunt for unknown remote tools and new admin accounts</div>
        </div>
        <div class="table-row">
          <div class="table-cell">IT supplier or MSP named on a leak site</div>
          <div class="table-cell">Chain victimisation may reach you next</div>
          <div class="table-cell">Rotate any credentials shared with that supplier and limit their access</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Your company named on The Gentlemen's leak site</div>
          <div class="table-cell">Data theft has likely occurred or is being claimed</div>
          <div class="table-cell">Start incident response, legal review and communications plans</div>
        </div>
      </div>

      <p>DarkThreat watches stealer logs, criminal forums, Telegram channels and ransomware leak sites for these signals and alerts your team when your domains, credentials or suppliers appear. See <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="defence">How to Defend Against The Gentlemen</h2>

      <ol>
        <li><strong>Patch edge devices first.</strong> Prioritise FortiGate, VPN and SSH flaws listed in the CISA Known Exploited Vulnerabilities catalogue, including CVE-2024-55591 and CVE-2025-32433.</li>
        <li><strong>Assume some credentials are already exposed.</strong> Enforce phishing-resistant MFA and watch authentication logs for impossible travel and new device sign-ins.</li>
        <li><strong>Harden Active Directory.</strong> Patch CVE-2025-33073, review Active Directory Certificate Services, and alert on Group Policy changes and new scripts in NETLOGON.</li>
        <li><strong>Block vulnerable drivers.</strong> Use Microsoft's vulnerable driver blocklist and alert when security agents stop unexpectedly.</li>
        <li><strong>Protect ESXi and NAS.</strong> Keep management interfaces off the general network and restrict admin access.</li>
        <li><strong>Keep offline, immutable backups</strong> that sit outside the domain, so a domain-wide compromise cannot reach them.</li>
        <li><strong>Watch your suppliers.</strong> Monitor for leaked credentials of IT providers and MSPs and review what access they hold.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>The Gentlemen grew out of a Qilin affiliate team and became the second most active ransomware group of 2026.</li>
        <li>A 90 percent affiliate share pulled experienced attackers away from rival programs.</li>
        <li>Unpatched FortiGate firewalls, stolen VPN and SSO credentials, and broker access are its main entry points.</li>
        <li>It uses AI coding tools, an EDR killer and domain-wide deployment, and can encrypt Windows, Linux, ESXi and NAS.</li>
        <li>Leaked credentials and supplier exposure on the dark web often appear before an attack.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Is The Gentlemen connected to Qilin?</h3>
      <p>Its founders came from ArmCorp, a former Qilin affiliate team, and left after a payout dispute in 2025. The two are now competitors.</p>

      <h3>What does the README-GENTLEMEN.txt file mean?</h3>
      <p>It is the group's ransom note. If you find it on your systems, isolate affected machines, preserve evidence and start your incident response process immediately.</p>

      <h3>Is there a free decryptor for The Gentlemen?</h3>
      <p>No public free decryptor has been reported. The ransomware uses modern encryption (XChaCha20 with Curve25519), so recovery depends on clean, offline backups.</p>

      <h3>Why is it called "a new group to watch"?</h3>
      <p>It went from zero to one of the top two ransomware operations in about a year, its affiliate base is still growing, and its use of AI-assisted development suggests its tooling will keep evolving.</p>

      <h3>How can dark web monitoring help?</h3>
      <p>It spots the early signals: your credentials in stealer logs, access to your network for sale, a supplier listed on a leak site, or your own name on The Gentlemen's site, giving you time to act.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/qilin-ransomware-dark-web-activity-and-business-risks">Qilin Ransomware: Dark Web Activity and Business Risks</a></li>
        <li><a href="/blog/ransomware-as-a-service-affiliate-programs-how-the-business-model-works">Ransomware-as-a-Service Affiliate Programs: How the Business Model Works</a></li>
        <li><a href="/blog/infostealer-logs-what-they-contain-and-why-you-need-to-monitor-them">Infostealer Logs: What They Contain and Why You Need to Monitor Them</a></li>
        <li><a href="/blog/initial-access-brokers-how-dark-web-monitoring-exposes-them">Initial Access Brokers: How Dark Web Monitoring Exposes Them</a></li>
        <li><a href="/blog/supply-chain-credential-leaks-monitoring-vendor-exposure">Supply Chain Credential Leaks: Monitoring Vendor Exposure</a></li>
        <li><a href="/blog/how-to-protect-your-backups-from-ransomware-and-why-dark-web-monitoring-helps">How to Protect Your Backups from Ransomware</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://blog.checkpoint.com/research/when-the-ransomware-gang-gets-hacked-what-the-gentlemen-leak-reveals-about-modern-ransomware-risk/" target="_blank" rel="noopener noreferrer">Check Point Research: What The Gentlemen leak reveals about modern ransomware risk</a></li>
        <li><a href="https://unit42.paloaltonetworks.com/the-gentlemen-ransomware/" target="_blank" rel="noopener noreferrer">Palo Alto Networks Unit 42: The Gentlemen ransomware</a></li>
        <li><a href="https://blog.barracuda.com/2026/08/17/the-gentlemen-ransomware--inside-one-of-the-fastest-growing-rans" target="_blank" rel="noopener noreferrer">Barracuda: The Gentlemen ransomware, inside one of the fastest-growing extortion operations</a></li>
        <li><a href="https://trendmicro.com/en/research/25/i/unmasking-the-gentlemen-ransomware.html" target="_blank" rel="noopener noreferrer">Trend Micro: Unmasking The Gentlemen ransomware</a></li>
        <li><a href="https://itbrief.com.au/story/the-gentlemen-becomes-second-most-active-ransomware-group" target="_blank" rel="noopener noreferrer">IT Brief: The Gentlemen becomes second most active ransomware group</a></li>      </ul>

    </article>
  </div>
</div>
`,
};
