import React, { Component } from 'react'

import Home from './home/index/Container/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './about/ui/AboutUi'
import { Profile } from './profile/index'
import { AllProduct } from './product/index'
import { Story } from './story/index'

import Cart from './shoppingCart/Cart'
import Login from './login/container/Login'
import Register from './register/container/Register'
import ChangePwd from './changepwd/container/ChangePwd'
import Discounts from './discounts/container/Discounts'
import allOrder from './order/allOrder/container/AllOrder'
import Comment from './order/comments/containter/Comment'
import Detail from './detail/GoodsDetail'
import ClearAccount from './clearAccount/container/ClearAccount'

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
                <Route path='/allOrder' component={allOrder}></Route>
                <Route path='/comment' component={Comment}></Route>
                <Route path='/detail' component={Detail}></Route>
                <Route path='/shoppingCart' component={Cart}></Route>
                <Route path='/clearAccount' component={ClearAccount}></Route>
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
