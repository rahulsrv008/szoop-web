export interface NavLink {
  label: string;
  path: string;
  fragment?: string;
}

export interface ServiceOffer {
  name: string;
  summary: string;
  detail: string;
}

export interface HowStep {
  index: string;
  title: string;
  body: string;
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
