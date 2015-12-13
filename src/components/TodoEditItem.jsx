import './TodoEditItem.less'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { pushPath } from 'redux-simple-router'

import { updateTodo } from '../actions/todos'
import NotFound from './NotFound'

class TodoEditItem extends Component {
    render() {
        this.item = this.props.todos.find((todo) => {
            return todo.id === parseInt(this.props.params.id)
        })
        if (!this.item) { return <NotFound /> }
        return (
            <div className="todo-edit-item">
                <h3 className="header">Edit Todo Item</h3>
                <form onSubmit={this.formSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" id="title" defaultValue={this.item.title} />
                    </div>
                    <div>
                        <label>Completed?</label>
                        <input type="checkbox" ref="completed" id="completed" defaultChecked={this.item.completed} />
                    </div>
                    <button type="submit">Edit Todo</button>
                    <Link to="/">Cancel</Link>
                </form>
            </div>
        )
    }
    formSubmit(e) {
        e.preventDefault()
        this.props.dispatch(updateTodo(this.item.id, {
            title: this.refs.title.value, 
            completed: this.refs.completed.value === 'on'
        }))
        this.props.dispatch(pushPath('/'))
    }
}

export default TodoEditItem
