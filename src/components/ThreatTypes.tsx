import { KeyRound, FileWarning, MessagesSquare, ClipboardPaste } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const threats = [
  { icon: KeyRound, title: 'Credential Leaks', stat: '15B+', desc: 'Compromised credentials tracked across breaches.' },
  { icon: FileWarning, title: 'Stealer Logs', stat: '120K+', desc: 'New stealer log entries indexed every day.' },
  { icon: MessagesSquare, title: 'Hacker Forums', stat: '850+', desc: 'Active dark web forums and channels monitored.' },
  { icon: ClipboardPaste, title: 'Paste Sites', stat: '40+', desc: 'Paste sites scanned in real time for leaks.' },
];

function ThreatCard({ t, i }: { t: typeof threats[number]; i: number }) {
  const { ref, value } = useCountUp(t.stat);
  return (
    <div ref={ref} className={`threat-card service-card-glow reveal reveal-delay-${(i % 4) + 1}`}>
      <t.icon className="w-9 h-9 text-primary mb-4" />
      <div className="text-3xl font-montserrat font-bold text-foreground mb-1 tabular-nums">{value}</div>
      <h3 className="font-montserrat font-semibold text-foreground mb-2">{t.title}</h3>
      <p className="text-sm text-muted-foreground">{t.desc}</p>
    </div>
  );
}

export default function ThreatTypes() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
            Threats We <span className="glow-text">Detect</span>
          </h2>
          <p className="text-lg text-muted-foreground">Coverage across the most exploited dark web vectors</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((t, i) => <ThreatCard key={t.title} t={t} i={i} />)}
        </div>
      </div>
    </section>
  );
}
