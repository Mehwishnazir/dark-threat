const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'src', 'blogs');
const SITEMAP_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Static and dynamic main routes
const staticRoutes = [
  { loc: 'https://darkthreat.ai/', priority: '1.0', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/solution', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/pricing', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/about', priority: '0.7', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/contact', priority: '0.7', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/blog', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/dark-web-monitoring', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/credential-leak-detection', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/compare/darkthreat-vs-darkowl', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/data-leak-detection', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/author/dr-ayaan-rahman', priority: '0.6', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/industries', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/industries/financial-services', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/industries/healthcare', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/industries/legal', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/industries/government', priority: '0.8', lastmod: '2026-06-02' },
  { loc: 'https://darkthreat.ai/industries/ecommerce', priority: '0.8', lastmod: '2026-06-02' }
];

function formatDate(dateStr) {
  try {
    if (!dateStr) return '2026-06-02';
    const cleanStr = dateStr.replace(/^[A-Za-z]+,\s*/, ''); // Remove day name
    const date = new Date(cleanStr);
    if (!isNaN(date.getTime())) {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }
  } catch (e) {
    // Ignore and fallback
  }
  return '2026-06-02';
}

function generateSitemap() {
  console.log('Generating sitemap...');
  const files = fs.readdirSync(BLOGS_DIR);
  const blogRoutes = [];

  for (const file of files) {
    if (file === 'index.ts' || !file.endsWith('.ts')) {
      continue;
    }

    const filePath = path.join(BLOGS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract slug
    let slug = file.replace('.ts', '');
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    if (slugMatch) {
      slug = slugMatch[1];
    }

    // Extract publish date
    let lastmod = '2026-06-02';
    const dateMatch = content.match(/publishDate:\s*["']([^"']+)["']/);
    if (dateMatch) {
      lastmod = formatDate(dateMatch[1]);
    }

    blogRoutes.push({
      loc: `https://darkthreat.ai/blog/${slug}`,
      lastmod,
      priority: '0.7'
    });
  }

  // Sort blog routes alphabetically by location
  blogRoutes.sort((a, b) => a.loc.localeCompare(b.loc));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const route of allRoutes) {
    xml += `  <url><loc>${route.loc}</loc><lastmod>${route.lastmod}</lastmod><priority>${route.priority}</priority></url>\n`;
  }

  xml += '</urlset>\n';

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`Successfully generated sitemap with ${allRoutes.length} URLs at ${SITEMAP_PATH}`);
}

generateSitemap();
