import React, { Component } from 'react';
import {AllOrderNav} from './StyledAllOrder'

class OrderNav extends Component {
    render() {
        return (
            <AllOrderNav>
                <ul>
                    <li><a href="#" className='active'>全部</a></li>
                    <li><a href="#">未发货</a></li>
                    <li><a href="#">待付款</a></li>
                    <li><a href="#">待发货</a></li>
                    <li><a href="#">已完成</a></li>
                    <li><a href="#">评价</a></li>
                </ul>
            </AllOrderNav>
        );
    }
}

export default OrderNav;