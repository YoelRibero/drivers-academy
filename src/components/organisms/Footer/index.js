import React from 'react'

import './index.css'
import { Logo } from '../../atoms/Logo'
import { ListOfSocialNetworks } from '../../molecules/ListOfSocialNetworks'
import { Menu } from '../../molecules/Menu'
import { Heading3 } from '../../atoms/Headings'

export const Footer = () => (
  <footer className='footer' id='footer'>
    <div className='wrapper'>
      <div className='footer__container'>
        <section className='footer__brand'>
          <Logo type='footer' />
        </section>
        <section className='footer__social-networks'>
          <Heading3>Redes</Heading3>
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
