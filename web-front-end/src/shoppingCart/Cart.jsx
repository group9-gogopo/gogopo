import React, { Component } from "react";
import { Container } from "./Header/StyleHeader";
import ContentIndex from "./Content/ContentIndex";
import { connect } from "react-redux";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import {
  loadDataAsync,
  checkShopNumber,
  operationAllShop,
} from "./actionCreators";

import {patch} from "@u/http"

@connect(
  (state) => {
    return {
      list: state.shoppingCart.list,
      selectList:state.shoppingCart.selectList
    };
  },
  (dispatch) => ({
    loadData(userid) {
      dispatch(loadDataAsync(userid));
    },
    handSelectClick(id) {
      dispatch(checkShopNumber(id));
    },
    selectStatus(selectStatus) {
      dispatch(operationAllShop(selectStatus));
    },
  })
)
class Cart extends Component {
   handleAddClick=async (cartid,oldShoppingCartNum,userid)=> {
      let shoppingCartNum=oldShoppingCartNum+1
    let res=await patch("/api/shoppingcartsupdate",{
    cartid,
    shoppingCartNum
   })
   if(!res.updateShoopingCart.ret) return alert("系统出错了，稍等一下哦~~")
   this.props.loadData(userid)
  }
  handleDescClick=async(cartid,oldShoppingCartNum,userid)=> {
    if(oldShoppingCartNum<2)return
    let shoppingCartNum=oldShoppingCartNum-1
    let res=await patch("/api/shoppingcartsupdate",{
    cartid,
    shoppingCartNum
   })
   if(!res.updateShoopingCart.ret) return alert("系统出错了，稍等一下哦~~")
   this.props.loadData(userid)
  }
  render() {
      console.log(this.props.selectList);
    return (
      <Container>
        <Header></Header>
        <Nav></Nav>
        <ContentIndex
          data={this.props.list}
          handleAddClick={this.handleAddClick}
          handleDescClick={this.handleDescClick}
          handleDelete={this.props.handleDelete}
          handSelectClick={this.props.handSelectClick}
          selectStatus={this.props.selectStatus}
        ></ContentIndex>
        <Footer
          totalPrice={this.props.totalPrice}
          totalNum={this.props.totalNum}
        ></Footer>
      </Container>
    );
  }

  componentDidMount() {
    let userid = 1;
    this.props.loadData(userid);
  }
}

export default Cart;
