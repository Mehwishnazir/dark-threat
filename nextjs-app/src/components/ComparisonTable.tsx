import { Check, X } from "lucide-react";

const features = [
  {
    feature: "Coverage",
    darkThreat: "Domains, sub-domains, emails, forums, marketplaces, private channels",
    traditional: "Primarily paste sites & public forums",
  },
  {
    feature: "Data Sources",
    darkThreat: "TOR, I2P, private communities, chatrooms, marketplaces, custom client feeds",
    traditional: "Limited open-source forums & marketplaces",
  },
  {
    feature: "Human Analyst Enrichment",
    darkThreat: "6-person analyst team validates & enriches critical alerts (MSSP / custom)",
    traditional: "Optional add-on, often delayed",
  },
  {
    feature: "Search Credits & API",
    darkThreat: 'Granular "search credit" model + full JSON/CSV API access (MSSP)',
    traditional: "Pay-per-report or flat API plans",
  },
  {
    feature: "Customization & White-Label",
    darkThreat: "Full CSS/theme overrides, custom domains, white-label portal (MSSP)",
    traditional: "Rare; typically fixed-brand dashboards",
  },
  {
    feature: "Dashboard & Reporting",
    darkThreat: "No-code dashboards, scheduled & on-demand PDF/CSV exports, compliance reporting",
    traditional: "Static reports, limited drill-down",
  },
  {
    feature: "Dark Web Risk Scoring",
    darkThreat: "Organizational risk dashboard + IASM/ORS heatmaps (not on Standard — contact sales)",
    traditional: "No unified risk scoring; separate tools required",
  },
];

export default function ComparisonTable() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />

      <div className="threat-card relative z-10 border-2 border-primary/20 shadow-2xl">
        <div className="overflow-x-auto rounded-xl border border-border/50">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-primary/10 to-primary/5">
                <th className="text-left text-foreground font-montserrat font-bold text-lg py-6 px-4">Feature</th>
                <th className="text-left text-primary font-montserrat font-bold text-lg py-6 px-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    DarkThreat
                  </div>
                </th>
                <th className="text-left text-muted-foreground font-montserrat font-bold text-lg py-6 px-4">
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5" />
                    Traditional Monitoring
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item) => (
                <tr key={item.feature} className="hover:bg-primary/5 transition-colors border-t border-border/30">
                  <td className="font-semibold text-foreground py-6 px-4 border-r border-border/30">{item.feature}</td>
                  <td className="text-primary py-6 px-4 border-r border-border/30">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item.darkThreat}</span>
                    </div>
                  </td>
                  <td className="text-muted-foreground py-6 px-4">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
