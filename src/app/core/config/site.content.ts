import { environment } from '../../../environments/environment';
import {
  FaqItem,
  FlowStep,
  HowStep,
  LegalPage,
  NavLink,
  ServiceOffer,
  SiteStat,
  Standard,
  Testimonial,
  TrustPoint,
} from '../models/content.models';

export const site = {
  name: environment.brand,
  tagline: environment.tagline,
  url: environment.siteUrl,
  supportEmail: environment.supportEmail,
  appStoreUrl: environment.appStoreUrl,
  playStoreUrl: environment.playStoreUrl,
  heroTitle: 'House help in 10 minutes',
  heroLead:
    'Get quick home cleaning and reliable house help with Szoop. Book cleaning, bathroom care, dishes, or laundry in the app, in minutes.',
};

export const primaryNav: NavLink[] = [
  { label: 'The app', path: '/', fragment: 'flow' },
  { label: 'Services', path: '/', fragment: 'services' },
  { label: 'How it works', path: '/', fragment: 'steps' },
  { label: 'Cities', path: '/cities' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
];

export const services: ServiceOffer[] = [
  {
    name: 'House cleaning',
    summary: 'Sweep, mop, dust, and tidy',
    detail: 'A full reset of floors, surfaces, and the rooms you actually live in.',
    image: '/images/services/house.png',
    tint: '#fffdf8',
  },
  {
    name: 'Dusting & wiping',
    summary: 'Surfaces, shelves, and corners',
    detail: 'The quiet work that keeps a home from feeling dusty the next morning.',
    image: '/images/services/dusting.png',
    tint: '#fffdf8',
  },
  {
    name: 'Bathroom cleaning',
    summary: 'Tiles, WC, and mirrors',
    detail: 'Sanitised fixtures, dry floors, and a bathroom you are happy to walk into.',
    image: '/images/services/bathroom.png',
    tint: '#fffdf8',
  },
  {
    name: 'Laundry & ironing',
    summary: 'Wash, fold, and press',
    detail: 'Clothes handled with care, folded, and ready to put away.',
    image: '/images/services/laundry.png',
    tint: '#fffdf8',
  },
  {
    name: 'Cleaning dishes',
    summary: 'Sink to sparkle',
    detail: 'Utensils washed, dried, stacked, and the counter left clear.',
    image: '/images/services/dishes.png',
    tint: '#fffdf8',
  },
  {
    name: 'Kitchen & deep clean',
    summary: 'The extra pass',
    detail: 'Kitchen sparkle, fridge wipe, and the corners a weekly clean skips.',
    image: '/images/services/more.png',
    tint: '#fffdf8',
  },
];

export const flowSteps: FlowStep[] = [
  {
    index: '01',
    title: 'Sign in',
    body: 'A mobile number and a one-time code. No passwords.',
  },
  {
    index: '02',
    title: 'Pick a service',
    body: 'Cleaning, a cook, or beauty — the same home screen as the app.',
  },
  {
    index: '03',
    title: 'Set the visit',
    body: 'Choose the hours and the tasks. The price is on the screen before you continue.',
  },
  {
    index: '04',
    title: 'Confirm & pay',
    body: 'Address, time slot, and payment in one step.',
  },
  {
    index: '05',
    title: 'Track arrival',
    body: 'See the expert on the way and share the start code at the door.',
  },
  {
    index: '06',
    title: 'Rate the visit',
    body: 'Stars after the work. That rating decides who comes back.',
  },
];

export const steps: HowStep[] = [
  {
    index: '01',
    title: 'Choose your service',
    body: 'Open the app and pick instant help or a time that suits the house.',
    image: '/images/steps/slide-1.png',
  },
  {
    index: '02',
    title: 'Set the duration',
    body: 'One booking can cover several tasks. You see the amount before you confirm.',
    image: '/images/steps/slide-2.png',
  },
  {
    index: '03',
    title: 'Sit back',
    body: 'A trained expert arrives, follows your notes, and leaves the home comfortable and clean.',
    image: '/images/steps/slide-3.png',
  },
];

export const heroStats: SiteStat[] = [
  { value: '4.8+', label: 'Average visit rating' },
  { value: '10 min', label: 'Typical expert arrival' },
  { value: '100%', label: 'ID-checked experts' },
  { value: '8', label: 'Launch cities' },
];

export const pressLogos = [
  'YourStory',
  'Inc42',
  'Forbes India',
  'The Hindu',
  'Mint',
  'Economic Times',
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'She cleaned every corner. The bathroom actually felt new. I booked again the same week.',
    name: 'Riya G.',
    city: 'Mumbai',
    rating: 5,
    image: '/images/life/portrait1.jpg',
  },
  {
    quote:
      'First time using Szoop and the expert was quick, polite, and left the kitchen spotless.',
    name: 'Reshma K.',
    city: 'Bengaluru',
    rating: 5,
    image: '/images/life/portrait2.jpg',
  },
  {
    quote:
      'Laundry folded, dishes done, floors mopped — all in one booking. Worth every rupee.',
    name: 'Akash N.',
    city: 'Noida',
    rating: 5,
    image: '/images/life/portrait3.jpg',
  },
  {
    quote:
      'Punctual, professional, and obsessed with hygiene. Exactly what the tagline promises.',
    name: 'Monika S.',
    city: 'Gurugram',
    rating: 5,
    image: '/images/life/portrait4.jpg',
  },
];

export const cities = [
  'Bengaluru',
  'Mumbai',
  'Delhi',
  'Gurugram',
  'Noida',
  'Hyderabad',
  'Pune',
  'Chennai',
];

export const trustPoints: TrustPoint[] = [
  {
    title: 'Checked before they visit',
    body: 'Every expert shares identity documents. We review them before the first booking.',
  },
  {
    title: 'Trained for hygiene',
    body: 'Experts are trained on cleaning order, bathroom sanitation, and how to leave a kitchen.',
  },
  {
    title: 'Rated after every visit',
    body: 'You rate the visit in the app. That record decides who keeps getting booked.',
  },
];

export const standards: Standard[] = [
  {
    title: 'Comfort',
    body: 'An expert who is on time, polite, and willing to follow the way your home works.',
  },
  {
    title: 'Hygiene',
    body: 'Bathrooms sanitised, dishes actually clean, and surfaces wiped rather than rearranged.',
  },
  {
    title: 'Finish',
    body: 'The job ends when the booked tasks are done, not when the clock merely runs out.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is Szoop?',
    answer:
      'Szoop connects you with trained experts for everyday house help. Book in the app, set a duration, and an expert comes to your home.',
  },
  {
    question: 'What can I book?',
    answer:
      'House cleaning, dusting, bathroom cleaning, laundry and ironing, dishes, and kitchen or deep-clean add-ons. The expert works through the tasks you choose inside the booked time.',
  },
  {
    question: 'How do I book?',
    answer:
      'Choose a service, pick instant or scheduled, set the duration, and confirm. Instant visits depend on an expert being free nearby.',
  },
  {
    question: 'Are experts trusted?',
    answer:
      'Experts complete identity checks before they go live, and they are trained on hygiene and conduct. You can rate every visit.',
  },
  {
    question: 'Which cities are covered?',
    answer:
      'Szoop is opening neighbourhood by neighbourhood, starting with Bengaluru, Mumbai, Delhi NCR, Hyderabad, Pune, and Chennai. Coverage in the app is the source of truth for your pin code.',
  },
];

export const legalPages: Record<string, LegalPage> = {
  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: '23 October 2026',
    paragraphs: [
      'This Privacy Policy explains how Szoop (“we”, “us”) collects, uses, and shares information when you use the Szoop customer app, the Szoop Partner app, or this website.',
    ],
    sections: [
      {
        heading: 'Who we are',
        paragraphs: [
          'Szoop is a home-services platform. We connect customers with independent experts for cleaning and other household help, and we operate the Partner app that experts use to accept and complete visits.',
          'Questions about this policy can be sent to hello@szoop.in.',
        ],
      },
      {
        heading: 'Information we collect',
        paragraphs: [
          'Account details: mobile number, name, and a one-time password we send to verify the number.',
          'Booking details: service type, address, time slot, notes, and visit history.',
          'Location: used to check serviceability, match a nearby expert, show distance and directions, and fill an address you choose to save.',
          'Payments: payment references from our payment provider. We do not store full card or UPI credentials on our servers.',
          'Partner profile: skills, identity and KYC documents, bank account details for payouts, ratings, and job activity.',
          'Device and support data: app version, crash or error logs, and messages you send to support.',
        ],
      },
      {
        heading: 'How we use it',
        paragraphs: [
          'To create and secure your account, complete bookings, notify you about visits, process payments and partner payouts, improve the service, and meet legal or safety requirements.',
          'We do not sell your personal information.',
        ],
      },
      {
        heading: 'How we share it',
        paragraphs: [
          'With the assigned expert: the address, booking time, and service details needed to complete the visit. We do not show your phone number in the Partner app.',
          'With payment, maps, hosting, and messaging providers who process data on our instructions.',
          'When the law requires it, or to protect users from fraud or harm.',
        ],
      },
      {
        heading: 'How long we keep it',
        paragraphs: [
          'Account and booking records are kept while the account is active and for a limited period after, as needed for refunds, disputes, and tax or legal records. You can ask us to delete your account by writing to hello@szoop.in.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You can update your name and addresses in the app, turn off optional location access in your phone settings (some booking features will then not work), and request a copy or deletion of your account data.',
        ],
      },
      {
        heading: 'Children',
        paragraphs: [
          'Szoop is not directed at children under 18. We do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Updates',
        paragraphs: [
          'We may update this policy as the service changes. The date at the top of this page is the latest revision. Continued use of Szoop after an update means you accept the revised policy.',
        ],
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: 'Terms of use',
    updated: '26 September 2026',
    paragraphs: [
      'Szoop provides a way to book independent home-service experts. The visit is for the tasks and duration you confirm in the app.',
      'Prices shown before payment are the prices you pay, aside from any coupon you apply. Cancellations follow the policy shown at checkout.',
      'Experts are expected to work safely and respectfully in your home. You are expected to provide a safe place to work and clear access to the tasks you booked.',
      'These pages describe the service. The booking confirmation in the app is the record of a specific visit.',
    ],
  },
  refunds: {
    slug: 'refunds',
    title: 'Refunds and cancellations',
    updated: '26 September 2026',
    paragraphs: [
      'You can cancel a booking in the app before the expert starts. A captured payment for a cancelled visit is refunded to the original method.',
      'If an expert does not arrive, or the visit cannot start, contact support with the booking number and we will refund the payment.',
      'Once a visit is underway, refunds are reviewed against the tasks that were completed.',
    ],
  },
};
