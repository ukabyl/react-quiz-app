import axios from 'axios';
import { AUTH_SUCCESS, LOGOUT } from './action-types';

export function auth(email, password, isLogin) {
    return async (dispatch) => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLvaIxcnyZoy_be6BRJ6opkuTv4qrbGOw';
        if ( isLogin ) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLvaIxcnyZoy_be6BRJ6opkuTv4qrbGOw';
        }

        const response = await axios.post(url, authData);
        const data = response.data;
        
        let expiresIn = new Date(new Date().getTime() + data.expiresIn * 1000);

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expiresIn', expiresIn)

        dispatch(authSuccess(data.idToken));
        dispatch(autoLogout(data.expiresIn))
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function autoLogout(time) {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}


export function autoLogin() {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expiresIn'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresIn')
    return {
        type: LOGOUT
    }
}