import './todo-item.less'
import React, { Component, PropTypes } from 'react'
import TodoItemModel from '../models/todo-item'

class TodoItem extends Component {
    render() {
        let item = this.props.item
        let classNames = 'todo-item' + (item.completed ? ' completed' : '')
        return (
            <span className={classNames}>
                <span className="checkbox" onClick={this.handleClick.bind(this)}>
                    [{item.completed ? '✓' : ' ' }]
                </span> {item.title}
            </span>
        )
    }
    handleClick(e) {
        this.props.item.completed = !this.props.item.completed
        this.setState({ item: this.props.item.completed })
    }
}

TodoItem.propTypes = {
    item: React.PropTypes.instanceOf(TodoItemModel).isRequired
}
export default TodoItem
