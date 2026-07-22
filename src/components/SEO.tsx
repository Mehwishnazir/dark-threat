import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://www.darkthreat.ai";

export type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  noindex?: boolean;
};

/**
 * Reusable per-route SEO head. Emits title, description, self-referencing
 * canonical (absolute, www host), and og/twitter mirrors. Global JSON-LD
 * (Organization / SoftwareApplication / BreadcrumbList) lives in RouteHead.
 */
export default function SEO({
  title,
  description,
  canonicalPath,
  ogImage,
  noindex = false,
}: SEOProps) {
  const path =
    canonicalPath.length > 1 && canonicalPath.endsWith("/")
      ? canonicalPath.slice(0, -1)
      : canonicalPath;
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
