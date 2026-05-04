import { ShieldCheck, Lock, Award, BadgeCheck } from 'lucide-react';

const certs = [
  { icon: ShieldCheck, label: 'SOC 2 Type II' },
  { icon: BadgeCheck,  label: 'GDPR Compliant' },
  { icon: Award,       label: 'ISO 27001' },
  { icon: Lock,        label: 'SSL Secured' },
];

export default function SecurityCerts() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div
              key={c.label}
              className="flex items-center justify-center gap-3 p-5 rounded-lg
                         border border-border bg-card/60
                         hover:border-primary/40 transition-colors"
            >
              <c.icon className="w-7 h-7 text-primary" />
              <span className="font-montserrat font-semibold text-foreground text-sm">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
