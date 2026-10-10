export type ComparePageMeta = {
  slug: string;
  href: string;
  name: string;
  competitor: string;
  summary: string;
};

export const COMPARE_PAGES: ComparePageMeta[] = [
  {
    slug: "darkthreat-vs-darkowl",
    href: "/compare/darkthreat-vs-darkowl",
    name: "DarkThreat vs DarkOwl",
    competitor: "DarkOwl",
    summary: "Side-by-side comparison of pricing transparency, trial access, and dark web coverage.",
  },
  {
    slug: "darkthreat-vs-recorded-future",
    href: "/compare/darkthreat-vs-recorded-future",
    name: "DarkThreat vs Recorded Future",
    competitor: "Recorded Future",
    summary: "Focused dark web and credential monitoring for mid-market teams versus full enterprise TI suites.",
  },
  {
    slug: "darkthreat-vs-zerofox",
    href: "/compare/darkthreat-vs-zerofox",
    name: "DarkThreat vs ZeroFox",
    competitor: "ZeroFox",
    summary: "Credential-first dark web coverage with public pricing versus broad digital risk protection bundles.",
  },
  {
    slug: "darkthreat-vs-flare",
    href: "/compare/darkthreat-vs-flare",
    name: "DarkThreat vs Flare",
    competitor: "Flare",
    summary: "Side-by-side comparison of trial access, pricing, and dark web monitoring scope.",
  },
  {
    slug: "darkthreat-vs-socradar",
    href: "/compare/darkthreat-vs-socradar",
    name: "DarkThreat vs SOCRadar",
    competitor: "SOCRadar",
    summary: "Streamlined credential leak detection versus extended XTI suites covering brand and attack surface.",
  },
  {
    slug: "darkthreat-vs-cybersixgill",
    href: "/compare/darkthreat-vs-cybersixgill",
    name: "DarkThreat vs Cybersixgill",
    competitor: "Cybersixgill",
    summary: "Faster onboarding and transparent plans versus deep/dark web collection built for large SOC teams.",
  },
  {
    slug: "darkthreat-vs-mandiant",
    href: "/compare/darkthreat-vs-mandiant",
    name: "DarkThreat vs Mandiant",
    competitor: "Mandiant",
    summary: "DarkThreat plans and trial terms alongside Google Threat Intelligence and Mandiant Digital Threat Monitoring.",
  },
  {
    slug: "darkthreat-vs-spycloud",
    href: "/compare/darkthreat-vs-spycloud",
    name: "DarkThreat vs SpyCloud",
    competitor: "SpyCloud",
    summary: "DarkThreat plans and trial terms alongside SpyCloud's identity threat protection built on recaptured data.",
  },
  {
    slug: "darkthreat-vs-flashpoint",
    href: "/compare/darkthreat-vs-flashpoint",
    name: "DarkThreat vs Flashpoint",
    competitor: "Flashpoint",
    summary: "DarkThreat plans and trial terms alongside Flashpoint Ignite's cyber, vulnerability and physical security intelligence.",
  },
  {
    slug: "darkthreat-vs-crowdstrike",
    href: "/compare/darkthreat-vs-crowdstrike",
    name: "DarkThreat vs CrowdStrike",
    competitor: "CrowdStrike",
    summary: "DarkThreat plans and trial terms alongside CrowdStrike Falcon Adversary Intelligence and its Recon feature.",
  },
];

export function otherComparePages(currentSlug: string): ComparePageMeta[] {
  return COMPARE_PAGES.filter((p) => p.slug !== currentSlug);
}
