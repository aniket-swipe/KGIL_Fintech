import { useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import ProfileModal from '../components/ProfileModal';
import { ArrowRight } from '../components/icons';
import { leadership } from '../data/site';

export default function Leadership() {
  const [active, setActive] = useState(null);

  return (
    <section id="leadership">
      <div className="wrap">
        <SectionHead
          kicker="Leadership"
          title="Board and management"
          lede="The company is managed under the direction of its board and the leadership of KGIL Group."
        />
        <div className="people">
          {leadership.map((p, i) => (
            <Reveal
              as="button"
              type="button"
              className="person"
              delay={i + 1}
              key={p.name}
              aria-haspopup="dialog"
              onClick={() => setActive(p)}
            >
              <span className="person-photo">
                <img
                  src={p.photo}
                  width={p.photoW}
                  height={p.photoH}
                  alt={`${p.name}, ${p.role}, KGIL Fintech Solutions`}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="person-body">
                <span className="nm">{p.name}</span>
                <span className="dg">{p.role}</span>
                <span className="more">View profile <ArrowRight /></span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
      {active && <ProfileModal person={active} onClose={() => setActive(null)} />}
    </section>
  );
}
