import React, { useState, useEffect } from 'react';

import {
  DiscountsListWrap
} from './StyledDiscounts'


import Specials from '@c/discountslist/Specials'


function DiscountsList(props) {
  const [list, setList] = useState(null)
  
  useEffect(() => {
    let goodslist = props.goodslist && props.goodslist.slice(4,19)
    setList(goodslist)
  },[props])

  return (
    <DiscountsListWrap>
      {
        list && list.map(value => {
          return (
            <li 
              key={value.id}
            >
              <img src={value.image} alt=""/>
              <Specials
                margin = '0 52.5px 0 60px'
                nm = {value.nm}
                name = {value.name}
                info = {value.info}
                price = {value.newprice}
                id = {value.id}
              ></Specials>
            </li>
          )
        })
      }
    </DiscountsListWrap>
  );
}

export default DiscountsList;