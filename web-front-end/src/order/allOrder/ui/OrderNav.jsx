import React, { Component } from 'react';
import {AllOrderNav} from './StyledAllOrder'
import OrderList from './OrderList'
import Unshipped from './Unshipped'
import Unpay from './Unpay'
import Comment from './Comment'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Demo = (props) => (
    <Tabs defaultActiveKey={String(props.index)} centered>
      <TabPane tab="全部" key="1">
          <OrderList handleOnGoToComments={props.handleOnGoToComments}></OrderList>
      </TabPane>
      {/* <TabPane tab="未发货" key="2">
          <Unshipped></Unshipped>
      </TabPane> */}
      {/* <TabPane tab="待付款" key="3">
          <Unpay></Unpay>
      </TabPane> */}
      {/* <TabPane tab="待发货" key="4">
         <Unshipped></Unshipped>
      </TabPane> */}
      <TabPane tab="未评价" key="2">
           <OrderList handleOnGoToComments={props.handleOnGoToComments}></OrderList>
      </TabPane>
      <TabPane tab="评价" key="3">
          <Comment></Comment>
      </TabPane>
    </Tabs>
  );

class OrderNav extends Component {
    render() {

        return (
            <AllOrderNav>
                <Demo 
                handleOnGoToComments={this.props.handleOnGoToComments}
                index={this.props.index}
                />
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