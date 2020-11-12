import React,{useEffect} from 'react'
import Header from '@c/header/Header'
import Footer from '@c/footer/Footer'
import Nav from '@c/nav/Nav'
import HeaderOrder from './HeaderOrder'
import {useDispatch,useSelector} from 'react-redux'
import {
    Container,
} from './StyleAccount'
import { changeShow ,loadDataAsync, loadDataSync} from '../actionCreator'
const ClearAccountUI = (props) => {
    const list = useSelector((state) => state.clearAccount.list)
    const isShow = useSelector((state) => state.clearAccount.isShow)
    const dispatch = useDispatch()

    const addClose = () => {
        dispatch(changeShow(false))
    }
     useEffect(() =>{
        dispatch(loadDataAsync())
    },[dispatch])
    return(
        <Container>  
            <Header></Header>
            <Nav></Nav>
            <HeaderOrder addClose={addClose} isShow={isShow} list={list}></HeaderOrder>
            <Footer></Footer>
        </Container>
    )
}

export default ClearAccountUI