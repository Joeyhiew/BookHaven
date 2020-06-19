import { createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './Reducers/index';

const store = createStore(
    allReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
   
)
export default store;