import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us - Event Decorators" 
        description="Learn about Akshathay Events, Coimbatore's leading event decoration and catering service provider."
      />
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-maroon-900 mb-4">About Akshathay Events</h1>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
             <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop" 
              alt="Event Decoration" 
              className="w-full h-96 object-cover"
            />


             <div className="p-8 md:p-12">
               <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Based in the heart of Coimbatore, Akshathay Events has been transforming ordinary spaces into extraordinary experiences. We started with a passion for creativity and a commitment to quality. Today, we are proud to be one of the city's most trusted names for wedding decorations, corporate events, and catering services.
               </p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Our team comprises skilled designers, florists, and chefs who work in harmony to deliver perfection. Whether it's a traditional Tamil wedding or a modern corporate gala, we bring the same level of dedication and detail to every project.
               </p>
               
               <h3 className="text-xl font-bold text-maroon-900 mt-8 mb-4">Why Choose Us?</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   "Customized Themes", 
                   "Budget-Friendly Packages", 
                   "Premium Quality Flowers", 
                   "Hygienic Catering", 
                   "On-Time Execution", 
                   "Dedicated Event Manager"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center text-gray-700">
                     <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;