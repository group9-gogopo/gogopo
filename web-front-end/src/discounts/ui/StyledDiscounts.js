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

  .nav {
    height: 40px;
    background: skyblue;
  }

  .banner {
    width: 100%;
    height: 454px;
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

  .specialsInfo {
  display: flex;
  flex-direction: row;
  border: 3px solid #fff;
  img {
    width: 235px;
    height: 265px;
    margin: 93px 0 0 200px;
  }
  }
`
const DiscountsListWrap = styled.div`
  li {
    display: flex;
    flex-direction: row;
    border-bottom: 5px solid #fff;
    background: #f0f0f8;
    padding: 100px 0 35px 0;
    img {
      width: 235px;
      height: 265px;
      margin: 93px 0 0 200px;
    }
  }
`

export {
  Container,
  DiscountsListWrap
}