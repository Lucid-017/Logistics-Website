import React from 'react'
import ReviewCarousel from '../ReviewCarousel'
import {FaQuoteLeft} from 'react-icons/fa'
import testimonalimg from '../asset/testimonial.jpg'

const Testimonials = () => {
  return (
    <div className='relative'>
        <div className='p-20 imt'>    
        <div className="-z-1 w-full h-full bg-gradient-to-r from-black to-ash-100 top-0 left-0 absolute opacity-40"></div>

            <div className="grid lg:grid-cols-2 z-10 gap-10  ">
                <div className="div1 text-white">
                    <FaQuoteLeft className='text-3xl right-5 relative' />
                    <ReviewCarousel/>  
                </div>
                <div className="testimonials">
                </div>
            </div>
         
        </div>
    </div>
  )
}

export default Testimonials