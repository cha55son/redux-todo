import './app.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { TODO_PROP_TYPE } from '../reducers/todos'
import TodoList from './todo-list'

class App extends Component {
    render() {
        return (
            <div className="todo-app">
                <h3 className="app-header">Todo List</h3>
                <TodoList items={this.props.todos} dispatch={this.props.dispatch} />
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.arrayOf(TODO_PROP_TYPE),
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(App)
