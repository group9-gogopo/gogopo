import React from 'react';

import {
  Container
} from './StyledChangePwd'

import Nav from './Nav'

import logo from '../../assets/images/logo.png'

function ChangePwdUi(props) {
  return (
    <Container>
      <header>
        <img src={logo} alt=""/>
        <h1>找回密码 <span>登录</span></h1>
      </header>
      <Nav {...props}></Nav>
      
    </Container>
  );
}

export default ChangePwdUi;