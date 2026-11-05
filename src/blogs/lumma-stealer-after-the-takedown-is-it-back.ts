import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const lummaStealerAfterTheTakedownIsItBack: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-007",
  slug: "lumma-stealer-after-the-takedown-is-it-back",
  title: "Lumma Stealer After the Takedown: Is It Back?",
  excerpt:
    "In May 2025 Microsoft and law enforcement seized 2,300 Lumma Stealer domains. Within weeks it was back, then its operators were doxxed, then it surged again. Here is what happened to Lumma and what it means for stolen credentials in 2026.",
  featuredImage: "/dark-threat-2.webp",
  category: "Threat Intelligence",
  publishDate: "November 6, 2026",
  readingTime: "10 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "Lumma Stealer After the Takedown: Is It Back?",
  metaDescription:
    "Lumma Stealer survived a 2025 takedown and a doxxing campaign. See how it came back, how it spreads in 2026, and how to protect stolen credentials.",
  tableOfContents: [
    { id: "what-is-lumma", title: "What Is Lumma Stealer?" },
    { id: "the-takedown", title: "The May 2025 Takedown" },
    { id: "the-comeback", title: "The Comeback" },
    { id: "the-doxxing", title: "The Doxxing and the Shift to Rivals" },
    { id: "lumma-in-2026", title: "Lumma in 2026" },
    { id: "lessons", title: "What Lumma Teaches About Takedowns" },
    { id: "what-it-steals", title: "What Lumma Steals and Where It Goes" },
    { id: "protect", title: "How to Protect Your Organisation" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>For most of 2024 and early 2025, Lumma Stealer was the most popular information-stealing malware on criminal forums. Then, in May 2025, Microsoft, the US Department of Justice, Europol and Japanese police hit it with one of the largest takedowns ever aimed at an infostealer. Thousands of domains were seized and its control panels were disrupted.</p>

      <p>Many expected that to be the end. It was not. Lumma was running again within weeks, survived a damaging doxxing campaign later that year, and was surging again by early 2026. This is the story of what happened, and why it matters for every organisation whose employees' passwords might end up in a stealer log.</p>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">394,000</div>
          <div class="dt-stat-label">Windows computers Microsoft found infected with Lumma in just two months of 2025</div>
          <div class="dt-stat-source">Microsoft Digital Crimes Unit</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">2,300</div>
          <div class="dt-stat-label">Malicious domains taken down, suspended or blocked in May 2025</div>
          <div class="dt-stat-source">Microsoft Digital Crimes Unit</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">Weeks</div>
          <div class="dt-stat-label">Time it took Lumma's infrastructure to ramp back up after the takedown</div>
          <div class="dt-stat-source">Trend Micro</div>
        </div>
      </div>

      <h2 id="what-is-lumma">What Is Lumma Stealer?</h2>

      <p>Lumma, also known as LummaC2, is information-stealing malware sold as a service on underground forums since at least 2022. Its main developer, known as "Shamel", is reported to be based in Russia and said in a 2023 interview that he had about 400 active clients.</p>

      <p>Buyers subscribe to a control panel and get malware builds to spread however they like. Microsoft described Lumma's pricing tiers as ranging from \$250 to \$1,000, with full source code offered for \$20,000. That low entry price is what made it so widespread: hundreds of criminals, including the ransomware-linked group Octo Tempest (also known as Scattered Spider), used it.</p>

      <p>Once it runs on a computer, Lumma collects saved passwords, browser cookies and session tokens, credit card details, cryptocurrency wallets and system information, then sends everything to the attacker as a "log".</p>

      <h2 id="the-takedown">The May 2025 Takedown</h2>

      <p>On 13 May 2025, Microsoft's Digital Crimes Unit filed legal action in the US District Court for the Northern District of Georgia. The operation, announced on 21 May, involved:</p>

      <ul>
        <li>The takedown, suspension or blocking of around 2,300 malicious domains that formed Lumma's infrastructure.</li>
        <li>More than 1,300 seized domains redirected to Microsoft sinkholes, giving defenders visibility into infected machines.</li>
        <li>The US Department of Justice seizing Lumma's central command structure and disrupting the marketplaces where it was sold.</li>
        <li>Europol's European Cybercrime Centre and Japan's JC3 helping suspend infrastructure in their regions.</li>
        <li>Private partners including ESET, Bitsight, Lumen, Cloudflare, CleanDNS and GMO Registry.</li>
      </ul>

      <p>Microsoft said it had found more than 394,000 infected Windows computers worldwide between 16 March and 16 May 2025 alone.</p>

      <h2 id="the-comeback">The Comeback</h2>

      <p>Just three days after the announcement, on 24 May 2025, Lumma's developer posted on an underground forum. He claimed authorities had exploited a server management flaw to wipe disks, but said the main server had been restored and the weakness closed.</p>

      <p>Trend Micro's telemetry backed this up. Lumma's infrastructure ramped back up within weeks, and the number of targeted accounts returned to normal levels by June and July 2025. The operators changed how they worked:</p>

      <ul>
        <li><strong>New hosting.</strong> Before the takedown, Lumma relied heavily on Cloudflare to hide its servers. Afterwards it moved to other providers, including Russia-based Selectel, which researchers describe as less responsive to abuse reports.</li>
        <li><strong>Quieter channels.</strong> Operators moved away from public forums toward more private communication.</li>
        <li><strong>Same lures, more of them.</strong> Fake software cracks and key generators, ClickFix fake CAPTCHA pages, GitHub repositories promoting game cheats, YouTube videos and Facebook ads all pointed to Lumma downloads.</li>
      </ul>

      <h2 id="the-doxxing">The Doxxing and the Shift to Rivals</h2>

      <p>The second blow came from inside the criminal world. From late August to early October 2025, a campaign on a site calling itself "Lumma Rats" published what it claimed were personal details of five alleged Lumma operators, including names, financial records, passport numbers and email addresses. Trend Micro noted the information was not independently verified and may have been driven by rivals.</p>

      <p>On 17 September 2025, Lumma's official Telegram accounts were reportedly compromised as well. Trend Micro saw Lumma's new samples and control servers decline steadily from early September, and customers began moving to competing stealers, mainly <strong>Vidar</strong> and <strong>StealC</strong>, citing instability and loss of support.</p>

      <div class="dt-callout dt-callout--info">
        <div class="dt-callout__title">Customers move, the threat stays</div>
        <p>When one stealer stumbles, its customers simply switch to another. The number of stolen credentials reaching the dark web barely changes. What changes is the malware name in the log.</p>
      </div>

      <h2 id="lumma-in-2026">Lumma in 2026</h2>

      <p>Lumma did not disappear. Bitdefender reported that Lumma infections scaled up significantly between December 2025 and January 2026, much of it delivered through CastleLoader, a heavily obfuscated loader that runs its payload in memory. Recorded Future had already linked CastleLoader infrastructure to a Lumma command server in November 2025.</p>

      <p>In March 2026, Microsoft Threat Intelligence reported a new ClickFix campaign that told victims to open Windows Terminal and paste a command. The final payload was Lumma Stealer, injected into Chrome and Edge to steal stored credentials. By 2026, threat intelligence firms were again describing Lumma as one of the fastest-growing infostealers, with subscriptions starting at around \$250 a month.</p>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Date</strong></div>
          <div class="table-cell"><strong>What happened</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">2022</div>
          <div class="table-cell">Lumma appears on Russian-language forums as malware-as-a-service</div>
        </div>
        <div class="table-row">
          <div class="table-cell">2024</div>
          <div class="table-cell">Becomes the most advertised infostealer on dark web forums</div>
        </div>
        <div class="table-row">
          <div class="table-cell">May 2025</div>
          <div class="table-cell">Microsoft-led takedown seizes or blocks about 2,300 domains</div>
        </div>
        <div class="table-row">
          <div class="table-cell">June–July 2025</div>
          <div class="table-cell">Infrastructure and infections back to normal levels</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Aug–Oct 2025</div>
          <div class="table-cell">Operators doxxed, Telegram compromised, customers move to Vidar and StealC</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Dec 2025–Jan 2026</div>
          <div class="table-cell">Infections surge again, spread through CastleLoader and ClickFix</div>
        </div>
        <div class="table-row">
          <div class="table-cell">March 2026</div>
          <div class="table-cell">Microsoft reports a Windows Terminal ClickFix campaign delivering Lumma</div>
        </div>
      </div>

      <p>So, is Lumma back? Yes. It never fully left, and when it weakened, other stealers filled the gap.</p>

      <h2 id="lessons">What Lumma Teaches About Takedowns</h2>

      <ul>
        <li><strong>Infrastructure can be rebuilt quickly.</strong> Seizing domains disrupts operations, but the people and code remain. Without arrests, a malware service can be back in weeks.</li>
        <li><strong>The market adapts.</strong> Customers buy subscriptions, not loyalty. When one product falters they switch to Vidar, StealC or a newer brand.</li>
        <li><strong>Old logs keep circulating.</strong> Credentials stolen before a takedown stay on the market long afterwards. Logs from years ago are still traded and resold today.</li>
        <li><strong>Defence cannot rely on takedowns.</strong> Organisations need to assume some employee credentials are already stolen and monitor for them.</li>
      </ul>

      <h2 id="what-it-steals">What Lumma Steals and Where It Goes</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Data stolen</strong></div>
          <div class="table-cell"><strong>How criminals use it</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Saved browser passwords</div>
          <div class="table-cell">Logging into email, VPN, SaaS and cloud accounts</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Session cookies and tokens</div>
          <div class="table-cell">Hijacking logged-in sessions without needing the password or MFA</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Cryptocurrency wallets</div>
          <div class="table-cell">Draining funds directly</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Card and bank details</div>
          <div class="table-cell">Fraud and resale on carding markets</div>
        </div>
        <div class="table-row">
          <div class="table-cell">System information</div>
          <div class="table-cell">Helping buyers judge whether the device belongs to a valuable company</div>
        </div>
      </div>

      <p>The logs are sold on dark web markets and Telegram channels, often within days of infection. Buyers include fraudsters, initial access brokers and ransomware affiliates. Verizon's 2025 Data Breach Investigations Report found that more than half of ransomware victims had domain credentials in stealer log markets before they were attacked.</p>

      <h2 id="protect">How to Protect Your Organisation</h2>

      <ol>
        <li><strong>Monitor stealer logs for your domains.</strong> Whatever the malware is called this month, its logs end up in the same markets. DarkThreat watches stealer logs, forums and Telegram channels for your company's credentials. See <a href="/pricing">DarkThreat plans</a>.</li>
        <li><strong>Reset and revoke immediately.</strong> When an employee's data appears in a log, change the password and revoke all active sessions, not just one.</li>
        <li><strong>Clean the infected device.</strong> Resetting a password on a still-infected computer just leaks the new password.</li>
        <li><strong>Stop saving work passwords in browsers.</strong> Use a managed password manager instead.</li>
        <li><strong>Block common lures.</strong> Restrict cracked software, unknown GitHub downloads and the Run dialog for regular users, and train staff to recognise ClickFix pages.</li>
        <li><strong>Use phishing-resistant MFA and session protection</strong> so stolen cookies are harder to reuse.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>Lumma was the leading infostealer before a Microsoft-led takedown in May 2025 seized about 2,300 domains.</li>
        <li>It was back within weeks on new hosting and quieter channels.</li>
        <li>A doxxing campaign in late 2025 pushed many customers to Vidar and StealC.</li>
        <li>Lumma surged again from December 2025, spread through CastleLoader and ClickFix.</li>
        <li>Takedowns slow stealers down but do not stop stolen credentials reaching the dark web, so continuous monitoring is essential.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Was Lumma Stealer shut down?</h3>
      <p>Its infrastructure was heavily disrupted in May 2025, but no arrests of its core developers were announced and the service resumed within weeks. It was active again at scale by early 2026.</p>

      <h3>What replaced Lumma when it weakened?</h3>
      <p>Trend Micro observed former Lumma customers moving mainly to Vidar and StealC in late 2025. Other malware authors also marketed alternatives to them.</p>

      <h3>How do I know if my company's data is in a Lumma log?</h3>
      <p>Logs are sold privately, so you usually cannot see them through normal search. Dark web monitoring services collect and index stealer logs and alert you when your domains or employee emails appear.</p>

      <h3>How does Lumma usually get onto a computer?</h3>
      <p>Most often through fake software cracks, fake game cheats on GitHub, malicious ads, YouTube links and ClickFix fake CAPTCHA pages that trick users into running a command.</p>

      <h3>Does MFA protect against Lumma?</h3>
      <p>Partly. MFA stops attackers who only have a password, but Lumma also steals session cookies that can bypass MFA. Revoking sessions and using phishing-resistant MFA with token protection reduce that risk.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/clickfix-fake-captcha-attacks-and-the-infostealer-pipeline">ClickFix Fake CAPTCHA Attacks and the Infostealer Pipeline</a></li>
        <li><a href="/blog/infostealer-logs-what-they-contain-and-why-you-need-to-monitor-them">Infostealer Logs: What They Contain and Why You Need to Monitor Them</a></li>
        <li><a href="/blog/why-stealer-malware-fuels-dark-web-markets">Why Stealer Malware Fuels Dark Web Markets</a></li>
        <li><a href="/blog/how-infostealer-malware-enables-ransomware-the-attack-kill-chain">How Infostealer Malware Enables Ransomware: The Attack Kill Chain</a></li>
        <li><a href="/blog/how-to-monitor-the-dark-web-for-stolen-employee-credentials">How to Monitor the Dark Web for Stolen Employee Credentials</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://blogs.microsoft.com/on-the-issues/2025/05/21/microsoft-leads-global-action-against-favored-cybercrime-tool/" target="_blank" rel="noopener noreferrer">Microsoft: Disrupting Lumma Stealer, Microsoft leads global action against favored cybercrime tool</a></li>
        <li><a href="https://www.trendmicro.com/it_it/research/25/g/lumma-stealer-returns.html" target="_blank" rel="noopener noreferrer">Trend Micro: Lumma Stealer returns</a></li>
        <li><a href="https://www.trendmicro.com/en/research/25/j/the-impact-of-water-kurita-lumma-stealer-doxxing.html" target="_blank" rel="noopener noreferrer">Trend Micro: The impact of the Lumma Stealer doxxing</a></li>
        <li><a href="https://news.lavx.hu/article/lummastealer-infections-surge-after-castleloader-malware-campaigns" target="_blank" rel="noopener noreferrer">LummaStealer infections surge after CastleLoader campaigns (Bitdefender research)</a></li>
        <li><a href="https://www.theregister.com/2026/03/06/microsoft_spots_clickfix_campaign_abusing/" target="_blank" rel="noopener noreferrer">The Register: Microsoft spots ClickFix campaign abusing Windows Terminal</a></li>
        <li><a href="https://socradar.io/blog/top-10-stealer-logs/" target="_blank" rel="noopener noreferrer">SOCRadar: Top 10 stealer logs</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
