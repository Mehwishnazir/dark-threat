import { Database, Search, Shield, LineChart } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "1",
    icon: <Database className="w-10 h-10" />,
    title: "Collect Data",
    description: "Continuously scan dark web forums, marketplaces, paste sites, and chat rooms for your assets"
  },
  {
    number: "2",
    icon: <Search className="w-10 h-10" />,
    title: "Detect Threats",
    description: "AI-driven analytics identify unusual activity, credential leaks, and potential attacks"
  },
  {
    number: "3",
    icon: <Shield className="w-10 h-10" />,
    title: "Respond & Protect",
    description: "Instant alerts and automatic security measures keep your business safe"
  },
  {
    number: "4",
    icon: <LineChart className="w-10 h-10" />,
    title: "Monitor & Comply",
    description: "Continuous monitoring and compliance reporting ensure ongoing protection"
  }
];

const OurProcess = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
            How <span className="glow-text">DarkThreat</span> Platform Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive dark web monitoring process ensures complete protection
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden md:block" style={{ top: '32px' }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center h-full">
                {/* Number Badge */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <span className="text-2xl font-montserrat font-bold text-black">{step.number}</span>
                </div>

                {/* Icon & Card */}
                <div className="flex flex-col flex-1 w-full">
                  <div className="bg-card/50 border border-primary rounded-lg p-6 flex flex-col flex-1 items-center justify-between min-h-[220px] max-h-[220px] w-full">
                    <div className="text-primary mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    {/* Title */}
                    <h3 className="font-montserrat font-bold text-foreground text-xl mb-3 uppercase">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
