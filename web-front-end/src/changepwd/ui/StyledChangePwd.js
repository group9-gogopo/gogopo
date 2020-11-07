import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  margin-left: 1px;
  border-top: 2px solid #000;
  background: #fff;
  display: flex;
  flex-direction: column;
  header {
    height: 91px;
    border-bottom: 2px solid #000;
    display: flex;
    flex-direction: row;
    img {
      width: 263px;
      height: 84px;
      margin-left: 26px;
    }
    h1 {
      margin-left: 800px;
      height: 91px;
      line-height: 91px;
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
  padding-top: 15px;
  height: 50px;
  margin-bottom: 30px;
  li {
    width: 120px;
    height: 35px;
    font-size: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    text-align: center;
    line-height: 35px;
  }
  .active{
      background: #009a44;
  }
`

const ConfirmWrap = styled.form`
  flex: 1;
  text-align: center;
  p {
    padding-top: 100px;
    margin-left: 10px;
    display: flex;
    label {
      margin-right: 10px;
      font-size: 20px;
      height: 42px;
      line-height: 42px;
      margin-left: 400px;
    }
    input {
      width: 350px;
      height: 42px;
      border: 2px solid #9d9797;
      border-radius: 2px;
      padding-left: 10px;
      outline: none;
    }
    span {
      width: 120px;
      height: 35px;
      line-height: 35px;
    }
  }
  button {
    width: 131px;
    height: 42px;
    border: 0;
    border-radius: 5px;
    background: #009a44;
    font-size: 16px;
    color: #fff;
    margin-top: 83px;
    cursor:pointer;
    outline: none;
  }
`

const SecurityWrap = styled.form`
  height: 425px;
  text-align: center;
  p {
    padding-top: 50px;
    display: flex;
    margin-left: 300px;
    position: relative;
    label {
      width: 180px;
      height: 46px;
      margin-right: 15px;
      font-size: 18px;
      line-height: 46px;
      text-align: right;
    }
    input {
      width: 400px;
      height: 42px;
      border: 2px solid #9d9797;
      border-radius: 2px;
      padding-left: 10px;
      outline: none;
    }
    span {
      width: 150px;
      height: 35px;
      margin-left: 5px;
      line-height: 35px;
    }
  }
  button {
    width: 131px;
    height: 42px;
    border: 0;
    border-radius: 5px;
    background: #009a44;
    font-size: 16px;
    color: #fff;
    margin-top: 60px;
    cursor:pointer;
    outline: none;
    margin-left: 50px;
  }
`

const ResetWrap = styled.form`
  height: 425px;
  text-align: center;
  h1 {
    font-size: 24px;
    font-weight: normal;
    padding-top: 58px;
  }
  p {
      padding-top: 43px;
      display: flex;
      margin-left: 350px;
      label {
        width: 90px;
        height: 46px;
        margin-right: 10px;
        font-size: 18px;
        line-height: 46px;
        text-align: right;
    }
    input {
      width: 400px;
      height: 42px;
      border: 2px solid #9d9797;
      border-radius: 2px;
      padding-left: 10px;
      outline: none;
    }
    span {
      width: 200px;
      height: 35px;
      margin-left: 5px;
      line-height: 35px;
    }
  }
  button {
    width: 131px;
    height: 42px;
    border: 0;
    border-radius: 5px;
    background: #009a44;
    font-size: 16px;
    color: #fff;
    margin-top: 60px;
    cursor:pointer;
    outline: none;
    margin-left: 50px;
  }
`
const AccomplishWrap = styled.form`
  height: 425px;
  text-align: center;
  p {
    font-size: 30px;
    padding-top: 100px;
  }
  button {
    width: 120px;
    height: 40px;
    border: 0;
    border-radius: 6px;
    background: #009a44;
    font-size: 20px;
    color: #fff;
    margin-top: 200px;
    cursor:pointer;
    outline: none;
    margin-left: 50px;
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