import React, { useCallback, useState } from "react";
import { StyledDetaidRight } from "./StyledDetaidRight";

const GoodsDetailRight = (props) => {
  const [imgNum, setImgNum] = useState(0);
  const [goodsNum,setGoodsNum]=useState(1);

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

  const handlerAddGoods=useCallback(()=>{
    if(goodsNum===10)return
    setGoodsNum(()=>goodsNum+1)
  },[goodsNum])

  const handlerDecGoods=useCallback(()=>{
    if(goodsNum===1)return
    setGoodsNum(()=>goodsNum-1)
  },[goodsNum])
  
  return props.detailList.length > 0 ? (
    <StyledDetaidRight>
      <h3 className="detailText">详细说明</h3>
      <div className="detailBox">
        <div className="detailBoxLeft">
          <div className="boxImgOne">
            <img src={props.detailList[0].detailImages[imgNum]} alt="" />
          </div>
          <div className="boxImgAll">
            <span onClick={handlerAdd}>&lt;</span>
            <ul className="boxImgUl">
              {props.detailList[0].detailImages.slice(0, 3).map((i, n) => {
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
          <h3>{ props.detailList[0].name}</h3>
          <div className="detailPrice">
            <span className="detailPriceLeft">价格</span>
            <span className="detailPriceNum">
              {props.detailList[0].newprice}
            </span>
            <span className="detailPriceRight">元</span>
          </div>
          <div className="detailCount">
            <div className="detailCountBox">累计数量 {props.detailList[0].sale}</div>
            <span>|</span>
            <div className="detailCountBox">累计评价 {props.detailList[0].say}</div>
          </div>
          <div className="detailNum">
            <span className="detailNumL">购买数量</span>
            <div className="detailNumBox">
              <div className="detailNumBoxShow">{goodsNum}</div>
              <div className="detailNumBoxCount">
                <span className="detailNumBoxCountS" onClick={handlerAddGoods}>+</span>
                <span onClick={handlerDecGoods}>-</span>
              </div>
            </div>
            <div className="detailNumR">
              总计 <span>{(props.detailList[0].newprice*goodsNum).toFixed(2)}</span> 元
            </div>
          </div>
          <div className="detailButton">
            <div className="detailBuy">立即购买</div>
            <div className="addShoppingCar">加入购物车</div>
          </div>
        </div>
      </div>
    </StyledDetaidRight>
  ) : (
    ""
  );
};

export default GoodsDetailRight;
