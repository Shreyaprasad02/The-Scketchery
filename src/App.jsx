import React from 'react'
import Home from './assets/Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/sections/Navbar/Navbar'
import Footer from './assets/sections/Footer/Footer'
import NotFound from './assets/Pages/NotFound/NotFound'
import Product from './assets/Pages/Product/Product'
import Categories from './assets/sections/Categories/Categories'
import Testimonials from './assets/sections/Testimonials/Testimonials'
import Contactus from './assets/sections/Contact/Contactus'
import Cart from './assets/Pages/Cart/Cart'



const App = () => {
  return (
    <BrowserRouter>
      <main className='app'>
        <Navbar />
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/category' element={<Categories/>} />
          <Route exact={true} path='/testimonial' element={<Testimonials/>} />
          <Route exact={true} path='/contact' element={<Contactus/>} />
          <Route exact={true} path='/category/:productName' element={<Product/>} />
          <Route exact={true} path='/category/cart' element={<Cart/>} />
          <Route exact={true} path='*' element={<NotFound/>} />
        </Routes>
        <Footer />

      </main>
    </BrowserRouter>
  )
}

export default App
