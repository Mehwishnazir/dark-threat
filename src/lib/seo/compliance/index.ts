import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import { gdprCompliance } from "./gdpr";
import { hipaaCompliance } from "./hipaa";
import { iso27001Compliance } from "./iso-27001";
import { nistCsfCompliance } from "./nist-csf";
import { pciDssCompliance } from "./pci-dss";
import { soc2Compliance } from "./soc-2";
import type { CompliancePageData } from "./types";

export type { CompliancePageData } from "./types";

export const COMPLIANCE_PAGES: CompliancePageData[] = [
  gdprCompliance,
  hipaaCompliance,
  pciDssCompliance,
  soc2Compliance,
  iso27001Compliance,
  nistCsfCompliance,
];

export function compliancePageMetadata(page: CompliancePageData): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    ...pageSeo(page.path),
  };
}
