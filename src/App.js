import React, { useState, useEffect } from 'react'

import { Route, Router, Switch } from 'wouter'

import './index.css'
import { Header } from './components/Header'
import Home from './pages/Home'
import QuizPage from './pages/QuizPage'
import { NotFound } from './pages/NotFound'
import { Footer } from './components/Footer'
import { WhatsappButton } from './components/WhatsappButton'

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, '') || '/'
}

const navigate = (to) => (window.location.hash = to)

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation())

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation())

    // subscribe to hash changes
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return [loc, navigate]
}

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
