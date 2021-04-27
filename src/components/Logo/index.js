import React from 'react'

import { Link } from 'wouter'

import './index.css'
import logoBrand from '../../../public/img/logo.png'
import logoBrandWhite from '../../../public/img/logo-white.png'

export const Logo = ({ type }) => (
  <figure className='logo'>
    <Link to='/'>
      <img src={type === 'header' ? logoBrand : logoBrandWhite} alt='Brand Logo' width='105px' height='82px' loading='lazy' />
    </Link>
  </figure>
)
