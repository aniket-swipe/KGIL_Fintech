import Reveal from '../components/Reveal';
import { ArrowRight, BoxCheck, Crosshair, Lock, Shield, Trash } from '../components/icons';

const points = [
  { icon: BoxCheck, title: 'Consent first', text: 'Access to device data such as SMS, files or contacts is requested only when a service needs it.' },
  { icon: Crosshair, title: 'Shared on need-to-know', text: 'Data goes only to the business partners who fulfil the service you asked for.' },
  { icon: Lock, title: 'Secured storage', text: 'Servers sit behind a firewall, with password-protected and strictly limited access.' },
  { icon: Trash, title: 'We never sell your data', text: 'Personal information is not sold or rented to advertisers or any third party.' },
];

const laws = ['Information Technology Act, 2000', 'SPDI Rules, 2011'];

export default function Trust() {
  return (
    <section id="trust" className="trust-sec">
      <div className="trust-glow" aria-hidden="true" />
      <div className="wrap trust">
        <Reveal className="trust-intro">
          <div className="kicker">Data and privacy</div>
          <h2>Your information, handled with care</h2>
          <p className="lede">
            We collect only what is needed to provide our services, with your consent, under the Information
            Technology Act, 2000 and the SPDI Rules, 2011.
          </p>
          <ul className="laws">
            {laws.map((l) => (
              <li key={l}><Shield />{l}</li>
            ))}
          </ul>
          <a className="btn" href="/privacy-policy/">Read the full privacy policy <ArrowRight /></a>
        </Reveal>
        <div className="tcards">
          {points.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="article" className="tcard" delay={i + 1} key={title}>
              <span className="tnum">0{i + 1}</span>
              <span className="tic"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
