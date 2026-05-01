
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  plan: string;
  monthlyPrice: string;
  annualPrice: string;
  discount: string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
  isAnnual?: boolean;
  onTrialClick?: () => void;
}

export default function PricingCard({ 
  plan, 
  monthlyPrice, 
  annualPrice, 
  discount, 
  features, 
  popular,
  isCustom,
  isAnnual = true,
  onTrialClick
}: PricingCardProps) {

  return (
    <div className={`threat-card relative ${popular ? 'border-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-black px-4 py-1 text-xs font-montserrat font-bold uppercase tracking-wider rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
            {plan}
          </h3>
          
          {!isCustom && (
            <div className="mb-4">
              <div className="text-3xl font-montserrat font-bold text-primary mb-1">
                {isAnnual ? annualPrice : monthlyPrice}
              </div>
              <div className="text-sm text-muted-foreground">
                {isAnnual ? 'per year' : 'per month'}
              </div>
              
              {isAnnual && discount && (
                <div className="mt-2">
                  <span className="bg-green-900 text-green-400 px-2 py-1 text-xs font-bold rounded-full">
                    Save {discount}
                  </span>
                </div>
              )}
            </div>
          )}
          
          {isCustom && (
            <div className="text-3xl font-montserrat font-bold text-primary mb-1">
              Custom
            </div>
          )}
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
          onClick={isCustom ? undefined : onTrialClick}
          className={`w-full ${popular ? 'hero-button' : 'border border-border hover:border-primary hover:bg-primary hover:text-black'}`}
        >
          {isCustom ? 'Contact Sales' : 'Start FREE Trial'}
        </Button>
      </div>
    </div>
  );
}
