import React from 'react'

import { Hero } from '../Hero'
import './index.css'

export const AboutUs = () => (
  <section className='about-us' id='about-us'>
    <Hero />
    <div className='wrapper'>
      <div className='about-us__info'>
        <h1 className='about-us__slogan'>Hacemos la diferencia en futuros conductores</h1>
        <p className='about-us__brief'>Libra nace del amor por manejar y la vocación por enseñar</p>
      </div>
    </div>
  </section>
)
