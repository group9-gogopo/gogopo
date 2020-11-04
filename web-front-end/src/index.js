<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter as Router}  from 'react-router-dom'

import store from './store'

import 'element-theme-default';

import './asset/reset.css'
import 'antd/dist/antd.css';

import App from './App'

import './assets/styles/reset.css'


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    </Router>,
    document.querySelector('#root')
)
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/reset.css'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector('#root')
);

>>>>>>> liyx
