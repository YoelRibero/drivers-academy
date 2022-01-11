import React from 'react'

import { Hero } from 'molecules/Hero'
import { Heading1 } from 'atoms/Headings'
import { Description } from 'atoms/Description'
import './index.css'

export const AboutUs = () => (
  <section className='about-us' id='about-us'>
    <Hero />
    <div className='wrapper'>
      <div className='about-us__info'>
        <Heading1 nameClass='about-us__slogan'>Hacemos la diferencia en futuros conductores</Heading1>
        <Description nameClass='about-us__brief'>Libra nace del amor por manejar y la vocación por enseñar</Description>
      </div>
    </div>
  </section>
)
