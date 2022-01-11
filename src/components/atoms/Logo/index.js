import React from 'react'

import { Link } from 'wouter'

import './index.css'
import LogoBrand from 'images/logo.svg'
import LogoBrandWhite from 'images/logo-white.svg'

export const Logo = ({ type }) => (
  <figure className='logo'>
    <Link to='/'>
      {
        type === 'header' ? <LogoBrand /> : <LogoBrandWhite />
      }
    </Link>
  </figure>
)
