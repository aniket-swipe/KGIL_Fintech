import { brands, company, faqs, tel } from './site';

/**
 * Single source of truth for everything an indexer, answer engine or crawler
 * reads. Used at build time by scripts/prerender.mjs to bake <head> tags,
 * JSON-LD and sitemap.xml into static HTML, so none of it depends on
 * JavaScript running in the browser.
 *
 * Change `siteUrl` here and canonicals, Open Graph URLs, the sitemap,
 * robots.txt and llms.txt all follow.
 */
export const siteUrl = 'https://kgilfintech.com';

export const absolute = (path) => new URL(path, siteUrl).href;

export const ogImage = {
  path: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'KGIL Fintech Solutions Private Limited — Swipeloan and BestScore',
};

/* ---------------------------------------------------------------- pages -- */

export const pages = {
  home: {
    path: '/',
    out: 'index.html',
    title: 'KGIL Fintech Solutions Pvt Ltd | Swipeloan & BestScore',
    description:
      'KGIL Fintech Solutions Private Limited is the fintech arm of KGIL Group, operating the Swipeloan credit marketplace and BestScore credit score platform.',
    indexable: true,
    priority: '1.0',
    changefreq: 'monthly',
  },
  privacy: {
    path: '/privacy-policy/',
    out: 'privacy-policy/index.html',
    title: 'Privacy Policy | KGIL Fintech Solutions Pvt Ltd',
    description:
      'How KGIL Fintech Solutions Private Limited, operating the SWIPELOAN platform, collects, uses, stores, transfers and discloses your personal information.',
    indexable: true,
    priority: '0.5',
    changefreq: 'yearly',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Privacy policy', path: '/privacy-policy/' },
    ],
  },
  terms: {
    path: '/terms-and-conditions/',
    out: 'terms-and-conditions/index.html',
    title: 'Terms and Conditions | KGIL Fintech Solutions Pvt Ltd',
    description:
      'Terms and Conditions for the SWIPELOAN platform operated by KGIL Fintech Solutions Private Limited, covering eligibility, loan applications, user obligations and grievance redressal.',
    indexable: true,
    priority: '0.5',
    changefreq: 'yearly',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Terms and Conditions', path: '/terms-and-conditions/' },
    ],
  },
  notFound: {
    path: '/404',
    out: '404.html',
    title: 'Page not found | KGIL Fintech Solutions Pvt Ltd',
    description:
      'The page you asked for could not be found. Browse KGIL Fintech company details, our businesses and contact information instead.',
    indexable: false,
    priority: null,
  },
};

/** Routes that belong in sitemap.xml — canonical, indexable, 200 only. */
export const indexablePages = Object.values(pages).filter((p) => p.indexable);

/* ----------------------------------------------------------- structured -- */

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Office No. 202, Tower B, Terminal 1, MIDC Phase-1, Hinjewadi Phase 1 Road, Infotech Park',
  addressLocality: 'Hinjawadi, Pune',
  addressRegion: 'Maharashtra',
  postalCode: '411057',
  addressCountry: 'IN',
};

const organization = {
  '@type': 'Organization',
  '@id': absolute('/#organization'),
  name: 'KGIL Fintech Solutions Private Limited',
  legalName: company.name,
  alternateName: 'KGIL Fintech',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: absolute('/og-image.png'),
    width: ogImage.width,
    height: ogImage.height,
  },
  description:
    'KGIL Fintech Solutions Private Limited is the fintech subsidiary of KGIL Group. It operates Swipeloan, a credit marketplace, and BestScore, a credit score monitoring platform. Loans are sanctioned and disbursed by partner banks and NBFCs.',
  foundingLocation: { '@type': 'Place', address: postalAddress },
  address: postalAddress,
  telephone: company.phones[0],
  email: company.email,
  identifier: [
    { '@type': 'PropertyValue', name: 'CIN', value: 'U70200PN2024PTC231463' },
    { '@type': 'PropertyValue', name: 'GSTIN', value: '27AALCK0617R1ZZ' },
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'KGIL Group',
    url: 'https://kgilgroup.com/',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: company.phones[0],
      email: company.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Grievance Officer',
      name: company.grievance.name,
      telephone: company.grievance.phone,
      email: company.grievance.email,
      areaServed: 'IN',
    },
  ],
  sameAs: [brands.swipeloan.url, brands.bestscore.url, 'https://kgilgroup.com/'],
  subOrganization: Object.values(brands).map((b) => ({
    '@type': 'Organization',
    name: b.name,
    url: b.url,
  })),
};

const website = {
  '@type': 'WebSite',
  '@id': absolute('/#website'),
  url: siteUrl,
  name: 'KGIL Fintech Solutions Private Limited',
  inLanguage: 'en-IN',
  publisher: { '@id': absolute('/#organization') },
};

const faqPage = {
  '@type': 'FAQPage',
  '@id': absolute('/#faq'),
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbList = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: absolute(crumb.path),
  })),
});

/** The JSON-LD graph for one page. Only schema the page actually shows. */
export function structuredData(page) {
  const graph = [organization, website];
  if (page.path === pages.home.path) graph.push(faqPage);
  if (page.breadcrumb) graph.push(breadcrumbList(page.breadcrumb));
  return { '@context': 'https://schema.org', '@graph': graph };
}

export { tel };
