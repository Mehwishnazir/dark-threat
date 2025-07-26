import { useState } from 'react';
import { Search, Filter, AlertTriangle, Shield, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function ThreatIntelligence() {
  const [searchQuery, setSearchQuery] = useState('');

  const threats = [
    {
      id: 1,
      title: 'Corporate Credentials Found on Dark Web',
      severity: 'high',
      source: 'TOR Marketplace',
      date: '2024-01-15',
      description: 'Employee email addresses and hashed passwords discovered on underground marketplace'
    },
    {
      id: 2,
      title: 'Company Domain Mentioned in Hacker Forum',
      severity: 'medium',
      source: 'Private Forum',
      date: '2024-01-14',
      description: 'Discussion thread planning potential attack vectors against company infrastructure'
    },
    {
      id: 3,
      title: 'Customer Database Leak Detected',
      severity: 'critical',
      source: 'Paste Site',
      date: '2024-01-13',
      description: 'Sensitive customer information including PII found on public paste site'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-900/20';
      case 'high': return 'text-orange-400 bg-orange-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      default: return 'text-blue-400 bg-blue-900/20';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-oswald font-bold text-foreground">Threat Intelligence</h1>
          <p className="text-muted-foreground">Monitor and analyze dark web threats in real-time</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Export
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search threats, domains, or indicators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-card/50 border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-900/20 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Critical Threats</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-card/50 border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-900/20 rounded-lg">
              <Shield className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">28</p>
              <p className="text-sm text-muted-foreground">High Priority</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-card/50 border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-900/20 rounded-lg">
              <Globe className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Monitored Assets</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-card/50 border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-900/20 rounded-lg">
              <Clock className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Monitoring</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Recent Threats</h2>
        
        {threats.map((threat) => (
          <Card key={threat.id} className="p-6 bg-card/50 border-border hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{threat.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(threat.severity)}`}>
                    {threat.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{threat.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Source: {threat.source}</span>
                  <span>Date: {threat.date}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}