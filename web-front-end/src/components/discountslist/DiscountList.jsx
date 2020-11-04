import React, {useEffect } from 'react';

import { Container } from './StyledDiscountList'

import { get } from '@u/http'
import { useState } from 'react';

function DiscountList(props) {
    const [list, setList] = useState(null)

    useEffect(() => {
      (async () => {
        let result = await get('/api/discount')
        // console.log(result)
        setList(result)
      })()
    },[])
  
  return (
    <Container>
        {
          list && list.map(value => {
            return (
              <li
                key={value.id}
              >
                <div className='imgBox'>
                  <img src={value.img} alt=""/>
                </div>
                <div className='price'>
                  <div className='oldPrice'>
                    ￥
                    <span>{value.oldprice}</span>
                  </div>
                  <div className='newPrice'>
                    ￥
                    <span>{value.newprice}</span>
                  </div>
                </div>
                <button className="purchase">
                  立即抢购 &gt;&gt;
                </button>
                <div className="name">
                  {value.title}
                </div>
              </li>
            )
          })
        }   
    </Container>
  );
}

export default DiscountList;