import React from 'react';
import { Link} from 'react-router-dom';
import './Cart.css';

const Cart = () => {

  return (
    <section id='cart'>
      <div className='breadcrumbWrapper'>
        <div className='container-fluid'>
          <ul className="breadcrumb">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/category'>Category</Link></li>
            {/* <li><Link to='/category'>{product.title}</Link></li> */}
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <div className='cartSection'>
        <div className='container-fluid'>
            <h1 className='hd'>Your Cart</h1>
            <p className='margin-left'>There are <span className='count'>0</span> products in your cart</p>
        </div>
      </div>
    </section>
  );
}

export default Cart;
