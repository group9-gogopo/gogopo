import React, { Component } from 'react'
import { StyleCartFooter } from './StyleCartFooter'
import PropTypes  from 'prop-types'
import memoize from 'memoize-one'
export class CartFooter extends Component {
    static propTypes = {
        data: PropTypes.array
    }

    tolPrice = memoize((list)=>{
        console.log(list)
        return list.reduce((value,item)=>{
            return value+item.price*item.count
        },0)
    })
    render() {
        console.log(this.props.data)
        return (
            <StyleCartFooter>
                <div>
                    <p></p>
                    <span>全选</span>
                </div>
                <span>已经选择<span></span>件商品</span>
                <i>总价: ￥<span>{this.tolPrice(this.props.data)}</span></i>
                <div >结算(1)</div>
            </StyleCartFooter>
        )
    }
}

export default CartFooter
