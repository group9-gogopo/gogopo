import styled from 'styled-components'

const DetailStyled=styled.div`
float:left;
margin-left:20px;
    >div:first-child{
        width:974px;
        height:45px;
        background-color:#FFC514;
        margin-bottom:24px;
        padding-left:14px;
        p{
            font-size:24px;
            font-weight:bold;
            line-height:45px;
        }
    }
    .imagebox{
        width:790px;
        height:500px;
        padding:10px 15px;
        margin-bottom:40px;
        background-color:#000;
        >div:first-child{
            float:left;
            margin-right:15px;
            img{
                height:160px;
                width:253px;
                margin-bottom:10px;
                background-color:white;
                display:block;
            }
            >img:last-child{
                margin-bottom:0;
            }
        }
        >div:last-child{
            >img:first-child{
                width:521px;
                height:330px;
                margin-bottom:10px;
                margin-right:0;
            }
            img{
                height:160px;
                width:253px;
                background-color:white;
                margin-right:15px;
            }
            >img:last-child{
                margin-right:0;
            }
        }
    }
    >div:last-child{
        height:1930px;
        width:820px;
        background-color:pink;
        p{
            height:400px;
            background-color:hotpink;
        }
    }
`

export { DetailStyled } 