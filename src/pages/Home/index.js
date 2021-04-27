import React from 'react'

import { Layout } from '../../components/Layout'
import { AboutUs } from '../../components/AboutUs'
import { ListOfPromotions } from '../../components/ListOfPromotions'

export default function Home () {
  return (
    <Layout
      title='Inicio'
      description='Libra academia de choferes, hacemos la diferencia un futuros conductores'
    >
      <AboutUs />
      <ListOfPromotions />
    </Layout>
  )
}
