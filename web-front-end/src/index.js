import React from 'react'
import ReactDOM from 'react-dom'
import 'element-theme-default';
import { BrowserRouter as Router } from 'react-router-dom'

import './asset/reset.css'
import 'antd/dist/antd.css';

import App from './App'

ReactDOM.render(
    <Router>
        <App></App>
    </Router>,
    document.querySelector('#root')
)