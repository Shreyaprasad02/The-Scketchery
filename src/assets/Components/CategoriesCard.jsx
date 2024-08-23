import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesCard = ({ imgURL, title, link }) => {
  return (
    <Link to={link} className='categories-card'>
      <img src={imgURL} alt='' />
      <h4>{title}</h4>
    </Link>
  )
}

export default CategoriesCard
