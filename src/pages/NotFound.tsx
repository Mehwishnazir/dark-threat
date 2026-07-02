import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REDIRECT_SECONDS = 3;

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    const tick = setInterval(() => setCountdown((c) => (c > 0 ? c - 1 : 0)), 1000);
    const redirect = setTimeout(() => navigate('/', { replace: true }), REDIRECT_SECONDS * 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(redirect);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>404 — Page Not Found | DarkThreat.ai</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary transition-colors">Solution</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-20 cyber-grid">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-[8rem] md:text-[12rem] font-montserrat font-bold leading-none glow-text">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-foreground mt-4 uppercase tracking-wider">
            Threat Not Found —{' '}
            <span className="text-primary">This page has gone dark</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-lg mx-auto">
            The page you're looking for may have been moved, deleted, or never existed.
          </p>
          <p className="text-primary/80 text-sm mt-4" aria-live="polite">
            Redirecting to home in {countdown}s…
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button asChild className="cta-cyan">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="cta-outline">
              <Link to="/blog">Browse Our Blog</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-montserrat font-bold text-foreground">DARKTHREAT</span>
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/company/darkthreat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/DarkThreatAI" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/darkthreat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DarkThreat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
