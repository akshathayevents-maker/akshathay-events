export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  event: string;
  comment: string;
  rating: number;
}
