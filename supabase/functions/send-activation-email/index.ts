import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  userEmail: string;
  firstName: string;
  lastName: string;
  companyName: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, firstName, lastName, companyName }: EmailRequest = await req.json();
    
    console.log('Sending activation email to:', userEmail);

    // Initialize Supabase client for updating user status
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Send activation email using SMTP
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DarkThreat Security <noreply@cybersilo.tech>',
        to: [userEmail],
        subject: '🎉 Your DarkThreat Account is Activated!',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Account Activated - DarkThreat</title>
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
                  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 24px;">✓</span>
                  </div>
                  <h2 style="margin: 0 0 16px; font-size: 28px; font-weight: 600; color: #ffffff;">
                    Account Activated Successfully!
                  </h2>
                  <p style="margin: 0; color: #d1d5db; font-size: 18px; line-height: 1.6;">
                    Welcome to DarkThreat, ${firstName}!
                  </p>
                </div>

                <div style="background: rgba(59, 130, 246, 0.1); border-radius: 12px; padding: 24px; margin: 30px 0; border-left: 4px solid #3b82f6;">
                  <h3 style="margin: 0 0 16px; color: #60a5fa; font-size: 18px; font-weight: 600;">
                    Your Account Details:
                  </h3>
                  <div style="color: #e5e7eb; line-height: 1.6;">
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p style="margin: 8px 0;"><strong>Company:</strong> ${companyName}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> ${userEmail}</p>
                    <p style="margin: 8px 0;"><strong>Trial Period:</strong> 7 days (full access)</p>
                  </div>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${supabaseUrl.replace('.supabase.co', '')}.vercel.app/dashboard" 
                     style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3); transition: all 0.3s ease;">
                    Access Your Dashboard
                  </a>
                </div>

                <div style="background: rgba(245, 158, 11, 0.1); border-radius: 12px; padding: 20px; margin: 30px 0; border-left: 4px solid #f59e0b;">
                  <h4 style="margin: 0 0 12px; color: #fbbf24; font-size: 16px; font-weight: 600;">
                    🚀 What's Next?
                  </h4>
                  <ul style="margin: 0; padding-left: 20px; color: #e5e7eb; line-height: 1.6;">
                    <li style="margin: 8px 0;">Explore our threat intelligence dashboard</li>
                    <li style="margin: 8px 0;">Set up your first security monitoring alerts</li>
                    <li style="margin: 8px 0;">Review your cybersecurity risk assessment</li>
                    <li style="margin: 8px 0;">Connect with our security experts</li>
                  </ul>
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
    console.log('Activation email sent:', emailResult);

    // Update user account as activated
    const { error: updateError } = await supabase
      .from('users')
      .update({ account_activated: true })
      .eq('business_email', userEmail);

    if (updateError) {
      console.error('Error updating user activation status:', updateError);
    }

    // Send notification email to admin
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'DarkThreat System <noreply@cybersilo.tech>',
        to: ['admin@darkthreat.com'],
        subject: '🎯 New User Account Activated',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1d4ed8;">New User Account Activated</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p><strong>User Details:</strong></p>
              <ul>
                <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                <li><strong>Email:</strong> ${userEmail}</li>
                <li><strong>Company:</strong> ${companyName}</li>
                <li><strong>Activated:</strong> ${new Date().toLocaleString()}</li>
              </ul>
            </div>
            <p style="margin-top: 20px;">
              <a href="${supabaseUrl.replace('.supabase.co', '')}.vercel.app/admin" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                View in Admin Dashboard
              </a>
            </p>
          </div>
        `,
      }),
    });

    const adminResult = await adminEmailResponse.json();
    console.log('Admin notification sent:', adminResult);

    return new Response(JSON.stringify({ 
      success: true,
      emailId: emailResult.id,
      adminEmailId: adminResult.id 
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("Error in send-activation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);