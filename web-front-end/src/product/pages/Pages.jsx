import React from 'react'
import { Component } from 'react';
// import { Pagination } from 'antd';
import { PagesStyled }from './pagesStyled'

class Pages extends Component{
    render(){
        return (
                // <Pagination defaultCurrent={1} defaultPageSize={9} total={50}></Pagination>
                <PagesStyled>
                    <div>共有<span>{this.props.pages}</span>页</div>
                    <div 
                        className='firstPage'
                        onClick={this.props.onToPage(1)}
                    >首页</div>
                    <div 
                        className='previousPage'
                        onClick={this.props.onToPage(this.props.currentPage-1)}
                    >上一页</div>
                    <div className='currentPages'><ul>
                            <li>1</li>
                        </ul>
                    </div>
                    <div 
                        className='nextPage'
                        onClick={this.props.onToPage(this.props.currentPage+1)}
                    >下一页</div>
                    <div
                        onClick={this.props.onToPage(this.props.pages)}
                    >尾页</div>
                </PagesStyled>
        )
    }
}

export default Pages;