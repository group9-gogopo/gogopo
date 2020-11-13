import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreator as ac } from '../../login'

import { LoginTabWrap } from '../ui/StyledLogin'

import { get } from '@u/http'

@connect(
  state => ({
    isLogin: state.isLogin
  }),

  dispatch => ({
    changeLoginTab(isLogin){
      dispatch(ac.changeLoginTab(isLogin))
    }
  })
)
@withRouter
class LoginTab extends Component {

  login = async () => {
    let { account, password } = this.state
    let result = await get(`api/login?username=${account}&createpwd=${password}`)
    let { ret, msg, id } = result.login
    if(ret) {
      //将用户id存入sessionStorage中
      sessionStorage.setItem('userId', id)
      this.handleLogin()
    }
  }

  state = {
    account: '',
    password: '',
    isLogin: true
  }

  handleChange1 = () => {
    return (e) => {
      this.setState({
        account: e.target.value
      })
    }
  }

  handleChange2 = () => {
    return (e) => {
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      this.login()
    }
  }

  handleLogin = (isLogin) => {
    this.props.changeLoginTab(isLogin)
    this.props.history.push('/home')
  }

  handleGotoRegister = () => {
    let { history } = this.props
    history.push('/register')
  }

  gotoChangePwd = () => {
    let { history } = this.props
    history.push('/changepwd')
  }
  
  render() {
    return (
      <LoginTabWrap>
        <h1>账号登录</h1>
        <form onSubmit={this.handleSubmit()}>
          <p>
            账号：
            <input 
              type="text"
              onChange={this.handleChange1()}
            />
          </p>
          <p>
            密码：
            <input 
              type="password"
              onChange={this.handleChange2()}
            />
          </p>
          <span>
            <p>用户名错误</p>
            <h2 onClick={this.gotoChangePwd}>忘记密码？</h2>
          </span>
          <button type="submit" onClick={this.handleLogin}>登录</button>
        </form>
        <div>
          还没有账号？
          <span onClick={this.handleGotoRegister}>免费注册</span>
        </div>
      </LoginTabWrap>
    );
  }

}

export default LoginTab;