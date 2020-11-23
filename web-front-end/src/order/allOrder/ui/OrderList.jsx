import React, { Component } from "react";
import { OrderListInfo } from "./StyledAllOrder";
import { connect } from "react-redux";
import {loadDataAsync } from "../actionCreator"
import { withRouter } from "react-router-dom";

@connect(state=>{
  return{
    orderList:state.order.orderList
  }
},
dispatch=>{
  return{
    loadData(userid){
      dispatch(loadDataAsync(userid))
    }
  }
})
@withRouter
class OrderList extends Component {
  async componentDidMount() {
    let userid=sessionStorage.getItem("userId")
    if(!userid)this.props.history.push("login")
    this.props.loadData(userid)
  }
  render() {
    return (
      <>
        {this.props.orderList.length > 0
          ? this.props.orderList.map((i) => {
              return (
                <OrderListInfo key={i.id}>
                  <div className="top">
                    <div className="first">
                      <p>下单时间：{i.orderTime}</p>
                      <p>{i.evaluateContent ? "已评价" : "未评价"}</p>
                    </div>
                    {i.orderContent.map((j) => {
                      return (
                        <div className="second" key={j.id + j.goodsid}>
                          <div>
                            <img src={j.shoppingCartImage} alt="" />
                          </div>
                          <div>{j.shoppingCartName}</div>
                          <div>
                            <p>￥ {j.shoppingCartPrice} </p>
                            <p>X{j.shoppingCartNum}</p>
                          </div>
                        </div>
                      );
                    })}
                    <div className="third">
                      <span>共{i.orderContent.length}件商品</span>
                      <span>
                        合计 ￥{i.orderContent.reduce((value, v) => {
                          return value=value+v.shoppingCartNum*v.shoppingCartPrice
                        }, 0)}
                      </span>
                    </div>
                  </div>

                  <div className="bottom">
                    <p>订单号：{i.orderNumber}</p>
                    <p
                      onClick={this.props.handleOnGoToComments(
                        i.orderTime,
                        i.orderContent[0].shoppingCartImage,
                        i.evaluateContent,
                        i.id
                      )}
                    >
                      {i.evaluateContent?"查看评价":"评价"}
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
