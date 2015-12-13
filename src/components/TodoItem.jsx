import './TodoItem.less'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { TODO_PROP_TYPE, toggleTodo, deleteTodo } from '../reducers/todos'

class TodoItem extends Component {
    render() {
        let item = this.props.item
        let classNames = 'todo-item' + (item.completed ? ' completed' : '')
        return (
            <span className={classNames}>
                <input type="checkbox" className="checkbox" checked={item.completed} onChange={this.toggleComplete.bind(this)}/>
                {item.title}
                <span className="actions">
                    <Link to={`edit/${item.id}`}>edit</Link>&nbsp;
                    <a href="" onClick={this.clickDelete.bind(this)}>delete</a>
                </span>
            </span>
        )
    }
    toggleComplete(e) {
        this.props.dispatch(toggleTodo(this.props.item.id))
    }
    clickDelete(e) {
        e.preventDefault()
        this.props.dispatch(deleteTodo(this.props.item.id))
    }
}

TodoItem.propTypes = {
    item: TODO_PROP_TYPE,
    dispatch: PropTypes.func.isRequired
}
export default TodoItem
