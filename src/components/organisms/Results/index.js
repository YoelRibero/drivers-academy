import React from 'react'

import { WrongAnswers } from '../../molecules/WrongAnswers'
import { Heading3 } from '../../atoms/Headings'
import { Description } from '../../atoms/Description'
import './index.css'

export const Results = ({ results, questions }) => {
  const titleWrongQuestions = results.trueQuestions.length <= 25 ? 'Intentalo nuevamente para practicar!' : 'Estás muy bien, seguí practicando!'
  return (
    <section className='questions__results'>
      <Description>Contestaste correctamente <span>{results.trueQuestions.length}</span> de <span>{questions.length}</span>{results.trueQuestions.length === questions.length && '. Felicitaciones! 🎉🎊'}</Description>
      {
        results.falseQuestions.length > 0 && (
          <>
            <Heading3>Estas son las preguntas que contestaste incorrectamente y sus respuestas correctas. {titleWrongQuestions}</Heading3>
            <div className='questions__wrong--answers'>
              <WrongAnswers answers={results.falseQuestions} />
            </div>
          </>
        )
      }
    </section>
  )
}
