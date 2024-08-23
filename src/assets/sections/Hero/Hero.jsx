import React from 'react'
import Slider from "react-slick";
import './Hero.css'
// import Hero1 from '../../Images/Hero1.jpg'
import Slide2 from '../../Images/Slide2.jpg'
import Slide3 from '../../Images/Slide3.jpg'


const Hero = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: false,
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  };


  return (
    <section className='hero'>
      <div className='container-fluid'>
        <Slider {...settings} className='home_slider_main'>
          <div className='item'>
            <img src={Slide3} className='w-100'/>
          </div>
          <div className='item'>
            <img src={Slide2} className='w-100'/>
          </div>
          {/* <div className='item'>
            <img src={Hero1} className='w-100'/>
          </div> */}
        </Slider>
      </div>
    </section>
  )
}

export default Hero
