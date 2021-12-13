import React, { useState, useEffect } from 'react'

import { Question } from '../Question'
import './index.css'

export const FormQuestions = ({ questions, handleSubmit, answereQuestions, setAnswereQuestions }) => {
  const [unsortedQuestions, setUnsortedQuestions] = useState([])

  useEffect(() => {
    setUnsortedQuestions(questions.map(question => {
      const random = Math.floor(Math.random() * (100 - 1)) + 1
      return { order: random, question }
    }).sort((a, b) => {
      return a.order > b.order ? 1 : -1
    }))
  }, [])

  const handleChange = (isCorrect, id, quiz, options) => {
    const isQuestion = answereQuestions.some(element => element.idQuestion === id)

    if (!isQuestion) {
      setAnswereQuestions(oldQuestion => [...oldQuestion, {
        idQuestion: id,
        isCorrect,
        quiz,
        options
      }])
    } else {
      const currentQuestion = answereQuestions.filter(element => element.idQuestion !== id)
      setAnswereQuestions([...currentQuestion, {
        idQuestion: id,
        isCorrect,
        quiz,
        options
      }])
    }
  }

  return (
    <form onSubmit={handleSubmit} className='quiz__form'>
      <ol>
        {
          unsortedQuestions.map(({ question: { id, quiz, options } }) => (
            <Question
              key={id}
              id={id}
              quiz={quiz}
              options={options}
              handleChange={handleChange}
            />
          ))
        }
      </ol>
      <div className='quiz__form--action'>
        <button className='button'>Enviar</button>
      </div>
    </form>
  )
}
