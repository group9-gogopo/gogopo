import React, { Component } from 'react';
import {Nav} from './StyledNav'
import { 
    Link
  } from 'react-router-dom'

class nav extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <li>所有果果分类</li>
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