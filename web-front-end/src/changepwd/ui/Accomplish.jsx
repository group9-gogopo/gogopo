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
  }, [dispatch, history])

  const handleReducer = useCallback((current) => {
    return () => {
      dispatch(ac.reduceCurrent(current))
      history.push('/changepwd/reset')
    }
  }, [dispatch, history])

  return (
    <AccomplishWrap>
      <p>
        <svg t="1605169300541" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3335" width="200" height="200">
          <path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z" fill="#52C41A" p-id="3336"></path></svg>
        <span>修改成功</span>
      </p>
      <p>
        <button onClick={handleReducer(current)}>上一步</button>
        <button onClick={handleLogin(current)}>登录</button>
      </p>
    </AccomplishWrap>
  );
}

export default Accomplish;