import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail, HiOutlineMinus } from 'react-icons/hi';
import { ContactButton, NeutralButton } from '../../Buttons';
import CarouselContainer, { IntroContainer } from '../../CarouselContainer';
import {ImLocation} from 'react-icons/im'

const Contact = () => {
  return (
    <div>
      <IntroContainer pageName='contact' pageInfo='Home- contact us'/>
    
        <div className=" my-20">
          <div className="grid md:grid-cols-2 pb-20 lg:grid-cols-2 gap-4">
              <div className="div1 px-8 sm:px-10 md:px-14 lg:px-20">
                <h1 className="text-4xl mb-5 font-semibold">
                  Get in touch with us
                </h1>
                <p className='text-slate-900 mb-10'>
                Contact us on direct,by phone or fill out the form to receive a free
                consultation from our enthusiastic staff.
                </p>
                <div className="info">
                  <div className="item mb-4">
                    <div className="flex gap-3">
                      <FiPhoneCall className='gap-5 text-4xl self-center '/>
                      <div>
                        <p>phone number</p>
                        <p className=' font-semibold'>+234 91 328 2211</p>
                      </div>
                    </div>
                  </div>

                  <div className="item mb-4">
                    <div className="flex gap-3">
                      <HiOutlineMail className='gap-5 text-4xl self-center '/>
                      <div>
                        <p>Email</p>
                        <p className='font-semibold'>dammyfaruq@example.com</p>
                      </div>
                      
                    </div>
                  </div>

                  <div className="item mb-4">
                    <div className="flex gap-3">
                      <ImLocation className='gap-5 text-4xl self-center '/>
                      <div>
                        <p className='font-semibold'>9 anipole crescent soluyi gbagada,lagos state,nigeria</p>
                        <p>+234 91 328 2211</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div2">
               {/* second div */}
              </div>
          </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 sm:px-10 md:px-14 lg:px-20">
                <div div className="contactdiv relative ">
                 <div className="w-full h-full bg-gray-700 top-0 left-0 absolute opacity-50 -z-10"></div>
                </div>
              <div className='div2 p-3 md:p-4 lg:p-5 shadow-lg ' >

                <div className=" ">

                    <form
                    action="https://formsubmit.co/uchennaonwuliri@gmail.com"
                    method="POST"
                  >
                    <input
                      className="lg:w-1/2 mb-4 rounded p-2 bg-slate-100 lg:mr-1"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      className="lg:w-1/2 mb-4 rounded p-2 bg-slate-100"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      class="w-full mb-4 rounded p-2 bg-slate-100"
                      name="_subject"
                      id="subject"
                      type="text"
                      placeholder="subject"
                    />
                    <textarea
                      class="w-full mb-4 rounded p-2 bg-slate-100"
                      id="textarea"
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <ContactButton/>
                  </form>
                    
                </div>
              </div>
                
            </div>
        </div>
        {/* <div class="">
              <div class="">
                <div class="">
                  <div class="flex">
                    <h3 class="my-4">Send A Message</h3>
                  </div>

                  <form
                    action="https://formsubmit.co/uchennaonwuliri@gmail.com"
                    method="POST"
                  >
                    <input
                      class="half-input me-3 mb-4"
                      type="text"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      class="half-input"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      class="full-input mb-4"
                      name="_subject"
                      id="subject"
                      type="text"
                      placeholder="subject"
                    />
                    <textarea
                      class="full-input"
                      id="textarea"
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <button type="submit" class="my-4">SEND MESSAGE</button>
                  </form>
                </div>
              </div>
            </div> */}
    </div>
  )
}

export default Contact