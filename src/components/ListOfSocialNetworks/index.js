import React from 'react'

import { db } from '../../utils/db'
import IconFb from '../../../public/img/icons/facebook.svg'
import IconIt from '../../../public/img/icons/instagram.svg'
import './index.css'

export const ListOfSocialNetworks = () => (
  <ul className='social__list'>
    {
      db.socialNetworks.map((social, index) => (
        <li className='social__item' key={index}>
          <a href={social.path} target='_blank' rel='noreferrer'>
            {
              social.icon === 'iconFb'
                ? <IconFb />
                : <IconIt />
            }
          </a>
        </li>
      ))
    }
  </ul>
)
