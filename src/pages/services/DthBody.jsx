import React from 'react'
import dth from '../../assets/dth-body.svg'

const DthBody = () => {
  return (
    <>
    <div className="dth flex justify-center gap-16 pt-24 pb-32 ">
        <img height="600" width="600" src={dth} alt="" />
        <div className="contain flex flex-col mt-10">
            <h2 className='font-extrabold text-purple-800 text-4xl font-serif'>DTH TV Recharge on <br /> the go using Khalti</h2>
            <p className='mt-8'>Recharge DTH online without physically reaching the <br /> operator with attractive cashbacks.</p>
            <button className='mt-8 bg-yellow-600 p-4 rounded-3xl text-white text-2xl font-bold w-[300px]'>Recharge Now</button>
        </div>
    </div>
      
    </>
  )
}

export default DthBody
