import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  background: #fff;
  header {
    height: 0.9rem;
    border-bottom: 2px solid #000;
    display: flex;
    flex-direction: row;
    img {
      width: 2.63rem;
      height: 0.84rem;
      margin-left: 0.5rem;
    }
    h1 {
      font-size: 0.16rem;
      font-weight: 500;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 0.5rem;
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
  flex: 1;
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0.41rem;
    &: nth-of-type(1) {
      position: relative;
      svg {
        visibility: hidden;
      }
    }
    
    &: nth-of-type(2) {
      margin-top: 0;
      position: relative;
    }
    &: nth-of-type(5) {
      margin-top: 0;
    }
    svg {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      top: 0.02rem;
      right: 3.85rem;
      margin-left: 0.1rem;
    }
    .forCode {
      width: 1.3rem;
      height: 0.32rem;
      padding-left: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.32rem;
      border-radius: 0.05rem;
      background: #bdbbbc;
      position: absolute;
      top: 0.04rem;
      left: 8.6rem;
    }
    
  }
  label {
    width: 1rem;
    display: flex;
    justify-content: flex-end;
    font-size: 0.2rem;
    margin-right: 0.16rem;
    color: #070707;
  }
  h2 {
    font-size: 0.16rem;
    color: #f90504;
    line-height: 0.4rem;
    font-weight: normal;
    margin-left: -0.75rem;
    text-align: center;
    height: 0.4rem;
    visibility: hidden;
  }
  input {
    width: 3rem;
    height: 0.35rem;
    border: 2px solid #9d9797;
    padding-left: 0.15rem;
  }
  .tips {
    margin: 0.17rem 0 0.3rem 5.5rem;
    display: flex;
    flex-direction: row;
    height: 0.125rem;
    h3 {
      width: 0.5rem;
      height: 0.25rem;
      backgroundcolor: skyblue;
      font-size: 0.14rem;
      font-weight: normal;
      border: 1.5px solid #000;
      border-radius: 0.05rem;
      text-align: center;
      margin-right: 0.16rem;
    }
  }
  button {
    width: 3rem;
    height: 0.37rem;
    margin-left: 5.45rem;
    background: #009a44;
    border: 0;
    border-radius: 0.05rem;
    margin-top: 0.2rem;
  }
`

export {
  Container,
  FormWrap
}