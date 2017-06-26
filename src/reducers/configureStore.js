import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './index';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState)
}