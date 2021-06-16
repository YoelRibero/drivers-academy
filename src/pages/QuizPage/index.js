import React, { useState } from 'react'

import { db } from '../../utils/db'

import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'
import { FormQuestions } from '../../components/FormQuestions'
import { Results } from '../../components/Results'

import './index.css'

export default function QuizPage () {
  const [questions, setQuestions] = useState(db.questions)
  const [answereQuestions, setAnswereQuestions] = useState([])
  const [showAnswers, setShowAnsweres] = useState(false)
  const [results, setResults] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    const correctQuestions = answereQuestions.filter(correct => correct.isCorrect)
    const incorrectQuestions = answereQuestions.filter(correct => !correct.isCorrect)

    setResults({
      trueQuestions: correctQuestions.length,
      falseQuestions: incorrectQuestions.length
    })

    setShowAnsweres(true)
  }

  return (
    <Layout
      title='Simulacro de prueba'
      description='Simulacro de prueba, hacemos la diferencia un futuros conductores'
    >
      <main className='main'>
        <div className='wrapper'>
          <Title>Simulacro de exámen</Title>
          <section className='quiz__container'>
            {
              loading
                ? <p>Cargando...</p>
                : showAnswers
                  ? <Results
                      questions={questions}
                      results={results}
                    />
                  : <FormQuestions
                      questions={questions}
                      answereQuestions={answereQuestions}
                      setAnswereQuestions={setAnswereQuestions}
                      handleSubmit={handleSubmit}
                    />
            }
          </section>
        </div>
      </main>
    </Layout>
  )
}
