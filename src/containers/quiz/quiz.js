import React, { useState } from 'react'

import classes from './quiz.module.css';
import ActiveQuiz from '../../components/active-quiz';

const Quiz = () => {

    const [state, setState] = useState({
        activeQuestion: 0,
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
            },
            {
                id: 2,
                question: 'В каком штатне находится город Нью-Йорк ?',
                rightAnswerId: 2,
                answers: [
                    {
                        id: 1,
                        answer: 'Техас' 
                    },
                    {
                        id: 2,
                        answer: 'Нью-Йорк' 
                    },
                    {
                        id: 3,
                        answer: 'Флорида' 
                    },
                    {
                        id: 4,
                        answer: 'Джорджия' 
                    }
                ]
            }
        ]
    });

    const onAnswerClickHandler = (answerId) => {
        setState({...state, activeQuestion: state.activeQuestion + 1})
    }

    return (
        <div className={classes.quiz}>
            <div className={classes['quiz-wrapper']}>
                <h1>Ответьте на все вопросы</h1>
                <ActiveQuiz 
                quiz={state.quiz[state.activeQuestion]} 
                onAnswerClick={onAnswerClickHandler} 
                quizLength={state.quiz.length}
                activeQuestion={state.activeQuestion}
                />
            </div>
        </div>
    )
}

export default Quiz;
