import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = `${title} | Akshathay Events`;
    
    // Helper to update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:type', 'website');

    // JSON-LD Schema for Local Business
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": COMPANY_INFO.name,
      "image": "https://images.unsplash.com/photo-1519225421980-715cb0202128", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "144 Nanjundapuram Road",
        "addressLocality": "Coimbatore",
        "addressRegion": "TN",
        "postalCode": "641036",
        "addressCountry": "IN"
      },
      "telephone": COMPANY_INFO.phone1,
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      ]
    };

    let script = document.querySelector('#schema-json-ld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'schema-json-ld';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords]);

  return null;
};

export default SEO;