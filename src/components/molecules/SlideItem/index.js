import React from 'react'

export const SlideItem = ({ slideDesk, slideMobile }) => (
  <picture>
    <source srcSet={slideMobile} media='(max-width: 801px)' />
    <img src={slideDesk} />
  </picture>
)
