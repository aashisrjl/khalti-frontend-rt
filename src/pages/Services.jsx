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
    <div className="bg-purple-900 py-8">
      {/* Service Row */}
      <div className="flex flex-wrap justify-center space-x-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            {/* Make Icon Clickable by Wrapping with Link */}
            <Link to={service.route} className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-2">
              {service.icon}
            </Link>
            {/* Icon Name Button */}
            <button className="text-sm font-semibold  py-1 px-3 rounded-full hover:text-blue-100 transition">
              {service.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
