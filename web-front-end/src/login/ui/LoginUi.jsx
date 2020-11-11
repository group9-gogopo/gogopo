import React from 'react'

import {
    Container,
    InfoWrap
} from './StyledLogin'

import HeadNav from '@c/headnav/HeadNav'
import Search from '@c/search/Search'
import LoginTab from './LoginTab'

const LoginUi = (props) => {

    return (
        <Container>
            <HeadNav></HeadNav>
            <InfoWrap>
                <Search
                    margin='30px 0 0 800px'
                ></Search>
                <LoginTab></LoginTab>
            </InfoWrap>
        </Container>
    )
}

export default LoginUi