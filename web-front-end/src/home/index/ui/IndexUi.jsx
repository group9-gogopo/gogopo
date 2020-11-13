import React, { Component } from 'react';
import {Container} from './StyleIndex.js'
import Carousel from './Carousel'
import ShowInfo from './ShowInfo'
import FruitInfo from './FruitsInfo'
import FruitInfo2 from './FruitsInfo2'
import FruitInfo3 from './FruitsInfo3'
import Comment from './Comment'
import Header from '../../../components/header/Header'
import Nav from '../../../components/nav/Nav'
import Footer from '../../../components/footer/Footer'


class IndexUi extends Component {
    render() {
        return (
            <Container>
                <Header num={this.props.num}></Header>
                <Nav></Nav>
                <Carousel></Carousel>
                <ShowInfo  addNum={this.props.addNum} num={this.props.num}></ShowInfo>
                <FruitInfo></FruitInfo>
                <FruitInfo2></FruitInfo2>
                <FruitInfo3></FruitInfo3>
                <Comment></Comment>
                <Footer></Footer>
            </Container>   
            
        );
    }
}

export default IndexUi;