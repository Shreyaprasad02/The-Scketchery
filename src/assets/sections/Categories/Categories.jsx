import React from 'react'
import './Categories.css'
import { categoryData } from '../../Constants'
import CategoriesCard from '../../Components/CategoriesCard'

const Categories = () => {
  return (
    <section id='categories'>
      <div className='title'>
        <h2>SHOP BY CATEGORIES</h2>
      </div>
      <div className='categories-container container'>
          {
            categoryData.map((category) => (
              <CategoriesCard key={category.imgURL} {...category}/>
            ))
          }
      </div>
    </section>
  )
}

export default Categories
