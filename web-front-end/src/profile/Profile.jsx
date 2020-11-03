import React, { Component } from 'react'
import { connect } from 'react-redux'
import Personaldata from './personaldata/Personaldata'
import Address from './adress/Address'
import { ProfileStyled } from './ProfileStyled'
import Footer from '../components/footer/Footer'
import { loadDataAsync } from './actionCreater'

@connect(
    state=>{
        console.log('映射的state',state)
        return {
            list:state.profile.list
        }
    },
    dispatch=>({
        loadData(){
            dispatch(loadDataAsync())
        }
    })
)
class Profile extends Component{

    componentDidMount(){
        this.props.loadData()
    }

    render(){
        return(
            <>
                <ProfileStyled>
                    <Personaldata></Personaldata>
                    <Address list={this.props.list}></Address>
                </ProfileStyled>
                <Footer></Footer>
            </>
        )
    }
}

export default Profile