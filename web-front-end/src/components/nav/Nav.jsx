import React, { Component } from 'react';
import {Nav} from './StyledNav'
import { 
    Link
  } from 'react-router-dom'

import { Menu, Dropdown } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>   
        <Link to={{
                pathname: '/allProduct',
                index: 1,
                }}>国产水果
        </Link> 
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          进口水果
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          水果饮品
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
         果肉制品
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        礼盒包装
        </a>
      </Menu.Item>
    </Menu>
  );

class nav extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <li>
                        <Dropdown overlay={menu}  >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        所有果果分类
                        </a>
                       </Dropdown>
                    </li>
                    <li><Link to="/home">首页</Link></li>
                    <li>今日限购</li>
                    <li><Link to="/allProduct">所有果果</Link></li>
                    <li><Link to="/story">小果故事</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                </ul>
            </Nav>
        );
    }
}

export default nav