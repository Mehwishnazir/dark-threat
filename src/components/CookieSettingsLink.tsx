import { Cookie } from "lucide-react";

/**
 * Persistent floating "Cookie Settings" trigger visible site-wide.
 * Because footers in this project are duplicated across pages, this
 * floating link guarantees the required "reopen preference center"
 * affordance on every route.
 */
export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.openCookieSettings?.()}
      aria-label="Open cookie settings"
      className="fixed bottom-3 left-3 z-40 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-md"
    >
      <Cookie className="w-3.5 h-3.5" aria-hidden />
      <span>Cookie Settings</span>
    </button>
  );
}
