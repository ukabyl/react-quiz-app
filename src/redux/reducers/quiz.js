import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZE_SUCCESS, SET_QUIZ, NEXT_QUIZ, QUIZ_FINISHED, RETRY_QUIZ } from '../action/action-types';

const initialState  = {
    quizes: [], 
    loading: true,
    error: null,
    activeQuestion: 0,
    stateAnswer: null,
    isFinished: false,
    results: {},
    quiz: [],
}

export const quizReducer  = (state = initialState, action) => {
    switch(action.type) {
        case  FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state,
                error: action.error
            }
        case FETCH_QUIZE_SUCCESS:
            return {
                ...state,
                quiz: action.quiz,
                loading: false
            }
        case SET_QUIZ:
            return {
                ...state,
                stateAnswer: action.stateAnswer,
                results: action.results
            }
        case NEXT_QUIZ:
            return {
                ...state,
                activeQuestion: action.activeQuestion,
                stateAnswer: null
            }
        case QUIZ_FINISHED:
            return {
                ...state,
                isFinished: true
            }
        case RETRY_QUIZ:
            return {
                ...state,
                activeQuestion: 0,
                stateAnswer: null,
                isFinished: false,
                results: {} 
            }
        default: return state; 
    }
}