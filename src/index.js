import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import App from './components/app'
import rootReducer from './reducers'

// const logger = createLogger({})
const store = createStore(rootReducer, applyMiddleware(logger))

const mount = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mount
)