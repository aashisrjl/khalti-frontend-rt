import React from 'react'
import phone from '../../assets/tollfree.png'


const Header = () => {
  return (
    <>
    <div className="header flex justify-between p-2 bg-purple-950 text-white sticky top-0 z-10">
    <div className="left flex gap-2 ml-[50px]">
        <img height="25px" width="25px" src={phone} />
        <p>9847979997</p>
        <button className='bg-yellow-600 text-sm w-[120px] rounded-2xl ml-4'>Get App</button>
    </div>
    <div className="right flex justify-around mr-11 gap-6">
        <button className=' w-[100px] rounded-2xl border'>Login</button>
        <button className=' w-[100px] rounded-2xl border'>Register</button>

    </div>
    </div>
      
    </>
  )
}

export default Header
