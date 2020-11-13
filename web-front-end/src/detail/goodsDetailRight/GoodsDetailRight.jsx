import React, { useCallback, useState } from "react";
import { StyledDetaidRight } from "./StyledDetaidRight";
import { useHistory } from "react-router-dom";
import {post} from "@u/http"

const GoodsDetailRight = (props) => {

  const [imgNum, setImgNum] = useState(0);
  const [goodsNum, setGoodsNum] = useState(1);
  
  const history = useHistory();

  const handlerImgClick = useCallback((imgNumC) => {
    return () => {
      setImgNum(() => imgNumC);
    };
  }, []);

  const handlerAdd = useCallback(() => {
    if (imgNum === 0) return;
    setImgNum(() => imgNum - 1);
  }, [imgNum]);

  const handlerDec = useCallback(() => {
    if (imgNum === 2) return;
    setImgNum(() => imgNum + 1);
  }, [imgNum]);

  const handlerAddGoods = useCallback(() => {
    if (goodsNum === 10) return;
    setGoodsNum(() => goodsNum + 1);
  }, [goodsNum]);

  const handlerDecGoods = useCallback(() => {
    if (goodsNum === 1) return;
    setGoodsNum(() => goodsNum - 1);
  }, [goodsNum]);

  const handlerCommit = useCallback(async(e) => {
    let {
      id: goodsid,
      name: shoppingCartName,
      image: shoppingCartImage,
      newprice: shoppingCartPrice,
    } = props.detailList;
    let shoppingCartNum=goodsNum;
    let data={
      userid:1,
      goodsid,
      shoppingCartName,
      shoppingCartImage,
      shoppingCartPrice,
      shoppingCartNum,
    }
    console.log(data);
    if(e.target.className==="detailBuy"){
      let res =await post("http://localhost:4400/api/shoppingCartsIns",data)
      if(!res)return  alert("不好意思，添加购物车失败")
     
      history.push("/shoppingCart");
    }else{
     let res= await post("http://localhost:4400/api/shoppingCartsIns",data)

     if(res)return alert("成功添加到购物车")
     alert("不好意思，添加购物车失败")
    }
  });

  return props.detailList ? (
    <StyledDetaidRight>
      <h3 className="detailText">详细说明</h3>
      <div className="detailBox">
        <div className="detailBoxLeft">
          <div className="boxImgOne">
            <img src={props.detailList.detailImages[imgNum]} alt="" />
          </div>
          <div className="boxImgAll">
            <span onClick={handlerAdd}>&lt;</span>
            <ul className="boxImgUl">
              {props.detailList.detailImages.slice(0, 3).map((i, n) => {
                return (
                  <li key={n} className={imgNum === n ? "active" : ""}>
                    <img src={i} alt="" onClick={handlerImgClick(n)} />
                  </li>
                );
              })}
            </ul>
            <span onClick={handlerDec}>&gt;</span>
          </div>
        </div>
        <div className="detailBoxRight">
          <h3>{props.detailList.name}</h3>
          <div className="detailPrice">
            <span className="detailPriceLeft">价格</span>
            <span className="detailPriceNum">
              {props.detailList.newprice}
            </span>
            <span className="detailPriceRight">元</span>
          </div>
          <div className="detailCount">
            <div className="detailCountBox">
              累计数量 {props.detailList.sale}
            </div>
            <span>|</span>
            <div className="detailCountBox">
              累计评价 {props.detailList.say}
            </div>
          </div>
          <div className="detailNum">
            <span className="detailNumL">购买数量</span>
            <div className="detailNumBox">
              <div className="detailNumBoxShow">{goodsNum}</div>
              <div className="detailNumBoxCount">
                <span className="detailNumBoxCountS" onClick={handlerAddGoods}>
                  +
                </span>
                <span onClick={handlerDecGoods}>-</span>
              </div>
            </div>
            <div className="detailNumR">
              总计{" "}
              <span>
                {(props.detailList.newprice * goodsNum).toFixed(2)}
              </span>{" "}
              元
            </div>
          </div>
          <div className="detailButton">
            <div className="detailBuy" onClick={handlerCommit}>
              立即购买
            </div>
            <div className="addShoppingCar" onClick={handlerCommit}>加入购物车</div>
          </div>
        </div>
      </div>
    </StyledDetaidRight>
  ) : (
    ""
  );
};

export default GoodsDetailRight;
