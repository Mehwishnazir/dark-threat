import type { MetadataRoute } from "next";
import { getAllAuthorSlugs } from "@/lib/blog/authors";
import { getAllBlogSlugs } from "@/lib/blog/data";

const BASE = "https://darkthreat.ai";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/solution",
  "/blog",
  "/privacy-policy",
  "/platform-terms",
  "/website-terms",
  "/threat-intelligence-platform",
  "/dark-web-monitoring",
  "/credential-leak-detection",
  "/data-leak-detection",
  "/dark-web-data-removal",
  "/compliance-framework-alignment",
  "/managed-soc-support",
  "/advanced-threat-search",
  "/external-attack-surface-monitoring",
  "/industries",
  "/industries/financial-services",
  "/industries/healthcare",
  "/industries/legal",
  "/industries/government",
  "/industries/ecommerce",
  "/industries/saas-technology",
  "/industries/crypto-fintech",
  "/industries/education",
  "/industries/professional-services",
  "/compare/darkthreat-vs-darkowl",
  "/compare/darkthreat-vs-recorded-future",
  "/compare/darkthreat-vs-zerofox",
  "/compare/darkthreat-vs-flare",
  "/compare/darkthreat-vs-socradar",
  "/compare/darkthreat-vs-cybersixgill",
  "/dark-web-monitoring/new-york-city",
  "/dark-web-monitoring/chicago",
  "/threat-intelligence/washington-dc",
  "/data-breach-monitoring/california",
  "/credential-monitoring/san-francisco",
  "/attack-surface-monitoring/texas",
  "/digital-risk-protection/new-york",
  "/brand-monitoring/los-angeles",
  "/executive-monitoring/boston",
  "/domain-monitoring/austin",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/blog" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path === "/blog" || path === "/pricing" ? 0.9 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const authorEntries: MetadataRoute.Sitemap = getAllAuthorSlugs().map((slug) => ({
    url: `${BASE}/author/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...authorEntries];
}
