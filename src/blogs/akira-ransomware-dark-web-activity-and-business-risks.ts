import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const akiraRansomwareDarkWebActivityAndBusinessRisks: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-006",
  slug: "akira-ransomware-dark-web-activity-and-business-risks",
  title: "Akira Ransomware: Dark Web Activity and Business Risks",
  excerpt:
    "Akira has taken an estimated $244 million in ransoms since 2023 and remains one of the top ransomware groups of 2026. Learn how it breaks in through VPNs, how fast it moves, which businesses it targets and which dark web signals warn you first.",
  featuredImage: "/dark-threat-5.webp",
  category: "Threat Intelligence",
  publishDate: "November 6, 2026",
  readingTime: "10 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "Akira Ransomware: Dark Web Activity and Business Risks",
  metaDescription:
    "Akira has made an estimated $244M in ransoms. See how it breaks in through VPNs, who it targets and the dark web signals that warn you first.",
  tableOfContents: [
    { id: "what-is-akira", title: "What Is Akira Ransomware?" },
    { id: "by-the-numbers", title: "Akira by the Numbers" },
    { id: "how-akira-gets-in", title: "How Akira Gets In" },
    { id: "speed", title: "How Fast Akira Moves" },
    { id: "virtualisation", title: "Why Akira Targets Virtual Machines" },
    { id: "leak-site", title: "Akira's Leak Site and Extortion" },
    { id: "who-is-targeted", title: "Who Akira Targets" },
    { id: "warning-signs", title: "Dark Web Warning Signs Before an Akira Attack" },
    { id: "defence", title: "How to Defend Against Akira" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>Since it appeared in March 2023, Akira has become one of the most consistent and profitable ransomware operations in the world. It does not chase headlines with exotic techniques. Instead, its affiliates do the basics very well: log in through a VPN without multi-factor authentication, move quickly, steal data, and encrypt the virtual servers that run the business.</p>

      <p>By late 2025, international law enforcement agencies estimated Akira had collected around \$244 million in ransom payments. In 2026 it remains one of the three most active ransomware groups alongside Qilin and The Gentlemen. This guide explains how Akira operates, who it targets, and which dark web signals give defenders an early warning.</p>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">\$244M</div>
          <div class="dt-stat-label">Estimated ransom proceeds by late September 2025</div>
          <div class="dt-stat-source">Joint advisory: US, France, Germany, Netherlands</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">~200</div>
          <div class="dt-stat-label">Victims in the first quarter of 2026</div>
          <div class="dt-stat-source">ESET, via ransomware.live</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">2 hours</div>
          <div class="dt-stat-label">Time from initial access to data theft in some attacks</div>
          <div class="dt-stat-source">#StopRansomware advisory, November 2025</div>
        </div>
      </div>

      <h2 id="what-is-akira">What Is Akira Ransomware?</h2>

      <p>Akira is a ransomware-as-a-service (RaaS) operation. Its developers build the ransomware, run the negotiation portal and leak site, and split ransom payments with affiliates who carry out the intrusions. It uses double extortion: data is stolen before systems are encrypted, and victims are threatened with publication even if they can restore from backups.</p>

      <p>Akira emerged less than a year after the Conti ransomware gang shut down in 2022. A February 2024 report from the US Department of Health and Human Services pointed to research suggesting links between the two, based on overlapping tactics, encryption methods and ransom payment addresses. That history helps explain why Akira's affiliates looked experienced from the start.</p>

      <p>The group started with a Windows encryptor, added a Linux version in June 2023 to hit VMware ESXi servers, and in 2025 expanded to Nutanix AHV virtual machines. Encrypted files typically get the <code>.akira</code> extension, with newer variants using extensions such as <code>.akiranew</code> and <code>.aki</code>.</p>

      <h2 id="by-the-numbers">Akira by the Numbers</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Date</strong></div>
          <div class="table-cell"><strong>Milestone</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">March 2023</div>
          <div class="table-cell">Akira appears; Windows encryptor and leak site go live</div>
        </div>
        <div class="table-row">
          <div class="table-cell">June 2023</div>
          <div class="table-cell">Linux/ESXi variant released</div>
        </div>
        <div class="table-row">
          <div class="table-cell">April 2024</div>
          <div class="table-cell">First CISA/FBI #StopRansomware advisory on Akira</div>
        </div>
        <div class="table-row">
          <div class="table-cell">November 2024</div>
          <div class="table-cell">Record month at the time, with 73 victims</div>
        </div>
        <div class="table-row">
          <div class="table-cell">June 2025</div>
          <div class="table-cell">First observed encryption of Nutanix AHV virtual machine disks</div>
        </div>
        <div class="table-row">
          <div class="table-cell">November 2025</div>
          <div class="table-cell">Updated international advisory estimates about \$244 million in proceeds</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Q1 2026</div>
          <div class="table-cell">Nearly 200 victims, including 84 in March alone</div>
        </div>
      </div>

      <p>In total, trackers count well over 1,400 organisations claimed by Akira since 2023. Ransom demands typically range from about \$200,000 to several million dollars, and the group has been known to lower its price if a victim only wants the stolen data kept off the leak site.</p>

      <h2 id="how-akira-gets-in">How Akira Gets In</h2>

      <h3>1. VPNs without multi-factor authentication</h3>
      <p>Akira's signature entry point is the remote access VPN. Affiliates log in with valid usernames and passwords, often bought from access brokers or taken from infostealer logs, or they brute-force and password-spray VPN portals. Where multi-factor authentication is missing, a single correct password is enough.</p>

      <h3>2. Exploiting edge devices and backup software</h3>
      <p>The November 2025 advisory lists several vulnerabilities Akira affiliates have exploited, including:</p>
      <ul>
        <li><strong>CVE-2024-40766</strong> in SonicWall firewalls and SSL VPNs, along with stolen SonicWall credentials</li>
        <li><strong>CVE-2020-3580</strong> in Cisco ASA and Firepower Threat Defense</li>
        <li><strong>CVE-2024-37085</strong> in VMware ESXi</li>
        <li><strong>CVE-2023-27532</strong> and <strong>CVE-2024-40711</strong> in Veeam Backup &amp; Replication</li>
      </ul>
      <p>The Veeam flaws matter because they give attackers access to backups, the one thing that would let a victim recover without paying.</p>

      <h3>3. Access brokers</h3>
      <p>Akira affiliates also buy ready-made access from initial access brokers on criminal forums. These listings describe a company's country, sector and revenue without naming it, and they usually appear before the ransomware does.</p>

      <div class="dt-callout dt-callout--info">
        <div class="dt-callout__title">The pattern behind most Akira attacks</div>
        <p>A valid VPN credential plus no MFA. Watching for your VPN and SSO logins in stealer logs and broker listings is one of the most direct ways to get ahead of Akira.</p>
      </div>

      <h2 id="speed">How Fast Akira Moves</h2>

      <p>Akira is known for speed. The 2025 advisory notes that in some attacks, data was exfiltrated within two hours of initial access, and researchers have documented full encryption within a few hours. That leaves very little time for a security team to notice and respond once an attacker is inside.</p>

      <p>Inside the network, affiliates typically:</p>
      <ol>
        <li>Run discovery with built-in tools such as nltest to map domains and trusts.</li>
        <li>Install remote access tools such as AnyDesk or LogMeIn, and tunnel traffic with Ngrok.</li>
        <li>Move laterally using RDP, SSH and Impacket's wmiexec.</li>
        <li>Uninstall or disable endpoint detection and response (EDR) products.</li>
        <li>Steal credentials, in one documented case by shutting down a domain controller virtual machine, copying its disk, and extracting the Active Directory database from it.</li>
        <li>Exfiltrate data, then encrypt Windows systems and hypervisors.</li>
      </ol>

      <h2 id="virtualisation">Why Akira Targets Virtual Machines</h2>

      <p>Most businesses now run their servers as virtual machines on hypervisors such as VMware ESXi and Nutanix AHV. Encrypting the hypervisor's disk files takes down every server running on it at once: file servers, databases, email and business applications.</p>

      <p>That is why Akira invested early in a Linux encryptor for ESXi and later expanded to Nutanix. It also explains the focus on backup servers. If both production systems and backups are encrypted, the pressure to pay is enormous.</p>

      <h2 id="leak-site">Akira's Leak Site and Extortion</h2>

      <p>Akira runs a leak site on Tor with a distinctive retro, terminal-style design. Victims who do not pay are listed and their data is published, sometimes in large batches. In November 2024 the group posted more than 30 victims in a single day.</p>

      <p>Negotiations happen through a Tor chat portal linked in the ransom note. Akira offers separate prices for a decryptor and for deleting stolen data, which lets it extract payments even from companies that restored their systems from backups.</p>

      <h2 id="who-is-targeted">Who Akira Targets</h2>

      <p>Akira focuses heavily on small and medium-sized businesses, though it has also hit large organisations. The most affected sectors include:</p>
      <ul>
        <li><strong>Manufacturing</strong>, where downtime is costly. See <a href="/industries/manufacturing">dark web monitoring for manufacturing</a>.</li>
        <li><strong>Professional services</strong> such as legal, accounting and consulting firms. See <a href="/industries/professional-services">dark web monitoring for professional services</a>.</li>
        <li><strong>Education</strong>, including universities. See <a href="/industries/education">dark web monitoring for education</a>.</li>
        <li><strong>Healthcare, financial services, IT and food production</strong>.</li>
      </ul>

      <p>The United States accounts for about half of victims, with Canada, Germany, Australia and Brazil also frequently hit.</p>

      <h2 id="warning-signs">Dark Web Warning Signs Before an Akira Attack</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Signal</strong></div>
          <div class="table-cell"><strong>Why it matters</strong></div>
          <div class="table-cell"><strong>Response</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">VPN or firewall credentials for your domain in stealer logs</div>
          <div class="table-cell">Akira's most common entry point</div>
          <div class="table-cell">Reset the password, enforce MFA, check VPN logs for unusual logins</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Access to a company matching your profile for sale</div>
          <div class="table-cell">Brokers sell to RaaS affiliates</div>
          <div class="table-cell">Hunt for AnyDesk, Ngrok and other unexpected remote tools</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Exploit discussion for SonicWall, Cisco ASA or Veeam versions you run</div>
          <div class="table-cell">Mass exploitation often follows quickly</div>
          <div class="table-cell">Patch immediately and review logs for earlier compromise</div>
        </div>
        <div class="table-row">
          <div class="table-cell">A supplier or MSP listed on Akira's leak site</div>
          <div class="table-cell">Shared access may expose you</div>
          <div class="table-cell">Rotate shared credentials and limit third-party access</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Your company named on the leak site</div>
          <div class="table-cell">Data theft has likely happened</div>
          <div class="table-cell">Start incident response, legal and communications plans</div>
        </div>
      </div>

      <p>DarkThreat monitors stealer logs, criminal forums, Telegram channels and ransomware leak sites, and alerts your team when your domains, credentials or suppliers appear. See <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="defence">How to Defend Against Akira</h2>

      <ol>
        <li><strong>Enforce MFA on every VPN and remote access path.</strong> This single step blocks Akira's most common entry method.</li>
        <li><strong>Patch edge devices and backup software first.</strong> Prioritise SonicWall, Cisco ASA/FTD, VMware ESXi and Veeam, especially vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalogue.</li>
        <li><strong>Stop password guessing.</strong> Use long passwords of at least 15 characters and lock accounts after repeated failed logins.</li>
        <li><strong>Isolate hypervisor and backup management</strong> from the general network and from domain admin accounts.</li>
        <li><strong>Keep offline, immutable backups</strong> and test restoring them regularly.</li>
        <li><strong>Alert on remote access tools</strong> such as AnyDesk, LogMeIn and Ngrok appearing where they are not approved.</li>
        <li><strong>Monitor for leaked credentials</strong> and reset any VPN or SSO account that shows up in stealer logs.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>Akira has been active since March 2023 and had collected an estimated \$244 million by late 2025.</li>
        <li>It remains one of the top three ransomware groups in 2026, with nearly 200 victims in Q1 alone.</li>
        <li>Its favourite entry point is a VPN without MFA, using stolen, bought or guessed credentials.</li>
        <li>It moves fast, sometimes stealing data within two hours, and targets ESXi, Nutanix and backup systems.</li>
        <li>Leaked VPN credentials and broker listings are early warning signs that dark web monitoring can catch.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Is Akira connected to Conti?</h3>
      <p>Researchers cited by the US Department of Health and Human Services have pointed to overlaps in tactics, encryption and ransom payment addresses, suggesting former Conti members may be involved. It is not officially confirmed.</p>

      <h3>Is there a free Akira decryptor?</h3>
      <p>A decryptor was released for an early 2023 version, but it does not work on current variants. Recovery today depends on clean, offline backups.</p>

      <h3>Does MFA stop Akira?</h3>
      <p>MFA on VPNs blocks the most common way Akira gets in, but affiliates also exploit unpatched devices and use access bought from brokers. MFA should be combined with patching, monitoring and backups.</p>

      <h3>Why does Akira target small businesses?</h3>
      <p>Smaller organisations are more likely to have VPNs without MFA, unpatched firewalls and limited security monitoring, which makes them faster and cheaper to attack.</p>

      <h3>How can dark web monitoring help against Akira?</h3>
      <p>It alerts you when your VPN or SSO credentials appear in stealer logs, when access to your network is for sale, or when a supplier or your own company is listed on Akira's leak site, giving you time to act.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/qilin-ransomware-dark-web-activity-and-business-risks">Qilin Ransomware: Dark Web Activity and Business Risks</a></li>
        <li><a href="/blog/the-gentlemen-ransomware-a-new-group-to-watch">The Gentlemen Ransomware: A New Group to Watch</a></li>
        <li><a href="/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response">Leaked VPN Credentials on the Dark Web: Monitoring and Response</a></li>
        <li><a href="/blog/how-rdp-credentials-fuel-ransomware-the-dark-web-connection">How RDP Credentials Fuel Ransomware: The Dark Web Connection</a></li>
        <li><a href="/blog/how-to-protect-your-backups-from-ransomware-and-why-dark-web-monitoring-helps">How to Protect Your Backups from Ransomware</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://www.securityweek.com/akira-ransomware-group-made-244-million-in-ransom-proceeds/" target="_blank" rel="noopener noreferrer">SecurityWeek: Akira ransomware group made \$244 million in ransom proceeds</a></li>
        <li><a href="https://www.ic3.gov/CSA/2025/251113.pdf" target="_blank" rel="noopener noreferrer">FBI IC3 / CISA: #StopRansomware Akira ransomware advisory update (November 2025)</a></li>
        <li><a href="https://www.welivesecurity.com/pt/ransomware/akira-ransomware-conheca-o-grupo-que-cresceu-em-2026-e-entrou-na-mira-do-fbi/" target="_blank" rel="noopener noreferrer">ESET WeLiveSecurity: Akira ransomware in 2026 (Portuguese)</a></li>
        <li><a href="https://cybelangel.com/blog/the-akira-ransomware-playbook-everything-you-need-to-know/" target="_blank" rel="noopener noreferrer">CybelAngel: Akira ransomware attack methods, IOCs and defence 2026</a></li>
        <li><a href="https://www.theregister.com/2025/11/14/cisa_akira_ransomware/" target="_blank" rel="noopener noreferrer">The Register: CISA flags imminent threat as Akira starts hitting Nutanix AHV</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
