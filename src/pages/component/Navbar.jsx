import React from 'react';
import khaltiLogo from '../../assets/khalti.png';

const Navbar = () => {
  return (
    <div className="main flex justify-around items-center bg-white gap-7 p-3">
      <div className="img ml-8">
        <img height="300px" width="100px" src={khaltiLogo} alt="KhaltiLogo" />
      </div>
      <div className="links text-purple-900 text-md">
        <ul className="flex space-x-6">
          <li><a href="#" className=" hover:text-blue-500">Home</a></li>
          <li><a href="#" className=" hover:text-blue-500">About Us</a></li>
          <li><a href="#" className=" hover:text-blue-500">Service</a></li>
          <li><a href="#" className=" hover:text-blue-500">Load Fund</a></li>
          <li><a href="#" className=" hover:text-blue-500">Business Solution</a></li>
          <li><a href="#" className=" hover:text-blue-500">Blog</a></li>
          <li><a href="#" className=" hover:text-blue-500">More <span>+</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

