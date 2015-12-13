import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import { reduceTodos } from './todos'
import { reduceRoutes } from './routes'

export default combineReducers({
    everything: function(state = {}, action) {
        console.log(action)
        return state
    },
    routing: routeReducer,
    routes: reduceRoutes,
    todos: reduceTodos
})
