import React, { useState, useEffect } from 'react'
import classes from './quiz.module.css';
import ActiveQuiz from '../../components/active-quiz';
import FinishedQuiz from '../../components/finished-quiz';
import Loader from '../../components/ui/loader';
import { connect } from 'react-redux';
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../redux/action/quiz';

const Quiz = (props) => {

    const [state, setState] = useState({
        
    });

    useEffect(() => {
        props.fetchQuizById(props.match.params.id);
        return () => props.retryQuiz();
    }, [])

    const onAnswerClickHandler = (answerId) => {
        props.quizAnswerClick(answerId)
    }

    return (
        <div className={classes.quiz}>
            <div className={classes['quiz-wrapper']}>
                {
                    props.loading ? <Loader /> :
                    props.isFinished ? <FinishedQuiz onRetry={props.retryQuiz} results={props.results} quiz={props.quiz}  /> :
                    (
                        <>
                        <h1>Ответьте на все вопросы</h1>
                        <ActiveQuiz 
                        quiz={props.quiz[props.activeQuestion]} 
                        onAnswerClick={onAnswerClickHandler} 
                        quizLength={props.quiz.length}
                        activeQuestion={props.activeQuestion}
                        state={props.stateAnswer}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        error: state.quiz.error,
        activeQuestion: state.quiz.activeQuestion,
        stateAnswer: state.quiz.stateAnswer,
        isFinished: state.quiz.isFinished,
        results:  state.quiz.results,
        quiz:  state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return{
        fetchQuizById: (quizId) => dispatch(fetchQuizById(quizId)),
        quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
