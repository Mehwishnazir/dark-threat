import type { Metadata } from "next";
import CompliancePage from "@/components/compliance/CompliancePage";
import { compliancePageMetadata } from "@/lib/seo/compliance";
import { hipaaCompliance } from "@/lib/seo/compliance/hipaa";

export const metadata: Metadata = compliancePageMetadata(hipaaCompliance);

export default function Page() {
  return <CompliancePage data={hipaaCompliance} />;
}
