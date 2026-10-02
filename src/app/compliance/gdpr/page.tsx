import type { Metadata } from "next";
import CompliancePage from "@/components/compliance/CompliancePage";
import { compliancePageMetadata } from "@/lib/seo/compliance";
import { gdprCompliance } from "@/lib/seo/compliance/gdpr";

export const metadata: Metadata = compliancePageMetadata(gdprCompliance);

export default function Page() {
  return <CompliancePage data={gdprCompliance} />;
}
