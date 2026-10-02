import type { Metadata } from "next";
import CompliancePage from "@/components/compliance/CompliancePage";
import { compliancePageMetadata } from "@/lib/seo/compliance";
import { soc2Compliance } from "@/lib/seo/compliance/soc-2";

export const metadata: Metadata = compliancePageMetadata(soc2Compliance);

export default function Page() {
  return <CompliancePage data={soc2Compliance} />;
}
