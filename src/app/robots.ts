import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/admin",
          "/auth",
          "/signin",
          "/forgot-password",
          "/alerts",
          "/reports",
          "/threat-intelligence",
        ],
      },
    ],
    sitemap: "https://darkthreat.ai/sitemap.xml",
    host: "https://darkthreat.ai",
  };
}
