import React from 'react'

import { db } from '../../../utils/db'
import { Heading2 } from '../../atoms/Headings'
import { PromotionCard } from '../../molecules/PromotionCard'
import './index.css'

export const ListOfPromotions = () => (
  <section className='promotions'>
    <div className='wrapper'>
      <Heading2 nameClass='promotion__head-title'>Nuestros cursos</Heading2>
      <div className='promotion__list'>
        {
          db.promotions.map((promotion, index) => <PromotionCard key={index} {...promotion} />)
        }
      </div>
    </div>
  </section>
)
