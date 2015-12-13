import { TODO_CREATE, TODO_UPDATE, TODO_DELETE } from '../actions/todos'

// Reducer, must return a new array if you change anything!
export function reduceTodos(state = [], action) {
    switch (action.type) {
        case TODO_CREATE:
            return [
                ...state,
                Object.assign({
                    title: '',
                    completed: false
                }, action.props || {}, {
                    // Not allowed to override the id.
                    id: getId(state)
                })
            ]
        case TODO_UPDATE:
            let { todo: todoUpdate, index: indexUpdate } = getTodoAndIndexById(state, action.id)
            if (!todoUpdate) { 
                console.error(`Todo with id "${action.id}" does not exist! Cannot update it.`) 
                return state
            }
            return [
                ...state.slice(0, indexUpdate),
                // Not allowed to override the id.
                Object.assign({}, todoUpdate, action.props || {}, { id: todoUpdate.id }),
                ...state.slice(indexUpdate + 1)
            ]
        case TODO_DELETE:
            let { todo: todoDelete, index: indexDelete } = getTodoAndIndexById(state, action.id)
            if (!todoDelete) { 
                console.error(`Todo with id "${action.id}" does not exist! Cannot delete it.`) 
                return state
            }
            return [...state.slice(0, indexDelete), ...state.slice(indexDelete + 1)]
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
