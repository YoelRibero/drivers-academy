import React from 'react'

import { Description } from 'atoms/Description'
import { Input } from 'atoms/Input'
import { Label } from 'atoms/Label'
import './index.css'

export const Question = ({ id, quiz, options, handleChange }) => (
  <li key={id} className='quiz__form--question'>
    <Description>{quiz}</Description>
    {
      options.map(({ idOption, value, isCorrect }, index) => (
        <div key={index} className='quiz__form--options'>
          <Input
            id={`option-${idOption}`}
            name={`quiz-${id}`}
            onChange={() => handleChange(isCorrect, id, quiz, options)}
            type='radio'
            value={isCorrect}
          />
          <Label id={idOption}>{value}</Label>
        </div>
      ))
    }
  </li>
)
