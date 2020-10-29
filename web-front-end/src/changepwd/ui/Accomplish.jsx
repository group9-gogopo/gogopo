import React from 'react';
import { useHistory } from 'react-router-dom'

import {
  AccomplishWrap
} from './StyledChangePwd'

// import { Spin, Space } from 'antd'

function Accomplish(props) {

  const history = useHistory()
  const handleClick = () => {
    history.push('/login')
  }
  return (
    <AccomplishWrap>
      <p>修改成功</p>
      <button onClick={handleClick}>登录</button>
    </AccomplishWrap>
  );
}

export default Accomplish;