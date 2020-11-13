import styled from 'styled-components'

const StyledModal = styled.div`
    width:860px;
    height:540px;
    background:#b5b5b5;
    border:1px solid #000;
    margin:auto;
    padding-top:10px;
    .Container{
        width:840px;
        height:520px;
        border:1px solid #000;
        background:#fff;
        margin:auto;
        font-size:16px;
        input{
            width:336px;
            min-height:40px;
            border-radius:2px;
            border:1px solid #000;
        }
        select{
            min-height:30px;
            border-radius:2px;
        }
        .defaultAd{
            width:16px;
            height:16px;
            display:block;
            float:left;
        }
        .head{
            width:100%;
            height:36px;
            font-size:16px;
            line-height:36px;
            padding:0 10px;
            background:#e6e6e6;
            .delete{
                display:block;
                float:right;
                color:#000;
            }
        }
        .address-real{
            width:500px;
            background:#fff;
            margin:0 auto;
            margin-top:8px;
            overflow:hidden;
            zoom:1;
            .new{
                color:#ff8d67;
                
            }
            .changeArea{
                width:424px;
                height:30px;
                color:#b4b4b4;
                line-height:30px;
                padding-left:10px;
                background:#f2f2f2;
                margin-left:18px;
                >span{
                    color:#000;
                    margin-left:10px;
                }
                .tab{
                    display:block;
                    float:right;
                }
            }
            .selectAddress{
                margin:18px;
                >span{
                    color:#ffbbc6;
                }
                .chooseCity{
                    width:336px;
                }
            }
            .detailAddress{
                margin:18px;
                >span{
                    color:#ffbbc6;
                }
            }
            .youbian{
                margin:18px;
                margin-left:25px;
            }
            .userName{
                margin:18px;
                margin-left:5px;
                >span{
                    color:#ffbbc6;
                }
            }
            .phoneNum{
                margin:18px;
                >span{
                    color:#ffbbc6;
                }
                .Num{
                    width:200px;
                    margin-left:10px;
                }
            }
            .default{
                margin:18px 0 0 104px;
                height:30px;
                line-height:30px;
                .state{
                    display:block;
                    float:left;
                    width:16px;
                    height:16px;
                }
                >div{
                    float:left;
                    margin-left:20px;
                }   
            }
            .save{
                    width:50px;
                    height:28px;
                    background:#5a8eff;
                    margin:18px 0 0 104px;
                }
        }
    }


`

export {
    StyledModal
}