import React from 'react'

import { Title } from '../Title'
import IconSedan from '../../../public/img/icons/sedan.svg'
import './index.css'

export const PromotionCard = ({ title, subtitle, price, description }) => (
  <article className='promotion__card'>
    <IconSedan className='promotion__image' />
    <Title className='promotion__title'>{title}</Title>
    <h4 className='promotion__subtitle'>{subtitle}</h4>
    <div className='promotion__price'>{price}</div>
    <ul className='promotion__list--description'>
      {
        description.map((el, index) => <li key={index} className='promotion__description muted'>{el}</li>)
      }
    </ul>
  </article>
)
