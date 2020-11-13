import React from 'react'
import { Component } from 'react';
import { LeftNavStyled } from './leftNavStyled'

class LeftNav extends Component{
    state={
        List:[],
        // active:3,
        // showList:{}
    }
    // componentDidMount(){
    //     // console.log(this.props.data,"11111")
    //     let keys=Object.keys(this.props.data)
    //     console.log(keys)
    //     this.setState({
    //         List:keys
    //     })
        
    // }

    render(){
        // console.log(this.state.List,"22222")
        return (
            <LeftNavStyled>
                <p>所有果果</p>
                <ul>
                    {
                        this.props.titles.map( (item,index)=>{
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
