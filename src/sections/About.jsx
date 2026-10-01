import Reveal from '../components/Reveal';

const wave = (y, amp) => {
  let d = `M0 ${y}`;
  for (let x = 0; x < 1200; x += 150) {
    d += ` Q${x + 75} ${y - amp} ${x + 150} ${y}`;
    amp = -amp;
  }
  return d;
};

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <Reveal>
          <div className="kicker">About us</div>
          <h2>The fintech arm of a diversified Indian group</h2>
          <p className="lede" style={{ marginTop: 20 }}>
            KGIL Fintech Solutions Private Limited is a subsidiary of KGIL Group, which has interests in
            infrastructure, fintech and securities. We run the group's consumer credit business through two brands,
            Swipeloan and BestScore.
          </p>
          <p className="lede">
            This website represents the legal entity. It is where vendors, lending partners and compliance teams can
            confirm who we are, where we are registered and how to reach us officially. For product help, each brand
            has its own website and support team.
          </p>
        </Reveal>
        <Reveal as="figure" className="artcard" delay={2}>
          <div className="art">
            <div className="art-glow" />
            <svg className="waves" viewBox="0 0 600 320" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="wv1" x1="0" x2="1">
                  <stop offset="0" stopColor="#5ED3AE" />
                  <stop offset=".5" stopColor="#4BA6DE" />
                  <stop offset="1" stopColor="#8069DA" />
                </linearGradient>
                <linearGradient id="wv2" x1="0" x2="1">
                  <stop offset="0" stopColor="#8069DA" />
                  <stop offset="1" stopColor="#C99BCB" />
                </linearGradient>
              </defs>
              <g className="wv w1"><path d={wave(170, 46)} stroke="url(#wv1)" /></g>
              <g className="wv w2"><path d={wave(195, 30)} stroke="url(#wv2)" /></g>
              <g className="wv w3"><path d={wave(150, 62)} stroke="#4BA6DE" /></g>
            </svg>
            <span className="tok t1"><i style={{ background: 'var(--g1)' }} />Simple</span>
            <span className="tok t2"><i style={{ background: 'var(--g2)' }} />Transparent</span>
            <span className="tok t3"><i style={{ background: 'var(--g3)' }} />Accessible</span>
          </div>
          <figcaption>
            <svg className="qm" viewBox="0 0 32 24" aria-hidden="true">
              <path
                d="M0 24V13C0 5.6 4 1.2 11 0l1.6 3.4C8.6 4.6 6.8 7.2 6.6 11H12v13zm19 0V13c0-7.4 4-11.8 11-13l1.6 3.4c-4 1.2-5.8 3.8-6 7.6H31v13z"
                fill="url(#wv1)"
              />
            </svg>
            <p>Credit should be something you understand — not something that happens to you.</p>
            <span>The idea behind everything we build</span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
