import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { Info } from '../components/icons';
import { steps } from '../data/site';

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <SectionHead
          kicker="How lending works on our platform"
          title="We connect you. Our partners lend."
          lede="Swipeloan is a marketplace. Loans are sanctioned and disbursed by our registered lending partners, under their own terms."
        />
        <Reveal className="steps">
          <span className="fill" aria-hidden="true" />
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="note">
          <Info />
          <span>
            Loan terms, interest rates and repayment conditions are set by the lending partner and shown to you
            before you accept. Always read the lender's key fact statement before signing.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
