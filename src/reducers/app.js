import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import { reduceTodos } from './todos'

export default combineReducers({
    routing: routeReducer,
    todos: reduceTodos
})
