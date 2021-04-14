import React from 'react'

import './index.css'
import { ListOfPromotions } from './components/ListOfPromotions'
import { Footer } from './components/Footer'
import { WhatsappButton } from './components/WhatsappButton'

export const App = () => (
  <>
    <ListOfPromotions />
    <Footer />
    <WhatsappButton />
  </>
)
