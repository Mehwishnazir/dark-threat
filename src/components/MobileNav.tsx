import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const solutionLinks = [
  { to: '/solution', label: 'Platform Overview' },
  { to: '/dark-web-monitoring', label: 'Dark Web Monitoring' },
  { to: '/credential-leak-detection', label: 'Credential Leak Detection' },
  { to: '/data-leak-detection', label: 'Data Leak Detection' },
  { to: '/dark-web-data-removal', label: 'Dark Web Data Removal' },
];

const industryLinks = [
  { to: '/industries', label: 'All Industries' },
  { to: '/industries/financial-services', label: 'Financial Services' },
  { to: '/industries/healthcare', label: 'Healthcare' },
  { to: '/industries/legal', label: 'Legal & Professional' },
  { to: '/industries/government', label: 'Government' },
  { to: '/industries/ecommerce', label: 'E-Commerce & Retail' },
  { to: '/industries/saas-technology', label: 'SaaS & Technology' },
];


/* ─── NavSection: uses `links` prop, NOT `children` ─── */

interface SectionProps {
  label: string;
  links: { to: string; label: string }[];
  onClose: () => void;
}

function NavSection({ label, links, onClose }: SectionProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const hasActive = links.some((c) => pathname === c.to || pathname.startsWith(c.to + '/'));

  useEffect(() => {
    if (hasActive) setOpen(true);
  }, [hasActive]);

  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${hasActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
          }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180 text-primary' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="pb-3 px-2">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/industries'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors ${isActive
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`
              }
            >
              <ChevronRight className="w-3.5 h-3.5 text-primary/50 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── MobileNav ─── */

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
        className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[88%] max-w-sm z-[70] flex flex-col
          bg-background border-l border-border
          transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <Link to="/" onClick={close} aria-label="DarkThreat Home" className="flex items-center gap-2">
            <img src="/logo.png" alt="DarkThreat" width="28" height="28" className="w-7 h-7 object-contain" />
            <span className="font-montserrat font-bold text-foreground text-base tracking-tight">
              DARK<span className="text-primary">THREAT</span>
            </span>
          </Link>
          <button
            aria-label="Close navigation menu"
            onClick={close}
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {/* Flat top links */}
          <div className="px-3 pt-3 pb-1">
            {topLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={close}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="mx-4 my-2 border-t border-border" />

          {/* Accordion groups — pass `links` not children */}
          <div className="px-3">
            <NavSection label="Solutions" links={solutionLinks} onClose={close} />
            <NavSection label="Industries" links={industryLinks} onClose={close} />

          </div>

          <div className="h-6" />
        </div>

        {/* Sticky footer */}
        <div className="shrink-0 px-4 py-4 border-t border-border space-y-2.5">
          <Button
            onClick={() => { close(); window.location.href = '/auth'; }}
            className="cta-cyan w-full text-sm"
          >
            Start Free Trial — 7 Days Free
          </Button>
          <NavLink to="/contact" onClick={close} className="block">
            <Button
              variant="outline"
              className="w-full border-border hover:border-primary hover:text-primary text-muted-foreground text-sm"
            >
              Schedule a Demo
            </Button>
          </NavLink>
        </div>
      </aside>
    </div>
  );
}