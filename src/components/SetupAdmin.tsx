import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { AlertCircle, Loader2, Shield } from 'lucide-react';

export default function SetupAdmin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [adminData, setAdminData] = useState({
    email: '',
    password: '',
    firstName: 'Super',
    lastName: 'Admin',
  });

  const handleSetupAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create admin user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: adminData.email,
        password: adminData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
          data: {
            first_name: adminData.firstName,
            last_name: adminData.lastName,
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Wait a moment for the trigger to create the user profile
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Update user role to superadmin
        const { error: roleError } = await (supabase as any)
          .from('users')
          .update({ role: 'superadmin' })
          .eq('user_id', authData.user.id);

        if (roleError) throw roleError;

        setSuccess(true);
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred during admin setup');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <Shield className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <CardTitle className="text-2xl font-oswald text-green-600">Admin Setup Complete!</CardTitle>
          <CardDescription>
            Your super admin account has been created successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            You can now sign in with your admin credentials to access the admin dashboard.
          </p>
          <Button onClick={() => window.location.href = '/auth'} className="w-full">
            Go to Sign In
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <Shield className="w-12 h-12 text-primary mx-auto mb-2" />
        <CardTitle className="text-2xl font-oswald">Setup Super Admin</CardTitle>
        <CardDescription>
          Create the first super admin account for DarkThreat
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSetupAdmin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Admin Email</label>
            <Input
              type="email"
              value={adminData.email}
              onChange={(e) => setAdminData({...adminData, email: e.target.value})}
              placeholder="admin@company.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              value={adminData.password}
              onChange={(e) => setAdminData({...adminData, password: e.target.value})}
              placeholder="Create a strong password"
              required
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Super Admin
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}