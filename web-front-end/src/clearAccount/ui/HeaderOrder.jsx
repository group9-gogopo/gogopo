import React from 'react'
import Address from './Address'
import OrderMessage from './OrderMessage'
import {
    HeaderO,
    OrderHeader} from './StyleAccount'
const HeaderOrder = (props) =>  {
    return (
        <HeaderO>
            <OrderHeader>确认订单</OrderHeader>
            <Address ></Address>
            <OrderMessage></OrderMessage>
        </HeaderO>
    )
}
export default HeaderOrder