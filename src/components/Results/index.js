import React from 'react'

import './index.css'

export const Results = ({ results, questions }) => (
  <section className='questions__results'>
    <p>Contestaste correctamente <span>{results.trueQuestions}</span> de <span>{questions.length}</span>{results.trueQuestions === questions.length && '. Felicitaciones! 🎉🎊'}</p>
  </section>
)
