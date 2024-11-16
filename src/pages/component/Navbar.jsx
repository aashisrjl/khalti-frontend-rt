import React, { useState } from 'react';
import khaltiLogo from '../../assets/khalti.png';

const Navbar = () => {
  const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);

  // Sample data for dropdown services
  const serviceOptions = [
    { name: 'DTH', link: '/dth' },
    { name: 'Internet', link: '/internet' },
    { name: 'Landline', link: '/landline' },
    { name: 'Topup', link: '/topup' },
    { name: 'Electricity', link: '/electricity' },
    { name: 'Khanepani', link: '/khanepani' },
    { name: 'Insurance', link: '/insurance' },
    { name: 'Movie', link: '/movie' },
    { name: 'Ride', link: '/ride' },
    { name: 'Flights', link: '/flights' },
    { name: 'Events', link: '/events' },
  ];

  return (
    <div className="main flex justify-around items-center bg-white gap-7 p-3 sticky top-[42px] z-10"> {/* Ensure z-index here */}
      <div className="img ml-8">
        <img height="300px" width="100px" src={khaltiLogo} alt="KhaltiLogo" />
      </div>
      <div className="links text-purple-900 text-md">
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/aboutUs" className="hover:text-blue-500">About Us</a></li>

          {/* Service Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServiceDropdownOpen(true)}
            onMouseLeave={() => setServiceDropdownOpen(false)}
          >
            <a href="/services" className="hover:text-blue-500">
              Service <span>+</span>
            </a>
            {isServiceDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-20"> {/* Higher z-index */}
                {serviceOptions.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><a href="#" className="hover:text-blue-500">Load Fund</a></li>
          <li><a href="#" className="hover:text-blue-500">Business Solution</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">More <span>+</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
