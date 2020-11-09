import React, { useState, useEffect } from 'react';

import {
  DiscountsListWrap
} from './StyledDiscounts'

import { get } from '@u/http'

import Specials from '@c/discountslist/Specials'


function DiscountsList(props) {
  const [list, setList] = useState(null)

    useEffect(() => {
      (async () => {
        let result = await get('api/goodslist?sort=localfruit')
        // console.log(result)
        setList(result.goodslist)
      })()
    },[])

  return (
    <DiscountsListWrap>
      {
        list && list.map(value => {
          return (
            <li 
              key={value.id}
            >
              <img src={value.img} alt=""/>
              <Specials
                margin = '0 0 0 100px'
                trait1 = {value.trait1}
                trait2 = {value.trait2}
                sort = {value.sort}
                info1 = {value.info1}
                info2 = {value.info2}
                tit = {value.title}
                price = {value.price}
              ></Specials>
            </li>
          )
        })
      }
    </DiscountsListWrap>
  );
}

export default DiscountsList;