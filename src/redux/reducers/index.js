import { combineReducers } from 'redux';
import {quizReducer} from './quiz';
import {quizCreatorReducer} from './quiz-creator';
import {authReducer} from './auth';


export default combineReducers({
    quiz: quizReducer,
    create: quizCreatorReducer,
    auth: authReducer
});