import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <SEO 
        title="Our Services - Wedding Decor, Catering & More" 
        description="Comprehensive list of services: Wedding Decoration, Baby Shower, Corporate Events, Haldi/Mehendi, and Catering in Coimbatore."
      />
      <div className="bg-white pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-maroon-900 mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer a complete range of event management solutions tailored to your needs.
            </p>
          </div>

          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 border-4 border-gold-500/20"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-maroon-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-gray-700">
                        <span className="text-gold-500 mr-2">✓</span> Premium themes and props
                    </li>
                    <li className="flex items-center text-gray-700">
                        <span className="text-gold-500 mr-2">✓</span> Customized to your budget
                    </li>
                    <li className="flex items-center text-gray-700">
                        <span className="text-gold-500 mr-2">✓</span> End-to-end execution
                    </li>
                  </ul>
                  <a 
                    href={`https://wa.me/919894594074?text=Hi, I want to know more about ${service.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-maroon-900 text-white px-6 py-3 rounded hover:bg-maroon-800 transition-colors"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
