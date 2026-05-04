import { ReactNode } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

export default function StatCard({ title, value, description, icon }: StatCardProps) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className="threat-card group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-primary text-2xl">{icon}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">{title}</div>
        </div>
        <div className="text-3xl font-montserrat font-bold text-foreground mb-2 tabular-nums">
          {animated}
        </div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
