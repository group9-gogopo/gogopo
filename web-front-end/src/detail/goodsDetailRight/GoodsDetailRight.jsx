import React, { Component } from "react";
import { StyledDetaidRight } from "./StyledDetaidRight";

class GoodsDetailRight extends Component {
  render() {
    return (
      <StyledDetaidRight>
        <h3 className="detailText">详细说明</h3>
        <div className="detailBox">
          <div className="detailBoxLeft">
            <div className="boxImgOne">
              <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327966934,1896767157&fm=26&gp=0.jpg"
                alt=""
              />
            </div>
            <div className="boxImgAll">
              <span>&lt;</span>
              <ul className="boxImgUl">
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327966934,1896767157&fm=26&gp=0.jpg"
                    alt=""
                  />{" "}
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327966934,1896767157&fm=26&gp=0.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1327966934,1896767157&fm=26&gp=0.jpg"
                    alt=""
                  />
                </li>
              </ul>
              <span>&gt;</span>
            </div>
          </div>
          <div className="detailBoxRight">
            <h3>百香果真好吃，檀旭吃了爱开心，二飞吃了哈哈笑，哈哈笑</h3>
            <div className="detailPrice">
              <span className="detailPriceLeft">价格</span>
              <span className="detailPriceNum">31.00</span>
              <span className="detailPriceRight">元</span>
            </div>
            <div className="detailCount">
            <div className="detailCountBox">累计数量 0</div>
            <span>|</span>
            <div className="detailCountBox">累计评价 0</div>
            </div>
            <div className="detailNum">
              <span className="detailNumL">购买数量</span>
              <div className="detailNumBox">
                <div className="detailNumBoxShow">1</div>
                <div className="detailNumBoxCount">
                  <span className="detailNumBoxCountS">+</span>
                  <span>-</span>
                </div>
              </div>
              <div className="detailNumR">
                总计 <span>32.00</span> 元
              </div>
            </div>
            <div className="detailButton">
              <div className="detailBuy">立即购买</div>
              <div className="addShoppingCar">加入购物车</div>
            </div>
          </div>
        </div>
        
      </StyledDetaidRight>
    );
  }
}

export default GoodsDetailRight;
