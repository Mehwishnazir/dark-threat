import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Clock, CheckCircle, Users, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitLeadForm } from '@/utils/formSubmit';
import { useToast } from '@/components/ui/use-toast';

const TrialComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Trial Coming Soon Notification',
        email,
        name: '',
        company: '',
        interest: '',
        message: '',
      });
      toast({
        title: 'Subscribed Successfully',
        description: 'You will be notified when the trial is ready.',
      });
      setIsSubscribed(true);
    } catch (err) {
      toast({
        title: 'Subscription Failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary transition-colors">
              Solution
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Coming Soon Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Clock className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Interactive Trial <span className="text-primary">Coming Soon</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're building an amazing interactive trial experience that will let you explore 
              DarkThreat's capabilities firsthand. Be the first to know when it launches!
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="threat-card">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Live Demo Environment</h3>
              <p className="text-muted-foreground">
                Experience real-time dark web monitoring in a safe, controlled environment
              </p>
            </div>
            <div className="threat-card">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Guided Walkthrough</h3>
              <p className="text-muted-foreground">
                Step-by-step guided tour of all DarkThreat features and capabilities
              </p>
            </div>
            <div className="threat-card">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">Instant Access</h3>
              <p className="text-muted-foreground">
                No setup required - jump straight into exploring our platform
              </p>
            </div>
          </div>

          {/* Notify Me Form */}
          {!isSubscribed ? (
            <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="hero-button w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : isSubscribed ? 'Subscribed' : 'Notify Me'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Get notified when the interactive trial is ready. No spam, just updates.
              </p>
            </form>
          ) : (
            <div className="threat-card max-w-md mx-auto">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-muted-foreground">
                We'll notify you as soon as the interactive trial is ready.
              </p>
            </div>
          )}

          <div className="mt-12">
            <p className="text-muted-foreground mb-4">
              In the meantime, explore our other features:
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/solution">
                <Button variant="outline">View Solution</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline">See Pricing</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence platform protecting your organization 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/dark-web-monitoring" className="text-muted-foreground hover:text-primary">Dark Web Monitoring Service</Link></li>
                <li><Link to="/credential-leak-detection" className="text-muted-foreground hover:text-primary">Credential Leak Detection</Link></li>
                <li><Link to="/data-leak-detection" className="text-muted-foreground hover:text-primary">Data Leak Detection</Link></li>
                <li><Link to="/threat-intelligence-platform" className="text-muted-foreground hover:text-primary">Threat Intelligence Platform</Link></li>
                <li><Link to="/compare/darkthreat-vs-darkowl" className="text-muted-foreground hover:text-primary">DarkThreat vs DarkOwl</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/platform-terms" className="text-muted-foreground hover:text-primary">Platform Terms</Link></li>
                <li><Link to="/website-terms" className="text-muted-foreground hover:text-primary">Website Terms</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrialComingSoon;