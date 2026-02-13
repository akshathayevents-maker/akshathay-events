import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-gold-500">Akshathay Events</h3>
            <p className="text-gray-400 mb-6">
              Making your special moments unforgettable with premium decoration and catering services in Coimbatore.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/akshathay_events/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram />
              </a>
              <a 
                href="https://www.facebook.com/Akshathay/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/mini-hall" className="text-gray-400 hover:text-white transition-colors">Mini Hall</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                <div className="flex flex-col">
                    <a href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white">{COMPANY_INFO.phone1}</a>
                    <a href={`tel:${COMPANY_INFO.phone2.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white">{COMPANY_INFO.phone2}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Akshathay Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
