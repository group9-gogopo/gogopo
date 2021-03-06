import styled from 'styled-components'

const ProductsStyled = styled.div`
min-height:968px;
width:988px;
    p{
        background-color:#ffc514;
        height:45px;
        line-height:45px;
        font-size:20px;
        color:#ffffff;
        padding-left:22px;
        overflow:hidden;
        font-weight:bold;
    }
    ul{
        border:1px solid #f5f5f5;
        width:988px;
        padding:20px 20px;
        min-height:920px;
        /* background-color:pink; */
        li{
            width:220px;
            height:300px;
            margin-right:16px;
            float:left;
            >div:first-child{
                width:220px;
                height:220px;
                img{
                    height:100%;
                    width:100%;
                }
            }
            .price{
                margin-top:16px;
                font-size:18px;
                color:#ff0000;
                width:220px;
                span{
                    line-height:30px;
                }
                div{
                    width:30px;
                    height:30px;
                    float: right;
                    border-radius:15px;
                    background-color:#e5e5e5;
                    svg{
                        width:16px;
                        height:18px;
                        margin:6px 7px;
                    }
                }
            }
            >div:last-child{
                font-size:14px;
                a{
                    color:#000;
                }
            }


        }
    }
`
export {
    ProductsStyled
} 