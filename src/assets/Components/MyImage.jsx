import React, { useState } from 'react';
import styled from 'styled-components';


const MyImage = ({ imgs = [{url: ""}]}) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <Wrapper>
      <div className='grid grid-four-column'>
        {
          imgs.map((curElm, index) =>{
              return(
                <figure key={index}>
                  <img src={curElm.url} alt={curElm.filename} className='box-image-style' onClick={() => setMainImage(curElm)}/>
                </figure>
              )
          })
        }
      </div>

      <div className='main-screen'>
      <img src={mainImage.url} alt={mainImage.filename} className='product-zoom'/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.22fr 1fr;
  gap:1rem;


  .grid {
    flex-direction:row;
    justify-items:center;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

    img{
      max-width:100%;
      max-height: 80%;
      background-size: cover;
      object-fit:contain;
      cursor: pointer;
    }



  .main-screen{
   display:grid;
   place-items: center;
   order:1;
   img{
   max-width:100%;
   height: auto;
   }
  }

  .grid-four-column{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr)
  }

`;

export default MyImage;
