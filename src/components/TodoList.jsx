import './TodoList.less'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

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
                <h3 className="header">
                    Todo List 
                    <small className="filters">
                        <Link to="/">All</Link>&nbsp;|&nbsp;
                        <Link to="/?filter=incomplete">Incomplete</Link>&nbsp;|&nbsp;
                        <Link to="/?filter=complete">Complete</Link>
                    </small>
                </h3>
                <ul>{todos}</ul>
                <Link to="/add">Add Todo</Link>
            </div>
        )
    }
}

export default TodoList
