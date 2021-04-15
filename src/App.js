import React from 'react'

import './index.css'
import { Header } from './components/Header'
import { ListOfPromotions } from './components/ListOfPromotions'
import { Footer } from './components/Footer'
import { WhatsappButton } from './components/WhatsappButton'

export const App = () => (
  <>
    <Header />
    <ListOfPromotions />
    <Footer />
    <WhatsappButton />
  </>
)
