import React from 'react'

import { Link } from 'wouter'

import './index.css'
import LogoBrand from '../../../public/img/logo.svg'
import LogoBrandWhite from '../../../public/img/logo-white.svg'

export const Logo = ({ type }) => (
  <figure className='logo'>
    <Link to='/'>
      {
        type === 'header' ? <LogoBrand /> : <LogoBrandWhite />
      }
    </Link>
  </figure>
)
