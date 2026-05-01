import { useState } from 'react';
import { Search, Filter, AlertTriangle, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Alerts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const alerts = [
    {
      id: '1684783',
      title: 'Account Breach Detected in Combolist: Employee',
      severity: 'High',
      date: '10/17/2024 7:05',
      status: 'Resolve',
      email: 'hannah.christensen@company.com',
      source: 'Telegram',
      password: '(Empty)',
      machine: 'DESKTOP-QWDG3',
      stealer: 'Lumma Stealer'
    },
    {
      id: '1684784',
      title: 'Account Breach Detected in Combolist: Employee',
      severity: 'High',
      date: '10/17/2024 7:05',
      status: 'Resolve',
      email: 'david.serisier@company.com',
      source: 'Telegram',
      password: 'RNDM4Krh',
      machine: 'DESKTOP-QWDG3',
      stealer: 'Lumma Stealer'
    },
    {
      id: '1684785',
      title: 'Stealer Log Detection: BankOfSecurity Domain',
      severity: 'Critical',
      date: '10/16/2024 12:39',
      status: 'Active',
      email: 'as.shelton@bankofsecurity.com',
      source: 'Dark Web Marketplace',
      password: 'qn******',
      machine: 'DESKTOP-ABC123',
      stealer: 'RedLine Stealer'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-black';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-red-100 text-red-800 border-red-200';
      case 'resolve': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - same as dashboard */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Alerts
            </Button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-montserrat font-bold text-foreground">Security Alerts</h1>
              <p className="text-muted-foreground">Monitor and manage dark web breach alerts</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="destructive">3 Critical</Badge>
              <Badge variant="outline" className="text-orange-500 border-orange-500">12 High</Badge>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search alerts, emails, or sources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-red-50 border-red-200">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold text-red-700">26</p>
                  <p className="text-sm text-red-600">Active Alerts</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-orange-50 border-orange-200">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold text-orange-700">18</p>
                  <p className="text-sm text-orange-600">Pending Review</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-green-700">142</p>
                  <p className="text-sm text-green-600">Resolved</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-blue-700">24h</p>
                  <p className="text-sm text-blue-600">Response Time</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Alerts List */}
          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card key={alert.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(alert.status)}>
                      {alert.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">#{alert.id}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{alert.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">{alert.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Compromised Email</p>
                    <p className="font-medium">{alert.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Source</p>
                    <p className="font-medium">{alert.source}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Stealer Family</p>
                    <p className="font-medium">{alert.stealer}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Machine</p>
                    <p className="font-medium">{alert.machine}</p>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button size="sm">Mark Resolved</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}