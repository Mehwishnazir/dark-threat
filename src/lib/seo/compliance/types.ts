import type { LucideIcon } from "lucide-react";

export type ComplianceLink = {
  label: string;
  href: string;
  desc?: string;
};

export type CompliancePageData = {
  slug: string;
  path: string;
  /** Short label used in the breadcrumb and badges, e.g. "HIPAA". */
  name: string;
  /** One-line description for cards that link to this page. */
  summary: string;
  /** Child title only — the layout appends " | DarkThreat.ai". */
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    icon: LucideIcon;
    titleLead: string;
    titleHighlight: string;
    intro: string;
    ctaLabel: string;
  };
  overview: {
    heading: string;
    paragraphs: string[];
  };
  threats: {
    heading: string;
    intro: string;
    items: { icon: LucideIcon; title: string; desc: string }[];
  };
  capabilities: {
    heading: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  controls: {
    heading: string;
    intro: string;
    items: { ref: string; title: string; desc: string }[];
  };
  /** Optional long-form section between the control mapping and the process steps. */
  deepDive?: {
    heading: string;
    paragraphs: string[];
  };
  steps: {
    heading: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  faqs: { q: string; a: string }[];
  disclaimer: string;
  relatedIndustries: ComplianceLink[];
  relatedPosts: ComplianceLink[];
};
