import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES, TESTIMONIALS } from '../constants';
import EnquiryForm from '../components/EnquiryForm';
import { Star, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Best Wedding Decorators & Event Planners" 
        description="Akshathay Events - Premier event decorators in Coimbatore offering Wedding Decoration, Baby Showers, Catering, and Mini Hall Rental."
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
            alt="Wedding Decoration Coimbatore" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Turning Moments into <span className="text-gold-400">Memories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Premium Wedding Decor, Catering & Event Management in Coimbatore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gold-500 text-maroon-900 font-bold px-8 py-3 rounded-full hover:bg-gold-400 transition-colors">
              Book Consultation
            </Link>
            <Link to="/gallery" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-maroon-900 transition-colors">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900 mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-maroon-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <Link to={service.path} className="text-gold-600 font-semibold flex items-center hover:text-gold-500">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-maroon-900 text-maroon-900 px-8 py-3 rounded hover:bg-maroon-900 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-maroon-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Planning an Event?</h2>
            <p className="text-white text-lg">Let's discuss how we can make your special day extraordinary.</p>
          </div>
          <Link to="/contact" className="bg-gold-500 text-maroon-900 font-bold px-8 py-4 rounded shadow-lg hover:bg-gold-400 transition-transform hover:scale-105">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-maroon-900 mb-16">Happy Clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl relative">
                <div className="flex text-gold-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.comment}"</p>
                <div>
                  <p className="font-bold text-maroon-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Enquiry */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
           <EnquiryForm />
        </div>
      </section>
    </>
  );
};

export default Home;