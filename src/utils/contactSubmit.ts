export interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  website: string;
}

const apiBaseUrl = (import.meta.env.VITE_CONTACT_API_URL ?? "").trim().replace(/\/+$/, "");

export async function submitContactForm(payload: ContactSubmission) {
  if (!apiBaseUrl) {
    throw new Error("Contact service is not configured.");
  }

  const response = await fetch(`${apiBaseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Contact form submission failed.");
  }

  return (await response.json()) as { success: true };
}
