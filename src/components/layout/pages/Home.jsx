import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { ChatButton } from '../../Buttons'
import Identity from '../Identity'
import Intro from '../Intro'
import OurFeatures from '../OurFeatures'
import Services from '../Services'
import Testimonials from '../Testimonials'

const Home = () => {
  return (
    <div>
        <Intro/>
      <Identity/>
      <OurFeatures/>
      <Services />
      <Testimonials/>
      <ChatButton/>
    </div>
  )
}

export default Home