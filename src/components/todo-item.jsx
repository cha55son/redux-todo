import './todo-item.less'
import React, { Component, PropTypes } from 'react'

import { TODO_PROP_TYPE, toggleTodo } from '../reducers/todos'

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
        this.props.dispatch(toggleTodo(this.props.item.id))
    }
}

TodoItem.propTypes = {
    item: TODO_PROP_TYPE,
    dispatch: PropTypes.func.isRequired
}
export default TodoItem
