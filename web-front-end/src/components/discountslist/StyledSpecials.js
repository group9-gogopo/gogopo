import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};

  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 240px;
    h1 {
      width: 80px;
      height: 240px;
      line-height: 80px;
      font-size: 60px;
      color: #483f40;
      margin: 10px 0 0 0;
      font-family:  STHupo;
    }

    .info {
      display: flex;
      width: 300px;
      flex-direction: column;
      margin: 20px 0 0 50px;
      font-size: 18px;
      line-height: 36px;
      color: #319a0a;
      // height: 200px;
      // padding-top: 10px;
    }
  }
    .name {
      width: 500px;
      height: 100px;
      font-size: 32px;
      line-height: 40px;
      margin: 10px 0 10px 0;
      font-family:  YouYuan;
      background: #319A0A;
      color: #fff;
      padding: 8px 0 0 10px;
    }

  

  .price {
    width: 480px;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
export {
  Container
}