import React, { Component } from 'react';
import {AllContainer} from './StyledAllOrder'
import Header from '../../../components/header/Header'
import Nav from '../../../components/nav/Nav'
import OrderNav from './OrderNav'
import OrderList from './OrderList'
import Footer from '../../../components/footer/Footer'


class AllOrderUi extends Component {

    render() {
        return (
            <AllContainer>
                <Header></Header>
                <Nav></Nav>
                <OrderNav 
                    handleOnGoToComments={this.props.handleOnGoToComment}
                    index={this.props.index}
                ></OrderNav>
                <Footer></Footer>
            </AllContainer>
        );
    }
}

export default AllOrderUi;