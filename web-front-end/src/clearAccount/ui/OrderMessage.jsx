import React from 'react'
import {Message} from './StyleAccount'
import { useSelector } from 'react-redux'

const OrderMessage = (props) => {
    let clearAcList=props.clearAc.data
    const value = useSelector((state) => state.clearAccount.data)
    return (
        <Message>
            <span className='confirm'>确认订单信息</span>
            <div className='contain'>
                <ul className='prod'>
                        <span className='time'>下单时间：<span className='realTime'>2019-03-25</span></span>
                    
                   {
                       clearAcList.map((item)=>{
                        return(
                            <li key ={item.goodsid}>
                        <div className='pic'>
                            <img src={item.shoppingCartImage} alt=""/>
                        </div>
                        <div className='desc'>{item.shoppingCartName}
                        </div>
                        <div className="right">
                        <span className='price'>￥<span>{item.shoppingCartPrice}</span></span>
                            <p className="num">x <span>{item.shoppingCartNum}</span></p>
                            <p className="all">合计：￥<span>{item.shoppingCartPrice*item.shoppingCartNum}</span></p>
                        </div>
                    </li>
                        )
                       })
                   }
                
                </ul>
                <div className='blank'></div>
                <div className='orderNum'>
                        订单号：<span>32547634254365</span>
                </div>
                <div className="submit">
                    <div className="compute">
                        <div className='detail'>
                            <p className='pay'>实付款：￥<span>{props.clearAc.allPrice}</span></p>
                            <p className='To'>寄送至：<span>{JSON.stringify(value) == "{}"?'请选择收货地址！':(value.location)}</span></p>
                            <p className='user'>收货人：<span>{JSON.stringify(value) == "{}"?'请选择收货地址！':(value.name + ' ' + value.tel)}</span></p>
                        </div>
                        <div className='btn'>
                            <div href="/shoppingCart"className='backToCart'></div>
                            <div href="" className='btn-real'>提交订单</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </Message>
    )
}
export default OrderMessage
