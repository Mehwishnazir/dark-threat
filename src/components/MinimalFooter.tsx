import Link from "next/link";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";
import type { FooterVariant } from "@/lib/siteChrome";

type MinimalFooterProps = {
  variant: Exclude<FooterVariant, "full" | "none">;
};

export default function MinimalFooter({ variant }: MinimalFooterProps) {
  if (variant === "blog") {
    return (
      <footer className="blog-listing-footer">
        <div className="blog-listing-footer__inner">
          <div className="blog-listing-footer__brand">
            <Shield className="blog-listing-footer__shield" aria-hidden="true" />
            <span className="blog-listing-footer__name">DARKTHREAT</span>
          </div>
          <div className="blog-listing-footer__socials">
            <a
              href="https://linkedin.com/company/darkthreat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="blog-listing-footer__social-icon" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/DarkThreatAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter className="blog-listing-footer__social-icon" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/darkthreat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="blog-listing-footer__social-icon" aria-hidden="true" />
            </a>
          </div>
          <p className="blog-listing-footer__copy">&copy; 2026 DarkThreat. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  const industriesLink =
    variant === "industry" ? (
      <Link href="/industries" className="hover:text-primary">
        All Industries
      </Link>
    ) : (
      <Link href="/industries" className="hover:text-primary">
        Industries
      </Link>
    );

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
          <span className="font-montserrat font-bold text-foreground">DarkThreat</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; 2026 DarkThreat. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          {industriesLink}
          <Link href="/pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
