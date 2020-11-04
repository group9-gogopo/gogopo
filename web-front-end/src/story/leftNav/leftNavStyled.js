import styled from 'styled-components'

const LeftNavStyled=styled.div`
float:left;
width:284px;
    p{
        width:284px;
        height:45px;
        background-color:#ffc514;
        font-size:20px;
        line-height:45px;
        padding-left:10px;
        font-weight:bold;
        color:#ffffff;
    }
    ul{
        li{
            font-size:16px;
            width:282px;
            height:50px;
            color:#a0a0a0;
            border:1px solid #a0a0a0;
            border-bottom:none;
            padding-left:10px;
            line-height:50px;
        }
        >li:last-child{
            border-bottom:1px solid #a0a0a0;
        }
        .active{
            color:#0a9e4b;
            background-color:#eeeeee;
        }
    }
`
export {
    LeftNavStyled
}