import React from 'react'

import { Helmet } from 'react-helmet'
import IconPage from 'images/logo.ico'

export const Layout = ({ children, title, description }) => (
  <>
    <Helmet>
      {title && <title>{title} | Libra Academia de choferes 🚧</title>}
      {description && <meta name='description' content={description} />}
      <link rel='icon' type='image/png' sizes='32x32' href={IconPage} />
    </Helmet>
    {children}
  </>
)
