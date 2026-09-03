"use client";

import { usePathname } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import MinimalFooter from "@/components/MinimalFooter";
import SiteFooter from "@/components/SiteFooter";
import { getSiteChromeConfig } from "@/lib/siteChrome";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const { showHeader, footerVariant } = getSiteChromeConfig(pathname);

  return (
    <>
      {showHeader ? <AppHeader /> : null}
      <div className="flex-1 site-main">{children}</div>
      {footerVariant === "full" ? <SiteFooter /> : null}
      {footerVariant === "blog" || footerVariant === "industry" || footerVariant === "location" ? (
        <MinimalFooter variant={footerVariant} />
      ) : null}
    </>
  );
}
