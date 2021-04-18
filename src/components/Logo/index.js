import React from 'react'

import logoBrand from '../../../public/img/logo.png'
import logoBrandWhite from '../../../public/img/logo-white.png'

export const Logo = ({ type }) => (
  <figure className='logo'>
    <img src={type === 'header' ? logoBrand : logoBrandWhite} alt='Brand Logo' width='105px' />
  </figure>
)
