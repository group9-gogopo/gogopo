import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 0.38rem;
    background: #e3e4e5;
    display: flex;
    flex-direction: row;
    .header-left {
        display: flex;
        margin-left: 15%;
        line-height: .38rem;
        color: #999999;
        width: 240px;
        >p {
            margin-right: 2px;
        }
        > div {
            margin-left: .13rem;
            > span:hover {
                color: #0e9b50;
            }
        }
    }   
    .header-right {
        display: flex;
        margin-left: 40%;
        line-height: 38px;
        font-size: 14px;
        color: #999999;
        >p {
            margin-right: .31rem;
            width: 0.63rem;
        }
    }
`

export {
  Container
}