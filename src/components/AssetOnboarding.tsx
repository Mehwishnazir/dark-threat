import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Plus, 
  Globe, 
  Mail, 
  Database, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

interface AssetOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssetOnboarding({ isOpen, onClose }: AssetOnboardingProps) {
  const [activeTab, setActiveTab] = useState('monitored');
  const [newAsset, setNewAsset] = useState({
    type: 'Domain',
    value: '',
    priority: 'High'
  });

  // Mock monitored assets
  const monitoredAssets = [
    { 
      id: 1, 
      type: 'Domain', 
      value: 'company.com', 
      status: 'Active', 
      threats: 12, 
      lastScan: '2024-01-15 10:30',
      icon: Globe 
    },
    { 
      id: 2, 
      type: 'Email', 
      value: 'admin@company.com', 
      status: 'Active', 
      threats: 3, 
      lastScan: '2024-01-15 09:45',
      icon: Mail 
    },
    { 
      id: 3, 
      type: 'IP Range', 
      value: '192.168.1.0/24', 
      status: 'Monitoring', 
      threats: 0, 
      lastScan: '2024-01-15 11:15',
      icon: Database 
    },
    { 
      id: 4, 
      type: 'Brand', 
      value: 'Company Brand', 
      status: 'Active', 
      threats: 8, 
      lastScan: '2024-01-15 08:20',
      icon: Shield 
    },
  ];

  const handleAddAsset = () => {
    if (newAsset.value.trim()) {
      // Add asset logic here
      console.log('Adding asset:', newAsset);
      setNewAsset({ type: 'Domain', value: '', priority: 'High' });
      setActiveTab('monitored');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Monitoring': return 'bg-yellow-500';
      case 'Inactive': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getThreatColor = (threats: number) => {
    if (threats === 0) return 'text-green-400';
    if (threats < 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-montserrat font-bold">Asset Management</DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monitored">Monitored Assets</TabsTrigger>
            <TabsTrigger value="add">Add New Asset</TabsTrigger>
          </TabsList>

          <TabsContent value="monitored" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Currently Monitored Assets</h3>
              <Badge variant="outline" className="text-primary border-primary">
                {monitoredAssets.length} Assets
              </Badge>
            </div>
            
            <div className="grid gap-4">
              {monitoredAssets.map((asset) => (
                <Card key={asset.id} className="bg-card/80 border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <asset.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-foreground">{asset.value}</p>
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(asset.status)}`} />
                          </div>
                          <p className="text-sm text-muted-foreground">{asset.type}</p>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-1">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className={`w-4 h-4 ${getThreatColor(asset.threats)}`} />
                          <span className={`text-sm font-medium ${getThreatColor(asset.threats)}`}>
                            {asset.threats} threats
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>Last scan: {asset.lastScan}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="add" className="space-y-6">
            <Card className="bg-card/80 border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-primary" />
                  <span>Add New Asset for Monitoring</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Asset Type</label>
                  <select 
                    className="w-full mt-1 p-3 border rounded-lg bg-background border-border text-foreground"
                    value={newAsset.type}
                    onChange={(e) => setNewAsset({ ...newAsset, type: e.target.value })}
                  >
                    <option value="Domain">Domain</option>
                    <option value="Email">Email</option>
                    <option value="IP Range">IP Range</option>
                    <option value="Brand">Brand</option>
                    <option value="API Key">API Key</option>
                    <option value="Certificate">SSL Certificate</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Asset Value</label>
                  <Input 
                    placeholder="Enter domain, email, IP range, or brand name" 
                    className="mt-1"
                    value={newAsset.value}
                    onChange={(e) => setNewAsset({ ...newAsset, value: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Example: company.com, admin@company.com, 192.168.1.0/24
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Monitoring Priority</label>
                  <select 
                    className="w-full mt-1 p-3 border rounded-lg bg-background border-border text-foreground"
                    value={newAsset.priority}
                    onChange={(e) => setNewAsset({ ...newAsset, priority: e.target.value })}
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">What will be monitored?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Dark web marketplaces and forums</li>
                    <li>• Paste sites and leak databases</li>
                    <li>• Hacker communication channels</li>
                    <li>• Stealer logs and credential dumps</li>
                    <li>• Brand mentions and impersonation attempts</li>
                  </ul>
                </div>
                
                <Button 
                  onClick={handleAddAsset}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!newAsset.value.trim()}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Asset for Monitoring
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}