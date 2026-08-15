import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Twitter,
  Linkedin,
  Github,
  Send,
  Building,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import AppHeader from '@/components/AppHeader';
import { useToast } from '@/components/ui/use-toast';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import FinalCTA from '@/components/FinalCTA';
import { submitLeadForm } from '@/utils/formSubmit';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Dark Web Monitoring',
    message: '',
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Contact Us Form',
        name,
        email,
        company: formData.company,
        interest: formData.interest,
        message,
      });
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting DarkThreat's Threat Operations Center. We will respond within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', interest: 'Dark Web Monitoring', message: '' });
      setFormError('');
    } catch (err) {
      const failureMessage = "There was an error sending your message. Please try again or contact us directly.";
      setFormError(failureMessage);
      toast({
        title: "Submission Failed",
        description: failureMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact DarkThreat | Connect with Threat Intelligence & Monitoring Experts',
    'description': 'Contact the DarkThreat team to discuss dark web monitoring, credential leak detection, or to start your 7-day free trial. We respond within 24 hours.',
    'url': 'https://darkthreat.ai/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'DarkThreat',
      'alternateName': ['DarkThreat AI', 'DarkThreat Security', 'DarkThreat.ai'],
      'url': 'https://darkthreat.ai',
      'logo': 'https://darkthreat.ai/logo.png',
      'sameAs': [
        'https://twitter.com/DarkThreatAI',
        'https://linkedin.com/company/darkthreat',
        'https://github.com/darkthreat'
      ],
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+1 (416) 576-8744',
          'contactType': 'customer support',
          'email': 'info@darkthreat.ai',
          'availableLanguage': 'English'
        }
      ]
    }
  };

  const contactFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does a standard dark web exposure scan take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Once onboarding is completed externally, our automated systems begin indexing public, deep, and dark web repositories immediately. Initial baseline reports are generated and sent to your dashboard within 10 minutes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does DarkThreat secure the credentials registered for monitoring?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All threat intelligence data and telemetry collected are encrypted at rest and in transit. We align with ISO 27001 and NIST frameworks, ensuring zero exposure of your active internal environments.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can we request a custom security assessment for third-party vendors?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Our platform supports third-party domain and supply-chain exposure monitoring. You can configure vendor alerts via the platform solutions dashboard or reach out to our MSSP division.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you offer white-labeled reporting for security partners?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Our MSSP tier features complete API access, white-label dashboards, custom notification routing, and co-branded PDF report generation.'
        }
      }
    ]
  };

  const faqs = [
    {
      q: "How long does a standard dark web exposure scan take?",
      a: "Once onboarding is completed externally, our automated systems begin indexing public, deep, and dark web repositories immediately. Initial baseline reports are generated and sent to your dashboard within 10 minutes."
    },
    {
      q: "How does DarkThreat secure the credentials registered for monitoring?",
      a: "All threat intelligence data and telemetry collected are encrypted at rest and in transit. We align with ISO 27001 and NIST frameworks, ensuring zero exposure of your active internal environments."
    },
    {
      q: "Can we request a custom security assessment for third-party vendors?",
      a: "Yes. Our platform supports third-party domain and supply-chain exposure monitoring. You can configure vendor alerts via the platform solutions dashboard or reach out to our MSSP division."
    },
    {
      q: "Do you offer white-labeled reporting for security partners?",
      a: "Yes. Our MSSP tier features complete API access, white-label dashboards, custom notification routing, and co-branded PDF report generation."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Helmet>
        <title>Contact DarkThreat | Connect with Threat Intelligence &amp; Monitoring Experts</title>
        <meta name="description" content="Contact the DarkThreat team to discuss dark web monitoring, credential leak detection, or to start your 7-day free trial. We respond within 24 hours." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://darkthreat.ai/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact DarkThreat | Connect with Threat Intelligence &amp; Monitoring Experts" />
        <meta property="og:description" content="Connect with DarkThreat's cybersecurity researchers, threat hunting analysts, and enterprise integration specialists. Let us show you what threat actors can see about your external attack surface." />
        <meta property="og:url" content="https://darkthreat.ai/contact" />
        <meta property="og:image" content="https://darkthreat.ai/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DarkThreat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DarkThreatAI" />
        <meta name="twitter:title" content="Contact DarkThreat | Threat Intelligence Specialists" />
        <meta name="twitter:description" content="Connect with DarkThreat's cybersecurity researchers, threat hunting analysts, and enterprise integration specialists. Let us show you what threat actors can see about your external attack surface." />
        <meta name="twitter:image" content="https://darkthreat.ai/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(contactFaqSchema)}</script>
      </Helmet>

      {/* Header */}
      <AppHeader />

      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

        {/* 3D Sphere Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow" />}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
          </div>

          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            GLOBAL THREAT OPERATIONS
          </div>

          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            We Are Online 24/7/365 to Protect Your <span className="glow-text">Digital Footprint</span>
          </h1>
          
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed mb-4">
            Connect with DarkThreat's cybersecurity researchers, threat hunting analysts, and enterprise integration specialists. Let us show you what threat actors can see about your external attack surface.
          </p>
          
          <p className="mx-auto max-w-3xl text-base text-muted-foreground leading-relaxed">
            Whether you are investigating a suspicious credential leak alert, need to set up multi-tenant white-label reporting for an MSSP, or require emergency incident dispatch support from our active Security Operations Center (SOC), our team is standing by. Choose a direct contact channel or fill out our secure inquiry routing form. Our average response time for standard inquiries is under 2 hours, and emergency threat escalations are triaged within 15 minutes.
          </p>
        </div>
      </section>

      {/* SECTION 2: Form & Request Assessment */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-card/40 border border-border/80 rounded-3xl p-8 backdrop-blur-md shadow-xl">
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" /> Send a Message
              </h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-invalid={!!formError}
                      placeholder="Jane Doe"
                      className="mt-2 bg-background/50 border-border focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-invalid={!!formError}
                      placeholder="jane@company.com"
                      className="mt-2 bg-background/50 border-border focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-foreground">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Inc."
                      className="mt-2 bg-background/50 border-border focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="interest" className="text-sm font-semibold text-foreground">Interest Area</Label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full mt-2 rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                    >
                      <option value="Dark Web Monitoring">Dark Web Monitoring Service</option>
                      <option value="Credential Leak Detection">Credential Leak Detection</option>
                      <option value="Dark Web Data Removal">Dark Web Data Removal</option>
                      <option value="Custom MSSP Partnering">Custom MSSP Partnering</option>
                      <option value="Other Support">Other Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={!!formError}
                    rows={5}
                    placeholder="How can our threat intelligence team help you?"
                    className="mt-2 bg-background/50 border-border focus:ring-primary/50 focus:border-primary"
                  />
                </div>

                {formError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{formError}</AlertDescription>
                  </Alert>
                )}
                
                <Button type="submit" className="hero-button w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Secure Message...' : 'Send Secure Message'}
                </Button>
              </form>
            </div>

            {/* Direct Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <Card className="border border-border/80 bg-card/30 backdrop-blur-md hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-1">General Operations</h3>
                      <p className="text-muted-foreground text-sm">For partnerships, career inquiries, or general support</p>
                      <p className="text-primary font-semibold mt-2 text-sm">info@darkthreat.ai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/80 bg-card/30 backdrop-blur-md hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-1">Enterprise Threat Advisory</h3>
                      <p className="text-muted-foreground text-sm">Call us directly to set up custom domains or MSSP licensing</p>
                      <a href="tel:+1(416)5768744" className="text-primary font-semibold mt-2 text-sm hover:underline">
                        +1 (416) 576-8744
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/80 bg-card/30 backdrop-blur-md hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-foreground mb-1">Response Schedule</h3>
                      <p className="text-muted-foreground text-sm">
                        Enterprise Sales: Mon - Fri, 9am - 6pm EST<br />
                        Threat Support: <span className="text-primary font-semibold font-bold">24/7/365 Available</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SOC Emergency Dispatch */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <AlertCircle className="w-32 h-32 text-amber-500" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-500 mb-6">
                <AlertCircle className="w-4 h-4" /> Active Breach Response
              </div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground mb-4">
                Emergency Incident Dispatch Line
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
                If your organization is currently experiencing an active cyber incident, ransomware extortion attempt, or critical data extortion event, contact our incident response team immediately. 
                <span className="text-amber-500 font-semibold block mt-2">Active customer triage SLA: under 15 minutes.</span>
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:+1(416)5768744"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-bold text-black transition-colors"
                >
                  Call Incident Dispatch: +1 (416) 576-8744
                </a>
                <span className="text-sm text-muted-foreground">or email secure hotline: <a href="mailto:info@darkthreat.ai" className="text-primary hover:underline font-semibold">info@darkthreat.ai</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ / Accordion Section */}
      <section className="py-24 px-6 bg-card/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Frequently Contacted Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers about onboarding, security assessments, and support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card/60 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors focus:outline-none"
                  >
                    <span className="font-montserrat font-semibold text-foreground pr-4 flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-border/40 text-muted-foreground text-sm leading-relaxed bg-background/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            Have a different question? Join our Discord community or visit our <Link to="/blog" className="text-primary hover:underline">Knowledge Base</Link>.
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <footer className="relative bg-card border-t border-border py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                DarkThreat is an AI-powered <span className="font-semibold text-foreground">dark web monitoring service</span> and <span className="font-semibold text-foreground">threat intelligence platform</span> protecting enterprises from credential leaks, ransomware targeting, data breaches, and external cyber threats. Our 24/7 monitoring engine indexes 2M+ underground sources to deliver real-time alerts before attacks occur.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/DarkThreatAI" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="https://linkedin.com/company/darkthreat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="https://github.com/darkthreat" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
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
            <p>&copy; 2026 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
