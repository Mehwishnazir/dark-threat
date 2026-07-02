import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface TrialEmailRequest {
  userEmail: string;
  firstName: string;
  lastName: string;
  companyName: string;
  trialEndDate: string;
}

// Simple email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Input sanitization - remove potentially dangerous characters for HTML
const sanitizeInput = (input: string, maxLength: number = 100): string => {
  if (!input || typeof input !== 'string') return '';
  return input.slice(0, maxLength).replace(/[<>"'&]/g, '');
};

// Date validation
const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date > new Date();
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authorization header exists
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized - Missing or invalid authorization header' }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client with auth context
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    
    const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    // Verify the JWT and get claims
    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabaseAuth.auth.getClaims(token);
    
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized - Invalid token' }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const authenticatedUserEmail = claimsData.claims.email;

    // Parse and validate input
    const body = await req.json();
    const { userEmail, firstName, lastName, companyName, trialEndDate }: TrialEmailRequest = body;

    // Validate required fields
    if (!userEmail || !firstName || !lastName || !companyName || !trialEndDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    if (!isValidEmail(userEmail)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Ensure user can only send trial emails to their own email
    if (authenticatedUserEmail !== userEmail) {
      return new Response(
        JSON.stringify({ error: 'Forbidden - You can only request trial emails for your own account' }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate trial end date
    if (!isValidDate(trialEndDate)) {
      return new Response(
        JSON.stringify({ error: 'Invalid trial end date' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize inputs
    const sanitizedFirstName = sanitizeInput(firstName, 50);
    const sanitizedLastName = sanitizeInput(lastName, 50);
    const sanitizedCompanyName = sanitizeInput(companyName, 100);

    console.log('Sending trial emails for authenticated user');

    const { sendSmtp } = await import("../_shared/smtp.ts");

    // Send processing email to the trial user
    const welcomeEmail = await sendSmtp({
      to: userEmail,
      subject: "🚀 Your Trial Account is Being Processed",
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <p>Hi ${sanitizedFirstName},</p>
            <p>Thanks for signing up for a trial account with us! 🎉</p>
            <p>We're setting things up on our side, and your trial account is currently in processing.</p>
            <p><strong>Here's what you'll get once it's ready:</strong></p>
            <div style="margin: 20px 0;">
              <p style="margin: 8px 0;">✅ Access to trial features</p>
              <p style="margin: 8px 0;">✅ No setup or approval needed</p>
              <p style="margin: 8px 0;">✅ Quick start with zero hassle</p>
            </div>
            <p>You'll receive another email as soon as your trial is activated and ready to use.</p>
            <p>If you enjoy your experience, you can upgrade anytime to unlock the full set of features.</p>
            <p>Cheers,<br>DarkThreat Team</p>
          </div>
        `,
    });

    // Send notification email to super admin
    const adminEmail = await sendSmtp({
      to: Deno.env.get('ADMIN_NOTIFICATION_EMAIL') ?? 'admin@darkthreat.com',
      fromName: "DarkThreat System",
      subject: "New Trial Registration - Action Required",
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #dc2626; margin-bottom: 24px;">New Trial User Registration</h1>
            <p>A new user has registered for a DarkThreat trial and requires processing.</p>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">User Details:</h3>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</li>
                <li><strong>Company:</strong> ${sanitizedCompanyName}</li>
                <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
                <li><strong>Trial Expires:</strong> ${new Date(trialEndDate).toLocaleDateString()}</li>
              </ul>
            </div>
            <p>Please review this trial request and take appropriate action in the admin dashboard.</p>
            <p>Dashboard: <a href="https://darkthreat-ai-main-website.lovable.app/admin">Admin Dashboard</a></p>
          </div>
        `,
    });

    console.log('Welcome email sent successfully');
    console.log('Admin notification sent successfully');

    return new Response(JSON.stringify({ 
      success: true,
      welcomeEmailId: welcomeEmail.id,
      adminEmailId: adminEmail.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-trial-emails function:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

Deno.serve(handler);
