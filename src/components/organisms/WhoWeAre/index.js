import React from 'react'
import Carousel from 'react-elastic-carousel'

import { Heading2 } from '../../atoms/Headings'
import { Description } from '../../atoms/Description'
import { SlideItem } from '../../molecules/SlideItem'
import slideOne from '../../../../public/img/slide/slide-1.jpg'
import slideOneMobile from '../../../../public/img/slide/slide-1-mobile.jpg'
import slideTwo from '../../../../public/img/slide/slide-2.jpg'
import slideTwoMobile from '../../../../public/img/slide/slide-2-mobile.jpg'
import slideThree from '../../../../public/img/slide/slide-3.jpg'
import slideThreeMobile from '../../../../public/img/slide/slide-3-mobile.jpg'
import slideFour from '../../../../public/img/slide/slide-4.jpg'
import slideFourMobile from '../../../../public/img/slide/slide-4-mobile.jpg'
import slideFive from '../../../../public/img/slide/slide-5.jpg'
import slideFiveMobile from '../../../../public/img/slide/slide-5-mobile.jpg'
import slideSix from '../../../../public/img/slide/slide-6.jpg'
import slideSixMobile from '../../../../public/img/slide/slide-6-mobile.jpg'
import slideSeven from '../../../../public/img/slide/slide-7.jpg'
import slideSevenMobile from '../../../../public/img/slide/slide-7-mobile.jpg'
import './index.css'

const slides = [
  {
    slideMobile: slideOneMobile,
    slideDesk: slideOne
  },
  {
    slideMobile: slideTwoMobile,
    slideDesk: slideTwo
  },
  {
    slideMobile: slideThreeMobile,
    slideDesk: slideThree
  },
  {
    slideMobile: slideFourMobile,
    slideDesk: slideFour
  },
  {
    slideMobile: slideFiveMobile,
    slideDesk: slideFive
  },
  {
    slideMobile: slideSixMobile,
    slideDesk: slideSix
  },
  {
    slideMobile: slideSevenMobile,
    slideDesk: slideSeven
  }
]

export const WhoWeAre = () => {
  const breakpoint = [
    { width: 1, itemsToShow: 1 }
  ]
  return (
    <section className='who-we-are' id='who-we-are'>
      <div className='wrapper'>
        <Heading2>¿Por qué elegirnos?</Heading2>
        <Description>Tenemos la mejor flota para poder dar el exámen con comodidad y seguridad, respetando los protocolos de seguridad correspondientes.</Description>
        <Carousel breakpoints={breakpoint}>
          {
            slides.map(({ slideMobile, slideDesk }, index) => (
              <SlideItem
                key={index}
                slideDesk={slideDesk}
                slideMobile={slideMobile}
              />
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}
