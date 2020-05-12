import { ADD_QUIZ_QUESTION, RESET_QUIZ_CREATION } from '../action/action-types';

const initialState = {
    quiz: []
}

export const quizCreatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_QUIZ_QUESTION: 
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case RESET_QUIZ_CREATION:
            return {
                ...state,
                quiz: []
            }
        default: return state;
    }
}

