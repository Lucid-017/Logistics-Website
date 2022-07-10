import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
// import Food from '../components/asset/food.jpg'
// import Business from '../components/asset/business.jpg'
// import Partner from '../components/asset/partner.jpg'
export const Review = ({name,location,review})=>{
    return(
        <div>
          <div className="mb-8 mt-3 text-start">
              <p className="text-2xl font-semibold">
                  {review}
              </p>
             
          </div>
          <div className="mb-5 text-start">
              <div className="flex">
                  <div className="img">
                      
                  </div>
                  <div className="text">
                      <p className='font-semibold capitalize'>{name}</p>
                      <p className='text-sm capitalize'>{location}</p>
                  </div>
              </div>
          </div>
        {/* <p className="legend">Legend 3</p> */}
    </div>

    )
}


const ReviewCarousel = ({name,location,review}) => {
  return (
    <Carousel showArrows={false} autoPlay={true} infiniteLoop interval={5000} >
        <Review name={'leslie Alexander'} 
        location='surulere Lagos' 
        review={"we are proud to be DF's logistics long term partner.they help me quickly deliver parcels to our clients all over Lagos,without penalties or delays"}/>

        <Review name={'Amanda Cerny'} 
        location='Lekki Ekpe' 
        review={"i had a package i needed delivered and i called Dammy faruq's logistics and they said their office was in mainland,so imagine how suprised i was when i got my delievery in least than 30 minutes. i've used Dammy's logistics ever since"}/>

        <Review name={'abdull shakrinh'} 
        location='Ajah' 
        review={"i was skeptical at first because i knew they were still a startup company,but i'm glad i made that decision "}/>

        <Review name={'Ijeoma Oliver'} 
        location='lekki' 
        review={'My clients have never been happier  '}/>

        <Review name={'Danjuma stephen'} 
        location='lekki' 
        review={'i needed a business where i could use my motorcylce and make money, thank you Dammy Logistics'}/>
     
    </Carousel>
  )
}

export default ReviewCarousel