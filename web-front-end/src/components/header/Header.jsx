import React, { Component } from 'react';
import { Header } from './StyledHeader'
import img from '../../asset/img/index/logo.png'
import { Input } from 'antd';
import { withRouter } from 'react-router-dom'
import { 
    Link
  } from 'react-router-dom'
import { connect } from 'react-redux'
import actionCreator from '../../home/index/actionCreator'

import { Menu, Dropdown } from 'antd';
import { get } from "@u/http"



const { Search } = Input;
const onSearch = value =>0;


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
            list: state.shoppingCart.list,
            num:state.home.num
        }
    },
    (dispatch)=>({
        addNum(num){
            dispatch(actionCreator.changeNum(num))        
        }
    })

)
@withRouter
class header extends Component {

    handlerClick=(id)=>{
        return ()=>{
            this.props.history.push('/detail',{id:id})
        } 
    }

    onSearch = async(value) => {
        let res = await get('http://localhost:4400/api/goodslistlike',{like:value})
        console.log(res.goodslistLike)
        this.props.history.push("/allProduct",{data:res.goodslistLike,id:res.goodslistLike[0].id})
    
    }

    render() {
        console.log(this.props,"---")
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
                        onSearch={this.onSearch}
                        style={{ width: 200, margin: '0 10px' }}
                    />


                    <p>
                        <span className="active" onClick={this.handlerClick(1066)}>芒果</span>   &nbsp;&nbsp;&nbsp;
                        <span onClick={this.handlerClick(1010)}>柿子</span>   &nbsp;&nbsp;&nbsp;
                        <span onClick={this.handlerClick(1012)}>冬枣</span>   &nbsp;&nbsp;&nbsp;
                        <span onClick={this.handlerClick(1013)}>葡萄</span>
                    </p>

                    <div className="cart"><Link to="/shoppingCart">购物车(&nbsp;<span>{this.props.list.length}</span>&nbsp;)</Link></div>                   
                </div>

              </Header>

        );
    }
}

export default header;