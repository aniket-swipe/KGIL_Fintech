import Reveal from '../components/Reveal';
import { ArrowRight } from '../components/icons';
import { brands, company } from '../data/site';

const elsewhere = [
  { label: 'Homepage', href: '/', note: 'Who we are and what we build' },
  { label: 'Our businesses', href: '/#brands', note: 'Swipeloan and BestScore' },
  { label: 'How lending works', href: '/#how', note: 'Our partners sanction and disburse' },
  { label: 'Company details', href: '/#contact', note: 'Registered office, phone and email' },
  { label: 'Privacy policy', href: '/privacy-policy/', note: 'How we handle your information' },
];

export default function NotFoundPage() {
  return (
    <main id="site">
      <div className="wrap doc notfound">
        <Reveal className="doc-head">
          <span className="kicker">Error 404</span>
          <h1>This page could not be found</h1>
          <p className="lede" style={{ marginTop: 14 }}>
            The address you opened does not exist on the {company.name} website. It may have been moved,
            or the link that brought you here may be out of date.
          </p>
        </Reveal>

        <Reveal as="h2" delay={1}>Where to go instead</Reveal>
        <ul className="fourohfour">
          {elsewhere.map(({ label, href, note }, i) => (
            <Reveal as="li" key={href} delay={Math.min(i + 1, 4)}>
              <a className="link" href={href}>{label}</a>
              <span>{note}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="lede" delay={1}>
          Looking for a loan or your credit score? Those run on our brand websites,{' '}
          <a className="link" href={brands.swipeloan.url} target="_blank" rel="noopener">
            {brands.swipeloan.domain}
          </a>{' '}
          and{' '}
          <a className="link" href={brands.bestscore.url} target="_blank" rel="noopener">
            {brands.bestscore.domain}
          </a>.
        </Reveal>

        <Reveal delay={2}>
          <a className="btn solid" href="/">
            Back to the homepage <ArrowRight />
          </a>
        </Reveal>
      </div>
    </main>
  );
}
