import { useEffect, useRef, useState } from 'react';
import KgilLogo from './Logomark';
import { brands, company, navLinks } from '../data/site';
import { useScrolledPast } from '../hooks/useScrollY';

const desktopQuery = '(min-width: 941px)';

function BusinessesDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef();

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const isDesktop = () => window.matchMedia(desktopQuery).matches;
  const onEnter = () => {
    if (!isDesktop()) return;
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const onLeave = () => {
    if (!isDesktop()) return;
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  return (
    <div className="drop-wrap" ref={wrapRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className="nl"
        aria-expanded={open}
        aria-controls="bizMenu"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        Our Businesses <span className="chev" aria-hidden="true" />
      </button>
      <div className={`drop${open ? ' open' : ''}`} id="bizMenu">
        <a className="dropit" href={brands.swipeloan.url} target="_blank" rel="noopener">
          <span className="sq"><img src={brands.swipeloan.mark} width={brands.swipeloan.markW} height={brands.swipeloan.markH} alt="Swipeloan logo" decoding="async" loading="lazy" /></span>
          <span>
            <b>Swipeloan</b>
            <small>Compare and apply for loan offers from partner banks and NBFCs.</small>
          </span>
        </a>
        <a className="dropit" href={brands.bestscore.url} target="_blank" rel="noopener">
          <span className="sq"><img src={brands.bestscore.mark} className={brands.bestscore.markClass} width={brands.bestscore.markW} height={brands.bestscore.markH} alt="BestScore logo" decoding="async" loading="lazy" /></span>
          <span>
            <b>BestScore</b>
            <small>Track your credit score and understand what moves it.</small>
          </span>
        </a>
        <div className="drop-foot">Both brands are operated by KGIL Fintech Solutions Private Limited.</div>
      </div>
    </div>
  );
}

export default function Header() {
  const stuck = useScrolledPast(12);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const onNavClick = (e) => {
    const a = e.target.closest('a');
    if (a && !a.closest('.drop')) setMenuOpen(false);
  };

  return (
    <>
      <div className="rule-top" aria-hidden="true" />
      <div className={`scrim${menuOpen ? ' on' : ''}`} onClick={() => setMenuOpen(false)} />
      <header className={stuck ? 'stuck' : undefined}>
        <div className="wrap bar">
          <a className="brand" href="/" aria-label="KGIL Fintech Solutions home">
            <KgilLogo />
          </a>
          <button
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="nav"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i />
            <i />
            <i />
          </button>
          <nav id="nav" className={menuOpen ? 'open' : undefined} onClick={onNavClick}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <BusinessesDropdown key={link.label} />
              ) : (
                <a key={link.label} className="nl" href={link.href}>
                  {link.label}
                </a>
              )
            )}
            <a className="nav-cta" href={`mailto:${company.email}?subject=${encodeURIComponent('Partnership enquiry — KGIL Fintech')}`}>
              Partner with us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
