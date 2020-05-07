import React, { useState } from 'react'

import classes from './quiz.module.css';
import ActiveQuiz from '../../components/active-quiz';

const Quiz = () => {

    const [state, setState] = useState({
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {
                        id: 1,
                        answer: 'Черное' 
                    },
                    {
                        id: 2,
                        answer: 'Голубое' 
                    },
                    {
                        id: 3,
                        answer: 'Красное' 
                    },
                    {
                        id: 4,
                        answer: 'Зеленое' 
                    }
                ]
            }
        ]
    });

    const onAnswerClickHandler = (answerId) => {
        console.log(answerId)
    }

    return (
        <div className={classes.quiz}>
            <div className={classes['quiz-wrapper']}>
                <h1>Ответьте на все вопросы</h1>
                <ActiveQuiz quiz={state.quiz[0]} onAnswerClick={onAnswerClickHandler} />
            </div>
        </div>
    )
}

export default Quiz;
