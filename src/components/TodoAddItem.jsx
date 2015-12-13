import './TodoAddItem.less'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { pushPath } from 'redux-simple-router'

import { createTodo } from '../actions/todos'

class TodoAddItem extends Component {
    formSubmit(e) {
        e.preventDefault()
        // TODO: Add validation
        this.props.dispatch(createTodo({
            title: this.refs.title.value,
            completed: this.refs.completed.value === 'on'
        }))
        this.props.dispatch(pushPath('/'))
    }
    render() {
        return (
            <div className="todo-add-item">
                <h3 className="header">Add Todo Item</h3>
                <form onSubmit={this.formSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" id="title" />
                    </div>
                    <div>
                        <label>Completed?</label>
                        <input type="checkbox" ref="completed" id="completed" />
                    </div>
                    <button type="submit">Create Todo</button>
                    <Link to="/">Cancel</Link>
                </form>
            </div>
        )
    }
}

export default TodoAddItem
