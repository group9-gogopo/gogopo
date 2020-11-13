import React, { Component } from 'react';
import {OrderListInfo} from './StyledAllOrder'
class Comment extends Component {
    state={
        time:"2020-11-10",
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604729539404&di=f4c2e28742d6e4ec2deacfa33d99d079&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F003cb3327dcd1ccf2947ddd658b9fd1d5c8b30873bc86-VMu1lS_fw658"
      }
        render() {
            return (
                <OrderListInfo>
                    <div className='top'>
                      <div>
                          <p>交易成功，进行评价</p>
                          <p><img src={this.state.img} alt=""/></p>
                      </div> 
                      <div>
                        产品描述产品描述产品描述产品描述产品描述产品描述产品描述
                      </div> 
                      <div>
                          <p>已付款</p>
                          <p>￥ 200.0</p>
                          <p>x 2</p>
                          <div className='total'>
                            <span>共2件商品</span>
                            <span>合计  ￥200.00</span>
                          </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <p>订单号：123456789</p>  
                      <p>点击评价</p>
                    </div>
                </OrderListInfo>
            );
        }
    }

export default Comment;