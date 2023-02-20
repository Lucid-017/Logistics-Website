import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ServiceType = ({img,heading,content}) => {
    return (
        <div class="w-auto ">
        <div class="flex h-full w-auto shadow-md">
            <div className="img text-5xl p-4 self-center">
            {img}
                
            </div>
            
            <div class="p-3">
                <h1 class="text-lg font-semibold uppercase mb-3">{heading}</h1>
                <p class="text-sm text-slate-500">{content}</p>

            </div>
        </div>
    </div>
               )
  }

export default ServiceType