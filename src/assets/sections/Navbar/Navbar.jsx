import React, { useState } from 'react'
import './Navbar.css'
import { RiCloseFill, RiMenu3Fill, RiShoppingCartFill, RiUserFill } from 'react-icons/ri'
import { Link} from 'react-router-dom';



const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);


  return (
    <header className='header'>
      <nav>
        {/* For Desktop */}
        <div className='tn-container container'>
          <a href="" className='logo'>The Sketchery</a>
          <div className='nav-center'>
            <div className='bn-container container'>
              <ul className='navlist'>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/category'>categories</Link></li>
                <li><Link to='/testimonial'>testimonial</Link></li>
                <li><Link to='/contact'>contact</Link></li>
              </ul>
            </div>

          </div>
          <div className='tn-icons'>
            <a href=''><RiUserFill /></a>
            <Link className='cart-icon' to='/category/cart'>
              <RiShoppingCartFill />
              <span className='count'>0</span>
            </Link>
          </div>
        </div>
        <hr />

        {/* For Mobile */}
        <div className='nm-nav'>
          <div className='nm-container container'>
            <a href='' className='logo'>The Sketchery</a>
            <ul className='nav-menu' style={{ transform: menuOpened && "translate(0%)" }}>
              <li><Link to='/'>home</Link></li>
              <li><Link to='/category'>categories</Link></li>
              <li><Link to='/testimonial'>testimonial</Link></li>
              <li><Link to='/contact'>contact</Link></li>
            </ul>
            <div className='menu-btn'>
              {!menuOpened ?
                <RiMenu3Fill size={30} onClick={() => setMenuOpened(true)} /> :
                <RiCloseFill size={30} onClick={() => setMenuOpened(false)} />
              }
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}

export default Navbar
