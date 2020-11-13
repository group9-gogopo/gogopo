import React, { useEffect,useCallback } from 'react';
import { useHistory } from 'react-router-dom'

import { Container } from './StyledDiscountList'

import { useState } from 'react';

function DiscountList(props) {
    const history = useHistory()

    const [list, setList] = useState(null)

    useEffect(() => {
      let goodslist = props.goodslist && props.goodslist.slice(0,4)
      setList(goodslist)
    },[props])

    const handleGotoDetail = useCallback((id) => {
      return () => {
        history.push({pathname: "/detail",id:{id}})
      }
    }, [history])
  
  return (
    <Container>
        {
          list && list.map(value => {
            return (
              <li
                key={value.id}
              >
                <div className='imgBox'>
                  <img src={value.image} alt=""/>
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
                <button className="purchase" onClick={handleGotoDetail(value.id)}>
                  立即抢购 &gt;&gt;
                </button>
                <div className="name">
                  {value.nm}
                </div>
              </li>
            )
          })
        }   
    </Container>
  );
}

export default DiscountList;