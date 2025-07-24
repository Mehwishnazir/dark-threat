
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
    <div className="threat-card">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-oswald font-bold text-foreground mb-4">
          Why Choose DarkThreat?
        </h2>
        <p className="text-lg text-muted-foreground">
          See how we compare to traditional dark web monitoring solutions
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-foreground font-oswald font-bold">Feature</TableHead>
              <TableHead className="text-primary font-oswald font-bold">DarkThreat</TableHead>
              <TableHead className="text-muted-foreground font-oswald font-bold">Traditional Dark Web Monitoring</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-foreground">{item.feature}</TableCell>
                <TableCell className="text-primary">{item.darkThreat}</TableCell>
                <TableCell className="text-muted-foreground">{item.traditional}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
