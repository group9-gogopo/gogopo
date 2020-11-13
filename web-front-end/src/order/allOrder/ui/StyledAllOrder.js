import styled from 'styled-components'

const AllContainer = styled.div`
    width: 100%;
    overflow:hidden;
`
const AllOrderNav = styled.div`
    width: 1300px;
    height: 61px;
    background: #FF861B;
    margin:0 auto;
    ul{
        margin-left:110px;
        width: 1300px;
        height: 61px;
        li{ 
            float:left;   
            a{  
                display:inline-block;
                text-decoration:none;
                color: #F3F3F3;
                width:57px;
                height:61px;
                text-align:center;
                line-height:61px;
                margin-right:86px; 
                font-size: 18px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
            }
    }
    }
    
`

const OrderListInfo= styled.div`
    width: 1260px;
    min-height: 448px;
    margin:auto;
    margin-top:80px;
    margin-bottom:80px;
    .top{
        
        background: #FFF3E4;
        padding-top:39px;
        padding-left:39px;
        height:411px;
        margin-bottom:6px;
        div{
            float:left;
        }
        div:first-child{
            width:300px;
            p{     
                font-size: 14px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #171414;
            }
            img{
                width: 297px;
                height: 306px;
            }
        }
        div:nth-child(2){
            /* width:613px; */
            margin-left:156px;
            margin-top:95px;
            p{     
                font-size: 16px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #1D1A1A;
            }
        }
        div:nth-child(3){     
            p:nth-of-type(1),p:nth-of-type(2),p:nth-of-type(3){
                margin-bottom:40px;
                margin-left:200px;    
                font-size: 14px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #1D1A1A;

            }
            p:nth-of-type(3){
                margin-left:235px;
            }
            .total{
                margin-top:130px;
                span{
                    font-size: 16px;
                    font-family: Adobe Heiti Std;
                    font-weight: normal;
                    color: #1D1A1A; 
                }
                span:nth-child(1){
                    margin-left:20px;
                    margin-right:40px;
                }
            }
        }
    }
    .bottom{
        
        background: #FFF3E4;
        height:40px;
        line-height:40px;
        p:first-child{
            padding-left:39px;
            float:left;
        }
        p:last-child{
            margin-top:2px;
            float:left;
            width: 76px;
            height: 36px;
            text-align:center;
            line-height:36px;
            border: 2px solid #FF961A;
            margin-left:910px;
        }
    }
`


export {
    AllContainer,
    AllOrderNav,
    OrderListInfo
}