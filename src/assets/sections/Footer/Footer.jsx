import React from 'react'
import './Footer.css'
import { RiHome2Fill, RiInstagramLine, RiMailFill, RiPhoneFill, RiPinterestFill, RiUserLocationFill, RiYoutubeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='Footer'>
        <div className='footer_container container'>
          <div className='sec about-us'>
            <h2><a href="" className='logo footer-logo'>The Sketchery</a></h2> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Hic quas explicabo fugit excepturi,
              exercitationem!</p>
            <ul className='sci footer-icons'>
            <li><a href='https://www.instagram.com' target="_blank" ><RiInstagramLine /></a></li>
              <li><a href='https://www.pinterest.com' target="_blank" ><RiPinterestFill /></a></li>
              <li><a href='https://www.youtube.com' target="_blank" ><RiYoutubeFill /></a></li>
            </ul>
          </div>
          <div className='sec quicklinks'>
            <h2>Suport</h2>
            <ul >
              <li><Link to='#'>Privacy policy</Link></li>
              <li><Link to='#'>FAQ</Link></li>
              <li><Link to='#'>Help</Link></li>
              <li><Link to='#'>Contact</Link></li>
            </ul>
          </div>
          <div className='sec quicklinks'>
            <h2>Shop</h2>
            <ul>
              <li><Link to='/category/graphite-sketch'>Graphite Sketch</Link></li>
              <li><Link to='/category/charcoal-sketch'>Charcoal Sketch</Link></li>
              <li><Link to='/category/ballpen-sketch'>Ball Pen Sketch</Link></li>
              <li><Link to='/category/colourpencil-sketch'>Color Pencil Sketch</Link></li>
              {/* <li><Link to='/category/listed-sketch/listing'>Listed Sketch</Link></li> */}
            </ul>
          </div>
          <div className='sec contact-us'>
            <h2>Contact us</h2>
            <ul className='info'>
              <li><span><RiPhoneFill /></span><p><a href='tel:+91 8208649913'>+91 7666381548</a></p></li>
              <li><span><RiMailFill /></span><p><a href='mailto:shreyaprasadaug@gmail.com'>nishantprasad2424@gmail.com</a></p></li>
              <li><span><RiUserLocationFill /></span><p><a href='Location'>Pune, Maharashtra, India</a></p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright-text'>
          <p>Copyright 2024. Sketchery | All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer
