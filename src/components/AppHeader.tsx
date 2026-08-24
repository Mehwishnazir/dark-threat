"use client";

import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Shield, Globe, Lock, Database, Eye, Building2, CalendarDays } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutionLinks = [
  { to: "/solution", label: "Platform Overview", icon: Globe },
  { to: "/dark-web-monitoring", label: "Dark Web Monitoring", icon: Eye },
  { to: "/credential-leak-detection", label: "Credential Leak Detection", icon: Lock },
  { to: "/data-leak-detection", label: "Data Leak Detection", icon: Database },
  { to: "/dark-web-data-removal", label: "Dark Web Data Removal", icon: Shield },
];

const industryLinks = [
  { to: "/industries", label: "All Industries", icon: Building2 },
  { to: "/industries/financial-services", label: "Financial Services", icon: Building2 },
  { to: "/industries/crypto-fintech", label: "Crypto & Fintech", icon: Building2 },
  { to: "/industries/education", label: "Education", icon: Building2 },
  { to: "/industries/healthcare", label: "Healthcare", icon: Building2 },
  { to: "/industries/legal", label: "Legal", icon: Building2 },
  { to: "/industries/professional-services", label: "Professional Services", icon: Building2 },
  { to: "/industries/government", label: "Government", icon: Building2 },
  { to: "/industries/ecommerce", label: "E-Commerce & Retail", icon: Building2 },
  { to: "/industries/saas-technology", label: "SaaS & Technology", icon: Building2 },
];

function isActivePath(pathname: string, href: string, exact = false) {
  if (exact || href === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(isActive: boolean) {
  return `text-sm font-medium transition-colors px-3 py-2 whitespace-nowrap ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
  }`;
}

function DropdownMenu({
  links,
}: {
  links: { to: string; label: string; icon: LucideIcon }[];
}) {
  const pathname = usePathname();

  return (
    <NavigationMenuContent className=" ">
      <div className="w-64 p-2 flex flex-col gap-y-1">
        {links.map(({ to, label, icon: Icon }) => {
          const active = isActivePath(pathname, to);
          return (
            <NavigationMenuLink asChild key={to}>
              <Link
                href={to}
                className={`${
                  active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-primary/5 hover:text-primary"
                } flex flex-row gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors`}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="mx-1">{label}</span>
              </Link>
            </NavigationMenuLink>
          );
        })}
      </div>
    </NavigationMenuContent>
  );
}

const triggerClass =
  "text-sm font-medium text-muted-foreground bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:text-primary px-3 py-2";

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 py-3 md:py-4 px-4 md:px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="DarkThreat Home"
          suppressHydrationWarning
        >
          <Image
            src="/logo.png"
            alt="DarkThreat logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            suppressHydrationWarning
          />
          <span className="text-xl font-montserrat font-bold text-foreground tracking-tight">
            DARK<span className="text-primary">THREAT</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center flex-1 justify-center" aria-label="Main navigation">
          <div className="flex items-center">
            <Link href="/" className={navLinkClass(isActivePath(pathname, "/", true))}>
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>Solutions</NavigationMenuTrigger>
                  <DropdownMenu links={solutionLinks} />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>Industries</NavigationMenuTrigger>
                  <DropdownMenu links={industryLinks} />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/pricing" className={navLinkClass(isActivePath(pathname, "/pricing"))}>
              Pricing
            </Link>
            <Link href="/blog" className={navLinkClass(isActivePath(pathname, "/blog"))}>
              Blog
            </Link>
            <Link href="/about" className={navLinkClass(isActivePath(pathname, "/about"))}>
              About
            </Link>
            <Link href="/contact" className={navLinkClass(isActivePath(pathname, "/contact"))}>
              Contact
            </Link>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/contact">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary gap-2 text-sm font-medium whitespace-nowrap"
            >
              <CalendarDays className="w-4 h-4" />
              Book Demo
            </Button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
