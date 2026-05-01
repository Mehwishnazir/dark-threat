
import { Shield, AlertTriangle, Search, Eye } from 'lucide-react';

export default function Banner() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Real-time Dark Web Monitoring"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      text: "Instant Threat Alerts"
    },
    {
      icon: <Search className="w-6 h-6" />,
      text: "AI-Powered Analysis"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      text: "6-Person Analyst Team"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 py-4 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-8 animate-scan whitespace-nowrap">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-black whitespace-nowrap">
              {feature.icon}
              <span className="font-montserrat font-semibold text-sm">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
