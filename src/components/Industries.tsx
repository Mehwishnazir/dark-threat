import { Banknote, HeartPulse, Scale, ShoppingCart, Cloud, Landmark } from 'lucide-react';

const industries = [
  { icon: Banknote, name: 'Financial Services', desc: 'Protect customer accounts, payment data, and prevent fraud.' },
  { icon: HeartPulse, name: 'Healthcare', desc: 'Safeguard PHI and stay HIPAA-compliant against breach exposure.' },
  { icon: Scale, name: 'Legal', desc: 'Protect privileged client information and case files.' },
  { icon: ShoppingCart, name: 'E-commerce', desc: 'Defend customer credentials, payment data, and brand integrity.' },
  { icon: Cloud, name: 'SaaS', desc: 'Detect leaked source code, API keys, and customer credentials.' },
  { icon: Landmark, name: 'Government', desc: 'Monitor for nation-state threats and citizen data exposure.' },
];

export default function Industries() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">Trusted across regulated and high-risk sectors</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((it, i) => (
            <div
              key={it.name}
              className={`threat-card service-card-glow reveal reveal-delay-${(i % 4) + 1} text-center`}
            >
              <it.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-foreground mb-2">{it.name}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
