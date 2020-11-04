import React, { Component } from 'react'
import Header from './Header/Header'
import Search from './Search/Search'
import {Container}from './Header/StyleHeader'
import ContentIndex from './Content/ContentIndex'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import { connect } from 'react-redux'
import {
    userAddShop,
    userSubShop,
    loadDataSync,
    removeCartShop
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
          }
    })
)
class Cart extends Component {


    
    render() {
        return (       
            <Container>
                <Header></Header>
                <Search></Search>
                <Nav></Nav>
                <ContentIndex 
                data={this.props.list} 
                handleAddClick={this.props.handleAddClick}
                handleReducerClick={this.props.handleReducerClick}
                handleDelete={this.props.handleDelete}
                ></ContentIndex>
                <Footer></Footer>
            </Container>
        )
    }

    componentDidMount(){
        this.props.loadData()
    }
}

export default Cart
