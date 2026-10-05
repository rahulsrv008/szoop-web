export interface NavLink {
  label: string;
  path: string;
  fragment?: string;
}

export interface ServiceOffer {
  name: string;
  summary: string;
  detail: string;
  image: string;
  tint: string;
}

export interface FlowStep {
  index: string;
  title: string;
  body: string;
}

export interface HowStep {
  index: string;
  title: string;
  body: string;
  image: string;
}

export interface SiteStat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  rating: number;
  image: string;
}

export interface TrustPoint {
  title: string;
  body: string;
}

export interface Standard {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalPage {
  slug: string;
  title: string;
  updated: string;
  paragraphs: string[];
}
