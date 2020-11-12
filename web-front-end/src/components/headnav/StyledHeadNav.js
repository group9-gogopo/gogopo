import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    // height: 100%;
    background: #e3e4e5;
    position: fixed;
    .header-left {
        width: 300px;
        height: 40px;
        line-height: 40px;
        margin-left: 15%;
        line-height: 37px;
        color: #999999;
        float: left;
        font-size: 20px;
        >p {
            margin-right: 2px;
            float: left;
        }
        > div {
            width: 70px;
            margin-left: 5px;
            float: right;
            > span:hover {
                color: #0e9b50;
            }
        }
    }   
    .header-right {
        width: 340px;
        float: right;
        line-height: 38px;
        font-size: 20px;
        color: #999999;
        display: flex;
        flex-direction: row;
        margin-right: 150px;
        >p {
            margin-right: 32px;
            width: 80px;
            height: 36px;
            cursor:pointer;
            : hover {
                color: #0e9b50;
            }
        }
    }
`

export {
  Container
}