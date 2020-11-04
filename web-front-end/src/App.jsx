import React ,{Component} from 'react'
import Home from './home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/Login'
import About from './home/about/ui/AboutUi'

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
                <Route path="/about">
                    <About></About>
                </Route>
                <Redirect from="/" to="/home"></Redirect>  
            </Switch>
               
           
        )
    }
}