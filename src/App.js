import React from 'react'

import { Route } from 'wouter'

import './index.css'
import { Header } from './components/Header'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import { Footer } from './components/Footer'
import { WhatsappButton } from './components/WhatsappButton'

export const App = () => (
  <>
    <Header />
    <Route
      component={Home}
      path='/'
    />
    <Route
      component={QuizPage}
      path='/quiz'
    />
    <Footer />
    <WhatsappButton />
  </>
)
