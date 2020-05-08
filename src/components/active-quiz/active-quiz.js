import React from 'react'
import classes from './active-quiz.module.css';

import AnswersList from './answers-list';

const ActiveQuiz = ({ quiz, onAnswerClick, quizLength, activeQuestion, state }) => {
    return (
        <div className={classes['active-quiz']}>
            <p className={classes['active-quiz-question']}>
            <span><strong>{ activeQuestion + 1 }.</strong>&nbsp;{ quiz.question }</span>
            <span>{activeQuestion + 1} из {quizLength}</span>
            </p>
            <AnswersList 
                answers={quiz.answers} 
                onAnswerClick={onAnswerClick}
                state={state}/>
        </div>
    )
}

export default ActiveQuiz;
