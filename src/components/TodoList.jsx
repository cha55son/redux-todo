import './TodoList.less'
import React, { Component, PropTypes } from 'react'

import { TODO_PROP_TYPE } from '../reducers/todos'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        let todos = this.props.todos.map((todo, i) => {
            return (
                <li key={i}>
                    <TodoItem item={todo} dispatch={this.props.dispatch} />
                </li>
            )
        })
        return (
            <div className="todo-list">
                <h3 className="header">Todo List</h3>
                <ul className="todo-list">{todos}</ul>
            </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(TODO_PROP_TYPE).isRequired,
    dispatch: PropTypes.func.isRequired
}
export default TodoList
