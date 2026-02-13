import React from 'react';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';
import { COMPANY_INFO, FAQS } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Akshathay Events Coimbatore" 
        description="Get in touch for event bookings. Call 9894594074 or visit us at Nanjundapuram Road, Coimbatore."
      />
      
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-maroon-900 mb-4">Contact Us</h1>
            <p className="text-gray-600">We'd love to hear from you. Reach out to plan your next big event.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-maroon-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gold-100 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-maroon-900" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <p className="text-gray-600">{COMPANY_INFO.phone1}</p>
                      <p className="text-gray-600">{COMPANY_INFO.phone2}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold-100 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-maroon-900" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Address</p>
                      <p className="text-gray-600">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold-100 p-3 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-maroon-900" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 9:00 PM</p>
                      <p className="text-gray-600">Sun: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
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

            {/* Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-maroon-900 mb-10">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gold-500">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
