import { supabase } from "@/integrations/supabase/client";

export interface FormSubmissionPayload {
  formType: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  lastName?: string;
  jobTitle?: string;
  companyDomain?: string;
  country?: string;
}

export async function submitLeadForm(payload: FormSubmissionPayload) {
  const { data, error } = await supabase.functions.invoke("submit-form", {
    body: payload,
  });

  if (error) {
    console.error("Form submission error:", error);
    throw error;
  }

  return data;
}
