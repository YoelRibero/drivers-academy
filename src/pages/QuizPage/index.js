import React, { useState, useEffect } from 'react'

import { db } from '../../utils/db'

import { Layout } from '../../components/Layout'
import { Title } from '../../components/Title'

import './index.css'

export default function QuizPage () {
  const [questions, setQuestions] = useState(db.questions)
  const [unsortedQuestions, setUnsortedQuestions] = useState([])
  const [answereQuestions, setAnswereQuestions] = useState([])
  const [showAnswers, setShowAnsweres] = useState(false)
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setUnsortedQuestions(questions.map(question => {
      const random = Math.floor(Math.random() * (100 - 1)) + 1
      return { order: random, question }
    }).sort((a, b) => {
      return a.order > b.order ? 1 : -1
    }))
  }, [])

  const handleChange = (isCorrect, id) => {
    const isQuestion = answereQuestions.some(element => element.idQuestion === id)

    if (!isQuestion) {
      setAnswereQuestions(oldQuestion => [...oldQuestion, {
        idQuestion: id,
        isCorrect
      }])
    } else {
      const currentQuestion = answereQuestions.filter(element => element.idQuestion !== id)
      setAnswereQuestions([...currentQuestion, {
        idQuestion: id,
        isCorrect
      }])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
              loading
                ? <p>Cargando...</p>
                : showAnswers
                  ? <p>Contestaste correctamente <span>{result.trueQuestions}</span> de <span>{questions.length}</span>{result.trueQuestions === questions.length && '. Felicitaciones! 🎉🎊'}</p>
                  : <form onSubmit={handleSubmit} className='quiz__form'>
                    <ol>
                      {
                        unsortedQuestions.map(({ question: { id, quiz, options } }) => {
                          return (
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
                          )
                        })
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
