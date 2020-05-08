import React, { useState } from 'react'

import classes from './quiz.module.css';
import ActiveQuiz from '../../components/active-quiz';
import FinishedQuiz from '../../components/finished-quiz';

const Quiz = (props) => {

    const [state, setState] = useState({
        activeQuestion: 0,
        stateAnswer: null,
        isFinished: false,
        results: {},
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

        if ( state.stateAnswer ) {
            const key = Object.keys(state.stateAnswer);
            if ( state.stateAnswer[key] === 'success' ) {
                return
            }
        }

        const question = state.quiz[state.activeQuestion];
        const results = state.results;

        if ( question.rightAnswerId === answerId ) {

            if ( !results[question.id] ) {
                results[question.id] = 'success';
            }

            setState({
                ...state,
                stateAnswer: { [answerId]: 'success' },
                results
            })

            setTimeout(() => {
                if (isQuizFinished()) {
                    setState({...state, isFinished: true})
                } else {
                    setState({...state, activeQuestion: state.activeQuestion + 1, stateAnswer: null})
                }
            }, 1000)

        } else {
            results[question.id] = 'error';
            setState({
                ...state,
                stateAnswer: { [answerId]: 'error' },
                results
            })
        }

        
    }

    const isQuizFinished = () => {
        return state.activeQuestion + 1 === state.quiz.length;
    }

    const onRetryHandler = () => {
        setState({ 
            ...state,
            activeQuestion: 0,
            stateAnswer: null,
            isFinished: false,
            results: {}  
        })
    }

    console.log(props)

    return (
        <div className={classes.quiz}>
            <div className={classes['quiz-wrapper']}>
                {
                    state.isFinished ? <FinishedQuiz onRetry={onRetryHandler} results={state.results} quiz={state.quiz}  /> :
                    (
                        <>
                        <h1>Ответьте на все вопросы</h1>
                        <ActiveQuiz 
                        quiz={state.quiz[state.activeQuestion]} 
                        onAnswerClick={onAnswerClickHandler} 
                        quizLength={state.quiz.length}
                        activeQuestion={state.activeQuestion}
                        state={state.stateAnswer}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Quiz;
