import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    height: 138px;
    display: flex;
    flex-direction: row;
    img {
      width: 264px;
      height: 80px;
      margin: 22px 0 0 100px;
    }
  }

  .banner {
    width: 1920px;
    height: 684px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .discountsList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-top: 30px;
    }

    p {
      width: 300px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      background: #329908;
      border-radius: 15px;
      margin-top: 30px;
    }

    .listBox {
      width: 100%;
      display: flex;
      margin-top: 45px;
    }
  }

  .listinfo {
    width: 100%;
    background: pink;
    display: flex;
    flex-direction: row;
  }
`
const DiscountsListWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: row;
    border-bottom: 5px solid #fff;
    background: #f0f0f8;
    padding: 100px 0 35px 0;
    img {
      width: 235px;
      height: 265px;
      margin: 90px 10px 0 90px;
    }
  }
`

export {
  Container,
  DiscountsListWrap
}