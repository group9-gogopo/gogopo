import React, { Component } from 'react';
import { Header } from './StyledHeader'
import img from '../../asset/img/index/logo.png'
import { Input } from 'antd';
import { 
    Link
  } from 'react-router-dom'


const { Search } = Input;
const onSearch = value => console.log(value);

class header extends Component {

    render() {
        return (
              <Header>
                <div className='top'>
                    <div>
                        <span>欢迎光临果果铺</span>
                        <span><Link to="/login">[登录]</Link></span>
                        <span><Link to="/login">[注册]</Link></span>
                        
                    </div>
                    <ul>
                        <li>返回首页</li>
                        <li>个人中心</li>
                        <li>我的订单</li>
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
                    <p>芒果&nbsp;&nbsp;&nbsp;<span>樱桃</span>&nbsp;&nbsp;苹果 &nbsp;&nbsp;&nbsp;山竹</p>

                    <div className="cart">购物车</div>                   
                </div>

              </Header>

        );
    }
}

export default header;