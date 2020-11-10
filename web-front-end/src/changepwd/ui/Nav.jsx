import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'


import Confirm from './Confirm'
import Security from './Security'
import Reset from './Reset'
import Accomplish from './Accomplish'

import {
  NavWrap
} from './StyledChangePwd'

const Nav = (props) => {
  let { url } = props.match
  const current = useSelector(state => state.changepwd.current)

  return (
    <>
      <NavWrap current={current}>
        <li className={current === 0 ? 'active' : ''} >1.确认用户名</li>
        <li className={current === 1 ? 'active' : ''} >2.安全验证</li>
        <li className={current === 2 ? 'active' : ''} >3.重置密码</li>
        <li className={current === 3 ? 'active' : ''} >4.完成修改</li>
      </NavWrap>
      <Switch>
        <Route path={`${url}/confirm`} component={Confirm}></Route>
        <Route path={`${url}/security`} component={Security}></Route>
        <Route path={`${url}/reset`} component={Reset}></Route>
        <Route path={`${url}/accomplish`} component={Accomplish}></Route>
        <Redirect from='/changepwd' to='/changepwd/confirm'></Redirect>
      </Switch>
    </>
  );

}

export default Nav;