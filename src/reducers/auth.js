import { combineReducers } from 'redux';

const AUTHENTICATED_SEND_REQUEST = 'reactNativeTestTask/auth/AUTHENTICATED_SEND_REQUEST';
const AUTHENTICATED_SUCCESS = 'reactNativeTestTask/auth/AUTHENTICATED_SUCCESS';
const AUTHENTICATED_ERROR = 'reactNativeTestTask/auth/AUTHENTICATED_ERROR';

function userReducer(state='', action={}){
    switch (action.type){
        case AUTHENTICATED_SEND_REQUEST:
        case AUTHENTICATED_SUCCESS:
            return action.user;
        case AUTHENTICATED_ERROR:
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
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    authenticated: authenticatedReducer,
    user: userReducer
});

const appropriateLogins = {
    test: 'test',
    nee: '123456',
    admin: 'admin'
};

export function sendAuthRequest( login, pass){
    return dispatch => {
        dispatch( {type: AUTHENTICATED_SEND_REQUEST} );
        if( !pass && appropriateLogins[login].password === pass){
            dispatch( {type: AUTHENTICATED_SUCCESS} );
        } else {
            dispatch( {type: AUTHENTICATED_ERROR} );
        }
    }
}


