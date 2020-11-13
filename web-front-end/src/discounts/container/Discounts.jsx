import React, { useState, useEffect } from 'react';
import DiscountsUi from '../ui/DiscountsUi'

import { get } from '@u/http'



function Discounts(props) {
  const [list, setList] = useState(null)

    useEffect(() => {
      (async () => {
        let result = await get('api/goodslist?sort=localfruit&page=1&limit=19')
        setList(result.goodslist)
      })()
    },[])

  return (
    <DiscountsUi list={list}></DiscountsUi>
  );
}

export default Discounts;