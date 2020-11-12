import React, { Component } from 'react';
import {AllOrderNav} from './StyledAllOrder'
import OrderList from './OrderList'

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Demo = (props) => (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="全部" key="1">
          <OrderList handleOnGoToComments={props.handleOnGoToComments}></OrderList>
      </TabPane>
      <TabPane tab="未发货" key="2">
          {/* <OrderList></OrderList> */}
         未发货
      </TabPane>
      <TabPane tab="待付款" key="3">
        待付款
      </TabPane>
      <TabPane tab="待发货" key="4">
        待发货
      </TabPane>
      <TabPane tab="已完成" key="5">
        已完成
      </TabPane>
      <TabPane tab="评价" key="6">
       评价
      </TabPane>
    </Tabs>
  );

class OrderNav extends Component {
    render() {
        console.log(this.props)
        return (
            <AllOrderNav>
                <Demo handleOnGoToComments={this.props.handleOnGoToComments}/>
                {/* <ul>
                    <li><a href="#" className='active'>全部</a></li>
                    <li><a href="#">未发货</a></li>
                    <li><a href="#">待付款</a></li>
                    <li><a href="#">待发货</a></li>
                    <li><a href="#">已完成</a></li>
                    <li><a href="#">评价</a></li>
                </ul> */}
            </AllOrderNav>
        );
    }
}

export default OrderNav;