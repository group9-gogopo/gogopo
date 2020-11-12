import styled from 'styled-components'


const Container = styled.div`
    width: 1920px;
    overflow:hidden;
    margin:0 auto;
`
const ShowInfor=styled.div`  
    height:962px; 
    background: #F0F0F8;
    margin:0 auto;
    .info_top{
        height:274px;    
        background: #F0F0F8;
        dl{
            float:left;
            margin-top:80px;
            margin-left:240px;
            /* border:1px solid #000; */
            dt{
                text-align:center;
                margin-bottom:24px;
            }
            dd{
                text-align:center; 
                font-size: 40px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #3D3D4E;
            }
        }
    }

    .show_fruits{
        height:690px;
        .bg_img{
            position:relative;
            img:nth-of-type(1){
              height:530px;
            }
            img:nth-of-type(2){
              position:absolute;
              top:99px;
              left:309px;
            }
            img:nth-of-type(3){
              position:absolute;
              top:435px;
              left:32px;
            }
            .show_title{
                height:20px;
                position: absolute;
                top:80px;
                left:882px;
                p:first-of-type{       
                    font-size: 36px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #F9F9F9;
                    letter-spacing:8px;
                    margin-bottom:0;
                }
                p:last-of-type{    
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: 400;
                    color: #F7F7F7;
                }

                .medium{
                    width:1400px;
                    margin-left:-586px;
                    .el-carousel__item{
                        background:#fff;
                    }
                    h3{
                        position:relative;
                     
                    img{
                        width:323px;
                        height:323px;
                        margin-top:45px;
                        margin-left:29px;
                    }
                    .name{
                        position:absolute;
                        top:81px;
                        left:380px;   
                        font-size: 26px;
                        font-family: Microsoft YaHei;
                        letter-spacing:0;
                        font-weight: 400;
                        color: #2F2E2E;
                        .name_info{              
                            font-size: 22px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            letter-spacing:0;
                            margin-top:24px;
                            color: #848484;
                        }
                        .price{
                            margin-top:109px;                             
                            font-size: 30px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #FF541F;
                        }
                        span{
                            position:absolute;
                            top:255px;
                            left:186px;
                            display:inline-block;
                            width: 66px;
                            height: 24px;
                            background: #FF541F;
                            border-radius: 12px;
                            text-align:center;        
                            font-size: 14px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #FEFEFE;
                        }
                    }
                    }
                }
            }
        }
        
    }
`
const FruitInfor=styled.div`
    height:1000px;
    background: #F0F0F8;;
    padding:0 308px;
    margin:0 auto;
    .title{
        position:relative;
        img{
            position:absolute;
            top:100px;
            left:0;
        }
        p:nth-of-type(1){
            letter-spacing:8px;
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #222222;
            position:absolute;
            top:94px;
            left:560px;
        }
        p:nth-of-type(2){
            font-size: 14px;
            font-family: Arial;
            font-weight: 400;
            color: #222222;
            position:absolute;
            top:150px;
            left:563px;
        }

    }
    .contain{
        padding-top:270px;
        .info_left{
            float:left;
            width:272px;
        }
        .info_center{
            float:left;
            width:800px;
            div:nth-child(2){
                margin-top:20px;
              dl{
                  float:left;
                  margin-right:36px;
                  dd{
                      margin-top:15px;
                      margin-left:8px;
                      p:first-child{ 
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #FF541F;
                        margin-bottom:0;
                        
                        
                      }
                      p:last-child{ 
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #5F5F5F;
                      }
                  }
                }
            }
        }
        .info_right{
            float:left;
            width:232px;
            dl{
                  float:left;
                  dd{
                      margin-top:10px;
                      margin-left:8px;
                      p:first-child{ 
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #FF541F;
                        margin-bottom:0;
                           
                      }
                      p:last-child{ 
                        font-size: 18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #5F5F5F;
                        margin-bottom:0;
                      }
                  }
                }
        }

    }
`
const Comments=styled.div`
    width: 1920px;
    height: 558px;
    background: #414141;
    margin:0 auto;
    /* opacity: 0.6; */
    .title{
        position:relative;
        img{
            position:absolute;
            top:100px;
            left:308px;
        }
        p:nth-of-type(1){
            letter-spacing:8px;
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #F9F9F9;
            position:absolute;
            top:94px;
            left:868px;
        }
        p:nth-of-type(2){
            font-size: 14px;
            font-family: Arial;
            font-weight: 400;
            color: #F9F9F9;
            position:absolute;
            top:150px;
            left:871px;
        }

    }

    .comts{
        padding-left:310px;
        padding-right:292px;
        padding-top:253px;
        
        .comts_con{
            width:416px;
            height:220px;
            background:#fff;
            float:left;
            margin-right:23px;
            .comts_left{
                float:left;
                padding-left:40px;
                padding-top:70px;
                img{
                    width:120px;
                    height:120px;
                }

            }
            .comts_right{
                float:left;
                padding-top:70px;
                margin-left:25px;
                .rate{
                    margin-bottom:22px;
                }
                .text{
                    margin-bottom:30px;
                }
                .time{

                }
            }
        }
    }
`


export {
    Container,
    ShowInfor,
    FruitInfor,
    Comments
}