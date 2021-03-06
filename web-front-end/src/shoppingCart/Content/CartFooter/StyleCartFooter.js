import styled from 'styled-components'

const StyleCartFooter = styled.div`
    margin:0 auto;
    height:45px;
    line-height:45px;
    background:#fff;
    border:1px solid #000;
    >div{
        float:left;
        width:100px;
        a{
            width:30px;
            height:30px;
            margin:9px 12px 0 20px;
            border-radius:50%;
            float:left;
            border:1px solid #000;
            padding:6px 10px 0 0 ;
            .correct{
                width: 8px;
                height: 16px;
                border-color: #009933;
                border-style: solid;
                background:#fff;
                border-width: 0 3px 4px 0;
                transform: rotate(45deg);
        }
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