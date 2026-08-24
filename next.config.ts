import type { NextConfig } from "next";
import path from "path";
import { BLOG_SLUG_REDIRECTS } from "./src/lib/blog/blogSlugRedirects";

const blogRedirects = Object.entries(BLOG_SLUG_REDIRECTS).map(([from, to]) => ({
  source: `/blog/${from}`,
  destination: `/blog/${to}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  turbopack: {
    // Parent repo root so the Vite `src/blogs` registry (junctioned into nextjs-app)
    // resolves during Turbopack builds.
    root: path.join(__dirname, ".."),
  },
  async redirects() {
    return [
      // Marketing aliases (from Vite App.tsx Navigate routes)
      { source: "/digital-risk-protection", destination: "/solution", permanent: true },
      { source: "/industries/technology", destination: "/industries/saas-technology", permanent: true },
      { source: "/platform-terms-of-use", destination: "/platform-terms", permanent: true },
      { source: "/website-terms-of-use", destination: "/website-terms", permanent: true },
      // Broken blog Related Resources / legacy slugs → canonical posts
      ...blogRedirects,
    ];
  },
};

export default nextConfig;
