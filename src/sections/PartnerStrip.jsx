import { partnerCategories } from '../data/site';

export default function PartnerStrip() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...partnerCategories, ...partnerCategories];
  return (
    <div className="strip" aria-label="Partner categories">
      <div className="strip-in">
        <div className="strip-lbl">We work with</div>
        <div className="marq">
          <div className="track">
            {items.map((label, i) => (
              <span key={i} aria-hidden={i >= partnerCategories.length || undefined}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
