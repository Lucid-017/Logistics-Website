import React from 'react'
import { HiOutlineMail, HiOutlineMinus } from 'react-icons/hi';
import { IntroContainer } from '../../CarouselContainer';
import { TbPoint } from 'react-icons/tb';


export const Specials = ({img,heading,details}) => {
  return (
    <div className='shadow-lg'>
      <div className="p-4">
        <div className="img py-3">
          <img src={img} alt="" />
        </div>
        <div className="heading pb-3 font-semibold capitalize">
          {heading}
        </div>
        <div className="details text-ash-900 text-sm">
          {details}
        </div>

      </div>
        
    </div>
  )
}




const About = ({img,heading,details}) => {
  return (
    <div>
      <IntroContainer pageName='about' pageInfo='Home- About'/>
      <div className="">
        <div className="py-10 lg:py-20 grid lg:grid-cols-2 gap-5 px-8 sm:px-10 md:px-20 lg:px-40">
          <div className="text">
           <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center'> ABOUT COMPANY</p></p>

            <p className=''>We have built a team of employees,who are participated in professional
            training courses,are groomed to handle any emerging situation witha
            level of composure that gives the customer peace of mind.</p>
                
          </div>

          <div className="text">
               
          </div>
        </div>
        <div className="py-10 lg:py-20 px-8 sm:px-10 md:px-20 lg:px-40 grid lg:grid-cols-2 gap-5 mb-10 bg-ash-500">
          <div className="text">
           <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center uppercase'>our vision</p></p>
            <p className="text-lg font-semibold mb-2">
              Our Mission
            </p>
            <p className='mb-5'>
             Offering our customers the opportunity to conduct their shipments ina
              friendly environmental way
            </p>
            <p className='mb-2 font-semibold flex gap-5'>
            <TbPoint/> The most cost-effective delivery for clients
            </p>
            <p className='mb-2 font-semibold flex gap-5'>
            <TbPoint/> Superior transportation and logistics services
   
            </p>
            <p className='mb-2 font-semibold flex gap-5'>
            <TbPoint/> Guarantee on-time delivery
            </p>
                
          </div>

          <div className="text">
               
          </div>
        </div>
        <div className="2divs px-8 sm:px-10 md:px-20 lg:px-40 my-10 lg:my-20 mb-20 lg:mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 ">
            <div className="div1">
            <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center uppercase'>why us?</p></p>
              <p className="font-semibold text-2xl capitalize mb-4">
                what makes us special
              </p>
              <p className='text-ash-900'>Our strengths and advantages make us different from our competitors
                that meets all our customers'demand.</p>     
            </div>

            <Specials heading={'always on time'}
              details='guarantee on-time delivery with all our customers'/>
                
      
            <Specials heading={'safe packaging'}
              details='ensure safety for cargo with our careful packaging'/>
                
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            

            <Specials heading={'competitive rates'}
              details='offer low cost for transportation and logistics services'/>
              
            <Specials heading={'fast and realiable'}
              details='a mandatory requirement for logistics companies'/>

            <Specials heading={'customer care support'}
              details='we answer all your questions during opening hours'/>
                
          </div>
        </div>

      </div>
        </div>
  )
}

export default About