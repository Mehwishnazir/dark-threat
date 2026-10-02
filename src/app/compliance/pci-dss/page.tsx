import type { Metadata } from "next";
import CompliancePage from "@/components/compliance/CompliancePage";
import { compliancePageMetadata } from "@/lib/seo/compliance";
import { pciDssCompliance } from "@/lib/seo/compliance/pci-dss";

export const metadata: Metadata = compliancePageMetadata(pciDssCompliance);

export default function Page() {
  return <CompliancePage data={pciDssCompliance} />;
}
