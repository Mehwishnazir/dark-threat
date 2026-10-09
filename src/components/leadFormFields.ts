export type TextField = {
  type: "text" | "email" | "tel";
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  width?: "half" | "full";
  bind: "name" | "email" | "company" | "detail";
};

export type SelectField = {
  type: "select";
  name: string;
  id: string;
  label: string;
  required?: boolean;
  width?: "half" | "full";
  placeholder?: string;
  options: { value: string; label: string }[];
  bind: "interest" | "detail";
};

export type TextareaField = {
  type: "textarea";
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  bind: "message";
};

export type LeadField = TextField | SelectField | TextareaField;

const REASON_OPTIONS = [
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Sales Question", label: "Sales Question" },
  { value: "Demo Request", label: "Demo Request" },
  { value: "Technical Support", label: "Technical Support" },
];

export function assessmentLeadFields(idPrefix: string): LeadField[] {
  return [
    { type: "text", name: "name", id: `${idPrefix}-name`, label: "Full Name *", placeholder: "Enter your full name", required: true, bind: "name" },
    { type: "email", name: "email", id: `${idPrefix}-email`, label: "Work Email *", placeholder: "you@company.com", required: true, bind: "email" },
    { type: "text", name: "company", id: `${idPrefix}-company`, label: "Company Name", placeholder: "Your organization", bind: "company" },
    { type: "tel", name: "phone", id: `${idPrefix}-phone`, label: "Phone Number", placeholder: "+1 (555) 000-0000", bind: "detail" },
    {
      type: "select",
      name: "interest",
      id: `${idPrefix}-interest`,
      label: "Reason for Contact *",
      required: true,
      bind: "interest",
      placeholder: "Select a reason",
      options: REASON_OPTIONS,
    },
    {
      type: "textarea",
      name: "message",
      id: `${idPrefix}-message`,
      label: "How Can We Help? *",
      placeholder: "Describe your security needs or challenges...",
      required: true,
      rows: 3,
      bind: "message",
    },
  ];
}
