import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import Pages from './pages/Pages'
import Products from './products/Products'
import Recommendation from './recommendation/Recommendation'
import LeftNav from './leftNav/LeftNav'
import { AllProductStyled } from './AllProductStyled'
import Footer from '../components/footer/Footer'
import { loadDataAsync } from './actionCreater'

@connect(
    state=>{
        console.log('映射',state)
        return {
            list:state.product.list
        }
    },
    dispatch=>({
        loadData(){
            dispatch(loadDataAsync())
        }
    })
)
class AllProduct extends Component{
    state={
        data:{
            '国产水果':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '进口水果':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '水果饮品':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '果肉制品':[
                {
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            {
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            {
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },{
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            ],
            '礼盒包装':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
        },
        active:0,
        showList:[],
        title:'国产水果'
    }

    handleChange=(item,index)=>{
        return ()=>{
            let showList=this.state.data[item]
            console.log(showList)
            this.setState({
                active:index,
                showList,
                title:item
            })
        }
    }

    componentDidMount(){
        //这里做数据请求
        this.props.loadData()
        // this.props.loadData()
        console.log("测试",this.props)
        let first=Object.keys(this.state.data)
        let showList=this.state.data[first[this.state.active]]
        this.setState({
            showList
        })
    }
    componentDidUpdate(){
        // console.log("测试111",this.props)
        
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <AllProductStyled>
                    <div>
                        <LeftNav {...this.state} clickOn={this.handleChange}></LeftNav>
                    </div>
                    <div>
                        <Products {...this.state}></Products>
                        <Pages></Pages>
                        <Recommendation></Recommendation>
                    </div>
                </AllProductStyled>
                <Footer></Footer>
            </div>
        )
    }
}

export default AllProduct;