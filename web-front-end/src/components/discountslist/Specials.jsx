import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom'

import {
  Container
} from './StyledSpecials'

function Specials(props) {
  const history = useHistory()

  const handleGotoDetail = useCallback((id) => {
    return () => {
      history.push({pathname: "/detail",id:{id}})
    }
  }, [history])

  return (
    <Container {...props}>
      <div className='header'>
        <h1>
          {props.nm}
        </h1>
        <div className='info'>
          {props.info}
        </div>
      </div>
      <div className="name">
        {props.name}
      </div>
      <div className='price'>
        <h1>特惠价</h1>
        <h2>￥<span>{props.price}</span></h2>
        <div className='box'>
          <button onClick={handleGotoDetail(props.id)}>立即购买</button>
        </div>
      </div>
    </Container>
  );
}

export default Specials;