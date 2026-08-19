/**
 * Consent-gated analytics loader with category granularity.
 *
 * Google Consent Mode v2 is initialized in index.html with every storage
 * type set to "denied" by default. This module gates GA4 / Apollo /
 * LinkedIn injection on the user's per-category consent choices, and
 * re-asks after 12 months.
 */

const GA_ID = "G-94289DG66E";
export const CONSENT_KEY = "cookie_consent";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 months

export type ConsentCategories = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

export type ConsentRecord = {
  version: 1;
  timestamp: number;
  categories: ConsentCategories;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __dtAnalyticsLoaded?: boolean;
    openCookieSettings?: () => void;
  }
}

export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (!parsed || parsed.version !== 1 || !parsed.categories) return null;
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function storeConsent(categories: Omit<ConsentCategories, "necessary"> & { necessary?: true }) {
  const record: ConsentRecord = {
    version: 1,
    timestamp: Date.now(),
    categories: {
      necessary: true,
      analytics: !!categories.analytics,
      marketing: !!categories.marketing,
      functional: !!categories.functional,
    },
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {}
  return record;
}

export function clearConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {}
}

function injectScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
  return s;
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
}

export function applyConsent(record: ConsentRecord) {
  if (typeof window === "undefined") return;
  ensureGtag();
  const { analytics, marketing, functional } = record.categories;

  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
    functionality_storage: functional ? "granted" : "denied",
    personalization_storage: functional ? "granted" : "denied",
    security_storage: "granted",
  });

  if (analytics && !window.__dtAnalyticsLoaded) {
    window.__dtAnalyticsLoaded = true;
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
  }

  // Marketing scripts (Meta Pixel, LinkedIn Insight, Apollo) would be
  // injected here when `marketing` is true. Add real IDs when available.
  // if (marketing) { injectScript("https://snap.licdn.com/li.lms-analytics/insight.min.js"); }
}
