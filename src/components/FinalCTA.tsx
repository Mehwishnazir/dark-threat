import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="pt-8 pb-16 px-6">
      <div
        className="max-w-6xl mx-auto rounded-2xl p-10 md:p-16 text-center relative overflow-hidden border border-primary/30"
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
            Join 500+ security teams monitoring 2M+ dark web sources daily. Schedule a demo to see the platform in action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                className="cta-cyan inline-flex items-center gap-2 text-base px-8 py-4 w-full"
              >
                <CalendarDays className="w-4 h-4" />
                Schedule a Demo
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Setup in under 5 minutes · No agents or software required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
