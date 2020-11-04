import React, { Component } from 'react';
import {Nav} from './StyledNav'

class nav extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <li>所有果果分类</li>
                    <li>首页</li>
                    <li>今日限购</li>
                    <li>所有果果</li>
                    <li>小果故事</li>
                    <li>关于我们</li>
                </ul>
            </Nav>
        );
    }
}

export default nav