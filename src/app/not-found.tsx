import type { Metadata } from "next";
import Link from "next/link";
import NotFoundRedirect from "@/components/NotFoundRedirect";

export const metadata: Metadata = {
  title: {
    absolute: "404 - Page Not Found | DarkThreat.ai",
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 cyber-grid">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-[8rem] md:text-[12rem] font-montserrat font-bold leading-none glow-text">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-foreground mt-4 uppercase tracking-wider">
          Threat Not Found —{" "}
          <span className="text-primary">This page has gone dark</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-6 max-w-lg mx-auto">
          The page you&apos;re looking for may have been moved, deleted, or never existed.
        </p>
        <NotFoundRedirect />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link href="/" className="cta-cyan inline-flex items-center justify-center px-8 py-3">
            Return to Home
          </Link>
          <Link
            href="/blog"
            className="cta-outline inline-flex items-center justify-center px-8 py-3"
          >
            Browse Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
