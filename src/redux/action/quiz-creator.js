import { ADD_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './action-types';
import axios from 'axios';


export function addQuizQuestion(item) {
    return {
        type: ADD_QUIZ_QUESTION,
        item
    }
}

function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export const createQuiz = () => {
    return async (dispatch, getState) => {
        await  axios.post('https://react-quiz-3d8cb.firebaseio.com/quizes.json', getState().create.quiz);
        dispatch(resetQuizCreation());
    }
}