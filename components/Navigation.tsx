import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Mini Hall', path: '/mini-hall' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
               <span className="font-serif text-3xl font-bold text-maroon-900">
                Akshathay<span className="text-gold-500"></span>
               </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-maroon-900 font-bold border-b-2 border-gold-500'
                    : 'text-gray-700 hover:text-gold-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`}
              className="bg-maroon-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-maroon-800 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-maroon-900 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-maroon-50 text-maroon-900'
                    : 'text-gray-700 hover:text-gold-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`}
              className="block w-full text-center mt-4 bg-gold-500 text-white px-4 py-2 rounded-md"
            >
              Call: {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
