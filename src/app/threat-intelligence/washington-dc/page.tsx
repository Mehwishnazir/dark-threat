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
  title: "Threat Intelligence in Washington DC",
  description: "Protect your Washington DC organization with advanced Threat Intelligence. Detect and remediate threats before they become data breaches. Book a demo today.",
  alternates: { canonical: "/threat-intelligence/washington-dc" },
};

const threats = [
  { icon: AlertTriangle, title: 'Regional Threat Activity', desc: 'Continuous tracking of threat actor groups specifically targeting organizations within the Washington DC business ecosystem.' },
  { icon: Key, title: 'Compromised Credentials', desc: 'Real-time alerts when employee logins or customer credentials from Washington DC businesses surface on dark web markets.' },
  { icon: Database, title: 'Data Exfiltration', desc: 'Detection of sensitive corporate documents, intellectual property, or customer data leaked to underground forums.' },
  { icon: Lock, title: 'Ransomware Pre-cursors', desc: 'Early warning signals of initial access brokers selling access to corporate networks in Washington DC.' },
  { icon: Eye, title: 'Brand Impersonation', desc: 'Identification of typosquatted domains and fake social media profiles impersonating your local brand.' },
  { icon: FileWarning, title: 'Supply Chain Risk', desc: 'Monitoring of third-party vendors and regional partners for security breaches that could impact your operations.' },
];

const schema = {
  ...serviceSchema('Threat Intelligence in Washington DC', 'Protect your Washington DC organization with advanced Threat Intelligence. Detect and remediate threats before they become data breaches.', 'https://darkthreat.ai/threat-intelligence/washington-dc'),
  areaServed: {
    '@type': 'Place',
    name: 'Washington DC'
  }
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: 'https://darkthreat.ai/' },
  { name: 'Locations', url: 'https://darkthreat.ai/locations' },
  { name: 'Washington DC Threat Intelligence', url: 'https://darkthreat.ai/threat-intelligence/washington-dc' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is Threat Intelligence critical for businesses in Washington DC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organizations in the capital region face elevated nation-state and supply-chain risk. In the Treasury incident, attackers used a BeyondTrust vulnerability to gain unauthorized access to sensitive government systems. Threat Intelligence helps D.C.-area teams surface exposure signals early—including third-party and dark-web activity tied to their environment.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can DarkThreat detect a breach involving our Washington DC operations?',
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations' }, { label: 'Washington DC' }]} />
          </div>
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="w-4 h-4 mr-2" /> Serving Washington DC Enterprises
          </div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-foreground leading-tight mb-6">
            Enterprise Threat Intelligence for <span className="glow-text">Washington DC</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            In December 2024, the U.S. Treasury Department’s network was breached by Chinese state-sponsored hackers who exploited a vulnerability in a third-party security vendor. DarkThreat helps Washington, D.C. organizations monitor dark web data leaks and exposed credentials so they can detect and respond to threats before they escalate.
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">Protecting Washington DC from Cyber Risk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Threat actors continuously target the region's top enterprises. We detect exposures before they become breaches.</p>
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
              Find out what threat actors already know about your Washington DC-based operations. We'll run a preliminary scan across your domain and key personnel.
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
              <Button type="button" className="hero-button w-full">Request Free Scan</Button>
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
              <h3 className="font-montserrat font-bold text-foreground mb-2">Why is Threat Intelligence critical for businesses in Washington DC?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Organizations in the capital region face elevated nation-state and supply-chain risk. In the Treasury incident, attackers used a BeyondTrust vulnerability to gain unauthorized access to sensitive government systems. Threat Intelligence helps D.C.-area teams surface exposure signals early—including third-party and dark-web activity tied to their environment.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="font-montserrat font-bold text-foreground mb-2">How quickly can DarkThreat detect a breach involving our Washington DC operations?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Our proprietary engines scan dark web forums, telegram channels, and paste sites 24/7. When your data is exposed, we typically trigger an alert within minutes of the initial leak.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      
    </div>
  
  );
}
