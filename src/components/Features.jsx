import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Features = ({png,title,text}) => {
    return (
        <div className="rounded-lg card bg-white shadow-xl hover:shadow-2xl " >
            <div className="img mb-4">
                <img className='object-cover rounded w-full h-full overflow-hidden' src={png} alt="" srcset="" />
            </div>
            <div className="content p-2 md:p-3 lg:p-5">
                <p className="text-2xl font-semibold mb-2 uppercase">
                {title}
                </p>
                <p className=' text-ash-900 '> {text}
                </p>
                <div className="read-more flex pt-5">
                    <p className="uppercase pr-5 ">check it out</p>
                    <BsArrowRight className='mt-1'/>
                </div>
            </div>
           
        </div>  )
}

export default Features