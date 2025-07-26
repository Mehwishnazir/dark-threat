
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const features = [
    {
      feature: 'Coverage',
      darkThreat: 'Domains, sub-domains, emails, forums, marketplaces, private channels',
      traditional: 'Primarily paste sites & public forums'
    },
    {
      feature: 'Data Sources',
      darkThreat: 'TOR, I2P, private communities, chatrooms, marketplaces, custom client feeds',
      traditional: 'Limited open-source forums & marketplaces'
    },
    {
      feature: 'Human Analyst Enrichment',
      darkThreat: '6-person analyst team validates & enriches critical alerts',
      traditional: 'Optional add-on, often delayed'
    },
    {
      feature: 'Search Credits & API',
      darkThreat: 'Granular "search credit" model + full JSON/CSV API access',
      traditional: 'Pay-per-report or flat API plans'
    },
    {
      feature: 'Customization & White-Label',
      darkThreat: 'Full CSS/theme overrides, custom domains, white-label portal',
      traditional: 'Rare; typically fixed-brand dashboards'
    },
    {
      feature: 'Dashboard & Reporting',
      darkThreat: 'No-code dashboards, scheduled & on-demand PDF/CSV exports, compliance reporting',
      traditional: 'Static reports, limited drill-down'
    },
    {
      feature: 'Dark Web Risk Scoring',
      darkThreat: 'Organizational risk dashboard + IASM/ORS heatmaps',
      traditional: 'No unified risk scoring; separate tools required'
    }
  ];

  return (
    <div className="relative">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
      
      <div className="threat-card relative z-10 border-2 border-primary/20 shadow-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-oswald font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Why Choose DarkThreat?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we compare to traditional dark web monitoring solutions
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border/50">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary/10 to-primary/5">
                <TableHead className="text-foreground font-oswald font-bold text-lg py-6">Feature</TableHead>
                <TableHead className="text-primary font-oswald font-bold text-lg py-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    DarkThreat
                  </div>
                </TableHead>
                <TableHead className="text-muted-foreground font-oswald font-bold text-lg py-6">
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5" />
                    Traditional Monitoring
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((item, index) => (
                <TableRow key={index} className="hover:bg-primary/5 transition-colors">
                  <TableCell className="font-semibold text-foreground py-6 border-r border-border/30">
                    {item.feature}
                  </TableCell>
                  <TableCell className="text-primary py-6 border-r border-border/30">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item.darkThreat}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground py-6">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item.traditional}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
