import React, { Component } from 'react';
import { Header } from './StyledHeader'
import img from '../../asset/img/index/logo.png'
import { Input } from 'antd';
import { 
    Link
  } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreator from '../../home/index/actionCreator'

import { Menu, Dropdown } from 'antd';



const { Search } = Input;
const onSearch = value => console.log(value);


const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={{
            pathname: "/allOrder",
            state: 1
            }}>全部
        </Link> 
      </Menu.Item>
      <Menu.Item key="1">
         <Link to={{
            pathname: "/allOrder",
            state: 2,
            }}>未发货
        </Link> 
      </Menu.Item>
      <Menu.Item key="2">
         <Link to={{
            pathname: "/allOrder",
            state: 3,
            }}>待付款
        </Link> 
      </Menu.Item>
      <Menu.Item key="3">
         <Link to={{
            pathname: "/allOrder",
            state: 4,
            }}>待发货
        </Link> 
      </Menu.Item>
      <Menu.Item key="4">
         <Link to={{
            pathname: "/allOrder",
            state: 5,
            }}>已完成
        </Link> 
      </Menu.Item>
      <Menu.Item key="5">
         <Link to={{
            pathname: "/allOrder",
            state: 6,
            }}>评价
        </Link> 
      </Menu.Item>
    </Menu>
  );
@connect(
    (state) => {
        return {
            num:state.home.num
        }
    },
    (dispatch)=>({
        addNum(num){
            dispatch(actionCreator.changeNum(num))        
        }
    })

)

class header extends Component {

    render() {
        return (
              <Header>
                <div className='top'>
                    <div>
                        <span>欢迎光临果果铺</span>
                        <span><Link to="/login">[ 登录 ]</Link></span>
                        <span><Link to="/register">[ 注册 ]</Link></span>
                        
                    </div>
                    <ul>
                        <li><Link to="/home">返回首页</Link></li>
                        <li><Link to="/profile">个人中心</Link></li>
                        <li>
                            <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            我的订单
                            </a>
                        </Dropdown>
                        </li>

                    </ul>
                </div>
                <div className='bottom'>
                    <div className='img'><img src={img} alt=""/></div>

                    <Search
                        placeholder="您今天想吃什么水果？搜下看看  有惊喜"
                        allowClear
                        onSearch={onSearch}
                        style={{ width: 200, margin: '0 10px' }}
                    />


                    <p>
                        <span className="active">芒果</span>   &nbsp;&nbsp;&nbsp;
                        <span>樱桃</span>   &nbsp;&nbsp;&nbsp;
                        <span>苹果</span>   &nbsp;&nbsp;&nbsp;
                        <span>山竹</span>
                    </p>

                    <div className="cart"><Link to="/shoppingCart">购物车(&nbsp;<span>{this.props.num}</span>&nbsp;)</Link></div>                   
                </div>

              </Header>

        );
    }
}

export default header;