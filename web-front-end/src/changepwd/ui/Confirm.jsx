import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'


import {
  ConfirmWrap
} from './StyledChangePwd'

import { regUserName } from '@u/regRules'

function Confirm(props) {
  let [username, setUserName] = useState(null)

  const current = useSelector(state => state.changepwd.current)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = useCallback((current) => {
    return () => {
      dispatch(ac.addCurrent(current))
      history.push('/changepwd/security')
    }
  }, [dispatch,history])

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(username)
    }
  }

  return (
    <>
      <ConfirmWrap onSubmit={handleSubmit()}>
        <p>
          <label htmlFor="">请输入用户名</label>
          <input 
            type="text" 
            defaultValue={username}
            autoComplete="off" 
            placeholder='首字母为大写的5-19个英文字母'
            onBlur={regUserName("regUserName", username && username.username)}
            onChange={(e) => setUserName({
              username: e.target.value
            })}
          />
          <span id="regUserName"></span>
        </p>
        <button type='submit' onClick={handleClick(current)}>下一步</button>
      </ConfirmWrap>
    </>

  );
}

export default Confirm