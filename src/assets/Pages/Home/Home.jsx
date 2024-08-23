import React from 'react'
import Navbar from '../../sections/Navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Categories from '../../sections/Categories/Categories'
import Testimonials from '../../sections/Testimonials/Testimonials'
import Footer from '../../sections/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Hero/>
      <Categories/>
      <Testimonials/>
    </div>
  )
}

export default Home
