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

/** Per-page Open Graph URL (Next.js does not derive og:url from canonical alone). */
export function pageOpenGraph(path: string): NonNullable<Metadata["openGraph"]> {
  return { url: pageUrl(path) };
}

/** Canonical, hreflang, and og:url for a static page. */
export function pageSeo(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: pageAlternates(path),
    openGraph: pageOpenGraph(path),
  };
}
