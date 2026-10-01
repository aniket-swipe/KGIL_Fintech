import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ArrowRight } from '../components/icons';
import { brands } from '../data/site';

const cards = [
  {
    brand: brands.swipeloan,
    cls: 'sl',
    text: 'A credit marketplace that helps people compare and access loan offers from partner lenders.',
    ticks: ['Offers from registered banks and NBFCs in one place', 'Fully digital application and KYC', 'Android app and web'],
  },
  {
    brand: brands.bestscore,
    cls: 'bs',
    text: 'A personalised credit score monitoring platform that shows where you stand and why.',
    ticks: ['Score tracking over time', 'Insights on the factors behind your score', 'Android app and web'],
  },
];

export default function Brands() {
  return (
    <section id="brands">
      <div className="wrap">
        <SectionHead
          kicker="Our businesses"
          title="Two brands, one company"
          lede="Product details, eligibility and customer support are handled on each brand's own website."
        />
        <div className="brands">
          {cards.map(({ brand, cls, text, ticks }, i) => (
            <Reveal as="article" className={`bcard ${cls}`} delay={i + 1} key={brand.name}>
              <div className="bhead">
                <span className="sq"><img
                    src={brand.mark}
                    className={brand.markClass}
                    width={brand.markW}
                    height={brand.markH}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    decoding="async"
                  /></span>
                <div>
                  <h3>{brand.name}</h3>
                  <small>{brand.domain}</small>
                </div>
              </div>
              <p>{text}</p>
              <ul className="ticks">
                {ticks.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <a className="visit" href={brand.url} target="_blank" rel="noopener">
                Visit {brand.domain} <ArrowRight />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
