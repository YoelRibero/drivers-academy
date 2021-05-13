import React from 'react'

import { Layout } from '../../components/Layout'
import { AboutUs } from '../../components/AboutUs'
import { WhoWeAre } from '../../components/WhoWeAre'
import { ListOfPromotions } from '../../components/ListOfPromotions'
import { Requirements } from '../../components/Requirements'

export default function Home () {
  return (
    <Layout
      title='Inicio'
      description='Libra academia de choferes, hacemos la diferencia un futuros conductores'
    >
      <AboutUs />
      <WhoWeAre />
      <ListOfPromotions />
      <Requirements />
    </Layout>
  )
}
