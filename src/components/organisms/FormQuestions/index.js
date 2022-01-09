import React from 'react'

import { useUnsortedData } from '../../../hooks/useUnsortedData'
import { Question } from '../../molecules/Question'
import { Button } from '../../atoms/Button'
import './index.css'

export const FormQuestions = ({ questions, handleSubmit, answereQuestions, setAnswereQuestions }) => {
  const unsortedQuestions = useUnsortedData(questions)

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
        <Button>Enviar</Button>
      </div>
    </form>
  )
}
