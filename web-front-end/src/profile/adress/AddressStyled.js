import styled from 'styled-components'

const AddressStyled=styled.div`
min-height:1217px;
width:1300px;
background-color:#FFFBF6;
    header{
        text-align:center;
        font-size:18px;
        border-bottom:4px solid #FF861B;
        line-height:67px;
        font-weight:R;
    }
    ul{
        padding:133px;
        li{
            height:120px;
            margin-bottom:110px;
            .msgBox{
                display:flex;
                flex-direction:row;
                .title{
                    width:120px;
                    height:120px;
                    background-color:#DDFFF1;
                    border-radius:60px;
                    p{
                        line-height:120px;
                        font-size:18px;
                        text-align:center;
                    }
                }
                .msg{
                    padding-left:83px;
                    padding-top:29px;
                    width:713px;
                    .userMsg{
                        line-height:14px;
                        margin-bottom:20px;
                        .name{
                            font-size:14px;
                            margin-right:94px;
                        }
                        .tel{
                            font-size:14px;
                        }
                    }
                    .adressMsg{
                        line-height:22px;
                        display:flex;
                        flex-direction:row;
                        .bgc{
                            width:39px;
                            height:22px;
                            text-align:center;
                            background-color:#00C775;
                            margin-right:94px;
                            span{
                                font-size:12px;
                                line-height:22px;
                            }
                        }
                        .location{
                            font-size:12px;
                        }
                    }
                }
                .edit{
                    height:120px;
                    display:flex;
                    align-items:center;
                    p{
                        padding-left:51px;
                        border-left:1px solid #535353;
                        line-height:64px;
                        height:65px;
                        font-size:14px;
                    }
                }

            }
        }
    }

`

export {
    AddressStyled
}