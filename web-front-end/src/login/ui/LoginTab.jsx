import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { LoginTabWrap } from '../ui/StyledLogin'

@withRouter
class LoginTab extends Component {
  state = {
    account: '',
    password: '',
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
      console.log(this.state.account)
      console.log(this.state.password)
    }
  }

  handleClick = () => {
    let { history } = this.props
    history.push('/register')
  }


  componentDidMount() {
  
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
              type="text"
              onChange={this.handleChange2()}
            />
          </p>
          <h2>忘记密码？</h2>
          <button type="submit" >登录</button>
        </form>
        <div>
          还没有账号？
          <span onClick={this.handleClick}>免费注册</span>
        </div>
      </LoginTabWrap>
    );
  }
}

export default LoginTab;