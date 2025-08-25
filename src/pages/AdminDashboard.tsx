import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Calendar, Mail, Building, User, LogOut, Filter } from 'lucide-react';
import { format } from 'date-fns';

interface TrialUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  job_title: string;
  created_at: string;
  trial_end: string;
  status: 'active' | 'expired' | 'cancelled';
}

export default function AdminDashboard() {
  const [trialUsers, setTrialUsers] = useState<TrialUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<TrialUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
    fetchTrialUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [trialUsers, statusFilter]);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'super_admin')
        .single();

      if (error || !roles) {
        setError('Access denied. Super admin privileges required.');
        return;
      }

      setIsAdmin(true);
    } catch (error: any) {
      setError('Error checking admin access');
    }
  };

  const fetchTrialUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('trial_users')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTrialUsers((data || []) as TrialUser[]);
    } catch (error: any) {
      setError('Error fetching trial users');
    } finally {
      setLoading(false);
    }
  };

  const filterUsers = () => {
    if (statusFilter === 'all') {
      setFilteredUsers(trialUsers);
    } else {
      const filtered = trialUsers.filter(user => {
        if (statusFilter === 'expired') {
          return new Date(user.trial_end) < new Date() || user.status === 'expired';
        }
        return user.status === statusFilter;
      });
      setFilteredUsers(filtered);
    }
  };

  const updateUserStatus = async (userId: string, newStatus: 'active' | 'expired' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('trial_users')
        .update({ status: newStatus })
        .eq('id', userId);

      if (error) throw error;
      
      // Refresh the data
      fetchTrialUsers();
    } catch (error: any) {
      setError('Error updating user status');
    }
  };

  const extendTrial = async (userId: string, days: number) => {
    try {
      const user = trialUsers.find(u => u.id === userId);
      if (!user) return;

      const newTrialEnd = new Date(user.trial_end);
      newTrialEnd.setDate(newTrialEnd.getDate() + days);

      const { error } = await supabase
        .from('trial_users')
        .update({ 
          trial_end: newTrialEnd.toISOString(),
          status: 'active'
        })
        .eq('id', userId);

      if (error) throw error;
      
      fetchTrialUsers();
    } catch (error: any) {
      setError('Error extending trial');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const getStatusBadge = (user: TrialUser) => {
    const isExpired = new Date(user.trial_end) < new Date();
    const status = isExpired ? 'expired' : user.status;
    
    const variants = {
      active: 'default',
      expired: 'destructive',
      cancelled: 'secondary'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Alert className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error || 'Checking admin access...'}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-oswald font-bold">DarkThreat Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{trialUsers.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trials</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {trialUsers.filter(u => u.status === 'active' && new Date(u.trial_end) > new Date()).length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expired Trials</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {trialUsers.filter(u => new Date(u.trial_end) < new Date() || u.status === 'expired').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {trialUsers.filter(u => {
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return new Date(u.created_at) > weekAgo;
                }).length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Trial Users</CardTitle>
                <CardDescription>Manage trial registrations and user access</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading trial users...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Signup Date</TableHead>
                    <TableHead>Trial End</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        {user.first_name} {user.last_name}
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.company_name}</TableCell>
                      <TableCell>{format(new Date(user.created_at), 'MMM dd, yyyy')}</TableCell>
                      <TableCell>{format(new Date(user.trial_end), 'MMM dd, yyyy')}</TableCell>
                      <TableCell>{getStatusBadge(user)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Select onValueChange={(value) => {
                            if (value === 'extend-7') {
                              extendTrial(user.id, 7);
                            } else if (value === 'extend-14') {
                              extendTrial(user.id, 14);
                            } else {
                              updateUserStatus(user.id, value as any);
                            }
                          }}>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Action" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Activate</SelectItem>
                              <SelectItem value="cancelled">Cancel</SelectItem>
                              <SelectItem value="extend-7">Extend +7 days</SelectItem>
                              <SelectItem value="extend-14">Extend +14 days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredUsers.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No trial users found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}