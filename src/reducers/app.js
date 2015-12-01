import { combineReducers } from 'redux'

import { reduceTodos } from './todos'

export default combineReducers({
    todos: reduceTodos
})
