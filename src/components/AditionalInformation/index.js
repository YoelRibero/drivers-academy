import React from 'react'

import './index.css'
import GuideIcon from '../../../public/img/icons/guide.svg'
import InstitutionsIcon from '../../../public/img/icons/institutions.svg'
import guideFile from '../../../public/files/conduction-guide.pdf'
import institutionsFile from '../../../public/files/enabled-institutions.pdf'

export const AditionalInformation = () => (
  <section className='aditional-information'>
    <figure className='adition-information__item guide'>
      <a href={guideFile} target='_blank' rel='noreferrer'>
        <GuideIcon />
        <p>Guía nacional de conducción</p>
      </a>
    </figure>
    <figure className='adition-information__item institutions'>
      <a href={institutionsFile} target='_blank' rel='noreferrer'>
        <InstitutionsIcon />
        <p>Instituciones médicas habilitadas</p>
      </a>
    </figure>
  </section>
)
