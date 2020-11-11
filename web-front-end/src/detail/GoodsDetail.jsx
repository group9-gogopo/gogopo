import React ,{ useEffect }from "react";
import { useDispatch ,useSelector} from "react-redux"

import GoodsDetailLeft from "./goodsDetailLeft/GoodsDetailLeft";
import GoodsDetailRight from "./goodsDetailRight/GoodsDetailRight";
import Header from "@c/header/Header";
import Nav from "@c/nav/Nav";
import Footer from "@c/footer/Footer"
import {StyledGoodsDetail} from "./StyledGoodsDetail"
import DetaliBottom from "./detailBottom/DetaliBottom"

import { detailLoadDataAsync}  from "./actionCreater"

const GoodsDetail = (props) => {
  const goodsID=props.location.state?props.location.state.id :1001;
  let detailList=useSelector((state)=>state.detail.list)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(detailLoadDataAsync( goodsID ))
  },[dispatch])

  return (
    <>
        <Header></Header>
        <Nav></Nav>
      <StyledGoodsDetail>
        <GoodsDetailLeft></GoodsDetailLeft>
        <GoodsDetailRight detailList={detailList}></GoodsDetailRight>
      </StyledGoodsDetail>
      <DetaliBottom detailList={detailList}></DetaliBottom>
      <Footer></Footer> 
    </>
  );
};

export default GoodsDetail;
