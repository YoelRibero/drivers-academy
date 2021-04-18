import React from 'react'

import './index.css'
import { Logo } from '../Logo'
import { ListOfSocialNetworks } from '../ListOfSocialNetworks'
import { Menu } from '../Menu'

export const Footer = () => (
  <footer className='footer' id='footer'>
    <div className='wrapper'>
      <div className='footer__container'>
        <section className='footer__brand'>
          <Logo type='footer' />
        </section>
        <section className='footer__social-networks'>
          <h3>Redes</h3>
          <ListOfSocialNetworks />
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
