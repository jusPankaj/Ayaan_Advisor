import React from 'react'

const TopDestinations = () => {
  return (
    <div className='bg-[#5981B2] w-screen h-[1091px] relative'>
        <div>

        </div>
       <div className='flex absolute bottom-12 left-60 '>
       <div className='flex justify-between items-center rounded-3xl bg-[#2C4058] h-[198px] w-[1172px] px-[39px] py-[79px]'>
            <div>
                <h1 className='text-white font-extrabold text-[38px]'>Other Destinations</h1>
                <p className='font-normal text-[18px] text-white'>Explore more countries where you can pursue your mbbs</p>
            </div>
            <div>
                <h1>Circles</h1>
                <button className='bg-[#FED55F] h-12 w-[287px] text-[#2C4058]' >Discover more Destinations</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopDestinations