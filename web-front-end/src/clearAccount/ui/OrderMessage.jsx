import React from 'react'
import {Message} from './StyleAccount'
import { 
    Link
  } from 'react-router-dom'
const OrderMessage = (props) => {
    return (
        <Message>
            <span className='confirm'>确认订单信息</span>
            <div className='contain'>
                <div className='prod'>
                    <div className='pic'>
                        <span className='time'>下单时间：<span className='realTime'>2019-03-25</span></span>
                        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2798791900,2905206626&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className='desc'>产品描述产品描述产品描述产品描述产品描述产品描述产品描述
                    </div>
                    <div className="right">
                        <span className='price'>￥<span>200.00</span></span>
                        <p className="num">x <span>2</span></p>
                        <p className="all">合计：￥<span>400.00</span></p>
                    </div>
                </div>
                <div className='blank'></div>
                <div className='orderNum'>
                    订单号：<span>32547634254365</span>
                </div>
            </div>
            <div className="compute">
                <div className='detail'>
                    <p className='pay'>实付款：￥<span>400</span></p>
                    <p className='To'>寄送至：<span>北京市昌平区沙河镇沙阳路北京科技职业学院</span></p>
                    <p className='user'>收货人：<span>D女士 18342337728</span></p>
                </div>
                <div className='btn'>
                    <a href=""className='backToCart'><Link to='/shoppingCart'>返回购物车</Link></a>
                    <a href="" className='btn-real'>提交订单</a>
                </div>
            </div>
            
        </Message>
    )
}
export default OrderMessage
