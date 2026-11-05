import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const qilinRansomwareDarkWebActivityAndBusinessRisks: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-001",
  slug: "qilin-ransomware-dark-web-activity-and-business-risks",
  title: "Qilin Ransomware: Dark Web Activity and Business Risks",
  excerpt:
    "Qilin has been the most active ransomware group since 2025. Learn how its affiliates break in, how its leak site pressures victims, which sectors it hits hardest, and which dark web signals give defenders an early warning.",
  featuredImage: "/dark-threat-3.webp",
  category: "Threat Intelligence",
  publishDate: "November 5, 2026",
  readingTime: "12 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "Qilin Ransomware: Dark Web Activity and Business Risks",
  metaDescription:
    "Qilin is the most active ransomware group of 2025 and 2026. See how it gets in, how its leak site works, and which dark web signals warn you early.",
  tableOfContents: [
    { id: "what-is-qilin", title: "What Is Qilin Ransomware?" },
    { id: "how-big-is-qilin", title: "How Big Is Qilin in 2026?" },
    { id: "how-qilin-gets-in", title: "How Qilin Affiliates Get In" },
    { id: "inside-an-intrusion", title: "Inside a Qilin Intrusion" },
    { id: "leak-site", title: "Qilin's Leak Site and Dark Web Footprint" },
    { id: "who-qilin-targets", title: "Who Qilin Targets" },
    { id: "warning-signs", title: "Dark Web Warning Signs Before a Qilin Attack" },
    { id: "reduce-risk", title: "How to Reduce Your Qilin Risk" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>Most ransomware brands burn bright and disappear within a year. Qilin did the opposite. A mid-sized operation in 2023, it became the single most active ransomware group in the world in 2025 and stayed at the top through 2026, listing more organisations on its leak site than any rival.</p>

      <p>For security teams, Qilin matters for two reasons. First, its volume means almost every industry and region is in range, from factories and hospitals to city councils. Second, nearly every Qilin attack leaves traces on the dark web before and after the encryption starts: stolen credentials, access listings and, finally, a public post on the group's leak site. This guide explains how Qilin operates and where those early signals appear.</p>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">1,044</div>
          <div class="dt-stat-label">Victims Qilin posted in 2025, up from 154 in 2024</div>
          <div class="dt-stat-source">GuidePoint GRIT 2026 Ransomware Report</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">80–85%</div>
          <div class="dt-stat-label">Share of each ransom reportedly kept by Qilin affiliates</div>
          <div class="dt-stat-source">Center for Internet Security</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">~23%</div>
          <div class="dt-stat-label">Share of Qilin leak-site victims in manufacturing</div>
          <div class="dt-stat-source">Cisco Talos</div>
        </div>
      </div>

      <h2 id="what-is-qilin">What Is Qilin Ransomware?</h2>

      <p>Qilin is a ransomware-as-a-service (RaaS) operation. A core team builds and maintains the ransomware, runs the negotiation portal and hosts the leak site. Independent criminals, called affiliates, rent that toolkit, break into victim networks and deploy the payload. The core team takes a cut of every ransom paid.</p>

      <p>The group first appeared in mid-2022 under the name <strong>Agenda</strong> and rebranded as Qilin within a few months. Security vendors also track it as Gold Feather and Water Galura. Its ransomware was originally written in Go and was later rebuilt in Rust, which makes it fast and easy to compile for different targets. Current versions run on Windows, Linux and VMware ESXi, so a single affiliate can encrypt both office laptops and the virtual servers that run a company's core systems.</p>

      <h3>Why affiliates choose Qilin</h3>

      <p>RaaS brands compete for skilled affiliates the way software companies compete for customers. Qilin has been generous: reporting cited by the Center for Internet Security says affiliates keep around 80 to 85 percent of each ransom, with the rest going to Qilin's operators. When the rival RansomHub operation collapsed in spring 2025, many of its affiliates needed a new home, and Qilin's victim count jumped sharply in the months that followed.</p>

      <h2 id="how-big-is-qilin">How Big Is Qilin in 2026?</h2>

      <p>By almost every tracker, Qilin is the largest ransomware operation currently running. The numbers below come from separate research teams, which count slightly differently, but they all point the same way.</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Period</strong></div>
          <div class="table-cell"><strong>What happened</strong></div>
          <div class="table-cell"><strong>Source</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">2024</div>
          <div class="table-cell">154 victims posted to the leak site</div>
          <div class="table-cell">GuidePoint GRIT</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Q2 2025</div>
          <div class="table-cell">Became the most active ransomware against US state and local government, nearly a quarter of incidents</div>
          <div class="table-cell">Center for Internet Security</div>
        </div>
        <div class="table-row">
          <div class="table-cell">June 2025</div>
          <div class="table-cell">Monthly leak-site postings peaked at around 100</div>
          <div class="table-cell">Cisco Talos</div>
        </div>
        <div class="table-row">
          <div class="table-cell">October 2025</div>
          <div class="table-cell">186 attack claims in a single month</div>
          <div class="table-cell">Comparitech</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Full year 2025</div>
          <div class="table-cell">1,044 victims, the most of any group</div>
          <div class="table-cell">GuidePoint GRIT</div>
        </div>
        <div class="table-row">
          <div class="table-cell">April 2025 – March 2026</div>
          <div class="table-cell">1,358 victims, a 443% rise on the previous 12 months</div>
          <div class="table-cell">Black Kite 2026 Ransomware Report</div>
        </div>
        <div class="table-row">
          <div class="table-cell">H1 2026</div>
          <div class="table-cell">Most active group tracked by Cyble, with 370 attacks in North America and 158 in Europe</div>
          <div class="table-cell">Cyble, via CybelAngel</div>
        </div>
      </div>

      <p>To put that in context, Searchlight Cyber counted a record 7,458 victims across all ransomware leak sites in 2025. Qilin alone accounted for roughly one in seven of them. ZeroFox has described Qilin as the leading ransomware collective for an unbroken run starting in the second quarter of 2025.</p>

      <blockquote>Volume is not the same as profit. GuidePoint's researchers note that a large share of Qilin's victims refuse to pay, which is one reason the group posts so many names publicly: the leak site is its main pressure tool.</blockquote>

      <h2 id="how-qilin-gets-in">How Qilin Affiliates Get In</h2>

      <p>Because each affiliate runs its own intrusions, there is no single Qilin playbook. Incident reports from Cisco Talos, Check Point, ThreatLocker and the US health sector's HC3 team show the same handful of entry points again and again.</p>

      <h3>1. Valid credentials on remote access systems</h3>
      <p>The most common route is simply logging in. Affiliates use usernames and passwords for VPNs, remote desktop gateways and cloud portals that were stolen earlier, often by infostealer malware on an employee's or contractor's device. If that account has no multi-factor authentication, the attacker walks straight in. Cisco Talos lists valid credentials on remote access systems as a primary initial access vector in the Qilin incidents it investigated.</p>

      <h3>2. Exploiting edge devices</h3>
      <p>Firewalls, VPN appliances and remote support tools sit on the internet by design, which makes unpatched ones an easy target. Qilin affiliates have exploited Fortinet firewall vulnerabilities and flaws in remote access software such as ConnectWise ScreenConnect. When a critical bug in an edge device is published, the window between disclosure and exploitation is often just days.</p>

      <h3>3. Phishing and business email compromise</h3>
      <p>Spear-phishing emails with malicious links or attachments remain part of the toolkit, particularly to capture credentials or install a first piece of remote access malware.</p>

      <h3>4. Buying access from brokers</h3>
      <p>Some affiliates skip the break-in entirely and buy a ready-made foothold from an initial access broker on a dark web forum. These listings typically describe the victim's country, sector, revenue and access level without naming the company. For defenders, this is one of the earliest warning signs available, because the listing appears before any ransomware is deployed.</p>

      <div class="dt-callout dt-callout--info">
        <div class="dt-callout__title">The common thread</div>
        <p>Three of the four entry points depend on information that circulates on the dark web first: leaked credentials, exploit discussion, or an access listing. That is why credential and access monitoring belongs in any Qilin defence plan, alongside patching and MFA.</p>
      </div>

      <h2 id="inside-an-intrusion">Inside a Qilin Intrusion</h2>

      <p>Once inside, Qilin affiliates usually spend several days quietly expanding their access before triggering encryption. The typical sequence looks like this:</p>

      <ol>
        <li><strong>Reconnaissance.</strong> Mapping the network, Active Directory and file shares. Talos has documented affiliates using ordinary Windows tools to browse for sensitive documents, which helps them blend in with normal admin activity.</li>
        <li><strong>Persistence and remote control.</strong> Installing legitimate remote monitoring and management (RMM) software or frameworks such as Cobalt Strike so they can return even if the first account is reset.</li>
        <li><strong>Privilege escalation and defence evasion.</strong> Harvesting administrator credentials and, in some cases, loading vulnerable signed drivers to switch off endpoint security, a technique known as bring your own vulnerable driver (BYOVD).</li>
        <li><strong>Data theft.</strong> Copying large volumes of files to attacker-controlled storage. In the April 2025 attack on SK Inc., more than 1 TB of files ended up on the leak site.</li>
        <li><strong>Encryption.</strong> Deleting shadow copies and backups, then encrypting Windows machines, Linux servers and ESXi hosts. Encrypting the hypervisor takes down every virtual machine running on it at once.</li>
        <li><strong>Extortion.</strong> Leaving a ransom note that points to a negotiation portal, with a deadline before the stolen data is published.</li>
      </ol>

      <h2 id="leak-site">Qilin's Leak Site and Dark Web Footprint</h2>

      <p>Qilin uses double extortion: it encrypts systems and threatens to publish stolen data. Its data leak site is hosted on Tor, and according to reporting cited by CIS, the group has also run a version on the open internet to make leaks easier for journalists, customers and regulators to find. That visibility is deliberate. A listing on the site is meant to embarrass the victim into paying.</p>

      <p>A typical listing moves through stages: a company name and logo, a countdown timer, sample files as "proof", and finally a full data dump if no payment is made. Qilin often posts victims in batches, sometimes more than a dozen in a few days, which is why its monthly totals swing so sharply.</p>

      <p>Two facts make that pressure effective. As of August 2026 there is no free decryptor for any Qilin variant, and no arrest, indictment or sanction has been announced against the group's operators. Without a decryptor or law enforcement disruption, victims who lack clean backups face a hard choice.</p>

      <h2 id="who-qilin-targets">Who Qilin Targets</h2>

      <p>Qilin is opportunistic. Affiliates hit whoever they can access, so the victim list cuts across almost every sector. Some patterns stand out:</p>

      <ul>
        <li><strong>Manufacturing</strong> is the most affected sector, at around 23 percent of leak-site victims in Cisco Talos's analysis. Production downtime makes manufacturers more likely to pay quickly. See our <a href="/industries/manufacturing">dark web monitoring for manufacturing</a> page.</li>
        <li><strong>Healthcare</strong> has suffered some of Qilin's most damaging attacks. The June 2024 attack on Synnovis, a pathology provider for London hospitals, disrupted blood tests and procedures across the NHS for months. See <a href="/industries/healthcare">dark web monitoring for healthcare</a>.</li>
        <li><strong>Local government</strong> is a frequent target, with Qilin responsible for nearly a quarter of ransomware incidents against US state and local entities in Q2 2025.</li>
        <li><strong>Large brands and public bodies</strong> appear too. In October 2025 Qilin claimed attacks on Japanese brewer Asahi and the Texas city of Sugar Land, and in March 2026 it claimed an attack on the German political party Die Linke.</li>
      </ul>

      <p>Geographically, around half of Qilin's victims are in the United States, with France, Canada, South Korea and Spain also appearing regularly.</p>

      <div class="dt-callout dt-callout--warning">
        <div class="dt-callout__title">Claims are not always confirmed attacks</div>
        <p>Leak-site listings are claims made by criminals. Some are exaggerated, recycled or posted to pressure a company during negotiations. Treat a listing as a serious signal to investigate, not as proof of what was stolen.</p>
      </div>

      <h2 id="warning-signs">Dark Web Warning Signs Before a Qilin Attack</h2>

      <p>Qilin attacks rarely come out of nowhere. The chain usually leaves marks in places that dark web monitoring can see. The earlier you catch them, the more options you have.</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Signal</strong></div>
          <div class="table-cell"><strong>What it means</strong></div>
          <div class="table-cell"><strong>What to do</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Employee or contractor VPN, RDP or SSO logins in infostealer logs</div>
          <div class="table-cell">An attacker can log in as that user right now</div>
          <div class="table-cell">Reset the password, revoke sessions, check the device for malware, confirm MFA is enforced</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Access listing on a forum matching your country, sector and revenue band</div>
          <div class="table-cell">Someone may be selling a foothold inside your network</div>
          <div class="table-cell">Hunt for unknown remote tools and unusual admin logins, review edge devices</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Exploit chatter about an edge device you run</div>
          <div class="table-cell">Mass exploitation may be days away</div>
          <div class="table-cell">Patch or isolate the device immediately, check logs for prior compromise</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Supplier or MSP credentials exposed</div>
          <div class="table-cell">Attackers may reach you through a trusted third party</div>
          <div class="table-cell">Alert the supplier, restrict their access until resolved</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Your company named on the Qilin leak site</div>
          <div class="table-cell">An intrusion has already happened, or is being claimed</div>
          <div class="table-cell">Activate incident response, legal and communications plans</div>
        </div>
      </div>

      <p>DarkThreat monitors infostealer logs, criminal forums, Telegram channels and ransomware leak sites for exactly these signals, so security teams are alerted when their domains, credentials or brand appear. Learn more about <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="reduce-risk">How to Reduce Your Qilin Risk</h2>

      <p>No single control stops a determined affiliate, but the following steps remove the easy paths Qilin relies on most:</p>

      <ol>
        <li><strong>Enforce phishing-resistant MFA on every remote access path,</strong> including VPNs, RDP gateways, remote support tools and admin portals. Stolen passwords are far less useful without it.</li>
        <li><strong>Patch internet-facing devices first.</strong> Track the CISA Known Exploited Vulnerabilities catalogue and treat any listed flaw in your firewalls, VPNs or remote access tools as an emergency.</li>
        <li><strong>Control remote management tools.</strong> Allow only approved RMM software and alert on any new installation.</li>
        <li><strong>Protect your hypervisors.</strong> Keep ESXi management off the general network, restrict who can log in, and monitor for mass virtual machine shutdowns.</li>
        <li><strong>Keep offline, tested backups.</strong> Qilin deletes shadow copies and targets backup systems. Immutable or offline copies are what let you recover without paying.</li>
        <li><strong>Monitor for leaked credentials continuously.</strong> Resetting an exposed account the day it appears in a stealer log closes the door before an affiliate uses it.</li>
        <li><strong>Rehearse your response.</strong> Decide in advance who handles negotiations, regulators, customers and the press if your name appears on a leak site.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>Qilin has been the most active ransomware group since 2025, with over 1,000 victims that year alone.</li>
        <li>Its affiliates mostly get in with stolen credentials, unpatched edge devices, phishing or purchased access.</li>
        <li>It encrypts Windows, Linux and ESXi systems and uses a public leak site to pressure victims. No free decryptor exists.</li>
        <li>Manufacturing, healthcare and local government are among the hardest-hit sectors.</li>
        <li>Leaked credentials and access listings often appear on the dark web before an attack, which gives monitored organisations time to act.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Is Qilin the same as Agenda ransomware?</h3>
      <p>Yes. The operation launched as Agenda in 2022 and rebranded as Qilin within months. Many security tools still use both names.</p>

      <h3>Is there a free Qilin decryptor?</h3>
      <p>No. As of August 2026 no free decryptor exists for any Qilin variant. Recovery depends on clean backups or, if a victim pays, on the attackers providing a working key, which is never guaranteed.</p>

      <h3>Who is behind Qilin?</h3>
      <p>Researchers describe Qilin as a Russian-speaking criminal operation. Its individual operators have not been publicly identified, and no arrests or sanctions have been announced.</p>

      <h3>Should a company pay a Qilin ransom?</h3>
      <p>Paying funds further attacks, may breach sanctions rules in some cases, and does not guarantee data deletion or a working decryptor. Most authorities advise against paying. Any decision should involve legal counsel, your insurer and law enforcement.</p>

      <h3>How can dark web monitoring help against Qilin?</h3>
      <p>It finds the early signals: employee credentials in stealer logs, access for sale on forums, and your name on a leak site. Acting on those alerts quickly can stop an intrusion before encryption, or speed up your response if data has already been taken.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/ransomware-as-a-service-affiliate-programs-how-the-business-model-works">Ransomware-as-a-Service Affiliate Programs: How the Business Model Works</a></li>
        <li><a href="/blog/initial-access-brokers-on-the-dark-web-the-hidden-attack-enablers">Initial Access Brokers on the Dark Web: The Hidden Attack Enablers</a></li>
        <li><a href="/blog/how-infostealer-malware-enables-ransomware-the-attack-kill-chain">How Infostealer Malware Enables Ransomware: The Attack Kill Chain</a></li>
        <li><a href="/blog/leaked-vpn-credentials-on-the-dark-web-monitoring-and-response">Leaked VPN Credentials on the Dark Web: Monitoring and Response</a></li>
        <li><a href="/blog/monitoring-ransomware-leak-sites-a-security-teams-guide">Monitoring Ransomware Leak Sites: A Security Team's Guide</a></li>
        <li><a href="/blog/double-extortion-ransomware-monitoring-leak-sites-for-your-data">Double Extortion Ransomware: Monitoring Leak Sites for Your Data</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://blog.talosintelligence.com/uncovering-qilin-attack-methods-exposed-through-multiple-cases/" target="_blank" rel="noopener noreferrer">Cisco Talos: Uncovering Qilin attack methods exposed through multiple cases</a></li>
        <li><a href="https://www.guidepointsecurity.com/blog/ransomware-groups-in-2025-grit-2026-ransomware-cyber-threat-report/" target="_blank" rel="noopener noreferrer">GuidePoint Security: GRIT 2026 Ransomware and Cyber Threat Report</a></li>
        <li><a href="https://www.cisecurity.org/insights/blog/qilin-top-ransomware-threat-to-sltts-in-q2-2025" target="_blank" rel="noopener noreferrer">Center for Internet Security: Qilin Top Ransomware Threat to SLTTs in Q2 2025</a></li>
        <li><a href="https://www.comparitech.com/news/ransomware-roundup-october-2025" target="_blank" rel="noopener noreferrer">Comparitech: Ransomware roundup, October 2025</a></li>
        <li><a href="https://cybelangel.com/blog/qilin-ransomware-tactics-attack/" target="_blank" rel="noopener noreferrer">CybelAngel: Qilin Ransomware Attack Methods and 2026 Status</a></li>
        <li><a href="https://www.adaptivesecurity.com/blog/qilin-ransomware" target="_blank" rel="noopener noreferrer">Adaptive Security: Qilin Ransomware</a></li>
        <li><a href="https://www.zerofox.com/intelligence/flash-report-qilin-claims-record-number-of-monthly-attacks-for-2026/" target="_blank" rel="noopener noreferrer">ZeroFox: Qilin Claims Record Number of Monthly Attacks for 2026</a></li>
        <li><a href="https://therecord.media/qilin-ransomware-gang-hits-hundreds-of-orgs-2025" target="_blank" rel="noopener noreferrer">The Record: Qilin ransomware gang hits hundreds of organisations in 2025</a></li>
        <li><a href="https://www.hhs.gov/sites/default/files/qilin-threat-profile-tlpclear.pdf" target="_blank" rel="noopener noreferrer">HHS HC3: Qilin, aka Agenda Ransomware threat profile</a></li>
        <li><a href="https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/qilin-ransomware/" target="_blank" rel="noopener noreferrer">Check Point: Qilin Ransomware (Agenda) deep dive</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
