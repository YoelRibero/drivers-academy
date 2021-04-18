import React, { useState } from 'react'

import { Logo } from '../Logo'
import { Menu } from '../Menu'
import { BurgerButton } from '../BurgerButton'
import './index.css'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='header__container'>
            <section className='header__logo'>
              <Logo type='header' />
            </section>
            <section className={`header__menu${showMenu ? ' show' : ''}`}>
              <Menu />
            </section>
            <BurgerButton
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
        </div>
      </header>
      {
        showMenu &&
          <div className='overlay' onClick={() => setShowMenu(false)} />
      }
    </>
  )
}
