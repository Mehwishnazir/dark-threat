import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, Info, Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import TrialProcessingDialog from '@/components/TrialProcessingDialog';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showProcessingDialog, setShowProcessingDialog] = useState(false);
  const navigate = useNavigate();

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    // Check if user is already authenticated and has active trial
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;

        // Check user status before redirecting
        const { data: userData } = await (supabase as any)
          .from('users')
          .select('subscription_status, account_activated')
          .eq('user_id', session.user.id)
          .single();

        // Only redirect to dashboard if user has active subscription or trial
        const userRecord = userData as { subscription_status?: string; account_activated?: boolean } | null;
        if (userRecord?.subscription_status === 'active' || userRecord?.subscription_status === 'trial') {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Auth check error:', error);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const email = signInData.email.trim();
    const password = signInData.password;

    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Show processing dialog for all successful sign-ins
      if (data.user) {
        setShowProcessingDialog(true);
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred during sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <Helmet>
        <title>Sign In | DarkThreat.ai</title>
      </Helmet>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-montserrat">DarkThreat</CardTitle>
          <CardDescription>Access your cybersecurity intelligence platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Account signup and login are temporarily unavailable. To get started,{' '}
              <Link to="/contact" className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
                book a demo or contact sales
              </Link>
              .
            </AlertDescription>
          </Alert>

          <form onSubmit={handleSignIn} noValidate className="space-y-4">
            <div>
              <label htmlFor="signin-email" className="block text-sm font-medium mb-1">Email</label>
              <Input
                id="signin-email"
                name="email"
                type="email"
                value={signInData.email}
                onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                required
                aria-invalid={!!error}
              />
            </div>

            <div>
              <label htmlFor="signin-password" className="block text-sm font-medium mb-1">Password</label>
              <Input
                id="signin-password"
                name="password"
                type="password"
                value={signInData.password}
                onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                required
                aria-invalid={!!error}
              />
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>

      <TrialProcessingDialog
        open={showProcessingDialog}
        onClose={() => setShowProcessingDialog(false)}
      />
    </div>
  );
}
