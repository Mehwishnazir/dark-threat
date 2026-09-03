const LEGAL_PATHS = new Set(["/privacy-policy", "/website-terms", "/platform-terms"]);

const LOCATION_PREFIXES = [
  "/dark-web-monitoring/",
  "/brand-monitoring/",
  "/attack-surface-monitoring/",
  "/credential-monitoring/",
  "/data-breach-monitoring/",
  "/digital-risk-protection/",
  "/domain-monitoring/",
  "/executive-monitoring/",
  "/threat-intelligence/",
] as const;

export type FooterVariant = "full" | "blog" | "industry" | "location" | "none";

export type SiteChromeConfig = {
  showHeader: boolean;
  footerVariant: FooterVariant;
};

function isLocationPage(pathname: string): boolean {
  return LOCATION_PREFIXES.some((prefix) => {
    if (!pathname.startsWith(prefix)) return false;
    const rest = pathname.slice(prefix.length);
    return rest.length > 0 && !rest.includes("/");
  });
}

export function getSiteChromeConfig(pathname: string): SiteChromeConfig {
  if (LEGAL_PATHS.has(pathname)) {
    return { showHeader: false, footerVariant: "none" };
  }

  if (pathname.startsWith("/compare/")) {
    return { showHeader: true, footerVariant: "none" };
  }

  if (pathname === "/blog") {
    return { showHeader: true, footerVariant: "blog" };
  }

  if (pathname.startsWith("/industries/")) {
    return { showHeader: true, footerVariant: "industry" };
  }

  if (isLocationPage(pathname)) {
    return { showHeader: true, footerVariant: "location" };
  }

  return { showHeader: true, footerVariant: "full" };
}
