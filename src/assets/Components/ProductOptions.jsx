import React, { useState } from 'react';
import { RiShoppingCart2Line, RiUpload2Fill } from 'react-icons/ri';
import styled from 'styled-components';

const ProductOptions = ({ amount, activeSize, isFramed, paperSize, setActiveSize, setIsFramed, setPaperSize }) => {
    const [selectedFile, setSelectedFile] = useState(null); // State for managing the selected file

    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleFaceSelection = (index) => {
        if (paperSize !== 'A5') {
            setActiveSize(index);
        }
    };

    const handleFrameSelection = (frameSelected) => {
        setIsFramed(frameSelected);
    };

    const handlePaperSizeSelection = (size) => {
        if (size === 'A5') {
            setActiveSize(0); // Reset to single face if A5 is selected
        }
        setPaperSize(size);
    };

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

    const getSingleFacePrice = () => {
        switch (paperSize) {
            case 'A3':
                return amount + 500;
            case 'A4':
                return amount + 300;
            case 'A5':
                return amount + 100;
            default:
                return amount;
        }
    };

    const getTwoFacePrice = () => getSingleFacePrice() * 2;

    const getCurrentAmount = (withFrame) => {
        let currentAmount = activeSize === 0 ? getSingleFacePrice() : getTwoFacePrice();
        if (withFrame) {
            currentAmount += getFrameCost();
        }
        return currentAmount;
    };

    const handleAddToCart = () => {
        if (!selectedFile) {
            alert('Please select an image before adding to cart.');
            return;
        }

        // Proceed with add to cart logic
        alert('Image added to cart!');
    };

    return (
        <Wrapper>
            <div className='product-options'>
                <div className='productSize'>
                    <span className="size-title">Paper Size</span>
                    <ul className="list">
                        <li className="list-inline-item">
                            <a className={`tag paper-size-tag ${paperSize === 'A3' ? 'active' : ''}`} onClick={() => handlePaperSizeSelection('A3')}>
                                <h3 className='face-opt'>A3</h3>
                                <div className='caption'>(297 x 420mm)</div>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className={`tag paper-size-tag ${paperSize === 'A4' ? 'active' : ''}`} onClick={() => handlePaperSizeSelection('A4')}>
                                <h3 className='face-opt'>A4</h3>
                                <div className='caption'>(210 x 297mm)</div>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className={`tag paper-size-tag ${paperSize === 'A5' ? 'active' : ''}`} onClick={() => handlePaperSizeSelection('A5')}>
                                <h3 className='face-opt'>A5</h3>
                                <div className='caption'>(148 x 210mm)</div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='product'>
                    <div className='faceCount'>
                        <span className="size-title">Number of Face (s)</span>
                        <ul className="list">
                            <li className="list-inline-item">
                                <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => handleFaceSelection(0)}>
                                    <h3 className='face-opt'>Single Face</h3>
                                    <div className='caption'>₹{getSingleFacePrice()}</div>
                                </a>
                            </li>
                            <li className={`list-inline-item ${paperSize === 'A5' ? 'disabled' : ''}`}>
                                <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => handleFaceSelection(1)}>
                                    <h3 className='face-opt'>Two Face</h3>
                                    <div className='caption'>₹{getTwoFacePrice()}</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='productFrame'>
                        <span className="size-title">Frame</span>
                        <ul className="list">
                            <li className="list-inline-item">
                                <a className={`tag ${isFramed ? 'active' : ''}`} onClick={() => handleFrameSelection(true)}>
                                    <h3 className='face-opt'>Add Frame</h3>
                                    <div className='caption'>₹{getCurrentAmount(true)}</div>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className={`tag ${!isFramed ? 'active' : ''}`} onClick={() => handleFrameSelection(false)}>
                                    <h3 className='face-opt'>No Frame</h3>
                                    <div className='caption'>₹{getCurrentAmount(false)}</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='productImage'>
                    <span className="size-title">Select Image For Sketch<br /></span>
                    <div className="action-container">
                        <input
                            type="file"
                            id="uploadBtn"
                            className="file-input"
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="uploadBtn" className='file-label'>
                            <RiUpload2Fill />
                            {selectedFile ? 'Photo Selected' : 'Select Photo'}
                        </label>

                        <button className='btn-g' onClick={handleAddToCart}>
                            <RiShoppingCart2Line />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .product-options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: start;
    justify-items: start;

    .faceCount ul li a.active, .productFrame ul li a.active, .productSize ul li a.active {
      background: lightblue;
      border: 1px solid black !important;
    }

    .list {
      display: flex;
      gap: 0.8rem;
      margin: 0;
      padding-top: 0.5rem;
      list-style: none;

      .list-inline-item {
        .tag {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 60px;
          padding: 8px 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: background-color 0.3s;

          .face-opt {
            font-size: 12px;
            font-weight: 700;
            color: #555;
          }
        }

        &.disabled .tag {
          background-color: #f0f0f0;
          color: #999;
          cursor: not-allowed;
          pointer-events: none;
        }

        .paper-size-tag {
          width: 125px; 
        }

        .caption {
          margin-top: 5px;
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 1.125rem;
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .product {
    display: flex;
    width: 100%;
    height: auto;
    gap: 3rem;

    span {
      margin-right: 1rem;
    }
  }

  .file-input {
    display: none;
  }

  .size-title {
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .action-container {
    display: flex;
    flex-direction: row;
    gap: 3rem; /* Space between items */
    align-items: center; /* Align items vertically centered */
    margin-top: 0.5rem;
  }

  label {
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    color: #555;
    background: lightblue;
    text-align: center;
    padding: 8px 30px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
    user-select: none;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    transition: border 0.3s;

    &:hover {
      border: 1px solid black;
    }

    svg {
      margin-right: 8px; 
      font-size: 16px; 
      color: #555;
    }
  }

  .btn-g {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #555;
    background: lightblue;
    padding: 8px 30px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.5px;
    user-select: none;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    transition: background-color 0.3s, border 0.3s;

    &:hover {
      border: 1px solid #555;
    }

    svg {
      margin-right: 8px; 
      font-size: 16px; 
      color: #555; 
    }
  }
`;

export default ProductOptions;
