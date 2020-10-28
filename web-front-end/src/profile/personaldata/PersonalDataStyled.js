import styled from 'styled-components'

const PersonalDataStyled=styled.div`
background: #FFFBF6;
min-height:430px;
width: 1300px;
    header{
        text-align:center;
        font-size:18px;
        border-bottom:4px solid #FF861B;
        line-height:67px;
        font-weight:R;
    }
    ul{
        margin-top:56px;
        margin-left:66px;
        li{
            margin-bottom: 15px;
            font-size:14px;
            >first-child{
                padding-left:100px
            }
        }
    }
`

export {
    PersonalDataStyled
}