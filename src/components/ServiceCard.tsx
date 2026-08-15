import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

export default function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div className="threat-card service-card-glow group h-full">
      <div className="relative z-10 h-full flex flex-col">
        <div className="text-primary text-4xl mb-6 group-hover:animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-montserrat font-bold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 flex-grow">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}