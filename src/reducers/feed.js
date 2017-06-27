import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';

const FETCH_FEEDS = 'reactNativeTestTask/feed/FETCH_FEEDS';
const FETCH_FEEDS_SUCCESS = 'reactNativeTestTask/feed/FETCH_FEEDS_SUCCESS';
const FETCH_FEEDS_ERROR = 'reactNativeTestTask/feed/FETCH_FEEDS_ERROR';
const GET_FEEDS_FROM_STORE_SUCCESS = 'reactNativeTestTask/feed/GET_FEEDS_FROM_STORE_SUCCESS';

const keyStorePosts = '@ReactNativeTestTask:posts';

function postItem(state={author:'', title:'', description:''}, action={}){
    switch (action){
        case FETCH_FEEDS_SUCCESS:
            return state;
        default:
            return state;
    }
}

function postsReducer(state=[], action={}) {
    switch (action.type){
        case FETCH_FEEDS_ERROR:
            //return []; read before from local store
        case FETCH_FEEDS_SUCCESS:
        case GET_FEEDS_FROM_STORE_SUCCESS:
            return action.data.articles.map( item => postItem(item, action));
        default:
            return state;
    }
}

function errorReducer(state='', action={}) {
    switch (action){
        case FETCH_FEEDS:
        case FETCH_FEEDS_SUCCESS:
            return '';
        case FETCH_FEEDS_ERROR:
            return action.error;
        default:
            return state;
    }
}

export default combineReducers({
    posts: postsReducer,
    error: errorReducer
});

export function fetchPosts() {
    return dispatch => {
        const url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=0d5ed0be37254cb28afb22d8ee4b7d2c';

        dispatch({type: FETCH_FEEDS});

        dispatch( getDataFromStore() );

        return fetch(url)
            .then( res => res.json())
            .then( data => {
                //console.log('data', data)
                dispatch({type: FETCH_FEEDS_SUCCESS, data});
                dispatch( savePostToStore(data) );
            })
            .catch( err => {
                dispatch({type: FETCH_FEEDS_ERROR, error: err.message});
            })
    }
}

function savePostToStore(data){
    return dispatch => {
        return AsyncStorage.setItem(keyStorePosts, JSON.stringify(data))
            .then( () => {
                console.log('save successfully');
            })
            .catch( err => {
                console.log('error saving', err);
            })

    }
}

function getDataFromStore() {
    return dispatch =>{
        AsyncStorage.getItem(keyStorePosts)
            .then( dataStr => {
                if( dataStr ){
                    const data = JSON.parse(dataStr);
                    dispatch({type: GET_FEEDS_FROM_STORE_SUCCESS, data});
                    console.log('--------get data from store');
                }
            })
            .catch( err => {
                console.log("error geting data from local store", err);
            })
        ;
    }
}