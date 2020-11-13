import React,{useEffect} from 'react'
import Header from '@c/header/Header'
import Footer from '@c/footer/Footer'
import Nav from '@c/nav/Nav'
import HeaderOrder from './HeaderOrder'
import {
    Container,
} from './StyleAccount'
const ClearAccountUI = (props) => {
    
    return(
        <Container>  
            <Header></Header>
            <Nav></Nav>
            <HeaderOrder></HeaderOrder>
            <Footer></Footer>
        </Container>
    )
}

export default ClearAccountUI