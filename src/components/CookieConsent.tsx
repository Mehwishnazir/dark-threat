import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getStoredConsent,
  loadAnalytics,
  rejectAnalytics,
  storeConsent,
} from "@/lib/analytics";

/**
 * Cookie banner. Stores the user's choice in localStorage and gates GA4 /
 * Apollo / LinkedIn loading via @/lib/analytics. Re-mounting (e.g. on
 * route change) reads the stored choice and re-applies it without prompting.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "accepted") {
      loadAnalytics();
      return;
    }
    if (stored === "rejected") {
      rejectAnalytics();
      return;
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    storeConsent("accepted");
    loadAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    storeConsent("rejected");
    rejectAnalytics();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/95 backdrop-blur shadow-2xl p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="font-montserrat font-bold text-foreground text-base sm:text-lg mb-2">
              We value your privacy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to analyze site traffic and improve your
              experience. Analytics (Google Analytics, Apollo, LinkedIn
              Insight Tag) only load if you accept. See our{" "}
              <a
                href="/privacy-policy"
                className="text-primary underline hover:no-underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={handleReject}
            aria-label="Dismiss and reject cookies"
            className="shrink-0 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <Button
            variant="outline"
            onClick={handleReject}
            className="min-h-[44px] sm:min-w-[140px]"
          >
            Reject all
          </Button>
          <Button
            onClick={handleAccept}
            className="min-h-[44px] sm:min-w-[140px] bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
