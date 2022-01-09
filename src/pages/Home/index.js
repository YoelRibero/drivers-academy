import React from 'react'

import { Layout } from '../../components/organisms/Layout'
import { AboutUs } from '../../components/organisms/AboutUs'
import { WhoWeAre } from '../../components/organisms/WhoWeAre'
import { ListOfPromotions } from '../../components/organisms/ListOfPromotions'
import { Requirements } from '../../components/organisms/Requirements'

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
