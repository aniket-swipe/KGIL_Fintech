/**
 * Build-time prerender.
 *
 * Runs after the client and SSR bundles are built. Renders every route to
 * static HTML, bakes the <head> metadata and JSON-LD in, and writes
 * sitemap.xml. The result is a site whose content, headings and internal
 * links are all present in the initial HTML, with React hydrating on top.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const {
  render, pages, indexablePages, siteUrl, absolute, ogImage, structuredData,
} = await import(path.join(root, 'dist-ssr/entry-server.js'));

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ld = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

function head(page) {
  const url = absolute(page.path);
  const image = absolute(ogImage.path);
  const robots = page.indexable
    ? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    : 'noindex,follow';

  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    page.indexable ? `<link rel="canonical" href="${esc(url)}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="KGIL Fintech Solutions Private Limited" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="${ogImage.width}" />`,
    `<meta property="og:image:height" content="${ogImage.height}" />`,
    `<meta property="og:image:alt" content="${esc(ogImage.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    `<script type="application/ld+json">${ld(structuredData(page))}</script>`,
  ].filter(Boolean);

  return tags.map((t) => `    ${t}`).join('\n');
}

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

for (const page of Object.values(pages)) {
  const html = template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(page).trim())
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);

  const out = path.join(dist, page.out);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
  console.log(`prerendered ${page.path.padEnd(18)} -> dist/${page.out}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/1999/sitemap/0.9">
${indexablePages
  .map(
    (p) => `  <url>
    <loc>${absolute(p.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`.replace('http://www.w3.org/1999/sitemap/0.9', 'http://www.sitemaps.org/schemas/sitemap/0.9');

await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml        -> ${indexablePages.length} indexable URLs on ${siteUrl}`);
