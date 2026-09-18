import type { NextConfig } from "next";
import path from "path";
import { BLOG_SLUG_REDIRECTS } from "./src/lib/blog/blogSlugRedirects";

const blogRedirects = Object.entries(BLOG_SLUG_REDIRECTS).map(([from, to]) => ({
  source: `/blog/${from}`,
  destination: `/blog/${to}`,
  permanent: true,
}));

const isDev = process.env.NODE_ENV === "development";

/**
 * Report-only for now: violations surface in the browser console without
 * blocking. Promote to `Content-Security-Policy` once reports come back clean.
 *
 * `unsafe-inline` is required by Next.js's hydration payload, the consent
 * bootstrap in layout.tsx, and JsonLd. `unsafe-eval` is dev-only (Turbopack).
 */
const cspDirectives = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline'",
    isDev ? "'unsafe-eval'" : "",
    "https://www.googletagmanager.com",
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  [
    "connect-src 'self'",
    "https://hguzgggcdnerycccihov.supabase.co",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://*.analytics.google.com",
    isDev ? "ws: wss:" : "",
  ]
    .filter(Boolean)
    .join(" "),
  "worker-src 'self' blob:",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

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
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value: cspDirectives,
          },
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
