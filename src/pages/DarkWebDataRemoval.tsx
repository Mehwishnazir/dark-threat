import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Trash2, Globe, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import AppHeader from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { submitLeadForm } from '@/utils/formSubmit';

const faqs = [
  {
    q: 'What kinds of dark web content can DarkThreat remove?',
    a: 'DarkThreat targets exposed credentials, leaked documents, private keys, compromised account data, and market listings on underground forums, marketplaces, paste sites, and malware dump feeds.',
  },
  {
    q: 'How does the removal process work for underground listings?',
    a: 'We verify the exposure, prioritize the riskiest listings, submit takedown requests or operator contacts, and then continue monitoring for reposts or related exposures.',
  },
  {
    q: 'Can you remove data that has already been copied or resold?',
    a: 'We focus on eliminating active listings and reducing reuse. While copies may still exist, our ongoing coverage greatly limits the window in which attackers can find and use exposed assets.',
  },
  {
    q: 'How quickly can my leaked data be taken down?',
    a: 'Response time depends on source and operator cooperation, but priority removals are typically completed within hours to a few days, with continuous review afterward.',
  },
  {
    q: 'Does the service include monitoring after removal?',
    a: 'Yes. DarkThreat keeps tracking the dark web for reappearances and follows up on removed listings so your exposure stays contained over time.',
  },
];

const DarkWebDataRemoval = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields marked with *.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Free Assessment (Dark Web Data Removal)',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        interest: formData.interest,
        message: formData.message,
      });
      toast({
        title: "Request Received",
        description: "Your security assessment request has been submitted successfully.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: '',
      });
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dark Web Data Removal | DarkThreat.ai</title>
        <meta
          name="description"
          content="DarkThreat's Dark Web Data Removal service finds and removes leaked company data from underground marketplaces, hacker forums, and paste sites before it is weaponized."
        />
        <link rel="canonical" href="https://darkthreat.ai/dark-web-data-removal" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}</script>
      </Helmet>

      <AppHeader />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr] items-start">
          <div>
            <span className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Dark Web Data Removal
            </span>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
              Dark Web Data Removal — <span className="glow-text">Erase exposed assets</span> from underground markets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              DarkThreat locates leaked credentials, documents, and sensitive records across hidden channels, then works to take them down before attackers reuse or resell them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => (window.location.href = '/auth')} className="cta-cyan inline-flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/pricing" className="cta-outline inline-flex items-center gap-2 justify-center">
                View Pricing
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Free Consultation</span>
              </div>
              <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Get Your Free Cybersecurity Assessment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">Reason for Contact *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border"
                    >
                      <option value="">Select a reason</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sales Question">Sales Question</option>
                      <option value="Demo Request">Demo Request</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">How Can We Help? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Describe your security needs or challenges..."
                      className="w-full rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30 hover:border-border resize-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Requesting Assessment...' : 'Request Free Assessment →'}
                </button>
                <p className="text-center text-xs text-muted-foreground/70">By submitting, you agree to our <span className="underline underline-offset-2 hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>.</p>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Global coverage', detail: 'Tor, forums, markets, paste sites' },
            { label: 'Priority takedowns', detail: 'High-risk exposure first' },
            { label: 'Repeat monitoring', detail: 'Watch for reappearances' },
            { label: 'Brand protection', detail: 'Limit data resale and abuse' },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-border bg-card p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-3">{item.label}</p>
              <p className="text-foreground font-semibold text-lg">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-card/10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">What is dark web data removal?</h2>
            <p className="text-lg text-muted-foreground mb-5">
              Dark web data removal is a service that locates exposed credentials, documents, and sensitive assets on underground channels and then works to remove them to reduce attacker access.
            </p>
            <p className="text-lg text-muted-foreground">
              DarkThreat combines investigation, removal requests, and ongoing monitoring so removed data is less likely to be reused or resold across hidden marketplaces.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              { title: 'Leaked credentials', detail: 'Remove login data before it spreads.' },
              { title: 'Hidden documents', detail: 'Take down exposed files shared in private channels.' },
              { title: 'Market listings', detail: 'Target listings on dark web shops and forums.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">{item.title}</p>
                <p className="text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Removal process designed for the underground</h2>
            <p className="text-lg text-muted-foreground">We find exposed assets quickly, verify risk, remove listings, and continue monitoring to prevent recurrence.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Discovery</h3>
              <p className="text-muted-foreground">Identify leaked credentials, documents, private keys, and other exposed assets in hidden channels.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Verification</h3>
              <p className="text-muted-foreground">Validate each exposure and prioritize takedowns based on risk to the business.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Removal</h3>
              <p className="text-muted-foreground">Work with operators and hidden marketplaces to take down leaked data listings and reduce the window of exposure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-background p-8 text-center">
              <div className="text-primary mb-4"><Trash2 className="w-10 h-10" /></div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-3">60% faster incident response</h3>
              <p className="text-muted-foreground">Remove dark web exposures quickly so your team can focus on remediation instead of endless investigation.</p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8 text-center">
              <div className="text-primary mb-4"><Globe className="w-10 h-10" /></div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-3">Global underground coverage</h3>
              <p className="text-muted-foreground">We work across Tor, chat groups, forums, and black market shops to eliminate your data from hidden sources.</p>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8 text-center">
              <div className="text-primary mb-4"><AlertTriangle className="w-10 h-10" /></div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-3">Ongoing exposure visibility</h3>
              <p className="text-muted-foreground">Even after removal, we keep tracking reappearances so leaked assets stay contained.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-montserrat">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 DarkThreat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DarkWebDataRemoval;
