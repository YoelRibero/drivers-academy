import React from 'react'

export const Label = ({ children, id }) => (
  <label htmlFor={`option-${id}`}>{children}</label>
)
