import React from 'react'

import './index.css'

import carImage from '../../../public/img/car-image-hero.jpg'
import carImageMobile from '../../../public/img/car-image-hero-mobile.jpg'

export const Hero = () => (
  <figure className='hero__image'>
    <picture>
      <source srcSet={carImageMobile} media='(max-width: 801px)' />
      <img src={carImage} />
    </picture>
  </figure>
)
