import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import {FormWrap} from './StyledRegister'

@withRouter
class RegisterTab extends Component {
  state = {
    username: '',
    tel: '',
    code: '',
    createpwd: '',
    repwd: '',
  }

  handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(this.state)
    }
    
  }
  //点击注册按钮，
  handleClick = () => {
    document.querySelector('input').innerHTML = '';
    alert('注册成功，是否直接跳转到登录页面')
    let { history } = this.props
    history.push('/login')
  }
  //用户名正则判断
  regUserName = () => {
    let regUserName = document.querySelector('.regUserName')

    let reg = /^[A-Z]{1}[A-Za-z]{5,19}/;

    if(reg.test(this.state.username)) {
      regUserName.innerHTML = '用户名格式正确';
      regUserName.style = 'color: green';
    } else {
      regUserName.innerHTML = '用户名格式错误';
      regUserName.style = 'color: red';
    }
  }
  //手机号正则判断
  regTel = () => {
    let regTel = document.querySelector('.regTel')
    let forCode = document.querySelector('.forCode')

    let reg = /^1[0-9]{10}$/;
    console.log(this.state.tel)

    if(reg.test(this.state.tel)) {      
      forCode.style = 'visibility: visible';
      regTel.style = 'visibility: hidden';
    } else {
      regTel.innerHTML = '手机号输入错误';
      regTel.style = 'color: red';
      forCode.style = 'visibility: hidden';
    }
  }
  //验证码正则判断
  regCode = () => {
    let regCode = document.querySelector('.regCode')

    let reg = /^[0-9]{6}$/;

    if(reg.test(this.state.code)) {      
      regCode.innerHTML = '动态码正确';
      regCode.style = 'color: green'
    } else {
      regCode.innerHTML = '动态码错误';
      regCode.style = 'color: red'
    }
  }
  //创建密码正则判断
  regPwd = () => {
    let regPwd = document.querySelector('.regPwd')

    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

    if(reg.test(this.state.createpwd)) {      
      regPwd.innerHTML = '密码格式正确';
      regPwd.style = 'color: green'
    } else {
      regPwd.innerHTML = '请输入8-16位字母与数字';
      regPwd.style = 'color: red'
    }
  }
    //确认密码验证
    regRePWd = () => {
      let regRePwd = document.querySelector('.regRePwd')
  
      if(this.state.createpwd === this.state.repwd) {
        regRePwd.innerHTML = '密码确认成功';
        regRePwd.style = 'color: green';
      } else {
        regRePwd.innerHTML = '两次密码输入不一致';
        regRePwd.style = 'color: red';
      }
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

  // componentDidMount() {
  //   this.handleUserName()
  //   //用户名重复提示
  //   // const h2 = document.querySelectorAll('h2')
  //   // console.log(h2[0].innerText)
  // }
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
              onBlur={this.regUserName} 
              placeholder='首字母为大写的5-19个英文字母'
            />
            <span className="regUserName"></span>
            <svg t="1603677074280" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7252" width="200" height="200"><path d="M512 64.003072c-247.412736 0-448 200.576-448 448.002048 0 247.419904 200.587264 447.990784 448 447.990784 247.431168 0 448-200.571904 448-447.990784 0-247.426048-200.568832-448.002048-448-448.002048z m-22.288384 201.660416c-0.007168-12.377088 10.028032-22.403072 22.40512-22.403072 12.367872 0.004096 22.411264 10.034176 22.411264 22.403072v268.778496c0 12.370944-10.036224 22.395904-22.411264 22.395904-12.367872 0.009216-22.406144-10.02496-22.406144-22.4l0.001024-268.7744z m21.941248 515.257344c-37.111808 0-67.196928-30.08-67.196928-67.18976s30.08512-67.198976 67.196928-67.198976c37.107712 0 67.19488 30.089216 67.19488 67.198976s-30.088192 67.18976-67.19488 67.18976z" fill="#ff574d" p-id="7253"></path></svg>
          </p>
          <h2 className="warning">用户名已被注册</h2>
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
              onBlur={this.regTel} />
            <span className="regTel"></span>
            <span className='forCode'>点击发送验证码</span>
          </p>
          <p>
            <label htmlFor="">短信动态码</label>
            <input 
              type="text" 
              id="code" 
              autoComplete="off" 
              defaultValue={this.state.code}
              onChange={(e) => this.setState({
                code: e.target.value
              })} 
              onBlur={this.regCode}/>
            <span className="regCode"></span>
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
              onBlur={this.regPwd} 
              onKeyUp={this.handleKeyUp}/>
            <span className="regPwd"></span>
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
              onBlur={this.regRePWd}/>
            <span className="regRePwd"></span>
          </p>
          <button type="submit" >注册</button>
        </FormWrap>
    );
  }
}

export default RegisterTab;