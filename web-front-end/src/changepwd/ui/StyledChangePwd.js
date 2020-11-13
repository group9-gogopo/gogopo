import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  border-top: 2px solid #000;
  background: #fff;
  display: flex;
  flex-direction: column;
  header {
    height: 91px;
    border-bottom: 2px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 263px;
      height: 84px;
      margin-left: 100px;
    }
    h1 {
      margin-right: 150px;
      height: 91px;
      line-height: 91px;
      font-size: 20px;
      span {
        color: #009a44;
        cursor:pointer;
      }
    }
`

const NavWrap = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 35px;
  height: 50px;
  margin-bottom: 30px;
  li {
    width: 300px;
    height: 50px;
    font-size: 26px;
    border: 2px solid #000;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
  }
  .active{
      background: #009a44;
  }
`

const ConfirmWrap = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 550px;
  p {
    margin-top: 150px;
    display: flex;
    label {
      margin-right: 20px;
      font-size: 26px;
      height: 60px;
      line-height: 60px;
    }
    input {
      width: 480px;
      height: 60px;
      border: 2px solid #9d9797;
      border-radius: 2px;
      padding-left: 20px;
      outline: none;
      font-size: 22px;
    }
    span {
      width: 150px;
      height: 60px;
      font-size: 20px;
      line-height: 60px;
      margin-left: 20px;
    }
  }
  button {
    width: 200px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background: #009a44;
    font-size: 22px;
    color: #fff;
    margin: 200px 0 0 240px;
    cursor:pointer;
    outline: none;
  }
`

const SecurityWrap = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 550px;
  p {
    margin-top: 150px;
    display: flex;
    &: nth-of-type(3) {
      margin: 80px 0 0 140px;
    }
    label {
      width: 210px;
      height: 60px;
      margin-right: 20px;
      font-size: 26px;
      line-height: 60px;
      text-align: right;
    }
    input {
      width: 480px;
      height: 60px;
      border: 2px solid #9d9797;
      border-radius: 2px;
      padding-left: 10px;
      outline: none;
      padding-left: 20px;
      font-size: 22px;
    }
    span {
      width: 180px;
      height: 60px;
      font-size: 20px;
      line-height: 60px;
      margin-left: 20px;
    }
  }
  button {
    width: 200px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background: #009a44;
    font-size: 22px;
    color: #fff;
    cursor:pointer;
    outline: none;
    margin-right: 60px;
  }
`

const ResetWrap = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 550px;
  h1 {
    font-size: 28px;
    font-weight: 500;
    padding-top: 58px;
    margin-left: 350px;
  }
  p {
      padding-top: 60px;
      display: flex;
      &: nth-of-type(3) {
        margin: 40px 0 0 140px;
      }
      label {
        width: 210px;
        height: 60px;
        margin-right: 20px;
        font-size: 26px;
        line-height: 60px;
        text-align: right;
    }
    input {
      width: 480px;
      height: 60px;
      border: 2px solid #9d9797;
      border-radius: 2px;
      padding-left: 20px;
      outline: none;
      font-size: 22px;
    }
    span {
      width: 240px;
      height: 60px;
      font-size: 20px;
      line-height: 60px;
      margin-left: 20px;
    }
  }
  button {
    width: 200px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background: #009a44;
    font-size: 22px;
    color: #fff;
    margin-top: 60px;
    cursor:pointer;
    outline: none;
    margin-right: 60px;
  }
`
const AccomplishWrap = styled.form`
  flex: 1;
  disflex: flex;
  flex-direcion: column;
  margin-left: 700px;
  p {
    margin-top: 160px;
    display: flex;
    flex-direction: row;
    &: nth-of-type(1) {
      margin: 100px 0 0 50px;
    }
    svg {
      width: 120px;
      height: 120px;
      path {
        fill: #319a0a;
      }
    }
    span {
      height: 120px;
      line-height: 120px;
      font-size: 32px;
      font-size: 600;
      padding-left: 40px;
    }
    button {
      width: 200px;
      height: 50px;
      border: 0;
      border-radius: 6px;
      background: #009a44;
      font-size: 22px;
      color: #fff;
      cursor:pointer;
      outline: none;
      margin-right: 60px;
    }
  }
  
`
export {
  Container,
  NavWrap,
  ConfirmWrap,
  SecurityWrap,
  ResetWrap,
  AccomplishWrap
}