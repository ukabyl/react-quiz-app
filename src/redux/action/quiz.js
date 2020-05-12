import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZE_SUCCESS, SET_QUIZ, NEXT_QUIZ, QUIZ_FINISHED, RETRY_QUIZ } from './action-types';
import axios from '../../axios/axios-quiz';

export function fetchQuizes() {
    return async (dispatch) => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get('/quizes.json');
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: 'Тест №' + index + 1
                })
            })
            dispatch(fetchQuizesSuccess(quizes));
        } catch(e) {
            dispatch(fetchQuizesError(e));
        }
    }
}

export function fetchQuizById(quizId) {
    return async (dispatch) => {
        dispatch(fetchQuizesStart())
        try {
            const res = await axios.get(`/quizes/${quizId}.json`);
            const quiz = res.data; 
            dispatch(fetchQuizSuccess(quiz))
        } catch(e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz;
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

            dispatch(setQuiz({ [answerId]: 'success' }, results))

            setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(quizFinished())
                    // setState({...state, isFinished: true})
                } else {
                    dispatch(nextQuiz(state.activeQuestion + 1))
                }
            }, 1000)

        } else {
            results[question.id] = 'error';
            dispatch(setQuiz({ [answerId]: 'error' }, results))
        }
    }
}

function nextQuiz(activeQuestion) {
    return {
        type: NEXT_QUIZ,
        activeQuestion
    }
}

function setQuiz(stateAnswer, results) {
    return {
        type: SET_QUIZ,
        stateAnswer,
        results
    }
}


function quizFinished() {
    return {
        type: QUIZ_FINISHED
    }
}

function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZE_SUCCESS,
        quiz
    }
}

function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}
function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}
function fetchQuizesError(error) {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}

export function retryQuiz() {
    return {
        type: RETRY_QUIZ
    }
}

function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length;
}