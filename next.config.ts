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
    // App lives at the repo root after the directory restructure.
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
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
