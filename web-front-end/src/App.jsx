<<<<<<< HEAD
import React, { Component } from 'react'
import Home from './home/Home'
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
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Redirect from="/" to="/home"></Redirect>  
            </Switch>
               
           
        )
    }
=======
import React ,{Component} from 'react'
import { Profile } from './profile/index'
import { AllProduct } from './product/index'
import { Story } from './story/index'
import {Switch,Route,Redirect} from 'react-router-dom'

export default class App extends Component{
    render(){
        return(
            // <AllProduct></AllProduct>
            // <Story></Story>
            // <Profile></Profile>
            <Switch>
                {/* <AllProduct></AllProduct>
                <Story></Story>
                <Profile></Profile> */}
                <Route path='/allProduct' component={AllProduct}></Route>
                <Route path='/story' component={Story}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Redirect from='/' to='/story'></Redirect>
            </Switch>

        )
    }
>>>>>>> liyx
}