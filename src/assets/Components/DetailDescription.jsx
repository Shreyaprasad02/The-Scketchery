import React, { useState } from 'react';
import { Button, Button as MuiButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import Review1 from '../Images/Review1.jpg';

const DetailDescription = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <section id='detaildescription'>
      <Wrapper>
        <div className='customTabs'>
          <ul className='list list-inline'>
            <li>
              <StyledButton
                onClick={() => setActiveTab('description')}
                className={activeTab === 'description' ? 'active' : ''}
              >
                Description
              </StyledButton>
            </li>
            <li>
              <StyledButton
                onClick={() => setActiveTab('reviews')}
                className={activeTab === 'reviews' ? 'active' : ''}
              >
                Reviews (20)
              </StyledButton>
            </li>
          </ul>
          <br />
          <div className='tabContent'>
            {activeTab === 'description' && (
              <>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae fuga aliquid consectetur voluptatibus consequuntur animi, incidunt corrupti cum tempore quam veniam tenetur quaerat dicta quisquam dolorum eveniet vitae aspernatur!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae fuga aliquid consectetur voluptatibus consequuntur animi, incidunt corrupti cum tempore quam veniam tenetur quaerat dicta quisquam dolorum eveniet vitae aspernatur!</p>
                <br />
                <h3>Features</h3>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae fuga aliquid consectetur voluptatibus consequuntur animi, incidunt corrupti cum tempore quam veniam tenetur quaerat dicta quisquam dolorum eveniet vitae aspernatur!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae fuga aliquid consectetur voluptatibus consequuntur animi, incidunt corrupti cum tempore quam veniam tenetur quaerat dicta quisquam dolorum eveniet vitae aspernatur!</p>
              </>
            )}
            {activeTab === 'reviews' && (
              <>
                <div className='tabContent'>
                  <div className='row'>
                    <div className='col-md-9'>
                      <h3>Customer questions & answers</h3>
                      <br />
                      <div className='card p-3 reviewCard flex-row'>

                        <div className='info pl-5'>
                          <div className="review-container">
                            <div className="reviewer-details">
                              <div className="reviewer-name">John Doe</div>
                              <h5 className="review-time">December 4, 2024 at 3:12pm</h5>
                            </div>
                            <Rating
                              name="half-rating-read"
                              defaultValue={4.5}
                              precision={0.5}
                              readOnly
                              sx={{ fontSize: '16px' }}
                            />
                          </div>

                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Saepe odio voluptate assumenda fugit! Deserunt quaerat
                            minima repellat nostrum eaque illo in ad aut aperiam.
                            Officia veniam et nulla commodi repellat.</p>
                        </div>
                      </div>

                      <br /><br />

                      <form className='reviewForm'>
                        <h4>Add a review</h4>
                        <br />
                        <div className='form-group'>
                          <textarea className='form-control' placeholder='Your review'></textarea>
                        </div>

                        <div className='flex-row'>
                          <div className='form-group'>
                            <input type='text' className='form-control' placeholder='Your name' />
                          </div>
                          <div className='form-group'>
                            <input type='text' className='form-control' placeholder='Your email' />
                          </div>
                        </div>

                        <br />
                        <div className='form-group'>
                          <Button className='btn-g btn'>Submit Review</Button>
                        </div>
                      </form>

                    </div>
                    <div className='col-md-3'>
                      <h3>Customer Review</h3>
                      <br />
                      <div className='d-flex align-items-center'>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <strong className='ml-3'> 4.8 out of 5</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  .customTabs ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .customTabs ul li {
    margin-right: 25px; 
  }
  
  .customTabs ul li:last-child {
    margin-right: 0; 
  }
  
  .tabContent {
    margin-top: 20px;
  }

  .tabContent h3 {
    font-weight: 500;
    font-size: 18px;
  }

  .info p{
    font-size: 12px;
  }

  .review-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  padding-right: 15px;
  gap:25rem;
}

.reviewer-details {
  display: flex;
  align-items: center;
  gap: 10px;
}

.reviewer-name {
  font-size: 14px;
  font-weight: 500;
  color: #333; 
}

.review-time {
  color: grey; 
}

  .card {
    border-radius: 10px !important;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding-top:1rem;
    padding-bottom:1rem;
    padding-left:1rem;
    padding-right:0;
  }

  .row {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1.8fr 1fr;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    gap:1rem;
  }

  .flex-row .form-group {
    flex: 1;
  }

  .form-control {
    width: 100%;
    border-radius: 5px;
    font-size: 12px;
  }

  .reviewForm .form-group {
    margin-bottom: 8px;
  }

  .reviewForm .form-group textarea,
  .reviewForm .form-group input[type="text"] {
    height: 50px; /* Adjust the height as needed */
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.2);
  }

  .reviewForm .form-group textarea {
    height: 100px; /* Adjust the height as needed */
  }

  .d-flex{
    display: flex;
    align-item:center;
    gap:0.5rem;
  }

`;

const StyledButton = styled(MuiButton)`
  padding: 10px 25px !important;
  border: 1px solid rgba(0,0,0,0.2) !important;
  font-size: 14px !important;
  text-transform: capitalize !important;
  border-radius: 30px !important;
  color: #000 !important;
  font-weight: 600 !important;
  &.active {
    background-color: #e0e0e0 !important;
    border-color: #000 !important;
  }
`;

export default DetailDescription;
