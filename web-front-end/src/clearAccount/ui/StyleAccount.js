import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100%;

`
const HeaderO = styled.div`
    width:1300px;
    margin:0 auto;
`
const OrderHeader = styled.div`
    width:1300px;
    height:86px;
    background:#ff9c28;
    
    font-size:34px;
    color:#fff;
    text-align:center;
    line-height:86px;
`
const AddressD = styled.div`
    min-height:450px;
    background:#fff;
    .addressHead{
        width:100%;
        min-height:130px;
        border-bottom:8px solid #fdf1e3;
        padding-top:80px;
        .receiving{
            font-size:30px;
        }
    }
    .addressbody{
        min-height:324px;
        ul{
            padding:55px 0 0 34px;
            li{
                lin-height:30px;
                font-size:20px;
                input{
                    float:left;
                    margin:8px 5px 0 0 ;
                    border-radius:50px;
                }
                .address{  
                    float:left;
                }
                .name{
                    margin-left:28px;
                }
                .phoneNum{
                    margin-left:10px;
                }
                .defaultAddress{
                    margin-left:20px
                }
                .changeName{
                    float:right;
                    color:#000;
                }
            }
        }
        button{
            margin:52px 0 0 56px;
        }
    }
`

const Message = styled.div`
    width:100%;
    min-height:866px;
    .confirm{
        font-size:20px;
    }
    .contain{
        width:100%;
        height:406px;
        margin-top:62px;
        border-top:1px solid #f6f8eb;
        border-bottom:1px solid #fff8e1;
        .prod{
            height:338px;
            width:100%;
            background:#fff3e3;
            padding:20px 0 0 26px;
            .pic{
                float:left;
                font-size:20px;
                width:230px;
                margin-right:210px;
                img{
                    margin-top:15px;
                    width:230px;
                    height:235px;
                    
                }
            }
            .desc{
                float:left;
                margin-top:128px;
                font-size:20px;
                width:384px;

            }
            .right{
                font-size:20px;
                float:right;
                padding-top:120px;
                .price{
                    margin-left:60px;
                    display:block;
                }
                .num{
                    float:right;
                }
                .all{
                    margin-top:138px;
                }
            }
        }
        .blank{
            height:10px;
            width:100%;
            background:#fff;
            border:3px solid #fdf1e3;
        }
        .orderNum{
            line-height:60px;   
            padding-left:28px;
            height:60px;
            width:100%;
            font-size:20px;
            background:#fff3e3;
            border-bottom:2px solid #fff7e0;
        }
    }
    .compute{
        width:520px;
        height:160px;
        float:right;
        margin-top:60px;
        .detail{
            border:1px solid red;
            .pay{
                margin-left:288px;
                font-size:20px;
                >span{
                    font-size:30px;
                    color:#ff9f2f;
                }
            }
            .To{
                font-size:20px;
                margin-left:30px;
                margin-top:28px;
                >span{
                    color:#9e9e9e;
                }
            }
            .user{
                font-size:20px;
                margin-left:200px;
                margin-bottom:30px;
                >span{
                    color:#9e9e9e;
                }
            }
        }
        .btn{
            float:right;
            font-size:20px;
            .btn-real{
                display:inline-block;
                text-align:center;
                line-height:50px;
                width:240px;
                height:50px;
                margin-left:65px;
                background:#ff9c28;
            }
        }

    }
`
export {
    Container,
    OrderHeader,
    HeaderO,
    AddressD,
    Message
} 