import React from 'react'

import { promotions } from '../../utils/db.json'
import { PromotionCard } from '../PromotionCard'
import './index.css'

export const ListOfPromotions = () => (
  <section className='promotions'>
    <div className='promotion__list'>
      {
        promotions.map((promotion, index) => <PromotionCard key={index} {...promotion} />)
      }
    </div>
  </section>
)
