import React from "react";
import GoodsDetailLeft from "./goodsDetailLeft/GoodsDetailLeft";
import GoodsDetailRight from "./goodsDetailRight/GoodsDetailRight";
import Header from "@c/header/Header";
import Nav from "@c/nav/Nav";
import Footer from "@c/footer/Footer"
import {StyledGoodsDetail} from "./StyledGoodsDetail"
import DetaliBottom from "./detailBottom/DetaliBottom"

const GoodsDetail = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
      <StyledGoodsDetail>
        <GoodsDetailLeft></GoodsDetailLeft>
        <GoodsDetailRight></GoodsDetailRight>
      </StyledGoodsDetail>
      <DetaliBottom></DetaliBottom>
      <Footer></Footer>
    </>
  );
};

export default GoodsDetail;
