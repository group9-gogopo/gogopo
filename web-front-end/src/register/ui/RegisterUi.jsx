import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

import {
  Container
} from './StyledRegister'

import logo from '../../assets/images/logo.png'

import RegisterTab from './RegisterTab'

@withRouter
class RegisterUi extends Component {
  handleClick = () => {
    let { history } = this.props
    history.push('/login')
  }
  render(){
    return (
      <Container>
        <header>
          <img src={logo} alt=""/>
          <h1>已有账号? <span onClick={this.handleClick}>登录</span></h1>
        </header>
        <RegisterTab></RegisterTab>
      </Container>
    );
  }
}

export default RegisterUi;