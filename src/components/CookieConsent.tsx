"use client";

import { useCallback, useEffect, useState } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  applyConsent,
  getStoredConsent,
  storeConsent,
  type ConsentCategories,
} from "@/lib/analytics";

type Prefs = Omit<ConsentCategories, "necessary">;

const DEFAULT_PREFS: Prefs = { analytics: false, marketing: false, functional: false };

export default function CookieConsent() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);

  const openPrefs = useCallback((existing?: Prefs) => {
    setPrefs(existing ?? DEFAULT_PREFS);
    setPrefsOpen(true);
    setBannerVisible(false);
  }, []);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyConsent(stored);
      setPrefs({
        analytics: stored.categories.analytics,
        marketing: stored.categories.marketing,
        functional: stored.categories.functional,
      });
    } else {
      setBannerVisible(true);
    }

    window.openCookieSettings = () => {
      const s = getStoredConsent();
      openPrefs(
        s
          ? {
              analytics: s.categories.analytics,
              marketing: s.categories.marketing,
              functional: s.categories.functional,
            }
          : DEFAULT_PREFS
      );
    };

    return () => {
      if (window.openCookieSettings) delete window.openCookieSettings;
    };
  }, [openPrefs]);

  useEffect(() => {
    document.body.classList.toggle("has-cookie-banner", bannerVisible);
    return () => document.body.classList.remove("has-cookie-banner");
  }, [bannerVisible]);

  const acceptAll = () => {
    const rec = storeConsent({ analytics: true, marketing: true, functional: true });
    applyConsent(rec);
    setBannerVisible(false);
    setPrefsOpen(false);
  };

  const rejectAll = () => {
    const rec = storeConsent({ analytics: false, marketing: false, functional: false });
    applyConsent(rec);
    setBannerVisible(false);
    setPrefsOpen(false);
  };

  const savePrefs = () => {
    const rec = storeConsent(prefs);
    applyConsent(rec);
    setBannerVisible(false);
    setPrefsOpen(false);
  };

  const closePrefs = () => {
    setPrefsOpen(false);
    if (!getStoredConsent()) setBannerVisible(true);
  };

  return (
    <>
      {bannerVisible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-2 pb-2 sm:px-6 sm:pb-6"
        >
          <div className="pointer-events-auto mx-auto max-w-3xl rounded-xl sm:rounded-2xl border border-border bg-card/95 backdrop-blur shadow-2xl p-3 sm:p-5">
            <div className="flex items-start justify-between gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Cookie className="w-4 h-4 text-primary shrink-0" aria-hidden />
                  <h2 className="font-montserrat font-bold text-foreground text-sm sm:text-base">
                    We value your privacy
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug sm:leading-relaxed">
                  We use cookies to keep the site running, understand usage, and improve your experience.
                  You choose what to allow.{" "}
                  <a href="/privacy-policy" className="text-primary underline hover:no-underline">
                    Learn more
                  </a>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={rejectAll}
                aria-label="Reject non-essential cookies and close"
                className="shrink-0 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
              <Button variant="outline" onClick={() => openPrefs()} className="min-h-[40px] text-sm">
                Customize
              </Button>
              <Button variant="outline" onClick={rejectAll} className="min-h-[40px] text-sm">
                Reject Non-Essential
              </Button>
              <Button
                onClick={acceptAll}
                className="min-h-[40px] text-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}

      {prefsOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie Preferences"
        >
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-montserrat font-bold text-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary" aria-hidden />
                  Cookie Preferences
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Choose which categories of cookies you allow. You can change this anytime from Cookie
                  Settings.
                </p>
              </div>
              <button
                type="button"
                onClick={closePrefs}
                aria-label="Close cookie preferences"
                className="text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 py-2">
              <CategoryRow
                title="Strictly Necessary"
                description="Required for the site to function (security, session, consent). Cannot be turned off."
                checked
                disabled
              />
              <CategoryRow
                title="Analytics"
                description="Anonymous usage statistics that help us improve the site (e.g. Google Analytics)."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CategoryRow
                title="Marketing / Advertising"
                description="Used to measure marketing campaigns and personalize ads."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
              <CategoryRow
                title="Functional / Preferences"
                description="Remember choices like language and personalization."
                checked={prefs.functional}
                onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:justify-end">
              <Button variant="outline" onClick={rejectAll}>
                Reject Non-Essential
              </Button>
              <Button variant="outline" onClick={acceptAll}>
                Accept All
              </Button>
              <Button
                onClick={savePrefs}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Save My Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-lg border border-border/60 bg-card/50 p-3 cursor-pointer">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        aria-label={`${title} cookies`}
      />
    </label>
  );
}
