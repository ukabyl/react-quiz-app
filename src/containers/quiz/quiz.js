import React, { useState, useEffect } from 'react'
import axios from '../../axios/axios-quiz';
import classes from './quiz.module.css';
import ActiveQuiz from '../../components/active-quiz';
import FinishedQuiz from '../../components/finished-quiz';
import Loader from '../../components/ui/loader';

const Quiz = (props) => {

    const [state, setState] = useState({
        activeQuestion: 0,
        stateAnswer: null,
        isFinished: false,
        results: {},
        quiz: [],
        loading: true
    });

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/quizes/${props.match.params.id}.json`);
            const quiz = res.data; 
            setState({...state, quiz, loading: false});
            
        }
        fetchData();
    }, [])

    const onAnswerClickHandler = (answerId) => {
        if ( state.stateAnswer ) {
            const key = Object.keys(state.stateAnswer);
            if ( state.stateAnswer[key] === 'success' ) {
                return
            }
        }

        const question = state.quiz[state.activeQuestion];
        const results = state.results;

        if ( +question.rightAnswerId === answerId ) {

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


    return (
        <div className={classes.quiz}>
            <div className={classes['quiz-wrapper']}>
                {
                    state.loading ? <Loader /> :
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
