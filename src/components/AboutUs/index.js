import React from 'react'

// import { Title } from '../Title'
import carImage from '../../../public/img/car-image-hero.jpg'
import carImageMobile from '../../../public/img/car-image-hero-mobile.jpg'
import './index.css'

export const AboutUs = () => (
  <section className='about-us' id='about-us'>
    <figure className='about-us__image'>
      <picture>
        <source srcSet={carImageMobile} media='(max-width: 801px)' />
        <img src={carImage} />
      </picture>
    </figure>
    <div className='wrapper'>
      <div className='about-us__info'>
        <h1 className='about-us__slogan'>Hacemos la diferencia en futuros conductores</h1>
        <p className='about-us__brief'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est culpa molestiae? Perferendis accusantium molestias reiciendis, nobis incidunt porro nihil.</p>
      </div>
    </div>
  </section>
)
