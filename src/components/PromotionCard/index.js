import React from 'react'

import sedan from '../../../public/img/sedan.svg'
import './index.css'

export const PromotionCard = ({ title, subtitle, price, description }) => (
  <article className='promotion__card'>
    <img className='promotion__image' src={sedan} alt='Sedan Icon' />
    <h2 className='promotion__title'>{title}</h2>
    <h4 className='promotion__subtitle'>{subtitle}</h4>
    <div className='promotion__price'>{price}</div>
    <ul className='promotion__list--description'>
      {
        description.map((el, index) => <li key={index} className='promotion__description'>{el}</li>)
      }
    </ul>
  </article>
)
