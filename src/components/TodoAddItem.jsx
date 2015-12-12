import './TodoAddItem.less'
import React, { Component, PropTypes } from 'react'

class TodoAddItem extends Component {
    formSubmit(e) {
        e.preventDefault()
        console.log("Submitted the form!")
    }
    render() {
        return (
            <div className="todo-add-item">
                <h3 className="header">Add Todo Item</h3>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" id="title" />
                    </div>
                    <div>
                        <label>Completed?</label>
                        <input type="checkbox" ref="completed" id="completed" />
                    </div>
                    <button type="submit">Create Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoAddItem
