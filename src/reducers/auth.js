import { combineReducers } from 'redux';
import { Actions } from 'react-native-router-flux';

const AUTHENTICATED_SEND_REQUEST = 'reactNativeTestTask/auth/AUTHENTICATED_SEND_REQUEST';
const AUTHENTICATED_SUCCESS = 'reactNativeTestTask/auth/AUTHENTICATED_SUCCESS';
const AUTHENTICATED_ERROR = 'reactNativeTestTask/auth/AUTHENTICATED_ERROR';
const AUTHENTICATED_ERROR_CLEAR = 'reactNativeTestTask/auth/AUTHENTICATED_ERROR_CLEAR';
const LOGOUT = 'reactNativeTestTask/auth/LOGOUT';

function userReducer(state='', action={}){
    switch (action.type){
        case AUTHENTICATED_SEND_REQUEST:
        case AUTHENTICATED_SUCCESS:
            return action.user;
        case AUTHENTICATED_ERROR:
        case LOGOUT:
            return '';
        default:
            return state;
    }
}

function authenticatedReducer(state=false, action={}) {
    switch(action.type) {
        case AUTHENTICATED_SUCCESS:
            return true;
        case AUTHENTICATED_ERROR:
        case LOGOUT:
            return false;
        default:
            return state;
    }
}

function errorReducer(state='', action) {
    switch (action.type){
        case AUTHENTICATED_SEND_REQUEST:
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_ERROR_CLEAR:
        case LOGOUT:
            return '';
        case AUTHENTICATED_ERROR:
            return action.error;
        default:
            return state;
    }
}

export default combineReducers({
    authenticated: authenticatedReducer,
    user: userReducer,
    error: errorReducer
});

const appropriateLogins = {
    test: 'test',
    new: '123456',
    admin: 'admin'
};

export function sendAuthRequest( login, pass){
    return dispatch => {
        dispatch( {type: AUTHENTICATED_SEND_REQUEST, user: login} );
        if( appropriateLogins[login] === pass){
            dispatch( {type: AUTHENTICATED_SUCCESS, user: login} );
            Actions.feed();
        } else {
            dispatch( {type: AUTHENTICATED_ERROR, error: 'Auth error, try again'} );
            Actions.login();
        }
    }
}

export function clearAuthError() {
    return {
        type: AUTHENTICATED_ERROR_CLEAR
    };
}

export function logout() {
    return {
        type: LOGOUT
    }
}


