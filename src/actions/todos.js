import { PropTypes } from 'react'

// PropType defs
export const TODO_PROP_TYPE = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
})

// Action types
export const TODO_CREATE = 'TODO_CREATE'
export const TODO_UPDATE = 'TODO_UPDATE'
export const TODO_DELETE = 'TODO_DELETE'

// Action creators
export function createTodo(props = {}) {
    return { type: TODO_CREATE, props } 
}
export function updateTodo(id = -1, props = {}) {
    return { type: TODO_UPDATE, id, props }
}
export function deleteTodo(id = -1) {
    return { type: TODO_DELETE, id }
}
