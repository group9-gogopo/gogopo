import styled from 'styled-components'

const RecommendationStyled =styled.div`
height:400px;
width:988px;
    p{
        background-color:#ffc514;
        height:45px;
        line-height:45px;
        font-size:20px;
        color:#ffffff;
        padding-left:22px;
        font-weight:bold;
    }
    ul{
        width:988px;
        padding:20px;
        min-height:310px;
        /* background-color:pink; */
        li{
            width:220px;
            height:300px;
            margin-right:17px;
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
                height:30px;
                color:#ff0000;
                span{
                    line-height:30px;
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
export{
    RecommendationStyled
} 