import { supabase } from "@/integrations/supabase/client";

export interface FormSubmissionPayload {
  formType: string;
  name?: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  companyName?: string;
  companyDomain?: string;
  country?: string;
  website?: string; // honeypot
}

export async function submitLeadForm(payload: FormSubmissionPayload) {
  const { data, error } = await supabase.functions.invoke("contact-form", {
    body: payload,
  });

  if (error) {
    console.error("Form submission error:", error);
    throw error;
  }
  if (data && (data as { error?: string }).error) {
    throw new Error((data as { error: string }).error);
  }
  return data;
}
