import styled from 'styled-components'
import footer from '../../assets/images/footer.png'


const footerStyled=styled.div`
    width:1919px;
    height:387px;
    margin:0 auto;
    background-image:url(${footer});
    .top{
        display:flex;
        flex-direction:row;
        min-height:327px;
        .left{
            margin-left:535px;
            margin-top:86px;
            width:150px;
            color:#F0F0F0;
            p{
                font-size:16px;
                text-align:center;
                margin-bottom:20px;
            }
            div{
                width:150px;
                height:150px;
                background-color:pink;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .center{
            margin-top:141px;
            margin-left:47px;
            p{
                font-size:18px;
                width:400px;
                padding-bottom:1px;
                border-bottom:2px solid #009A44;
                color:#292929;
            }
            ul{
                margin-top:11px;
                margin-left:26px;
                /* display:flex;
                flex-direction:row; */
                width:360px;
                overflow-x:hidden;
                font-size:16px;
                li{
                    width:90px;
                    float:left;
                    border-right:1px solid #009A44;
                    padding-left:11px;
                }
                >li:last-child{
                    border:none;
                }
            }
        }
        .right{
            margin-top:100px;
            margin-left:61px;
            >div:first-child{
                width:160px;
                height:50px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .logo{
                font-size:24px;
                color:#272727;
                line-height:24px;
                margin-bottom:26px;
            }
            .tel{
                display:flex;
                align-items:center;
                height:30px;
                margin-bottom:14px;
                svg{
                    width:30px;
                    height:30px;
                }
                span{
                    font-size:16px;
                    line-height:30px;
                    color:#F7C104;
                }
            }
            .email{
                display:flex;
                align-items:center;
                height:20px;
                svg{
                    width:27px;
                    height:20px;
                }
                span{
                    font-size:16px;
                    line-height:20px;
                    color:#F7C104;
                }
            }
        }
    }
    .bottom{
        text-align:center;
        line-height:60px;
        font-size:16px;
    }
`

export default footerStyled;