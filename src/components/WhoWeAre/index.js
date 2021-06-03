import React from 'react'
import Carousel from 'react-elastic-carousel'

import { Title } from '../Title'
import slideOne from '../../../public/img/slide/slide-1.jpg'
import slideOneMobile from '../../../public/img/slide/slide-1-mobile.jpg'
import slideTwo from '../../../public/img/slide/slide-2.jpg'
import slideTwoMobile from '../../../public/img/slide/slide-2-mobile.jpg'
import slideThree from '../../../public/img/slide/slide-3.jpg'
import slideThreeMobile from '../../../public/img/slide/slide-3-mobile.jpg'
import slideFour from '../../../public/img/slide/slide-4.jpg'
import slideFourMobile from '../../../public/img/slide/slide-4-mobile.jpg'
import './index.css'

export const WhoWeAre = () => {
  const breakpoint = [
    { width: 1, itemsToShow: 1 }
  ]
  return (
    <section className='who-we-are' id='who-we-are'>
      <div className='wrapper'>
        <Title>¿Por qué elegirnos?</Title>
        <p>Tenemos la mejor flota para poder dar el exámen con comodidad y seguridad.</p>
        <Carousel breakpoints={breakpoint}>
          <picture>
            <source srcSet={slideOneMobile} media='(max-width: 801px)' />
            <img src={slideOne} />
          </picture>
          <picture>
            <source srcSet={slideTwoMobile} media='(max-width: 801px)' />
            <img src={slideTwo} />
          </picture>
          <picture>
            <source srcSet={slideThreeMobile} media='(max-width: 801px)' />
            <img src={slideThree} />
          </picture>
          <picture>
            <source srcSet={slideFourMobile} media='(max-width: 801px)' />
            <img src={slideFour} />
          </picture>
        </Carousel>
      </div>
    </section>
  )
}
