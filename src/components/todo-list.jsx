import './todo-list.less'
import React, { Component, PropTypes } from 'react'

import { TODO_PROP_TYPE } from '../reducers/todos'
import TodoItem from './todo-item'

class TodoList extends Component {
    render() {
        let items = this.props.items.map((item, i) => {
            return (
                <li key={i}>
                    <TodoItem item={item} dispatch={this.props.dispatch} />
                </li>
            )
        })
        return <ul className="todo-list">{items}</ul>
    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(TODO_PROP_TYPE),
    dispatch: PropTypes.func.isRequired
}
TodoList.defaultProps = {
    items: []
}
export default TodoList
