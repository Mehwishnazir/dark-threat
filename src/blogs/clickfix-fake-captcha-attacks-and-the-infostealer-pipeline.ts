import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const clickfixFakeCaptchaAttacksAndTheInfostealerPipeline: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-005",
  slug: "clickfix-fake-captcha-attacks-and-the-infostealer-pipeline",
  title: "ClickFix Fake CAPTCHA Attacks and the Infostealer Pipeline",
  excerpt:
    "ClickFix tricks people into running malware themselves through fake CAPTCHAs and fake error fixes. Learn how the attack works, its newest variants, how it feeds stolen credentials into dark web markets, and how to stop it.",
  featuredImage: "/dark-threat-6.webp",
  category: "Threat Intelligence",
  publishDate: "November 5, 2026",
  readingTime: "10 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "ClickFix Fake CAPTCHA Attacks and the Infostealer Pipeline",
  metaDescription:
    "ClickFix fake CAPTCHAs trick users into installing infostealers. See how the attack works, how stolen logins reach the dark web, and how to stop it.",
  tableOfContents: [
    { id: "what-is-clickfix", title: "What Is ClickFix?" },
    { id: "how-it-works", title: "How a ClickFix Attack Works" },
    { id: "growth", title: "How Widespread ClickFix Has Become" },
    { id: "variants", title: "New ClickFix Variants in 2026" },
    { id: "pipeline", title: "From Fake CAPTCHA to Dark Web Market" },
    { id: "business-risk", title: "Why ClickFix Is a Business Problem" },
    { id: "detection", title: "How to Detect ClickFix Activity" },
    { id: "prevention", title: "How to Prevent ClickFix Attacks" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>Most malware has to sneak past security tools. ClickFix takes a simpler route: it convinces the victim to install it themselves. A web page shows a fake CAPTCHA or a fake error, then gives "simple steps" to fix it: press a couple of keys, paste, and hit Enter. What the user has just pasted is a command that downloads malware.</p>

      <p>In less than two years ClickFix has become one of the most common ways attackers get malware onto computers, second only to phishing in some measurements. Its favourite payload is the infostealer, which means a single click on a fake CAPTCHA can end with an employee's saved passwords and session cookies for sale on the dark web. This guide explains how that pipeline works and how to break it.</p>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">500%+</div>
          <div class="dt-stat-label">Rise in ClickFix attacks in the first half of 2025</div>
          <div class="dt-stat-source">ESET Threat Report H1 2025</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">~8%</div>
          <div class="dt-stat-label">Share of all blocked attacks, second only to phishing</div>
          <div class="dt-stat-source">ESET Threat Report H1 2025</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">+108%</div>
          <div class="dt-stat-label">Growth in fake CAPTCHA detections from late 2025 to early 2026</div>
          <div class="dt-stat-source">ESET Threat Report H1 2026</div>
        </div>
      </div>

      <h2 id="what-is-clickfix">What Is ClickFix?</h2>

      <p>ClickFix is a social engineering technique, not a single piece of malware. It shows the user a believable problem, such as "verify you are human", "your browser needs an update" or "this document failed to load", and offers a fix that requires running a command. Because the user runs the command themselves, many of the protections that stop malicious downloads and attachments never get a chance to act.</p>

      <p>The technique works on Windows, macOS and Linux. Criminal groups, ransomware affiliates and state-aligned actors have all used it, and the list of malware delivered through it keeps growing: infostealers, remote access trojans, cryptominers and ransomware loaders.</p>

      <h2 id="how-it-works">How a ClickFix Attack Works</h2>

      <ol>
        <li><strong>The lure.</strong> The victim lands on a page that looks legitimate. Often it is a real small-business website that attackers have compromised, or a page reached through a malicious ad or search result.</li>
        <li><strong>The fake problem.</strong> A CAPTCHA, error message or "verification" box appears and asks the user to click a button such as "Verify" or "Fix".</li>
        <li><strong>The hidden copy.</strong> Clicking the button silently copies a malicious command to the clipboard using JavaScript.</li>
        <li><strong>The instructions.</strong> The page tells the user to open the Windows Run box (Windows key + R), Windows Terminal, or the Mac Terminal, then paste and press Enter.</li>
        <li><strong>The download.</strong> The command, usually an encoded PowerShell or shell command, fetches the next stage from the attacker's server, often without saving an obvious file to disk.</li>
        <li><strong>The payload.</strong> The final stage installs malware, most often an infostealer such as Lumma Stealer on Windows or Atomic Stealer (AMOS) on macOS, which collects saved passwords, cookies, crypto wallets and system details.</li>
      </ol>

      <div class="dt-callout dt-callout--warning">
        <div class="dt-callout__title">One simple rule</div>
        <p>No legitimate CAPTCHA, website or software update will ever ask you to paste a command into Run, Terminal or PowerShell. If a page asks you to do that, close it and report it.</p>
      </div>

      <h2 id="growth">How Widespread ClickFix Has Become</h2>

      <p>ESET's telemetry shows how quickly the technique spread. In the first half of 2025, ClickFix attacks rose by more than 500 percent and made up nearly 8 percent of all attacks ESET blocked, behind only phishing. After a quieter second half of 2025, detections of fake CAPTCHA pages rose again by 108 percent in the first half of 2026, though they stayed below the early-2025 peak.</p>

      <p>The targets are global. In ESET's H1 2026 data, Japan accounted for the largest share of detections at 14 percent, followed by Slovakia at 7 percent, with France, Spain and Peru each above 5 percent. ESET also warns that counting fake CAPTCHA pages alone understates the problem, because each stage of an attack may be detected under a different name.</p>

      <h2 id="variants">New ClickFix Variants in 2026</h2>

      <p>Attackers keep changing the lure while the core trick stays the same. The main variants seen so far:</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Variant</strong></div>
          <div class="table-cell"><strong>How it works</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Classic fake CAPTCHA</div>
          <div class="table-cell">"Verify you are human" box that asks the user to paste a command into the Windows Run dialog</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Windows Terminal lure</div>
          <div class="table-cell">Seen by Microsoft from February 2026: tells users to open Windows Terminal instead of Run, which looks like normal admin activity and draws less attention from security tools. Payload: Lumma Stealer</div>
        </div>
        <div class="table-row">
          <div class="table-cell">macOS Terminal lure</div>
          <div class="table-cell">Fake verification pages that serve a Mac-specific shell command, often delivering Atomic Stealer</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Fake system errors</div>
          <div class="table-cell">Fake blue screens, frozen screens, failed downloads, WordPress admin warnings and fake service outages</div>
        </div>
        <div class="table-row">
          <div class="table-cell">"AI fix" pages</div>
          <div class="table-cell">Fake troubleshooting steps hosted on the sharing features of popular AI platforms, so the page looks trustworthy</div>
        </div>
        <div class="table-row">
          <div class="table-cell">CrashFix</div>
          <div class="table-cell">A malicious browser extension posing as an ad blocker waits, then shows fake crash warnings and pushes users to "fix" steps</div>
        </div>
        <div class="table-row">
          <div class="table-cell">ConsentFix</div>
          <div class="table-cell">Tricks users into copying a sign-in URL containing an OAuth authorisation code, which can give attackers access to a Microsoft account without a password or MFA prompt</div>
        </div>
      </div>

      <p>Many ClickFix campaigns also hide their configuration on public blockchains, a technique known as EtherHiding, which makes the infrastructure harder to take down.</p>

      <h2 id="pipeline">From Fake CAPTCHA to Dark Web Market</h2>

      <p>ClickFix is usually just the first step in a longer criminal supply chain:</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Stage</strong></div>
          <div class="table-cell"><strong>What happens</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">1. Infection</div>
          <div class="table-cell">A user follows ClickFix instructions and installs an infostealer</div>
        </div>
        <div class="table-row">
          <div class="table-cell">2. Collection</div>
          <div class="table-cell">The stealer grabs saved passwords, session cookies, crypto wallets, VPN and cloud logins from the browser and system</div>
        </div>
        <div class="table-row">
          <div class="table-cell">3. Sale</div>
          <div class="table-cell">The data is packaged as a "log" and sold or shared on dark web markets and Telegram channels, often within about 48 hours</div>
        </div>
        <div class="table-row">
          <div class="table-cell">4. Resale of access</div>
          <div class="table-cell">Buyers or initial access brokers test corporate logins and sell working access to other criminals</div>
        </div>
        <div class="table-row">
          <div class="table-cell">5. Attack</div>
          <div class="table-cell">Ransomware affiliates, fraudsters or data thieves use the access against the victim's employer</div>
        </div>
      </div>

      <p>The scale of that market is large. KELA tracked 2.86 billion compromised credentials circulating across criminal markets in 2025, and Verizon's 2025 Data Breach Investigations Report found that 54 percent of ransomware victims had domain credentials in stealer log markets before they were attacked. ClickFix is one of the main ways those logs are produced.</p>

      <h2 id="business-risk">Why ClickFix Is a Business Problem</h2>

      <ul>
        <li><strong>Personal devices leak corporate logins.</strong> An employee who logs into work email or SSO on a home computer can lose those credentials when a family member clicks a fake CAPTCHA.</li>
        <li><strong>Session cookies bypass MFA.</strong> Stolen session tokens let attackers reuse a logged-in session without needing the password or a second factor.</li>
        <li><strong>It evades email security.</strong> Many ClickFix lures arrive through web browsing, ads or compromised sites, not email attachments.</li>
        <li><strong>It hides in normal tools.</strong> PowerShell, Windows Terminal and Terminal are legitimate tools that admins use every day.</li>
      </ul>

      <h2 id="detection">How to Detect ClickFix Activity</h2>

      <h3>On your endpoints</h3>
      <ul>
        <li>PowerShell, cmd or mshta launched from the Run dialog or Windows Terminal with encoded or obfuscated commands</li>
        <li>Commands that download and run content in one step, such as curl piped into a shell on macOS</li>
        <li>New Microsoft Defender exclusions or disabled protections shortly after a browsing session</li>
        <li>Unexpected browser extensions, especially new ad blockers</li>
      </ul>

      <h3>On the dark web</h3>
      <ul>
        <li>Employee work emails, SSO or VPN logins appearing in stealer logs</li>
        <li>Session cookies for your Microsoft 365, Okta or SaaS tenants in leaked logs</li>
        <li>Access to your organisation advertised by brokers</li>
      </ul>

      <p>The endpoint signals tell you an infection may have happened on a managed device. Dark web monitoring tells you when credentials stolen from any device, managed or not, have reached criminal markets. DarkThreat monitors stealer logs, forums and Telegram channels for your domains so you can reset exposed accounts quickly. See <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="prevention">How to Prevent ClickFix Attacks</h2>

      <ol>
        <li><strong>Train people on one clear rule:</strong> real websites never ask you to paste commands. Include ClickFix screenshots in security awareness training.</li>
        <li><strong>Restrict the Run dialog and scripting for regular users</strong> through Group Policy or device management where it does not affect their work.</li>
        <li><strong>Use PowerShell Constrained Language Mode and attack surface reduction rules</strong> to block obfuscated scripts and suspicious child processes.</li>
        <li><strong>Control browser extensions</strong> with an allowlist on managed browsers.</li>
        <li><strong>Protect sessions,</strong> not just passwords: use phishing-resistant MFA, token protection and short session lifetimes for sensitive apps.</li>
        <li><strong>Limit corporate logins on personal devices</strong> with conditional access policies.</li>
        <li><strong>Monitor stealer logs</strong> for your domains and reset passwords and revoke sessions as soon as an employee's data appears.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>ClickFix tricks users into running malicious commands through fake CAPTCHAs and fake error fixes.</li>
        <li>It surged by more than 500 percent in 2025 and grew again in 2026, with new variants using Windows Terminal, AI platforms and browser extensions.</li>
        <li>Its main payload is infostealers, which feed stolen logins and cookies into dark web markets.</li>
        <li>Those logs are a major source of the access later used in ransomware attacks.</li>
        <li>User awareness, script restrictions, session protection and stealer-log monitoring together break the chain.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What does a ClickFix page look like?</h3>
      <p>Usually a normal-looking CAPTCHA or error box with a "Verify" or "Fix" button, followed by short instructions to press keys like Windows + R or Windows + X, paste, and press Enter.</p>

      <h3>What should I do if I already ran the command?</h3>
      <p>Disconnect the device from the network, tell your IT or security team immediately, and from a different, clean device change your passwords and sign out of all sessions for important accounts, especially email, banking and work logins.</p>

      <h3>Does antivirus stop ClickFix?</h3>
      <p>Modern endpoint protection catches many ClickFix stages, but because the user runs the command and attackers keep changing their scripts, it does not catch every case. Training and restricting scripting reduce the risk further.</p>

      <h3>Is ClickFix only a Windows problem?</h3>
      <p>No. Campaigns target macOS through Terminal commands and Linux as well. Mac users are frequently targeted with Atomic Stealer.</p>

      <h3>How does dark web monitoring help with ClickFix?</h3>
      <p>Infections on unmanaged devices are invisible to your security tools. When the stolen data appears in stealer logs, dark web monitoring alerts you so you can reset credentials before attackers use them.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/infostealer-logs-what-they-contain-and-why-you-need-to-monitor-them">Infostealer Logs: What They Contain and Why You Need to Monitor Them</a></li>
        <li><a href="/blog/how-infostealer-malware-enables-ransomware-the-attack-kill-chain">How Infostealer Malware Enables Ransomware: The Attack Kill Chain</a></li>
        <li><a href="/blog/stolen-session-tokens-vs-passwords-new-frontier-of-credential-theft">Stolen Session Tokens vs Passwords: New Frontier of Credential Theft</a></li>
        <li><a href="/blog/building-employee-awareness-programs-around-credential-security">Building Employee Awareness Programs Around Credential Security</a></li>
        <li><a href="/blog/qilin-ransomware-dark-web-activity-and-business-risks">Qilin Ransomware: Dark Web Activity and Business Risks</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://www.helpnetsecurity.com/2025/06/26/clickfix-attacks-fakecaptcha-eset-report/" target="_blank" rel="noopener noreferrer">Help Net Security: ClickFix attacks skyrocketing more than 500% (ESET Threat Report H1 2025)</a></li>
        <li><a href="https://www.itmedia.co.jp/enterprise/articles/2607/30/news071.html" target="_blank" rel="noopener noreferrer">ITmedia: ESET Threat Report H1 2026 findings on ClickFix (Japanese)</a></li>
        <li><a href="https://www.theregister.com/2026/03/06/microsoft_spots_clickfix_campaign_abusing/" target="_blank" rel="noopener noreferrer">The Register: Microsoft spots ClickFix campaign abusing Windows Terminal</a></li>
        <li><a href="https://cybelangel.com/blog/how-clickfix-uses-fake-captchas-to-compromise-users/" target="_blank" rel="noopener noreferrer">CybelAngel: How ClickFix uses fake CAPTCHAs to compromise users</a></li>
        <li><a href="https://cybelangel.com/de/blog/infostealer-logs-after-their-stolen-criminal-economy-data/" target="_blank" rel="noopener noreferrer">CybelAngel: Infostealer logs, what happens to stolen credentials after infection</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
