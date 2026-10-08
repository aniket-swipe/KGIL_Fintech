import Reveal from '../components/Reveal';
import { termsPreamble, termsSections } from '../data/termsConditions';

export default function TermsConditionsPage() {
  return (
    <div id="terms" className="policy-page">
      <div className="wrap doc">
        <Reveal as="nav" className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">KGIL Fintech</a></li>
            <li aria-current="page">Terms and Conditions</li>
          </ol>
        </Reveal>
        <Reveal className="doc-head" delay={1}>
          <h1>Terms and Conditions</h1>
          <p className="lede" style={{ marginTop: 14 }}>
            The terms on which KGIL Fintech Solutions Private Limited, operating the SWIPELOAN platform,
            makes the platform and its services available to you.
          </p>
          <p className="updated">Applies to www.swipeloan.in and the SWIPELOAN mobile application.</p>
        </Reveal>

        <Reveal className="doc-intro" delay={2}>{termsPreamble}</Reveal>

        {termsSections.map(({ title, clauses }) => (
          <Reveal as="section" key={title}>
            <h2>{title}</h2>
            {clauses.map(([num, body], i) => (
              // Sections the source left as a single unnumbered block carry no
              // clause number, so the marker column stays empty rather than
              // repeating the section number.
              <div className="clause" key={num || i}>
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
