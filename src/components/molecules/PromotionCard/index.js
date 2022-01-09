import React from 'react'

import { Heading3, Heading4 } from '../../atoms/Headings'
import IconSedan from '../../../../public/img/icons/sedan.svg'
import './index.css'

export const PromotionCard = ({ title, subtitle, price, description }) => (
  <article className='promotion__card'>
    <IconSedan className='promotion__image' />
    <Heading3 className='promotion__title'>{title}</Heading3>
    <Heading4 className='promotion__subtitle'>{subtitle}</Heading4>
    <div className='promotion__price'>{price}</div>
    <ul className='promotion__list--description'>
      {
        description.map((el, index) => <li key={index} className='promotion__description muted'>{el}</li>)
      }
    </ul>
  </article>
)
