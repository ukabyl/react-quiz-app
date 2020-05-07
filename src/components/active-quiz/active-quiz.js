import React from 'react'
import classes from './active-quiz.module.css';

import AnswersList from './answers-list';

const ActiveQuiz = ({ quiz, onAnswerClick }) => {
    return (
        <div className={classes['active-quiz']}>
            <p className={classes['active-quiz-question']}>
            <span><strong>1.</strong>&nbsp;{ quiz.question }</span>
                <span>1 из 5</span>
            </p>
            <AnswersList answers={quiz.answers} onAnswerClick={onAnswerClick}/>
        </div>
    )
}

export default ActiveQuiz;
