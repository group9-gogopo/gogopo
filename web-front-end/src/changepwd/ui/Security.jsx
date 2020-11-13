import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import {
  SecurityWrap
} from './StyledChangePwd'

import {
  regEmail,
  regTel
} from '@u/regRules' 

function Security(props) {

  let [tel, setTel] = useState(null)
  let [email, setEmail] = useState(null)

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
          onBlur={regTel('regTel', tel && tel.tel)}
          onChange={(e) => setTel({
            tel:e.target.value
          })}
        />
        <span id="regTel"></span>
      </p>
      <p>
        <label htmlFor="">输入绑定的邮箱</label>
        <input 
          type="text" 
          defaultValue={email} 
          id="code"
          autoComplete="off" 
          onBlur={regEmail('regCode', email && email.email)}
          onChange={(e) => setEmail({
            code: e.target.value
          })}
        />
        <span id="regCode"></span>
      </p>
      <p>
        <button type='submit' onClick={handleReducer(current)}>上一步</button>
        <button type='submit' onClick={handleAdd(current)}>下一步</button>
      </p>
    </SecurityWrap>
  );
}

export default Security;