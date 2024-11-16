import React from 'react'
import vid1 from '../../assets/vid-1.jpg'
import vid2 from '../../assets/vid-2.jpg'
import vid3 from '../../assets/vid-3.jpg'

const Video = () => {
  return (
    <>
    <div className="body flex flex-col justify-center">
        <h1 className='font-bold text-3xl text-center mt-20 mb-10 text-purple-700'>Related Videos</h1>

<div className="cards flex justify-center gap-10 mt-10 mb-14">
        <div className="item flex flex-col justify-center">
            <img className='rounded' height="600px" width="400px" src={vid1} alt="" />
            <p className='hover:text-purple-900 text-center'>How to load funds to Khalti using SCT cards?</p>
        </div>

        <div className="item flex flex-col justify-center">
            <img className='rounded' height="600px" width="400px" src={vid2} alt="" />
            <p className='hover:text-purple-900 text-center'>How to load funds in Khalti using NIC Asia eBanking</p>
        </div>

        <div className="item flex flex-col justify-center">
            <img className='rounded' height="600px" width="400px" src={vid3} alt="" />
            <p className='hover:text-purple-900 text-center'>How to load fund to Khalti using EBL Touch?</p>
        </div>
        </div>

    </div>
      
    </>
  )
}

export default Video
