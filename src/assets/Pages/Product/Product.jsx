import React, { useState } from 'react';
import './Product.css';
import { Link, useParams } from 'react-router-dom';
import { productData } from '../../Constants';
import MyImage from '../../Components/MyImage';
import Star from '../../Components/Star';
import ProductOptions from '../../Components/ProductOptions';
import DetailDescription from '../../Components/DetailDescription';

const Product = () => {
  const { productName } = useParams();
  const product = productData[productName];

  const [activeSize, setActiveSize] = useState(0);
  const [isFramed, setIsFramed] = useState(false);
  const [paperSize, setPaperSize] = useState('A4'); // Default to A4

  if (!product) {
    return <h1>Category not found</h1>;
  }

  const basePrice = product.price;

  const getSingleFacePrice = () => {
    switch (paperSize) {
      case 'A3':
        return basePrice + 500;
      case 'A4':
        return basePrice + 300;
      case 'A5':
        return basePrice + 100;
      default:
        return basePrice;
    }
  };

  const getTwoFacePrice = () => getSingleFacePrice() * 2;

  const getFrameCost = () => {
    switch (paperSize) {
      case 'A5':
        return 150;
      case 'A4':
        return 200;
      case 'A3':
      default:
        return 250;
    }
  };

  const getCurrentAmount = (withFrame) => {
    let currentAmount = activeSize === 0 ? getSingleFacePrice() : getTwoFacePrice();
    if (withFrame) {
      currentAmount += getFrameCost();
    }
    return currentAmount;
  };

  const newPrice = getCurrentAmount(isFramed);
  const oldPrice = newPrice + 250; 
  const discountPercentage = Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  return (
    <section id='product'>
      <div className='breadcrumbWrapper'>
        <div className='container-fluid'>
          <ul className="breadcrumb">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/category'>Category</Link></li>
            <li>{product.title}</li>
          </ul>
        </div>
      </div>

      <div className='product-container'>
        <div className='grid grid-two-column'>
          {/* Product Image */}
          <div className='product-images'>
            <MyImage imgs={product.images}></MyImage>
          </div>
          {/* Product Data */}
          <div className='product-data'>
            <h1>{product.title}</h1>
            <Star stars={product.star} reviews={product.reviews}/>
            <p className='product-data-Price'>
              <span className='rupees'>MRP: ₹</span><span className='old-price'>{oldPrice}</span>
              <span className='new-price'>₹{newPrice}</span>
              <span className='discount'>({discountPercentage}% off)</span>
            </p>
            <p>{product.description}</p>  
            <ProductOptions
              amount={basePrice}
              activeSize={activeSize}
              isFramed={isFramed}
              paperSize={paperSize}
              setActiveSize={setActiveSize}
              setIsFramed={setIsFramed}
              setPaperSize={setPaperSize}
            />
          </div>
        </div>
      </div> 
      <br/><br/>

      <div className='card mt-5 detailsPageTabs'>
        <DetailDescription/>
      </div>
    </section>
  );
};

export default Product;
