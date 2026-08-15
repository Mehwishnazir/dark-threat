/* eslint-disable */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.darkthreat.ai';
const BLOGS_DIR = path.join(__dirname, '..', 'src', 'blogs');
const BLOGS_INDEX = path.join(BLOGS_DIR, 'index.ts');
const APP_TSX = path.join(__dirname, '..', 'src', 'App.tsx');
const OUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const TODAY = new Date().toISOString().slice(0, 10);

// Routes to NEVER include (auth / app / private / redirect-only aliases)
const EXCLUDE = new Set([
  '/signin', '/auth', '/forgot-password', '/dashboard', '/admin',
  '/alerts', '/reports', '/threat-intelligence', '/trial-coming-soon',
  // Navigate aliases — do not list redirect sources in the sitemap
  '/platform-terms-of-use',
  '/website-terms-of-use',
  '/digital-risk-protection',
  '/industries/technology',
]);

// Dynamic routes (e.g. /author/:slug) are skipped by extractStaticRoutes — list real URLs here.
const EXTRA_STATIC = [
  '/author/dr-ayaan-rahman',
];

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

/** Slugs exported via allBlogs in blogs/index.ts (what the SPA can actually render). */
function getRegisteredBlogSlugs() {
  const indexSrc = fs.readFileSync(BLOGS_INDEX, 'utf8');
  const importMap = new Map();
  for (const m of indexSrc.matchAll(
    /import\s+\{\s*([^}]+)\s*\}\s+from\s+["']\.\/([^"']+)["']/g
  )) {
    const names = m[1].split(',').map((s) => s.trim()).filter(Boolean);
    const file = m[2].replace(/\.ts$/, '') + '.ts';
    for (const n of names) importMap.set(n, file);
  }
  const arrayMatch = indexSrc.match(/export const allBlogs\s*=\s*\[([\s\S]*?)\];/);
  if (!arrayMatch) throw new Error('allBlogs array not found in blogs/index.ts');
  const names = [...arrayMatch[1].matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g)].map((m) => m[1]);
  const slugs = new Set();
  for (const name of names) {
    const file = importMap.get(name);
    if (!file) continue;
    const content = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf8');
    const slug = (content.match(/slug:\s*["']([^"']+)["']/) || [])[1];
    if (slug) slugs.add(slug);
  }
  return slugs;
}

function collectBlogs() {
  const registered = getRegisteredBlogSlugs();
  const entries = [];
  let skipped = 0;
  const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  for (const file of files) {
    const content = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf8');
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    const dateMatch = content.match(/publishDate:\s*["']([^"']+)["']/);
    const slug = slugMatch ? slugMatch[1] : file.replace(/\.ts$/, '');
    if (!registered.has(slug)) {
      skipped += 1;
      continue;
    }
    entries.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: formatDate(dateMatch && dateMatch[1]),
      priority: '0.7',
    });
  }
  entries.sort((a, b) => a.loc.localeCompare(b.loc));
  return { entries, skipped };
}

function build() {
  const staticRoutes = [...new Set([...extractStaticRoutes(), ...EXTRA_STATIC])]
    .sort()
    .map(r => ({ loc: `${BASE_URL}${r}`, lastmod: TODAY, priority: priorityFor(r) }));
  const { entries: blogs, skipped } = collectBlogs();
  const all = [...staticRoutes, ...blogs];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const u of all) {
    xml += `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>\n`;
  }
  xml += '</urlset>\n';
  fs.writeFileSync(OUT, xml, 'utf8');
  console.log(
    `sitemap.xml: ${all.length} URLs (${staticRoutes.length} routes + ${blogs.length} blog posts; skipped ${skipped} unregistered ghosts)`
  );
}

build();
