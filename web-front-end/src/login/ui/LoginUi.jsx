import React from 'react'

import {
    Container,
    InfoWrap
} from './StyledLogin'

import HeadNav from '@c/headnav/HeadNav'
import Search from '@c/search/Search'
import LoginTab from './LoginTab'

const LoginUi = () => {
        return (
            <Container>
                <HeadNav></HeadNav>
                <InfoWrap>
                    <Search
                        margin='0 0 0 5rem'
                    ></Search>
                    <LoginTab></LoginTab>
                </InfoWrap>
            </Container>
        )
}

export default LoginUi