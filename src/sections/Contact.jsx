import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ArrowUpRight, Phone, Pin, Shield } from '../components/icons';
import { company, tel } from '../data/site';

export default function Contact() {
  const { grievance } = company;

  return (
    <section id="contact">
      <div className="wrap">
        <SectionHead
          kicker="Contact us"
          title="Registered details"
          lede="Use these details for agreements, invoices and official communication with the company."
        />
        <div className="contact">
          <Reveal className="ccard" delay={1}>
            <span className="ic"><Pin /></span>
            <h3>Registered office</h3>
            <p>{company.name}</p>
            <p>{company.address}</p>
          </Reveal>
          <Reveal className="ccard" delay={2}>
            <span className="ic"><Phone /></span>
            <h3>Phone and email</h3>
            <ul>
              {company.phones.map((p) => (
                <li key={p}><a href={tel(p)}>{p}</a></li>
              ))}
              <li style={{ marginTop: 6 }}><a href={`mailto:${company.email}`}>{company.email}</a></li>
            </ul>
          </Reveal>
          <Reveal className="ccard" delay={3}>
            <span className="ic"><Shield /></span>
            <h3>Grievance officer</h3>
            <p>{grievance.name}</p>
            <p><a href={`mailto:${grievance.email}`}>{grievance.email}</a></p>
            <p><a href={tel(grievance.phone)}>{grievance.phone}</a></p>
            <p className="muted" style={{ fontSize: '.88rem' }}>
              For complaints about privacy or the use of personal information.
            </p>
          </Reveal>
        </div>
        <Reveal className="map">
          <div>
            <b>Visiting us</b>
            <span>{company.shortAddress}</span>
          </div>
          <a className="btn" href={company.mapsUrl} target="_blank" rel="noopener">
            Open in Google Maps <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
