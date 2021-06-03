import React, { useState, useEffect } from 'react'

import { db } from '../../utils/db'

export const FormQuestions = () => {
  const [questions, setQuestions] = useState(db.questions)
  const [unsortedQuestions, setUnsortedQuestions] = useState([])
  const [answereQuestions, setAnswereQuestions] = useState([])

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

  return (
    <form onSubmit={handleSubmit} className='quiz__form'>
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
  )
} 
