/**
 * Consent-gated analytics helpers (Google Consent Mode v2).
 * Default-deny is set in root layout via next/script (beforeInteractive).
 * GA4 (G-94289DG66E) loads only after analytics consent — same localStorage
 * key and 12-month expiry as the Vite app so preferences carry over.
 */

export const GA_ID = "G-94289DG66E";
export const CONSENT_KEY = "cookie_consent";
export const CONSENT_EVENT = "dt-consent-updated";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 months

export type ConsentCategories = {
  necessary: true;
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

export function storeConsent(
  categories: Omit<ConsentCategories, "necessary"> & { necessary?: true }
) {
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
  } catch {
    /* ignore quota / private mode */
  }
  return record;
}

export function clearConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* ignore */
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
}

/** Update Consent Mode flags and notify listeners (e.g. GA script loader). */
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

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
}

export function configureGa() {
  if (typeof window === "undefined" || !window.gtag) return;
  if (window.__dtAnalyticsLoaded) return;
  window.__dtAnalyticsLoaded = true;
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
}
