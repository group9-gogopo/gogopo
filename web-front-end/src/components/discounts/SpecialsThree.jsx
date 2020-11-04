import React,{ useState, useEffect } from 'react';

import {
  ContainerThree
} from './StyledSpecials'

import { get } from '@u/http'

function SpecialsThere(props) {
  const [list, setList] = useState(null)

    useEffect(() => {
      (async () => {
        let result = await get('/api/special')
        console.log(result.three)
        setList(result.three)
      })()
    },[])
  return (
    <ContainerThree>
      {
        list && list.map(value => {
          return (
            <li
              key = {value.id}
            >
              <div className="specialsthreebox">
                <img src={value.img} alt=""/>
                <h1>{value.title}</h1>
                <div className="info">
                  <span>{value.info1}</span>
                  <span>{value.info2}</span>
                </div>
                <div className="price">
                  <div className="newprice">
                    ￥<span>{value.newprice}</span>
                  </div>
                  <div className="oldprice">
                    ￥<span>{value.oldprice}</span>
                  </div>
                  <div className="btn">立即抢购&gt;&gt;</div>
                </div>
              </div>
            </li>
          )
        })
      }
    </ContainerThree>
  );
}

export default SpecialsThere;