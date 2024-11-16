import React from 'react'
import "../../index.css"

const Whykhalti = () => {
  return (
    <>
    <div className="body bg-[url('/bg-why.jpg')] bg-cover w-screen flex flex-col justify-center backdrop-blur-2xl text-white">
        <h1 className='text-center mt-20 mb-24 text-4xl font-bold'>Why use Khalti ?</h1>
       
        <div className="con flex gap-36 justify-center pb-24 font-bold">
        

            <div className="item flex flex-col text-center">
            <span className='text-4xl mb-5'>🎁</span>
            <h3>Cash backs on </h3>
                <h3> transaction</h3>
            </div>

            <div className="item flex flex-col text-center">
            <span className='text-4xl mb-5'>🖥</span>
            <h3 >An easy to </h3>
           <h3 > use interface</h3>
            </div>

            <div className="item flex flex-col text-center">
            <span className='text-4xl mb-5'>🔐</span>
            <h3>Safe & Reliable </h3>
            <h3> transactions</h3>
            </div>

            <div className="item flex flex-col text-center">
            <span className='text-4xl mb-5'>⚙</span>
            <h3>Detailed </h3>
            <h3>Transaction Reports</h3>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Whykhalti
