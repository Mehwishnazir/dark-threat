/**
 * Shared, vendor-neutral content for /compare pages. Must not contain claims
 * about any specific competitor. DarkThreat facts are limited to what /pricing
 * states: 7-day free trial, no credit card required, plans from $288/mo.
 */

export type ChecklistItem = { question: string; why: string };
export type SwitchingNote = { title: string; body: string };
export type ComparisonFaq = { q: string; a: string };

/**
 * DarkThreat plan facts for compare pages. Every statement must match /pricing
 * (PricingPlans and the pricing FAQ); do not add coverage or integration claims.
 */
export const DARKTHREAT_OFFERS: { title: string; body: string }[] = [
  {
    title: "Published pricing from $288/month",
    body: "DarkThreat publishes its plans on the pricing page. Plans start at $288/month with monthly or annual billing, and monthly plans can be cancelled anytime.",
  },
  {
    title: "7-day free trial, no credit card",
    body: "Request a 7-day free trial through our team. No credit card is required to start.",
  },
  {
    title: "Standard and Enterprise plans",
    body: "The Standard plan covers breach and credential monitoring for 1 domain and 1 user, with email alerts and web UI access. The Enterprise plan adds hacker chatter feeds and a second domain or IP.",
  },
  {
    title: "MSSP white-label plan",
    body: "Managed security providers can use the MSSP plan, which includes a white-label portal. Contact our team for a quote.",
  },
];

export const EVALUATION_CHECKLIST: ChecklistItem[] = [
  {
    question: "Which source types do you cover?",
    why: "Ask about dark web forums, marketplaces, paste sites, Telegram and other chat channels, infostealer logs and ransomware leak sites. Headline source counts are hard to compare between vendors, so ask for example findings tied to your own domains.",
  },
  {
    question: "How fresh is the data, and how far back does it go?",
    why: "Find out how long it typically takes for newly posted data to appear as an alert, and how much historical data you can search when investigating an older incident.",
  },
  {
    question: "How are false positives and duplicates handled?",
    why: "Old breaches are often re-posted under new names. Ask how recycled dumps, duplicate records and unrelated keyword matches are filtered before an alert reaches your team, and whether you can tune the rules.",
  },
  {
    question: "What context comes with each alert?",
    why: "A useful alert shows where the data was found, when it was first seen, which accounts or assets are affected and what to do next. Ask to see a real alert, not a slide.",
  },
  {
    question: "Which integrations are included in the plan you would buy?",
    why: "Confirm which alert channels, SIEM, SOAR and ticketing integrations are part of your plan, which cost extra, and whether setup requires a professional services engagement.",
  },
  {
    question: "What takedown or remediation support is offered?",
    why: "Some vendors handle takedown requests in-house, some through partners and some not at all. Ask what is included, what costs extra and what realistic outcomes look like.",
  },
  {
    question: "What are the contract terms?",
    why: "Check whether monthly billing is available, the minimum term, renewal and notice periods, and the cancellation and refund terms before you commit.",
  },
  {
    question: "Is pricing published, and what drives the cost?",
    why: "Ask whether pricing is public and which factors change it, such as the number of domains, users, monitored assets or add-on modules.",
  },
  {
    question: "How is our data retained and handled?",
    why: "Ask how long your watchlists and findings are kept, where they are stored, who can access them, and whether you can export or delete them when the contract ends.",
  },
  {
    question: "What does the trial include?",
    why: "Confirm the trial length, whether a credit card is needed, and which features and how many assets are included, so you evaluate the product you would actually buy.",
  },
];

export const SWITCHING_NOTES: SwitchingNote[] = [
  {
    title: "Run both tools in parallel during the trial",
    body: "Request your 7-day free trial through our team and add the same domains you monitor today. Comparing both tools against identical assets over the same week shows differences in coverage, alert volume and noise more clearly than any feature table.",
  },
  {
    title: "Export your watchlists first",
    body: "Before the trial starts, export the domains, email patterns, executive names, IP ranges and keywords from your current tool so both platforms monitor the same scope. Keep a copy of recent alert history as a baseline for comparison.",
  },
  {
    title: "Map your alert types",
    body: "List the alert categories your team acts on today, such as leaked credentials, infostealer infections, forum mentions and ransomware leak posts. Map each one to its equivalent in the new tool, including severity levels and who should receive it.",
  },
  {
    title: "Plan the cutover",
    body: "Agree on success criteria up front, update runbooks and notification routing, and check your current contract's renewal and notice dates. Keep the existing tool running until the new one has covered a full alerting cycle without gaps.",
  },
];

export function comparisonFaqs(competitorName: string): ComparisonFaq[] {
  return [
    {
      q: `How should I compare DarkThreat and ${competitorName}?`,
      a: "Monitor the same assets in both tools over the same period and score each one against the evaluation checklist on this page: sources, data freshness, false-positive handling, alert context, integrations, takedowns, contract terms, data retention and trial scope. Results on your own domains are a better guide than any feature list.",
    },
    {
      q: "Does DarkThreat offer a free trial?",
      a: "Yes. DarkThreat offers a 7-day free trial with no credit card required. Request your trial through our team.",
    },
    {
      q: "How much does DarkThreat cost?",
      a: "DarkThreat plans start at $288/month. Current plans, including annual pricing, are listed on the DarkThreat pricing page.",
    },
    {
      q: `Can I run DarkThreat and ${competitorName} at the same time?`,
      a: `Yes. Running both tools in parallel on the same domains during the 7-day trial is the most direct way to compare coverage and alert quality. Check your current ${competitorName} contract for renewal and notice dates before planning a cutover.`,
    },
    {
      q: `Where can I confirm ${competitorName}'s current features and pricing?`,
      a: `Directly with ${competitorName}. Vendor features, plans and pricing change over time, so confirm current details with each vendor before making a decision.`,
    },
  ];
}
