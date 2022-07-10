import React from 'react'
import ReachUs from './ReachUS'

const Identity = () => {
  return (
    <>
    <ReachUs/>
    <div className='mx-10 mb-10 lg:px-20 ' style={{height:'80vh'}}>
         <div className="grid lg:grid-cols-2 ">
            <div className="img"></div>
            <div className="">
                <span>-----<span className='text-xs uppercase'>coporate identity</span></span>
                <h2 className='text-4xl font-bold mb-5 uppercase'>
                  establishing a path in our field
                </h2>
                    <p>Managing your shipments from one location to another is the specialty of Dammy Faruq Global Limited. Together with our global network of partners, we create and deliver solutions that are at the forefront of the industry.</p>
                    <p>Our professional staff that are passionate about their job enable us to concentrate on offering excellence and value to our clients. We have a strong commitment to surpassing client expectations. Nigeria's Fortune Global is a chic shipping corporation.
                    </p>
            </div>
            
         </div>
    </div>
    </>
    
  )
}

export default Identity
