import type { BlogPost as BlogPostType } from "@/components/blog/BlogCard";

export const darkWebThreats: BlogPostType & {
  content: string;
  tableOfContents: { id: string; title: string }[];
} = {
  id: "1",
  slug: "understanding-dark-web-threats-2025",
  title: "Understanding Dark Web Threats in 2025",
  excerpt: "Learn how cybercriminals operate in the dark web ecosystem.",
  featuredImage:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
  category: "Threat Intelligence",
  publishDate: "Jan 5, 2025",
  readingTime: "8 min read",
  author: "DarkThreat Research Team",

  tableOfContents: [
    { id: "intro", title: "Introduction" },
    { id: "market", title: "Dark Web Marketplaces" },
    { id: "defense", title: "Defense Strategies" },
  ],

  content: `
    <h2 id="intro">Introduction</h2>
    <p>The dark web has evolved into a sophisticated cybercrime marketplace in 2025.</p>

    <h2 id="market">Dark Web Marketplaces</h2>
    <p>Threat actors now sell credentials, malware kits, and ransomware access.</p>

    <h2 id="defense">Defense Strategies</h2>
    <p>Organizations must use monitoring, zero-trust, and rapid response.</p>
  `,
};
