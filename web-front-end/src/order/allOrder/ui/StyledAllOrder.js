import styled from 'styled-components'

const AllContainer = styled.div`
    width: 100%;
    /* overflow:hidden; */
`
const AllOrderNav = styled.div`
    .ant-tabs{
        width: 1300px;
        min-height: 1000px;
        background: #fff;
        margin:0 auto;
        .ant-tabs-nav-wrap{
            background: #FF861B;
          .ant-tabs-nav-list{
            margin-left:200px;
            width: 1300px;
            height: 61px;
            .ant-tabs-tab{
                font-size:30px;
                line-height:61px;
                margin-right:300px; 
                font-size: 18px;
                color:#fff;
            }
            .ant-tabs-tab-active{
                color:#000 !important;
            }
        }
    }
    }

    /* width: 1300px;
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
                &.active{
                    color:#000;
                }
            }
    }
    } */
    
`

const OrderListInfo= styled.div`
    width: 1260px;
    margin:auto;
    margin-top:80px;
    margin-bottom:80px;
    .top{  
        background: #FFF3E4;
        padding-top:39px;
        padding-left:39px;
        min-height:600px;
        margin-bottom:6px;
        .first{
            clear:both;
            p:first-child{
                float:left;
            }
            p:last-child{
                float:right;
                margin-right:100px;
            }
        }

        .second{
            clear:both;  
            margin-top:80px;
            min-height:320px;
            div:nth-child(1){
                float:left;
                img{
                    width: 297px;
                    height: 306px;
                    margin-bottom:80px;
                }
            }
            div:nth-child(2){
                float:left;
                margin-left:100px;
                margin-top:100px;
            }
            div:nth-child(3){
                float:left;
                margin-left:270px;
                margin-top:30px;
                p:last-child{
                    margin-top:20px;
                }
            }
            
        }

        .third{
            clear:both;
            /* float:right; */
            margin-left:900px;
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

    .bottom{ 
        clear:both;
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