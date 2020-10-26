import styled from 'styled-components'

import loginbgm from '../../assets/images/loginbgm.png'

const Container = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
`
const InfoWrap = styled.div`
        flex: 1;
        height: 100%;
        background: url(${loginbgm}) no-repeat;
        background-size: 100%;
`

const LoginTabWrap = styled.div`
        width: 4.5rem;
        height: 3.5rem;
        background: transparent #e3e5e7;
        border: 3px solid #8b8b8b;
        border-radius: 0.2rem;
        margin: 0.3rem 0 1rem 5rem;
        display: flex;
        flex-direction: column;
        padding-left: 0.5rem;
        h1 {
          font-size: 0.26rem;
          font-weight: normal;
          width: 100%;
          text-align: center;
          margin: 0.15rem 0  0.3rem 0;
        }
        p {
          font-size: 0.2rem;
          input {
            width: 2.6rem;
            height: 0.34rem;
            border: 0.03rem solid #9d9797;
            border-radius: 0.1rem;
            margin: 0 0 0.15rem 0;
            padding-left: 0.2rem;
            font-size: 0.16rem;
            color: #999999;
          }
        }
        
        h2 {
          font-size: 0.14rem;
          color: #656666;
          margin-left: 2.4rem;
        }
        button {
          width: 3.2rem;
          height: 0.4rem;
          background: #009a44;
          border: 0;
          border-radius: 0.1rem;
          font-size: 0.18rem;
          color: #fff;
          margin-top: 0.2rem;
        }
        > div {
          font-size: 0.14rem;
          color: #050505;
          margin-top: 0.07rem;
          span {
            color: #009a44;
          }
        }
`

export {
    Container,
    InfoWrap,
    LoginTabWrap
}