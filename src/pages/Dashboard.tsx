import { useState, useEffect } from 'react';
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
  Bell,
  Lock,
  LogOut,
  User,
  Plus,
  Settings,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import CollapsibleSidebar from '@/components/CollapsibleSidebar';
import AssetOnboarding from '@/components/AssetOnboarding';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [mfaModalOpen, setMfaModalOpen] = useState(false);
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [mfaCode, setMfaCode] = useState('');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trialStatus, setTrialStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserAccess = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/auth');
          return;
        }

        // Check trial status
        const { data: trialData, error } = await supabase
          .from('trial_users')
          .select('status')
          .eq('user_id', session.user.id)
          .single();

        if (error || !trialData) {
          console.error('Error fetching trial status:', error);
          // Don't redirect to auth if user exists but no trial data
          // This handles admin users or users created outside trial flow
          setTrialStatus('active');
          setLoading(false);
          return;
        }

        setTrialStatus(trialData.status);
        setLoading(false);
      } catch (error) {
        console.error('Error checking user access:', error);
        navigate('/auth');
      }
    };

    checkUserAccess();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (trialStatus !== 'active') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-oswald">Account Pending</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Your trial account is currently being reviewed by our team. 
              You will receive access once your account is approved.
            </p>
            <p className="text-sm text-muted-foreground">
              Status: <span className="font-medium capitalize">{trialStatus}</span>
            </p>
            <Button onClick={handleSignOut} variant="outline" className="w-full">
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Mock data
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

  const sendMfaCode = () => {
    // Simulate sending MFA code
    alert('6-digit verification code sent to your email');
  };

  const verifyMfaCode = () => {
    if (mfaCode === '123456') {
      setMfaEnabled(true);
      setMfaModalOpen(false);
      setMfaCode('');
      alert('Multi-Factor Authentication enabled successfully');
    } else {
      alert('Invalid code. Try 123456 for demo.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <CollapsibleSidebar currentPath="/dashboard" />

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
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full bg-primary">
                    <span className="text-sm font-semibold text-primary-foreground">AD</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setMfaModalOpen(true)}>
                    <Lock className="w-4 h-4 mr-2" />
                    {mfaEnabled ? 'Manage MFA' : 'Enable MFA'}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setOnboardingOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Asset Onboarding
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
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

      {/* Asset Onboarding Modal */}
      <AssetOnboarding isOpen={onboardingOpen} onClose={() => setOnboardingOpen(false)} />

      {/* MFA Setup Modal */}
      <Dialog open={mfaModalOpen} onOpenChange={setMfaModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Multi-Factor Authentication</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {!mfaEnabled ? (
              <>
                <p className="text-muted-foreground text-sm">
                  Enable MFA to add an extra layer of security to your account. 
                  We'll send a 6-digit code to your email for verification.
                </p>
                <Button onClick={sendMfaCode} className="w-full">
                  Send Verification Code
                </Button>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Enter 6-digit code</label>
                  <Input
                    placeholder="123456"
                    value={mfaCode}
                    onChange={(e) => setMfaCode(e.target.value)}
                    maxLength={6}
                  />
                </div>
                <Button onClick={verifyMfaCode} className="w-full" disabled={mfaCode.length !== 6}>
                  Enable MFA
                </Button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">MFA Enabled</h3>
                  <p className="text-sm text-muted-foreground">
                    Your account is protected with multi-factor authentication
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setMfaEnabled(false);
                    setMfaModalOpen(false);
                  }}
                  className="w-full"
                >
                  Disable MFA
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
        
        {chatbotOpen && (
          <Card className="absolute bottom-16 right-0 w-80 h-96 bg-card/95 backdrop-blur-xl border-border shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">DarkThreat AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-72">
              <div className="flex-1 bg-background/50 rounded-lg p-3 mb-3 overflow-y-auto">
                <div className="space-y-2">
                  <div className="bg-primary/10 p-2 rounded text-sm">
                    Hello! I'm your AI assistant. I can help you with threat analysis, asset monitoring, and security insights. What would you like to know?
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Ask about your security..." className="flex-1" />
                <Button size="sm">Send</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}