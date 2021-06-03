import React from 'react'

export const Question = () => (
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
