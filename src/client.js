import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'containers/App'
import { createStore } from 'redux'
import { rootReducer } from 'reducers'

const store = createStore(rootReducer)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
