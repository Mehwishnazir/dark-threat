"use client";

import Link from "next/link";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative bg-card border-t border-border py-12 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
            </div>
            <p className="text-muted-foreground mb-4">
              DarkThreat is an AI-powered{" "}
              <span className="font-semibold text-foreground">dark web monitoring service</span> and{" "}
              <span className="font-semibold text-foreground">threat intelligence platform</span>{" "}
              protecting enterprises from credential leaks, ransomware targeting, data breaches, and
              external cyber threats. Our 24/7 monitoring engine indexes 2M+ underground sources to
              deliver real-time alerts before attacks occur.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/DarkThreatAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/darkthreat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/darkthreat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dark-web-monitoring" className="text-muted-foreground hover:text-primary">
                  Dark Web Monitoring Service
                </Link>
              </li>
              <li>
                <Link href="/credential-leak-detection" className="text-muted-foreground hover:text-primary">
                  Credential Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/data-leak-detection" className="text-muted-foreground hover:text-primary">
                  Data Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/threat-intelligence-platform" className="text-muted-foreground hover:text-primary">
                  Threat Intelligence Platform
                </Link>
              </li>
              <li>
                <Link href="/compare/darkthreat-vs-darkowl" className="text-muted-foreground hover:text-primary">
                  DarkThreat vs DarkOwl
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solution" className="text-muted-foreground hover:text-primary">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/platform-terms" className="text-muted-foreground hover:text-primary">
                  Platform Terms
                </Link>
              </li>
              <li>
                <Link href="/website-terms" className="text-muted-foreground hover:text-primary">
                  Website Terms
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.openCookieSettings?.()}
                  className="text-muted-foreground hover:text-primary text-left"
                >
                  Cookie Settings
                </button>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 DarkThreat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
