"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  CONSENT_EVENT,
  GA_ID,
  configureGa,
  getStoredConsent,
  type ConsentRecord,
} from "@/lib/analytics";

/**
 * Loads GA4 via next/script (afterInteractive) only when analytics consent is granted.
 */
export default function GoogleAnalytics() {
  const [loadGa, setLoadGa] = useState(false);

  useEffect(() => {
    const sync = (record: ConsentRecord | null) => {
      setLoadGa(!!record?.categories.analytics);
    };

    sync(getStoredConsent());

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<ConsentRecord>).detail;
      sync(detail ?? getStoredConsent());
    };

    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!loadGa) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => configureGa()}
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          if (!window.__dtAnalyticsLoaded) {
            window.__dtAnalyticsLoaded = true;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          }
        `}
      </Script>
    </>
  );
}
