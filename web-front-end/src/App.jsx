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
}