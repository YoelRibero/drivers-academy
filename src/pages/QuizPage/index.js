import React from 'react'

import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'

export default function QuizPage () {
  return (
    <Layout
      title='Simulacro de prueba'
      description='Simulacro de prueba, hacemos la diferencia un futuros conductores'
    >
      <div className='wrapper'>
        <Title>Quiz App</Title>
      </div>
    </Layout>
  )
}
