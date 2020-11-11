import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100%;

`
const HeaderO = styled.div`
    height:1400px;
    width:1300px;
    margin:0 auto;
    background:#ccc;
`
const OrderHeader = styled.div`
    width:1300px;
    height:86px;
    background:#ff9c28;
    
    font-size:34px;
    color:#fff;
    text-align:center;
    line-height:86px;
`
const AddressD = styled.div`
    height:450px;
    background:#fff;
    .addressHead{
        width:100%;
        height:130px;
        background:purple;
        border-bottom:8px solid #fdf1e3;
        padding-top:80px;
        .receiving{
            font-size:30px;
        }
    }
    .addressBody{
        
    }
`
export {
    Container,
    OrderHeader,
    HeaderO,
    AddressD
} 