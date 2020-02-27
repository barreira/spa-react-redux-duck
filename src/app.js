import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './app.store'
import Main from './pages/main'

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default hot(module)(App)
