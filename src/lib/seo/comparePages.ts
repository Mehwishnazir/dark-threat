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
    summary: "Transparent pricing and self-serve trial versus enterprise quote-based dark web intelligence.",
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
    summary: "Self-serve trial and wider infostealer log coverage alongside similar dark web monitoring scope.",
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
];

export function otherComparePages(currentSlug: string): ComparePageMeta[] {
  return COMPARE_PAGES.filter((p) => p.slug !== currentSlug);
}
