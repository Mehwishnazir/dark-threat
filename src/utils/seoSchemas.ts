export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DarkThreat',
  url: 'https://darkthreat.ai',
  logo: 'https://darkthreat.ai/logo.png',
  sameAs: [
    'https://twitter.com/DarkThreatAI',
    'https://linkedin.com/company/darkthreat',
    'https://github.com/darkthreat',
  ],
};

export const serviceSchema = (title: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: title,
  description,
  provider: organizationSchema,
  url,
});

export const breadcrumbSchema = (paths: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: paths.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    item: p.url,
  })),
});
