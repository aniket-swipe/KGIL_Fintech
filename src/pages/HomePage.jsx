import Hero from '../sections/Hero';
import PartnerStrip from '../sections/PartnerStrip';
import About from '../sections/About';
import WhatWeDo from '../sections/WhatWeDo';
import HowItWorks from '../sections/HowItWorks';
import Brands from '../sections/Brands';
import Trust from '../sections/Trust';
import Vision from '../sections/Vision';
import Leadership from '../sections/Leadership';
import Faq from '../sections/Faq';
import Contact from '../sections/Contact';
import CtaBand from '../sections/CtaBand';

export default function HomePage() {
  return (
    <main id="site">
      <a id="top" />
      <Hero />
      <PartnerStrip />
      <About />
      <WhatWeDo />
      <HowItWorks />
      <Brands />
      <Trust />
      <Vision />
      <Leadership />
      <Faq />
      <Contact />
      <CtaBand />
    </main>
  );
}
