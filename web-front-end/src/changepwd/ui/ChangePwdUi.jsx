import React from 'react';
import { useHistory } from 'react-router-dom'

import {
  Container
} from './StyledChangePwd'

import Nav from './Nav'

import logo from '../../assets/images/logo.png'

function ChangePwdUi(props) {
  const history = useHistory()
  const handleClick = () => {
    history.push('/login')
  }

  return (
    <Container>
      <header>
        <img src={logo} alt=""/>
        <h1>找回密码 <span onClick={handleClick}>登录</span></h1>
      </header>
      <Nav {...props}></Nav>
    </Container>
  );
}

export default ChangePwdUi;