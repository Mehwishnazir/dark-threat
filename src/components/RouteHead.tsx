import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/**
 * Sitewide head injector. Mounted once inside <BrowserRouter>. Emits:
 *  - self-referencing canonical + og:url on the canonical (apex) host
 *  - default robots (index, follow) — per-page <SEO noindex> overrides
 *  - Organization + SoftwareApplication JSON-LD (sitewide)
 *  - BreadcrumbList JSON-LD for any non-root route
 */

const SITE = "https://darkthreat.ai";
const SITE_DESCRIPTION =
  "AI-powered dark web monitoring and credential leak detection. Detect leaks, hacker chatter and breaches before they impact your business.";

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DarkThreat",
  url: SITE,
  logo: `${SITE}/logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: [] as string[],
};

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DarkThreat",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  url: SITE,
  description: SITE_DESCRIPTION,
};

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
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
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
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const url = `${SITE}${normalized}`;
  const breadcrumbs = buildBreadcrumbs(normalized);

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_JSONLD)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(SOFTWARE_JSONLD)}
      </script>
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbs)}
        </script>
      )}
    </Helmet>
  );
}
