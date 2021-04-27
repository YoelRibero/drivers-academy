import React from 'react'
import { Link as InternalLink } from 'react-scroll'
import { Link as ExternalLink } from 'wouter'

import { db } from '../../utils/db'
import './index.css'

export const Menu = () => (
  <nav className='menu'>
    <ul className='menu__list'>
      {
        db.menu.map((item, index) => (
          <li key={index} className='menu__item'>
            {
              item.externalLink
                ? <ExternalLink className='menu__action' to={item.path}>{item.name}</ExternalLink>
                : <InternalLink
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='menu__action'
                  >
                  {item.name}
              </InternalLink>
            }
          </li>
        ))
      }
    </ul>
  </nav>
)
