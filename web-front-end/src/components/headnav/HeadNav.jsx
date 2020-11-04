import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import {
  Container
} from './StyledHeadNav'


//头部导航组件
@withRouter
class HeadNav extends Component {
  handleRegister = () => {
    let { history } = this.props
    history.push('/register')
  }

  handleGotoHome = () => {
    let { history } = this.props
    history.push('/home')
  }

  handleGotoLogin = () => {
    let { history } = this.props
    history.push('/login')
  }
  render() {
    return (
      <Container>
        <div className="header-left">
            <p>欢迎光临果果铺</p>
            <div onClick={this.handleGotoLogin}> <span >[ 登录 ]</span> </div>
            <div onClick={this.handleRegister}> <span> [ 注册 ]</span> </div>
        </div>
        <div className="header-right">
            <p onClick={this.handleGotoHome}>返回首页</p>
            <p>个人中心</p>
            <p>我的订单</p>
        </div>
      </Container>
    );
  }
}

export default HeadNav