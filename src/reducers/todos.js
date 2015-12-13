import { PropTypes } from 'react'

// PropType defs
export const TODO_PROP_TYPE = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
})

// Action types
export const TODO_CREATE = 'TODO_CREATE'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_TOGGLE = 'TODO_TOGGLE'

// Action creators
export function createTodo(title = '', completed = false) {
    return { type: TODO_CREATE, title, completed } 
}
export function deleteTodo(id = -1) {
    return { type: TODO_DELETE, id }
}
export function toggleTodo(id = -1) {
    return { type: TODO_TOGGLE, id }
}

// Reducer, must return a new array!
export function reduceTodos(state = [], action) {
    switch (action.type) {
        case TODO_CREATE:
            return [
                ...state,
                {
                    id: getId(state),
                    title: action.title,
                    completed: action.completed
                }
            ]
        case TODO_DELETE:
            if (action.id < 0) { return state }
            let { todo: todoDelete, index: indexDelete } = getTodoAndIndexById(state, action.id)
            return [...state.slice(0, indexDelete), ...state.slice(indexDelete + 1, state.length)]
        case TODO_TOGGLE: 
            let { todo, index } = getTodoAndIndexById(state, action.id)
            if (!todo) { console.error(`Todo with id "${action.id}" does not exist!`) }
            return [
                ...state.slice(0, index),
                Object.assign({}, todo, {
                    completed: !todo.completed
                }),
                ...state.slice(index + 1)
            ]
        default: 
            return state
    }
}

// Helpers
// Get the next highest id
function getId(todos) {
    let maxId = 0
    todos.forEach(function(todo) {
        if (todo.id > maxId) { maxId = todo.id }
    })
    return maxId + 1
}

function getTodoAndIndexById(todos, id = -1) {
    let todo, index
    todos.forEach(function(aTodo, i) {
        if (aTodo.id === id) { 
            todo = aTodo
            index = i
            return false 
        }
    })
    return { todo, index } 
}
