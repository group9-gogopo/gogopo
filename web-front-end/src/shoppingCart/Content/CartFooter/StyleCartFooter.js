import styled from 'styled-components'

const StyleCartFooter = styled.div`
    height:45px;
    line-height:45px;
    background:#fff;
    border:1px solid #000;
    >div{
        float:left;
        width:100px;
        p{
            width:30px;
            height:30px;
            margin:9px 12px 0 20px;
            border-radius:50%;
            float:left;
            border:1px solid #000;
        }
    }  
    >span{
        display:block;
        float:left;
        margin-left:700px;
        }
    >i{
        display:block;
        float:left;
        margin-left:66px;
        }
    div:last-child{
        float:right;
        text-align:center;
        background:#ffa62f;
    }
`
export {
    StyleCartFooter
}