import React from 'react';
import google from "../../assets/googleplay.png"
import apple from "../../assets/apple.png"

const Faq = () => {
  return (
    <div className="faq-container bg-white text-center p-6">
      <div className="upper flex flex-col justify-around pt-14 mb-16">
        <h3 className="text-center text-3xl font-bold text-purple-700">Transactions made effortless.</h3>
        <h3 className="text-center text-3xl font-bold text-purple-700">Download app for free.</h3>
        <div className="button-container flex justify-center gap-10 mt-10">
          <div className="googleplay-button flex items-center bg-black text-white p-4 rounded cursor-pointer hover:bg-gray-800">
            <img src={google} alt="Google Play" className="w-6 h-6 mr-3" />
            <h3 className="font-bold text-lg">Google Play</h3>
          </div>
          <div className="apple-button flex items-center bg-black text-white p-4 rounded cursor-pointer hover:bg-gray-800">
            <img src={apple} alt="Apple Store" className="w-6 h-6 mr-3" />
            <h3 className="font-bold text-lg">Apple Store</h3>
          </div>
        </div>
      </div>

      <div className="faq-section mt-16 flex flex-col text-center mt-24" >
        <h2 className="text-2xl font-bold text-purple-700 mb-6">FAQs</h2>
        <div className="faq-item mb-4">
          <details className="text-left p-3 border-b border-gray-300 cursor-pointer">
            <summary className="font-medium text-lg text-purple-800">Can I make transactions internationally?</summary>
            <p className="mt-2 text-black">Yes, you can make transactions globally with our app.</p>
          </details>
        </div>
        <div className="faq-item mb-4">
          <details className="text-left p-3 border-b border-gray-300 cursor-pointer">
            <summary className=" text-purple-700 font-medium text-lg">Is there a transaction limit?</summary>
            <p className="mt-2 text-black">Yes, the limit is $10,000 per transaction.</p>
          </details>
        </div>
        <div className="faq-item mb-4">
          <details className="text-left p-3 border-b border-gray-300 cursor-pointer">
            <summary className=" text-purple-700 font-medium text-lg">Are there any fees for transfers?</summary>
            <p className="mt-2 text-black">Our app offers zero fees for domestic transfers.</p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Faq;
