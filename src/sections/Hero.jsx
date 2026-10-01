import KgilLogo from '../components/Logomark';
import { ArrowRight } from '../components/icons';
import { brands } from '../data/site';

function HeroVisual() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="hv-halo" />
      <div className="orb o2" />
      <div className="orb o1" />
      <div className="core">
        <KgilLogo mark />
        <span>KGIL Fintech</span>
      </div>
      {/* Brand cards orbit the core anticlockwise; each card counter-rotates to stay upright. */}
      <div className="orbit">
        <span className="spoke spoke-top" />
        <span className="spoke spoke-bottom" />
        <div className="sat sat-top">
          <div className="bn sl">
            <span className="sq"><img src={brands.swipeloan.mark} width={brands.swipeloan.markW} height={brands.swipeloan.markH} alt="Swipeloan logo" decoding="async" /></span>
            <span><b>Swipeloan</b><small>Compare loan offers</small></span>
          </div>
        </div>
        <div className="sat sat-bottom">
          <div className="bn bs">
            <span className="sq"><img src={brands.bestscore.mark} className={brands.bestscore.markClass} width={brands.bestscore.markW} height={brands.bestscore.markH} alt="BestScore logo" decoding="async" /></span>
            <span><b>BestScore</b><small>Track your credit score</small></span>
          </div>
        </div>
      </div>
      <span className="illus">Product illustration</span>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="hero">
      <div className="aura" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="pill fade"><span className="pip" />The fintech company of KGIL Group</span>
            <h1>
              <span className="line"><span>Credit that</span></span>
              <span className="line"><span>people can</span></span>
              <span className="line"><span>actually read.</span></span>
            </h1>
            <p className="lede fade d1">
              We build digital products that help Indian consumers check their credit, watch it change, and find
              borrowing options that fit — through Swipeloan and BestScore.
            </p>
            <div className="btns fade d2">
              <a className="btn solid" href="/#brands">Explore our businesses <ArrowRight /></a>
              <a className="btn" href="/#contact">Company details</a>
            </div>
            <div className="hero-meta fade d3">
              <div><b>Pune, Maharashtra</b>Registered office</div>
              <div><b>2 consumer brands</b>Swipeloan, BestScore</div>
              <div><b>Partner-led lending</b>Banks and NBFCs</div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </div>
  );
}
