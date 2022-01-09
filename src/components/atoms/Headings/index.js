import React from 'react'

export const Heading1 = ({ children, nameClass }) => (
  <h1 className={nameClass}>{children}</h1>
)

export const Heading2 = ({ children, nameClass }) => (
  <h2 className={nameClass}>{children}</h2>
)

export const Heading3 = ({ children, nameClass }) => (
  <h3 className={nameClass}>{children}</h3>
)

export const Heading4 = ({ children, nameClass }) => (
  <h4 className={nameClass}>{children}</h4>
)

export const Heading5 = ({ children, nameClass }) => (
  <h5 className={nameClass}>{children}</h5>
)

export const Heading6 = ({ children, nameClass }) => (
  <h6 className={nameClass}>{children}</h6>
)
