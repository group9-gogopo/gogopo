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
<<<<<<< HEAD
import ClearAccount from './clearAccount/container/ClearAccount'
=======
import Detail from './detail/GoodsDetail'
>>>>>>> master

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
<<<<<<< HEAD
                <Route path='/shoppingCart' component={Cart}></Route>
                <Route path='/clearAccount' component={ClearAccount}></Route>
=======
                <Route path='/detail' component={Detail}></Route>
>>>>>>> master
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
