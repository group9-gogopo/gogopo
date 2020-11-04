import styled from 'styled-components'

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: ${props => props.margin};

  .header {
    display: flex;
    height: 240px;
    .trait {
      margin-left: 80px;
    }
    p {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background: #319a0a;
      color: #fff;
      font-size: 44px;
      line-height: 100px;
      text-align: center;
      margin-bottom: 20px;
      font-family: YouYuan;
    }
    .sort {
      width: 380px;
      height: 136px;
      line-height:136px;
      font-size: 100px;
      color: #483f40;
      margin: 65px 0 0 100px;
      font-family:  STHupo;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    h2 {
      width: 200px;
      height: 24px;
      color: #3c3636;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 20px;
    }
    h3 {
      width: 240px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      font-size: 22px;
      color: #fff;
      background: #fdaf06;
    }
  }

  .tit {
    width: 480px;
    height: 100px;
    background: #319a0a;
    font-size: 70px;
    color: #fff;
    line-height: 100px;
    text-align: center;
    margin-top: 20px;
    font-family: MFYueHei_Noncommercial-Regular;
  }

  .price {
    width: 480px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 30px;
    align-items: flex-end;
    h1 {
      width: 93px;
      height: 32px;
      background: #e22e3e;
      color: #fff;
      text-align: center;
      font-size: 23px;
    }
    h2 {
      font-size: 25px;
      color: #e22e3e;
      height: 55px;
      line-height: 55px;
      margin-left: 30px;
      margin-top: 20px;
      span {
        font-size: 55px;
      }
    }
    .box {
      width: 80px;
      height: 80px;
      background: #e22e3e;
      padding: 5px;
      margin-left: 50px;
      button {
        width: 70px;
        height: 70px;
        background: #e22e3e;
        border: 0;
        outline: 0;
        cursor: pointer;
        border: 1px solid #fff;
        font-size: 16px;
        color: #fff;
      }
    }
  }
`
const ContainerThree = styled.div`
  background: #319a0a;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  li {
    width: 430px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 20px;
      width: 300px;
      height: 225px;
    }
    h1 {
      font-size: 20px;
      font-family: MFYueHei_Noncommercial-Regular;
      color: #fff;
      margin-top: 8px;
    }
    .info {
      display: flex;
      flex-direction: row;
      font-size: 14px;
      font-weight: 600;
      span {
        margin-right: 20px;
      }
    }
    .price {
      display: flex;
      flex-direction: row;
      margin-top: 15px;
      align-items: flex-end;
      justify-content: center;
      .newprice {
        font-size: 15px;
        color: #fd0038;
        span {
          font-size: 30px;
          height: 30px;
          line-height: 30px;
        }
      }
      .oldprice {
        font-size: 13px;
        color: #fff;
        text-decoration:line-through;
        margin: 0 20px 0 10px;
      }
      .btn {
        width: 100px;
        height: 30px;
        background: #fd0038;
        text-align: center;
        color: #fff;
        line-height: 30px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`
export {
  ContainerTwo,
  ContainerThree
}