import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginUi from '../ui/LoginUi'
import { actionCreator as ac } from '../../login'

@connect(
  dispatch => ({
    changeLoginTab(isLogin) {
      dispatch(ac.changeLoginTab(isLogin))
    }
  })
)

class Login extends Component {
  handleClick = (isLogin) => {
    return () => {
      this.props.changeLoginTab(isLogin)
    }
  }
  render() {
    return (
        <LoginUi></LoginUi>
    );
  }
}

export default Login;