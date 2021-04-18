import React from 'react'

import { db } from '../../utils/db'
import './index.css'

export const Menu = () => (
  <nav className='menu'>
    <ul className='menu__list'>
      {
        db.menu.map((item, index) => (
          <li key={index} className='menu__item'>
            <a href={item.path} className='menu__action'>{item.name}</a>
          </li>
        ))
      }
    </ul>
  </nav>
)
