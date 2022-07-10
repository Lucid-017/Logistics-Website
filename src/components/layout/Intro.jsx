
import React from 'react'
import {TbPoint} from 'react-icons/tb'
import CarouselContainer from '../CarouselContainer'
import { NeutralButton } from '../Buttons'
import { HiOutlineMinus } from 'react-icons/hi'
// import Image from '../asset/image-mockups.png'

const Intro = () => {
  return (
    <>
    <CarouselContainer className=''/>
    <div className="absolute top-44">
      <div id='intro' className=' grid lg:grid-cols-2 lg:p-20 text-center lg:text-start text-white  '>
        <div className="px-10">
          <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center'> DAMMY FARUQ LOGISTICS</p></p>

          <h1 className='text-5xl uppercase font-bold mb-4  pb-5'>Nigeria's next generation last-mile <br />delivery service</h1>
          <p className=' mb-5 flex'>
          Quality Drivers <TbPoint className='mt-1'/> Great Prices
          <TbPoint className='mt-1'/> Tracking <TbPoint className='mt-1'/> Stress-Free Deliveries.
            </p>
            <NeutralButton/>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default Intro