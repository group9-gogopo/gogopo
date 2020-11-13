import React, { useCallback, useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../changepwd/index'

import _ from 'underscore'

import { patch } from '@u/http'

import {
  ResetWrap
} from './StyledChangePwd'

import {
  regPwd,
  regRePwd
}  from '@u/regRules'

function Reset(props) {
  let [pwd, setPwd] = useState(null)
  let [repwd, setRepwd] = useState(null)

  //改变store中的current
  const current = useSelector(state => state.changepwd.current)
  const userid = useSelector(state => state.changepwd.userid)

  const dispatch = useDispatch()
  const history = useHistory()
  const handleAdd = useCallback((current) => {
    return () => {
      dispatch(ac.addCurrent(current))
      history.push('/changepwd/accomplish')
    }
  }, [dispatch,history])

  let createpwd = pwd && pwd.pwd
  useEffect(() => {
    (async () => {
      await patch('/api/changepwd',{
        userid: userid,
        createpwd
      })
    })()
  },[pwd,userid])

  const handleReducer = useCallback((current) => {
    return () => {
      dispatch(ac.reduceCurrent(current))
      history.push('/changepwd/security')
    }
  }, [dispatch,history])

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
    }
  }
  const handleChangePwd = _.debounce((e) => {
    setPwd({pwd: e.target.value})
  },1000)

  return (
    <ResetWrap onSubmit={handleSubmit()}>
      <h1>设置新密码</h1>
      <p>
        <label htmlFor="">新密码</label>
        <input 
          type="password" 
          placeholder="8-16位大小写字母和数字"
          defaultValue={pwd} 
          onBlur={regPwd('pwdInfo', pwd && pwd.pwd)}
          onChange={e => {
            e.persist()
            handleChangePwd(e)
          }}
        />
        <span id="pwdInfo"></span>
      </p>
      <p>
        <label htmlFor="">确认新密码</label>
        <input 
          type="password" 
          defaultValue={repwd} 
          onBlur={regRePwd(pwd && pwd.pwd, repwd && repwd.repwd, 'repwdInfo')}
          onChange={(e) => setRepwd({
            repwd:e.target.value
          })}
        />
        <span id="repwdInfo"></span>
      </p>
      <p>
        <button type='submit' onClick={handleReducer(current)}>上一步</button>
        <button type='submit' onClick={handleAdd(current)}>下一步</button>
      </p>
    </ResetWrap>
  );
}

export default Reset;