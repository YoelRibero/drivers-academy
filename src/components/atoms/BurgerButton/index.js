import React from 'react'

import './index.css'

export const BurgerButton = ({ setShowMenu, showMenu }) => (
  <div
    onClick={() => setShowMenu(!showMenu)}
    className={`burger__button${showMenu ? ' show' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
)
