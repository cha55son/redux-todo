import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducers from './reducers/app'
import App from './components/app'

// Delete once we eliminate the fixtures
import { TODO_CREATE } from './reducers/todos'

let store = createStore(reducers)
store.dispatch({
    type: TODO_CREATE,
    title: 'Pick Quinn up',
    completed: false
})
store.dispatch({
    type: TODO_CREATE,
    title: 'Decorate the christmas tree',
    completed: true
})
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-container')
)
