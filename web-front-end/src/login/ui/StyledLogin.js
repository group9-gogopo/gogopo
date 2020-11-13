import styled from 'styled-components'

import loginbgm from '../../assets/images/loginbgm.png'

const Container = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
`
const InfoWrap = styled.div`
        // padding-top: 23px;
        // height: 100%;
        flex: 1;
        background: url(${loginbgm}) no-repeat;
        background-size: 100%;
        display: flex;
        flex-direction: column;
`

const LoginTabWrap = styled.div`
        width: 880px;
        height: 700px;
        background: transparent #e3e5e7;
        border: 4px solid #8b8b8b;
        border-radius: 6px;
        margin: 35px 0 4% 800px;
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 40px;
          font-weight: 600;
          width: 100%;
          text-align: center;
          margin: 50px 0 25px 0;
        }
        form {
          padding-left: 90px;
          p {
            font-size: 40px;
            input {
              width: 500px;
              height: 80px;
              border: 3px solid #9d9797;
              border-radius: 5px;
              margin: 30px 0 30px 0;
              padding-left: 30px;
              font-size: 32px;
              color: #999999;
              outline: none;
            }
          }
          span {
            width: 300px;
            p{
              font-size: 14px;
              color: #fc0202;
              float: left;
              width: 128px;
              height: 18px;
              visibility: hidden;
            }
            h2 {
              font-size: 28px;
              color: #656666;
              margin: 15px 0 20px 500px;
              cursor: pointer;
              :hover {
                color: #009a44;
              }
            }
          }
          
          button {
            width: 600px;
            height: 60px;
            background: #009a44;
            border: 0;
            border-radius: 5px;
            font-size: 30px;
            line-height: 40px;
            color: #fff;
            margin: 15px 0 0 30px;
            cursor: pointer;
            outline: none;
          }
        }

        > div {
          font-size: 22px;
          color: #050505;
          margin: 35px 0 30px 100px;
          span {
            color: #009a44;
            cursor: pointer;
          }
        }
`

export {
    Container,
    InfoWrap,
    LoginTabWrap
}