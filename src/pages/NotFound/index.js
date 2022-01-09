import React from 'react'

import { Hero } from '../../components/molecules/Hero'
import { Description } from '../../components/atoms/Description'
import './index.css'

export const NotFound = () => (
  <section className='not-found'>
    <Hero />
    <div className='wrapper'>
      <div className='not-found__container'>
        <Description>Opa! No pudimos encontrar lo que estás buscando.<br /> Intentá con otra url o volvé al inicio haciendo click en el logo 😎.</Description>
      </div>
    </div>
  </section>
)
