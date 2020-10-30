import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import {
  AccomplishWrap
} from './StyledChangePwd'


function Accomplish(props) {

  const history = useHistory()
  const dispatch = useDispatch()
  const current = useSelector(state => state.changepwd.current)

  const handleLogin = useCallback((current) => {
    return () => {
      dispatch(ac.zeroCurrent(current))
      history.push('/login')
    }
  }, [dispatch,history])

  const handleReducer = useCallback((current) => {
    return () => {
      dispatch(ac.reduceCurrent(current))
      history.push('/changepwd/reset')
    }
  }, [dispatch,history])
  
  return (
    <AccomplishWrap>
      <p>修改成功</p>
      <button onClick={handleReducer(current)}>上一步</button>
      <button onClick={handleLogin(current)}>登录</button>
    </AccomplishWrap>
  );
}

export default Accomplish;