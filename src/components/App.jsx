import './App.less'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { TODO_PROP_TYPE } from '../reducers/todos'

class App extends Component {
    render() {
        return (
            <div className="todo-app">
                <Link to="/add">Add Todo</Link>
                {React.cloneElement(this.props.children, {
                     dispatch: this.props.dispatch,
                     todos: this.props.todos
                })}
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
