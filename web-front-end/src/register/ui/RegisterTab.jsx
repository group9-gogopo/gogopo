import React, { Component } from 'react';

import {FormWrap} from './StyledRegister'

class RegisterTab extends Component {
  state = {
    username: '',
    tel: '',
    code: '',
    createpwd: '',
    repwd: '',
  }

  handleUserName = () => {
    return (e) => {
      this.setState({
        usrname: e.target.value
      })
    }
  }
  handleBlur1 = () => {
    console.log(0)
    let input1 = document.getElementById('username')
    let username = input1 && input1.value
    let regUserName = document.getElementsByClassName('regUserName')
    console.log(regUserName.textContent)
    console.log(username)
      let reg = /^[A-Z]{1}[A-Za-z]{5,19}/;
      if(reg.test(username)) {
        regUserName.textContent = '密码格式正确';
      } else {
        regUserName.innerText = '密码格式错误'
      }
    }

  handleTel = () => {
    return (e) => {
      this.setState({
        tel: e.target.value
      })
    }
  }

  handleCode = () => {
    return (e) => {
      this.setState({
        code: e.target.value
      })
    }
  }

  handlePwd = () => {
    return (e) => {
      this.setState({
        createpwd: e.target.value
      })
    }
  }

  handleRePwd = () => {
    return (e) => {
      this.setState({
        repwd: e.target.value
      })
    }
  }

  handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      document.querySelector('input').value = '';
     
      console.log(this.state)
    }
  }

  componentDidMount() {
    this.handleUserName()
    //用户名重复提示
    // const h2 = document.querySelectorAll('h2')
    // console.log(h2[0].innerText)
  }
  render() {
    return (
        <FormWrap onSubmit={this.handleSubmit()}>
          <p>
            <label htmlFor="">用户名</label>
            <input type="text" id="username" onChange={this.handleUserName()} onBlur={this.handleBlur1}/>
            <span className="regUserName">1111111</span>
            <svg t="1603677074280" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7252" width="200" height="200"><path d="M512 64.003072c-247.412736 0-448 200.576-448 448.002048 0 247.419904 200.587264 447.990784 448 447.990784 247.431168 0 448-200.571904 448-447.990784 0-247.426048-200.568832-448.002048-448-448.002048z m-22.288384 201.660416c-0.007168-12.377088 10.028032-22.403072 22.40512-22.403072 12.367872 0.004096 22.411264 10.034176 22.411264 22.403072v268.778496c0 12.370944-10.036224 22.395904-22.411264 22.395904-12.367872 0.009216-22.406144-10.02496-22.406144-22.4l0.001024-268.7744z m21.941248 515.257344c-37.111808 0-67.196928-30.08-67.196928-67.18976s30.08512-67.198976 67.196928-67.198976c37.107712 0 67.19488 30.089216 67.19488 67.198976s-30.088192 67.18976-67.19488 67.18976z" fill="#ff574d" p-id="7253"></path></svg>
          </p>
          <h2 className="warning">用户名已被注册</h2>
          <p>
            <label htmlFor="">手机号</label>
            <input type="text" id="tel" onChange={this.handleTel()}/>
            <span className='forCode'>点击发送验证码</span>
          </p>
          <p>
            <label htmlFor="">短信动态码</label>
            <input type="text" id="code" onChange={this.handleCode()}/>
          </p>
          <p>
            <label htmlFor="">创建密码</label>
            <input type="text" id="createpwd" onChange={this.handlePwd()}/>
          </p>
          <div className="tips">
            <h3>低</h3>
            <h3>中</h3>
            <h3>高</h3>
          </div>
          <p>
            <label htmlFor="">确认密码</label>
            <input type="text" id="repwd" onChange={this.handleRePwd()}/>
          </p>
          <button type="submit">注册</button>
        </FormWrap>
    );
  }
}

export default RegisterTab;