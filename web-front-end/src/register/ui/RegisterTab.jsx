import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import {FormWrap} from './StyledRegister'

import { get, post } from '@u/http'

import {
  regUserName,
  regTel,
  regEmail,
  regPwd,
  regRePwd
} from '@u/regRules'


@withRouter
class RegisterTab extends Component {
  state = {
    username: '',
    tel: '',
    email: '',
    createpwd: '',
    repwd: '',
  }
  //验证用户名是否重复
  confirmUsername = async () => {
    let result = await get(`api/registerconfirm?username=${this.state.username}`)
    let { ret } = result.registerconfirm
    if(ret) {
      const h2 = document.getElementById('warning')
      h2.style = 'visibility : visible'
    }
  }

  //注册：将用户信息存储到数据中
  register = async () => {
    let { username, tel, email, createpwd } = this.state
    if(username && tel && email && createpwd){
      let result = await post('api/register',{
          username:  username,
          tel: tel,
          email: email,
          createpwd: createpwd})
      // console.log(result.insert)
      let { ret, msg } = result.insert
      if(ret) {
        alert(`${msg}，是否直接跳转到登录页面`)
        let { history } = this.props
        history.push('/login')
      }
    }

  }

  //提交事件
  handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      
      this.register()
    }
  }
  //用户名框失焦事件：验证用户名是否重复
  handleUsername = () => {
    // regUserName('regUserName', this.state.username)
    this.confirmUsername()
  }
  
  //密码强度验证
  handleKeyUp = () => {
    let n = 0;

    if (/\d/.test(this.state.createpwd)) n++;
    if(/[a-z]/.test(this.state.createpwd)) n++;
    if(/[A-Z]/.test(this.state.createpwd)) n++;
    this.pwdStrength(n)
  }

  pwdStrength = (n) => {
    let DefaultColor = "#ffffff";
    let LColor = "#FF0000";
    let MColor = "#FF9900";
    let HColor = "#33cc00";

    const l = document.querySelector('.l')
    const m = document.querySelector('.m')
    const h = document.querySelector('.h')

    switch (n) {
      case 1:
        MColor = HColor = DefaultColor;
        break;
      case 2:
        HColor = DefaultColor
        break;
      default:
        break;
    }

    l.style.background = LColor;
    m.style.background = MColor;
    h.style.background = HColor;
  }

  render() {
    return (
        <FormWrap onSubmit={this.handleSubmit()}>
          <p>
            <label htmlFor="">用户名</label>
            <input type="text" id="username" 
              autoComplete="off" 
              defaultValue={this.state.username}
              onChange={(e) => this.setState({
                username: e.target.value
              })} 
              onBlur={this.handleUsername}
              onBlur={regUserName('regUserName', this.state.username)} 
              placeholder='请输入用户名'
            />
            <span id="regUserName"></span>
            <svg t="1603677074280" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7252" width="200" height="200"><path d="M512 64.003072c-247.412736 0-448 200.576-448 448.002048 0 247.419904 200.587264 447.990784 448 447.990784 247.431168 0 448-200.571904 448-447.990784 0-247.426048-200.568832-448.002048-448-448.002048z m-22.288384 201.660416c-0.007168-12.377088 10.028032-22.403072 22.40512-22.403072 12.367872 0.004096 22.411264 10.034176 22.411264 22.403072v268.778496c0 12.370944-10.036224 22.395904-22.411264 22.395904-12.367872 0.009216-22.406144-10.02496-22.406144-22.4l0.001024-268.7744z m21.941248 515.257344c-37.111808 0-67.196928-30.08-67.196928-67.18976s30.08512-67.198976 67.196928-67.198976c37.107712 0 67.19488 30.089216 67.19488 67.198976s-30.088192 67.18976-67.19488 67.18976z" fill="#ff574d" p-id="7253"></path></svg>
          </p>
          <h2 id="warning">用户名重复</h2>
          <p>
            <label htmlFor="">手机号</label>
            <input 
              type="text" 
              id="tel" 
              autoComplete="off" 
              defaultValue={this.state.tel}
              onChange={(e) => this.setState({
                tel: e.target.value
              })} 
              onBlur={regTel('regTel',this.state.tel)} />
            <span id="regTel"></span>
          </p>
          <p>
            <label htmlFor="">邮箱</label>
            <input 
              type="text" 
              id="code" 
              autoComplete="off" 
              defaultValue={this.state.email}
              onChange={(e) => this.setState({
                email: e.target.value
              })} 
              onBlur={regEmail('regCode',this.state.email)}/>
            <span id="regCode"></span>
          </p>
          <p>
            <label htmlFor="">创建密码</label>
            <input 
              type="text" 
              id="createpwd" 
              autoComplete="off" 
              defaultValue={this.state.createpwd}
              placeholder="8-16位大小写字母和数字" 
              onChange={(e) => this.setState({
                createpwd: e.target.value
              })} 
              onBlur={regPwd('regPwd',this.state.createpwd)} 
              onKeyUp={this.handleKeyUp}/>
            <span id="regPwd"></span>
          </p>
          <div className="tips">
            <h3 className="l">低</h3>
            <h3 className="m">中</h3>
            <h3 className="h">高</h3>
          </div>
          <p>
            <label htmlFor="">确认密码</label>
            <input 
              type="text" 
              id="repwd" 
              autoComplete="off" 
              defaultValue={this.state.repwd}
              onChange={(e) => this.setState({
                repwd: e.target.value
              })} 
              onBlur={regRePwd(this.state.createpwd, this.state.repwd, 'regRePwd')}/>
            <span id="regRePwd"></span>
          </p>
          <button type="submit" >注册</button>
        </FormWrap>
    );
  }
}

export default RegisterTab;