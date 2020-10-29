import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'


import {
  ConfirmWrap
} from './StyledChangePwd'

function Confirm(props) {
  let [username, setUserName] = useState(null)

  const current = useSelector(state => state.changepwd.current)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = useCallback((current) => {
    return () => {
      current = current + 1;
      dispatch(ac.changeCurrent(current))
      history.push('/changepwd/security')
    }
  }, [dispatch,history])

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      console.log(username)
    }
  }

  //用户名正则判断
  const regUserName = () => {
    let regUserName = document.querySelector('.regUserName')

    const reg = /^[A-Z]{1}[A-Za-z]{5,19}$/;

    if(reg.test(username.username)) {
      regUserName.innerHTML = '用户名格式正确';
      regUserName.style = 'color: green';
    } else {
      regUserName.innerHTML = '用户名格式错误';
      regUserName.style = 'color: red';
    }
  }

  return (
    <>
      <ConfirmWrap onSubmit={handleSubmit()}>
        <p>
          <label htmlFor="">请输入用户名</label>
          <input 
            type="text" 
            placeholder='首字母为大写的5-19个英文字母'
            onBlur={regUserName}
            onChange={(e) => setUserName({
              username: e.target.value
            })}
            defaultValue={username}
          />
          <span className="regUserName"></span>
        </p>
        <button type='submit' onClick={handleClick(current)}>下一步</button>
      </ConfirmWrap>
    </>

  );
}

export default Confirm