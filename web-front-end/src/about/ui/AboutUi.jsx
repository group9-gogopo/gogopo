import React, { Component } from 'react';

import {Container,Info} from './StyleAbout'
import Header from '@c/header/Header'
import Nav from '@c/nav/Nav'
import Title from './Title'
import Intro from './Intro'
import Footer from '../../components/footer/Footer'



class AboutUi extends Component {
    render() {
        return (
            <Container>
                <Header></Header>
                <Nav></Nav>
                <Info>
                  <Title></Title>
                  <Intro></Intro>
                </Info>
                <Footer></Footer>
                
            </Container>
        );
    }
}

export default AboutUi;