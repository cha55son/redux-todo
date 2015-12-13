import './App.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { TODO_PROP_TYPE } from '../actions/todos'

class App extends Component {
    render() {
        return (
            <div className="todo-app">
                {React.cloneElement(this.props.children, {
                    dispatch: this.props.dispatch,
                    todos: this.props.todos
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(App)
