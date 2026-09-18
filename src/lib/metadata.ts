import type { Metadata } from "next";

export const SITE_URL = "https://darkthreat.ai";

/** Absolute URL for a site path (e.g. `/pricing` → `https://darkthreat.ai/pricing`). */
export function pageUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Canonical + hreflang alternates for a page path. */
export function pageAlternates(path: string): NonNullable<Metadata["alternates"]> {
  const url = pageUrl(path);
  return {
    canonical: path,
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "DarkThreat - Dark Web Monitoring & Threat Intelligence",
};

/**
 * Per-page Open Graph. Next.js replaces rather than merges `openGraph`, so the
 * layout-level fields must be restated here or pages lose them entirely.
 */
export function pageOpenGraph(path: string): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    siteName: "DarkThreat",
    locale: "en_US",
    url: pageUrl(path),
    images: [OG_IMAGE],
  };
}

/** Canonical, hreflang, and og:url for a static page. */
export function pageSeo(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: pageAlternates(path),
    openGraph: pageOpenGraph(path),
  };
}
