import React from 'react'
import uuid from 'react-uuid'

import { Heading4 } from '../../atoms/Headings'
import './index.css'

export const WrongAnswers = ({ answers }) => (
  answers.map(answer => (
    <article className='questions__wrong--answer' key={answer.idQuestion}>
      <Heading4>{answer.quiz}</Heading4>
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
