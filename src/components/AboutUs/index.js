import React from 'react'

import { Title } from '../Title'
import carImage from '../../../public/img/car-image.jpg'
import './index.css'

export const AboutUs = () => (
  <section className='about-us' id='about-us'>
    <div className='wrapper'>
      <div className='about-us__container'>
        <figure className='about-us__image'>
          <img src={carImage} alt='Car Academy Image' />
        </figure>
        <div className='about-us__info'>
          <Title className='about-us__brief'>Hacemos la diferencia en futuros conductores</Title>
          <p className='about-us__description muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est culpa molestiae? Perferendis accusantium molestias reiciendis, nobis incidunt porro nihil.</p>
        </div>
      </div>
    </div>
  </section>
)
