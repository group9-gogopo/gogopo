import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import Pages from './pages/Pages'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Products from './products/Products'
import Recommendation from './recommendation/Recommendation'
import LeftNav from './leftNav/LeftNav'
import { AllProductStyled } from './AllProductStyled'
import Footer from '../components/footer/Footer'
import { loadDataAsync } from './actionCreater'
import { changeData } from './actionCreater'

@connect(
    state => {
        return {
            list: state.product.list,
            showList: state.product.showList
        }
    },
    dispatch => ({
        loadData(sort, page, limit) {
            dispatch(loadDataAsync(sort, page, limit))
        },
        changeDataS(value){
            dispatch(changeData(value))
        }

    })
)
class AllProduct extends Component {
    state = {
        goodstype: ['localfruit', "importfruit", "freshproduct", "pulpproduct", "giftpackaging"],
        goodtype: 'localfruit',
        active: 0,
        titles: ['国产水果', '进口水果', '水果饮品', '果肉制品', '礼盒包装'],
        title: '国产水果',
        currentPage: 1,
        pageSize: 12,
        pages: 3,
    }

    handleChange = (item, index) => {
        
        return () => {
            let goodtype = this.state.goodstype[index]
            let title = this.state.titles[index]
            this.setState({
                active: index,
                title,
                goodtype
            })
            //这里做数据请求
            this.props.loadData(goodtype, this.state.currentPage, this.state.pageSize)
        }
    }

    handleClick = (id) => {
        return () => {
            //跳转路由到详情页面
            let { history } = this.props
            history.push("/detail", { id })

        }
    }

    handleCart = (id) => {
        return () => {
            //添加到购物车
            window.alert("商品添加购物车成功")
        }
    }

    handleChangePage = (page) => {
        return () => {
            //分页器
            if (page <= 1) {
                this.setState({
                    currentPage: 1
                })
                this.props.loadData(this.state.goodtype, 1, this.state.pageSize)
            } else if (
                page >= this.state.pages
            ) {
                this.setState({
                    currentPage: this.state.pages
                })
                this.props.loadData(this.state.goodtype, this.state.pages, this.state.pageSize)
            }else{
                this.setState({
                    currentPage: page
                })
                this.props.loadData(this.state.goodtype, page, this.state.pageSize)
            }


        }
    }

    componentDidMount() {

        if(this.props.location.index){
            this.setState({
                active:this.props.location.index,
                goodtype:this.state.goodstype[this.props.location.index]
            })
            this.props.loadData(this.state.goodstype[this.props.location.index], this.state.currentPage, this.state.pageSize)
        }else if(this.props.location.state){
            this.props.changeDataS(this.props.location.state.data)
            
        }
        else{
            //这里做数据请求
            this.props.loadData(this.state.goodtype, this.state.currentPage, this.state.pageSize)
        }
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <AllProductStyled>
                        <LeftNav active={this.state.active} titles={this.state.titles} clickOn={this.handleChange}></LeftNav>
                    <div className='box'>
                        <Products showList={this.props.showList} title={this.state.title} handleToDetail={this.handleClick} onAddCart={this.handleCart}></Products>
                        <div className='pagesbar'>
                        <Pages
                            
                            pages={this.state.pages}
                            currentPage={this.state.currentPage}
                            onToPage={this.handleChangePage}
                        >
                        </Pages>
                        </div>
                        {
                            this.props.showList.length>0?(<Recommendation recommendList={this.props.showList.slice(1, 5)}
                            handleToDetail={this.handleClick}
                        ></Recommendation>):""
                        }
                        
                    </div>
                </AllProductStyled>
                <Footer></Footer>
            </div>
        )
    }
}

export default AllProduct;