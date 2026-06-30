import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/**
 * Sitewide head injector. Mounted once inside <BrowserRouter>.
 *
 * For every route it emits:
 *  - <link rel="canonical"> matching the current route on https://darkthreat.ai
 *  - <meta name="robots" content="index, follow"> (overridable per-page)
 *  - <meta property="og:url"> matching the current route
 *  - <script type="application/ld+json"> with a BreadcrumbList for sub-pages
 *
 * Per-page <Helmet> blocks may still override title, description, and add
 * additional JSON-LD. react-helmet-async de-dupes <meta name|property> but
 * not <link rel="canonical">, so any per-page canonical we still ship will
 * stack with this one — we therefore deliberately leave per-page canonicals
 * in place where they exist and rely on the latest one winning at render.
 */

const SITE = "https://darkthreat.ai";

// Human labels for the first path segment when building breadcrumbs.
const SEGMENT_LABELS: Record<string, string> = {
  solution: "Solution",
  pricing: "Pricing",
  about: "About",
  contact: "Contact",
  blog: "Blog",
  "dark-web-monitoring": "Dark Web Monitoring",
  "credential-leak-detection": "Credential Leak Detection",
  "data-leak-detection": "Data Leak Detection",
  "dark-web-data-removal": "Dark Web Data Removal",
  "threat-intelligence": "Threat Intelligence",
  industries: "Industries",
  compare: "Compare",
  author: "Author",
  "trial-coming-soon": "Free Trial",
  "privacy-policy": "Privacy Policy",
  "platform-terms": "Platform Terms",
  "website-terms": "Website Terms",
};

function humanize(seg: string) {
  if (SEGMENT_LABELS[seg]) return SEGMENT_LABELS[seg];
  return seg
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function buildBreadcrumbs(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE}/`,
    },
  ];

  let acc = "";
  parts.forEach((seg, idx) => {
    acc += `/${seg}`;
    items.push({
      "@type": "ListItem",
      position: idx + 2,
      name: humanize(seg),
      item: `${SITE}${acc}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export default function RouteHead() {
  const { pathname } = useLocation();
  // Normalize trailing slash (except root)
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const url = `${SITE}${normalized}`;
  const breadcrumbs = buildBreadcrumbs(normalized);

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={url} />
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbs)}
        </script>
      )}
    </Helmet>
  );
}
