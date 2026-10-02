import type { Metadata } from "next";
import CompliancePage from "@/components/compliance/CompliancePage";
import { compliancePageMetadata } from "@/lib/seo/compliance";
import { nistCsfCompliance } from "@/lib/seo/compliance/nist-csf";

export const metadata: Metadata = compliancePageMetadata(nistCsfCompliance);

export default function Page() {
  return <CompliancePage data={nistCsfCompliance} />;
}
