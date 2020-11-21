import React, { Component } from "react";
import { OrderListInfo } from "./StyledAllOrder";
import { get } from "@u/http";

class OrderList extends Component {
  state = {
    orderList: [],
  };
  async componentDidMount() {
    let resule = await get("http://localhost:4400/api/searchorderinfo", {
      userId: 1,
    });
    let arr = [];
    resule.searchOrderInfo.map((item) => {
      item.orderContent = decodeURIComponent(item.orderContent);
      arr.push(item);
    });
    this.setState({
      orderList: arr,
    });
  }
  render() {
    console.log(this.state.orderList);
    return (
      <>
        {this.state.orderList.length > 0
          ? this.state.orderList.map((i) => {
              return (
                <OrderListInfo key={i.id}>
                  <div className="top">
                    <div className="first">
                      <p>下单时间：{i.orderTime}</p>
                      <p>{i.isEvaluate?"已评价":"未评价"}</p>
                    </div>

                    <div className="second">
                      <div>
                        <img src="http://placehold.it/" alt="" />
                      </div>
                      <div>
                        产品描述产品描述产品描述产品描述产品描述产品描述产品描述
                      </div>
                      <div>
                        <p>￥ 200.00</p>
                        <p>X2</p>
                      </div>
                    </div>

                    <div className="third">
                      <span>共2件商品</span>
                      <span>合计 ￥200.00</span>
                    </div>
                  </div>

                  <div className="bottom">
                    <p>订单号：{i.orderNumber}</p>
                    <p
                      onClick={this.props.handleOnGoToComments(
                        this.state.time,
                        this.state.img
                      )}
                    >
                      评价
                    </p>
                  </div>
                </OrderListInfo>
              );
            })
          : ""}
      </>
    );
  }
}

export default OrderList;
