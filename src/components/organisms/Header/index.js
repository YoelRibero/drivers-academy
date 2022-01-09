import React, { useState } from 'react'
import { useLocation } from 'wouter'

import { Logo } from '../../atoms/Logo'
import { Menu } from '../../molecules/Menu'
import { BurgerButton } from '../../atoms/BurgerButton'
import './index.css'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [location, setLocation] = useLocation()
  return (
    <>
      <header className='header' id='header'>
        <div className='wrapper'>
          <div className='header__container'>
            <section className='header__logo'>
              <Logo type='header' />
            </section>
            {
              location === '/' && (
                <>
                  <section className={`header__menu${showMenu ? ' show' : ''}`}>
                    <Menu handleShowMenu={setShowMenu} />
                  </section>
                  <BurgerButton
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                  />
                </>
              )
            }
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
