export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DarkThreat",
  url: "https://darkthreat.ai",
  logo: "https://darkthreat.ai/logo.png",
  sameAs: [
    "https://twitter.com/DarkThreatAI",
    "https://linkedin.com/company/darkthreat",
    "https://github.com/darkthreat",
  ],
};

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DarkThreat",
  alternateName: ["DarkThreat AI", "Dark Threat AI", "DarkThreat Security", "DarkThreat.ai"],
  url: "https://darkthreat.ai",
  logo: "https://darkthreat.ai/logo.png",
  sameAs: [
    "https://twitter.com/DarkThreatAI",
    "https://linkedin.com/company/darkthreat",
    "https://github.com/darkthreat",
  ],
  description:
    "AI-powered dark web monitoring and threat intelligence platform protecting enterprises from credential leaks, ransomware, and cyber threats in real time.",
  foundingDate: "2024",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  knowsAbout: [
    "Dark Web Monitoring",
    "Threat Intelligence",
    "Credential Leak Detection",
    "Cyber Threat Detection",
    "Digital Risk Protection",
    "External Attack Surface Management",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@darkthreat.ai",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  award: [
    "ISO 27001 Aligned",
    "NIST Cybersecurity Framework Compliant",
    "GDPR Compliant",
    "HIPAA Ready",
    "PCI-DSS Support",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DarkThreat",
  url: "https://darkthreat.ai",
};

export const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DarkThreat",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  url: "https://darkthreat.ai",
  description:
    "AI-powered dark web monitoring and credential leak detection platform that protects enterprises from data breaches and hacker chatter in real time.",
  image: "https://darkthreat.ai/og-image.png",
  offers: {
    "@type": "Offer",
    price: "288",
    priceCurrency: "USD",
  },
};

export const serviceSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  description,
  provider: organizationSchema,
  url,
});

export const breadcrumbSchema = (paths: { name: string; url?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: paths.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    ...(p.url ? { item: p.url } : {}),
  })),
});

export const faqPageSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
