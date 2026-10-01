import Reveal from './Reveal';

export default function SectionHead({ kicker, title, lede }) {
  return (
    <Reveal className="head">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  );
}
