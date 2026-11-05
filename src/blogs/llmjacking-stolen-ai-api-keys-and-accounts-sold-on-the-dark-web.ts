import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const llmjackingStolenAiApiKeysAndAccountsSoldOnTheDarkWeb: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
  metaTitle: string;
  metaDescription: string;
} = {
  id: "dt-2026-11-003",
  slug: "llmjacking-stolen-ai-api-keys-and-accounts-sold-on-the-dark-web",
  title: "LLMjacking: Stolen AI API Keys and Accounts Sold on the Dark Web",
  excerpt:
    "LLMjacking is the theft and resale of AI API keys and cloud AI access. Learn how attackers steal AI credentials, how stolen access is sold on underground markets, what it costs victims, and how to detect and stop it.",
  featuredImage: "/dark-threat-1.webp",
  category: "Threat Intelligence",
  publishDate: "November 5, 2026",
  readingTime: "11 min read",
  author: "Dr. Ayaan Rahman",
  metaTitle: "LLMjacking: Stolen AI API Keys Sold on the Dark Web",
  metaDescription:
    "LLMjacking turns stolen AI API keys into huge daily bills. Learn how AI credentials are stolen, resold on the dark web, and how to detect abuse early.",
  tableOfContents: [
    { id: "what-is-llmjacking", title: "What Is LLMjacking?" },
    { id: "how-keys-are-stolen", title: "How Attackers Steal AI Credentials" },
    { id: "what-attackers-do", title: "What Attackers Do With Stolen AI Access" },
    { id: "underground-market", title: "How Stolen AI Access Is Sold" },
    { id: "the-cost", title: "What LLMjacking Costs Victims" },
    { id: "warning-signs", title: "Warning Signs of LLMjacking" },
    { id: "prevention", title: "How to Prevent LLMjacking" },
    { id: "key-takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "related-resources", title: "Related Resources" },
    { id: "sources", title: "Sources" },
  ],
  content: `
<div class="blog-post-container">
  <div class="blog-post-content">
    <article class="blog-post-article">

      <p>Most companies now hold a new kind of secret: API keys and cloud accounts that unlock large language models such as Claude, GPT, Gemini and Mistral. Those keys are valuable. Every request made with them is billed to the owner, and access to top models is restricted in some countries. That combination has created a fast-growing criminal business known as <strong>LLMjacking</strong>.</p>

      <p>In an LLMjacking attack, criminals steal AI credentials, use them to run models at the victim's expense, and often resell the access to others through underground marketplaces and Telegram channels. The victim usually finds out when the cloud bill arrives. This guide explains how the attack works, how the stolen access is traded, and how to catch it before it becomes expensive.</p>

      <div class="dt-stat-grid">
        <div class="dt-stat-card">
          <div class="dt-stat-number">\$46K+</div>
          <div class="dt-stat-label">Worst-case daily cost of the first LLMjacking case Sysdig documented in 2024</div>
          <div class="dt-stat-source">Sysdig Threat Research Team</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">\$100K+</div>
          <div class="dt-stat-label">Fraudulent charges per day seen in individual 2026 incidents</div>
          <div class="dt-stat-source">Google Threat Intelligence / Mandiant</div>
        </div>
        <div class="dt-stat-card">
          <div class="dt-stat-number">35,000</div>
          <div class="dt-stat-label">Attack sessions in one campaign over roughly five weeks, Dec 2025 to Jan 2026</div>
          <div class="dt-stat-source">Cloud Security Alliance</div>
        </div>
      </div>

      <h2 id="what-is-llmjacking">What Is LLMjacking?</h2>

      <p>The term was coined in May 2024 by the Sysdig Threat Research Team. While investigating a cloud intrusion, they found attackers using stolen cloud credentials not to mine cryptocurrency or steal data, but to access hosted AI models. The attackers checked access to ten different AI services, including Anthropic, AWS Bedrock, Azure, Google Vertex AI, Mistral and OpenAI.</p>

      <p>LLMjacking is the AI-era version of cryptojacking. Instead of stealing computing power to mine coins, attackers steal model access, and the owner of the account pays for every token generated.</p>

      <h3>Why AI credentials are such an attractive target</h3>
      <ul>
        <li><strong>They are worth real money.</strong> Premium models are expensive per token, so a single key with high limits can generate a large bill quickly.</li>
        <li><strong>They are easy to resell.</strong> Access can be wrapped behind a proxy and sold to many buyers without revealing the underlying key.</li>
        <li><strong>They bypass restrictions.</strong> Stolen access lets buyers get around regional bans, sanctions and the safety controls tied to their own accounts.</li>
        <li><strong>They are often poorly protected.</strong> Developers paste keys into code, notebooks and config files far more casually than they would a database password.</li>
      </ul>

      <h2 id="how-keys-are-stolen">How Attackers Steal AI Credentials</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Source</strong></div>
          <div class="table-cell"><strong>How it happens</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Public code repositories</div>
          <div class="table-cell">API keys committed to GitHub or other public repos, sometimes years earlier in old commits</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Vulnerable cloud apps</div>
          <div class="table-cell">In Sysdig's first case, attackers stole cloud credentials from a server running a vulnerable version of Laravel (CVE-2021-3129)</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Misconfigured service accounts</div>
          <div class="table-cell">Exposed IAM keys, service account keys and personal access tokens with permission to call AI services</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Infostealer logs</div>
          <div class="table-cell">Malware on a developer's laptop captures saved keys, cloud console sessions and browser cookies</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Exposed self-hosted AI servers</div>
          <div class="table-cell">Ollama and similar servers left open on the internet without authentication</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Phishing</div>
          <div class="table-cell">Fake AI user-group portals that trick developers into pasting files containing valid access tokens</div>
        </div>
      </div>

      <h3>How attackers test a stolen key quietly</h3>
      <p>Attackers try not to trigger alarms before they start using a key. Sysdig observed requests deliberately built to fail with a validation error, which confirms the key works without running a real prompt. Google Threat Intelligence describes keys harvested from GitHub being tested with tiny one-token requests. Attackers have also checked whether the victim logs prompts and responses before using the model, so they know if they are being watched.</p>

      <h2 id="what-attackers-do">What Attackers Do With Stolen AI Access</h2>

      <h3>1. Resell it</h3>
      <p>The most common goal is profit. In the first case Sysdig documented, the traffic came through an open-source reverse proxy that lets one operator manage many stolen LLM accounts behind a single endpoint, then sell access to other users.</p>

      <h3>2. Get around bans and sanctions</h3>
      <p>Sysdig found that many LLMjacking requests came from users in countries where major AI providers restrict access, including Russia. Stolen Western cloud accounts give them a way in.</p>

      <h3>3. Bypass safety controls</h3>
      <p>In February 2025 Microsoft named members of a network it tracks as Storm-2139. According to Microsoft, the group used customer credentials scraped from public sources to break into Azure OpenAI accounts, changed the services' capabilities, resold access, and gave buyers instructions for generating harmful content, including non-consensual explicit images. Microsoft took legal action and obtained a court order to seize a website central to the operation.</p>

      <h3>4. Power attacks against others</h3>
      <p>The newest trend is using stolen AI compute as attack infrastructure. In June 2026 Sysdig documented an exploitation framework that used a hijacked, unauthenticated Ollama server as its reasoning engine to fingerprint targets, generate exploits and escalate privileges with no human in the loop. In that case the victim's AI server became a tool for attacking third parties.</p>

      <h2 id="underground-market">How Stolen AI Access Is Sold</h2>

      <p>LLMjacking has developed a supply chain that looks a lot like other dark web markets:</p>

      <ul>
        <li><strong>Key harvesters</strong> scan public repositories, exposed servers and stealer logs for valid AI credentials.</li>
        <li><strong>Relay operators</strong> pool stolen keys behind proxy gateways, which Google Threat Intelligence calls "LLM mixers", so buyers never see the underlying keys. When one key is revoked, the relay switches to another.</li>
        <li><strong>Resellers</strong> advertise cheap or "unlimited" plans on underground forums and Telegram. Google Threat Intelligence describes one relay service selling an unlimited plan for about \$60 a month, well below the price of legitimate access, and announcing outages on Telegram that appeared to follow key revocations.</li>
        <li><strong>End users</strong> buy access for chatbots, content generation, role-play services or as a way around restrictions.</li>
      </ul>

      <p>The Cloud Security Alliance reports that one campaign, called Operation Bizarre Bazaar, recorded around 35,000 attack sessions between December 2025 and January 2026, roughly 972 a day, alongside a marketplace reselling access to more than 30 AI providers.</p>

      <div class="dt-callout dt-callout--info">
        <div class="dt-callout__title">Why this is a dark web monitoring problem</div>
        <p>Stolen AI keys circulate in stealer logs, paste sites, forum posts and Telegram channels before and during abuse. Catching your organisation's keys or developer credentials there is often the earliest warning you get.</p>
      </div>

      <h2 id="the-cost">What LLMjacking Costs Victims</h2>

      <p>The direct cost is the bill. Sysdig estimated a worst case of more than \$46,000 a day in its first 2024 case, based on the model quotas available to the attacker. Later that year it estimated that abuse of more expensive models could exceed \$100,000 a day. By 2026 those were no longer just estimates: Google Threat Intelligence and Mandiant reported individual incidents with fraudulent charges above \$100,000 a day, and cumulative charges near \$1 million at some organisations before access was cut off.</p>

      <p>Two techniques make the damage worse:</p>
      <ul>
        <li><strong>Turning on disabled models.</strong> Even if your company never enabled a given AI service, an attacker with enough cloud permissions can enable it, and charges can start within minutes.</li>
        <li><strong>Burn and rotate.</strong> Attackers repeatedly create and delete short-lived service accounts to dodge rate limits and keep usage high.</li>
      </ul>

      <p>Beyond the bill, there are other risks: your account may be suspended for policy violations you did not commit, harmful content may be generated under your organisation's name, and an attacker who can call AI services often has other cloud permissions too.</p>

      <h2 id="warning-signs">Warning Signs of LLMjacking</h2>

      <div class="blog-table">
        <div class="table-header">
          <div class="table-cell"><strong>Signal</strong></div>
          <div class="table-cell"><strong>Where you see it</strong></div>
        </div>
        <div class="table-row">
          <div class="table-cell">Your AI API keys or cloud credentials posted in leaks or stealer logs</div>
          <div class="table-cell">Dark web and Telegram monitoring</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Sudden spike in AI spending or token usage</div>
          <div class="table-cell">Cloud billing alerts and provider dashboards</div>
        </div>
        <div class="table-row">
          <div class="table-cell">AI models or services enabled that your team did not turn on</div>
          <div class="table-cell">Cloud audit logs</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Calls that check logging settings or quotas from unknown identities</div>
          <div class="table-cell">Cloud audit logs</div>
        </div>
        <div class="table-row">
          <div class="table-cell">Large numbers of tiny or failing requests, or heavy use at odd hours</div>
          <div class="table-cell">AI service logs</div>
        </div>
        <div class="table-row">
          <div class="table-cell">New, short-lived service accounts being created and deleted</div>
          <div class="table-cell">Identity and access logs</div>
        </div>
      </div>

      <p>DarkThreat monitors stealer logs, paste sites, forums and Telegram channels for exposed credentials and secrets linked to your domains, so you can rotate a leaked key before it is resold. See <a href="/pricing">DarkThreat plans</a>.</p>

      <h2 id="prevention">How to Prevent LLMjacking</h2>

      <ol>
        <li><strong>Inventory every AI key and endpoint.</strong> List which teams use which AI providers, through which accounts and keys.</li>
        <li><strong>Treat AI keys as privileged secrets.</strong> Store them in a secrets manager, never in code, notebooks or shared documents, and rotate them on a schedule.</li>
        <li><strong>Scan your full code history.</strong> Use secret scanning on all repositories, including old commits, and add AI key formats to your scanners.</li>
        <li><strong>Set spending limits and alerts.</strong> Provider-level budgets and billing alerts can catch abuse within hours instead of at month end.</li>
        <li><strong>Block AI services you do not use.</strong> Use cloud policies to prevent anyone from enabling models or regions your organisation does not need.</li>
        <li><strong>Turn on model invocation logging.</strong> Log who calls which model, from where, and how often.</li>
        <li><strong>Lock down self-hosted models.</strong> Never expose Ollama, vLLM or similar servers to the internet without authentication.</li>
        <li><strong>Apply least privilege.</strong> Do not give workloads or developers permission to call or enable AI services unless they need it.</li>
        <li><strong>Monitor for leaked credentials.</strong> Watch stealer logs and underground channels for your developers' cloud logins and keys, and rotate immediately when they appear.</li>
      </ol>

      <h2 id="key-takeaways">Key Takeaways</h2>

      <ul>
        <li>LLMjacking is the theft and abuse of AI API keys and cloud AI access, with the victim paying the bill.</li>
        <li>Keys are stolen from public code, vulnerable apps, misconfigured service accounts, stealer logs and exposed AI servers.</li>
        <li>Stolen access is pooled behind relays and resold cheaply on forums and Telegram.</li>
        <li>Documented incidents have exceeded \$100,000 a day in fraudulent charges.</li>
        <li>Spending limits, secret management, logging and dark web monitoring for leaked keys are the best defences.</li>
      </ul>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the difference between LLMjacking and cryptojacking?</h3>
      <p>Both hijack resources you pay for. Cryptojacking uses your computing power to mine cryptocurrency, while LLMjacking uses your AI model access to generate text, images or code for the attacker or their customers.</p>

      <h3>Can LLMjacking happen if we never enabled an AI service?</h3>
      <p>Yes. If an attacker steals cloud credentials with enough permissions, they can enable AI services themselves. Blocking unused services with cloud policies prevents this.</p>

      <h3>Will the AI provider refund fraudulent charges?</h3>
      <p>Sometimes, but it is not guaranteed and depends on the provider and on whether you followed their security guidance. Prevention and fast detection are far more reliable than relying on a refund.</p>

      <h3>What should we do if we find a leaked AI key?</h3>
      <p>Revoke and replace it immediately, review usage and billing for the period it was exposed, check audit logs for other actions taken with the same credentials, and find out how it leaked so it does not happen again.</p>

      <h3>How does dark web monitoring help against LLMjacking?</h3>
      <p>Stolen keys and developer credentials often appear in stealer logs, paste sites and Telegram channels before or during abuse. Spotting them there lets you rotate the key before it is pooled into a reseller's relay.</p>

      <h2 id="related-resources">Related Resources</h2>
      <ul>
        <li><a href="/blog/dark-web-monitoring-for-api-key-leaks-developer-security-guide">Dark Web Monitoring for API Key Leaks: Developer Security Guide</a></li>
        <li><a href="/blog/how-to-protect-your-api-keys-from-dark-web-exposure">How to Protect Your API Keys from Dark Web Exposure</a></li>
        <li><a href="/blog/credential-leak-detection-for-cloud-infrastructure-aws-azure-gcp">Credential Leak Detection for Cloud Infrastructure (AWS, Azure, GCP)</a></li>
        <li><a href="/blog/credential-monitoring-for-non-human-identities-nhi-and-bots">Credential Monitoring for Non-Human Identities (NHI) and Bots</a></li>
        <li><a href="/blog/infostealer-logs-what-they-contain-and-why-you-need-to-monitor-them">Infostealer Logs: What They Contain and Why You Need to Monitor Them</a></li>
        <li><a href="/industries/saas-technology">Dark Web Monitoring for SaaS and Technology Companies</a></li>
      </ul>

      <h2 id="sources">Sources</h2>
      <ul>
        <li><a href="https://www.sysdig.com/blog/llmjacking-stolen-cloud-credentials-used-in-new-ai-attack" target="_blank" rel="noopener noreferrer">Sysdig: LLMjacking, stolen cloud credentials used in new AI attack</a></li>
        <li><a href="https://cyberinsider.com/llmjacking-attacks-escalate-driving-costs-to-over-100000-day/" target="_blank" rel="noopener noreferrer">CyberInsider: LLMjacking attacks escalate, driving costs to over \$100,000 a day</a></li>
        <li><a href="https://thehackernews.com/2025/02/microsoft-exposes-llmjacking.html" target="_blank" rel="noopener noreferrer">The Hacker News: Microsoft exposes LLMjacking cybercriminals behind Azure AI abuse scheme</a></li>
        <li><a href="https://labs.cloudsecurityalliance.org/research/csa-research-note-llmjacking-offensive-ai-tooling-20260618-c/" target="_blank" rel="noopener noreferrer">Cloud Security Alliance: LLMjacking evolves, stolen AI compute as attack infrastructure</a></li>
        <li><a href="https://xenospectrum.com/en/llmjacking-mandiant-100k-per-day-incidents/" target="_blank" rel="noopener noreferrer">XenoSpectrum: Mandiant reports LLMjacking incidents over \$100K per day</a></li>
      </ul>

    </article>
  </div>
</div>
`,
};
