import React, { useState } from 'react';
import SEO from '../components/SEO';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Wedding', 'Baby Shower', 'Corporate', 'Haldi', 'Catering'];
  
  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <>
      <SEO 
        title="Event Gallery - Wedding & Decor Photos" 
        description="View photos of our recent work. Wedding stages, entrance arches, catering setups, and baby shower decorations by Akshathay Events."
      />
      
      <div className="bg-gray-50 min-h-screen pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-maroon-900 mb-4">Our Gallery</h1>
            <p className="text-gray-600 mb-8">A glimpse into the magical moments we've created.</p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-maroon-900 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gold-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img) => (
              <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <p className="text-white font-medium text-center">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
             <p className="text-center text-gray-500 mt-12">No images found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
