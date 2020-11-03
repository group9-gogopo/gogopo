import React ,{Component} from 'react'
import Home from './home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/Login'

export default class App extends Component{
    render(){
        return(
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Redirect from="/" to="/home"></Redirect>  
            </Switch>
               
           
        )
    }
}