import './todo-list.less'
import React, { Component, PropTypes } from 'react'
import TodoItemModel from '../models/todo-item'
import TodoItem from './todo-item'

class TodoList extends Component {
    constructor() {
        super()
        this.count = 0
    }
    render() {
        let items = this.props.items.map((item, i) => {
            return <li key={i}><TodoItem item={item} /></li>
        })
        return <ul className="todo-list">{items}</ul>
    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(React.PropTypes.instanceOf(TodoItemModel))
}
TodoList.defaultProps = {
    items: []
}
export default TodoList
