import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './login/container/Login'
import Register from './register/container/Register'
import ChangePwd from './changepwd/container/ChangePwd'
import Discounts from './discounts/container/Discounts'

export default class App extends Component {
    render() {
        return(
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/changepwd' component={ChangePwd}></Route>
                <Route path='/discounts' component={Discounts}></Route>
                <Redirect from="/" to="/discounts"></Redirect>  
            </Switch>
        )
    }
}