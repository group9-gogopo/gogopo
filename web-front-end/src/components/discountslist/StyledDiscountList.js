import styled from 'styled-components'

import namebgm from '../../assets/images/namebgm.png'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-evenly;
  li {
    position: relative;
    .imgBox {
      width: 300px;
      height: 300px;
      border-radius: 155px;
      border: 3px dashed #329908;
      img {
        width: 290px;
        height: 290px;
        border-radius: 150px;
      }
    }
    .price {
      position: absolute;
      top: 215px;
      left: -40px;
      display: flex;
      flex-direction: row;
      height: 34px;
      line-height: 34px;
      align-items: baseline;
      .oldPrice {
        font-size: 14px;
        color: #848384;
        text-decoration:line-through;
      };
      .newPrice {
        font-size: 15px;
        color: #e30a32;
        span {
          font-size: 34px;
        }
      }
    }
    
    button {
      position: absolute;
      top: 250px;
      left: -60px;
      width: 130px;
      height: 26px;
      background: #e30a32;
      text-align: center;
      border: 0;
      font-size: 16px;
      color: #fff;
      outline: none;
      cursor: pointer;
    }
    
    .name {
      text-align: center;
      width: 320px;
      height: 90px;
      font-size: 24px;
      color: #fff;
      background: url(${namebgm}) -45px 3px;
      line-height: 80px;
      text-align: center;
      margin-top: 10px;
    }
  }
    
`
export {
  Container
}