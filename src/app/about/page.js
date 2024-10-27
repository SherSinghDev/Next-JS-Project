import React from 'react'
import HeroSection from '../components/herosection/HeroSection'

const About = () => {
  return (
    <HeroSection title={<AboutText />} btnText={"Our Services"} imgSrc={"https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265047_640.jpg"} />
  )
}

function AboutText() {
  return (
    <>
      <span className='text-blue-400 text-5xl'>About Us</span>
    </>
  )
}

export { AboutText }

export default About