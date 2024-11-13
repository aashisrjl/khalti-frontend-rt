import React, {useState} from 'react';
import KhaltiMobile from '../../assets/mobile.PNG';

const Guide = () => {
    const [isVisible,setVisible] = useState(false)

    const handleVisible = ()=>{
        setVisible(!isVisible)
    }
  return (
    <>
      <div className="flex justify-center mt-10 pb-6 bg-purple-900">
        {/* Set the src to KhaltiMobile */}
        <img className='rounded-[35px] mt-16' src={KhaltiMobile} alt="Khalti Mobile" />
        <div className="instruction ml-24 mt-16 flex-col text-white">
          <h1 className='text-3xl font-extrabold mb-8'>Pay in simple steps</h1>
          <ul>
            <li className="flex items-start mb-4">
              <div className="w-6 h-6 bg-purple-900 border-4 border-white rounded-full mr-4"></div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">SIGNUP AND LOGIN</span> 
                <p>Signup and Login to Khalti from Khalti App or Web Dashboard</p>
              </div>
            </li>

            <li className="flex items-start mb-4">
              <div className="w-6 h-6 bg-purple-900 border-4 border-white rounded-full mr-4"></div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">LOAD FUNDS</span>
                <p>Load funds to Khalti account via Internet Banking, Mobile Banking, Cards, or Connect IPS</p>
              </div>
            </li>

            <li className="flex items-start mb-4">
              <div className="w-6 h-6 bg-purple-900 border-4 border-white rounded-full mr-4"></div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">TAP ON TV ICON</span>
                <p>Tap on the TV icon on your dashboard to proceed</p>
              </div>
            </li>

            <li className="flex items-start mb-4">
              <div className="w-6 h-6 bg-purple-900 border-4 border-white rounded-full mr-4"></div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">SELECT OPERATOR</span>
                <p>Select preferred DTH operator from the home screen to get started</p>
              </div>
            </li>

            <li className="flex items-start mb-4">
              <div className="w-6 h-6 bg-purple-900 border-4 border-white rounded-full mr-4"></div>
              <div onClick={handleVisible} className="flex flex-col">
                <span className="text-xl font-semibold">PROVIDE DETAILS</span>
                <p className={`${isVisible ? 'block' : 'hidden'}`} >Enter CAS/Chip/Account Number and fill the required amount and there you go!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Guide;
