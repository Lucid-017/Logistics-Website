import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import Food from '../components/asset/food.jpg'
import Business from '../components/asset/business.jpg'
import Partner from '../components/asset/partner.jpg'
import { HiOutlineMinus } from 'react-icons/hi';

export const IntroContainer =({pageName,pageInfo})=>{
  return(
    <Carousel className='introContainer' showArrows={false} autoPlay={true} infiniteLoop interval={6000} showIndicators={false}>
      <div>
          <div className="w-full h-screen bg-gradient-to-r from-gray-900 to-gray-400 top-0 left-0 absolute opacity-40"></div>
          <img src={Business} className='h-42 object-cover' />

          <div className="absolute top-20">
            <div id='intro' className=' grid lg:grid-cols-2 lg:px-20 text-center lg:text-start text-white  '>
              <div className="px-10">
                <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center'> DAMMY FARUQ LOGISTICS</p></p>
                <h1 className='text-5xl uppercase font-bold pb-5'>{pageName}</h1>
                <p className=' mb-5 flex'>{pageInfo}</p>
              </div>
            </div>
         </div>
      </div>
    </Carousel>
  )
}
const CarouselContainer = () => {
  return (
    <Carousel showArrows={false} autoPlay={true} infiniteLoop interval={6000} showIndicators={false}>

      <div>
          <img src={Food} className='h-screen object-cover' />
          {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
          <div className="w-full h-screen bg-gradient-to-r from-gray-900 to-gray-400 top-0 left-0 absolute opacity-40"></div>
          <img src={Business} className='h-screen object-cover' />
          {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
          <div className="w-full h-screen bg-gradient-to-r from-gray-900 to-gray-400 top-0 left-0 absolute opacity-40"></div>

          <img src={Partner} className='h-screen object-cover' />
          {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  )
}

export default CarouselContainer