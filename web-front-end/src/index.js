import React from 'react'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '@/assets/styles/reset.css'
import store from './store/index'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
    <App></App>
    </Provider>,
    document.querySelector('#root')
)