import React from 'react'

import { Hero } from '../../components/Hero'
import './index.css'

export const NotFound = () => (
  <section className='not-found'>
    <Hero />
    <div className='wrapper'>
      <div className='not-found__container'>
        <p>Opa! No pudimos encontrar lo que estas buscando.<br /> Intentá con otra url o volvé al inicio haciendo click en el logo 😎.</p>
      </div>
    </div>
  </section>
)
