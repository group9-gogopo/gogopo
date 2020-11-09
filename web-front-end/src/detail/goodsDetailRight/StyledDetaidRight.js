import styled from "styled-components";
import detailPriceImg from "@a/images/detailPrice.png";

const StyledDetaidRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  .detailText {
    width: 100%;
    height: 50px;
    font-size: 24px;
    font-weight: 700;
    color: #777;
    border-bottom: 2px solid #ffc514;
  }
  .detailBox {
    width: 100%;
    height: 600px;
    margin-top: 10px;
    display: flex;
    .detailBoxLeft {
      width: 450px;
      height: 100%;
      .boxImgOne {
        width: 440px;
        height: 440px;
        border: 1px solid #ccc;
        img {
          display: block;
          width: 438px;
          height: 438px;
          padding: 15px;
          margin: 0;
        }
      }
      .boxImgAll {
        width: 440px;
        height: 120px;
        display: flex;
        margin-top: 20px;
        align-items: center;
        span {
          display: block;
          width: 22px;
          height: 80px;
          font-size: 20px;
          line-height: 80px;
          cursor: pointer;
          background-color: #ddd;
          border: 1px solid #ccc;
        }
        .boxImgUl {
          flex: 1;
          height: 95%;
          display: flex;
          margin: 0;
          li {
            width: 114px;
            height: 114px;
            margin: 0 10px;

            img {
              display: block;
              margin: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .detailBoxRight {
      flex: 1;
      height: 100%;
      margin-left: 8px;
      h3 {
        width: 96%;
        height: 80px;
        font-size: 22px;
        font-weight: 700;
      }
      .detailPrice {
        width: 96%;
        height: 50px;
        background: url(${detailPriceImg});
        display: flex;
        align-items: center;
        .detailPriceLeft {
          margin-left: 15px;
          font-size: 18px;
          color: #666;
        }
        .detailPriceNum {
          margin-left: 50px;
          font-size: 30px;
          color: #ff0033;
        }
        .detailPriceRight {
          margin-left: 5px;
          font-size: 18px;
          color: #666;
          margin-top: 5px;
        }
      }
    }
    .detailCount {
      width: 96%;
      height: 44px;
      border-bottom: 1px dashed #ccc;
      display: flex;
      align-items: center;
      color: #a6a9af;
      .detailCountBox {
        flex: 1;
        text-align: center;
        font-size: 16px;
      }
    }
    .detailNum {
      width: 96%;
      height: 100px;
      display: flex;
      align-items: center;
      color: #888;
      .detailNumL {
        margin-left: 20px;
        font-size: 18px;
      }
      .detailNumBox {
        width: 90px;
        height: 60px;
        margin: 0 50px 0 40px;
        border: 2px solid #aaa;
        display: flex;
        .detailNumBoxShow {
          width: 63px;
          height: 56px;
          font-size: 24px;
          text-align: center;
          line-height: 56px;
          color: #000;
          border-right: 2px solid #aaa;
        }
        .detailNumBoxCount {
          flex: 1;
          height: 56px;
          display: flex;
          flex-direction: column;
          span {
            display: block;
            flex: 1;
            text-align: center;
            line-height: 27px;
            font-size: 24px;
            color: #000;
            margin: none;
            cursor: pointer;
          }
          .detailNumBoxCountS {
            border-bottom: 2px solid #aaa;
          }
        }
      }
      .detailNumR {
        font-size: 20px;
        span {
          font-size: 30px;
          color: #ff0033;
        }
      }
    }
    .detailButton {
      width: 80%;
      height: 55px;
      display: flex;
      align-items: center;
      .detailBuy {
        width: 40%;
        height: 51px;
        border: 3px solid #ff0033;
        background-color: #fff8ed;
        text-align: center;
        line-height: 40px;
        font-size: 22px;
        color: #ff0033;
        margin-right: 10%;
        cursor: pointer;
      }
      .addShoppingCar {
        width: 40%;
        height: 51px;
        font-size: 22px;
        text-align: center;
        line-height: 46px;
        background-color: #ff0033;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  
`;
export { StyledDetaidRight };
