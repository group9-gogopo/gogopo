import styled from 'styled-components'

const AllComment = styled.div`
    width: 100%;
    overflow:hidden;
    position:relative;
`
const CoTitle=styled.div`
    width: 1300px;
    height: 61px;
    background: #FF861B;
    margin:0 auto;
    text-align:center;
    line-height:61px;
    font-size:22px;
    color:#fff;
    margin-bottom:66px;
`
const CoInfo=styled.div`
    width: 1264px;
    margin:0 auto;
    overflow:hidden;
    margin-bottom:240px;
    border-top:8px solid #fd971b;
    border-bottom:8px solid #fd971b;
    padding-left:36px;
    padding-top:38px;
    .coleft{
        margin-bottom:60px;
        float:left;
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
        .rate{
            margin-top:130px;
            h2{
                font-size: 20px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: #171414;
                margin-bottom:64px;
            }
            p:nth-of-type(1){
                margin-bottom:60px;
            }
            p{
                padding-left:43px;
            }
        }
    }
    .coright{
        float:left;
        margin-left:152px;
        margin-bottom:60px;
        textarea{
            resize:none;
            outline:none;
            padding:10px;
            background:#fff3e3;
            border:none;
            &::-webkit-input-placeholder{transform:translateY(260px);}
        }
        .tip{
            width:388px;
            height:85px;
            background:#fff3e3;
            margin-top:213px;
            margin-left:140px;
            font-size:10px;
            p{
                float:left;
                width:170px;
                font-size:14px;
                text-align:center;
                margin-top:22px;
                margin-left:22px;
            }

        }
    }
        .comment{
           width: 60px;
           height:30px;
           background:#ff9319;
           position:absolute;
           bottom:500px;
           right:350px;
           text-align:center;
           line-height:30px;
           font-size:14px;
           font-weight:600;
        }
`


export {
    AllComment,
    CoTitle,
    CoInfo
}