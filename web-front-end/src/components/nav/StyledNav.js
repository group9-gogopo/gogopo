import styled from 'styled-components'
const Nav = styled.div `
    height:80px;
    width:1920px;
    background:#222222;
    ul{
        margin-left:347px;
        li{
            float:left;
            width:176px;
            height:80px;
            font-size: 30px;
            font-family: Adobe Heiti Std;
            font-weight: normal;
            color: #F3F3F3;
            text-align:center;
            line-height:80px;
            cursor: pointer;
            &:hover{       
                background: #009A44;
            }
        }
        li:first-child{
            width:200px;
        }
    }
`

export {
    Nav
}