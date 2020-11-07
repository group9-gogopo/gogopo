import React from 'react'
import { Component } from 'react';
import { PagesStyled } from './pagesStyled'

class Pages extends Component {
    state={
        pagesList:[]
    }

    componentDidMount(){
        let pagesList=new Array(this.props.pages).fill('*')
        this.setState({
            pagesList
        })
    }

    render() {
        console.log(this.state.pagesList)
        return (
            <PagesStyled>
                <div>共有<span>{this.props.pages}</span>页</div>
                <div
                    className='firstPage'
                    onClick={this.props.onToPage(1)}
                ><a>首页</a></div>
                <div
                    className='previousPage'
                    onClick={this.props.onToPage(this.props.currentPage - 1)}
                ><a>上一页</a></div>
                {/* <div className='currentPages'> */}
                    <ul>
                        {this.state.pagesList.map((item,index)=>{
                            return(
                                <li 
                                    key={index}
                                    className={index}
                                ><a>{index+1}</a></li>
                            )
                        })}
                    </ul>
                {/* </div> */}
                <div
                    className='nextPage'
                    onClick={this.props.onToPage(this.props.currentPage + 1)}
                ><a>下一页</a></div>
                <div
                    onClick={this.props.onToPage(this.props.pages)}
                ><a>尾页</a></div>
            </PagesStyled>
        )
    }
}

export default Pages;