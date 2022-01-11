import React from 'react'

import './index.css'

import carImage from 'images/car-image-hero.jpg'
import carImageMobile from 'images/car-image-hero-mobile.jpg'

export const Hero = () => (
  <figure className='hero__image'>
    <picture>
      <source srcSet={carImageMobile} media='(max-width: 801px)' />
      <img src={carImage} />
    </picture>
  </figure>
)
