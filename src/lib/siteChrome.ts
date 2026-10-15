const LEGAL_PATHS = new Set(["/privacy-policy", "/website-terms", "/platform-terms"]);

export type FooterVariant = "full" | "blog" | "industry" | "location" | "none";

export type SiteChromeConfig = {
  showHeader: boolean;
  footerVariant: FooterVariant;
};

export function getSiteChromeConfig(pathname: string): SiteChromeConfig {
  if (LEGAL_PATHS.has(pathname)) {
    return { showHeader: false, footerVariant: "none" };
  }

  if (pathname === "/blog") {
    return { showHeader: true, footerVariant: "blog" };
  }

  return { showHeader: true, footerVariant: "full" };
}
