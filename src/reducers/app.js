import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router';

import { reduceTodos } from './todos'

export default combineReducers({
    everything: function(state = {}, action) {
        console.log(action)
        return state
    },
    routing: routeReducer,
    todos: reduceTodos
})
