import Reveal from '../components/Reveal';

const values = ['Transparency', 'Customer trust', 'Regulatory compliance', 'Responsible use of data'];

export default function Vision() {
  return (
    <section id="vision">
      <div className="wrap">
        <Reveal className="vision">
          <div className="kicker">Our vision</div>
          <p className="vq">To make credit simple, transparent and accessible for every Indian consumer.</p>
          <div className="vrow">
            <div>
              <h3>Mission</h3>
              <p>
                To provide clear, reliable digital tools that help people check, monitor and improve their credit
                health, and find credit options that suit them.
              </p>
            </div>
            <div>
              <h3>Values</h3>
              <ul className="values">
                {values.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
