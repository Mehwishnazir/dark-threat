import type { Metadata } from "next";
import CompliancePage from "@/components/compliance/CompliancePage";
import { compliancePageMetadata } from "@/lib/seo/compliance";
import { iso27001Compliance } from "@/lib/seo/compliance/iso-27001";

export const metadata: Metadata = compliancePageMetadata(iso27001Compliance);

export default function Page() {
  return <CompliancePage data={iso27001Compliance} />;
}
