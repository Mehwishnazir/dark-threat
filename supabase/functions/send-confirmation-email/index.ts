import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ConfirmationRequest {
  userEmail: string;
  token: string;
  tokenHash: string;
  redirectTo?: string;
  firstName: string;
}

// Simple email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Input sanitization - remove potentially dangerous characters for HTML
const sanitizeInput = (input: string, maxLength: number = 100): string => {
  if (!input || typeof input !== 'string') return '';
  return input.slice(0, maxLength).replace(/[<>\"'&]/g, '');
};

// URL validation - only allow safe redirect URLs
const isValidRedirectUrl = (url: string): boolean => {
  if (!url) return true; // Optional field
  try {
    const parsed = new URL(url);
    // Only allow https and specific allowed domains
    const allowedDomains = [
      'darkthreat-ai-main-website.lovable.app',
      'jfbisirfpbhkcskwaaov.supabase.co',
      'localhost'
    ];
    return parsed.protocol === 'https:' && 
           allowedDomains.some(domain => parsed.hostname === domain || parsed.hostname.endsWith('.' + domain));
  } catch {
    return false;
  }
};

const handler = async (req: Request): Promise<Response> => {
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
    const { userEmail, token: emailToken, tokenHash, redirectTo, firstName }: ConfirmationRequest = body;
    
    // Validate required fields
    if (!userEmail || !emailToken || !tokenHash || !firstName) {
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

    // Ensure user can only send confirmation to their own email
    if (authenticatedUserEmail !== userEmail) {
      return new Response(
        JSON.stringify({ error: 'Forbidden - You can only request confirmation for your own email' }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate redirect URL if provided
    if (redirectTo && !isValidRedirectUrl(redirectTo)) {
      return new Response(
        JSON.stringify({ error: 'Invalid redirect URL' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize inputs
    const sanitizedFirstName = sanitizeInput(firstName, 50);
    
    // Construct the official Supabase email verification URL
    const confirmationUrl = `${supabaseUrl}/auth/v1/verify?token=${encodeURIComponent(tokenHash)}&type=email${redirectTo ? `&redirect_to=${encodeURIComponent(redirectTo)}` : ''}`;
    
    console.log('Sending confirmation email to authenticated user');

    // Send confirmation email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "noreply@resend.dev",
        to: [userEmail],
        subject: '🔐 Confirm Your DarkThreat Account',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Confirmation - DarkThreat</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%); color: #ffffff;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <!-- Header -->
              <div style="text-align: center; margin-bottom: 40px;">
                <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                  <span style="font-size: 32px; font-weight: bold;">DT</span>
                </div>
                <h1 style="margin: 0; font-size: 32px; font-weight: 700; background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                  DarkThreat
                </h1>
                <p style="margin: 8px 0 0; color: #9ca3af; font-size: 16px;">Cybersecurity Intelligence Platform</p>
              </div>

              <!-- Main Content -->
              <div style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 16px; padding: 40px; border: 1px solid rgba(255, 255, 255, 0.1);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 24px;">📧</span>
                  </div>
                  <h2 style="margin: 0 0 16px; font-size: 28px; font-weight: 600; color: #ffffff;">
                    Welcome to Dark Threat
                  </h2>
                  <p style="margin: 0; color: #d1d5db; font-size: 18px; line-height: 1.6;">
                    Hi ${sanitizedFirstName}, please confirm your email to complete your registration.
                  </p>
                </div>

                <div style="background: rgba(59, 130, 246, 0.1); border-radius: 12px; padding: 24px; margin: 30px 0; border-left: 4px solid #3b82f6;">
                  <p style="margin: 0; color: #e5e7eb; line-height: 1.6;">
                    Click the button below to verify your email address and activate your DarkThreat account. 
                    This link will expire in 24 hours for security purposes.
                  </p>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${confirmationUrl}" 
                     style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3); transition: all 0.3s ease;">
                    ✅ Confirm Email Address
                  </a>
                </div>

                <div style="background: rgba(239, 68, 68, 0.1); border-radius: 12px; padding: 20px; margin: 30px 0; border-left: 4px solid #ef4444;">
                  <h4 style="margin: 0 0 12px; color: #fca5a5; font-size: 16px; font-weight: 600;">
                    🔒 Security Notice
                  </h4>
                  <ul style="margin: 0; padding-left: 20px; color: #e5e7eb; line-height: 1.6;">
                    <li style="margin: 8px 0;">This link is valid for 24 hours only</li>
                    <li style="margin: 8px 0;">If you didn't create this account, please ignore this email</li>
                    <li style="margin: 8px 0;">Never share your login credentials with anyone</li>
                    <li style="margin: 8px 0;">Contact support if you have any concerns</li>
                  </ul>
                </div>

                <div style="text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); color: #9ca3af; font-size: 14px;">
                  <p style="margin: 0;">
                    If the button doesn't work, copy and paste this link into your browser:
                  </p>
                  <p style="margin: 8px 0; word-break: break-all; color: #60a5fa;">
                    ${confirmationUrl}
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                <p style="margin: 0 0 16px; color: #9ca3af; font-size: 14px;">
                  Need help? Contact our support team at 
                  <a href="mailto:support@darkthreat.com" style="color: #60a5fa; text-decoration: none;">support@darkthreat.com</a>
                </p>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  © 2025 DarkThreat. Advanced Cybersecurity Intelligence Platform.
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log('Confirmation email sent successfully');

    return new Response(JSON.stringify({ 
      success: true,
      emailId: emailResult.id 
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    console.error("Error in send-confirmation-email function:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
