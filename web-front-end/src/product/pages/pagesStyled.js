import styled from 'styled-components'

const PagesStyled=styled.div`
/* display:block; */
min-height:30px;
width:988px;
text-align:center;
margin-bottom:10px;
    div{
        display:inline-block;
        line-height:28px;
        font-size:14px;
        text-align:center;
        border:1px solid #ccc;
        height:28px;
        padding:0 10px;
        margin-right:5px;
        a{
            color:#000;
        }
    }
    ul{
        display:inline-block;
        li{
            display:inline-block;
            line-height:28px;
            font-size:14px;
            text-align:center;
            border:1px solid #ccc;
            height:28px;
            padding:0 10px;
            margin-right:5px;
            a{
                color:#000;
            }
        }
        .active{
            color:#0a9e4b;
            background-color:#eeeeee;
        }
    }
    >div:last-child{
        min-width:0px;
    }
    
`

export {
    PagesStyled
}