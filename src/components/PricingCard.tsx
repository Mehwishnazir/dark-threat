import { Button } from '@/components/ui/button';

interface PricingCardProps {
  plan: string;
  price: string;
  billing: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ plan, price, billing, features, popular }: PricingCardProps) {
  return (
    <div className={`threat-card relative ${popular ? 'border-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-black px-4 py-1 text-xs font-oswald font-bold uppercase tracking-wider rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-xl font-oswald font-bold text-foreground mb-2">
            {plan}
          </h3>
          <div className="text-3xl font-oswald font-bold text-primary mb-1">
            {price}
          </div>
          <div className="text-sm text-muted-foreground">
            {billing}
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow-pulse"></div>
              {feature}
            </li>
          ))}
        </ul>

        <Button 
          className={`w-full ${popular ? 'hero-button' : 'border border-border hover:border-primary hover:bg-primary hover:text-black'}`}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}