import React from 'react'

export const Button = ({ children, nameClass }) => (
  <button className={`button ${nameClass}`}>{children}</button>
)
