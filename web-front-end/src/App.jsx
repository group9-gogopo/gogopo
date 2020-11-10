import React, { Component } from 'react'
import Home from './home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './home/about/ui/AboutUi'
import { Profile } from './profile/index'
import { AllProduct } from './product/index'
import { Story } from './story/index'

import Cart from './shoppingCart/Cart'
import Login from './login/container/Login'
import Register from './register/container/Register'
import ChangePwd from './changepwd/container/ChangePwd'
import Discounts from './discounts/container/Discounts'
import Detail from './detail/GoodsDetail'

export default class App extends Component {
    render() {
        return(
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/changepwd' component={ChangePwd}></Route>
                <Route path='/discounts' component={Discounts}></Route>
                <Route path='/allProduct' component={AllProduct}></Route>
                <Route path='/story' component={Story}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/shoppingCart' component={Cart}></Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Redirect from="/" to="/home"></Redirect>  
            </Switch>
               
           
        )
    }
}
