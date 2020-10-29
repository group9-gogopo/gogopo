import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import {
  ResetWrap
} from './StyledChangePwd'

function Reset(props) {
  let [pwd, setPwd] = useState(null)
  let [repwd, setRepwd] = useState(null)

  //改变store中的current
  const current = useSelector(state => state.changepwd.current)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = useCallback((current) => {
    return () => {
      current = current + 1;
      dispatch(ac.changeCurrent(current))
      history.push('/changepwd/accomplish')
    }
  }, [dispatch,history])

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(pwd)
      console.log(repwd)
    }
  }

    const regPwd = () => {
      let pwdInfo = document.querySelector('.pwdInfo')

      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

      if(reg.test(pwd.pwd)) {      
        pwdInfo.innerHTML = '密码格式正确';
        pwdInfo.style = 'color: green'
      } else {
        pwdInfo.innerHTML = '请输入8-16位字母与数字';
        pwdInfo.style = 'color: red';
      }
    }
    //确认密码验证
    const regRePWd = () => {
      let repwdInfo = document.querySelector('.repwdInfo')
  
      if(pwd.pwd === repwd.repwd) {
        repwdInfo.innerHTML = '密码确认成功';
        repwdInfo.style = 'color: green';
      } else {
        repwdInfo.innerHTML = '两次密码输入不一致';
        repwdInfo.style = 'color: red';
      }
    }

  return (
    <ResetWrap onSubmit={handleSubmit()}>
      <h1>设置新密码</h1>
      <p>
        <label htmlFor="">新密码</label>
        <input 
          type="text" 
          placeholder="8-16位大小写字母和数字"
          defaultValue={pwd} 
          onBlur={regPwd}
          onChange={(e) => setPwd({
            pwd:e.target.value
          })}
        />
        <span className="pwdInfo"></span>
      </p>
      <p>
        <label htmlFor="">确认新密码</label>
        <input 
          type="text" 
          defaultValue={repwd} 
          onBlur={regRePWd}
          onChange={(e) => setRepwd({
            repwd:e.target.value
          })}
        />
        <span className="repwdInfo"></span>
      </p>
      <button type='submit' onClick={handleClick(current)}>下一步</button>
    </ResetWrap>
  );
}

export default Reset;