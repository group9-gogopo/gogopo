import styled from 'styled-components'

const StoryListStyled = styled.div`
float:left;
min-height:1916px;
margin-left:14px;
    ul{
        li{
            height:165px;
            margin-bottom:62px;
            a{
                >div:first-child{
                    height:165px;
                    width:198px;
                    float:left;
                    background:#ccc;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                >div:last-child{
                    float:left;
                    padding:30px 36px;
                    >p:first-child{
                        font-size:14px;
                        color:#131212;
                        line-height:14px;
                        font-weight:bold;
                        margin-bottom:80px;
                    }
                    >p:last-child{
                        font-size:14px;
                        line-height:14px;
                        color:#131212;
                    }
                }

            }
        }
    }
`
export {
    StoryListStyled
}