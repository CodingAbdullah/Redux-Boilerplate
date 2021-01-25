import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../reducer/combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const initialState = {
    data: ['GOOD']
}

const store = createStore(combineReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;