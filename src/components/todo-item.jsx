import './todo-item.less'
import React, { Component, PropTypes } from 'react'
import TodoItemModel from '../models/todo-item'

class TodoItem extends Component {
    render() {
        let item = this.props.item
        return (
            <span className="todo-item">
                [{item.completed ? '✓' : ' ' }] {item.title}
            </span>
        )
    }
}

TodoItem.propTypes = {
    item: React.PropTypes.instanceOf(TodoItemModel).isRequired
}
export default TodoItem
