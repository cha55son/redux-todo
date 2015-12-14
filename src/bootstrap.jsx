import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, Link, IndexRoute } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'
import createHashHistory from 'history/lib/createHashHistory'
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import reducers from './reducers/app'

// Pages
import App from './components/App'
import TodoList from './components/TodoList'
import TodoAddItem from './components/TodoAddItem'
import TodoEditItem from './components/TodoEditItem'
import NotFound from './components/NotFound'

// Delete once we eliminate the fixtures
import { TODO_CREATE } from './actions/todos'

const finalCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)
const store = finalCreateStore(reducers)
const history = createHashHistory({ queryKey: false })
syncReduxAndRouter(history, store)

// Fixtures
store.dispatch({
    type: TODO_CREATE,
    props: {
        title: 'Decorate the christmas tree',
        completed: true
    }
})
store.dispatch({
    type: TODO_CREATE,
    props: {
        title: 'Buy Christmas presents',
        completed: false
    }
})
store.dispatch({
    type: TODO_CREATE,
    props: {
        title: 'Open Christmas presents',
        completed: false
    }
})

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={TodoList} />
                    <Route path="add" component={TodoAddItem} />
                    <Route path="edit/:id" component={TodoEditItem} />
                </Route>
                <Route path="*" component={NotFound}/>
            </Router>
        </Provider>
        <DebugPanel top right bottom>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    </div>,
    document.getElementById('app-container')
)
