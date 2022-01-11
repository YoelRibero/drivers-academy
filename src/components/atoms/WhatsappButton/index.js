import React from 'react'

import './index.css'
import { db } from 'utils/db'
import WppIcon from 'images/icons/whatsapp.svg'

export const WhatsappButton = () => (
  <div className='whatsapp__button'>
    <a href={db.socialNetworks[0].path} target='_blank' rel='noreferrer'>
      <WppIcon />
    </a>
  </div>
)
