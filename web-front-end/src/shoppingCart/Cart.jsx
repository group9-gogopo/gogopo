import React, { Component } from 'react'
import {Container}from './Header/StyleHeader'
import ContentIndex from './Content/ContentIndex'
import { connect } from 'react-redux'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import {
    userAddShop,
    userSubShop,
    loadDataSync,
    removeCartShop,
    checkShopNumber,
    operationAllShop
} from './actionCreators'

@connect(
        state => {
            return {
                list: state.shoppingCart.list

            }
    },
        dispatch => ({
          handleAddClick(id){
                dispatch(userAddShop(id))
          },
          handleReducerClick(id){
                dispatch(userSubShop(id))
          },
          loadData (){
              dispatch(loadDataSync())
            },
          handleDelete(id){
              dispatch(removeCartShop(id))
          },
          handSelectClick(id){
              dispatch(checkShopNumber(id))
          },
          selectStatus(selectStatus){
              dispatch(operationAllShop(selectStatus))
          }
          
    })
)
class Cart extends Component {


    
    render() {
        return (       
            <Container>
                <Header></Header>
                <Nav></Nav>
                <ContentIndex 
                data={this.props.list} 
                handleAddClick={this.props.handleAddClick}
                handleReducerClick={this.props.handleReducerClick}
                handleDelete={this.props.handleDelete}
                handSelectClick={this.props.handSelectClick}
                selectStatus={this.props.selectStatus}
                ></ContentIndex>
                <Footer 
                    totalPrice={this.props.totalPrice}
                    totalNum={this.props.totalNum}
                ></Footer>
            </Container>
        )
    }

    componentDidMount(){
        this.props.loadData()
    }
}

export default Cart
