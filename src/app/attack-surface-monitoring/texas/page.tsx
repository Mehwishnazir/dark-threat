import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, Shield, Lock, AlertTriangle, Database, CheckCircle2, ArrowRight, CreditCard, Key, Eye, FileWarning, Twitter, Linkedin, Github, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FinalCTA from "@/components/FinalCTA";
import ThreatSpherePlaceholder from "@/components/ThreatSpherePlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, organizationSchema } from "@/utils/seoSchemas";

export const metadata: Metadata = {
  title: "Attack Surface Monitoring in Texas",
  description: "Protect your Texas organization with advanced Attack Surface Monitoring. Detect and remediate threats before they become data breaches. Book a demo today.",
  alternates: { canonical: "/attack-surface-monitoring/texas" },
};

const threats = [
  { icon: AlertTriangle, title: 'Regional Threat Activity', desc: 'Continuous tracking of threat actor groups specifically targeting organizations within the Texas business ecosystem.' },
  { icon: Key, title: 'Compromised Credentials', desc: 'Real-time alerts when employee logins or customer credentials from Texas businesses surface on dark web markets.' },
  { icon: Database, title: 'Data Exfiltration', desc: 'Detection of sensitive corporate documents, intellectual property, or customer data leaked to underground forums.' },
  { icon: Lock, title: 'Ransomware Pre-cursors', desc: 'Early warning signals of initial access brokers selling access to corporate networks in Texas.' },
  { icon: Eye, title: 'Brand Impersonation', desc: 'Identification of typosquatted domains and fake social media profiles impersonating your local brand.' },
  { icon: FileWarning, title: 'Supply Chain Risk', desc: 'Monitoring of third-party vendors and regional partners for security breaches that could impact your operations.' },
];

const schema = {
  ...serviceSchema('Attack Surface Monitoring in Texas', 'Protect your Texas organization with advanced Attack Surface Monitoring. Detect and remediate threats before they become data breaches.', 'https://darkthreat.ai/attack-surface-monitoring/texas'),
  areaServed: {
    '@type': 'Place',
    name: 'Texas'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/external-attack-surface-monitoring' },
  { name: 'Texas Attack Surface Monitoring', url: 'https://darkthreat.ai/attack-surface-monitoring/texas' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Attack Surface Monitoring critical for businesses in Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Texas organizations face elevated cybercrime pressure, and incidents can scale quickly. In September 2024, a breach at Texas Tech University Health Sciences Center exposed data belonging to 1.4 million people. Attack Surface Monitoring helps surface external exposures and early warning signals so teams can respond before a leak becomes a large-scale incident.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can DarkThreat detect a breach involving our Texas operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our proprietary engines scan dark web forums, telegram channels, and paste sites 24/7. When your data is exposed, we typically trigger an alert within minutes of the initial leak.'
      }
    }
  ]
};

export default function Page() {

      
  

  
  return (

    <div className="min-h-screen bg-background">
      <JsonLd data={[schema, breadcrumb, organizationSchema, faqSchema]} />
      

      

      {/* Hero Section */}
      <section className="relative min-h-[62vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 hero-bg-layered">
        <div aria-hidden className="absolute inset-0 circuit-pattern pointer-events-none opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <ThreatSpherePlaceholder />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-4 inline-flex justify-center">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/external-attack-surface-monitoring' }, { label: 'Texas' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> Serving Texas Enterprises
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Enterprise Attack Surface Monitoring for <span className="glow-text">Texas</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Texas ranks #2 nationally for reported cybercrime losses, with more than $763 million and 38,661 complaints recorded in a recent FBI IC3 year. DarkThreat gives Texas organizations continuous attack-surface visibility—from dark web data leaks to exposed employee credentials—so you can act on threats before they become breaches.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="hero-button">
              Request Free Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/contact" className="border-primary/30 hover:border-primary">Contact Local Expert</Link>
          </div>
        </div>
      </section>

      {/* Threat Profile */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Regional Threat Landscape</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Protecting Texas from Cyber Risk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Energy, healthcare, finance, and tech across the state sit in a high-loss threat environment. We monitor external exposures and dark-web signals tied to Texas enterprises so you can detect risk early—before it escalates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.08)] transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="regional-inquiry" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Risk Assessment</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Request a Dark Web Exposure Scan</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Find out what threat actors already know about your Texas-based operations. We'll run a preliminary scan across your domain and key personnel.
            </p>
            <ul className="space-y-3 mb-8">
              {['Domain & subdomain exposure', 'Compromised employee credentials', 'Brand impersonation check', 'Dark web marketplace mentions'].map(item => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-6">Security Assessment Request</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required placeholder="Jane Doe" className="mt-1 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input id="email" type="email" required placeholder="jane@company.com" className="mt-1 bg-background/50" />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Corp" className="mt-1 bg-background/50" />
              </div>
              <div>
                <Label htmlFor="message">Primary Concern</Label>
                <Textarea id="message" rows={4} placeholder="E.g. executive protection, leaked databases..." className="mt-1 bg-background/50" />
              </div>
              <Button type="button" className="hero-button w-full">
                Request Free Scan
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">Why is Attack Surface Monitoring critical for businesses in Texas?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Texas organizations face elevated cybercrime pressure, and incidents can scale quickly. In September 2024, a breach at Texas Tech University Health Sciences Center exposed data belonging to 1.4 million people. Attack Surface Monitoring helps surface external exposures and early warning signals so teams can respond before a leak becomes a large-scale incident.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">How quickly can DarkThreat detect a breach involving our Texas operations?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Our proprietary engines scan dark web forums, telegram channels, and paste sites 24/7. When your data is exposed, we typically trigger an alert within minutes of the initial leak.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      
    </div>
  
  );
}
