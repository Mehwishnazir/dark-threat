/**
 * Consent-gated analytics loader.
 *
 * GA4, Apollo, and LinkedIn Insight Tag are only injected into the DOM
 * after the user accepts cookies. Google Consent Mode v2 is initialized
 * in index.html with every storage type set to "denied" by default; on
 * acceptance we call `gtag('consent', 'update', { granted })` and then
 * load the GA script. On rejection nothing loads.
 */

const GA_ID = "G-DLELJ5K954";
const CONSENT_KEY = "dt-cookie-consent";

type ConsentValue = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __dtAnalyticsLoaded?: boolean;
  }
}

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function storeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
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

export function loadAnalytics() {
  if (typeof window === "undefined") return;
  if (window.__dtAnalyticsLoaded) return;
  window.__dtAnalyticsLoaded = true;

  // Ensure dataLayer/gtag exist (they're initialized in index.html with
  // default-denied consent — we update to granted before loading GA).
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted",
  });

  // GA4
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });

  // Apollo tracker (no-op if APOLLO_ID isn't set — placeholder kept so
  // the user can drop in their account ID without code changes).
  // injectScript("https://assets.apollo.io/micro/website-tracker/tracker.iife.js", { "data-apollo-id": "<APOLLO_ID>" });

  // LinkedIn Insight Tag
  // Replace 0000000 with the real partner ID when available.
  // (window as any)._linkedin_partner_id = "0000000";
  // (window as any)._linkedin_data_partner_ids =
  //   (window as any)._linkedin_data_partner_ids || [];
  // (window as any)._linkedin_data_partner_ids.push(
  //   (window as any)._linkedin_partner_id
  // );
  // injectScript("https://snap.licdn.com/li.lms-analytics/insight.min.js");
}

export function rejectAnalytics() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
  });
}
