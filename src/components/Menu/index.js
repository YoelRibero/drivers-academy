import React from 'react'
import { Link } from 'react-scroll'

import { db } from '../../utils/db'
import './index.css'

export const Menu = () => (
  <nav className='menu'>
    <ul className='menu__list'>
      {
        db.menu.map((item, index) => (
          <li key={index} className='menu__item'>
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='menu__action'
            >
              {item.name}
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
)
