import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const leakedCredentialsAndLateralMovementDetectionInActiveDirectory: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dw-092",
  slug: "leaked-credentials-and-lateral-movement-detection-in-active-directory",
  title: "Leaked Credentials and Lateral Movement: Detection in Active Directory",
  excerpt: "Learn how leaked credentials enable lateral movement in Active Directory and detect them using Windows event logs UEBA and dark web credential feeds from DarkThreat AI",
  featuredImage: "/images/blog/leaked-credentials-and-lateral-movement-detection-in-active-directory.jpg",
  category: "Threat Intelligence",
  publishDate: "June 30, 2026",
  readingTime: "17 min read",
  author: "Dr. Ayaan Rahman",

  metaTitle: "Leaked Credentials and Lateral Movement: Detection in Active Directory",
  metaDescription: "Learn how leaked credentials enable lateral movement in Active Directory and detect them using Windows event logs UEBA and dark web credential feeds from DarkThreat AI",

  tableOfContents: [
    {
      "id": "introduction",
      "title": "Introduction"
    },
    {
      "id": "the-mechanics-of-credential-driven-lateral-movement",
      "title": "The Mechanics of Credential-Driven Lateral Movement in Active Directory"
    },
    {
      "id": "infostealer-logs-and-ad-exposure",
      "title": "Infostealer Logs Are the Primary Source of AD-Ready Credentials"
    },
    {
      "id": "detection-strategies-for-credential-driven-lateral-movement",
      "title": "Detection Strategies for Credential-Driven Lateral Movement in Active Directory"
    },
    {
      "id": "step-by-step-detection-framework",
      "title": "How to Detect Leaked Credentials Driving Lateral Movement: Step-by-Step Framework"
    },
    {
      "id": "active-directory-exposure-matrix",
      "title": "Active Directory Credential Exposure Types and Detection Vectors"
    },
    {
      "id": "how-darkthreat-addresses-this",
      "title": "How DarkThreat.AI Approaches Credential-Driven Lateral Movement Detection"
    },
    {
      "id": "mitre-attack-mapping",
      "title": "MITRE ATT&CK Mapping for Credential-Driven Lateral Movement in AD"
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
      <p>A SOC analyst at a mid-sized enterprise notices a series of failed logins from a service account at 3:00 AM. The account is locked out, an alert fires, and the team resets the password. What they do not see is that the same credential pair—username and password—was posted on a Russian-language cybercrime forum six weeks earlier after an infostealer infection on a contractor's personal device. The attacker did not need that specific password to succeed. They needed the context it provided. Within hours of the reset, a second account, in the same Active Directory (AD) group, triggers an anomalous logon event. The attacker had already moved laterally using a different set of <strong>credential leak detection</strong> signals that the analyst's tools missed entirely. This article explains how leaked credentials enable lateral movement inside Active Directory environments and, more critically, how defenders can detect the behavioral signatures that credential leaks create before attackers pivot to high-value targets. It is written for SOC analysts, identity security engineers, and AD administrators who need actionable detection logic, not abstract warnings.</p>
      <p>We will cover the specific mechanisms that turn a single exposed password into an entire AD domain compromise. You will learn which infostealer logs and combo lists matter most for AD-specific attacks, the post-exploitation techniques attackers use with leaked credentials, and a step-by-step detection methodology incorporating Windows event log analysis, UEBA baselines, and dark web threat intelligence feeds like those provided by DarkThreat.AI. The goal is to move beyond generic "reset your passwords" advice and into operational detection engineering for credential-driven lateral movement.</p>

      <h2 id="the-mechanics-of-credential-driven-lateral-movement">The Mechanics of Credential-Driven Lateral Movement in Active Directory</h2>
      <p>Lateral movement is not a brute-force problem once an attacker has a foothold. It is an authentication problem. When an attacker obtains valid credentials—whether from an <a href="/blog/infostealer-logs-explained">infostealer log</a>, a combo list from a credential stuffing attack, or a dark web market—they leverage those credentials to authenticate laterally across the domain. In Active Directory environments, where trust relationships and Kerberos ticket delegation create implicit pathways between systems, a single set of valid domain credentials can become a skeleton key. The <strong>IBM Cost of a Data Breach Report 2024</strong> notes that compromised credentials account for 16% of initial attack vectors and are the most common root cause, with an average breach cost of \$4.81 million. But the cost multiplies when those credentials enable lateral movement.</p>
      <p>The fundamental mechanism works as follows: an attacker acquires a credential pair—often a low-privilege domain user account—from an infostealer log dump. They then use a tool like Rubeus, Impacket's PsExec, or CrackMapExec to authenticate to other machines within the domain. If the compromised account has Local Administrator Password Solution (LAPS) read permissions or is a member of a privileged group, the attacker escalates immediately. Even without clear privilege, the attacker uses techniques like Kerberoasting or AS-REP roasting to extract service account hashes and crack them offline, using the initial leaked credential as the pivot point. The <strong>Verizon 2024 Data Breach Investigations Report</strong> found that 77% of breaches today involve human error, credential theft, or both—meaning that the attacker is not breaking in; they are logging in with your own credentials.</p>
      
      <h3>What Specific Attack Paths Do Leaked Credentials Enable in Active Directory?</h3>
      <p>Leaked credentials enable at least four distinct attack paths inside Active Directory. The most common is simple credential replay, where an attacker uses the same credential pair across multiple machines. The second is "overpass-the-hash," where an attacker uses a password hash (obtained from a memory dump or an infostealer log) to request Kerberos tickets from a domain controller. The third is "Kerberoasting," where the attacker leverages a valid but low-privilege credential to request service principal name (SPN) tickets and cracks them offline. The fourth is "DCSync," which requires Domain Admin credentials but is often reached through the first three steps. Each path starts with one credential pair that should have been detected at the credential leak phase, not after the adversary has started moving laterally.</p>

      <ul>
        <li><strong>Credential Replay (T1078 Valid Accounts):</strong> The attacker authenticates to remote systems using the same username and password pair obtained from an infostealer log. Detection relies on anomalous authentication patterns—the same account authenticating to 10 workstations within 5 minutes from a single source IP.</li>
        <li><strong>Overpass-the-Hash (T1550.002):</strong> The attacker converts an NTLM hash (frequently found in RedLine Stealer or Lumma Stealer logs) into a Kerberos TGT, bypassing standard password-based authentication logging. This technique leaves Event ID 4768 (Kerberos TGT request) from unusual source systems.</li>
        <li><strong>Kerberoasting (T1558.003):</strong> The attacker uses valid domain credentials to request service tickets for domain user accounts with SPNs. The leaked credential provides the foothold; the service account hash becomes the escalation vector. Detection requires monitoring for excessive TGS requests (Event ID 4769) from a single account to multiple SPNs.</li>
        <li><strong>DCSync (T1003.006):</strong> The attacker, now holding Domain Admin credentials obtained via lateral movement, replicates the entire Active Directory database from the domain controller. This is the terminal event and often generates Event ID 4662 (audit of directory service access) with specific control access rights if properly logged.</li>
      </ul>

      <h2 id="infostealer-logs-and-ad-exposure">Infostealer Logs Are the Primary Source of AD-Ready Credentials</h2>
      <p>You cannot detect credential-driven lateral movement if you do not know where the credentials originate. Infostealer malware—RedLine Stealer, Vidar, Lumma Stealer, META Stealer, and RisePro—targets credential stores on infected endpoints. These malware families harvest not only browser passwords but also FTP credentials, VPN client configurations, RDP connection files, and stored network passwords in Windows Credential Manager. When an infostealer log is sold on a dark web forum like XSS.is, Exploit.in, or a Telegram credential-selling channel, the buyer receives a structured file containing hostname, username, password, and often the application or service path. For an Active Directory attacker, the most valuable entries are those tagged with terms like "msac," "microsoft," "corp," or "domain."</p>
      <p>A single infostealer log from a compromised help-desk contractor's machine can contain credentials for the local domain, a remote access VPN, a password manager extension, and the corporate SharePoint site. The <strong>SpyCloud Annual Identity Exposure Report 2024</strong> analyzed over 1.7 billion exposed credentials and found that 70% of them were still valid at the time of analysis, meaning password rotation practices in most organizations are too slow or too infrequent to invalidate stolen credentials. For <strong>credential leak detection</strong> platforms like DarkThreat.AI, the ability to ingest and correlate infostealer logs with domain user directories is the single highest-impact capability for stopping lateral movement before it starts.</p>

      <blockquote>
        "In our analysis of over 1.7 billion exposed credentials from 2023, we found that 70% of them were still valid at the time of collection. The gap between credential exposure and credential rotation is the attacker's primary operating window." — SpyCloud Annual Identity Exposure Report 2024
      </blockquote>

      <h3>How Do Combo Lists Specifically Target Active Directory Environments?</h3>
      <p>Combo lists—compiled lists of email:password pairs aggregated from multiple breaches and credential dumps—are the second major source of AD-specific credential leaks. Unlike infostealer logs, which include the hostname and application context, combo lists are flat files optimized for credential stuffing. Attackers use tools like Hydra, OpenBullet, or SilverBullet to feed combo lists into login forms for Outlook Web Access (OWA), VPN gateways, or Azure AD portals. If the email address matches a domain user account and the password has not been rotated since the breach, the attacker gains a valid domain session. Detection of combo-list-based lateral movement requires monitoring for authentication attempts against non-standard ports (e.g., HTTPS on port 443 for OWA, or UDP 500 for VPN) from IP addresses outside the organization's normal geolocation pattern.</p>

      <h2 id="detection-strategies-for-credential-driven-lateral-movement">Detection Strategies for Credential-Driven Lateral Movement in Active Directory</h2>
      <p>Detecting lateral movement caused by leaked credentials requires a multi-layered approach that combines Windows event log analysis, behavioral baselining with User and Entity Behavior Analytics (UEBA), and proactive dark web credential monitoring. Most organizations focus on perimeter detection—firewall logs, IDS/IPS alerts—and miss the internal authentication anomalies that indicate an attacker is already moving laterally. The following detection methodology is designed to be implemented within a 60-day window using tools available to most enterprise SOCs, including Windows Event Log forwarding, SIEM correlation rules, and DarkThreat.AI's real-time credential leak detection API.</p>

      <p>The detection framework breaks down into four layers: credential exposure intelligence, authentication anomaly detection, privilege escalation monitoring, and high-value asset access logging. Each layer feeds into the next, and missing any one layer leaves a gap that attackers exploit. Below is a step-by-step guide to implementing these layers.</p>

      <h2 id="step-by-step-detection-framework">How to Detect Leaked Credentials Driving Lateral Movement: Step-by-Step Framework</h2>
      
      <ol>
        <li>
          <h3>Step 1: Establish a Continuous Credential Exposure Feed</h3>
          <p>You cannot detect credential-driven lateral movement if you do not know which credentials are exposed. Deploy a <strong>credential leak detection</strong> platform such as DarkThreat.AI that continuously monitors infostealer logs, combo lists, dark web forums (BreachForums, Russian Market, 2easy Market), and Telegram credential-selling channels. The platform should ingest domain user lists and cross-reference them against leaked credential databases daily. Configure alerts for any credential match, prioritized by the account's privilege level (Domain Admin, service account with SPNs, or LAPS reader). This feed becomes the primary input for all subsequent detection rules. Integration with your SIEM (Splunk, Sentinel, QRadar) via API or webhook is essential for automation. Each alert should include the specific infostealer family (e.g., RedLine Stealer), the hostname of the infected machine (if available), and the domain account name.</p>
        </li>
        <li>
          <h3>Step 2: Baseline Normal Authentication Behavior for Privileged Accounts</h3>
          <p>Before you can detect anomalous lateral movement, you must establish normal authentication patterns for all privileged accounts in Active Directory. Use Windows Event IDs 4624 (successful logon), 4634 (logoff), and 4648 (logon using explicit credentials) to build a baseline of how each account authenticates: which workstations, from which source IP ranges, during which hours, and using which authentication protocols (Kerberos vs. NTLM). Accounts that normally authenticate only from the help-desk subnet should never authenticate from a developer workstation. Tools like Microsoft Defender for Identity or third-party UEBA platforms can automate this baselining, but even a manual baseline in a SIEM query is better than none. The goal is to flag accounts "out of character" before they become a pivot point.</p>
        </li>
        <li>
          <h3>Step 3: Deploy Authentication Correlation Rules Across Event IDs</h3>
          <p>Correlate the credential exposure feed from Step 1 with the authentication baseline from Step 2. Write SIEM correlation rules that fire when:</p>
          <ul>
            <li>An account with a known credential leak (from Step 1) authenticates to more than 3 distinct workstations within a 10-minute window.</li>
            <li>The same account authenticates using NTLM (Event ID 4624 with LogonType 3) from a source IP outside the organization's local IP range, then immediately requests Kerberos tickets (Event ID 4768) from a domain controller.</li>
            <li>A service account with no recent history of interactive logons (Event ID 4624 with LogonType 2) suddenly authenticates interactively to a domain controller.</li>
          </ul>
          <p>These rules will catch the lateral movement patterns used by tools like CrackMapExec and Rubeus, which rely on repeated authentication attempts from a single attacker-controlled machine. Alert with medium-high severity and include the specific breach data from the credential feed.</p>
        </li>
        <li>
          <h3>Step 4: Monitor for Privilege Escalation and Credential Theft Techniques</h3>
          <p>Once an attacker has lateral access with a valid credential, they will attempt to escalate privileges through techniques like Kerberoasting, AS-REP roasting, or side-loading the same infostealer malware on the newly compromised system. Deploy detection rules for these specific events:</p>
          <ul>
            <li><strong>Kerberoasting (T1558.003):</strong> Monitor for Event ID 4769 (Kerberos service ticket request) where the account requesting tickets is not the service itself and the request count per minute exceeds 10. These events are typically generated by tools like Rubeus or Impacket.</li>
            <li><strong>AS-REP Roasting (T1558.004):</strong> Monitor for Event ID 4768 where the pre-authentication type is 0 (no pre-authentication) and the account has the "Do not require Kerberos preauthentication" attribute set. This technique allows offline cracking of the account's password hash.</li>
            <li><strong>DCSync (T1003.006):</strong> Monitor for Event ID 4662 where the ObjectType is GUID for the domain and the AccessMask indicates the "DS-Replication-Get-Changes-All" control access right. This event should be rare and immediately escalated to a critical incident response.</li>
          </ul>
          <p>Each of these techniques requires valid domain credentials, which the attacker obtained from the initial leak. The correlation between Step 1 and Step 3 is what makes these detections possible.</p>
        </li>
        <li>
          <h3>Step 5: Implement Automated Account Remediation for Leaked Credentials</h3>
          <p>Detection without remediation is noise. When a credential leak is confirmed—either from DarkThreat.AI's feed or from an internal authentication anomaly—trigger an automated remediation workflow: force password rotation via a privileged access management (PAM) tool such as CyberArk or BeyondTrust, revoke Kerberos tickets using PowerShell command <code>Remove-ADKerberosTgt -Identity "username"</code>, and quarantine the account by disabling it in AD until the user verifies their identity through a secondary channel. For domain admin accounts with confirmed leaks, initiate an emergency domain controller rebuild based on the extent of access observed. The dwell time for credential-driven attacks is measured in hours, not days, and every delay in remediation increases the scope of compromise.</p>
        </li>
      </ol>

      <blockquote>
        "Organizations that detected a breach through internal security tools had an average dwell time of 35 days, compared to 135 days for organizations that were notified by an external party such as law enforcement or a threat intelligence vendor." — Mandiant M-Trends 2024
      </blockquote>

      <h2 id="active-directory-exposure-matrix">Active Directory Credential Exposure Types and Detection Vectors</h2>
      <p>Not all credential exposures carry equal risk to Active Directory environments. The following matrix breaks down the primary exposure types, their relevance to lateral movement, and the specific detection approach for each. This framework helps SOC analysts prioritize alerts based on the exposure source rather than treating every leaked credential alert with the same severity.</p>
      
      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Exposure Type</strong></div>
          <div class="table-cell"><strong>Lateral Movement Risk</strong></div>
          <div class="table-cell"><strong>Primary AD Attack Vector</strong></div>
          <div class="table-cell"><strong>Detection Method</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Infostealer log (RedLine, Lumma, Vidar)</div>
          <div class="table-cell">Critical — includes host context</div>
          <div class="table-cell">Credential replay + overpass-the-hash</div>
          <div class="table-cell">DarkThreat.AI credential feed + Event ID 4624 geographic anomalies</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Combo list (email:password plaintext)</div>
          <div class="table-cell">High — no host context</div>
          <div class="table-cell">Credential stuffing on OWA/VPN</div>
          <div class="table-cell">Logon failures (Event ID 4625) followed by success from same IP</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Service account hash exposure</div>
          <div class="table-cell">Critical — often password never expires</div>
          <div class="table-cell">Kerberoasting + DCSync</div>
          <div class="table-cell">Excessive TGS requests (Event ID 4769) + spike in replication events</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Domain Admin plaintext</div>
          <div class="table-cell">Catastrophic — immediate domain compromise</div>
          <div class="table-cell">DCSync, Golden Ticket, Skeleton Key</div>
          <div class="table-cell">Immediate domain-wide password reset + Kerberos ticket revocation</div>
        </div>
        <div class="table-row">
          <div class="table-cell">MFA session token theft (from stealer logs)</div>
          <div class="table-cell">Critical — bypasses MFA controls</div>
          <div class="table-cell">Session replay via cookie injection</div>
          <div class="table-cell">Session token duration anomalies + access from new IP/User-Agent</div>
        </div>
      </div>

      <h3>Why Are Service Account Leaks Particularly Dangerous for Lateral Movement?</h3>
      <p>Service accounts are a favored target for lateral movement because they often have password policies configured to "password never expires" and are members of multiple groups across servers. When an infostealer log captures a service account credential pair—detected during a scheduled scan by <strong>DarkThreat.AI</strong> across Telegram selling channels—the attacker immediately has a credential that works across potentially hundreds of machines. Service accounts are also commonly registered with SPNs, making them perfect targets for Kerberoasting. The <strong>CrowdStrike Global Threat Report 2025</strong> found that 62% of eCrime intrusions involved lateral movement using legitimate credentials, and service accounts were the primary target in 38% of those cases. Detection must include specific monitoring for service account logins to non-service-account hosts, as well as any interactive logon by a service account, which is almost always unauthorized.</p>

      <h2 id="how-darkthreat-addresses-this">How DarkThreat.AI Approaches Credential-Driven Lateral Movement Detection</h2>
      <p>DarkThreat.AI addresses credential-driven lateral movement at the intelligence source level, which is the only layer where prevention is possible. The platform's credential leak detection pillar ingests data from infostealer malware logs, combo lists, dark web forums (XSS.is, Exploit.in, Russian Market), and Telegram channels in real time. Against this intelligence, DarkThreat.AI cross-references an organization's Active Directory user list via a secure, one-way hash-based comparison—never exposing plaintext credentials to the platform. When a match is found, the alert includes the specific infostealer family that exfiltrated the credential, the target hostname from the log (which enables the SOC to identify and contain the originally compromised endpoint), and the domain account's privilege level. This intelligence is pushed to SIEM platforms via API, enabling automated correlation rules that fire when the leaked account authenticates abnormally. The platform also maintains historical exposure data that supports Kerberoasting investigations by identifying which service accounts appeared in credential dumps before the ticket request volume increased. This shifts detection from "we see anomalous authentication" to "we knew this account was exposed six weeks ago and we are watching it."</p>
      
      <p>For organizations using Microsoft Sentinel or Splunk, DarkThreat.AI provides pre-built detection logic that maps credential exposure alerts directly to Windows Event IDs 4624, 4768, and 4769, reducing the time to create correlation rules from days to minutes. This integration is the operational equivalent of knowing which door the burglar already has keys to before they start trying handles.</p>

      <h2 id="mitre-attack-mapping">MITRE ATT&amp;CK Mapping for Credential-Driven Lateral Movement in AD</h2>
      <p>The following techniques from the MITRE ATT&amp;CK framework are directly relevant to the attack chain described in this article. Mappings are included for both the initial credential acquisition and the lateral movement phase, enabling SOC teams to align detection rules with the MITRE framework used in their threat intelligence reports.</p>
      
      <ul>
        <li><strong>T1078 Valid Accounts:</strong> The attacker uses compromised credentials to authenticate to remote systems within the domain. This is the primary technique enabled by credential leaks.</li>
        <li><strong>T1550.002 Pass the Hash (Overpass-the-Hash):</strong> The attacker uses a password hash (from an infostealer log) to request Kerberos tickets, bypassing standard authentication logging.</li>
        <li><strong>T1558.003 Kerberoasting:</strong> The attacker requests service tickets for service accounts to crack offline, using a valid domain credential as the foundation.</li>
        <li><strong>T1003.006 DCSync:</strong> The attacker replicates the Active Directory database from a domain controller, requiring valid Domain Admin credentials obtained via lateral movement.</li>
        <li><strong>T1597 Search Closed Sources:</strong> The attacker searches dark web forums and credential markets for exposed credentials specific to the target organization. This is the precursor to all manual attacks described, and the point at which <strong>credential leak detection</strong> is most effective.</li>
        <li><strong>T1650 Acquire Access:</strong> The attacker purchases or obtains access to a target organization's infrastructure through credential purchase on markets like Genesis Market or 2easy Market.</li>
      </ul>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/infostealer-logs-explained">Infostealer Logs Explained: What They Contain and How to Monitor</a> — Deep dive into the specific data fields found in RedLine, Lumma, and Vidar logs and how they map to Active Directory credential exposure.</li>
        <li><a href="/blog/how-hackers-use-leaked-credentials-attack-paths">How Hackers Use Leaked Credentials to Build Attack Paths</a> — Covers the end-to-end attack chain from credential acquisition to domain dominance, with real-world examples from threat intelligence reports.</li>
        <li><a href="/blog/leaked-credentials-initial-access-mitre-attack">Leaked Credentials as Initial Access: MITRE ATT&amp;CK Techniques and Detection</a> — Maps specific infostealer families to MITRE ATT&amp;CK, providing detection rule templates for SIEM platforms.</li>
        <li><a href="/blog/credential-leak-detection-siem-integration">Credential Leak Detection SIEM Integration</a> — Technical guide to integrating credential exposure feeds from DarkThreat.AI into Splunk, Sentinel, and QRadar with sample correlation rules.</li>
        <li><a href="/blog/initial-access-brokers-dark-web-monitoring">Initial Access Brokers and Dark Web Monitoring</a> — Explains how IABs operate on forums like XSS.is and Exploit.in, and how continuous dark web monitoring detects their activity against your organization.</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>Leaked credentials are not merely a password hygiene problem; they are the primary enabler of lateral movement in Active Directory environments. The detection framework outlined in this article—continuous credential exposure monitoring, authentication anomaly baselining, event correlation rules for lateral movement techniques, privilege escalation detection, and automated remediation—provides a defensible architecture for organizations that understand the gap between credential exposure and credential rotation. The key insight is that <strong>credential leak detection</strong> is not a substitute for Event Log analysis but its most critical input. Without knowing which credentials are already posted on Russian Market or being sold in Telegram channels, your SOC is flying blind against the most common initial access vector in use today.</p>
      <p>The direction of credential theft is clear: infostealer malware is becoming more sophisticated, dark web markets are professionalizing their credential listing and search capabilities, and initial access brokers are using leaked credentials to map Active Directory attack paths before even initiating lateral movement. The Defender's advantage lies in knowing what the attacker knows. Platforms like DarkThreat.AI provide that intelligence layer, enabling security teams to move from reactive alert triage to proactive credential exposure management. The time to implement this framework is before the next stealer log dump includes your domain admin's password.</p>

      <!-- META: Leaked credentials enable lateral movement in Active Directory. Learn detection strategies using Windows event logs, UEBA, and dark web credential feeds from DarkThreat.AI. -->
    </article>
  </div>
</div>
`,
};
