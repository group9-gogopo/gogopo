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
                index: 0,
                }}>国产水果
        </Link> 
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to={{
                  pathname: '/allProduct',
                  index: 1,
                  }}>进口水果
          </Link> 
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
          <Link to={{
                pathname: '/allProduct',
                index: 2,
                }}>水果饮品
          </Link> 
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
          <Link to={{
                    pathname: '/allProduct',
                    index: 3,
                    }}>果肉制品
              </Link> 
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
                <Link to={{
                      pathname: '/allProduct',
                      index: 4,
                      }}>礼品包装
                </Link> 
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
                    <li><Link to="/discounts">限时特惠</Link></li>
                    <li><Link to="/allProduct">所有果果</Link></li>
                    <li><Link to="/story">小果故事</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                </ul>
            </Nav>
        );
    }
}

export default nav