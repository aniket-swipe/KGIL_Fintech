import { useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { faqs } from '../data/site';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq">
      <div className="wrap">
        <SectionHead
          kicker="Questions"
          title="Frequently asked"
        />
        <Reveal className="faq">
          {faqs.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <div className={`q${open ? ' open' : ''}`} key={q}>
                <button
                  aria-expanded={open}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {q}
                  <span className="plus" aria-hidden="true" />
                </button>
                <div className="a" id={`faq-a-${i}`}>
                  <div><p>{a}</p></div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
