import styled from 'styled-components'

import loginbgm from '../../assets/images/loginbgm.png'

const Container = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
`
const InfoWrap = styled.div`
        height: 541px;
        background: url(${loginbgm}) no-repeat;
        background-size: 100%;
`

const LoginTabWrap = styled.div`
        width: 400px;
        height: 340px;
        background: transparent #e3e5e7;
        border: 4px solid #8b8b8b;
        border-radius: 6px;
        margin: 35px 0 0 500px;
        display: flex;
        flex-direction: column;
        padding-left: 38px;
        h1 {
          font-size: 20px;
          font-weight: 500;
          width: 100%;
          text-align: center;
          margin: 20px 0 25px 0;
        }
        form {
          p {
            font-size: 16px;
            input {
              width: 250px;
              height: 34px;
              border: 3px solid #9d9797;
              border-radius: 5px;
              margin: 0 0 15px 0;
              padding-left: 0.2rem;
              font-size: 0.16rem;
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
              font-size: 12px;
              color: #656666;
              margin-left: 250px;
              cursor: pointer;
              :hover {
                color: #009a44;
              }
            }
            
          }
          
          button {
            width: 320px;
            height: 40px;
            background: #009a44;
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            line-height: 40px;
            color: #fff;
            margin-top: 15px;
            cursor: pointer;
            outline: none;
          }
        }

        > div {
          font-size: 14px;
          color: #050505;
          margin-top: 10px;
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