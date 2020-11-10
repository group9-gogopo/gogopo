import styled from 'styled-components'

const StyleCartHead = styled.div`
    width:1300px;
    height:60px;
    background:orange;
    color:#000000;
    margin:0 auto;
    ul{
        text-align:center;
        li{
            line-height:60px;
            float:left; 
            font-size:18px;
            color:#fff;
            padding-left:60px;
        } 
        li:nth-child(1){
            width:312px;
            padding-left:150px;
            margin-right:180px;
        }
        li:nth-child(2){
            width:240px;
        }
        li:nth-child(3){
            width:170px;
        }
        li:nth-child(4){
            width:200px;
        }
        li:nth-child(5){
            width:170px;
        }
    }
`
export {
    StyleCartHead
}