import React from 'react'
import './NotFound.css'
import NotFound404 from './../../Images/NotFound404.png' 
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='notFound'>
            <div className='container-fluid'>
               <div className='box'>
                <img src={NotFound404} className='notfoundimage'/>
                <p>The link you clicked may be broken or the page may have been removed.
                     Vist the Homepage or Contactus about the problem</p>
                <br/>  
                <div className='d-flex'>
                    <Link to={'/'}><Button className='btn-g btn-lg'>Back To Home Page</Button></Link>
                </div>   
               </div>
            </div>
        </section>
    )
}

export default NotFound
