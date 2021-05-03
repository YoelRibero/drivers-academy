/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'

import { db } from '../../utils/db'

import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'

import './index.css'

export default function QuizPage () {
  const [questions, setQuestions] = useState(db.questions)
  const [answereQuestions, setAnswereQuestions] = useState([])
  const [showAnswers, setShowAnsweres] = useState(false)
  const [result, setResult] = useState({})

  const handleChange = (isCorrect, id) => {
    const isQuestion = answereQuestions.some(element => Number(element.idQuestion) === Number(id))

    if (!isQuestion) {
      setAnswereQuestions(oldQuestion => [...oldQuestion, {
        idQuestion: id,
        isCorrect: isCorrect
      }])
    } else {
      const currentQuestion = answereQuestions.filter(element => Number(element.idQuestion) !== Number(id))
      setAnswereQuestions([...currentQuestion, {
        idQuestion: id,
        isCorrect: isCorrect
      }])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const correctQuestions = answereQuestions.filter(correct => correct.isCorrect)
    const incorrectQuestions = answereQuestions.filter(correct => !correct.isCorrect)

    setResult({
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
              showAnswers
                ? <p>Contestaste correctamente {result.trueQuestions} de {questions.length}</p>
                : <form onSubmit={handleSubmit} className='quiz__form'>
                  <ol>
                    {
                      questions.map(({ id, quiz, options }) => (
                        <li key={id} className='quiz__form--question'>
                          <p>{quiz}</p>
                          {
                            options.map(({ idOption, value, isCorrect }, index) => (
                              <div key={index} className='quiz__form--options'>
                                <input
                                  type='radio'
                                  id={`option-${idOption}`}
                                  name={`quiz-${id}`}
                                  value={isCorrect}
                                  onChange={() => handleChange(isCorrect, id)}
                                />
                                <label htmlFor={`option-${idOption}`}>{value}</label>
                              </div>
                            ))
                          }
                        </li>
                      ))
                    }
                  </ol>
                  <div className='quiz__form--action'>
                    <button className='button'>Enviar</button>
                  </div>
                </form>
            }
          </section>
        </div>
      </main>
    </Layout>
  )
}
