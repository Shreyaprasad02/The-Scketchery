import React from 'react'
import './Testimonials.css';
import Review1 from './../../Images/Review1.jpg'
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
    <section id='testimonials'>
      <div className='title'>
        <h2>TESTIMONIALS</h2>
      </div>
      <div className='testimonial-container'>
        <div className='testimonial'>
          <div className='testi-content'>
            {/* <div className='slide'> */}
              <Slider {...settings} className='testimonial_slider'>
                <div className='item1'>
                  <img src={Review1} className='w-100' />
                  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit ullam voluptatibus quaerat, error rem harum distinctio accusamus esse temporibus sequi odio obcaecati debitis illum velit. Nisi fugiat ipsa cupiditate? Nisi fugiat ipsa cupiditate?</h4>
                  <i className='bx bxs-quote-alt-left quote-icon' ></i>
                  <h3>Shreya Prasad</h3>
                </div>
                <div className='item1'>
                  <img src={Review1} className='w-100' />
                  <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit ullam voluptatibus quaerat, error rem harum distinctio accusamus esse temporibus sequi odio obcaecati debitis illum velit. Nisi fugiat ipsa cupiditate?</h4>
                  <i className='bx bxs-quote-alt-left quote-icon' ></i>
                  <h3>Shreya Prasad</h3>
                </div>
              </Slider>

            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Testimonials
