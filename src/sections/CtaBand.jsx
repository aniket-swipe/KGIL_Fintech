import Reveal from '../components/Reveal';
import { brands } from '../data/site';

export default function CtaBand() {
  return (
    <section className="cta-section">
      <div className="wrap">
        <Reveal className="band">
          <div>
            <h2>Looking for a loan or your credit score?</h2>
            <p>Head to the brand built for it. This site is for company information only.</p>
          </div>
          <div className="btns" style={{ margin: 0 }}>
            <a className="btn solid" href={brands.swipeloan.url} target="_blank" rel="noopener">Go to Swipeloan</a>
            <a className="btn" href={brands.bestscore.url} target="_blank" rel="noopener">Go to BestScore</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
