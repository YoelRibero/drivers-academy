import React from 'react'

import { Route, Router, Switch } from 'wouter'

import useHashLocation from './hooks/useHashLocation'
import './index.css'
import { Header } from './components/organisms/Header'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import { NotFound } from './pages/NotFound'
import { Footer } from './components/organisms/Footer'
import { WhatsappButton } from './components/atoms/WhatsappButton'

export const App = () => (
  <Router hook={useHashLocation}>
    <Header />
    <Switch>
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={QuizPage}
        path='/preguntas'
      />
      <Route
        component={NotFound}
      />
    </Switch>
    <Footer />
    <WhatsappButton />
  </Router>
)
