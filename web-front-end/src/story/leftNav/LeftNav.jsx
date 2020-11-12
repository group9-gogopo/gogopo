import React from 'react'
import { Component } from 'react';
import { LeftNavStyled } from './leftNavStyled'

class LeftNav extends Component{
    render(){
        return (
            <LeftNavStyled>
                <p>小果故事</p>
                <ul>
                    <li className={
                            this.props.active===0?'active':''}
                            onClick={this.props.clickOn('水果知识',0)}
                    >水果知识</li>
                    <li className={
                            this.props.active===1?'active':''} 
                            onClick={this.props.clickOn('新闻中心',1)}
                    >新闻中心</li>
                </ul>
            </LeftNavStyled>
        )
    }
}

export default LeftNav;

// 虚拟DOM
// vue虚拟dom react dom的区别
// react虚拟dom的封装
