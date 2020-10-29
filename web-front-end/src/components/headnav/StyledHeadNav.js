import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 37px;
    background: #e3e4e5;
    .header-left {
        width: 240px;
        margin-left: 15%;
        line-height: 37px;
        color: #999999;
        float: left;
        >p {
            margin-right: 2px;
            float: left;
        }
        > div {
            width: 55px;
            margin-left: 5px;
            float: right;
            > span:hover {
                color: #0e9b50;
            }
        }
    }   
    .header-right {
        width: 284px;
        float: right;
        line-height: 38px;
        font-size: 14px;
        color: #999999;
        display: flex;
        flex-direction: row;
        margin-right: 130px;
        >p {
            margin-right: 32px;
            width: 63px;
        }
    }
`

export {
  Container
}