import React from 'react';
import banner from '../../assets/banner1.jpeg';

const Body = () => {
  return (
    <div className="body relative bg-[url('/bg.jpg')] bg-cover bg-center h-[100%] flex flex-col items-center text-center backdrop-blur-md mb-6">
      <img className='mt-7' height="20px" width="800px" src={banner} alt="banner" />
      <h1 className="text-white mt-[5rem] text-3xl font-extrabold">Khalti Digital Wallet and <br /> Payment Gateway</h1>
      <p className="text-white mt-6 text-[1.2rem]">
        Pay bills, send money, and accept payments online instantly from <br /> anywhere in Nepal using your phone.
      </p>
      <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600 mb-10">Sign Up</button>
    </div>
  );
};

export default Body;


