import { AUTH_SUCCESS, LOGOUT } from '../action/action-types';

const initialState = {
    token: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SUCCESS: 
            return {
                ...state,
                token: action.token
            }
        case LOGOUT:
            return {
                ...state,
                token: null
            }
        default: return state;
    }
}