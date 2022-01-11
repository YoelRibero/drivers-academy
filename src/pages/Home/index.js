import React from 'react'

import { Layout } from 'organisms/Layout'
import { AboutUs } from 'organisms/AboutUs'
import { WhoWeAre } from 'organisms/WhoWeAre'
import { ListOfPromotions } from 'organisms/ListOfPromotions'
import { Requirements } from 'organisms/Requirements'

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
