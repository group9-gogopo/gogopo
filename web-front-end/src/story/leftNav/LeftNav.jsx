import React from 'react'
import { Component } from 'react';
import { LeftNavStyled } from './leftNavStyled'

class LeftNav extends Component{
    state={
        List:[],
        // active:3,
        // showList:{}
    }
    componentDidMount(){
        let keys=Object.keys(this.props.data)
        // console.log(this.props)
        this.setState({
            List:keys
        })
    }

    render(){
        return (
            <LeftNavStyled>
                <p>小果故事</p>
                <ul>
                    {
                        this.state.List.map( (item,index)=>{
                            return (
                                <li className={
                                    this.props.active===index?'active':''} 
                                    key={index}
                                    onClick={this.props.clickOn(item,index)}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </LeftNavStyled>
        )
    }
}

export default LeftNav;

// 虚拟DOM
// vue虚拟dom react dom的区别
// react虚拟dom的封装
