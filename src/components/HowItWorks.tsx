import { Plug, ScanEye, BellRing } from 'lucide-react';

const steps = [
  { icon: Plug, title: 'Connect Assets', desc: 'Add your domains, emails, and brand keywords in under 2 minutes.' },
  { icon: ScanEye, title: 'AI Monitors 24/7', desc: 'We continuously scan dark web forums, marketplaces, and stealer logs.' },
  { icon: BellRing, title: 'Instant Alerts', desc: 'Get notified the moment your data appears — with full context to act.' },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps from setup to active defense</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-px
                       bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
          {steps.map((s, i) => (
            <div key={s.title} className={`reveal reveal-delay-${i + 1} relative text-center`}>
              <div className="relative z-10 mx-auto w-32 h-32 rounded-full bg-card border border-primary/30
                              flex items-center justify-center mb-6
                              shadow-[0_0_30px_hsl(0_78%_45%_/_0.2)]">
                <s.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground
                                font-montserrat font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
