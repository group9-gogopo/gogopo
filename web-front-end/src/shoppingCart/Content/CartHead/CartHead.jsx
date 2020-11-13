import React from 'react'
import {StyleCartHead} from './StyleCartHead'
const CartHead=()=> {

        return (
            <StyleCartHead >
                <ul>
                    <li>商品</li>
                    <li>单价(元)</li>
                    <li>数量</li>
                    <li>小计(元)</li>
                    <li>操作</li>
                </ul>
            </StyleCartHead>
        )
}

export default CartHead
