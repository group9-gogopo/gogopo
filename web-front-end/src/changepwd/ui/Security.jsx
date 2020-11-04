import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import {
  SecurityWrap
} from './StyledChangePwd'

import {
  regCode,
  regTel
} from '@u/regRules' 

function Security(props) {

  let [tel, setTel] = useState(null)
  let [code, setCode] = useState(null)

  //改变store中的current
  const current = useSelector(state => state.changepwd.current)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleAdd = useCallback((current) => {
    return () => {
      dispatch(ac.addCurrent(current))
      history.push('/changepwd/reset')
    }
  }, [dispatch,history])

  const handleReducer = useCallback((current) => {
    return () => {
      dispatch(ac.reduceCurrent(current))
      history.push('/changepwd/confirm')
    }
  }, [dispatch,history])

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(tel)
      console.log(code)
      // console.log(data.tel)
      // console.log(data.code)
    }
  }
  
  
  return (
    <SecurityWrap onSubmit={handleSubmit()}>
      <p>
        <label htmlFor="">输入绑定的手机号</label>
        <input 
          type="text" 
          defaultValue={tel} 
          autoComplete="off" 
          onBlur={regTel('regTel','forCode', tel && tel.tel)}
          onChange={(e) => setTel({
            tel:e.target.value
          })}
        />
        <span id="regTel"></span>
        <span id='forCode'>点击发送验证码</span>
      </p>
      <p>
        <label htmlFor="">输入验证码</label>
        <input 
          type="text" 
          defaultValue={code} 
          id="code"
          autoComplete="off" 
          onBlur={regCode('regCode', code && code.code)}
          onChange={(e) => setCode({
            code: e.target.value
          })}
        />
        <span id="regCode"></span>
      </p>
      <button type='submit' onClick={handleReducer(current)}>上一步</button>
      <button type='submit' onClick={handleAdd(current)}>下一步</button>
    </SecurityWrap>
  );
}

export default Security;