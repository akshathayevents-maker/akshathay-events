import { ServiceItem, GalleryImage, FAQItem, Testimonial } from './types';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Akshathay Events",
  phone1: "98945 94074",
  phone2: "97892 24440",
  address: "144 Nanjundapuram Road, Apartment, near R.R KALIRU, Coimbatore, Tamil Nadu 641036",
  email: "contact@akshathayevents.com", // Placeholder
  whatsapp: "919894594074",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.529846387654!2d76.961632!3d10.999661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971255%3A0x7d6d7d7d7d7d7d7d!2sAkshathay%20Mini%20Hall!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding',
    title: 'Wedding Decoration',
    description: 'Transform your special day into a royal celebration with our premium wedding themes, floral arrangements, and stage setups.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    path: '/services#wedding'
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower',
    description: 'Traditional and modern themes for Seemantham and Baby Showers. Cute props, cradle decoration, and more.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop',
    path: '/services#baby-shower'
  },
  {
    id: 'catering',
    title: 'Catering Services',
    description: 'Authentic South Indian vegetarian and non-vegetarian delicacies prepared with love and high hygiene standards.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
    path: '/services#catering'
  },
  {
    id: 'mini-hall',
    title: 'Akshathay Mini Hall',
    description: 'A perfect air-conditioned venue for intimate gatherings, birthday parties, and corporate meetings on Nanjundapuram Road.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
    path: '/mini-hall'
  },
  {
    id: 'haldi-mehendi',
    title: 'Haldi & Mehendi',
    description: 'Vibrant yellow and orange themes with marigold flowers to make your pre-wedding rituals picture-perfect.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop',
    path: '/services#haldi'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional setups for product launches, annual meetings, and office parties.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    path: '/services#corporate'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', category: 'Wedding', alt: 'Wedding Stage Decoration Coimbatore' },
  { id: 2, url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', category: 'Wedding', alt: 'Mandapam Flower Decoration' },
  { id: 3, url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1600&auto=format&fit=crop", category: "Corporate", alt: "Corporate Event Setup" },
  { id: 4, url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800', category: 'Catering', alt: 'Buffet Setup Coimbatore' },
  { id: 5, url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800', category: 'Corporate', alt: 'Conference Hall Decoration' },
  { id: 6, url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800', category: 'Baby Shower', alt: 'Baby Shower Cradle Decoration' },
  { id: 7, url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', category: 'Haldi', alt: 'Haldi Function Decor' },
  { id: 8, url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1600&auto=format&fit=crop", category: "Wedding", alt: "Wedding Reception Decor" },
  { id: 9, url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800', category: 'Wedding', alt: 'Grand Hall Entrance' },
  { id: 10, url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop', category: 'Baby Shower', alt: 'Traditional Function Decor' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Lakshmi",
    event: "Wedding",
    comment: "Akshathay Events made my wedding look like a dream! The floral work was fresh and the color combination was exactly what I asked for.",
    rating: 5
  },
  {
    name: "Senthil Kumar",
    event: "Housewarming & Catering",
    comment: "The food was excellent. All our guests praised the Food and the service. Highly recommend their catering team.",
    rating: 5
  },
  {
    name: "Arun & Meera",
    event: "Baby Shower",
    comment: "Very professional team. They decorated our home for the Seemantham beautifully within our budget. Thank you!",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide decoration for outdoor events?",
    answer: "Yes, we specialize in outdoor event decorations including lawn weddings, garden parties, and open-air corporate events."
  },
  {
    question: "What is the capacity of Akshathay Mini Hall?",
    answer: "Our Mini Hall comfortably accommodates 100-150 guests, making it perfect for intimate functions like birthdays, engagement ceremonies, and meetings."
  },
  {
    question: "Do you offer customizable catering menus?",
    answer: "Absolutely. We offer pure vegetarian and non-vegetarian menus that can be customized based on your preferences and guest count."
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 1-2 months in advance for weddings and major auspicious dates to ensure availability."
  }
];