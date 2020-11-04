import React from 'react';
import {
  Container
} from './StyledSpecials'

function Specials(props) {
  return (
    <Container {...props}>
      <div className='header'>
        <div className="trait">
          <p>{props.trait1}</p>
          <p>{props.trait2}</p>
        </div>
        <div className="sort">
          {props.sort}
        </div>
      </div>
      <div className="info">
        <h2>{props.info1}</h2>
        <h3>{props.info2}</h3>
      </div>
      <div className="tit">
        {props.tit}
      </div>
      <div className='price'>
        <h1>特惠价</h1>
        <h2>￥<span>{props.price}</span></h2>
        <div className='box'>
          <button>立即购买</button>
        </div>
      </div>
    </Container>
  );
}

export default Specials;