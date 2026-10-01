import KgilLogo from './Logomark';
import { brands, company } from '../data/site';

const groupLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const companyLinks = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Privacy policy', href: '/privacy-policy/' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions/' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <KgilLogo title="KGIL Group" />
            </div>
            <p>KGIL Fintech Solutions Private Limited is a subsidiary of KGIL Group, operating the Swipeloan and BestScore brands.</p>
          </div>
          <div>
            <h4>Group</h4>
            <ul className="fl">
              {groupLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Our businesses</h4>
            <ul className="fl">
              {Object.values(brands).map((b) => (
                <li key={b.name}>
                  <a href={b.url} target="_blank" rel="noopener">{b.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="fl">
              {companyLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-note">
          <span>&copy; {year} {company.name}. All rights reserved.</span>
          <span>CIN: U70200PN2024PTC231463 | GST: 27AALCK0617R1ZZ | Registered in Pune, India.</span>
        </div>
      </div>
    </footer>
  );
}
