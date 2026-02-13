import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Send } from 'lucide-react';

const EnquiryForm: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Website Enquiry*%0A------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event:* ${formData.eventType}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'p-4' : 'p-8'} bg-white rounded-lg shadow-xl border-t-4 border-gold-500`}>
      <h3 className="text-2xl font-bold text-maroon-900 mb-6">Request a Quote</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
            <select
              name="eventType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500"
              onChange={handleChange}
            >
              <option value="Wedding">Wedding</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Birthday">Birthday Party</option>
              <option value="Ear Piercing">Ear Piercing</option>
              <option value="Housewarming">Housewarming</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Catering">Catering Only</option>
              <option value="Mini Hall">Mini Hall Booking</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
            <input
              type="date"
              name="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500"
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-maroon-900 text-white font-bold py-3 px-4 rounded-md hover:bg-maroon-800 transition-all transform hover:scale-[1.02] flex items-center justify-center"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Enquiry via WhatsApp
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
