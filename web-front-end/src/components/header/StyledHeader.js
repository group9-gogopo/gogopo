import styled from 'styled-components'
const Header = styled.div`
   >.top{ 
    width: 1920px;
    height: 40px;
    line-height:40px;
    background: #E3E4E5;
    margin:0 auto;
    div{
        float:left;
        margin-left:310px;
        span{
            font-size: 16px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #999999;
            margin-right:10px;
        }
        span:nth-of-type(2){
            a{
                color:#0E9B50;
            }      
        }
        span:nth-of-type(3){
            a{
                color:#0E9B50;
            }      
        }
    }
    ul{
        float:right;
        margin-right:310px;
        li{
            float:left;    
            font-size: 16px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #999999;
            margin-right:10px;
            a{
                color: #999999;
            }
        }
    }
}
    >.bottom{
            width: 1920px;
            height:138px;
            position:relative;
            img{
                float:left;
                margin-top:22px;
            }
            
            .ant-input-wrapper{
                width:455px;
                border:2px solid #009a44;
                border-right:none;
                margin-top:50px;
                margin-left:140px;
                margin-bottom:8px;
                .ant-input-search-button{
                    background:#009a44;
                    border:0;
                    height:50px;
                    width:60px;     
                }
                .ant-input{
                    height:40px;
                }
            }

            >p{ 
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 300;
                color: #999999;
                margin-left:970px;
                
                span{   
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 300;
                    /* margin-left:10px; */
                }
                span.active{
                    color: #009A44;
                }
            }
            .cart{
                width:150px;
                height:55px;
                background:#009A44;
                float:right;
                position:absolute;
                top:50px;
                right:310px;              
                font-size: 17px;
                font-family: Microsoft YaHei;
                font-weight: 300;              
                text-align:center;
                line-height:55px;
                a{
                    color:#fff;
                }
            }

        }


`

export {
    Header
}