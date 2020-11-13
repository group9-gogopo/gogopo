import React,{useState} from 'react'
import {Message} from './StyleAccount'
import { useDispatch, useSelector } from 'react-redux'
import { 
    Link
  } from 'react-router-dom'
const OrderMessage = (props) => {
    const value = useSelector((state) => state.clearAccount.data)
    function handlerSelect(){

    }
    return (
        <Message>
            <span className='confirm'>确认订单信息</span>
            <div className='contain'>
                <ul className='prod'>
                        <span className='time'>下单时间：<span className='realTime'>2019-03-25</span></span>
                    <li>
                        <div className='pic'>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2798791900,2905206626&fm=26&gp=0.jpg" alt=""/>
                        </div>
                        <div className='desc'>产品描述产品描述产品描述产品描述产品描述产品描述产品描述
                        </div>
                        <div className="right">
                            <span className='price'>￥<span>200.00</span></span>
                            <p className="num">x <span>2</span></p>
                            <p className="all">合计：￥<span>400.00</span></p>
                        </div>
                    </li>
                    <li>
                        <div className='pic'>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2798791900,2905206626&fm=26&gp=0.jpg" alt=""/>
                        </div>
                        <div className='desc'>产品描述产品描述产品描述产品描述产品描述产品描述产品描述
                        </div>
                        <div className="right">
                            <span className='price'>￥<span>200.00</span></span>
                            <p className="num">x <span>2</span></p>
                            <p className="all">合计：￥<span>400.00</span></p>
                        </div>
                    </li>
                    <li>
                        <div className='pic'>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2798791900,2905206626&fm=26&gp=0.jpg" alt=""/>
                        </div>
                        <div className='desc'>产品描述产品描述产品描述产品描述产品描述产品描述产品描述
                        </div>
                        <div className="right">
                            <span className='price'>￥<span>200.00</span></span>
                            <p className="num">x <span>2</span></p>
                            <p className="all">合计：￥<span>400.00</span></p>
                        </div>
                    </li>
                
                </ul>
                <div className='blank'></div>
                <div className='orderNum'>
                        订单号：<span>32547634254365</span>
                </div>
                <div className="submit">
                    <div className="compute">
                        <div className='detail'>
                            <p className='pay'>实付款：￥<span>400</span></p>
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
