import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import { get } from '@u/http'

import _ from 'underscore'

import {
  ConfirmWrap
} from './StyledChangePwd'

import { regUserName } from '@u/regRules'

function Confirm(props) {
  let [username, setUserName] = useState(null)

  const current = useSelector(state => state.changepwd.current)
  const userid = useSelector(state => state.changepwd.userid)

  let name = username && username.username

  useEffect(() => {
    (async () => {
      let result = await get(`/api/forid?username=${name}`)
      let { ret, msg, id } = result.forid
      if(ret) {
        dispatch(ac.storeUserid(id))
      }
    })()
  },[name])

  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = useCallback((current) => {
    return () => {
      dispatch(ac.addCurrent(current))
      history.push('/changepwd/security')
    }
  }, [dispatch,history])

  const handleChangeUsername = _.debounce((e) => {
    setUserName({username: e.target.value})
  },1000)

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
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
            onBlur={regUserName("regUserName", username && username.username)}
            onChange={e => {
              e.persist()
              handleChangeUsername(e)
            }}
          />
          <span id="regUserName"></span>
        </p>
        <button type='submit' onClick={handleClick(current)}>下一步</button>
      </ConfirmWrap>
    </>

  );
}

export default Confirm