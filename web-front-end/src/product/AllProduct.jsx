import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import Pages from './pages/Pages'
// import Pages from './pages/Pages'
// Pagination
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
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
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '进口水果':[
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '水果饮品':[
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '果肉制品':[
                {
                proId:1,
                proType:1,
                proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            {
                proId:1,
                proType:1,
                proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            {
                proId:1,
                proType:1,
                proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },{
                proId:1,
                proType:1,
                proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            ],
            '礼盒包装':[
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
        },
        active:0,
        showList:[],
        title:'国产水果',
        recommendList:[
                        {
                            proId:1,
                            proType:1,
                            proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                            proPrice:198,
                            proName:'泰国金枕头榴莲1个装(五斤左右)'
                        },
                        {
                                    proId:1,
                                    proType:1,
                                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                                    proPrice:198,
                                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                        },
                        {
                                    proId:1,
                                    proType:1,
                                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                                    proPrice:198,
                                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                        },
                        {
                                    proId:1,
                                    proType:1,
                                    proImage:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604556298430&di=fb5b39105fc8855423d27d661187abeb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2135060977b674b7a2c99c88b8255b2af4039b71781be-wDYHjG_fw658',
                                    proPrice:198,
                                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                        }],
        currentPage:1,
        pages:3,
        currentList:[]
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

    handleClick=(id)=>{
        return()=>{
            //跳转路由到详情页面
            console.log("到详情页面")
        }
    }

    handleCart=(id)=>{
        return ()=>{
            //添加到购物车
            window.alert("商品添加购物车成功")
        }
    }

    handleChangePage=(page)=>{
        return()=>{
            //分页器
            let list=[]
            if(this.state.showList.length<=0) list=this.state.showList
            else {
                let list=this.state.showList
            }
            this.state.currentList=
            console.log('修改页数')
        }
    }

    componentDidMount(){
        //这里做数据请求
        this.props.loadData()
        // this.props.loadData()
        console.log("测试",this.props)
        let first=Object.keys(this.state.data)
        let showList=this.state.data[first[this.state.active]]
        let pages=Math.ceil(showList.length/9)
        this.setState({
            showList,
            pages
        })
    }
    componentDidUpdate(){
        // console.log("测试111",this.props)
        
    }

    render(){
        console.log(this.props.location.index,'00000000')
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <AllProductStyled>
                        <LeftNav {...this.state} clickOn={this.handleChange}></LeftNav>
                    <div className='box'>
                        <Products {...this.state} handleToDetail={this.handleClick} onAddCart={this.handleCart}></Products>
                        <Pages
                                currentList={this.state.currentList}
                                pages={this.state.pages}
                                currentPage={this.state.currentPage}
                                onToPage={this.handleChangePage}        
                        >
                        </Pages>
                        <Recommendation recommendList={this.state.recommendList} 
                                        handleToDetail={this.handleClick}
                                        ></Recommendation>
                    </div>
                </AllProductStyled>
                <Footer></Footer>
            </div>
        )
    }
}

export default AllProduct;