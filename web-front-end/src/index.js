import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router}  from 'react-router-dom'


import App from './App'

import './assets/styles/reset.css'


ReactDOM.render(
    <Router>
        <App></App>
    </Router>,
    document.querySelector('#root')
)