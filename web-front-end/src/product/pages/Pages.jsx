import React from 'react'
import { Component } from 'react';
import { Pagination } from 'antd';

class Pages extends Component{
    render(){
        return (
                <Pagination defaultCurrent={1} defaultPageSize={9} total={50}></Pagination>
        )
    }
}

export default Pages;