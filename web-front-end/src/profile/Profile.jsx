import React, { Component } from 'react'
import Personaldata from './personaldata/Personaldata'
import Address from './adress/Address'
import { ProfileStyled } from './ProfileStyled'
import Footer from './footer/Footer'


class Profile extends Component{
    render(){
        return(
            <>
                <ProfileStyled>
                    <Personaldata></Personaldata>
                    <Address></Address>
                </ProfileStyled>
                <Footer></Footer>
            </>
        )
    }
}

export default Profile