import React from 'react'
import Carousel from 'react-elastic-carousel'

import { Title } from '../Title'
import carImage from '../../../public/img/car-image-slide.jpg'
import carImageMobile from '../../../public/img/car-image-slide-mobile.jpg'
import './index.css'

export const WhoWeAre = () => {
  const breakpoint = [
    { width: 1, itemsToShow: 1 }
  ]
  return (
    <section className='who-we-are'>
      <div className='wrapper'>
        <Title>¿Por qué elegirnos?</Title>
        <p>Tenemos la mejor flota para poder dar el exámen con comodidad y seguridad.</p>
        <Carousel breakpoints={breakpoint}>
          <picture>
            <source srcset={carImageMobile} media='(max-width: 801px)' />
            <img src={carImage} />
          </picture>
          <picture>
            <source srcset={carImageMobile} media='(max-width: 801px)' />
            <img src={carImage} />
          </picture>
          <picture>
            <source srcset={carImageMobile} media='(max-width: 801px)' />
            <img src={carImage} />
          </picture>
          <picture>
            <source srcset={carImageMobile} media='(max-width: 801px)' />
            <img src={carImage} />
          </picture>
        </Carousel>
      </div>
    </section>
  )
}
