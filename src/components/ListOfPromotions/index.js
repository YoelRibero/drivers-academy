import React from 'react'

import { db } from '../../utils/db'
import { Title } from '../Title'
import { PromotionCard } from '../PromotionCard'
import './index.css'

export const ListOfPromotions = () => (
  <section className='promotions'>
    <div className='wrapper'>
      <Title className='promotion__head-title'>Nuestros cursos</Title>
      <div className='promotion__list'>
        {
          db.promotions.map((promotion, index) => <PromotionCard key={index} {...promotion} />)
        }
      </div>
    </div>
  </section>
)
