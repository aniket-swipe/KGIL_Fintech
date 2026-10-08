import Reveal from '../components/Reveal';
import { policySections } from '../data/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <div id="policy" className="policy-page">
      <div className="wrap doc">
        <Reveal as="nav" className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">KGIL Fintech</a></li>
            <li aria-current="page">Privacy policy</li>
          </ol>
        </Reveal>
        <Reveal className="doc-head" delay={1}>
          <h1>Privacy policy</h1>
          <p className="lede" style={{ marginTop: 14 }}>
            How KGIL Fintech Solutions Private Limited, operating the SWIPELOAN platform, collects, uses, stores,
            transfers and discloses your information.
          </p>
          <p className="updated">Applies to www.swipeloan.in and the SWIPELOAN mobile application.</p>
        </Reveal>

        {policySections.map(({ title, clauses }) => (
          <Reveal as="section" key={title}>
            <h2>{title}</h2>
            {clauses.map(([num, body]) => (
              <div className="clause" key={num}>
                <b>{num}</b>
                <div>{body}</div>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
