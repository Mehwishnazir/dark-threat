export type LocationPageMeta = {
  href: string;
  name: string;
  place: string;
  service: string;
  region: "Northeast" | "Midwest" | "West" | "South";
  parentHref?: string;
};

export const LOCATION_PAGES: LocationPageMeta[] = [
  {
    href: "/dark-web-monitoring/new-york-city",
    name: "Dark Web Monitoring in New York City",
    place: "New York City",
    service: "Dark Web Monitoring",
    region: "Northeast",
    parentHref: "/dark-web-monitoring",
  },
  {
    href: "/digital-risk-protection/new-york",
    name: "Digital Risk Protection in New York",
    place: "New York",
    service: "Digital Risk Protection",
    region: "Northeast",
    parentHref: "/solution",
  },
  {
    href: "/threat-intelligence/washington-dc",
    name: "Threat Intelligence in Washington DC",
    place: "Washington DC",
    service: "Threat Intelligence",
    region: "Northeast",
    parentHref: "/threat-intelligence-platform",
  },
  {
    href: "/executive-monitoring/boston",
    name: "Executive Monitoring in Boston",
    place: "Boston",
    service: "Executive Monitoring",
    region: "Northeast",
  },
  {
    href: "/dark-web-monitoring/chicago",
    name: "Dark Web Monitoring in Chicago",
    place: "Chicago",
    service: "Dark Web Monitoring",
    region: "Midwest",
    parentHref: "/dark-web-monitoring",
  },
  {
    href: "/credential-monitoring/san-francisco",
    name: "Credential Monitoring in San Francisco",
    place: "San Francisco",
    service: "Credential Monitoring",
    region: "West",
    parentHref: "/credential-leak-detection",
  },
  {
    href: "/brand-monitoring/los-angeles",
    name: "Brand Monitoring in Los Angeles",
    place: "Los Angeles",
    service: "Brand Monitoring",
    region: "West",
  },
  {
    href: "/data-breach-monitoring/california",
    name: "Data Breach Monitoring in California",
    place: "California",
    service: "Data Breach Monitoring",
    region: "West",
    parentHref: "/data-leak-detection",
  },
  {
    href: "/attack-surface-monitoring/texas",
    name: "Attack Surface Monitoring in Texas",
    place: "Texas",
    service: "Attack Surface Monitoring",
    region: "South",
    parentHref: "/external-attack-surface-monitoring",
  },
  {
    href: "/domain-monitoring/austin",
    name: "Domain Monitoring in Austin",
    place: "Austin",
    service: "Domain Monitoring",
    region: "South",
  },
];

export const LOCATION_REGIONS: Array<LocationPageMeta["region"]> = [
  "Northeast",
  "Midwest",
  "West",
  "South",
];

export function otherLocationPages(currentHref: string): LocationPageMeta[] {
  return LOCATION_PAGES.filter((p) => p.href !== currentHref);
}

export function locationsForParent(parentHref: string): LocationPageMeta[] {
  return LOCATION_PAGES.filter((p) => p.parentHref === parentHref);
}
