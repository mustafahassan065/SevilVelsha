import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Story from '../components/Story'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Story />
        <Services />
        <Testimonial />
        <Newsletter />
    </div>
  )
}

export default Home