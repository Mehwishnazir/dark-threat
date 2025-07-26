import { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  TrendingUp, 
  Users, 
  Globe, 
  Mail, 
  Database,
  Activity,
  Search,
  Download,
  Settings,
  Bell,
  Lock,
  LogOut
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const threatStats = [
    { label: 'Active Threats', value: '847', change: '+12%', icon: AlertTriangle, trend: 'up' },
    { label: 'Monitored Assets', value: '2,341', change: '+5%', icon: Shield, trend: 'up' },
    { label: 'Dark Web Mentions', value: '156', change: '-8%', icon: Eye, trend: 'down' },
    { label: 'Breach Alerts', value: '23', change: '+15%', icon: Database, trend: 'up' },
  ];

  const recentAlerts = [
    { id: 1, type: 'Critical', title: 'Employee Credentials Found on Dark Web', domain: 'company.com', time: '2 hours ago' },
    { id: 2, type: 'High', title: 'Domain Spoofing Detected', domain: 'companty.com', time: '4 hours ago' },
    { id: 3, type: 'Medium', title: 'Mention in Hacker Forum', domain: 'forum.darksite', time: '6 hours ago' },
    { id: 4, type: 'Low', title: 'Subdomain Registration Alert', domain: 'new.company.com', time: '1 day ago' },
  ];

  const monitoredAssets = [
    { type: 'Domain', value: 'company.com', status: 'Active', threats: 12 },
    { type: 'Email', value: 'admin@company.com', status: 'Active', threats: 3 },
    { type: 'IP Range', value: '192.168.1.0/24', status: 'Active', threats: 0 },
    { type: 'Brand', value: 'Company Brand', status: 'Active', threats: 8 },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-oswald font-bold text-foreground">DarkThreat</span>
          </div>
          
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
              <Activity className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Link to="/threat-intelligence">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Threat Intelligence
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <Eye className="w-4 h-4 mr-2" />
              Dark Web Monitoring
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <Globe className="w-4 h-4 mr-2" />
              Asset Discovery
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <Lock className="w-4 h-4 mr-2" />
              Credential Monitoring
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <Database className="w-4 h-4 mr-2" />
              Reports
            </Button>
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-64 p-6 border-t border-border">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground mb-2">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-oswald font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-muted-foreground">Monitor your organization's dark web exposure</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Badge variant="outline" className="text-green-400 border-green-400">
                System Online
              </Badge>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">AD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search threats, domains, or assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input border-border"
              />
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/80 backdrop-blur-xl border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Breaches</p>
                    <p className="text-2xl font-bold text-foreground">26</p>
                    <p className="text-xs text-red-500">+18 this week</p>
                  </div>
                  <div className="p-3 rounded-full bg-red-500/10">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-xl border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Compromised Accounts</p>
                    <p className="text-2xl font-bold text-foreground">847</p>
                    <p className="text-xs text-orange-500">+12% vs last month</p>
                  </div>
                  <div className="p-3 rounded-full bg-orange-500/10">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-xl border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Stealer Families</p>
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-xs text-yellow-500">Lumma, RedLine, Vidar</p>
                  </div>
                  <div className="p-3 rounded-full bg-yellow-500/10">
                    <Eye className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-xl border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Sources Monitored</p>
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-xs text-green-500">Telegram, Forums, Markets</p>
                  </div>
                  <div className="p-3 rounded-full bg-green-500/10">
                    <Database className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="alerts" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
              <TabsTrigger value="assets">Monitored Assets</TabsTrigger>
              <TabsTrigger value="threats">Threat Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="alerts" className="space-y-4">
              <Card className="bg-card/80 backdrop-blur-xl border-border">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Recent Threat Alerts</span>
                    <Badge variant="destructive">4 Critical</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            alert.type === 'Critical' ? 'bg-red-500' :
                            alert.type === 'High' ? 'bg-orange-500' :
                            alert.type === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`} />
                          <div>
                            <p className="font-medium text-foreground">{alert.title}</p>
                            <p className="text-sm text-muted-foreground">{alert.domain}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={alert.type === 'Critical' ? 'destructive' : 'secondary'}>
                            {alert.type}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assets" className="space-y-4">
              <Card className="bg-card/80 backdrop-blur-xl border-border">
                <CardHeader>
                  <CardTitle>Monitored Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monitoredAssets.map((asset, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            {asset.type === 'Domain' && <Globe className="w-5 h-5 text-primary" />}
                            {asset.type === 'Email' && <Mail className="w-5 h-5 text-primary" />}
                            {asset.type === 'IP Range' && <Database className="w-5 h-5 text-primary" />}
                            {asset.type === 'Brand' && <Shield className="w-5 h-5 text-primary" />}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{asset.value}</p>
                            <p className="text-sm text-muted-foreground">{asset.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={asset.status === 'Active' ? 'default' : 'secondary'}>
                            {asset.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {asset.threats} threats detected
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="threats" className="space-y-4">
              <Card className="bg-card/80 backdrop-blur-xl border-border">
                <CardHeader>
                  <CardTitle>Threat Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-background/30 rounded-lg border border-border">
                    <p className="text-muted-foreground">Threat analysis charts and graphs would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}