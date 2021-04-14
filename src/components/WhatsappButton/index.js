import React from 'react'

import './index.css'
import WppIcon from '../../../public/img/icons/whatsapp.svg'

export const WhatsappButton = () => (
  <div className='whatsapp__button'>
    <a href='https://wa.me/+59899004191?text=Hola%20me%20interesa%20saber%20sobre%20tu%20academia%20de%20choferes%20' target='_blank' rel='noreferrer'>
      <WppIcon />
    </a>
  </div>
)
