import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


//console.dir(rootReducer)
export * from './reducers'
export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))

