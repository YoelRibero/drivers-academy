import React from 'react'

import { WrongAnsweres } from '../WrongAnsweres'
import './index.css'

export const Results = ({ results, questions }) => {
  const titleWrongQuestions = results.trueQuestions.length <= 20 ? 'Intentalo nuevamente para practicar!' : 'Estás muy bien, seguí practicando!'
  return (
    <section className='questions__results'>
      <p>Contestaste correctamente <span>{results.trueQuestions.length}</span> de <span>{questions.length}</span>{results.trueQuestions.length === questions.length && '. Felicitaciones! 🎉🎊'}</p>
      {
        results.falseQuestions.length > 0 && (
          <>
            <h3>Estas son las preguntas que contestaste incorrectamente y sus respuestas correctas. {titleWrongQuestions}</h3>
            <div className='questions__wrong--answers'>
              <WrongAnsweres answers={results.falseQuestions} />
            </div>
          </>
        )
      }
    </section>
  )
}
