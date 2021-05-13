import React from 'react'

import { Title } from '../Title'
import './index.css'

export const Requirements = () => (
  <section className='requirements' id='requirements'>
    <div className='wrapper'>
      <Title>Requisitos para incio de clases</Title>
      <nav className='requirements-nav'>
        <ul className='requirements-list'>
          <li className='requirements-item'>Dos fotocopias de la cédula identidad</li>
          <li className='requirements-item'>Recibo y papel médico expedido en los laboratorios autorizados por la IMM</li>
          <li className='requirements-item'>Pago de primera clase</li>
          <li className='requirements-item'>Si posee libreta de moto, fotocopia de la misma para la extracción del teórico</li>
        </ul>
      </nav>
    </div>
  </section>
)
