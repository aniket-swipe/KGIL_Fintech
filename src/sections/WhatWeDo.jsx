import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { Gauge, Smartphone, Sliders } from '../components/icons';
import { brands } from '../data/site';

const features = [
  {
    icon: Sliders,
    title: 'Credit marketplace',
    text: 'Compare loan offers from partner banks and NBFCs side by side, then apply for the one that fits — without visiting a branch.',
    by: 'Through Swipeloan',
    marks: [brands.swipeloan],
  },
  {
    icon: Gauge,
    title: 'Credit score monitoring',
    text: 'A personalised view of your credit score, how it moves over time, and plain-language explanations of what is driving it.',
    by: 'Through BestScore',
    marks: [brands.bestscore],
  },
  {
    icon: Smartphone,
    title: 'Android app and web',
    text: 'Both platforms run as an Android app and in the browser, so people can check their credit and apply from the device they already use.',
    by: 'Across both brands',
    marks: [brands.swipeloan, brands.bestscore],
  },
];

export default function WhatWeDo() {
  return (
    <section id="what">
      <div className="wrap">
        <SectionHead
          kicker="What we do"
          title="Digital tools for every stage of credit"
          lede="From understanding where you stand, to finding the right loan, to getting help when you need it — each product handles one job well."
        />
        <div className="cards3">
          {features.map(({ icon: Icon, title, text, by, marks }, i) => (
            <Reveal as="article" className="feat" delay={i + 1} key={title}>
              <span className="ic"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="by">
                <span className="by-marks">
                  {marks.map((b) => (
                    <span className="sq" key={b.name}>
                      <img
                        src={b.mark}
                        className={b.markClass}
                        width={b.markW}
                        height={b.markH}
                        alt={`${b.name} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ))}
                </span>
                {by}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
