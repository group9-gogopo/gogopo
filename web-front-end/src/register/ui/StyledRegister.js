import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-bottom: 0;
  background: #fff;
  header {
    height: 120px;
    border-bottom: 2px solid #000;
    display: flex;
    flex-direction: row;
    img {
      width: 263px;
      height: 84px;
      margin-left: 26px;
    }
    h1 {
      font-size: 22px;
      font-weight: 500;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 82px;
      span {
        margin-left: 0.1rem;
        &:hover {
          color: #009947;
        }
      }
    }
  }
`

const FormWrap = styled.form`
  height: 100%;
  p {
    display: flex;
    flex-direction: row;
    margin: 60px 0 0 550px;
    &: nth-of-type(1) {
      position: relative;
    }
    
    &: nth-of-type(2) {
      margin-top: 0;
      position: relative;
    }
    &: nth-of-type(5) {
      // margin-top: 0;
    }
    span {
      width: 200px;
      height: 50px;
      line-height: 30px;
      font-size: 25px;
      margin-left: 20px;
      line-height: 35px;
    }
    svg {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 340px;
      visibility: hidden;
    }
    #forCode {
      width: 104px;
      height: 34px;
      padding-left: 5px;
      font-size: 14px;
      line-height: 34px;
      border-radius: 5px;
      border: 3px solid #7d7d7d;
      background: #bdbbbc;
      position: absolute;
      top: 2px;
      left: 530px;
      visibility: hidden;
      cursor:pointer;
    }
  }

  label {
    width: 120px;
    height: 52px;
    line-height: 52px;
    display: flex;
    justify-content: flex-end;
    font-size: 28px;
    margin-right: 20px;
    color: #070707;
  }
  h2 {
    height: 30px;
    font-size: 16px;
    color: #f90504;
    line-height: 30px;
    font-weight: normal;
    margin-left: 470px;;
    visibility: hidden;
  }
  input {
    width: 500px;
    height: 52px;
    border: 2px solid #9d9797;
    padding-left: 15px;
    font-size: 18px;
    outline: none;
  }
  
  button {
    width: 635px;
    height: 50px;
    font-size: 20px;
    background: #009a44;
    border: 0;
    border-radius: 5px;
    margin: 30px 0 25px 550px;
    cursor:pointer;
    outline: none;
  }

  .tips {
    height: 22px;
    margin: 20px 0 10px 690px;
    display: flex;
    flex-direction: row;
    h3 {
      width: 50px;
      height: 30px;
      line-height: 25px;
      font-size: 18px;
      font-weight: normal;
      border: 2px solid #000;
      border-radius: 5px;
      text-align: center;
      margin-right: 16px;
    }
  }
`

export {
  Container,
  FormWrap
}