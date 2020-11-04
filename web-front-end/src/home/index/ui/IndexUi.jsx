import React, { Component } from 'react';
import {Container} from './StyleIndex.js'
import Carousel from './Carousel'
import ShowInfo from './ShowInfo'
import FruitInfo from './FruitsInfo'
import Comment from './Comment'

import Header from '../../../components/header/Header'
import Nav from '../../../components/nav/Nav'


class IndexUi extends Component {
    render() {
        return (
            <Container>
                <Header></Header>
                <Nav></Nav>
                <Carousel></Carousel>
                <ShowInfo></ShowInfo>
                <FruitInfo></FruitInfo>
                <FruitInfo></FruitInfo>
                <FruitInfo></FruitInfo>
                <Comment></Comment>
            </Container>   
            
        );
    }
}

export default IndexUi;