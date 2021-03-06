import styled from 'styled-components'

const Container = styled.div`
    width: 1920px;
    overflow:hidden;
`
const Info = styled.div`
    padding-left:310px;
    padding-right:310px;
`
const Title = styled.div`
    width: 1300px;
    height: 100px;
    background: #FB994A;
    text-align:center;
    line-height:100px; 
    font-size: 48px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #F3F3F3;
    margin-bottom:51px;  
`
const Introd = styled.div`
    position:relative;
    .intro{
        height:530px;
        .img{
            position:absolute;
            top:0;
            left:0;
            }
        .title{  
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #020202;
            margin-left:83px;
            padding-top:32px;
            margin-bottom:0;
        }
        .addborder{
            border-bottom:6px solid #fb994a;
        }
        .info1{
            padding-top:22px;
        }
        .info1,.info2{ 
            padding-left:111px;
            padding-right:46px;     
            font-size: 30px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #030303;
            line-height: 37px;
            /* margin-bottom:0; */
        }
    }

    .story{
        height:732px;
        .img{
            position:absolute;
            top:540px;
            left:0;
            }

    }
    .history{
        height:758px;
        .img{
            position:absolute;
            top:1272px;
            left:0;
            }

    }

    .connect{
        height:880px;
        margin-top:128px;
        .weibo{
            padding-left:190px;
            float:left;
            p:first-child{          
                font-size: 36px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #070707;
                padding-left:88px;
            }

        }
        .weixin{
            float:left;
            padding-left:316px;
            p:first-child{          
                font-size: 36px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #070707;
                padding-left:88px;

            }
        }
    }

    .connect_email{
        height:500px;
        p{   
            font-size: 36px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #050505;
            padding-left:111px;
            
        }

    }

    .connect_client{
        height:800px;
        padding-top:133px;
        p{
            padding-left:111px;
            
            font-size: 36px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #090707;
        }
    }

`

export {
    Container,
    Title,
    Info,
    Introd
}