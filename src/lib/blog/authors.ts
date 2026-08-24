export type Author = {
  slug: string;
  name: string;
  initials: string;
  jobTitle: string;
  bio: string;
  expertise: string[];
  twitter?: string;
  linkedin?: string;
};

export const AUTHORS: Record<string, Author> = {
  "dr-ayaan-rahman": {
    slug: "dr-ayaan-rahman",
    name: "Dr. Ayaan Rahman",
    initials: "D.A",
    jobTitle: "Chief Threat Intelligence Researcher",
    bio: "Dr. Ayaan Rahman is a cybersecurity expert with 10+ years of experience in dark web monitoring, threat intelligence, and breach detection. He has advised Fortune 500 security teams and published research on hidden marketplaces, credential abuse, and predictive threat analytics.",
    expertise: [
      "Dark Web Monitoring",
      "Threat Intelligence",
      "Cybersecurity",
      "Credential Leak Detection",
      "Incident Response",
    ],
    twitter: "https://twitter.com/DarkThreatAI",
    linkedin: "https://linkedin.com/company/darkthreat",
  },
};

export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS[slug];
}

export function getAllAuthorSlugs(): string[] {
  return Object.keys(AUTHORS);
}
