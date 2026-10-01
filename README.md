# KGIL Fintech Solutions — corporate website

React + Vite site for KGIL Fintech Solutions Private Limited, **prerendered to static
HTML at build time** so that all content, headings and internal links exist in the
initial HTML and never depend on JavaScript.

Production domain: `https://kgilfintech.com`

## Run

```bash
npm install
npm run dev      # http://localhost:5173 (client-rendered, for development)
npm run build    # static site in dist/
npm run preview  # serve the built site locally
```

`npm run build` runs three steps:

1. `vite build` — client bundle.
2. `vite build --ssr src/entry-server.jsx` — server bundle, into `dist-ssr/`.
3. `node scripts/prerender.mjs` — renders every route to HTML, injects `<head>`
   metadata and JSON-LD, and writes `sitemap.xml`.

## Pages

| URL | File | Indexed |
|---|---|---|
| `/` | `dist/index.html` | yes |
| `/privacy-policy/` | `dist/privacy-policy/index.html` | yes |
| `/terms-and-conditions/` | `dist/terms-and-conditions/index.html` | yes |
| any unknown URL | `dist/404.html` | no (`noindex,follow`) |

Old `/#privacy-policy` links redirect to `/privacy-policy/` in the browser.

## Structure

```
src/
  App.jsx              route table; renders Home, Privacy policy or 404
  entry-server.jsx     render(url) used by the prerender step
  main.jsx             hydrates the prerendered markup
  data/
    site.js            company details, brands, nav, FAQs, leadership
    seo.js             siteUrl, per-page metadata, JSON-LD graph   <-- edit domain here
    privacyPolicy.jsx  full policy text
    termsConditions.jsx  full terms and conditions text
  pages/               HomePage, PrivacyPolicyPage, TermsConditionsPage, NotFoundPage
  sections/            one file per homepage section
  components/          Header, Footer, BackToTop, Reveal, icons, ...
  styles/global.css    design tokens and all styles
scripts/prerender.mjs  build-time HTML + sitemap generation
public/
  robots.txt           crawl rules for search and AI engines
  llms.txt             summary + link map for AI answer engines
  llms-full.txt        all key site content as one plain-text file
  og-image.png         1200x630 social preview
  .htaccess            Apache/cPanel: 404 status, preferred domain, caching
```

To change the domain, edit `siteUrl` in `src/data/seo.js` and the two URLs in
`public/robots.txt`, `public/llms.txt` and `public/.htaccess`.

## What the build produces for SEO / AEO / GEO

- Full HTML for every route — content, H1/H2/H3, internal links, FAQ answers and the
  entire privacy policy and terms and conditions are in the source, not injected by JS.
- One `<h1>` per page, ordered H2/H3 below it.
- Per-page `<title>`, meta description, canonical, robots, Open Graph and Twitter cards.
- JSON-LD: `Organization` (with CIN, GSTIN, address, contact points, parent group and
  both brands), `WebSite`, `FAQPage` on the homepage, `BreadcrumbList` on the policy and
  terms pages.
- `sitemap.xml` listing only canonical, indexable, 200 URLs.
- `robots.txt` allowing Google, Bing and the AI crawlers (GPTBot, OAI-SearchBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended and others), closing off
  non-public paths and query-string duplicates.
- `llms.txt` and `llms-full.txt` for answer engines.
- Images carry descriptive `alt`, intrinsic `width`/`height` (no layout shift) and
  `loading="lazy"` below the fold. The hero marks load eagerly.

## Hosting requirements

These cannot be set from the codebase and must be configured on the server.

**Apache / cPanel** — `public/.htaccess` ships with it all. Confirm `mod_rewrite` and
`mod_headers` are enabled.

**nginx**

```nginx
server {
  listen 443 ssl http2;
  server_name kgilfintech.com;
  root /var/www/kgilfintech/dist;

  error_page 404 /404.html;

  location / {
    try_files $uri $uri/ $uri/index.html =404;   # never rewrite to /index.html
  }

  location ~* \.(js|css|woff2|png|jpe?g|webp|avif|svg)$ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
  location ~* \.html$ { add_header Cache-Control "public, max-age=0, must-revalidate"; }
  location ~* \.(txt|xml)$ { add_header X-Robots-Tag "noindex"; }
}

server {                       # one preferred domain
  listen 443 ssl http2;
  server_name www.kgilfintech.com;
  return 301 https://kgilfintech.com$request_uri;
}
server { listen 80; server_name kgilfintech.com www.kgilfintech.com;
         return 301 https://kgilfintech.com$request_uri; }
```

**Netlify / Vercel / Cloudflare Pages** — serve `dist/` as a static site and do **not**
add a catch-all rewrite to `/index.html`. These platforms use `404.html` automatically
and will then return a real 404 status. Set the apex domain as primary and redirect
`www` to it.

Checklist for go-live:

- [ ] HTTPS enforced, HTTP 301s to HTTPS
- [ ] One preferred host (`kgilfintech.com`), `www` 301s to it
- [ ] Unknown URLs return **404**, not 200 and not a redirect to `/`
- [ ] `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` return 200
- [ ] Submit `https://kgilfintech.com/sitemap.xml` in Google Search Console and Bing
      Webmaster Tools
- [ ] 301 any live legacy URLs to their new equivalents (no chains, no loops)
