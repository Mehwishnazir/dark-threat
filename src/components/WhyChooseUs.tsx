import { Shield, Zap, Clock, Target, Globe, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-Time Threat Detection",
    description: "Get instant alerts the moment your data appears on the dark web. Our AI-powered monitoring runs 24/7 across thousands of sources."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Comprehensive Coverage",
    description: "We monitor forums, marketplaces, paste sites, chatrooms, and private channels that competitors miss, ensuring no threat goes undetected."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fastest Response Time",
    description: "Average alert time under 5 minutes. While others take hours or days, we notify you instantly so you can act before damage occurs."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Actionable Intelligence",
    description: "Clear, prioritized alerts with specific remediation steps. No noise, just the threats that matter most to your organization."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Threat Network",
    description: "Access to our proprietary threat intelligence network spanning 150+ countries and monitoring in 35+ languages."
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Expert Support Team",
    description: "Dedicated security analysts available 24/7 to help interpret threats and guide your response strategy."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-threat-dark ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
            Why Choose <span className="glow-text">DarkThreat</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading dark web monitoring backed by cutting-edge technology and expert analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="relative border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  {/* Icon */}
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-montserrat font-bold text-foreground text-xl">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
