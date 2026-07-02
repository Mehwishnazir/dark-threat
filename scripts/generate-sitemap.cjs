/* eslint-disable */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://darkthreat.ai';
const BLOGS_DIR = path.join(__dirname, '..', 'src', 'blogs');
const APP_TSX = path.join(__dirname, '..', 'src', 'App.tsx');
const OUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const TODAY = new Date().toISOString().slice(0, 10);

// Routes to NEVER include (auth / app / private)
const EXCLUDE = new Set([
  '/signin', '/auth', '/forgot-password', '/dashboard', '/admin',
  '/alerts', '/reports', '/threat-intelligence', '/trial-coming-soon',
]);

// Extract static routes from App.tsx <Route path="..."> declarations.
function extractStaticRoutes() {
  const src = fs.readFileSync(APP_TSX, 'utf8');
  const routes = new Set();
  const re = /<Route\s+path=["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const p = m[1];
    if (p.includes(':') || p.includes('*')) continue; // skip dynamic + catch-all
    if (EXCLUDE.has(p)) continue;
    routes.add(p);
  }
  return [...routes];
}

function priorityFor(route) {
  if (route === '/') return '1.0';
  if (['/solution', '/pricing', '/blog', '/dark-web-monitoring',
       '/credential-leak-detection', '/data-leak-detection'].includes(route)) return '0.9';
  if (route.startsWith('/compare/') || route.startsWith('/industries')) return '0.8';
  if (route.startsWith('/author/')) return '0.6';
  if (['/privacy-policy', '/platform-terms', '/website-terms'].includes(route)) return '0.4';
  return '0.7';
}

function formatDate(raw) {
  if (!raw) return TODAY;
  try {
    const s = raw.replace(/^[A-Za-z]+,\s*/, '');
    const d = new Date(s);
    if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  } catch (_) {}
  return TODAY;
}

function collectBlogs() {
  const entries = [];
  const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  for (const file of files) {
    const content = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf8');
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    const dateMatch = content.match(/publishDate:\s*["']([^"']+)["']/);
    const slug = slugMatch ? slugMatch[1] : file.replace(/\.ts$/, '');
    entries.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: formatDate(dateMatch && dateMatch[1]),
      priority: '0.7',
    });
  }
  entries.sort((a, b) => a.loc.localeCompare(b.loc));
  return entries;
}

function build() {
  const staticRoutes = extractStaticRoutes()
    .sort()
    .map(r => ({ loc: `${BASE_URL}${r}`, lastmod: TODAY, priority: priorityFor(r) }));
  const blogs = collectBlogs();
  const all = [...staticRoutes, ...blogs];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const u of all) {
    xml += `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>\n`;
  }
  xml += '</urlset>\n';
  fs.writeFileSync(OUT, xml, 'utf8');
  console.log(`sitemap.xml: ${all.length} URLs (${staticRoutes.length} routes + ${blogs.length} blog posts)`);
}

build();
