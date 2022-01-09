import React from 'react'

export const Input = ({ id, name, onChange, type, value }) => (
  <input
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    type={type}
  />
)
