import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="pt-8 pb-16 px-6">
      <div
        className="max-w-6xl mx-auto rounded-2xl p-10 md:p-16 text-center relative overflow-hidden
                   border border-primary/30 reveal"
        style={{
          background:
            'linear-gradient(120deg, hsl(var(--navy-deep)) 0%, hsl(5 30% 8%) 50%, hsl(var(--cyan-deep) / 0.5) 100%)',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 circuit-pattern opacity-40 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Stop threats <span className="glow-text">before</span> they start.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free 7-day trial today. No credit card required.
          </p>
          <Button
            onClick={() => (window.location.href = '/auth')}
            className="cta-cyan inline-flex items-center gap-2 text-base"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
