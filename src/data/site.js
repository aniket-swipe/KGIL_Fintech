import swipeloanMark from '../assets/brands/swipeloan-mark.png';
import bestscoreMark from '../assets/brands/bestscore-mark.png';
import apoorvPhoto from '../assets/leadership/apoorv-gunjal.jpg';
import utsavPhoto from '../assets/leadership/utsav-gupta.jpg';
import harshitaPhoto from '../assets/leadership/harshita-gupta.jpg';

export const company = {
  name: 'KGIL Fintech Solutions Private Limited',
  address:
    'Office No. 203, Tower B, Terminal 1, MIDC Phase‑1, Hinjewadi Phase 1 Road, Infotech Park, Hinjawadi, Pune, Maharashtra 411057, India',
  shortAddress: '203, Tower B, Terminal 1, Infotech Park, Hinjawadi, Pune 411057',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Tower+B+Terminal+1+MIDC+Phase+1+Hinjewadi+Infotech+Park+Hinjawadi+Pune+411057',
  email: 'info@swipeloan.in',
  phones: ['+91 90280 65619', '+91 90280 65620', '+91 90280 73794'],
  grievance: {
    name: 'Kunika Modi',
    email: 'grievance@swipeloan.in',
    phone: '+91 90280 65621',
  },
};

export const tel = (phone) => `tel:${phone.replace(/\s/g, '')}`;

export const brands = {
  swipeloan: { name: 'Swipeloan', url: 'https://swipeloan.in', domain: 'swipeloan.in', mark: swipeloanMark, markW: 160, markH: 154 },
  bestscore: {
    name: 'BestScore',
    url: 'https://bestscore.in',
    domain: 'bestscore.in',
    mark: bestscoreMark,
    markClass: 'mark-lift',
    markW: 118,
    markH: 160,
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Our Businesses', dropdown: true },
  { label: 'Contact', href: '/#contact' },
];

export const partnerCategories = [
  'Registered banks',
  'NBFCs',
  'Credit assessment partners',
  'KYC verification partners',
  'Payment gateways',
  'Customer support vendors',
  'Technology and hosting partners',
];

export const steps = [
  { title: 'Sign up', text: 'Create an account with your phone number and basic details.' },
  { title: 'Verify identity', text: 'Complete KYC with Aadhaar and PAN through our verification partner.' },
  { title: 'Compare offers', text: 'See offers you are eligible for from partner banks and NBFCs.' },
  { title: 'Partner disburses', text: 'The lender you choose completes the sanction and disburses the loan.' },
];

export const leadership = [
  {
    initials: 'AG',
    name: 'Apoorv Gunjal',
    role: 'Founder & CEO',
    photo: apoorvPhoto,
    photoW: 800,
    photoH: 737,
    bio: 'Founder of KGIL Group, a dynamic entrepreneur and the driving force behind SwipeLoan. With a background in finance, he has held key roles in organizations like Aditya Birla Capital, Hero Fincorp, and Motilal Oswal Finance. His expertise includes digital lending, investment management, and financial inclusion.',
  },
  {
    initials: 'UG',
    name: 'Utsav Gupta',
    role: 'Co-Founder & CFO',
    photo: utsavPhoto,
    photoW: 763,
    photoH: 703,
    bio: 'A dedicated professional with extensive expertise in financial operations, client servicing, and strategic management. With a solid foundation in the Hospitality Industry, he drives business growth and operational efficiency.',
  },
  {
    initials: 'HG',
    name: 'Harshita Gupta',
    role: 'Co-Founder & CMO',
    photo: harshitaPhoto,
    photoW: 763,
    photoH: 703,
    bio: 'A results-driven professional with a proven track record in business development and fundraising management. She excels in developing impactful strategies and building strong partnerships to drive strategic growth.',
  },
];
export const faqs = [
  {
    q: 'Does KGIL Fintech lend money directly?',
    a: 'Loans shown on Swipeloan are sanctioned and disbursed by our lending partners — registered banks and NBFCs. We facilitate the comparison and application; the lender sets and applies its own terms.',
  },
  {
    q: 'How are Swipeloan and BestScore related to this company?',
    a: 'Both are brands owned and operated by KGIL Fintech Solutions Private Limited, the fintech subsidiary of KGIL Group.',
  },
  {
    q: 'Where do I get help with my app account or loan?',
    a: 'Use the support options on swipeloan.in or bestscore.in, or inside the app. For questions about a loan itself, you can also contact the lending partner named in your loan documents.',
  },
  {
    q: 'How do I raise a complaint about my personal data?',
    a: 'Write to our Grievance Officer, Kunika Modi, at grievance@swipeloan.in or call +91 90280 65621. Include your registered phone number and details of the issue so it can be resolved within the timelines set under the IT Act, 2000.',
  },
  {
    q: 'How can my company become a partner or vendor?',
    a: 'Email info@swipeloan.in with your company details and the service you offer. Our team will respond with next steps and any documents needed for onboarding.',
  },
  {
    q: 'How do I stop promotional messages?',
    a: 'Email info@swipeloan.in asking to opt out of promotional and marketing communication. Service messages about your account will still be sent.',
  },
];
