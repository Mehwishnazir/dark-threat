import type { Metadata } from "next";
import Script from "next/script";
import { Kumbh_Sans, Montserrat } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import CookieConsent from "@/components/CookieConsent";
import CookieSettingsLink from "@/components/CookieSettingsLink";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-family-montserrat",
  display: "swap",
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family-kumbh",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkthreat.ai"),
  applicationName: "DarkThreat",
  title: {
    default: "Dark Web Monitoring & Credential Leak Detection Platform | DarkThreat.ai",
    template: "%s | DarkThreat.ai",
  },
  description:
    "AI-powered dark web monitoring and threat intelligence platform protecting enterprises from credential leaks, ransomware, and cyber threats.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "DarkThreat",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DarkThreat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DarkThreatAI",
    images: ["/og-image.png"],
  },
};

const CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${kumbhSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans ">
        <Script
          id="gtag-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }}
        />
        <GoogleAnalytics />
        <SiteChrome>{children}</SiteChrome>
        <ChatWidget />
        <CookieConsent />
        <CookieSettingsLink />
      </body>
    </html>
  );
}
