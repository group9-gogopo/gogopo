import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './login/container/Login'
import Register from './register/container/Register'

export default class App extends Component {
    render() {
        return(
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Redirect from='/' to='/register'></Redirect>
            </Switch>
        )
    }
}