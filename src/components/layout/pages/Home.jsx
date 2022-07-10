import React from 'react'
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
    </div>
  )
}

export default Home