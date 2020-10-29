import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import {
  SecurityWrap
} from './StyledChangePwd'

function Security(props) {

  let [tel, setTel] = useState(null)
  let [code, setCode] = useState(null)

  //改变store中的current
  const current = useSelector(state => state.changepwd.current)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = useCallback((current) => {
    return () => {
      current = current + 1;
      dispatch(ac.changeCurrent(current))
      history.push('/changepwd/reset')
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
          onChange={(e) => setTel({
            tel:e.target.value
          })}
        />
      </p>
      <p>
        <label htmlFor="">输入验证码</label>
        <input 
          type="text" 
          defaultValue={code} 
          onChange={(e) => setCode({
            code: e.target.value
          })}
        />
      </p>
      <button type='submit' onClick={handleClick(current)}>下一步</button>
    </SecurityWrap>
  );
}

export default Security;