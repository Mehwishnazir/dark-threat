import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/MobileNav';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
  { to: '/industries/legal', label: 'Legal' },
  { to: '/industries/government', label: 'Government' },
  { to: '/industries/ecommerce', label: 'E-Commerce & Retail' },
  { to: '/industries/saas-technology', label: 'SaaS & Technology' },
];

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 md:py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
          DARK<span className="text-primary">THREAT</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent className="md:w-[320px] rounded-xl border border-border bg-card shadow-lg">
                  <div className="grid gap-2 p-4">
                    {solutionLinks.map((item) => (
                      <NavigationMenuLink asChild key={item.to}>
                        <Link
                          to={item.to}
                          className="block rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent className="md:w-[320px] rounded-xl border border-border bg-card shadow-lg">
                  <div className="grid gap-2 p-4">
                    {industryLinks.map((item) => (
                      <NavigationMenuLink asChild key={item.to}>
                        <Link
                          to={item.to}
                          className="block rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>

          <Button onClick={() => (window.location.href = '/auth')} className="hero-button">
            Start Free Trial
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
