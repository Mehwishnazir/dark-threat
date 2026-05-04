import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { to: '/', label: 'Home' },
  { to: '/solution', label: 'Solution' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="p-2 text-foreground hover:text-primary transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-out panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm bg-card border-l border-border z-[70]
                    shadow-[0_0_60px_hsl(0_78%_45%_/_0.25)]
                    transform transition-transform duration-300 ease-out
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-lg font-montserrat text-foreground hover:text-primary
                         hover:bg-primary/5 rounded-md transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <Button
            onClick={() => { setOpen(false); window.location.href = '/auth'; }}
            className="cta-cyan w-full"
          >
            Start Free Trial
          </Button>
        </div>
      </aside>
    </div>
  );
}
