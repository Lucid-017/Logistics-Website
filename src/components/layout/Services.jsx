import React from 'react'
import ServiceType from '../ServiceType'
import {MdOutlineMoreTime} from 'react-icons/md'
import {GoPackage} from 'react-icons/go'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'
import {SiHandshake} from 'react-icons/si'
import { HiOutlineMinus } from 'react-icons/hi'



const Services = ({img,heading,content}) => {
  return (
    <div className='mt-5 mb-20 px-20' >
      <div className='w-72 mx-auto my-10'>
      </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="img">
          <p className='flex gap-2 self-center'><HiOutlineMinus className='text-4xl '/><p className='text-xs self-center'>LOGISTICS SERVICES</p></p>
          <p className='uppercase font-bold text-2xl pb-5 '>You get to experience the ease of shipping shipments and getting meals on the same platform!</p>
          <p className='text-sm text-slate-500 mb-8 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi inventore itaque quisquam explicabo, voluptatem, tempora, quam distinctio ad placeat quo a aspernatur. Tenetur sit eveniet accusamus repudiandae quia incidunt vitae.
          Numquam, minima nemo. Voluptate reiciendis amet beatae maxime dolorem optio nostrum quam suscipit cum accusantium veniam iusto voluptatum temporibus quaerat expedita sunt vero, tempora id? Inventore vitae maxime distinctio natus.
          In, eaque? Accusamus eius voluptate maiores. </p>
          <button  className="btn  p-3 font-bold text-black bg-slate-400 hover:bg-slate-500">Request Invite</button>

          </div>
          <div className="txt self-center">
            <div className="head">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                <ServiceType img={<MdOutlineMoreTime/>} heading='Timely delivery' content={'Request Pick-up/Delivery and Xpress Drop-off.'}/>
                <ServiceType img={<GoPackage/>}  heading='Ship Now' content={'Request Pick-up/Delivery and Xpress Drop-off. '}/>
                <ServiceType img={<GiFullMotorcycleHelmet/>} heading='ready to go' content={'reliable partners and riders ready to deliver. '}/>
                <ServiceType img={<SiHandshake/>} heading='collaborate with us' content={'Work together with our team of riders to increase your earning potential by double.'}/>
            
      
            </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Services