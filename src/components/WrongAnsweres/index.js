import React from 'react'
import uuid from 'react-uuid'

import './index.css'

export const WrongAnsweres = ({ answers }) => (
  answers.map(answer => (
    <article className='questions__wrong--answer' key={answer.idQuestion}>
      <h4>{answer.quiz}</h4>
      <ul>
        {
          answer.options.map(option => (
            <li key={uuid()}>{option.isCorrect ? <span>{option.value}</span> : option.value}</li>
          ))
        }
      </ul>
    </article>
  ))
)
