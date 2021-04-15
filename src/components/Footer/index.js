import React from 'react'

import { socialNetworks } from '../../utils/db.json'
import './index.css'
import { Logo } from '../Logo'
import { Menu } from '../Menu'
import IconFb from '../../../public/img/icons/facebook.svg'
import IconIt from '../../../public/img/icons/instagram.svg'

export const Footer = () => (
  <footer className='footer'>
    <div className='wrapper'>
      <div className='footer__container'>
        <section className='footer__brand'>
          <Logo />
          <section className='footer__social-networks'>
            <ul className='footer__social--list'>
              {
                socialNetworks.map((social, index) => (
                  <li className='footer__social--item' key={index}>
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
          </section>
        </section>
        <section className='footer__menu'>
          <Menu />
        </section>
        <section className='footer__copyright'>
          <small className='muted'>© 2021 Libra - Academia de choferes</small>
        </section>
      </div>
    </div>
  </footer>
)
