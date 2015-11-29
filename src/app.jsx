import './app.less'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoItemModel from './models/todo-item'
import TodoList from './components/todo-list'

class App extends Component {
    constructor() {
        super()
        this.todoItems = [
            new TodoItemModel({ title: 'Pick Quinn up',               completed: false }),
            new TodoItemModel({ title: 'Decorate the christmas tree', completed: true })
        ]
    }
    render() {
        return (
            <div className="todo-app">
                <h3 className="app-header">Todo List</h3>
                <TodoList items={this.todoItems} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app-container')
)
