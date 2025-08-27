import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TrialEmailRequest {
  userEmail: string;
  firstName: string;
  lastName: string;
  companyName: string;
  trialEndDate: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userEmail, firstName, lastName, companyName, trialEndDate }: TrialEmailRequest = await req.json();

    console.log("Sending trial emails for:", userEmail);

    // Send processing email to the trial user
    const welcomeEmail = await resend.emails.send({
      from: "DarkThreat <onboarding@resend.dev>",
      to: [userEmail],
      subject: "DarkThreat Trial Account - Under Review",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; margin-bottom: 24px;">Thank You for Your Interest in DarkThreat!</h1>
          
          <p>Hi ${firstName},</p>
          
          <p>Thank you for submitting your trial request for DarkThreat. We have received your application and it is currently being reviewed by our team.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Application Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${firstName} ${lastName}</li>
              <li><strong>Company:</strong> ${companyName}</li>
              <li><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</li>
              <li><strong>Status:</strong> Under Review</li>
            </ul>
          </div>
          
          <h3 style="color: #1e293b;">What Happens Next?</h3>
          <ul>
            <li>Our team will review your trial request within 24-48 hours</li>
            <li>You will receive login credentials via email once approved</li>
            <li>Access to the full DarkThreat platform will be granted upon approval</li>
            <li>Your 7-day trial period will begin once your account is activated</li>
          </ul>
          
          <p>If you have any questions or need immediate assistance, please don't hesitate to contact our support team.</p>
          
          <p>Best regards,<br>The DarkThreat Team</p>
        </div>
      `,
    });

    // Send notification email to super admin
    const adminEmail = await resend.emails.send({
      from: "DarkThreat <onboarding@resend.dev>",
      to: ["admin@darkthreat.com"], // Replace with actual admin email
      subject: "New Trial Registration - Action Required",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #dc2626; margin-bottom: 24px;">New Trial User Registration</h1>
          
          <p>A new user has registered for a DarkThreat trial and requires processing.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">User Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Name:</strong> ${firstName} ${lastName}</li>
              <li><strong>Email:</strong> ${userEmail}</li>
              <li><strong>Company:</strong> ${companyName}</li>
              <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
              <li><strong>Trial Expires:</strong> ${new Date(trialEndDate).toLocaleDateString()}</li>
            </ul>
          </div>
          
          <p>Please review this trial request and take appropriate action in the admin dashboard.</p>
          
          <p>Dashboard: <a href="${req.headers.get('origin') || 'https://your-app.com'}/admin">Admin Dashboard</a></p>
        </div>
      `,
    });

    console.log("Welcome email sent:", welcomeEmail);
    console.log("Admin notification sent:", adminEmail);

    return new Response(JSON.stringify({ 
      success: true,
      welcomeEmailId: welcomeEmail.data?.id,
      adminEmailId: adminEmail.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-trial-emails function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);