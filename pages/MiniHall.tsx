import React from 'react';
import SEO from '../components/SEO';
import { MapPin, Users, Wifi, Wind } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const MiniHall: React.FC = () => {
  return (
    <>
      <SEO 
        title="Akshathay Mini Hall - Banquet Hall in Coimbatore" 
        description="Book Akshathay Mini Hall on Nanjundapuram Road. Perfect AC hall for birthday parties, engagement functions, and meetings. Capacity 100-150."
      />
      
      <div className="bg-gray-50 min-h-screen">
        {/* Banner */}
        <div className="h-64 md:h-80 bg-maroon-900 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <h1 className="relative z-10 text-4xl md:text-5xl font-serif font-bold text-white text-center">Akshathay Mini Hall</h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 -mt-20 relative z-20">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Details */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Perfect Venue for Intimate Gatherings</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Located conveniently on Nanjundapuram Road, Akshathay Mini Hall offers a blend of elegance and functionality. Whether you are planning a birthday party, an ear-piercing ceremony, or a corporate meeting, our hall provides the perfect ambience.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-gray-50 rounded text-center">
                            <Users className="w-8 h-8 mx-auto text-gold-500 mb-2" />
                            <span className="font-bold block text-gray-800">100-150 Pax</span>
                            <span className="text-xs text-gray-500">Seating Capacity</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded text-center">
                            <Wind className="w-8 h-8 mx-auto text-gold-500 mb-2" />
                            <span className="font-bold block text-gray-800">Air Conditioned</span>
                            <span className="text-xs text-gray-500">Climate Control</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded text-center">
                            <MapPin className="w-8 h-8 mx-auto text-gold-500 mb-2" />
                            <span className="font-bold block text-gray-800">Prime Location</span>
                            <span className="text-xs text-gray-500">Nanjundapuram Rd</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded text-center">
                            <Wifi className="w-8 h-8 mx-auto text-gold-500 mb-2" />
                            <span className="font-bold block text-gray-800">Facilities</span>
                            <span className="text-xs text-gray-500">Dining Area & Room</span>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-gold-500 p-4">
                        <h4 className="font-bold text-yellow-800 mb-2">Ideal For:</h4>
                        <ul className="list-disc list-inside text-yellow-800 text-sm grid grid-cols-2">
                            <li>Birthday Parties</li>
                            <li>Engagements</li>
                            <li>Baby Showers</li>
                            <li>Corporate Meetings</li>
                            <li>Get-togethers</li>
                            <li>Small Weddings</li>
                        </ul>
                    </div>
                </div>

                {/* Booking Form */}
                <div>
                    <EnquiryForm />
                </div>
            </div>
          </div>
          
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4319.666584493577!2d76.99792401097737!3d10.98074805534586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859462eed4dfb%3A0xf5b5cd3275318459!2sAkshathay%20Mini%20Hall!5e0!3m2!1sen!2sin!4v1771002856552!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default MiniHall;
