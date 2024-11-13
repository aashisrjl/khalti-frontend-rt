import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for icons and their labels
const services = [
  { icon: '📱', name: 'DTH', route: '/dth' },
  { icon: '🌐', name: 'Internet', route: '/internet' },
  { icon: '📞', name: 'Landline', route: '/landline' },
  { icon: '🔋', name: 'Topup', route: '/topup' },
  { icon: '⚡', name: 'Electricity', route: '/electricity' },
  { icon: '🚰', name: 'Khanepani', route: '/khanepani' },
  { icon: '📑', name: 'Insurance', route: '/insurance' },
  { icon: '🎬', name: 'Movie', route: '/movie' },
  { icon: '🚗', name: 'Ride', route: '/ride' },
  { icon: '✈️', name: 'Flights', route: '/flights' },
  { icon: '🎫', name: 'Events', route: '/events' },
];

const Service = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10 font-sans">
        Our Services
      </h2>

      {/* Service Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Make Icon Clickable by Wrapping with Link */}
            <Link to={service.route} className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-white text-3xl mb-2">
              {service.icon}
            </Link>
            {/* Icon Name Button */}
            <button className="text-sm font-semibold text-gray-700 bg-gray-100 py-1 px-3 rounded-full hover:bg-gray-200 transition">
              {service.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
